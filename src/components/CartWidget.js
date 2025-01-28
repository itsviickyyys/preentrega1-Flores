import React from "react";

function CartWidget({ count }) {
  return (
    <span className="badge bg-primary ms-2">
      <i className="bi bi-cart-fill"></i> {count}
    </span>
  );
}

export default CartWidget;
