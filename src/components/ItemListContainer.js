import React from "react";


function ItemListContainer({ products = [], onViewDetails }) {
  return (
    <div className="container my-4">
      <h2 className="title">Nuestros Productos</h2>
      <div className="columns is-multiline">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="column is-one-third" key={product.id}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={product.image} alt={product.name} />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-5">{product.name}</p>
                  <p className="subtitle is-6">{product.price}</p>
                  <button
                    className="button is-primary"
                    onClick={() => onViewDetails(product.id)}
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="has-text-centered">No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;