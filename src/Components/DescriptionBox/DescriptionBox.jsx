import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        At Vintage Vista we believe in style, in quality and in the beauty of our products. 
        Each Vintage Vista item is a unique project,
         built on history, research, development, and, just like a work of art, on originality.
        </p>
        <p>
        We bring to you an exclusively curated, high-end home decor collection designed to blend seamlessly with liveable luxury. 
        Our limited-run, curated products are a treasured selection of innovative and functional designs.
         At Home Edition, we do not believe in cataloguing products after products, rather we believe 
         in bringing you a step closer to your choicest selection of luxury decor by curating a 
         timeless and wonderous collection, all available at your doorstep in just a few clicks.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;