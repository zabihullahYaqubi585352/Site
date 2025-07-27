import { Link } from '@inertiajs/react';

const coustomButton = () => {
    return (
        <Link href="/order" prefetch className="flex items-center space-x-2 rounded-full bg-[#2baa8d] px-4 py-2 text-white hover:bg-[#238f7a]">
            ثبت سفارش
        </Link>
    );
};
export default coustomButton;
