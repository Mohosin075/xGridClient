import { FaFacebookF, FaInstagram } from "react-icons/fa";
const NavBar = () => {
  return (
    <div className="2xl:px-48 xl:px-32 md:px-20 px-10 flex justify-between items-center py-5">
      <div>
        {/* todo-1 */}
        <img className="w-36 lg:w-48 cursor-pointer"
          src="https://www.xgridcampers.com/images/xgridcampers-logo.png"
          alt="logo"
        />
      </div>
      <div className="hidden sm:flex justify-between items-center gap-10 text-center">
        <div className="border-x-2 px-10">
          <h4 className="text-sm md:text-lg textColor">Las Vegas, NV</h4>
          <p className="text-xs md:text-sm text-gray-400">702-779-3397</p>
        </div>
        <div>
          <h4 className="text-sm md:text-lg textColor">Knoxville, TN</h4>
          <p className="text-xs md:text-sm text-gray-400">865-353-8880 </p>
        </div>
        <div className="hidden lg:flex gap-10 textColor social-icon-nav">
          <li className="list-none hover:text-white hover:bg-[#2578B4] rounded-md transition-all duration-300"><FaFacebookF className=" p-1 text-3xl cursor-pointer"/></li>
          <li className="list-none hover:text-white hover:bg-[#2578B4] rounded-md transition-all duration-300"><FaInstagram className=" p-1 text-3xl cursor-pointer"/></li>
        </div>
      </div>
      <div className="hidden xl:block">
        <div className="w-80 flex justify-between border-2 rounded-md border-[#2578B4]">
          <input placeholder="search inventory" className="border-none outline-none w-full py-1 px-2 text-gray-400 hover:bg-gray-200 transition-all duration-300" type="text" />
          <label htmlFor="search" className="bgColor py-1 px-4 text-white font-bold hover:bg-black cursor-pointer">Go</label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
