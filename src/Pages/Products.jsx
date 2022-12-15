import React, { useEffect, useState } from "react";
import "./products.css";
import axios from "axios";
import { BsFillBagPlusFill } from "react-icons/bs";
import { Spinner, Alert, AlertIcon } from "@chakra-ui/react";

const getData = () => {
  return axios.get("https://kiwi-discovered-pyjama.glitch.me/baverage");
};

const sortDataByAsc = () => {
  return axios.get(
    "https://kiwi-discovered-pyjama.glitch.me/baverage?_sort=price&_order=asc"
  );
};

const sortDataByDesc = () => {
  return axios.get(
    "https://kiwi-discovered-pyjama.glitch.me/baverage?_sort=price&_order=desc"
  );
};

const AddToCart = (payload) => {
  return axios.post("https://kiwi-discovered-pyjama.glitch.me/cart", payload);
};

const Products = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleGetData = () => {
    setIsLoading(true);
    getData()
      .then((res) => {
        setIsLoading(false);
        setList(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleSortByAsc = () => {
    setIsLoading(true);
    sortDataByAsc().then((res) => {
      setIsLoading(false);
      setList(res.data);
    });
  };

  const handlesortByDesc = () => {
    setIsLoading(true);
    sortDataByDesc().then((res) => {
      setIsLoading(false);
      setList(res.data);
    });
  };

  const resetFilters = () => {
    handleGetData();
  };

  const PostToCart = (item) => {
    AddToCart(item).then((res) => {
      //   <Alert status="success">
      //     <AlertIcon />
      //     Item Added Successfully to the cart
      //   </Alert>;
      alert("Item Added Successfully to the cart");
    });
  };
  useEffect(() => {
    handleGetData();
  }, []);
  console.log(list);

  if (isLoading) return <h1 style={{ textAlign: "center" }}>Loading ...</h1>;
  return (
    <div className="productPage">
      <div className="options">
        <h3>Sort Data By: </h3>
        <button
          className="btn"
          style={{ textAlign: "center" }}
          onClick={() => {
            // setList(list.sort((a, b) => a.price - b.price));
            handleSortByAsc();
          }}
        >
          Ascending
        </button>
        <button
          className="btn"
          style={{ textAlign: "center" }}
          onClick={() => {
            // setList(list.sort((a, b) => b.price - a.price));
            handlesortByDesc();
          }}
        >
          Descending
        </button>
        <button
          className="btn"
          style={{ textAlign: "center" }}
          onClick={() => {
            resetFilters();
          }}
        >
          Reset Filters
        </button>
      </div>
      <div className="products">
        {list &&
          list?.map((item, index) => {
            return (
              <div key={index} className="singleProduct">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>M.R.P : ₹ {item.price}</p>
                <button
                  className="btn cart-btn pos"
                  onClick={() => {
                    PostToCart(item);
                  }}
                >
                  <span>Add to cart</span> <BsFillBagPlusFill />
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
