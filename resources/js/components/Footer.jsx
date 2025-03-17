import logo from '../../../public/build/assets/alkharazmi_heroLogo_100.png';
const Footer = () => {
    return (
        <div className="scrollbar-webkit relative mt-20 grid w-full grid-cols-1 gap-10 bg-[#0e0e0e]">
            <div className="w-full bg-[url(https://gossip-themes.com/xpovio/wp-content/themes/xpovio/assets/images/footer-bg.png)] py-10">
                <div className=" sm: mx-auto grid max-w-[500px] grid-cols-1 gap-8 px-10 py-10 md:max-w-[800px] lg:max-w-[1000px] lg:grid-cols-5 xl:max-w-[1200px] 2xl:max-w-[1440px]">
                    <div className=" col-span-2 max-w-[690px] py-2">
                        <div>
                            {' '}
                            <div className="hover:cursor-pointer w-[300px]">
                                <img src={logo} className="object-cover" />
                            </div>{' '}
                        </div>
                        <div className=" mt-6 flex flex-col item-between gap-4">
                            <div className=" group flex flex-col">
                                <div className="flex items-center gap-2 text-md text-white group-hover:text-[#2baa8d]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="20px"
                                        viewBox="0 0 24 24"
                                        width="20px"
                                        fill="#EFEFEF"
                                        className="group-hover:fill-[#2baa8d]"
                                    >
                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
                                        <circle cx="12" cy="9" r="2.5" />
                                    </svg>
                                  Almas-e-sharq-Gulha square - Herat - Afghanistan
                                </div>
                              
                            </div>
                            <div className='flex flex-col justify-center items-start gap-2 xl:flex-row xl:justify-between '>
                            <div className="  group flex items-center justify-center text-md text-white ">
                                <div className='flex items-center'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="15"
                                        width="15"
                                        viewBox="0 0 512 512"
                                        fill="white"
                                        className="mt-2 mr-2 group-hover:fill-[#2baa8d]"
                                    >
                                        <path
                                            fill="#fafafa"
                                            d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"
                                        />
                                    </svg>{' '}
                                </div>

                                <div className="group-hover:text-[#2baa8d] flex flex-nowrap">(+93) 797658636</div>
                            </div>
                            <div className=" group flex items-center justify-center text-md text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    fill="#FFFFFF"
                                    className="mt-1 mr-2 group-hover:fill-[#2baa8d]"
                                >
                                    <path d="M202.28-248.5q-20.92 0-35.1-14.19Q153-276.89 153-297.84v-364.64q0-20.96 14.18-34.99 14.18-14.03 35.1-14.03h555.44q20.92 0 35.1 14.19Q807-683.11 807-662.16v364.64q0 20.96-14.18 34.99-14.18 14.03-35.1 14.03H202.28ZM480-480.25 170.5-669.5V-298q0 14 9 23t23 9h555q14 0 23-9t9-23v-371.5L480-480.25Zm0-36.25L773-694H187l293 177.5Zm-309.5-153V-694v396q0 14 9 23t23 9h-32v-403.5Z" />
                                </svg>
                                <div className="group-hover:text-[#2baa8d]">alkharazmi.soft@gmail.com</div>
                            </div>
                            </div>
                           
                        </div>

                        <div className="mt-10 flex h-[60px] w-[240px] justify-center rounded-[40px] border border-gray-700 hover:bg-[#2baa8d]">
                            {' '}
                            <span className="flex items-center justify-center py-4 text-lg font-bold text-gray-100">BOOK A CALL NOW</span>
                        </div>
                    </div>
                    <div className=" col-span-1 flex max-w-[690px] flex-col items-start px-[15px] lg:ml-20">
                        <div className="mb-5 text-2xl text-white">Discover</div>
                        <div className="mb-4 text-xl text-white hover:text-[#2baa8d]"> About </div>
                        <div className="mb-4 text-xl text-white hover:text-[#2baa8d]"> Blog </div>
                        <div className="mb-4 text-xl text-white hover:text-[#2baa8d]"> Contact Us</div>
                        <div className="mb-4 text-xl text-white hover:text-[#2baa8d]">Careers</div>
                    </div>
                    <div className="col-span-2 flex max-w-[690px] flex-col">
                        <div className=" ">
                            <h5 className="px-4 pb-4 text-3xl text-white">Subscribe our newsletter</h5>
                        </div>
                        <div className="mb-4">
                            {' '}
                            <p className="px-4 py-4 text-xl text-white">
                                Welcome to our digital agency We specialize in helping business most like yours succeed online.
                            </p>
                        </div>
                        <div className=" rounded-sm mx-[20px] flex items-center justify-between border border-gray-500 ">
                            <div className="flex w-full items-center justify-between bg-transparent  ">
                                <input type="email" placeholder="Enter You Email " className="outline-none mx-6 w-full bg-transparent py-4 text-lg text-gray-300" />

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="30"
                                    width="30"
                                    viewBox="0 0 512 512"
                                    className="mx-4 h-[40px] lg:w-[40px]"
                                >
                                    <path
                                        fill="#f4f5f6"
                                        d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm: mx-auto flex max-w-[500px] flex-col items-center justify-center gap-10 md:max-w-[800px] lg:max-w-[1000px] lg:flex-row lg:justify-between xl:max-w-[1200px] 2xl:max-w-[1440px]">
                    <div className="text-center text-lg text-gray-500">
                        Copyright © 2024 Al-kharazmi by
                        <span className="mx-1 hover:text-[#2baa8d]">Elegant-Themes</span>. All Rights Reserved.
                    </div>
                    <div className="mx-4 flex items-center gap-2">
                        <a  className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-gray-400 hover:bg-[#2baa8d]">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                                <path
                                    fill="#f4f5f5"
                                    d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                                />
                            </svg>
                        </a>
                        <a href='https://www.linkedin.com/company/alkharazmi/posts/?feedView=all' target='_blank' className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-gray-400 hover:bg-[#2baa8d]">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512">
                                <path
                                    fill="#fafafa"
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                                />
                            </svg>
                        </a>
                       
                        <a href='https://www.facebook.com/profile.php?id=61568762697550' target='_blank' className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-gray-400 hover:bg-[#2baa8d]">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 320 512">
                                <path
                                    fill="#fafafa"
                                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
