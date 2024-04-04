import { FaSearch } from "react-icons/fa";
import SectionTitle from "../../utility/SectionTitle";
import { useEffect, useState } from "react";
import Inventory from "../inventory/Inventory";

const ShopAll = () => {
  const [allInventory, setAllInventory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allInventory")
      .then((response) => response.json())
      .then((data) => {
        setAllInventory(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="my-10 secondary-font">
      <SectionTitle titleTxt={"shop all"}></SectionTitle>
      <div className="md:flex justify-between items-center mt-1">
        <div className="flex gap-10 md:gap-32 uppercase ">
          <p>filter</p>
          <p className="cursor-pointer">clear</p>
        </div>
        <div className="flex gap-6">
          <div className="md:w-50 flex justify-between items-center border-2 rounded-md border-[#2578B4]">
            <input
              placeholder="search inventory"
              className="border-none outline-none w-full py-1 px-1 md:py-2  md:px-2 text-gray-800 hover:bg-gray-200 transition-all duration-300"
              type="text"
            />
            <label
              htmlFor="search"
              className="bgColor py-2 md:py-3 px-2 md:px-4 text-white font-bold hover:bg-black cursor-pointer"
            >
              <FaSearch></FaSearch>
            </label>
          </div>
          <div className="md:w-50 flex justify-between items-center border-2 rounded-md border-[#2578B4]">
            <select
              name=""
              id=""
              className="border-none outline-none w-full py-2 px-2 text-gray-800 hover:bg-gray-200 transition-all duration-300 text-xs md:text-sm"
            >
              <option value="">Sort by :</option>
              <option value="">A-Z</option>
              <option value="">Z-A</option>
            </select>
          </div>
        </div>
      </div>
      <div className="md:flex justify-between gap-10 mt-3 secondary-font">
        <div className="md:w-3/12 space-y-3">
          {/* bundle type */}
          <div className="collapse collapse-plus bg-base-200">
            <input type="checkbox" className="peer" />
            <div className="collapse-title">
              <h3 className="text-lg font-bold">Bundle type</h3>
            </div>
            <div className="collapse-content space-y-2">
              <div className="flex gap-3 items-center">
                <input id="1" type="checkbox" className="checkbox " />
                <label
                  htmlFor="1"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Accessories
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="2" type="checkbox" className="checkbox " />
                <label
                  htmlFor="2"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Charging Systems
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="3" type="checkbox" className="checkbox " />
                <label
                  htmlFor="3"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Inverters
                </label>
              </div>
            </div>
          </div>
          {/* make model */}
          <div className="collapse collapse-plus bg-base-200">
            <input type="checkbox" className="peer" />
            <div className="collapse-title">
              <h3 className="text-lg font-bold"> make | model</h3>
            </div>
            <div className="collapse-content space-y-2">
              <div className="flex gap-3 items-center">
                <input id="b1" type="checkbox" className="checkbox " />
                <label
                  htmlFor="b1"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Australian Off Road | Sierra
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="b2" type="checkbox" className="checkbox " />
                <label
                  htmlFor="b2"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Australian Off Road | ZR
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="b3" type="checkbox" className="checkbox " />
                <label
                  htmlFor="b3"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Boreas | EOS12
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="b4" type="checkbox" className="checkbox " />
                <label
                  htmlFor="b4"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Boreas | XT
                </label>
              </div>
            </div>
          </div>
          {/* Camper upgrades */}
          <div className="collapse collapse-plus bg-base-200">
            <input type="checkbox" className="peer" />
            <div className="collapse-title">
              <h3 className="text-lg font-bold">Camper upgrades</h3>
            </div>
            <div className="collapse-content space-y-2">
              <div className="flex gap-3 items-center">
                <input id="c1" type="checkbox" className="checkbox " />
                <label
                  htmlFor="c1"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Accessories
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="c2" type="checkbox" className="checkbox " />
                <label
                  htmlFor="c2"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Batteries
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="c3" type="checkbox" className="checkbox " />
                <label
                  htmlFor="c3"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Chargers/Converters
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="c4" type="checkbox" className="checkbox " />
                <label
                  htmlFor="c4"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Inverters
                </label>
              </div>
            </div>
          </div>
          {/* Products & gear */}
          <div className="collapse collapse-plus bg-base-200">
            <input type="checkbox" className="peer" />
            <div className="collapse-title">
              <h3 className="text-lg font-bold">Products & gear</h3>
            </div>
            <div className="collapse-content space-y-2">
              <div className="flex gap-3 items-center">
                <input id="d1" type="checkbox" className="checkbox " />
                <label
                  htmlFor="d1"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Accessories
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="d2" type="checkbox" className="checkbox " />
                <label
                  htmlFor="d2"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Coolers
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="d3" type="checkbox" className="checkbox " />
                <label
                  htmlFor="d3"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Firepits
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="d4" type="checkbox" className="checkbox " />
                <label
                  htmlFor="d4"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Kitchen
                </label>
              </div>
            </div>
          </div>
          {/* manufacturers */}
          <div className="collapse collapse-plus bg-base-200">
            <input type="checkbox" className="peer" />
            <div className="collapse-title">
              <h3 className="text-lg font-bold">manufacturers</h3>
            </div>
            <div className="collapse-content space-y-2">
              <div className="flex gap-3 items-center">
                <input id="e1" type="checkbox" className="checkbox " />
                <label
                  htmlFor="e1"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Accessories
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="e2" type="checkbox" className="checkbox " />
                <label
                  htmlFor="e2"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Coolers
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="e3" type="checkbox" className="checkbox " />
                <label
                  htmlFor="e3"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Firepits
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="e4" type="checkbox" className="checkbox " />
                <label
                  htmlFor="e4"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Kitchen
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="e4" type="checkbox" className="checkbox " />
                <label
                  htmlFor="e4"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Showers
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-9/12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
            {
              allInventory.map((inventory)=><Inventory key={inventory._id} inventory={inventory}></Inventory>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopAll;
