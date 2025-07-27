import { useState } from 'react';

export default function ExampleForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Submit your form here (API call etc.)
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-lg">
                <h2 className="text-center text-2xl font-bold text-gray-800">sabti safarish</h2>

                {/* Name Input */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-2 transition focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter your name"
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-2 transition focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Password Input */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-2 transition focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter your password"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-600 px-4 py-2 text-lg font-semibold text-white transition hover:bg-blue-700"
                >
                    cancle
                </button>
                <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-600 px-4 py-2 text-lg font-semibold text-white transition hover:bg-blue-700"
                >
                    sabti safarish
                </button>
            </form>
        </div>
    );
}
