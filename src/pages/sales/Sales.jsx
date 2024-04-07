import {  useState } from "react";
import SalesBanner from "../../components/salesBanner/SalesBanner";
import ShopAll from "../../components/shopAll/ShopAll";
import ShopByBrands from "../../components/shopByBrand/ShopByBrands";

const Sales = () => {
    const [brandInventory, setBrandInventory] = useState([]);
        const handleShopByBrand =(brandName)=>{
            fetch(`http://localhost:5000/brandInventory?brand=${brandName}`)
            .then(res=>res.json())
            .then(data=>{
              setBrandInventory(data);
            })
      }
    console.log(brandInventory);
    return (
        <div>
            <SalesBanner></SalesBanner>
            <div className="2xl:px-48 xl:px-32 md:px-20 px-10">
                <ShopByBrands handleShopByBrand={handleShopByBrand}></ShopByBrands>
                {/* <ProductType></ProductType> */}
                <ShopAll brandInventory={brandInventory} setBrandInventory={setBrandInventory}></ShopAll>
            </div>
        </div>
    );
};

export default Sales;