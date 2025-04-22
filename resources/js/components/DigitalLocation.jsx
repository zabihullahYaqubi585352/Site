const digital1 = '/assets/herat.webp';
const digital2 = '/assets/smart solution.webp';
import { Trans, useTranslation } from 'react-i18next';
import '../../css/TextStroke.css';
import './i18n';

const DigitalLocation = () => {
    const { t, i18n } = useTranslation();
    const dir = i18n.dir();
    return (
        <div className="mx-auto bg-[#0e0e0e] py-30 sm:max-w-[500px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1440px]">
            <div className="mx-10 grid h-auto grid-cols-2 gap-10 max-lg:grid-cols-1">
                <div className="relative max-w-[80%] py-32 max-md:h-[550px] max-sm:h-[550px] sm:h-[500px] md:h-[750px]">
                    <img src={digital1} alt="About digitalLocation" className="left[0px] absolute top-0 z-0 object-cover" />

                    <img
                        src={digital2}
                        alt="About digitalLocation"
                        className={`absolute z-10 px-4 ${dir === 'rtl' ? 'right-[150px]' : 'left-[150px]'} max-sm:${dir === 'rtl' ? 'right-[100px]' : 'left-[100px]'} sm:${dir === 'rtl' ? 'right-[100px]' : 'left-[100px]'} md:${dir === 'rtl' ? 'right-[200px]' : 'left-[200px]'} lg:${dir === 'rtl' ? 'right-[100px]' : 'left-[100px]'} xl:${dir === 'rtl' ? 'right-[100px]' : 'left-[100px]'} 2xl:${dir === 'rtl' ? 'right-[200px]' : 'left-[200px]'}`}
                        // className="absolute left-[250px] z-10 px-4 max-sm:left-[100px] sm:left-[100px] md:left-[200px] lg:left-[100px] xl:left-[100px] 2xl:left-[200px]"
                    />
                </div>
                <div className="grid h-auto grid-cols-1 gap-6 px-4">
                    <div className="ml-[15px] flex h-[50px] w-[150px] cursor-pointer justify-center gap-2 rounded-3xl border border-gray-700">
                        {' '}
                        <div className="flex items-center justify-center text-lg text-[#2baa8d] uppercase">{t('welcome')}</div>
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2baa8d">
                                <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" />
                            </svg>
                        </div>
                    </div>

                    <div className="w-full">
                        <h1 className="w-[90%] text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl">
                            <Trans i18nKey="location" components={{ 1: <span className="text-[#2baa8d]" /> }} />

                            {/* We are a web developmednt group based in <span className='text-[#2baa8d]'> Herat</span> */}
                        </h1>
                    </div>
                    <div className="ml-[15px]">
                        {' '}
                        <p className="w-[90%] pr-[10px] text-xl text-white">
                            {t('companyDescription')}
                            {/* Empowering businesses with innovative web development, striking graphic design, and cutting-edge web applications. We
                            create impactful digital experiences that drive growth and efficiency. By blending creativity with technical expertise, we
                            deliver solutions that set brands apart in a constantly evolving digital landscape. */}
                        </p>
                    </div>

                    <div className="grid w-full grid-cols-1">
                        <div className="py-6">
                            <div className="flex w-[95%] items-center justify-between">
                                <span className="ml-[10px] text-lg text-white"> {t('webApplications')}</span>
                                <span className="text-lg text-white">95%</span>
                            </div>
                            <div className="mx-2 mt-2 flex h-[7px] items-center justify-between rounded-lg bg-gray-500">
                                <div className="h-[7px] w-[95%] rounded-lg bg-white"></div>
                            </div>
                        </div>
                        <div className="py-6">
                            <div className="flex w-[90%] items-center justify-between">
                                <span className="ml-[10px] text-lg text-white"> {t('WebsiteDesign')}</span>
                                <span className="text-lg text-white">90%</span>
                            </div>
                            <div className="mx-2 mt-2 flex h-[7px] items-center justify-between rounded-lg bg-gray-500">
                                <div className="h-[7px] w-[90%] rounded-lg bg-white"></div>
                            </div>
                        </div>
                        <div className="py-6">
                            <div className="flex w-[90%] items-center justify-between">
                                <span className="ml-[10px] text-lg text-white">{t('graphicDesign')}</span>
                                <span className="text-xl text-white">90%</span>
                            </div>
                            <div className="mx-2 mt-2 flex h-[7px] items-center justify-between rounded-lg bg-gray-500">
                                <div className="h-[7px] w-[90%] rounded-lg bg-white"></div>
                            </div>
                        </div>
                        <div className="group mt-10 ml-[15px] flex h-[60px] w-[180px] justify-center gap-2 rounded-full border border-[#2baa8d] hover:bg-[#2baa8d]">
                            {' '}
                            <div className="hover:text-blac flex items-center justify-center text-lg text-[#2baa8d] uppercase group-hover:text-black">
                                {t('knowmore')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalLocation;
