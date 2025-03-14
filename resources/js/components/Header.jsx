import logo from '../../../public/build/assets/alkharazmi_heroLogo_100.png';
const Header = () => {
    return (
        <div className="sm: relative mx-auto max-w-[500px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1440px]">
            <div className="sm: absolute z-[999] mx-auto w-full max-w-[500px] px-4 py-10 md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1440px]">
                {' '}
                <div className="mx-auto flex w-full items-center justify-between hover:cursor-pointer">
                    <div className=' w-[300px]'>
                        <img src={logo} alt=""  />
                    </div>

                    <div className="group flex h-[90px] w-[90px] cursor-pointer items-center justify-center rounded-full border border-gray-600 hover:border-[#2baa8d] max-sm:h-[60px] max-sm:w-[60px]">
                        <button className="h-[16px] w-[16px] rounded-full border-2 border-gray-600 bg-[#414141] group-hover:bg-[#2baa8d]"></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
