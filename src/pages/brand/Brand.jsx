import { useEffect, useState } from "react";
import Swal from "sweetalert2";
const Brand = () => {
  const [brands, setBrands] = useState([]);
  useEffect(()=>{
    fetch('https://x-grid-server.vercel.app/brands')
    .then(res=>res.json())
    .then(data=>{
      setBrands(data);
    })
  },[])
  return (
    <div className="2xl:px-48 xl:px-32 md:px-20 px-10 secondary-font my-10">
      <h4 className="text-sm md:text-xl">Unmatched options and access</h4>
      <h2 className="text-xl md:text-4xl text-[#2578b4] font-semibold my-2">
        Our Partner Brands
      </h2>
      <p className="text-sm">
        XGRiD is the premier destination for overlanding warriors and trail-head
        newbies alike. <br /> With the most sought after off-grid campers on the
        market, our expert guides will help you find your adventure basecamp
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-between items-center gap-3 md:gap-10 my-5 pt-5">
        {
          brands.map(brand=><>
          <div onClick={() =>
            Swal.fire({
              title: "Work in progress!",
              text: "try later",
              icon: "warning",
            })} className="relative brandCard w-full h-32 sm:h-36  md:h-40 lg:h-60 xl:h-72 cursor-pointer">
          <img
            className="w-full h-full"
            src={brand.image}
            alt=""
          />
          <div className=" absolute bottom-0 top-0 left-0 right-0 bg-[rgba(241,236,236,0.6)] flex transition-all duration-100  gap-3 text-2xl justify-center items-center opacity-100 brandHover p-5">
            <img
              src={brand.logo}
              alt=""
            />
          </div>
        </div>
          </>)
        }
      </div>
    </div>
  );
};

export default Brand;
