import { FaArrowRight, FaBars, FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
const NavBar = () => {
  const [isActive, setIsActive] = useState(true);
  const navItem = (
    <>
      <li>
        <Link onClick={()=>setIsActive(true)}
          to={"/"}
          className="flex py-1 xl:py-3 hover:bg-[#2578B4] hover:text-white px-2"
        >
          home
        </Link>
      </li>
      <li>
        <Link onClick={()=>setIsActive(true)}
          to={"/Sales"}
          className="flex py-1 xl:py-3 items-center salesMenu hover:bg-[#2578B4] hover:text-white px-2"
        >
          Sales{" "}
          <span className="">
            <MdOutlineKeyboardArrowDown className="textColor salesIcon" />
          </span>
        </Link>
      </li>
      <li>
        <Link onClick={()=>setIsActive(true)}
          to={"/Rentals"}
          className="flex py-1 xl:py-3 hover:bg-[#2578B4] hover:text-white px-2"
        >
          Rentals
        </Link>
      </li>
      <li>
        <Link onClick={()=>setIsActive(true)}
          to={"/Brands"}
          className="flex py-1 xl:py-3 hover:bg-[#2578B4] hover:text-white px-2"
        >
          Brands
        </Link>
      </li>
      <li>
        <Link onClick={()=>setIsActive(true)}
          to={"/Financing"}
          className="flex py-1 xl:py-3 hover:bg-[#2578B4] hover:text-white px-2"
        >
          Financing
        </Link>
      </li>
      <li>
        <Link onClick={()=>setIsActive(true)}
          to={"/News"}
          className="flex py-1 xl:py-3 hover:bg-[#2578B4] hover:text-white px-2"
        >
          News
        </Link>
      </li>
      <li>
        <Link onClick={()=>setIsActive(true)}
          to={"/Gallery"}
          className="flex py-1 xl:py-3 hover:bg-[#2578B4] hover:text-white px-2"
        >
          Gallery
        </Link>
      </li>
      <li>
        <Link onClick={()=>setIsActive(true)}
          to={"/Contact"}
          className="flex py-1 xl:py-3 hover:bg-[#2578B4] hover:text-white px-2"
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="xl:sticky top-0 z-50 bg-white">
      {/* top navbar */}
      <div className="2xl:px-48 xl:px-32 md:px-20 px-10 flex justify-between items-center py-5">
        <div>
          {/* todo-1 */}
          <img
            className="w-36 lg:w-48 cursor-pointer"
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
            <li className="list-none hover:text-white hover:bg-[#2578B4] rounded-md transition-all duration-300">
              <FaFacebookF className=" p-1 text-3xl cursor-pointer" />
            </li>
            <li className="list-none hover:text-white hover:bg-[#2578B4] rounded-md transition-all duration-300">
              <FaInstagram className=" p-1 text-3xl cursor-pointer" />
            </li>
          </div>
        </div>
        <div className="hidden xl:block">
          <div className="w-80 flex justify-between border-2 rounded-md border-[#2578B4]">
            <input
              placeholder="search inventory"
              className="border-none outline-none w-full py-1 px-2 text-gray-400 hover:bg-gray-200 transition-all duration-300"
              type="text"
            />
            <label
              htmlFor="search"
              className="bgColor py-1 px-4 text-white font-bold hover:bg-black cursor-pointer"
            >
              Go
            </label>
          </div>
        </div>
      </div>

      {/* main nav menu */}
      <div className="2xl:px-48 xl:px-32 md:px-20 px-10  bg-[#DDDDDD]">
        <div className="flex justify-between items-center text-sm text-black primary-font">
          <div className="flex items-center gap-1 xl:ml-16 cursor-pointer hover:text-[#2578B4]">
            <span className="textColor">
              <CiLocationOn />
            </span>
            <p>Map & Hours</p>
          </div>
          <div>
            <ul className="hidden xl:flex items-center uppercase gap-4 2xl:gap-10 font-bold secondary-font">
              {navItem}
            </ul>
            <div className="xl:hidden py-1 lg:py-0">
              {isActive ? (
                <span
                  onClick={() => setIsActive(!isActive)}
                  className="text-4xl"
                >
                  <FaBars className="bg-[#2578B4] p-1 text-white" />
                </span>
              ) : (
                <span
                  onClick={() => setIsActive(!isActive)}
                  className="text-4xl"
                >
                  <IoClose className="bg-[#2578B4] p-1 text-white" />
                </span>
              )}
            </div>
          </div>
          <div className="hidden lg:block">
            <h4 className="flex items-center gap-2 text-white bgColor py-3 px-6 tracking-widest cursor-pointer hover:bg-black transition-all duration-300">
              Book Now{" "}
              <span>
                <FaArrowRight />
              </span>
            </h4>
          </div>
        </div>
        <div
          className={`transition-all duration-300 ease-in-out xl:hidden ${
            isActive ? "opacity-0 h-0" : "opacity-100 h-96 mt-4"
          }`}
        >
          <ul className="font-semibold secondary-font uppercase space-y-3">{navItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
