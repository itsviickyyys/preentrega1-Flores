import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  // Función para vaciar el carrito
  const clearCart = () => {
    setCart([]); // Limpia todos los productos del carrito
  };

  return (
    <div className="container my-4">
      <h2>Carrito</h2>
      <ul className="list-group mb-4">
        {cart.map((product) => (
          <li key={product.id} className="list-group-item">
            <h5>{product.name}</h5>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
      <h4>Total: ${totalPrice}</h4>
      {cart.length > 0 ? (
        <div>
          <Link to="/checkout" className="btn btn-success mt-3 me-3">
            Finalizar Compra
          </Link>
          <button className="btn btn-danger mt-3" onClick={clearCart}>
            Vaciar Carrito
          </button>
        </div>
      ) : (
        <p>Tu carrito está vacío.</p>
      )}
    </div>
  );
};

export default Cart;


