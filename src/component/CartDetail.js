import images from "./images";
import { BsFillArchiveFill } from "react-icons/bs";
import { useDispatch } from "react-redux/es/exports";
import { increment, decrement, remove } from "../app/slice/productSlice";

function CartDetail(props) {
  const img = props.cart.img;
  const price = props.cart.price;
  const name = props.cart.name;
  const count = props.cart.count;
  const id = props.cart.id;
  const dispatch = useDispatch();
  const removeCart = () => {
    dispatch(remove({ index: id }));
  };

  const inCart = () => {
    dispatch(increment({ index: id }));
  };
  const deCart = () => {
    dispatch(decrement({ index: id }));
  };
  return (
    <div className="row d-flex flex-flex-row flex-nowrap justify-content-between">
      <div className="col-2">
        <img
          className=""
          style={{ height: "100px" }}
          src={images[img]}
          alt={name}
        />
      </div>
      <div className="col-1 d-flex justify-content-center align-items-center fw-bold">
        <span>{name}</span>
      </div>
      <div className="col-1 d-flex justify-content-center align-items-center fw-bold">
        <span>{price}$</span>
      </div>
      <div className="col-3 d-flex justify-content-center align-items-center fw-bold">
        <button className="btn btn-info" onClick={inCart}>
          <b>+</b>
        </button>
        <span className="px-2">{count}</span>
        <button className="btn btn-info" onClick={deCart}>
          <b>-</b>
        </button>
      </div>
      <div className="col-1 d-flex justify-content-center align-items-center fw-bold">
        <button className="btn" onClick={removeCart}>
          <BsFillArchiveFill />
        </button>
      </div>
      <div className="col-3 d-flex justify-content-center align-items-center fw-bold">
        <span>{(price * count).toFixed(2)}$</span>
      </div>
    </div>
  );
}
export default CartDetail;
