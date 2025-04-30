const logo = '/assets/alkharazmi_heroLogo_100.webp';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸', countryCode: 'us' },
    { code: 'fa', label: 'Farsi', flag: '🇮🇷', countryCode: 'ir' },
];

const Header = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(languages[0]);
    const isRTL = (langCode) => ['fa', 'ar', 'he', 'ur'].includes(langCode);

    const { t, i18n } = useTranslation();
    const changeLanguage = (langCode) => {
        i18n.changeLanguage(langCode);
        const direction = isRTL(langCode) ? 'rtl' : 'ltr';
        document.documentElement.dir = direction;
        document.documentElement.lang = langCode;
    };
    return (
        <div className="w-full">
            <div className="fixed top-0 z-[999] w-full border border-b-gray-900 bg-black">
                {/* px-4 absolute   use insted h-[120px] flex justify-center items-center  fixed top-0   */}
                <div className="mx-auto flex h-[100px] w-full max-w-[500px] items-center justify-between px-4 py-10 hover:cursor-pointer md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1440px]">
                    <div className="w-[220px]">
                        <img src={logo} alt="about logo" />
                    </div>

                    <div className="flex w-[250px] items-center justify-between">
                        <svg
                            onClick={() => setOpen(!open)}
                            xmlns="http://www.w3.org/2000/svg"
                            height="40px"
                            viewBox="0 -960 960 960"
                            width="40px"
                            fill="#999999"
                        >
                            <path d="M480-80q-83.33 0-156.33-31.5-73-31.5-127.17-85.67-54.17-54.16-85.33-127.5Q80-398 80-481.33 80-565 111.17-637.5q31.16-72.5 85.33-126.67 54.17-54.16 127.17-85Q396.67-880 480-880q83.67 0 156.5 30.83 72.83 30.84 127 85Q817.67-710 848.83-637.5 880-565 880-481.33q0 83.33-31.17 156.66-31.16 73.34-85.33 127.5-54.17 54.17-127 85.67T480-80Zm0-66q32-36 54-80t36-101.33H390.67Q404-272.67 426-227.67T480-146Zm-91.33-13.33q-22.67-36.34-39.17-77.5Q333-278 322-327.33H182.67q35 64 82.83 103.33t123.17 64.67ZM572-160q66.67-21.33 119.5-64.33t85.83-103H638.67Q627-278.67 610.83-237.5 594.67-196.33 572-160ZM158-394h151.33q-3-24.67-3.83-45.5-.83-20.83-.83-41.83 0-23.67 1.16-43.17Q307-544 310-566.67H158q-6.33 22.67-8.83 41.84-2.5 19.16-2.5 43.5 0 24.33 2.5 44.5 2.5 20.16 8.83 42.83Zm219.33 0h206q3.67-27.33 4.84-46.83 1.16-19.5 1.16-40.5 0-20.34-1.16-39.17-1.17-18.83-4.84-46.17h-206q-3.66 27.34-4.83 46.17-1.17 18.83-1.17 39.17 0 21 1.17 40.5t4.83 46.83ZM650-394h152q6.33-22.67 8.83-42.83 2.5-20.17 2.5-44.5 0-24.34-2.5-43.5-2.5-19.17-8.83-41.84H650.67q3 30 4.16 48.84Q656-499 656-481.33q0 21.66-1.5 41.16-1.5 19.5-4.5 46.17Zm-12-239.33h139.33Q745.67-696 692.83-739q-52.83-43-121.5-61.67Q594-765 610.17-724.5 626.33-684 638-633.33Zm-247.33 0h180q-11.34-50-35-96-23.67-46-55.67-83.34-30 30-51 72.34-21 42.33-38.33 107Zm-208 0h140Q333-682 348.83-722.17 364.67-762.33 388-800q-68.67 18.67-120.5 61t-84.83 105.67Z" />
                        </svg>

                        {open && (
                            <ul className="absolute top-22 z-10 mt-2 w-40 rounded-md border border-gray-200 bg-white shadow-lg">
                                {languages.map((lang) => (
                                    <li
                                        key={lang.code}
                                        onClick={() => {
                                            setSelected(lang);
                                            changeLanguage(lang.code);
                                            setOpen(false);
                                        }}
                                        className="item-center flex cursor-pointer justify-center gap-4 py-2 hover:bg-gray-100"
                                    >
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="15px"
                                                viewBox="0 -960 960 960"
                                                width="15px"
                                                fill="#999999"
                                            >
                                                <path d="m475.33-80 184-480H740L924-80h-71.33l-44.34-118.67h-218L546-80h-70.67Zm-314-120.67-46.66-46.66L316-448.67q-45.67-47-78.17-98.33t-52.5-106.33h71.34Q274-611.67 299-574t64.33 78q41.67-43 79.5-109.17 37.84-66.16 55.17-128.16H40V-800h286.67v-80h66.66v80H680v66.67H566q-18.33 76-62 155.66-43.67 79.67-94 130.34l100 102L484-276 362.67-401 161.33-200.67Zm451.34-58H786L699.33-492l-86.66 233.33Z" />
                                            </svg>
                                        </span>
                                        {/* <img src={getFlagUrl(lang.countryCode)} alt={lang.label} className="h-4 w-5 rounded" /> */}
                                        <span>{lang.label}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <div className="group flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-gray-600 hover:border-[#2baa8d] max-sm:h-[60px] max-sm:w-[60px]">
                            <button className="h-[12px] w-[12px] rounded-full border-2 border-gray-600 bg-[#414141] group-hover:bg-[#2baa8d]"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
