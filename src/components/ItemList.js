import React from "react";
import Item from "./Item";

const ItemList = ({ products, addToCart }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-3">
          <Item product={product} addToCart={addToCart} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
