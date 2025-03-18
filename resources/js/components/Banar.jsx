;
import star from '../../../public/assets/star.webp';
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
            <div className="bg-grenn relative z-[3] pt-[200px] pb-[100px] sm:max-w-[500px] sm:pt-[300px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1440px]">
                <h1 className="-z-[6] mx-8 text-[32px] font-bold text-white uppercase sm:text-[50px]sm:mx-4 lg:text-[70px] xl:text-[100px] xl:font-extrabold">
                    <div className="relative ml-12 inline-block">
                        <div className="relative inline-block">A</div>
                        <div className="relative inline-block">l</div>
                        <div className="relative inline-block">-</div>
                        <div className="relative inline-block">k</div> 
                        <div className="relative inline-block">h</div>
                        <div className="relative inline-block">a</div>
                        <div className="relative inline-block">r</div>
                        <div className="relative inline-block">a</div> 
                        <div className="relative inline-block">z</div>
                        <div className="relative inline-block">m</div>
                        <div className="relative inline-block">i</div>
                    </div>
                    <div className="relative ml-8 inline-block ">
                        <div className="relative inline-block">A</div>
                    
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
                    <span class="  flex items-center max-sm:ml-4 max-sm:gap-4 sm:gap-10 ml-10  ">
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
                            <div className="relative inline-block ">A</div>
                            <div className="relative inline-block">g</div>
                            <div className="relative inline-block">e</div>
                            <div className="relative inline-block">e</div>
                            <div className="relative inline-block">n</div>
                            <div className="relative inline-block">c</div>
                            <div className="relative inline-block">y</div>
                        </div>
                    </span>
                </h1>

                <div class=" w-[450px] lg:mx-20 mx-4 mt-[100px] max-w-[550px] text-star">
                    <p className="text-lg  text-white">
                    At Al-Kharazmi, we specialize in crafting exceptional web development, creative graphic design, and advanced web applications. As a full-service digital agency, we bring brands to life with captivating designs, powerful applications, and marketing strategies that drive growth and engagement.
                    </p>
                    <div class="mt-[60px] flex max-w-[400px] justify-between gap-[40px] max-sm:flex-col">
                        <div className="flex flex-col items-start">
                            <h5 className="text-4xl text-[#2baa8d]">8+ </h5>
                            <p class="text-xl text-gray-500">Years Of Experience</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <h5 className="text-4xl text-[#2baa8d]">25k </h5>
                            <p class="text-xl text-gray-500">Completed Projects</p>
                        </div>
                    </div>
                </div>

                
                <img src={star} alt="" className="absolute top-[150px] left-[150px] -z-[1] block rounded-full object-cover sm:top-[220px] max-sm:left-[100px] lg:top-[260px]" />
                <div className="group absolute bottom-[350px] -left-[150px] hidden -rotate-90 items-center gap-[24px] xl:flex">
                    <a href="" className="text-[14px] text-gray-500 uppercase group-hover:text-[#2baa8d]">
                        mail : alkharazmi.soft@gmail.com
                    </a>
                    <a href="" className="text-[14px] text-gray-500 uppercase group-hover:text-[#2baa8d]">
                        Call : +93 797658636
                    </a>
                </div>
                <div className="absolute -right-[80px] bottom-[250px] hidden -rotate-90 items-center gap-[24px] hover:text-[#2baa8d] xl:flex">
                    <a href='https://www.facebook.com/profile.php?id=61568762697550' target='_blank'  className="text-[16px] text-gray-500 uppercase hover:text-[#2baa8d]">facebook</a>
                    <a href='https://www.linkedin.com/company/alkharazmi/posts/?feedView=all' target='_blank'  className="text-[16px] text-gray-500 uppercase hover:text-[#2baa8d]">Linkedin</a>
                    
                
                </div>
            </div>
        </div>
    );
};

export default Banar;
