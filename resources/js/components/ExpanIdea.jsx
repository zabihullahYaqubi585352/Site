import { Trans, useTranslation } from 'react-i18next';
import './i18n';
const ExpanIdea = () => {
    const { t, i18n } = useTranslation();
    return (
        <section className="scrollbar-webkit sm: relative mx-auto grid max-w-[500px] gap-4 py-10 md:max-w-[800px] md:grid-cols-1 lg:max-w-[1000px] lg:grid-cols-2 xl:max-w-[1200px] 2xl:max-w-[1440px]">
            <div className="grid grid-cols-1 px-2">
                <div className="flex h-[50px] w-[220px] justify-center gap-2 rounded-3xl border border-[#2baa8d]">
                    {' '}
                    <span className="flex items-center justify-center text-lg text-[#2baa8d]">{t('whatWeOffer')}</span>
                    <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2baa8d">
                            <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" />
                        </svg>
                    </div>
                </div>
                <div className="max-w-full py-4">
                    <h1 className="w-[90%] text-6xl font-bold text-white sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-6xl 2xl:leading-tight">
                        {/* Building <span className="text-[#2baa8d]">Tomorrow’s </span>Technology from today’s vision */}

                        <Trans i18nKey="SystemDescription" components={{ 1: <span className="text-[#2baa8d]" /> }} />
                    </h1>
                </div>

                <div className="py-4">
                    <p className="w-[90%] text-lg text-white">
                        {t('companyDescription')}
                        {/* At Al-Kharazmi, we don't just build software; we shape the future. Your ideas become the foundation of tomorrow's technology,
                        as we blend innovation, creativity, and technical expertise to craft solutions that push boundaries. Together, let's turn your
                        vision into digital experiences that inspire and lead the way forward. */}
                    </p>
                </div>

                <div className="mt-8 flex h-[50px] w-[220px] justify-center gap-2 rounded-3xl border border-gray-700 hover:bg-[#2baa8d] sm:mb-2">
                    {' '}
                    <span className="flex items-center justify-center text-lg text-white uppercase"> {t('viewAllServices')}</span>
                </div>
                <div className="h-[100px] w-full py-20 max-lg:hidden"></div>
            </div>
            <img
                decoding="async"
                alt="About ExpanIdea"
                src="https://gossip-themes.com/xpovio/wp-content/themes/xpovio/assets/images/offer-star.png"
                className="absolute bottom-[20%] left-[40%] z-0"
            />
            <div className="grid grid-cols-1 px-2">
                <div className="group grid grid-cols-1 gap-4">
                    <div className="flex h-[50px] w-[100px] justify-center gap-2 rounded-3xl border border-gray-800">
                        {' '}
                        <div className="flex items-center justify-center text-lg text-gray-800 group-hover:text-[#2baa8d]">01</div>
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill=" #2baa8d">
                                <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex max-w-full items-start justify-between">
                        <h1 className="font-bold text-gray-800 group-hover:text-[#2baa8d] max-sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                            {t('AccountingSystems')}
                        </h1>
                        <div>
                            {' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="60px"
                                viewBox="0 -960 960 960"
                                width="60px"
                                fill="gray"
                                className="group-hover:fill-[#2baa8d]"
                            >
                                <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" />
                            </svg>{' '}
                        </div>
                    </div>
                </div>

                <div className="group grid grid-cols-1 gap-4 py-5">
                    <div className="flex h-[50px] w-[100px] justify-center gap-2 rounded-3xl border border-gray-800">
                        {' '}
                        <div className="flex items-center justify-center text-lg text-gray-800 group-hover:text-[#2baa8d]">02</div>
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2baa8d">
                                <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex max-w-full items-start justify-between">
                        <h1 className="font-bold text-gray-800 group-hover:text-[#2baa8d] max-sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                            {t('WebApplications')}
                        </h1>
                        <div>
                            {' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="60px"
                                viewBox="0 -960 960 960"
                                width="60px"
                                fill="gray"
                                className="group-hover:fill-[#2baa8d]"
                            >
                                <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" />
                            </svg>{' '}
                        </div>
                    </div>
                </div>

                <div className="group grid grid-cols-1 gap-4 py-5">
                    <div className="flex h-[50px] w-[100px] justify-center gap-2 rounded-3xl border border-gray-800">
                        {' '}
                        <div className="flex items-center justify-center text-lg text-gray-800 group-hover:text-[#2baa8d]">03</div>
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2baa8d">
                                <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex max-w-full items-start justify-between">
                        <h1 className="font-bold text-gray-800 group-hover:text-[#2baa8d] max-sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                            {t('GraphicDesigns')}
                        </h1>
                        <div>
                            {' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="60px"
                                viewBox="0 -960 960 960"
                                width="60px"
                                fill="gray"
                                className="group-hover:fill-[#2baa8d]"
                            >
                                <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" />
                            </svg>{' '}
                        </div>
                    </div>
                </div>

                <div className="group grid grid-cols-1 gap-4 py-5">
                    <div className="flex h-[50px] w-[100px] justify-center gap-2 rounded-3xl border border-gray-800">
                        {' '}
                        <div className="flex items-center justify-center text-lg text-gray-800 group-hover:text-[#2baa8d]">04</div>
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2baa8d">
                                <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex max-w-full items-start justify-between">
                        <h1 className="font-bold text-gray-800 group-hover:text-[#2baa8d] max-sm:text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                            {t('HostingServices')}
                        </h1>
                        <div>
                            {' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="60px"
                                viewBox="0 -960 960 960"
                                width="60px"
                                fill="gray"
                                className="group-hover:fill-[#2baa8d]"
                            >
                                <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" />
                            </svg>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ExpanIdea;
