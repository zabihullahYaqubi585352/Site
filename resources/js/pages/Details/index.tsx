import { Link } from '@inertiajs/react';
export default function index() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-8">
            <div className="mx-auto w-full max-w-md">
                <div className="flex flex-col items-center overflow-hidden rounded-2xl bg-white shadow-lg">
                    {/* First part: Image */}
                    {/* <img src={card.img} alt={card.name} className="h-48 w-full object-cover" /> */}

                    {/* Second part: System biography */}
                    <div className="flex-1 p-4">
                        <h3 className="mb-2 text-xl font-semibold text-gray-800">project Tittle</h3>
                        <p className="text-sm text-gray-600">project description</p>
                    </div>

                    {/* Third part: Actions */}
                    <div className="flex w-full items-center justify-start gap-4 p-4">
                        <Link href={'/product/'} prefetch className="space-x-2 rounded-full bg-[#2baa8d] px-4 py-2 text-white hover:bg-[#238f7a]">
                            order
                        </Link>
                        <Link href={'/order'} prefetch className="space-x-2 rounded-full bg-[#2baa8d] px-4 py-2 text-white hover:bg-[#238f7a]">
                            cancle
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
