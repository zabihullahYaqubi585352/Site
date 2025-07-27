interface Tenant {
    id: number;
    userName: string;
    companyName: string;
    phoneNumber: string;
    email: string;
    password: string;
    domainName: string;
}

interface TenantIndexProps {
    tenants: Tenant[];
}

const TenantIndex = ({ tenants }: TenantIndexProps) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
            <div className="max-w-full overflow-hidden rounded-2xl bg-white p-6 shadow-lg">
                <h1 className="mb-4 flex items-center justify-center text-2xl font-bold">All Tenants</h1>
                <table className="w-full border-collapse rounded-2xl border">
                    <thead className="w-[800px] bg-gray-200">
                        <tr>
                            <th className="border px-4 py-2">#</th>
                            <th className="border px-4 py-2">User</th>
                            <th className="border px-4 py-2">Company</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">DomainName</th>
                            <th className="border px-4 py-2">Ph-N</th>
                            <th className="border px-4 py-2">passWord</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tenants.map((tenant, index) => (
                            <tr key={tenant.id}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{tenant.userName}</td>
                                <td className="border px-4 py-2">{tenant.companyName}</td>
                                <td className="border px-4 py-2">{tenant.email}</td>
                                <td className="border px-4 py-2">{tenant.domainName}</td>
                                <td className="border px-4 py-2">{tenant.phoneNumber}</td>
                                <td className="border px-4 py-2">{tenant.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TenantIndex;
