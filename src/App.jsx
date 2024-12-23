import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const mockProducts = [
  { id: 1, name: "Crema Limpiadora", category: "skincare", price: "$108.990", image: "/img/esteeL.jpg" },
  { id: 2, name: "Serum The Ordinary", category: "skincare", price: "$38.057,60", image: "/img/THEORD.jpg" },
  { id: 3, name: "Toallitas Neutrogena", category: "makeup", price: "$4.210,05", image: "/img/Neutrogena.jpg" },
  { id: 4, name: "Hidratante Facial", category: "skincare", price: "$79.900", image: "/img/UltHia.jpg" },
  { id: 5, name: "Protector Solar", category: "makeup", price: "$15.000", image: "/img/ProtVichy.jpg" },
];

function App() {
  const [products] = useState(mockProducts);
  const [cart, setCart] = useState([]); // Estado para manejar el carrito

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
                  <Link className="nav-link active" aria-current="page" to="/">
                    Productos
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
            element={<ItemListContainer products={products} addToCart={addToCart} />}
          />
          <Route
            path="/product/:itemId"
            element={<ItemDetailContainer products={products} />}
          />
          <Route
            path="/cart"
            element={
              <div className="container my-4">
                <h2>Carrito de Compras</h2>
                {cart.length > 0 ? (
                  <ul>
                    {cart.map((item, index) => (
                      <li key={index}>
                        {item.name} - {item.price}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>El carrito está vacío.</p>
                )}
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

