import logo from "../img/logo.png";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menu = ["Home", "Cart", "SignUp", "LogIn"];
  const product = useSelector((state) => state.product.productList);
  let cartNum = 0;
  product.map((item) => (cartNum += item.count));
  return (
    <>
      <div className="head-nav nav navbar-expand justify-content-between bg-dark text-light px-5 fixed-top">
        <div>
          <img className="logo-png" src={logo} alt="logo.png" />
        </div>
        <div className="d-flex align-self-center">
          {menu.map((item, index) =>
            item === "Cart" ? (
              <NavLink
                to={"/" + item}
                key={"nav_" + index}
                className="btn text-light bg-dark"
              >
                {item}
                <span className="badge badge-primary" style={{backgroundColor: "indianred", marginLeft: "2px"}}>{cartNum!==0&&cartNum}</span>
              </NavLink>
            ) : (
              <NavLink
                to={"/" + item}
                key={"nav_" + index}
                className="btn text-light bg-dark"
              >
                {item}
              </NavLink>
            )
          )}
        </div>
      </div>
    </>
  );
};
export default Navbar;
