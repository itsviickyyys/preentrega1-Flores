import React from "react";

function CartView({ cartItems }) {
  return (
    <div className="container my-4">
      <h1>Carrito</h1>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>Precio: {item.price}</p>
              <p>Cantidad: {item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartView;
