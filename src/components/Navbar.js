import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function Navbar({ url, cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand">
          <img
            src="/img/Logo.png" // Ruta correcta desde la carpeta public
            alt="logo de la marca"
            style={{ width: "120px", height: "auto" }}
          />
        </Link>

        {/* Navbar Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Menu */}
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/nosotros" className="nav-link">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/productos" className="nav-link">
                Productos
              </Link>
            </li>

            {/* Dropdown Categorías */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="categoriesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </Link>
              <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                <li>
                  <Link to="/categorias/serums" className="dropdown-item">
                    Serums
                  </Link>
                </li>
                <li>
                  <Link to="/categorias/cremas" className="dropdown-item">
                    Cremas
                  </Link>
                </li>
                <li>
                  <Link to="/categorias/hidratantes" className="dropdown-item">
                    Hidratantes
                  </Link>
                </li>
                <li>
                  <Link to="/categorias/proteccion" className="dropdown-item">
                    Protección Solar
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* Cart Section */}
          <div className="d-flex align-items-center">
            <Link to="/cart" className="btn btn-outline-secondary me-2">
              <img
                src="/img/LogoCart.png" // Ruta correcta desde la carpeta public
                alt="Carrito"
                style={{ width: "30px", height: "30px", marginRight: "8px" }}
              />
              <span>Carrito</span>
            </Link>
            <CartWidget cartCount={cartCount} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
