import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="2xl:px-48 xl:px-32 md:px-20 px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 md:justify-between  gap-8 md:gap-16">
          <div className="border-t-2 md:border-t-4 pt-4 md:pt-8 border-[#2578B4] w-full">
            <h3 className="text-black text-sm primary-font mb-2">
              LAS VEGAS, NV
            </h3>
            <p className="font-light text-xs md:text-sm secondary-font">
              6949 Speedway Blvd, Ste 109
            </p>
            <p className="font-light text-xs md:text-sm secondary-font">
              Las Vegas, <span className="underline decoration-dotted">NV</span>{" "}
              89115
            </p>
            <div className="flex items-center primary-font gap-1 font-normal cursor-pointer hover:text-[#2578B4] my-2">
              <span className="textColor">
                <CiLocationOn />
              </span>
              <p className="text-xs md:text-sm">Map & Hours</p>
            </div>
            <h3 className="secondary-font md:text-2xl font-bold mt-3 cursor-pointer hover:text-[#2578B4]">
              702.765.4963
            </h3>
          </div>
          <div className="border-t-2 md:border-t-4 pt-4 md:pt-8 border-[#2578B4] w-full">
            <h3 className="text-black text-sm primary-font mb-2">
              KNOXVILLE, TN
            </h3>
            <p className="font-light text-xs md:text-sm secondary-font">
              490 Center Cross Lane
            </p>
            <p className="font-light text-xs md:text-sm secondary-font">
              Lenoir City,{" "}
              <span className="underline decoration-dotted">TN</span> 37771
            </p>
            <div className="flex items-center primary-font gap-1 font-normal cursor-pointer hover:text-[#2578B4] my-2">
              <span className="textColor">
                <CiLocationOn />
              </span>
              <p className="text-xs md:text-sm">Map & Hours</p>
            </div>
            <h3 className="secondary-font md:text-2xl font-bold mt-3 cursor-pointer hover:text-[#2578B4]">
              865.351.3942
            </h3>
          </div>
          <div className="border-t-2 md:border-t-4 pt-4 md:pt-8 border-[#2578B4] w-full">
            <h3 className="text-black text-sm primary-font mb-2">
              FIND YOUR RIDE
            </h3>
            <ul className="secondary-font text-sm font-bold space-y-2">
              <li className="hover:text-[#2578B4] cursor-pointer">Inventory</li>
              <li className="hover:text-[#2578B4] cursor-pointer">Rentals</li>
              <li className="hover:text-[#2578B4] cursor-pointer">Gallery</li>
              <li className="hover:text-[#2578B4] cursor-pointer">Careers</li>
              <li className="hover:text-[#2578B4] cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="border-t-2 md:border-t-4 pt-4 md:pt-8 border-[#2578B4] w-full">
            <h3 className="text-black text-sm primary-font mb-2">
              FIND YOUR RIDE
            </h3>
            <div className="flex items-center primary-font gap-1 font-normal cursor-pointer hover:text-[#2578B4] my-2">
              <span className="textColor">
                <FaFacebook />
              </span>
              <p>facebook</p>
            </div>
            <div className="flex items-center primary-font gap-1 font-normal cursor-pointer hover:text-[#2578B4] my-2">
              <span className="textColor">
                <FaInstagram />
              </span>
              <p>instagram</p>
            </div>
            <h3 className="text-black text-sm primary-font mb-2 mt-8">
              SIGN UP FOR OUR NEWSLETTER
            </h3>
            <div className="w-full sm:w-80 flex justify-between border-2 rounded-md border-[#2578B4]">
              <input
                placeholder="Email Address"
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
      </div>
      <div className="bgColor 2xl:px-48 xl:px-32 md:px-20 px-10 py-8 flex justify-between items-center flex-wrap text-white secondary-font">
            <div className="flex justify-between gap-4 flex-wrap lg:w-4/5">
                <div className="flex flex-wrap list-none gap-2 text-sm font-semibold items-center">
                    <li className="border-r pr-2 cursor-pointer hover:text-black">POLICY</li>
                    <li className="border-r pr-2 cursor-pointer hover:text-black">PRIVACY</li>
                    <li className="border-r pr-2 cursor-pointer hover:text-black">TERMS</li>
                    <li className="border-r pr-2 cursor-pointer hover:text-black">ACCESSIBILITY</li>
                    <li className="cursor-pointer hover:text-black">SITE MAP</li>
                </div>
                <div className="flex items-center flex-wrap font-semibold text-sm gap-2">
                    <p className="border-r pr-2">COPYRIGHT© 2024 DEALER SPIKE</p>
                    <p>ALL RIGHTS RESERVED</p>
                </div>
            </div>
            <div><img src="https://cdn.dealerspike.com/imglib/template/v5/ds-logo-rv-light.png" alt="" /></div>
      </div>
    </div>
  );
};

export default Footer;
