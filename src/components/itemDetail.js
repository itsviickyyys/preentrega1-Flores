import React from "react";

function ItemDetail({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Categoría: {product.category}</p>
        <p className="card-text">Precio: {product.price}</p>
      </div>
    </div>
  );
}

export default ItemDetail;

