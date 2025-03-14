;
import star from '../../../public/build/assets/star.png';
import '../../css/TextStroke.css';
const Banar = () => {
    return (
        <div className="sm: relative z-[1] mx-auto max-w-[500px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1440px]">
            <div className="absolute -z-[3] hidden h-full w-full items-center justify-around gap-4 lg:flex">
                <div className="h-full w-[1px] bg-gray-900"></div>
                <div className="h-full w-[1px] bg-gray-900"></div>
                <div className="h-full w-[1px] bg-gray-900"></div>
                <div className="h-full w-[1px] bg-gray-900"></div>
                <div className="h-full w-[1px] bg-gray-900"></div>{' '}
            </div>
            <div className="bg-gre relative z-[3] pt-[200px] pb-[100px] sm:max-w-[500px] sm:pt-[300px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1440px]">
                <h1 className="-z-[6] text-[32px] font-bold text-white uppercase sm:text-[50px] lg:text-[70px] xl:text-[110px] xl:font-extrabold">
                    <div className="relative ml-3 inline-block">
                        <div className="relative inline-block">W</div>
                        <div className="relative inline-block">e</div>
                    </div>
                    <div className="relative ml-3 inline-block ">
                        <div className="relative inline-block">A</div>
                        <div className="relative inline-block">r</div>
                        <div className="relative inline-block">e</div>
                    </div>
                    <span className="text-stroke ml-3 font-sans">
                        <div className="relative inline-block">
                            <div className="relative inline-block">C</div>
                            <div className="relative inline-block">r</div>
                            <div className="relative inline-block">e</div>
                            <div className="relative inline-block">a</div>
                            <div className="relative inline-block">t</div>
                            <div className="relative inline-block">i</div>
                            <div className="relative inline-block">v</div>
                            <div className="relative inline-block">e</div>
                        </div>
                    </span>
                    <span class="flex items-center max-sm:ml-4 max-sm:gap-4 sm:gap-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="40px"
                            viewBox="0 -960 960 960"
                            width="40px"
                            fill="transparent"
                            className="stroke-[#2baa8d] stroke-[10] sm:h-[50px] sm:w-[50px] md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px] xl:h-[150px] xl:w-[150px]"
                        >
                            <path d="m250-223-65-65 397-397H225v-91h512v511h-92v-355L250-223Z" />
                        </svg>

                        <div className="relative inline-block">
                            <div className="relative inline-block">D</div>
                            <div className="relative inline-block">i</div>
                            <div className="relative inline-block">g</div>
                            <div className="relative inline-block">i</div>
                            <div className="relative inline-block">t</div>
                            <div className="relative inline-block">a</div>
                            <div className="relative inline-block">l</div>
                        </div>
                        <div className="relative inline-block">
                            <div className="relative inline-block bg-transparent">A</div>
                            <div className="relative inline-block">g</div>
                            <div className="relative inline-block">e</div>
                            <div className="relative inline-block">e</div>
                            <div className="relative inline-block">n</div>
                            <div className="relative inline-block">c</div>
                            <div className="relative inline-block">y</div>
                        </div>
                    </span>
                </h1>

                <div class="mx-4 mt-[100px] max-w-[400px] text-start">
                    <p className="text-xl leading-normal text-white">
                        We are a full-service website design, development and digital marketing company specializing in SEO, content marketing that
                        grows brands.
                    </p>
                    <div class="mt-[60px] flex max-w-[400px] justify-between gap-[40px] max-sm:flex-col">
                        <div className="flex flex-col items-start">
                            <h5 className="text-2xl text-[#2baa8d]">12+ </h5>
                            <p class="text-xl text-gray-500">Years Of Experience</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <h5 className="text-2xl text-[#2baa8d]">25k </h5>
                            <p class="text-xl text-gray-500">Completed Projects</p>
                        </div>
                    </div>
                </div>

                
                <img src={star} alt="" className="absolute top-[150px] left-[60px] -z-[1] block rounded-full object-cover sm:top-[220px]" />
                <div className="group absolute bottom-[350px] -left-[250px] hidden -rotate-90 items-center gap-[24px] xl:flex">
                    <a href="" className="text-lg text-gray-500 uppercase group-hover:text-[#2baa8d]">
                        mail : info@xpovio.com
                    </a>
                    <a href="" className="text-lg text-gray-500 uppercase group-hover:text-[#2baa8d]">
                        Call : +99 2158 003 6980
                    </a>
                </div>
                <div className="absolute -right-[150px] bottom-[200px] hidden -rotate-90 items-center gap-[24px] hover:text-[#2baa8d] xl:flex">
                    <a className="text-lg text-gray-500 uppercase hover:[[#2baa8d]">instagram</a>
                    <a className="text-lg text-gray-500 uppercase hover:text-[#2baa8d]">Linkedin</a>
                    <a className="text-lg text-gray-500 uppercase hover:text-[#2baa8d]">facebook</a>
                    {/* <a href="" className="text-lg text-gray-700 uppercase left-20 ">
          mail : info@xpovio.com Call : +99 2158 003 6980
        </a> */}
                </div>
            </div>
        </div>
    );
};

export default Banar;
