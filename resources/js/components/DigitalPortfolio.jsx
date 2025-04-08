
const one = '/assets/550X450/Layer 1.webp';
const tow = '/assets/550X450/Layer 2.webp';
const three = '/assets/550X450/Layer 3.webp';
const four = '/assets/550X450/Layer 4.webp';
const five = '/assets/550X450/Layer 5.webp';
const six = '/assets/550X450/Layer 6.webp'
const seven = "/assets/550X450/Layer 7.webp"
const eight = "/assets/550X450/Layer 8.webp"
import './TextStroke.css'
const DigitalPortfolio = () => {
    const portfolios = [
        { img: one, title: 'Transport' },
        { img: tow, title: 'Octane' },
        { img: three, title: 'Nanonet' },
        { img: four, title: 'Metal' },
        { img: five, title: 'Abacus' },
        { img: six, title: 'Abaptix' },
        { img: seven, title: 'TopBook' },
        { img: eight, title: 'Afghan Sharq' },
    ];
    return (
        <section className="sm: relative mx-auto mb-[40px] block max-w-[500px] px-10 py-[100px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1440px]">
            <div className="sm: relative mx-auto mb-[40px] block max-w-[500px] overflow-hidden md:max-w-[800px] lg:mb-[80px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1440px]">
                <div className="w-[10000px]">
                    <div className="loop-scrool float-left block h-full">
                        <h2 className="flex items-center text-3xl font-bold text-white uppercase hover:text-[#2baa8d] lg:text-6xl xl:text-8xl 2xl:text-9xl">
                            <a href="" className="inline-flex items-center gap-[8px] outline-0">
                                DIGITAL PORTFOLIO
                            </a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="50px"
                                viewBox="0 -960 960 960"
                                width="50px"
                                fill="#2baa8d"
                                className="lg:h-[80px] lg:w-[80px] xl:h-[100px] xl:w-[100px] 2xl:h-[130px] 2xl:w-[130px]"
                            >
                                <path d="M364-195v-113h208.5l-404-404.5L248-792l404 404.5V-596h113v401H364Z" />
                            </svg>
                        </h2>
                    </div>
                    <div className="group loop-scrool float-left mx-[15px] block h-full">
                        <h2 className="flex items-center text-3xl font-bold uppercase lg:text-6xl xl:text-8xl 2xl:text-9xl">
                            <a
                                href=""
                                className="text-strokeH1 inline-flex items-center gap-[8px] text-transparent outline-0 hover:stroke-[#2baa8d]"
                            >
                                DIGITAL PORTFOLIO
                            </a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="50px"
                                viewBox="0 -960 960 960"
                                width="50px"
                                fill="transparent"
                                className="stroke-[#2baa8d] stroke-[10] lg:h-[80px] lg:w-[80px] xl:h-[100px] xl:w-[100px] 2xl:h-[130px] 2xl:w-[130px]"
                            >
                                <path d="M364-195v-113h208.5l-404-404.5L248-792l404 404.5V-596h113v401H364Z" />
                            </svg>
                        </h2>
                    </div>
                    <div className="loop-scrool float-left mx-[15px] block h-full">
                        <h2 className="flex items-center text-3xl font-bold text-white uppercase hover:text-[#2baa8d] lg:text-6xl xl:text-8xl 2xl:text-9xl">
                            <a href="" className="inline-flex items-center gap-[8px] outline-0">
                                DIGITAL PORTFOLIO
                            </a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="50px"
                                viewBox="0 -960 960 960"
                                width="50px"
                                fill="#2baa8d"
                                className="lg:h-[80px] lg:w-[80px] xl:h-[100px] xl:w-[100px] 2xl:h-[130px] 2xl:w-[130px]"
                            >
                                <path d="M364-195v-113h208.5l-404-404.5L248-792l404 404.5V-596h113v401H364Z" />
                            </svg>
                        </h2>
                    </div>
                    <div className="group loop-scrool float-left mx-[15px] block h-full">
                        <h2 className="flex items-center text-3xl font-bold uppercase lg:text-6xl xl:text-8xl 2xl:text-9xl">
                            <a
                                href=""
                                className="text-strokeH1 inline-flex items-center gap-[8px] text-transparent outline-0 hover:stroke-[#2baa8d]"
                            >
                                DIGITAL PORTFOLIO
                            </a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="50px"
                                viewBox="0 -960 960 960"
                                width="50px"
                                fill="transparent"

                                className="stroke-[#2baa8d]stroke-[10] lg:h-[80px] lg:w-[80px] xl:h-[100px] xl:w-[100px] 2xl:h-[130px] 2xl:w-[130px]"
                            >
                                <path d="M364-195v-113h208.5l-404-404.5L248-792l404 404.5V-596h113v401H364Z" />
                            </svg>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="grid w-full grid-cols-1 px-10 py-4">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {portfolios?.map((e, i) => (
                        <>
                            <div className="group relative z-10 overflow-hidden before:absolute before:top-[20px] before:left-[20px] before:h-[90%] before:w-[1px] after:absolute after:right-[20px] after:bottom-[20px] after:h-[1px] after:w-[90%] hover:before:bg-[#2baa8d] hover:after:bg-[#2baa8d]">
                                <a  href="" className="w-full cursor-pointer">
                                    <img src={e.img} alt="About porfolio" className="h-[450px] w-full object-cover" />
                                </a>

                                <div className="group-hover: transitionY absolute top-0 right-0 z-1 hidden h-[250px] w-[250px] max-w-[90%] flex-col justify-start bg-white group-hover:flex group-hover:transition-opacity">
                                    <div className="mx-8 my-10 flex items-center justify-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#2baa8d">
                                            <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" />
                                        </svg>{' '}
                                    </div>

                                    <div className="flex items-center justify-center text-2xl font-bold text-black hover:text-[#2baa8d]">
                                        {e.title}
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                    <div className="grid h-[450px] grid-cols-1 border border-[#2baa8d]">
                <div className="  flex h-[150px] items-start justify-start py-10 pl-10">
                    <img
                        src="https://gossip-themes.com/xpovio/wp-content/themes/xpovio/assets/images/portfolio-dot.png"
                        alt="dot image"
                        className="h-[100px] w-[100px]"
                    />
                </div>
                <div className="mb-20 flex items-center justify-center text-2xl text-white">view all work</div>
                <div className="flex items-center justify-around">
                    <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#2baa8d">
                        <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" />
                    </svg>{' '}
                    <img
                        src="https://gossip-themes.com/xpovio/wp-content/themes/xpovio/assets/images/portfolio-dot.png"
                        alt="dot image"
                        className="h-[100px] w-[100px]"
                    />
                </div>
                      </div>
               </div>

            </div>

        </section>
    );
};

export default DigitalPortfolio;
