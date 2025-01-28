import React, { useState } from "react";

const ItemQuantitySelector = ({ initialQuantity = 1, maxQuantity = 10, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleInputChange = (e) => {
    const value = Math.max(1, Math.min(maxQuantity, Number(e.target.value) || 1));
    setQuantity(value);
    onQuantityChange(value);
  };

  return (
    <div className="item-quantity-selector d-flex align-items-center">
      <button
        className="btn btn-outline-secondary"
        onClick={handleDecrease}
        disabled={quantity <= 1}
      >
        -
      </button>
      <input
        type="number"
        className="form-control text-center mx-2"
        value={quantity}
        onChange={handleInputChange}
        min="1"
        max={maxQuantity}
        style={{ width: "60px" }}
      />
      <button
        className="btn btn-outline-secondary"
        onClick={handleIncrease}
        disabled={quantity >= maxQuantity}
      >
        +
      </button>
    </div>
  );
};

export default ItemQuantitySelector;
