import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = ({ addToCart }) => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products");
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Filtrar por categoría si está presente
        if (categoryName) {
          const filteredProducts = productsList.filter(
            (product) =>
              product.category.toLowerCase() === categoryName.toLowerCase()
          );
          setProducts(filteredProducts);
        } else {
          setProducts(productsList); // Mostrar todos los productos si no hay categoría
        }
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <div className="container my-4">
      <h2 className="mb-4">
        {categoryName
          ? `Productos de la categoría: ${categoryName}`
          : "Todos los Productos"}
      </h2>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Precio: ${product.price}</p>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => addToCart(product)}
                  >
                    Agregar al Carrito
                  </button>
                  <Link to={`/product/${product.id}`} className="btn btn-secondary">
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Cargando productos..</p>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;

