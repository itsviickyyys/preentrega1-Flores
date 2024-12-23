import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"; // Corregimos el nombre del componente (con mayúscula)

const mockProducts = [
  {
    id: 1,
    name: "Crema Limpiadora",
    category: "skincare",
    price: "$108.990",
    image: "/img/esteeL.jpg",
  },
  {
    id: 2,
    name: "Serum The Ordinary",
    category: "skincare",
    price: "$38.057,60",
    image: "/img/THEORD.jpg",
  },
  {
    id: 3,
    name: "Toallitas Neutrogena",
    category: "makeup",
    price: "$4.210,05",
    image: "/img/Neutrogena.jpg",
  },
  {
    id: 4,
    name: "Hidratante Facial",
    category: "skincare",
    price: "$79.900",
    image: "/img/UltHia.jpg",
  },
  {
    id: 5,
    name: "Protector Solar",
    category: "makeup",
    price: "$15.000",
    image: "/img/ProtVichy.jpg",
  },
];

function ItemDetailContainer() {
  const { itemId } = useParams(); // Accedemos al parámetro `itemId` desde la URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una llamada a una API con una Promise
    const fetchProduct = new Promise((resolve) => {
      setTimeout(() => {
        const foundProduct = mockProducts.find(
          (product) => product.id === parseInt(itemId)
        );
        resolve(foundProduct);
      }, 1000); // Retraso simulado de 1 segundo
    });

    fetchProduct
      .then((result) => {
        setProduct(result);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [itemId]);

  if (loading) {
    return <div className="text-center">Cargando...</div>;
  }

  return (
    <div className="container my-4">
      {product ? (
        <ItemDetail product={product} /> {/* Cambiamos a "ItemDetail" */}
      ) : (
        <h2 className="text-center">Producto no encontrado</h2>
      )}
    </div>
  );
}

export default ItemDetailContainer;


