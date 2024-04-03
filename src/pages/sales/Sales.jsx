import ProductType from "../../components/productType/ProductType";
import SalesBanner from "../../components/salesBanner/SalesBanner";
import ShopAll from "../../components/shopAll/ShopAll";
import ShopByBrands from "../../components/shopByBrand/ShopByBrands";

const Sales = () => {
    return (
        <div>
            <SalesBanner></SalesBanner>
            <div className="2xl:px-48 xl:px-32 md:px-20 px-10">
                <ShopByBrands></ShopByBrands>
                <ProductType></ProductType>
                <ShopAll></ShopAll>
            </div>
        </div>
    );
};

export default Sales;