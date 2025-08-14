// resources/js/Pages/Admin/Project.tsx
import axios from 'axios';
import { useEffect, useState } from 'react';
const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projects, setProjects] = useState<ProjectType[]>([]);
    //state for form inputs
    const [formData, setFormData] = useState({
        projectName: '',
        description: '',
        image: null as File | null,
    });
    type ProjectType = {
        id: number;
        projectName: string;
        description: string;
        image: string; // assuming you return a full URL or path from backend
    };
    const isModalOpenhandler = () => {
        setIsModalOpen(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, files } = e.target as HTMLInputElement;
        if (name === 'image' && files) {
            setFormData((prev) => ({ ...prev, image: files[0] }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({
                ...formData,
                image: e.target.files[0],
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const data = new FormData();
        data.append('projectName', formData.projectName);
        data.append('description', formData.description);
        if (formData.image) {
            data.append('image', formData.image);
        }

        try {
            const res = await axios.post('/projects', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Project saved:', res.data);

            // Close modal and reset form
            setIsModalOpen(false);
            setFormData({ projectName: '', description: '', image: null });

            alert('Project created successfully!');
        } catch (error) {
            console.error(error);
            alert('Error saving project');
        }
    };

    useEffect(() => {
        axios
            .get('/projects')
            .then((response) => setProjects(response.data))
            .catch((error) => console.error('Error loading projects', error));
    }, [projects]);

    return (
        <div className="min-h-screen p-8 text-white">
            <span className="mx-auto max-w-4xl cursor-pointer text-lg text-green-600" onClick={isModalOpenhandler}>
                + <span className="text-lg">add </span>
            </span>
            <div className="mx-auto my-8 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.id} className="flex flex-col overflow-hidden rounded-2xl bg-transparent shadow-lg">
                        <img
                            src={`http://localhost:8000/storage/projects/${project.image}`}
                            alt={project.projectName}
                            className="h-62 w-full object-cover"
                        />

                        <div className="p-4 text-black">
                            <h3 className="text-lg font-semibold uppercase">{project.projectName}</h3>
                            <p className="mt-2 text-sm">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-6 rounded-lg bg-white p-6 text-black shadow-lg">
                        {/* Name */}
                        <div>
                            <label className="mb-1 block font-medium text-gray-700">projectName</label>
                            <input
                                type="text"
                                name="projectName"
                                value={formData.projectName}
                                onChange={handleChange}
                                placeholder="project Name"
                                className="w-full rounded-xl border border-gray-300 px-10 py-2 transition focus:ring-2 focus:ring-[#2baa8d] focus:outline-none"
                            />
                        </div>

                        {/* Title */}
                        <div className="text-black">
                            <label className="mb-1 block font-medium text-gray-700">description</label>
                            <textarea
                                name="description" // FIXED
                                value={formData.description}
                                onChange={handleChange}
                                rows={4}
                                className="w-full resize-none rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Write your description..."
                            ></textarea>
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="mb-1 block font-medium text-gray-700">Image</label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="block cursor-pointer text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-8 file:py-2 file:text-sm file:font-semibold file:text-blue-700 file:hover:cursor-pointer hover:file:bg-blue-100"
                            />
                        </div>
                        <div className="flex items-center justify-between gap-4 p-4">
                            <button
                                className="rounded-lg bg-gray-300 px-8 py-2 text-white transition hover:bg-gray-500"
                                onClick={() => {
                                    setIsModalOpen(false);
                                }}
                            >
                                cancle
                            </button>

                            {/* Submit */}
                            <button type="submit" className="rounded-lg bg-green-400 px-8 py-2 text-white transition hover:bg-green-600">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Project;
