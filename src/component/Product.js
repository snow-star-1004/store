import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import images from "./images";
import { useDispatch } from "react-redux/es/exports";
import { increment } from "../app/slice/productSlice";
import { useState } from "react";
import ProductModal from "../page/ProductModal";
const Product = (props) => {
  // console.log(props.product)
  const name = props.product.name;
  // const content = props.product.content;
  const img = props.product.img;
  const price = props.product.price;
  const index = props.product.id;
  const dispatch = useDispatch();
  const addCart = () => {
    // console.log(props.product);
    dispatch(increment({ index: index }));
  };

  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="m-2" id={"item--" + props.id}>
      <Card style={{ width: "15rem", backgroundColor: "#F0F8FF" }}>
        <Card.Img
          style={{
            cursor: "pointer",
          }}
          variant="top"
          src={images[img]}
          onClick={() => setModalShow(true)}
        />
        <Card.Body>
          <Card.Title
            style={{ borderBottom: "1px solid black", paddingBottom: "5px" }}
          >
            {name}
          </Card.Title>
          <Card.Title>{price}$</Card.Title>
          <Button variant="primary" onClick={addCart}>
            Add Cart
          </Button>
        </Card.Body>
      </Card>
      <ProductModal
        show={modalShow}
        modaltocart={() => addCart()}
        onHide={() => setModalShow(false)}
        product={props.product}
      />
    </div>
  );
};
export default Product;
