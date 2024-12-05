import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import shop_banner from "../Assets/shop_banner.png";
import Item from "../Item/Item";
const Popular = () => {
  return (
    <div className="popular">
     <img src={shop_banner} alt="" /> 
      <h1>POPULAR IN VINTAGE VISTA</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, idx) => {
          console.log({ item });
          return (
            <Item
              key={idx}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;