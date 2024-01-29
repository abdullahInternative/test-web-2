import React from "react";
import Slider from "../../components/slider/Slider";
import "./Home.scss";
import HomeInfoBox from "./HomeInfoBox";
import { productData } from "../../components/carousel/data";
import CarouselItem from "../../components/carousel/CarouselItem";
import ProductCarousel from "../../components/carousel/Carousel";
import ProductCategory from "./ProductCategory";

const PageHeading = ({ heading, btnText }) => {
  return (
    <>
      <div className="--flex-between">
        <h2 className="--fw-thin"> {heading} </h2>
        <button className="--btn">{btnText}</button>
      </div>
      <div className="--hr"></div>
    </>
  );
};

const Home = () => {
  const productss = productData?.map((item) => (
    <div key={item.id} style={{ padding: "4px" }}>
      <CarouselItem
        name={item.name}
        url={item.imageurl}
        price={item.price}
        description={item.description}
      />
    </div>
  ));

  return (
    <div>
      <Slider />
      <section>
        <div className="container">
          <HomeInfoBox />
          <PageHeading heading={"Latest Products"} btnText={"Shop Now>>>"} />
          <ProductCarousel products={productss} />
        </div>
      </section>
      <section className="--btn-grey">
        <div className="container">
          <h4>Categories</h4>
          <ProductCategory />
        </div>
      </section>
    </div>
  );
};

export default Home;
