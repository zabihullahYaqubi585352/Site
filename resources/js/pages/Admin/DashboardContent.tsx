import axios from 'axios';
import { UserIcon } from 'hugeicons-react';
import { Trash2 as Delete, Edit } from 'lucide-react';
import { useEffect, useState } from 'react';

const DashboardContent = () => {
    const [tenants, setTenants] = useState<Tenant[]>([]);
    const [pagination, setPagination] = useState({
        page: 1,
        perPage: 5,
        total: 0,
    });
    const [sortBy, setSortBy] = useState('created_at');
    const [descending, setDescending] = useState(true);
    const [filter, setFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [editingTenant, setEditingTenant] = useState<Tenant | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<Tenant | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [deletingId, setDeletingId] = useState<number | null>(null);
    const [editedId, setEditedId] = useState<number | null>(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [deleteId, setDeleteId] = useState<number | null>(null);

    const fetchTenants = async () => {
        const params = {
            page: pagination.page,
            per_page: pagination.perPage,
            sort_by: sortBy,
            descending: descending.toString(),
            filter,
            status: statusFilter,
            created_at: startDate ? startDate.toISOString().split('T')[0] : undefined,
        };
        const res = await axios.get('/tenants', { params });
        setTenants(res.data.data);
        setPagination({
            page: res.data.current_page,
            perPage: res.data.per_page,
            total: res.data.total,
        });
    };

    useEffect(() => {
        fetchTenants();
        setPagination((p) => ({ ...p, page: 1 })); // Reset page when filter changes
    }, [pagination.page, sortBy, descending, filter, statusFilter, startDate]);

    interface SortHandler {
        (field: string): void;
    }

    const handleSort: SortHandler = (field) => {
        if (sortBy === field) setDescending(!descending);
        else {
            setSortBy(field);
            setDescending(false);
        }
    };
    interface Project {
        id: number;
        projectName: string;
        image: string;
    }
    interface Tenant {
        id: number;
        userName: string;
        email: string;
        phoneNumber: string;
        created_at: string;
        status?: string;
        companyName?: string;
        domainName?: string;
        project_id?: number;
        project?: Project;
    }
    const confirmDelete = (id: number) => {
        setDeleteId(id); // ذخیره آی‌دی رکورد
        setIsDeleteModalOpen(true); // باز کردن Modal
    };
    const handleDelete = async () => {
        if (deleteId === null) return;
        setIsDeleteModalOpen(false);

        try {
            await axios.delete(`/tenants/${deleteId}`);
            setDeletingId(deleteId);
            setTimeout(() => setDeletingId(null), 1000); // Reset after 1 second
            // Remove the deleted tenant from the state
            setTenants((prev) => prev.filter((t) => t.id !== deleteId));
        } catch (error) {
            console.error('Delete error:', error);
        } finally {
            setIsDeleteModalOpen(false);
        }
    };

    const totalPages = Math.ceil(pagination.total / pagination.perPage);
    const getPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className="p-6">
            <h2 className="mb-4 text-2xl font-bold"> Users Managment</h2>
            {}

            <div className="mb-4 flex flex-wrap gap-3">
                <input
                    className="rounded border px-3 py-2"
                    placeholder="Search by Name, Email "
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
                {/* <select className="rounded border px-3 py-2" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="">همه وضعیت‌ها</option>
                    <option className="text-black" value="active">
                        فعال
                    </option>
                    <option className="text-black" value="inactive">
                        غیرفعال
                    </option>
                </select> */}
            </div>

            {tenants.length > 0 ? (
                <table className="w-full overflow-hidden rounded border text-sm">
                    <thead className="bg-gray-400 text-center">
                        <tr>
                            <th className="cursor-pointer px-4 py-2" onClick={() => handleSort('name')}>
                                UserName
                            </th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Phone</th>
                            <th className="px-4 py-2">CompanyName</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">projectName</th>
                            <th className="px-4 py-2">DomainName</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {tenants.map((t) => (
                            <tr
                                key={t.id}
                                className={`transition-all duration-600 ${deletingId === t.id ? 'scale-95 opacity-0' : ''} ${editedId === t.id ? 'bg-green-200' : ''} `}
                            >
                                <td className="px-4 py-2">{t.userName}</td>
                                <td className="px-4 py-2">{t.email}</td>
                                <td className="px-4 py-2">{t.phoneNumber}</td>

                                <td className="px-4 py-2">{t.companyName}</td>
                                <td className="px-4 py-2">{new Date(t.created_at).toLocaleDateString()}</td>
                                <td className="px-4 py-2">{t.project ? t.project.projectName : '—'}</td>

                                {/* <td className="px-4 py-2">
                                <span
                                    className={`rounded-full px-2 py-1 text-xs font-semibold ${
                                        t.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                    }`}
                                >
                                    {t.status === 'active' ? 'فعال' : 'غیرفعال'}
                                </span>
                            </td> */}
                                <td className="px-4 py-2">{t.domainName}</td>

                                <td className="flex items-center justify-center gap-4 px-4 py-2">
                                    {/* Edit Button */}
                                    <button
                                        onClick={() => {
                                            setEditingTenant(t);
                                            setFormData(t);
                                            setIsModalOpen(true);
                                        }}
                                        className="rounded-lg bg-green-100 p-2 hover:bg-green-200"
                                        title="Edit"
                                    >
                                        <Edit size={20} color="green" />
                                    </button>

                                    {/* Delete Button */}
                                    <button onClick={() => confirmDelete(t.id)} className="rounded-lg bg-red-100 p-2 hover:bg-red-200" title="Delete">
                                        <Delete size={20} color="red" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl bg-gray-200 py-6 text-center text-lg text-gray-600 shadow-lg">
                    No matching records found.
                </div>
            )}

            {tenants.length !== 0 && (
                <div className="mt-6 flex items-center gap-4">
                    {/* Page size selector */}

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setPagination((p) => ({ ...p, page: p.page - 1 }))}
                            disabled={pagination.page <= 1}
                            className="rounded bg-gray-300 px-3 py-1 text-sm disabled:opacity-50"
                        >
                            قبلی
                        </button>

                        <div className="flex flex-wrap items-center gap-2">
                            {getPageNumbers().map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setPagination((p) => ({ ...p, page }))}
                                    className={`rounded px-3 py-1 text-sm ${
                                        pagination.page === page ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'
                                    } hover:bg-indigo-600 hover:text-white`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setPagination((p) => ({ ...p, page: p.page + 1 }))}
                            disabled={pagination.page >= Math.ceil(pagination.total / pagination.perPage)}
                            className="rounded bg-gray-300 px-3 py-1 text-sm disabled:opacity-50"
                        >
                            بعدی
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <select
                            value={pagination.perPage}
                            onChange={(e) => setPagination((p) => ({ ...p, page: 1, perPage: parseInt(e.target.value) }))}
                            className="rounded px-2 py-1 text-sm"
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={pagination.total}>همه</option>
                        </select>
                        <span className="text-sm">Rows per page:</span>
                    </div>

                    {/* Pagination controls */}
                </div>
            )}

            {isModalOpen && formData && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="flex w-full max-w-md flex-col gap-6 rounded-lg bg-white p-6 shadow-lg">
                        <h3 className="mb-4 flex items-center justify-center text-2xl font-bold text-[#2baa8d]">Edit user</h3>
                        <div className="relative w-full">
                            <input
                                placeholder="User Name"
                                value={formData.userName}
                                onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                                className="w-full rounded-xl border border-gray-300 px-10 py-2 transition focus:ring-2 focus:ring-[#2baa8d] focus:outline-none"
                            />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                                <UserIcon size={18} />
                            </span>
                        </div>

                        <div className="relative w-full">
                            <input
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full rounded-xl border border-gray-300 px-10 py-2 transition focus:ring-2 focus:ring-[#2baa8d] focus:outline-none"
                            />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                                <UserIcon size={18} />
                            </span>
                        </div>

                        <div className="relative w-full">
                            <input
                                placeholder="Phone"
                                value={formData.phoneNumber}
                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                className="w-full rounded-xl border border-gray-300 px-10 py-2 transition focus:ring-2 focus:ring-[#2baa8d] focus:outline-none"
                            />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                                <UserIcon size={18} />
                            </span>
                        </div>

                        <div className="relative w-full">
                            <input
                                value={formData.companyName}
                                placeholder="CompanyName"
                                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                className="w-full rounded-xl border border-gray-300 px-10 py-2 transition focus:ring-2 focus:ring-[#2baa8d] focus:outline-none"
                            />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                                <UserIcon size={18} />
                            </span>
                        </div>

                        <div className="relative w-full">
                            <input
                                placeholder="DomainName"
                                value={formData.domainName}
                                onChange={(e) => setFormData({ ...formData, domainName: e.target.value })}
                                className="w-full rounded-xl border border-gray-300 px-10 py-2 transition focus:ring-2 focus:ring-[#2baa8d] focus:outline-none"
                            />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                                <UserIcon size={18} />
                            </span>
                        </div>

                        <div className="flex justify-start gap-3">
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setFormData(null);
                                    setEditingTenant(null);
                                }}
                                className="rounded-lg bg-gray-200 px-8 py-2 hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={async () => {
                                    if (!formData) return; // safety check
                                    console.log('Sending update:', formData);

                                    try {
                                        const response = await axios.put(`/tenants/${formData.id}`, formData);
                                        console.log('Update response:', response.data);

                                        setTenants((prevTenants) =>
                                            prevTenants.map((tenant) => (tenant.id === formData.id ? response.data.tenant : tenant)),
                                        );

                                        // Reset modal and form
                                        setIsModalOpen(false);
                                        setFormData(null);
                                        setEditingTenant(null);
                                        setEditedId(formData.id);
                                        setTimeout(() => setEditedId(null), 1000);
                                    } catch (error: any) {
                                        console.error('Update error:', error.response || error);
                                    }
                                }}
                                className="rounded-lg bg-[#2baa8d] px-8 py-2 text-white"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isDeleteModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="flex w-full max-w-sm flex-col gap-4 rounded-lg bg-white p-6 shadow-lg">
                        <h3 className="text-center text-xl font-bold text-red-600">Confirm Delete</h3>
                        <p className="text-center text-gray-700">Are you sure you want to delete this user?</p>
                        <div className="flex justify-center gap-4">
                            <button onClick={() => setIsDeleteModalOpen(false)} className="rounded bg-gray-200 px-6 py-2 hover:bg-gray-300">
                                Cancel
                            </button>
                            <button onClick={handleDelete} className="rounded bg-red-600 px-6 py-2 text-white hover:bg-red-700">
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default DashboardContent;
