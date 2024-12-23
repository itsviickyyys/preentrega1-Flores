import React from "react";
import { Link } from "react-router-dom"; // Asegúrate de importar Link

function ItemListContainer({ products = [], addToCart }) {
  return (
    <div className="container my-4">
      <h2 className="title">Nuestros Productos</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-4 mb-4 d-flex align-items-stretch" key={product.id}>
              <div className="card h-100"> {/* Clase h-100 para alturas iguales */}
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Precio: {product.price}</p>
                  <div className="mt-auto"> {/* Botones alineados al final */}
                    <Link to={`/product/${product.id}`} className="btn btn-primary">
                      Ver Detalles
                    </Link>
                    <button
                      className="btn btn-success ms-2"
                      onClick={() => addToCart(product)}
                    >
                      Agregar al Carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;



