import images from "../component/images";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ProductModal = (props) => {
  const img = props.product.img;
  const price = props.product.price;
  const name = props.product.name;
  const content = props.product.content;

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex">
          <div>
            <img src={images[img]} alt={name} />
          </div>
          <div className="d-flex flex-column justify-content-between text-center">
            <h4>{name}</h4>
            <p>{content}</p>
            <p>
              <b>{price}$</b>
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-success" onClick={props.modaltocart}>
          Add Cart
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ProductModal;
