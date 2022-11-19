import { BiSearch } from "react-icons/bi";
const Title = () => {
  return (
    <>
      <div className="bg">
        <div className="search_work">
          <div>
            <h1 className="">Find a product</h1>
          </div>
          <div className="search-box p-1 bg-dark text-bg-light text-black d-flex flex-row flex-wrap justify-content-between">
            <div className="col-8 p-1">
              <input
                type="text"
                className="form-control fs-5"
                style={{ borderRadius: "7px" }}
                placeholder="Search name of product"
              />
            </div>
            <div className="col-3 p-1" style={{ textAlign: "end" }}>
              <button
                className="btn btn-success fs-5 px-lg-4 text-nowrap"
                type="button"
                style={{width: "100%"}}
              >
                <BiSearch />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Title;
