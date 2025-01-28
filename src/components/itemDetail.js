import React from "react";
import ItemQuantitySelector from "./ItemQuantitySelector";

function ItemDetail({ product, addToCart }) {
  return (
    <div className="container my-4">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="img-fluid mb-3" />
      <p>Precio: ${product.price.toFixed(2)}</p>
      <ItemQuantitySelector product={product} addToCart={addToCart} />
    </div>
  );
}
<ItemQuantitySelector
  initialQuantity={1}
  maxQuantity={10}
  onQuantityChange={(newQuantity) => console.log("Cantidad seleccionada:", newQuantity)}
/>
export default ItemDetail;
