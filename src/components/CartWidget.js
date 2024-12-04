import React from "react";

function CartWidget({ cartCount }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px",
        color: "#292828", // Color del contador
        fontWeight: "bold",
      }}
    >
      {cartCount}
    </div>
  );
}

export default CartWidget;

