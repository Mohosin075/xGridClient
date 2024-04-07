import  Swal  from 'sweetalert2';
const XGide = () => {
  return (
    <div>
      <div className="relative">
      <div className="absolute bottom-0-0 right-0 left-0 flex">
          <img
            className="hidden md:block w-1/2 z-30"
            src="https://i.ibb.co/drf54dV/xgridcampers-img-texture-1-1.png"
            alt=""
          />
          <img
            className="md:w-1/2 z-30"
            src="https://i.ibb.co/drf54dV/xgridcampers-img-texture-1-1.png"
            alt=""
          />
        </div>
        <img
          className="max-h-[1100px]"
          src="https://i.ibb.co/qJJ2XC6/Rectangle-66.png"
          alt=""
        />
        <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center flex-col text-white bg-[rgba(0,0,0,.7)] secondary-font space-y-2 md:space-y-4 text-center">
          <div className="w-10/12 lg:w-6/12 space-y-1 md:space-y-8">
            <h3 className="text-lg md:text-xl xl:text-3xl font-semibold text-[#2578B4]">
              Let XGRiD be your guide!
            </h3>
            <p className="text-[10px] md:text-sm xl:text-[16px] md:leading-relaxed md:font-bold">
              Are you thinking about buying your first overland trailer, or
              perhaps up-grading the rig that’s already in your garage? XGRiD
              specializes exclusively in off-road campers, and we represent all
              the top manufacturers from around the globe.
            </p>
            <p className="text-[10px] md:text-sm xl:text-[16px] md:leading-relaxed hidden md:block md:font-bold">
              Whether you’re looking for a squaredrop that you can rock crawl
              with, a pop-up that carries your outdoor gear, or a family hauler
              with independent suspension, let one of our experts help you find
              the right rig for your next adventure.
            </p>
            
          </div>
          <button  onClick={() =>
            Swal.fire({
              title: "Work in progress!",
              text: "try later",
              icon: "warning",
            })} className="text-sm md:text-xl font-semibold uppercase hover:underline lg:pt-16 hover:translate-x-2 duration-300">Learn More +</button>
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

export default XGide;
