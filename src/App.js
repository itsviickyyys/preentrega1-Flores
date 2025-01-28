import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Mi Tienda
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Todos los Productos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/makeup">
                    Makeup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/skincare">
                    Skincare
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    Carrito ({cart.length})
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer addToCart={addToCart} />}
          />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer addToCart={addToCart} />}
          />
          <Route
            path="/product/:itemId"
            element={<ItemDetailContainer addToCart={addToCart} />}
          />
          <Route
  path="/cart"
  element={<Cart cart={cart} setCart={setCart} />}
/>
          <Route
            path="/checkout"
            element={<Checkout cart={cart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
