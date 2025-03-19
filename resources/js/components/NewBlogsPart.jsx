const NewImage1 = '/assets/NewBlock1.webp';
const NewImage2 = '/assets/NewBlock2.webp';

const NewBlogsPart = () => {
    return (
        <div className="sm: mx-auto grid w-full max-w-[500px] grid-cols-1 gap-4 bg-[#0e0e0e] py-20 md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1440px]">
            <div className="flex flex-col items-center justify-center gap-6 py-10">
                <div className="flex h-[50px] w-[200px] justify-center gap-2 rounded-3xl border border-gray-700">
                    {' '}
                    <span className="flex items-center justify-center text-lg text-[#2baa8d]">NEWS & BLOG</span>
                    <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2baa8d">
                            <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" />
                        </svg>
                    </div>
                </div>

                <div className="mx-4">
                    <h2 className="text-3xl font-bold text-white lg:text-6xl">What's New In Blog</h2>
                </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                <div className="grid grid-cols-1 gap-8">
                    <div className="mx-4">
                        <img src={NewImage1} alt="" />
                    </div>

                    <div className="mx-4">
                        <h2 className="text-2xl text-white hover:text-[#2baa8d]">Data Secure on Transitioning to a New Office</h2>
                    </div>
                    <div className="mx-4 flex items-center gap-6">
                        <div className="flex h-[40px] w-[140px] justify-center gap-2 rounded-3xl border border-gray-700 hover:cursor-pointer">
                            {' '}
                            <span className="flex items-center justify-center text-lg text-[#2baa8d]">DIGITAL</span>
                            <div className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2baa8d">
                                    <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" />
                                </svg>
                            </div>
                        </div>
                        <span className="text-xl text-gray-500">Feb 17, 2024</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8">
                    <div className="mx-4">
                        <img src={NewImage2} alt="" />
                    </div>

                    <div className="mx-4">
                        <h2 className="text-2xl text-white hover:text-[#2baa8d]">10 Content Proofreading Tips to Catch Avoidable Goofs</h2>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex h-[40px] w-[140px] justify-center gap-2 rounded-3xl border border-gray-700 hover:cursor-pointer">
                            {' '}
                            <span className="flex items-center justify-center text-lg text-[#2baa8d]">MODERN</span>
                            <div className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2baa8d">
                                    <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" />
                                </svg>
                            </div>
                        </div>
                        <span className="text-xl text-gray-500">Feb 17, 2024</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NewBlogsPart;
