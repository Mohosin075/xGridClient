import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useParams } from "react-router-dom";

const InventoryDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch(`https://x-grid-server.vercel.app/allInventory/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
  return (
    <div className="2xl:px-48 xl:px-32 md:px-20 px-10 my-10 md:w-3/4 mx-auto secondary-font">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <img src={details?.image} className="w-1/2" alt="Album" />
        <div className="card-body">
          <h2 className="card-title">{details?.title}</h2>
          <p className="text-sm">{details?.short_desc}</p>
          <p className="text-sm">
            <span className="font-bold uppercase">price : </span>
            {details?.price}
          </p>
          <p className="text-sm">
            <span className="font-bold uppercase">model : </span>
            {details?.model}
          </p>
          <p className="text-sm">
            <span className="font-bold uppercase">stock_number : </span>
            {details?.stock_number}
          </p>
          <p className="text-sm">
            <span className="font-bold uppercase">length : </span>
            {details?.length}
          </p>
          <p className="text-sm">
            <span className="font-bold uppercase">chassis : </span>
            {details?.chassis}
          </p>
          <div className="card-actions justify-end">
            <div>
              <h4 className="flex items-center gap-2 text-white bgColor py-3 px-6 tracking-widest cursor-pointer hover:bg-black transition-all duration-300">
                Order Now{" "}
                <span>
                  <FaArrowRight />
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
