import { FaArrowRight, FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="">
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
      <div>
        <div className="2xl:px-48 xl:px-32 md:px-20 px-10 flex justify-between items-center bg-[#DDDDDD] text-sm text-black primary-font">
          <div className="flex items-center gap-1 ml-16 cursor-pointer hover:text-[#2578B4]">
            <span className="textColor">
              <CiLocationOn />
            </span>
            <p>Map & Hours</p>
          </div>
          <ul className="flex gap-10 font-bold secondary-font">
            <li>
              <Link
                to={"/"}
                className="hover:bg-[#2578B4] hover:text-white py-3 px-2"
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to={"/Sales"}
                className="hover:bg-[#2578B4] hover:text-white py-3 px-2"
              >
                Sales
              </Link>
            </li>
            <li>
              <Link
                to={"/Rentals"}
                className="hover:bg-[#2578B4] hover:text-white py-3 px-2"
              >
                Rentals
              </Link>
            </li>
            <li>
              <Link
                to={"/Brands"}
                className="hover:bg-[#2578B4] hover:text-white py-3 px-2"
              >
                Brands
              </Link>
            </li>
            <li>
              <Link
                to={"/Financing"}
                className="hover:bg-[#2578B4] hover:text-white py-3 px-2"
              >
                Financing
              </Link>
            </li>
            <li>
              <Link
                to={"/News"}
                className="hover:bg-[#2578B4] hover:text-white py-3 px-2"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to={"/Gallery"}
                className="hover:bg-[#2578B4] hover:text-white py-3 px-2"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to={"/Contact"}
                className="hover:bg-[#2578B4] hover:text-white py-3 px-2"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div>
            <h4 className="flex items-center gap-2 text-white bgColor py-3 px-6 tracking-widest cursor-pointer hover:bg-black transition-all duration-300">
              Book Now{" "}
              <span>
                <FaArrowRight />
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
