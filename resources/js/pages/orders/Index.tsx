import { Link } from '@inertiajs/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useState } from 'react';
// const one = '/assets/550X450/Layer 1.webp';
// const tow = '/assets/550X450/Layer 2.webp';
// const three = '/assets/550X450/Layer 3.webp';
// const four = '/assets/550X450/Layer 4.webp';
// const five = '/assets/550X450/Layer 5.webp';
// const six = '/assets/550X450/Layer 6.webp';
export default function Index() {
    const [portfolios, setPortfolios] = useState<Portfolio[]>([]);

    interface Portfolio {
        id: number;
        projectName: string;
        description: string;
        image: string;
    }

    // const cards = Array.from({ length: 6 }, (_, i) => ({
    //     id: i + 1,
    //     title: `System ${i + 1}`,
    //     description: 'This is a short biography of the system. It can contain features or details.',
    //     imageUrl: 'https://via.placeholder.com/300x180.png?text=Image+' + (i + 1),
    // }));
    // const cards = [
    //     { img: one, name: 'transport', description: 'This is a short biography of the system. It can contain features or details.' },
    //     { img: tow, name: 'octan', description: 'This is a short biography of the system. It can contain features or details.' },
    //     { img: three, name: 'nanonet', description: 'This is a short biography of the system. It can contain features or details.' },
    //     { img: four, name: 'metal', description: 'This is a short biography of the system. It can contain features or details.' },
    //     { img: five, name: 'sarafi', description: 'This is a short biography of the system. It can contain features or details.' },
    //     { img: six, name: 'adaptix', description: 'This is a short biography of the system. It can contain features or details.' },
    // ];

    useEffect(() => {
        axios
            .get('/projects')
            .then((response) => setPortfolios(response.data))
            .catch((error) => console.error('Error loading projects', error));
    }, [portfolios]);
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {portfolios.map((card) => (
                    <div key={card.id} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg">
                        {/* First part: Image */}
                        <img
                            src={`http://localhost:8000/storage/projects/${card.image}`}
                            alt="About portfolio"
                            className="h-[300px] w-full object-cover"
                        />
                        {/* Second part: System biography */}
                        <div className="flex-1 p-4">
                            <h3 className="mb-2 text-xl font-semibold text-gray-800 uppercase">{card.projectName}</h3>
                            <p className="text-sm text-gray-600">{card.description}</p>
                        </div>
                        {/* Third part: Actions */}
                        <div className="flex items-center justify-around gap-8 p-4">
                            <Link
                                href={'/product/' + card.id}
                                prefetch
                                className="flex items-center space-x-2 rounded-full bg-[#2baa8d] px-4 py-2 text-white hover:bg-[#238f7a]"
                            >
                                order
                            </Link>
                            <Link
                                href={'/product/detials/' + card.id}
                                prefetch
                                className="flex items-center space-x-2 rounded-full bg-amber-300 px-4 py-2 text-white hover:bg-amber-400"
                            >
                                Detials{' '}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
