import { useState } from 'react';

export default function Product({ id }: { id?: string }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        number: '',
        companyName: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    };
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-lg">
                <h2 className="text-center text-2xl font-bold text-gray-800">
                    Registration Form <span className="text-2xl text-[#2baa8d]">{id}</span>
                </h2>

                {/* Name Field */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-2 transition focus:ring-2 focus:ring-[#2baa8d] focus:outline-none"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">CampanyName</label>
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-2 transition focus:ring-2 focus:ring-[#2baa8d] focus:outline-none"
                        placeholder="Enter your campany name"
                        required
                    />
                </div>

                {/* Password Field */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">PhoneNumber</label>
                    <input
                        type="phone"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-2 transition focus:ring-2 focus:ring-[#2baa8d] focus:outline-none"
                        placeholder="Enter your  phone number"
                        required
                    />
                </div>

                {/* Company Name Field */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-2 transition focus:ring-2 focus:ring-[#2baa8d] focus:outline-none"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-2 transition focus:ring-2 focus:ring-[#2baa8d] focus:outline-none"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between gap-4">
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-[#2baa8d] px-4 py-2 text-lg font-semibold text-white transition hover:bg-[#2d8f78]"
                    >
                        Select system
                    </button>
                </div>
            </form>
        </div>
    );
}
