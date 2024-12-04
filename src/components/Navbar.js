import React from "react";
import CartWidget from "./CartWidget";
import LogoCart from "../img/LogoCart.png";

function Navbar({ url, cartCount }) {
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="container">
        {/* Brand Logo */}
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={url} alt="logo de la marca" />
          </a>

          <button
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMenu"
            onClick={() => {
              const menu = document.getElementById("navbarMenu");
              menu.classList.toggle("is-active");
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        {/* Navbar Menu */}
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-start">
            <a href="#home" className="navbar-item">
              Inicio
            </a>
            <a href="#nosotros" className="navbar-item">
              Nosotros
            </a>
            <a href="#productos" className="navbar-item">
              Productos
            </a>
          </div>

          {/* Cart Section */}
          <div
            className="navbar-end"
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <a href="/cart" className="navbar-item">
              <img
                src={LogoCart}
                alt="Carrito"
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
              />
            </a>
            <CartWidget cartCount={cartCount} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

