interface User {
    id: number;
    name: string;
    email: string;
}

const Dashboard = () => {
    return (
        <div className="flex min-h-screen items-start justify-center bg-gradient-to-br from-pink-800 to-pink-400 p-8 text-white">
            <div className="mx-auto max-w-4xl">
                <h1 className="mb-4 text-4xl font-bold">Admin Dashboard</h1>
            </div>
        </div>
    );
};

export default Dashboard;
