import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = ({ cart }) => {
  const navigate = useNavigate();

  const handlePayment = () => {
    Swal.fire({
      title: "¡Compra finalizada!",
      text: "Tu compra se ha realizado con éxito.",
      icon: "success",
      confirmButtonText: "Aceptar",
    }).then(() => {
      navigate("/"); // Redirige al inicio después de finalizar la compra
    });
  };

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="container my-4">
      <h2>Resumen de tu compra</h2>
      <ul className="list-group mb-4">
        {cart.map((product) => (
          <li key={product.id} className="list-group-item">
            <h5>{product.name}</h5>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
      <h4>Total: ${totalPrice}</h4>
      <button className="btn btn-success mt-3" onClick={handlePayment}>
        Pagar
      </button>
    </div>
  );
};

export default Checkout;

