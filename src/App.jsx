import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

// Mock product data
const mockProducts = [
  {
    id: 1,
    name: "Crema Limpiadora",
    category: "skincare",
    price: "$108.990",
    image: "/img/esteeL.jpg",
  },
  {
    id: 2,
    name: "Serum The Ordinary",
    category: "skincare",
    price: "$38.057,60",
    image: "/img/THEORD.jpg",
  },
  {
    id: 3,
    name: "Toallitas Neutrogena",
    category: "makeup",
    price: "$4.210,05",
    image: "/img/Neutrogena.jpg",
  },
  {
    id: 4,
    name: "Hidratante Facial",
    category: "skincare",
    price: "$79.900",
    image: "/img/UltHia.jpg",
  },
  {
    id: 5,
    name: "Protector Solar",
    category: "makeup",
    price: "$15.000",
    image: "/img/ProtVichy.jpg",
  },
];

// Function to select random products
function getRandomProducts(products, count) {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Component for product details page
function ProductDetailPage({ productId }) {
  const product = mockProducts.find((p) => p.id === parseInt(productId));

  if (!product) return <h2>Producto no encontrado</h2>;

  return (
    <div className="container my-4">
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", height: "400px", objectFit: "cover" }}
      />
      <p>Precio: {product.price}</p>
      <p>Categoría: {product.category}</p>
    </div>
  );
}

// Component for showing product details in the list (thumbnail)
function ProductDetail({ product }) {
  return (
    <div className="card">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ width: "300px", height: "400px", objectFit: "cover", margin: "0 auto" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Precio: {product.price}</p>
        <p className="card-text">Categoría: {product.category}</p>
        <Link to={`/productos/${product.id}`} className="btn btn-primary">
          Ver detalles
        </Link>
      </div>
    </div>
  );
}

function App() {
  const randomProducts = getRandomProducts(mockProducts, 3);

  return (
    <Router>
      <Navbar url="/img/logo.png" cartCount={0} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container my-4">
              <h1 className="text-center mb-4">Inicio</h1>
              <div className="row">
                {randomProducts.map((product) => (
                  <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
                    <ProductDetail product={product} />
                  </div>
                ))}
              </div>
            </div>
          }
        />
        <Route path="/nosotros" element={<h1>Nosotros</h1>} />
        <Route
          path="/productos"
          element={
            <div className="container my-4">
              <h1 className="text-center mb-4">Todos los productos</h1>
              <div className="row">
                {mockProducts.map((product) => (
                  <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
                    <ProductDetail product={product} />
                  </div>
                ))}
              </div>
            </div>
          }
        />
        <Route path="/cart" element={<h1>Carrito</h1>} />
        
        {/* Product details route */}
        <Route
          path="/productos/:id"
          element={
            <ProductDetailPage />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

