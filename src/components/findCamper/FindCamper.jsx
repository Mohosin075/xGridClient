import Slider from "../slider/Slider";

const FindCamper = () => {
  return (
    <div className="2xl:px-48 xl:px-32 md:px-20 px-10 primary-font">
      <div>
        <div className="relative my-10">
          <h2 className="text-3xl lg:text-5xl text-center text-black font-semibold">
            FIND YOUR CAMPER
          </h2>
        </div>
        <div className="lg:flex justify-between items-center gap-5 space-y-5 lg:space-y-0">
          <div className="relative text-white camperCard w-full">
            <img
              className="w-full"
              src="https://cdn.dealerspike.com/imglib/v1/300x225/imglib/Assets/Inventory/64/EB/64EB0076-CD82-4DDF-A8E7-25780E7787F0.jpg"
              alt=""
            />
            <div className="absolute right-0 top-0 bottom-0 left-0 bg-[rgba(0,0,0,.6)] hover:bg-[rgba(0,0,0,.5)] transition-all duration-300 cursor-pointer flex flex-col justify-center items-end pr-6">
              <h4 className="text-2xl lg:text-5xl uppercase">sales</h4>
              <p className="text-xs lg:text-sm uppercase tracking-widest">
                + view inventory
              </p>
            </div>
            <div className="w-1/3 h-4 bgColor absolute bottom-0 right-0 bars transition-all duration-300 rounded-tl-xl cursor-pointer"></div>
          </div>
          <div className="relative text-white camperCard w-full">
            <img
              className="w-full"
              src="https://cdn.dealerspike.com/imglib/v1/300x225/imglib/Assets/Inventory/D7/02/D702AC22-98B1-4B99-9F83-3C6EA532355D.jpg"
              alt=""
            />
            <div className="absolute right-0 top-0 bottom-0 left-0 bg-[rgba(0,0,0,.6)] hover:bg-[rgba(0,0,0,.5)] transition-all duration-300 cursor-pointer flex flex-col justify-center items-end pr-6">
              <h4 className="text-2xl lg:text-5xl uppercase">rentals</h4>
              <p className="text-xs lg:text-sm uppercase tracking-widest">
                + get of the grid
              </p>
            </div>
            <div className="w-1/3 h-4 bgColor absolute bottom-0 right-0 bars transition-all duration-300 rounded-tl-xl cursor-pointer"></div>
          </div>
          <div className="relative text-white camperCard w-full">
            <img
              className="w-full"
              src="https://cdn.dealerspike.com/imglib/v1/300x225/imglib/Assets/Inventory/22/B5/22B50F25-3903-4B3A-B8F8-DEF2663B1F06.jpg"
              alt=""
            />
            <div className="absolute right-0 top-0 bottom-0 left-0 bg-[rgba(0,0,0,.6)] hover:bg-[rgba(0,0,0,.5)] transition-all duration-300 cursor-pointer flex flex-col justify-center items-end pr-6">
              <h4 className="text-2xl lg:text-5xl uppercase">build my rig</h4>
              <p className="text-xs lg:text-sm uppercase tracking-widest">
                + choose options
              </p>
            </div>
            <div className="w-1/3 h-4 bgColor absolute bottom-0 right-0 bars transition-all duration-300 rounded-tl-xl cursor-pointer"></div>
          </div>
        </div>
      </div>
      {/* slider */}
      <div className="my-10 lg:h-[350px] xl:h-[420px] hidden lg:block">
          <Slider></Slider>
      </div>
    </div>
  );
};

export default FindCamper;
