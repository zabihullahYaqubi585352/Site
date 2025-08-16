import { Link, PageProps } from '@inertiajs/react';
interface Portfolio {
    id: number;
    projectName: string;
    description: string;
    image: string;
}

interface Props extends PageProps {
    project: Portfolio;
}

export default function Details({ project }: Props) {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="mx-auto flex h-full max-w-xl flex-col overflow-hidden rounded-2xl bg-white shadow-lg">
                {/* First part: Image */}
                <img
                    src={`http://localhost:8000/storage/projects/${project.image}`}
                    alt={project.projectName}
                    className="h-[400px] w-full object-cover"
                />
            </div>

            <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                <div className="p-6">
                    <h1 className="mb-4 text-2xl font-bold text-black uppercase">{project.projectName}</h1>
                    <p className="text-gray-700">{project.description}</p>
                </div>
                <div className="justify-atart mt-8 flex items-center gap-12 p-4">
                    <Link
                        href={'/product/' + project.id}
                        prefetch
                        className="flex items-center space-x-2 rounded-full bg-[#2baa8d] px-4 py-2 text-white hover:bg-[#238f7a]"
                    >
                        order
                    </Link>
                    <Link
                        href={'/order'}
                        prefetch
                        className="flex items-center space-x-2 rounded-full bg-gray-300 px-4 py-2 text-white hover:bg-gray-400"
                    >
                        cancle
                    </Link>
                </div>
            </div>
        </div>
    );
}
