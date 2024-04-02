const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="max-h-[1100px]"
          src="https://i.ibb.co/qJJ2XC6/Rectangle-66.png"
          alt=""
        />
        <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center flex-col text-white bg-[rgba(0,0,0,.4)] secondary-font space-y-2 md:space-y-4 text-center">
          <h2 className="text-xl md:text-4xl xl:text-6xl font-bold">
            Welcome to XGRiD Campers
          </h2>
          <h3 className="text-sm md:text-xl xl:text-3xl font-semibold">
            Find your Adventure Basecamp
          </h3>
          <p className="text-xs md:text-sm xl:text-2xl md:font-semibold">
            #SociallyDistant never felt so good
          </p>
        </div>
        <div className="absolute bottom-0 right-0 left-0 flex">
          <img
            className="hidden md:block w-1/2"
            src="https://www.xgridcampers.com/images/xgridcampers-img-texture.png"
            alt=""
          />
          <img
            className="md:w-1/2"
            src="https://www.xgridcampers.com/images/xgridcampers-img-texture.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
