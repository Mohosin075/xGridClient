import SectionTitle from "../../utility/SectionTitle";

const ProductType = () => {
  return (
    <div>
      <SectionTitle titleTxt={"product types"}></SectionTitle>
      <div className="grid xl:grid-cols-3 justify-between items-center gap-5 space-y-5 lg:space-y-0 mt-1">
        <div className="relative text-white camperCard w-full">
          <img
            className="w-full"
            src="https://cdn.dealerspike.com/imglib/v1/300x225/imglib/Assets/Inventory/64/EB/64EB0076-CD82-4DDF-A8E7-25780E7787F0.jpg"
            alt=""
          />
          <div className="absolute right-0 top-0 bottom-0 left-0 bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.4)] transition-all duration-100 cursor-pointer flex flex-col justify-center items-end pr-6">
            <h3 className="uppercase text-2xl font-bold w-1/3 text-right">MOd kit bundle</h3>
            <p className="font-bold text-lg">+ shop now</p>
          </div>
          <div className="w-1/3 h-4 bgColor absolute bottom-0 right-0 bars transition-all duration-300 rounded-tl-xl cursor-pointer"></div>
        </div>
        <div className="relative text-white camperCard w-full">
          <img
            className="w-full"
            src="https://cdn.dealerspike.com/imglib/v1/300x225/imglib/Assets/Inventory/64/EB/64EB0076-CD82-4DDF-A8E7-25780E7787F0.jpg"
            alt=""
          />
          <div className="absolute right-0 top-0 bottom-0 left-0 bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.4)] transition-all duration-100 cursor-pointer flex flex-col justify-center items-end pr-6">
            <h3 className="uppercase text-2xl font-bold w-1/3 text-right">MOd kit bundle</h3>
            <p className="font-bold text-lg">+ shop now</p>
          </div>
          <div className="w-1/3 h-4 bgColor absolute bottom-0 right-0 bars transition-all duration-300 rounded-tl-xl cursor-pointer"></div>
        </div>
        <div className="relative text-white camperCard w-full">
          <img
            className="w-full"
            src="https://cdn.dealerspike.com/imglib/v1/300x225/imglib/Assets/Inventory/64/EB/64EB0076-CD82-4DDF-A8E7-25780E7787F0.jpg"
            alt=""
          />
          <div className="absolute right-0 top-0 bottom-0 left-0 bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.4)] transition-all duration-100 cursor-pointer flex flex-col justify-center items-end pr-6">
            <h3 className="uppercase text-2xl font-bold w-1/3 text-right">MOd kit bundle</h3>
            <p className="font-bold text-lg">+ shop now</p>
          </div>
          <div className="w-1/3 h-4 bgColor absolute bottom-0 right-0 bars transition-all duration-300 rounded-tl-xl cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductType;
