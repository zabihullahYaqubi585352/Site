// resources/js/Pages/Admin/AdminLogin.tsx
import { router, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react';

const AdminLogin = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });
    // Safely access auth from props
    const auth = (usePage().props as { auth?: { user?: any } }).auth;

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/admin/login'); // Make sure this matches your Laravel route
    };

    useEffect(() => {
        if (auth?.user) {
            router.visit('/admin/dashboard');
        }
    }, [auth]);
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-200 to-purple-400 px-6 sm:px-0">
            <div className="w-full rounded-lg bg-slate-900 p-10 text-sm text-indigo-300 shadow-lg sm:w-96">
                <h2 className="mb-3 text-center text-3xl font-semibold text-white">Admin Login</h2>
                <p className="mb-6 text-center text-sm"></p>

                <form onSubmit={submit}>
                    <div className="mb-4 flex w-full items-center gap-3 rounded-full bg-[#333A5c] px-5 py-2.5">
                        <input
                            type="email"
                            placeholder="Email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            className="bg-transparent outline-none"
                        />
                    </div>
                    {errors.email && <div className="mb-2 text-xs text-red-400">{errors.email}</div>}
                    <div className="mb-4 flex w-full items-center gap-3 rounded-full bg-[#333A5c] px-5 py-2.5">
                        <input
                            type="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            required
                            className="bg-transparent outline-none"
                        />
                    </div>
                    {errors.password && <div className="mb-2 text-xs text-red-400">{errors.password}</div>}

                    <button
                        type="submit"
                        disabled={processing}
                        className="text-medium w-full rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 py-2.5 text-white"
                    >
                        {processing ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
