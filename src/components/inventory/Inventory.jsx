import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Inventory = ({ inventory }) => {
  const {_id,title, price, image} = inventory
  return (
    <Link to={`/inventory/${_id}`} className="w-full">
      <img
        className="w-full sm:h-44 lg:h-56 cursor-pointer"
        src={image}
        alt=""
      />
      <h3 className="text-lg xl:text-xl 2xl:text-2xl font-semibold">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-[#2578B4]">${price}</p>
    </Link>
  );
};

export default Inventory;
