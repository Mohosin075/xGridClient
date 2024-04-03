const SalesBanner = () => {
  return (
    <div className="md:flex lg:h-[350px] xl:h-[420px]">
      <div className="md:w-1/2">
        <img className="h-full w-full"
          src="https://i.ibb.co/42hdk18/hanson-lu-Avc2-Ai-E1-Q-unsplash.jpg"
          alt=""
        />
      </div>
      <div className="md:w-1/2 bg-[#2578B4] secondary-font text-white p-8 xl:p-16">
        <p className=" uppercase text-sm md:text-lg">Featured campers</p>
        <h2 className="text-xl md:text-2xl xl:text-4xl uppercase">2023 australian of road sinerg</h2>
        <p className="font-semibold my-1 lg:my-4">$127,900.00</p>
        <p className="text-xs md:text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          quaerat suscipit optio. Maxime ratione, debitis, quos placeat maiores
          reprehenderit repellendus voluptatum veniam repudiandae asperiores
          accusamus. Veritatis veniam quaerat eius minima.{" "}
        </p>
        <button className="bg-white text-[#2578B4] px-3 py-2 mt-3 uppercase hover:bg-black hover:text-white transition-all duration-300">get a quote</button>
      </div>
    </div>
  );
};

export default SalesBanner;
