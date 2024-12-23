import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const mockProducts = [
  { id: 1, name: "Crema Limpiadora", category: "skincare", price: "$108.990", image: "/img/esteeL.jpg" },
  { id: 2, name: "Serum The Ordinary", category: "skincare", price: "$38.057,60", image: "/img/THEORD.jpg" },
  { id: 3, name: "Toallitas Neutrogena", category: "makeup", price: "$4.210,05", image: "/img/Neutrogena.jpg" },
  { id: 4, name: "Hidratante Facial", category: "skincare", price: "$79.900", image: "/img/UltHia.jpg" },
  { id: 5, name: "Protector Solar", category: "makeup", price: "$15.000", image: "/img/ProtVichy.jpg" },
];

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = mockProducts.find((product) => product.id === parseInt(itemId));
    setProduct(foundProduct || null);
  }, [itemId]);

  return (
    <div className="container my-4">
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <h2 className="text-center">Producto no encontrado</h2>
      )}
    </div>
  );
}

export default ItemDetailContainer;
