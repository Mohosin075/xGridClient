/* eslint-disable react/prop-types */
import SectionTitle from "../../utility/SectionTitle";
import { useEffect, useState } from "react";
import Inventory from "../inventory/Inventory";
import { useNavigate, useLocation } from "react-router-dom";

const ShopAll = ({ brandInventory }) => {
  const [allInventory, setAllInventory] = useState([]);
  const [loadSearchData, setLoadSearchData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    fetch("https://x-grid-server.vercel.app/allInventory")
      .then((response) => response.json())
      .then((data) => {
        setAllInventory(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    setAllInventory(brandInventory);
  }, [brandInventory]);
  const [loadinng, setLoading] = useState(false);
  const [sideBarData, setSideBarData] = useState({
    searchTerm: "",
    type: "all",
    // Basic: false,
    // Luxury: false,
    Family: false,
    Adventure: false,
    sort: "createdAt",
    order: "desc",
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const typeFromUrl = urlParams.get("type");
    // const FamilyFromUrl = urlParams.get("Family");
    // const AdventureFromUrl = urlParams.get("Adventure");
    // const sortFromUrl = urlParams.get("sort");
    const orderFromUrl = urlParams.get("order");

    if (
      searchTermFromUrl ||
      typeFromUrl ||
      // FamilyFromUrl ||
      // AdventureFromUrl ||
      // sortFromUrl ||
      orderFromUrl
    ) {
      setSideBarData({
        searchTerm: searchTermFromUrl || "",
        type: typeFromUrl || "all",
        // Family: FamilyFromUrl === "true" ? true : false,
        // Adventure: AdventureFromUrl === "true" ? true : false,
        // sort: sortFromUrl || "createdAt",
        order: orderFromUrl || "desc",
      });
    }

    const fetchSearchInventory = async () => {
      const searchQurey = urlParams.toString();
      setLoading(true);
      try {
        const res = await fetch(
          `https://x-grid-server.vercel.app/searchInventory?${searchQurey}`
        );
        const data = await res.json();
        setLoadSearchData(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchSearchInventory();
  }, [location.search]);

  useEffect(() => {
    setAllInventory(loadSearchData);
  }, [loadSearchData]);

  const handleChange = (e) => {
    if (
      e.target.id === "all" ||
      e.target.id === "Basic" ||
      e.target.id === "Luxury" ||
      e.target.id === "Adventure" ||
      e.target.id === "Family"
    ) {
      setSideBarData({ ...sideBarData, type: e.target.id });
    }

    if (e.target.id === "searchTerm") {
      setSideBarData({ ...sideBarData, searchTerm: e.target.value });
    }

    // if (e.target.id === "Family" || e.target.id === "Adventure") {
    //   setSideBarData({
    //     ...sideBarData,
    //     [e.target.id]:
    //       e.target.checked || e.target.checked === true ? true : false,
    //   });
    // }

    if (e.target.id === "order") {
      const order = e.target.value;
      setSideBarData({ ...sideBarData, order });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", sideBarData.searchTerm);
    urlParams.set("type", sideBarData.type);
    // urlParams.set("Family", sideBarData.Family);
    // urlParams.set("Adventure", sideBarData.Adventure);
    urlParams.set("order", sideBarData.order);
    // urlParams.set("sort", sideBarData.sort);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <div className="my-10 secondary-font">
      <SectionTitle titleTxt={"shop all"}></SectionTitle>
      <div className="md:flex justify-between items-center mt-1">
        <div className="flex gap-10 md:gap-32 uppercase ">
          <p>filter</p>
          <p className="cursor-pointer">clear</p>
        </div>
        {/* <div className="flex gap-6">
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
              <option value="">high to low</option>
              <option value="">A-Z</option>
              <option value="">Z-A</option>
            </select>
          </div>
        </div> */}
      </div>
      <div className="md:flex justify-between gap-10 mt-3 secondary-font space-y-3 md:space-y-0">
        <form onSubmit={handleSubmit} className="md:w-3/12 space-y-3">
          {/* <div className="flex gap-6">
            <div className="flex justify-between gap-2">
              <input
                type="text"
                id="searchTerm"
                placeholder="Search"
                className="border-2 px-1 border-[#2578B4] rounded-sm outline-none"
                value={sideBarData.searchTerm}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-50 flex justify-between items-center border-2 rounded-md border-[#2578B4]">
              <select
                onChange={handleChange}
                name=""
                id="order"
                defaultValue={"desc"}
                className="border-none outline-none w-full py-1 px-1 text-gray-800 hover:bg-gray-200 transition-all duration-300 text-lg"
              >
                <option value="desc">high to low</option>
                <option value="asc">low to high</option>
              </select>
            </div>
          </div> */}
          {/* bundle type */}
          <div className="collapse collapse-plus bg-base-200">
            <input type="checkbox" className="peer" />
            <div className="collapse-title">
              <h3 className="text-lg font-bold">Bundle type</h3>
            </div>
            <div className="collapse-content space-y-2">
              <div className="flex gap-3 items-center">
                <input
                  onChange={handleChange}
                  checked={sideBarData.type === "all"}
                  id="all"
                  type="checkbox"
                  className="checkbox "
                />
                <label
                  htmlFor="all"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  All
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input
                  onChange={handleChange}
                  checked={sideBarData.type === "Basic"}
                  id="Basic"
                  type="checkbox"
                  className="checkbox "
                />
                <label
                  htmlFor="Basic"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Basic
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input
                  onChange={handleChange}
                  checked={sideBarData.type === "Luxury"}
                  id="Luxury"
                  type="checkbox"
                  className="checkbox "
                />
                <label
                  htmlFor="Luxury"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Luxury
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input
                  id="Family"
                  onChange={handleChange}
                  checked={sideBarData.type === "Family"}
                  type="checkbox"
                  className="checkbox "
                />
                <label
                  htmlFor="Family"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Family
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input
                  onChange={handleChange}
                  checked={sideBarData.type === "Adventure"}
                  id="Adventure"
                  type="checkbox"
                  className="checkbox "
                />
                <label
                  htmlFor="Adventure"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Adventure
                </label>
              </div>
            </div>
          </div>
          {/* make model */}
          <div className="collapse collapse-plus bg-base-200">
            <input type="checkbox" className="peer" />
            <div className="collapse-title">
              <h3 className="text-lg font-bold">model</h3>
            </div>
            <div className="collapse-content space-y-2">
              <div className="flex gap-3 items-center">
                <input id="b1" type="checkbox" className="checkbox " />
                <label
                  htmlFor="b1"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  EOS1
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="b2" type="checkbox" className="checkbox " />
                <label
                  htmlFor="b2"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  OP15
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="b3" type="checkbox" className="checkbox " />
                <label
                  htmlFor="b3"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  OPLite
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="b4" type="checkbox" className="checkbox " />
                <label
                  htmlFor="b4"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Mantis
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
                  Kitchen
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="c2" type="checkbox" className="checkbox " />
                <label
                  htmlFor="c2"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Storage
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="c3" type="checkbox" className="checkbox " />
                <label
                  htmlFor="c3"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Lighting
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="c4" type="checkbox" className="checkbox " />
                <label
                  htmlFor="c4"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Security
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
                  Cooler
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="d2" type="checkbox" className="checkbox " />
                <label
                  htmlFor="d2"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Rain Gear
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="d3" type="checkbox" className="checkbox " />
                <label
                  htmlFor="d3"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Fire Starter
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="d4" type="checkbox" className="checkbox " />
                <label
                  htmlFor="d4"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Trash Bags
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
                  Airstream
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="e2" type="checkbox" className="checkbox " />
                <label
                  htmlFor="e2"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Jayco
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="e3" type="checkbox" className="checkbox " />
                <label
                  htmlFor="e3"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Dutchmen RV
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input id="e4" type="checkbox" className="checkbox " />
                <label
                  htmlFor="e4"
                  className="text-xs md:text-sm cursor-pointer font-semibold hover:text-[#2578B4]"
                >
                  Roadtrek
                </label>
              </div>
            </div>
          </div>
          <button className="text-white w-full bgColor py-3 px-6 tracking-widest cursor-pointer hover:bg-black transition-all duration-300">
            Search{" "}
          </button>
        </form>
        <div className="md:w-9/12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
            {allInventory.map((inventory) => (
              <Inventory key={inventory._id} inventory={inventory}></Inventory>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopAll;
