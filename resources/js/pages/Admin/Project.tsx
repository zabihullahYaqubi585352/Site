// resources/js/Pages/Admin/Project.tsx
import OrderCards from '.././orders/Index';

const Project = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-100 p-8 text-white">
            <div className="mx-auto max-w-4xl">
                <h1 className="mb-6 text-4xl font-bold">Projects</h1>
                <OrderCards />
            </div>
        </div>
    );
};

export default Project;
