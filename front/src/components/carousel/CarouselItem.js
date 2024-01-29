import React from "react";
import "./Carousel.scss";
import { Link } from "react-router-dom";
import { shortenText } from "../../utils";

const CarouselItem = ({ url, name, price, description }) => {
  return (
    <div className="carouselITem">
      <Link to={"/product-details"}>
        <img
          src={url}
          alt="product"
          style={{ height: "280px", width: "100%" }}
        />
        <p className="price">{`$${price}`}</p>
        <h4>{shortenText(name, 18)}</h4>
        <p className="--mb">{shortenText(description, 26)}</p>
      </Link>
      <buttn className="--btn --btn-primary --btn-block">Add To Cart</buttn>
    </div>
  );
};

export default CarouselItem;
