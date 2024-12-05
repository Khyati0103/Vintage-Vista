import React from "react";
import "./NewCollections.css";
import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";

 
const NewCollections = () => {
  
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, idx) => {
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

export default NewCollections;