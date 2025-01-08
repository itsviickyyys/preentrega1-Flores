import React from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ products, addToCart }) => {
  const { categoryName } = useParams();

  // Filtrar productos por categoría (si `categoryName` está definido)
  const filteredProducts = categoryName
    ? products.filter((product) => product.category === categoryName)
    : products;

  return (
    <div className="container my-4">
      <h2>{categoryName ? `Categoría: ${categoryName}` : "Todos los Productos"}</h2>
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
