import { useForm } from '@inertiajs/react';
import { LinkForwardIcon, UserIcon } from 'hugeicons-react';

const CreateTenant = ({ id }: { id?: string }) => {
    const { data, setData, post, processing, errors } = useForm({
        userName: '',
        companyName: '',
        phoneNumber: '',
        email: '',
        password: '',
        domainName: '',
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post('/tenants'); // Laravel route
    };
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData('domainName', e.target.value);
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
            <div className="max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg">
                <div className="flex flex-col items-center justify-center gap-2 p-4">
                    <p className="text-xl font-semibold text-gray-600">Create your account. For the system</p>
                    <span className="text-2xl font-medium text-[#2baa8d]">{id}</span>
                </div>
            </div>

            <form onSubmit={submit} className="mx-auto mt-8 max-w-md space-y-4 rounded-lg bg-white p-8 shadow-md">
                <h2 className="flex items-center justify-center text-2xl text-gray-800">Register information</h2>
                {(Object.keys(data) as Array<keyof typeof data>)
                    .filter((key) => key !== 'domainName')
                    .map((key) => (
                        <div className="relative flex w-full flex-col" key={key}>
                            <div className="relative w-full">
                                <input
                                    type={key === 'password' ? 'password' : 'text'}
                                    name={key}
                                    placeholder={key}
                                    value={data[key]}
                                    onChange={(e) => setData(key, e.target.value)}
                                    className="w-full rounded-xl border border-gray-300 px-10 py-2 transition focus:ring-2 focus:ring-[#2baa8d] focus:outline-none"
                                    required
                                />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                                    <UserIcon size={18} />
                                </span>
                            </div>

                            {errors[key] && <div className="mt-1 text-sm text-red-500">{errors[key]}</div>}
                        </div>
                    ))}
                <div className="flex items-center justify-between gap-2 rounded-xl border border-gray-300">
                    <div className="flex w-full items-center justify-center py-2">
                        <p>Alkharazmi.com</p>
                    </div>
                    <div className="flex w-full items-center justify-center rounded-xl">
                        <input
                            name="domainName"
                            type="text"
                            value={data['domainName']}
                            onChange={changeHandler}
                            placeholder="DomainName"
                            className="flex w-full items-center justify-center rounded-xl border-r border-[#2baa8d] px-4 py-2 focus:outline-[#2baa8d]"
                            required
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    {' '}
                    {errors['domainName'] && <div className="mt-1 text-sm text-red-500">{errors['domainName']}</div>}
                </div>
                <div className="flex items-center justify-between gap-2 px-2 py-2">
                    <div className="relative flex w-full items-center justify-center rounded-xl border border-gray-300 py-2">
                        <button type="button" className="text-lg font-semibold text-gray-500">
                            Back
                        </button>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-6 text-gray-500">
                            {' '}
                            <LinkForwardIcon size={20} />
                        </span>
                    </div>

                    <div className="relative flex w-full items-center justify-center rounded-xl border border-[#2baa8d] bg-[#2baa8d] py-2">
                        <button disabled={processing} type="submit" className="text-lg font-semibold text-white">
                            select system
                        </button>
                        <span className="absolute inset-y-0 left-30 flex items-center pl-3 text-gray-500"> </span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateTenant;
