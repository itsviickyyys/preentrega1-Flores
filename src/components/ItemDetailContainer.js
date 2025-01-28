import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const ItemDetailContainer = ({ addToCart }) => {
  const { itemId } = useParams(); // ID del producto obtenido de la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "products", itemId);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setProduct({ id: productSnap.id, ...productSnap.data() });
        } else {
          console.error("El producto no existe.");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProduct();
  }, [itemId]);

  return (
    <div className="container my-4">
      {product ? (
        <div className="card">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">Precio: ${product.price}</p>
            <p className="card-text">Descripción: {product.description}</p>
            <p className="card-text">Categoría: {product.category}</p>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;

