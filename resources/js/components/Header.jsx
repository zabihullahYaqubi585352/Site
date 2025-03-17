import logo from '../../../public/build/assets/alkharazmi_heroLogo_100.png';
const Header = () => {
    return (
    
         <div className=" bg-red-300 w-full  ">
            <div className=" z-[999] w-full border border-b-gray-900 fixed top-0 bg-black ">
                {' '}

                {/* px-4 absolute   use insted h-[120px] flex justify-center items-center  fixed top-0   */}
                <div className="  h-[120px] mx-auto flex w-full items-center justify-between hover:cursor-pointer max-w-[500px] px-4 py-10 md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1440px] ">
                    <div className=' w-[220px]'>
                        <img src={logo} alt=""  />
                    </div>

                    <div className="group flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-full border border-gray-600 hover:border-[#2baa8d] max-sm:h-[60px] max-sm:w-[60px]">
                        <button className="h-[16px] w-[16px] rounded-full border-2 border-gray-600 bg-[#414141] group-hover:bg-[#2baa8d]"></button>
                    </div>
                </div>
            </div>
        </div>
        
        
   
        
    );
};
export default Header;
