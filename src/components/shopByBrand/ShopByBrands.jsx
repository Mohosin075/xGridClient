/* eslint-disable react/prop-types */

import SectionTitle from "../../utility/SectionTitle";

const ShopByBrands = ({handleShopByBrand}) => {




  return (
    <div className="my-10">
      <SectionTitle titleTxt={"Shop by camper brand"}></SectionTitle>
      <div className="grid grid-cols-2 xl:grid-cols-4 justify-between gap-5">
        <div onClick={()=>handleShopByBrand("Airstream")} className="relative text-white camperCard w-full">
          <img
            className="w-full h-full"
            src="https://editorial.pxcrush.net/caravancampingsales/general/editorial/t3-n8to.jpg"
            alt=""
          />
          <div className="absolute right-0 top-0 bottom-0 left-0 bg-[rgba(241,236,236,0.6)] hover:bg-[rgba(241,236,236,0.4)] transition-all duration-100 cursor-pointer flex flex-col justify-center items-end pr-6">
            <h2 className="text-xl md:text-3xl text-black font-bold">Airstream</h2>
            <p className="font-bold text-lg">+ shop now</p>
          </div>
          <div className="w-1/3 h-4 bgColor absolute bottom-0 right-0 bars transition-all duration-300 rounded-tl-xl cursor-pointer"></div>
        </div>
        <div onClick={()=>handleShopByBrand("Dutchmen RV")} className="relative text-white camperCard w-full">
          <img
            className="w-full h-full"
            src="https://cdn.dealerspike.com/imglib/v1/300x225/imglib/Assets/Inventory/64/EB/64EB0076-CD82-4DDF-A8E7-25780E7787F0.jpg"
            alt=""
          />
          <div className="absolute right-0 top-0 bottom-0 left-0 bg-[rgba(241,236,236,0.6)] hover:bg-[rgba(241,236,236,0.4)] transition-all duration-100 cursor-pointer flex flex-col justify-center items-end pr-6">
          <h2 className="text-xl md:text-3xl text-black font-bold">Dutchmen RV</h2>
            <p className="font-bold text-lg">+ shop now</p>
          </div>
          <div className="w-1/3 h-4 bgColor absolute bottom-0 right-0 bars transition-all duration-300 rounded-tl-xl cursor-pointer"></div>
        </div>
        <div onClick={()=>handleShopByBrand("Roadtrek")} className="relative text-white camperCard w-full">
          <img
            className="w-full h-full"
            src="https://cdn.dealerspike.com/imglib/v1/300x225/imglib/Assets/Inventory/64/EB/64EB0076-CD82-4DDF-A8E7-25780E7787F0.jpg"
            alt=""
          />
          <div className="absolute right-0 top-0 bottom-0 left-0 bg-[rgba(241,236,236,0.6)] hover:bg-[rgba(241,236,236,0.4)] transition-all duration-100 cursor-pointer flex flex-col justify-center items-end pr-6">
          <h2 className="text-xl md:text-3xl text-black font-bold">Roadtrek</h2>
            <p className="font-bold text-lg">+ shop now</p>
          </div>
          <div className="w-1/3 h-4 bgColor absolute bottom-0 right-0 bars transition-all duration-300 rounded-tl-xl cursor-pointer"></div>
        </div>
        <div onClick={()=>handleShopByBrand("Jayco")} className="relative text-white camperCard w-full"> 
          <img
            className="w-full h-full"
            src="https://cdn.dealerspike.com/imglib/v1/300x225/imglib/Assets/Inventory/64/EB/64EB0076-CD82-4DDF-A8E7-25780E7787F0.jpg"
            alt=""
          />
          <div className="absolute right-0 top-0 bottom-0 left-0 bg-[rgba(241,236,236,0.6)] hover:bg-[rgba(241,236,236,0.4)] transition-all duration-100 cursor-pointer flex flex-col justify-center items-end pr-6">
          <h2 className="text-xl md:text-3xl text-black font-bold">Jayco</h2>
            <p className="font-bold text-lg">+ shop now</p>
          </div>
          <div className="w-1/3 h-4 bgColor absolute bottom-0 right-0 bars transition-all duration-300 rounded-tl-xl cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default ShopByBrands;
