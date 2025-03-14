import digital1 from '../../../public/build/assets/herat.jpg';
import digital2 from '../../../public/build/assets/smart solution.jpg'
const DigitalLocation = () => {
    return (
        <div className="mx-auto bg-[#0e0e0e]  sm:max-w-[500px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1440px]">
            <div className="mx-10 grid h-auto grid-cols-2 gap-10 py-44 max-lg:grid-cols-1">
                <div className="relative max-w-[80%] py-32 max-md:h-[550px] max-sm:h-[650px] sm:h-[600px] md:h-[750px]">
                    <img src={digital1} alt="" className="left[0px] absolute top-0 z-0 object-cover" />

                    <img
                        src={digital2}
                        alt=""
                        className="absolute left-[250px] z-10 px-4 max-sm:left-[100px] sm:left-[100px] md:left-[250px] lg:left-[100px] xl:left-[100px] 2xl:left-[200px]"
                    />
                </div>
                <div className="grid grid-cols-1 gap-6 px-4 max-sm:h-[550px] md:h-[700px]">
                    <div className="ml-[15px] flex h-[50px] w-[150px] cursor-pointer justify-center gap-2 rounded-3xl border border-gray-700">
                        {' '}
                        <div className="flex items-center justify-center text-lg text-[#2baa8d]">WELCOME</div>
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2baa8d">
                                <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" />
                            </svg>
                        </div>
                    </div>

                    <div className="w-full">
                        <h1 className="w-[90%] text-3xl  leading-tight font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl">
                            We Are Digital Creative Agency In London
                        </h1>
                    </div>
                    <div className="ml-[15px]">
                        {' '}
                        <p className="w-[90%] pr-[10px] text-xl text-white">
                            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new
                            normal that has evolved from generation on the runway heading towards a streamlined cloud solution going forward porttitor
                            dictum sapien.
                        </p>
                    </div>

                    <div className="grid w-full grid-cols-1">
                        <div className="py-6">
                            <div className="flex w-[90%] items-center justify-between">
                                <span className="ml-[10px] text-lg text-white">Website design</span>
                                <span className="text-lg text-white">90%</span>
                            </div>
                            <div className="mx-2 mt-2 flex h-[7px] items-center justify-between rounded-lg bg-gray-500">
                                <div className="h-[7px] w-[90%] rounded-lg bg-white"></div>
                            </div>
                        </div>
                        <div className="py-6">
                            <div className="flex w-[85%] items-center justify-between">
                                <span className="ml-[10px] text-lg text-white">Digital Marketing</span>
                                <span className="text-xl text-white">85%</span>
                            </div>
                            <div className="mx-2 mt-2 flex h-[7px] items-center justify-between rounded-lg bg-gray-500">
                                <div className="h-[7px] w-[90%] rounded-lg bg-white"></div>
                            </div>
                        </div>
                        <div className="mt-10 ml-[15px] flex h-[60px] w-[180px] justify-center gap-2 rounded-full border border-[#2baa8d] hover:bg-[#2baa8d]">
                            {' '}
                            <div className="flex items-center justify-center text-lg text-[#2baa8d] hover:text-black">KNOW MORE</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalLocation;
