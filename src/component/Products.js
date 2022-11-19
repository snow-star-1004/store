import Product from "../component/Product";
import { useSelector } from "react-redux";
const Products = () => {
  const product = useSelector((state) => state.product.productList)
  var Scroll = require("react-scroll");
  var Element = Scroll.Element;
  return (
    <>
      <Element name={"temp-name"}>
        <div
          className="containerd d-flex flex-wrap justify-content-around"
        >
          {product.map((item, index) => (
            <Product key={index} product={item} />
          ))}
        </div>
      </Element>
    </>
  );
};
export default Products;
