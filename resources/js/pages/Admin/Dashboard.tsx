import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';

interface Tenant {
    id: number;
    userName: string;
    companyName: string;
    phoneNumber: string;
    email: string;
    domainName: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

const handleLogout = () => {
    router.post('/admin/logout');
};

const Dashboard = () => {
    const { tenants, filters } = usePage().props as unknown as {
        tenants: {
            data: Tenant[];
            current_page: number;
            last_page: number;
            links: PaginationLink[];
        };
        filters: {
            search: string;
        };
    };

    const [search, setSearch] = useState(filters.search || '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get('/tenants', { search }, { preserveState: true });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-100 p-8 text-white">
            <div className="mx-auto max-w-6xl">
                <h1 className="mb-4 text-4xl font-bold">Admin Dashboard</h1>

                <nav className="bg-gray-800 py-4">
                    <div className="container mx-auto flex justify-center">
                        <ul className="flex space-x-8">
                            <li>
                                <a href="/project" className="text-lg font-medium text-white hover:text-indigo-400">
                                    Project
                                </a>
                            </li>
                            <li>
                                <a href="/members" className="text-lg font-medium text-white hover:text-indigo-400">
                                    Members
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="mt-6">
                    <button onClick={handleLogout} className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700">
                        Logout
                    </button>
                </div>

                <form onSubmit={handleSearch} className="my-4">
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        className="w-full max-w-sm rounded border border-gray-300 px-4 py-2 text-black outline-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>

                <div className="overflow-x-auto rounded shadow">
                    <table className="min-w-full divide-y divide-gray-200 bg-white text-black">
                        <thead className="bg-[#2baa8d] text-white">
                            <tr>
                                <th className="px-4 py-2 text-center">Name</th>
                                <th className="px-4 py-2 text-center">Company</th>
                                <th className="px-4 py-2 text-center">Phone</th>
                                <th className="px-4 py-2 text-center">Email</th>
                                <th className="px-4 py-2 text-center">Domain</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {tenants.data.length > 0 ? (
                                tenants.data.map((t) => (
                                    <tr key={t.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-2 text-center">{t.userName}</td>
                                        <td className="px-4 py-2 text-center">{t.companyName}</td>
                                        <td className="px-4 py-2 text-center">{t.phoneNumber}</td>
                                        <td className="px-4 py-2 text-center">{t.email}</td>
                                        <td className="px-4 py-2 text-center">{t.domainName}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-4 py-4 text-center text-gray-500">
                                        No tenants found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {tenants.links.map((link, i) => (
                        <button
                            key={i}
                            onClick={() => link.url && router.get(link.url)}
                            disabled={!link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`rounded px-3 py-1 text-sm ${link.active ? 'bg-[#2baa8d] text-white' : 'bg-white text-gray-700'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
