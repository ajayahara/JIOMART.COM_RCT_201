import React, { useEffect, useState } from "react";
import "./indivisualPage.css";
import { BsFillBagPlusFill } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
const CurrentIndivisualData = (payload) => {
  return axios.put(
    "https://kiwi-discovered-pyjama.glitch.me/indivisualPageData",
    payload
  );
};


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 564 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
};

const getData = () => {
  return axios.get(
    "https://kiwi-discovered-pyjama.glitch.me/indivisualPageData"
  );
};

const getCarouselData = () => {
  return axios.get("https://kiwi-discovered-pyjama.glitch.me/carousel_idvPage");
};

const AddToCart = (payload) => {
  return axios.post("https://kiwi-discovered-pyjama.glitch.me/cart", payload);
};

const IndivisualPage = () => {
  const [description, setDescription] = useState(false);
  const [data, setData] = useState({});
  const [imgList, setImgList] = useState([]);
  // const [index1, setIndex1] = useState(0);
  // const [index2, setIndex2] = useState(1);
  // const [index3, setIndex3] = useState(2);
  // const [index4, setIndex4] = useState(3);
  // const [index5, setIndex5] = useState(4);

  const handleCurrentData = (item) => {
    // console.log(item)
    CurrentIndivisualData(item).then((res) =>
      // console.log(res.data)
      handleGetdata()
    );
  };

  const handleGetdata = () => {
    getData().then((res) => {
      setData(res.data);
    });
    getCarouselData().then((res) => setImgList(res.data));
  };
  console.log(data);

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
    handleGetdata();
  }, []);
  // console.log(data[index1].imgSrc);
  return (
    <div className="indivisualPage">
      <div className="topSection">
        <div className="left-img">
          <div className="left-carousel">
            <img
              style={{ width: "90%" }}
              src={data.image || data.imgSrc}
              // src="https://www.jiomart.com/images/product/600x600/rvjf0pciix/finish-dishwasher-all-in-1-max-powerball-lemon-60-tablets-world-s-no-1-dishwashing-brand-product-images-orvjf0pciix-p591300720-0-202205140128.jpg"
              alt="demo1"
            />
            <img
              style={{ width: "90%" }}
              src={data.image || data.imgSrc}
              // src="https://www.jiomart.com/images/product/600x600/rvjf0pciix/finish-dishwasher-all-in-1-max-powerball-lemon-60-tablets-world-s-no-1-dishwashing-brand-product-images-orvjf0pciix-p591300720-0-202205140128.jpg"
              alt="demo1"
            />
            <img
              style={{ width: "90%" }}
              src={data.image || data.imgSrc}
              // src="https://www.jiomart.com/images/product/600x600/rvjf0pciix/finish-dishwasher-all-in-1-max-powerball-lemon-60-tablets-world-s-no-1-dishwashing-brand-product-images-orvjf0pciix-p591300720-0-202205140128.jpg"
              alt="demo1"
            />
            <img
              style={{ width: "90%" }}
              src={data.image || data.imgSrc}
              // src="https://www.jiomart.com/images/product/600x600/rvjf0pciix/finish-dishwasher-all-in-1-max-powerball-lemon-60-tablets-world-s-no-1-dishwashing-brand-product-images-orvjf0pciix-p591300720-0-202205140128.jpg"
              alt="demo1"
            />
            <img
              style={{ width: "90%" }}
              src={data.image || data.imgSrc}
              alt="demo1"
            />
          </div>
          <div className="right-main">
            <img
              style={{ width: "90%" }}
              src={data.image || data.imgSrc}
              alt={data.title || data.name}
            />
          </div>
        </div>
        <div className="right-data">
          <h3 className="product__name space_top_bottom">
            <b>{data.title || data.name}</b>
          </h3>
          <h4 className="product__name-light space_top_bottom">FINISH</h4>

          <p className="space_top_bottom">
            <b className="space_Between">₹ {data.price} </b> M.R.P:
            <span className="crossedLine">₹ 1599.00</span>
          </p>
          <p className="space_top_bottom">
            <span>
              You Save: ₹ <b className="green__text space_Between">833.00</b>
            </span>
            <span>Inclusive of all taxes</span>
          </p>
          <p className="space_top_bottom">
            <b>Sold by</b>{" "}
            <b className="blue_text">O-KARMICA WELLNESS PRIVATE LIMITED</b>
          </p>
          <p className="space_top_bottom">
            Inaugural Offer <b>Free Shipping</b>
          </p>
          <button
            onClick={() => {
              PostToCart(data);
            }}
            className="space_top_bottom btn cart-btn"
          >
            <span>Add to Cart</span>
            <BsFillBagPlusFill style={{ width: "40px" }} />
          </button>
          <div className="social__links space_top_bottom">
            <a href="https://twitter.com/i/flow/login" target="_blank">
              <CiTwitter style={{ width: "40px" }} />
            </a>
            <a href="https://www.whatsapp.com/" target="_blank">
              <BsWhatsapp style={{ width: "40px" }} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <AiOutlineFacebook style={{ width: "40px" }} />
            </a>
          </div>
        </div>
      </div>
      <div className="mid__section space_top_bottom space_Between">
        <h3 className="space_top_bottom">
          <b>Description</b>{" "}
          <a
            className="btn"
            onClick={() => setDescription(!description)}
            style={{ marginRight: "1re3" }}
          >
            {description ? "Show Less" : "Show More"}
          </a>
        </h3>
        <div className="visible">
          <h4>{data.title}</h4>
          <p>
            It has excellent emulsifying properties that give the fabric a
            brighter look. The particular safe bio enzymes based detergent
            formula delivers absolute cleansing for whites and your coloured
            clothes.
          </p>
        </div>
        {description && (
          <div className="invisible">
            <p className="smallSpace">
              It has added fabrics conditioners that soften the fabric and leave
              your clothes with a light fragrance. Its advanced nanotechnology
              helps faster stain removal in machines, and it penetrates clothes
              fibres much faster and removes tough stains in the washing machine
              itself. Removes tough soiling and accumulated yellowish layer on
              the clothes to prevent fast ageing.
            </p>
            <p className="smallSpace">
              <b>Stain Removal: </b>Zimmer Aufraumen power Laundry Liquid
              Detergent’s advanced nanotechnology helps faster stain removal in
              machines; it penetrates clothes fibres much faster and removes
              tough stains in the machine itself.
            </p>
            <p className="smallSpace">
              <b>Colour Care: </b> Although its fast action removes tough stains
              in machines but retains the original colour of the fabric.
            </p>
            <p className="smallSpace">
              <b>Fresh Fragrance: </b>the mild natural fragrance boosters
              ensures that your clothes look not only fresh but also smell fresh
              rather smell of chemical.
            </p>
            <p className="smallSpace">
              <b>The softness of Clothes: </b>added fabric conditioner protects
              the fibre of clothes and ensures softness of the clothes is
              maintained along with cleaning
            </p>
            <p className="smallSpace">
              <b>Saves Water: </b>Our High performing, the low foaming formula
              helps use lesser water per a load of laundry, thereby saving at
              least 50*365 = 18250 litres of water per year.
            </p>
          </div>
        )}
      </div>
      <h3>
        <b>You May Also Like</b>
      </h3>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        className="visible"
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {imgList &&
          imgList?.map((item) => {
            return (
              <div key={item.id} className="smallSpace idvCarousel">
                <img
                  className="smallSpace"
                  src={item.imgSrc}
                  alt="img"
                  onClick={() => {
                    handleCurrentData(item);
                  }}
                />
                <p className="smallSpace">
                  <b>{item.title}</b>
                </p>
                <p className="smallSpace">
                  <b>₹ {item.price}</b>
                </p>
                <p className="smallSpace">
                  M.R.P :<span className="crossedLine">{item.mrp}</span>
                </p>
                <button className="btn cart-btn">
                  <span>Add To Cart</span>
                  <BsFillBagPlusFill />
                </button>
              </div>
            );
          })}
      </Carousel>
      ;
      
    </div>
  );
};

export default IndivisualPage;
// {imgList &&
//   imgList?.map((item) => (
//     <div key={item.id}>
//       <img src={item.imgSrc} alt="img" />
//     </div>
//   ))}
