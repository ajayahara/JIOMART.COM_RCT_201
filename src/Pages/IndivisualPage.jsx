import React, { useEffect, useState } from "react";
import "./indivisualPage.css";
import { BsFillBagPlusFill } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";

import axios from "axios";

const getData = () => {
  return axios.get("https://kiwi-discovered-pyjama.glitch.me/carousel_idvPage");
};

const IndivisualPage = () => {
  const [description, setDescription] = useState(false);
  const [data, setData] = useState([]);
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(1);
  const [index3, setIndex3] = useState(2);
  const [index4, setIndex4] = useState(3);
  const [index5, setIndex5] = useState(4);

  const handleGetdata = () => {
    getData().then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => {
    handleGetdata();
  }, []);
  console.log(data[index1].imgSrc);
  return (
    <div className="indivisualPage">
      <div className="topSection">
        <div className="left-img">
          <div className="left-carousel">
            <img
              style={{ width: "90%" }}
              src="https://www.jiomart.com/images/product/600x600/rvjf0pciix/finish-dishwasher-all-in-1-max-powerball-lemon-60-tablets-world-s-no-1-dishwashing-brand-product-images-orvjf0pciix-p591300720-0-202205140128.jpg"
              alt="demo1"
            />
            <img
              style={{ width: "90%" }}
              src="https://www.jiomart.com/images/product/600x600/rvjf0pciix/finish-dishwasher-all-in-1-max-powerball-lemon-60-tablets-world-s-no-1-dishwashing-brand-product-images-orvjf0pciix-p591300720-0-202205140128.jpg"
              alt="demo1"
            />
            <img
              style={{ width: "90%" }}
              src="https://www.jiomart.com/images/product/600x600/rvjf0pciix/finish-dishwasher-all-in-1-max-powerball-lemon-60-tablets-world-s-no-1-dishwashing-brand-product-images-orvjf0pciix-p591300720-0-202205140128.jpg"
              alt="demo1"
            />
            <img
              style={{ width: "90%" }}
              src="https://www.jiomart.com/images/product/600x600/rvjf0pciix/finish-dishwasher-all-in-1-max-powerball-lemon-60-tablets-world-s-no-1-dishwashing-brand-product-images-orvjf0pciix-p591300720-0-202205140128.jpg"
              alt="demo1"
            />
            <img
              style={{ width: "90%" }}
              src="https://www.jiomart.com/images/product/600x600/rvjf0pciix/finish-dishwasher-all-in-1-max-powerball-lemon-60-tablets-world-s-no-1-dishwashing-brand-product-images-orvjf0pciix-p591300720-0-202205140128.jpg"
              alt="demo1"
            />
          </div>
          <div className="right-main">
            <img
              style={{ width: "90%" }}
              src="https://www.jiomart.com/images/product/600x600/rvjf0pciix/finish-dishwasher-all-in-1-max-powerball-lemon-60-tablets-world-s-no-1-dishwashing-brand-product-images-orvjf0pciix-p591300720-0-202205140128.jpg"
              alt="demo1"
            />
          </div>
        </div>
        <div className="right-data">
          <h3 className="product__name space_top_bottom">
            Finish Dishwasher 'All in 1 Max Powerball' - Lemon 60 Tablets |
            World's No. 1 Dishwashing Brand
          </h3>
          <h4 className="product__name-light space_top_bottom">FINISH</h4>

          <p className="space_top_bottom">
            <b className="space_Between">₹ 1065.00 </b> M.R.P:
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
          <a className="space_top_bottom btn cart-btn">
            <span>Add to Cart</span>
            <BsFillBagPlusFill style={{ width: "40px" }} />
          </a>
          <div className="social__links space_top_bottom">
            <CiTwitter style={{ width: "40px" }} />
            <BsWhatsapp style={{ width: "40px" }} />
            <AiOutlineFacebook style={{ width: "40px" }} />
          </div>
        </div>
      </div>

      <div className="mid__section space_top_bottom space_Between">
        <h3 className="space_top_bottom">
          Description{" "}
          <a
            className="btn"
            onClick={() => setDescription(!description)}
            style={{ marg: "1rem" }}
          >
            {description ? "Show Less" : "Show More"}
          </a>
        </h3>
        <div className="visible">
          <h4>Zimmer Aufraumen Front Load Liquid Detergent (5 Liters)</h4>
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
      <div className="bot-section">
        {/* <h4>You May Also Like</h4>
        <div className="carousel_idvPage">
          <div className="carousel__content">
            <img src={data[index1].imgSrc} alt={data[index1].title} />
            <h4>{data[index1].title}</h4>
            <p>
              ₹ <span className="crossedLine">{data[index1].mrp}</span>
            </p>
            <p>
              ₹ <span>{data[index1].price}</span>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default IndivisualPage;
