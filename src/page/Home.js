import Title from "../component/Title";
import Products from "../component/Products";

const Home = () => {
  return (
    <>
      <Title />
      <h1 className="mt-2" id = "tempId">Our Proudcts</h1>
      <Products />
    </>
  );
};
export default Home;
