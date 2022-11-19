import CartDetail from "../component/CartDetail";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { emptyCart } from "../app/slice/productSlice";
import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { VscTrash } from "react-icons/vsc";

const Cart = () => {
  const cartIndex = useSelector((state) => state.product.cart);
  const product = useSelector((state) => state.product.productList);
  const dispatch = useDispatch();
  const productCart = cartIndex.map((id) =>
    product.find((item) => item.id === id)
  );
  let totalCart = 0;
  productCart.map((item) => (totalCart += item.price * item.count));
  const navigate = useNavigate();
  // const history = useHistory();
  const scrollTarget = (target) =>
    scroller.scrollTo(target, { smooth: true, duration: 350, offset: -70 });
  const scrollToPage = async (target) => {
    await navigate("/home");
    scrollTarget(target);
  };
  const emCart = () => {
    dispatch(emptyCart());
  };
  return (
    <div className="container cart-page" style={{ marginTop: "80px" }}>
      <div className="d-flex flex-direction-row justify-content-between">
        <button
          className="btn btn-primary"
          onClick={() => scrollToPage("temp-name")}
        >
          Continue Buy
        </button>
        <h1>Your Cart</h1>
        <button className="btn btn-success" onClick={emCart}>
          <VscTrash size="30px" />
          Empty
        </button>
      </div>
      <hr />
      {productCart.map((product, index) => (
        <CartDetail key={"cart_" + index} cart={product} />
      ))}
      <hr />
      <div className="row container d-flex justify-content-between">
        <div className="col-3">
          <h4>Total:</h4>
        </div>
        <div className="col-3">
          <h4>{totalCart.toFixed(2)}$</h4>
        </div>
      </div>
      <div>
        <div>
          <button className="btn btn-dark fs-5 px-5">Check Out</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
