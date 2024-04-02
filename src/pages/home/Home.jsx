import Banner from "../../components/banner/Banner";
import FindCamper from "../../components/findCamper/FindCamper";
import InventoryMakes from "../../components/inventoryMakes/InventoryMakes";
import Slider from "../../components/slider/Slider";
import XGide from "../../components/xGide/XGide";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FindCamper></FindCamper>
      <div className="2xl:px-48 xl:px-32 md:px-20 px-10 my-10">
        {/* slider */}
        <div className="lg:h-[350px] xl:h-[420px] hidden lg:block">
          <Slider></Slider>
        </div>
        {/* inventory makes */}
        <InventoryMakes></InventoryMakes>
      </div>
      {/* xGide */}
      <XGide></XGide>
    </div>
  );
};

export default Home;
