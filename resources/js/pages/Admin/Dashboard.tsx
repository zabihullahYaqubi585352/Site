import { router, usePage } from '@inertiajs/react';
import { useMemo, useState } from 'react';

interface Tenant {
    id: number;
    userName: string;
    companyName: string;
    phoneNumber: string;
    email: string;
    domainName: string;
}

const handleLogout = () => {
    router.post('/admin/logout');
};

const ITEMS_PER_PAGE = 5;

const Dashboard = () => {
    const { tenants } = usePage().props as unknown as { tenants: Tenant[] };
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const filtered = useMemo(() => {
        return tenants.filter((t) => t.userName.toLowerCase().includes(search.toLowerCase()) || t.email.toLowerCase().includes(search.toLowerCase()));
    }, [search, tenants]);

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

    const paginatedTenants = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filtered.slice(start, start + ITEMS_PER_PAGE);
    }, [currentPage, filtered]);

    const goToPrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const goToNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
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

                <div className="my-4">
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        className="w-full max-w-sm rounded border border-gray-300 px-4 py-2 text-black outline-none"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setCurrentPage(1); // reset to first page on search
                        }}
                    />
                </div>

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
                            {paginatedTenants.map((t) => (
                                <tr key={t.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 text-center">{t.userName}</td>
                                    <td className="px-4 py-2 text-center">{t.companyName}</td>
                                    <td className="px-4 py-2 text-center">{t.phoneNumber}</td>
                                    <td className="px-4 py-2 text-center">{t.email}</td>
                                    <td className="px-4 py-2 text-center">{t.domainName}</td>
                                </tr>
                            ))}
                            {paginatedTenants.length === 0 && (
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
                <div className="mt-4 flex items-center justify-between">
                    <button
                        onClick={goToPrevPage}
                        disabled={currentPage === 1}
                        className="rounded bg-gray-600 px-4 py-2 text-white disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="text-white">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className="rounded bg-gray-600 px-4 py-2 text-white disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
