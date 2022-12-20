import React, { useEffect, useState } from "react";
import "./products.css";
import axios from "axios";
import { BsFillBagPlusFill } from "react-icons/bs";
import { Spinner, Alert, AlertIcon, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import {
  getElectronicsError,
  getElectronicsRequest,
  getElectronicsSuccess,
} from "../redux/electronics/action";

const CurrentIndivisualData = (payload) => {
  return axios.put(
    "https://kiwi-discovered-pyjama.glitch.me/indivisualPageData",
    payload
  );
};

const getData = () => {
  return axios.get("https://kiwi-discovered-pyjama.glitch.me/electronics");
};

const sortDataByAsc = () => {
  return axios.get(
    "https://kiwi-discovered-pyjama.glitch.me/electronics?_sort=price&_order=asc"
  );
};

const sortDataByDesc = () => {
  return axios.get(
    "https://kiwi-discovered-pyjama.glitch.me/electronics?_sort=price&_order=desc"
  );
};

const AddToCart = (payload) => {
  return axios.post("https://kiwi-discovered-pyjama.glitch.me/cart", payload);
};

const filterByCategory = (param) => {
  return axios.get(
    `https://kiwi-discovered-pyjama.glitch.me/electronics?category=${param}`
  );
};

const ElectronicProducts = () => {
  // const [list, setList] = useState([]);
  const list = useSelector((store) => store.ElectronicsReducer.list);
  // const [isLoading, setIsLoading] = useState(false);
  const isLoading = useSelector((store) => store.ElectronicsReducer.isLoading);
  const filterData = useSelector(
    (store) => store.ElectronicsReducer.filterData
  );
  // const [filterData, setFilterData] = useState(["Phone", "Watch"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const handleGetData = () => {
    dispatch(getElectronicsRequest());
    getData()
      .then((res) => {
        dispatch(getElectronicsSuccess(res.data));
        // setList(res.data);
      })
      .catch((err) => dispatch(getElectronicsError()));
  };

  const handleSortByAsc = () => {
    dispatch(getElectronicsRequest());
    sortDataByAsc().then((res) => {
      dispatch(getElectronicsSuccess(res.data));
      // setList(res.data);
    });
  };

  const handlesortByDesc = () => {
    dispatch(getElectronicsRequest());
    sortDataByDesc().then((res) => {
      dispatch(getElectronicsSuccess(res.data));
      // setList(res.data);
    });
  };

  const handleFilterData = (item) => {
    dispatch(getElectronicsRequest());
    filterByCategory(item).then((res) =>
      dispatch(getElectronicsSuccess(res.data))
    );
  };

  const resetFilters = () => {
    handleGetData();
  };

  const PostToCart = (item) => {
    AddToCart(item).then((res) => {
      alert("Item Added Successfully to the cart");
      toast({
        title: "Verification Reminder",
        description: `"Item Added To Cart Successfully."`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    });
  };

  const handleCurrentData = (item) => {
    // console.log(item)
    CurrentIndivisualData(item).then((res) =>
      // console.log(res.data)
      navigate("/indivisualPage")
    );
  };

  useEffect(() => {
    handleGetData();
  }, []);
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
        <h3>Filter Data by category :</h3>
        {filterData.map((item, index) => (
          <button
            className="btn"
            key={index}
            onClick={() => handleFilterData(item)}
          >
            {item}
          </button>
        ))}
        <h3>Reset :</h3>
        {/* Reset  */}
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
                <img
                  src={item.image}
                  alt={item.name}
                  onClick={() => {
                    handleCurrentData(item);
                  }}
                />
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

export default ElectronicProducts;
