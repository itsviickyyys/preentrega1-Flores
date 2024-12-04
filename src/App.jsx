import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "bulma/css/bulma.css";
import esteeL from "./img/esteeL.jpg";
import Neutrogena from "./img/Neutrogena.jpg";
import THEORD from "./img/THEORD.jpg";
import SERUMTHE from "./img/SERUMTHE.jpg";
import ProtVichy from "./img/ProtVichy.jpg";
import Agua from "./img/Agua.jpg";
import Logo from "./img/Logo.png";
import ProtSol from "./img/ProtSol.jpg";
import VichyOjos from "./img/VichyOjos.jpg";
import UltHia from "./img/UltHia.jpg";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);

    Swal.fire({
      title: "¡Producto agregado!",
      text: "Agregaste el producto al carrito correctamente.",
      icon: "success",
      confirmButtonText: "Aceptar",
      timer: 2000,
    });
  };

  return (
    <div>
      <Navbar url={Logo} cartCount={cartCount} />

      <ItemListContainer greeting="¡Bienvenido a nuestra tienda de belleza!" />

      <div className="container mt-5">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div
              className="card text-center"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0px 4px 8px 0px #d9d7d7",
                borderRadius: "8px",
              }}
            >
              <div
                className="card-content p-3"
                style={{
                  color: "#121212",
                  textShadow: "1px 1px 2px #8f8f8f",
                }}
              >
                <ProfileCard
                  titulo="Crema Limpiadora Estée Lauder"
                  handle="Crema Limpiadora Estée Lauder Perfectly Clean 150ml Tipo de piel Todo tipo de piel"
                  url={esteeL}
                  precio="$108.990"
                  tituloStyle={{
                    fontSize: "18px",
                    textShadow: "1px 1px 2px #c4c4c4",
                  }}
                />
                <button
                  className="btn w-100 mt-3"
                  style={{ backgroundColor: "#ababab", color: "#2e2d2d" }}
                  onClick={handleAddToCart}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div
              className="card text-center"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0px 4px 8px 0px #d9d7d7",
                borderRadius: "8px",
              }}
            >
              <div
                className="card-content p-3"
                style={{
                  color: "#121212",
                  textShadow: "1px 1px 2px #8f8f8f",
                }}
              >
                <ProfileCard
                  titulo="Crema Hidratante Facial The Ordinary"
                  handle="Crema The Ordinary Natural Moisturizing Factors + Ha De 100ml"
                  url={THEORD}
                  precio="$79.900"
                  tituloStyle={{
                    fontSize: "18px",
                    textShadow: "1px 1px 2px #c4c4c4",
                  }}
                />
                <button
                  className="btn w-100 mt-3"
                  style={{ backgroundColor: "#ababab", color: "#2e2d2d" }}
                  onClick={handleAddToCart}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div
              className="card text-center"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0px 4px 8px 0px #d9d7d7",
                borderRadius: "8px",
              }}
            >
              <div
                className="card-content p-3"
                style={{
                  color: "#121212",
                  textShadow: "1px 1px 2px #8f8f8f",
                }}
              >
                <ProfileCard
                  titulo="Neutrogena Night Calming"
                  handle="Neutrogena night calming toallitas desmaquillantes Peso de la unidad: 220 g"
                  url={Neutrogena}
                  precio="$4.210,05"
                  tituloStyle={{
                    fontSize: "18px",
                    textShadow: "1px 1px 2px #c4c4c4",
                  }}
                />
                <button
                  className="btn w-100 mt-3"
                  style={{ backgroundColor: "#ababab", color: "#2e2d2d" }}
                  onClick={handleAddToCart}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-4 mb-4">
            <div
              className="card text-center"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0px 4px 8px 0px #d9d7d7",
                borderRadius: "8px",
              }}
            >
              <div
                className="card-content p-3"
                style={{
                  color: "#121212",
                  textShadow: "1px 1px 2px #8f8f8f",
                }}
              >
                <ProfileCard
                  titulo="Serum The Ordinary"
                  handle="Serum The Ordinary - Lactic Acid 10% + Ha - Original - Ifans"
                  url={SERUMTHE}
                  precio="$38.057,60"
                  tituloStyle={{
                    fontSize: "18px",
                    textShadow: "1px 1px 2px #c4c4c4",
                  }}
                />
                <button
                  className="btn w-100 mt-3"
                  style={{ backgroundColor: "#ababab", color: "#2e2d2d" }}
                  onClick={handleAddToCart}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-4 mb-4">
            <div
              className="card text-center"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0px 4px 8px 0px #d9d7d7",
                borderRadius: "8px",
              }}
            >
              <div
                className="card-content p-3"
                style={{
                  color: "#121212",
                  textShadow: "1px 1px 2px #8f8f8f",
                }}
              >
                <ProfileCard
                  titulo="Protector solar Vichy"
                  handle="Protector solar Vichy Idéal Soleil Agua Protectora Hidratante 30FPS en spray 200mL"
                  url={ProtVichy}
                  precio="$37.152,50"
                  tituloStyle={{
                    fontSize: "18px",
                    textShadow: "1px 1px 2px #c4c4c4",
                  }}
                />
                <button
                  className="btn w-100 mt-3"
                  style={{ backgroundColor: "#ababab", color: "#2e2d2d" }}
                  onClick={handleAddToCart}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-md-4 mb-4">
            <div
              className="card text-center"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0px 4px 8px 0px #d9d7d7",
                borderRadius: "8px",
              }}
            >
              <div
                className="card-content p-3"
                style={{
                  color: "#121212",
                  textShadow: "1px 1px 2px #8f8f8f",
                }}
              >
                <ProfileCard
                  titulo="Agua Micelar Bifásica Nivea Rose"
                  handle="Agua Micelar Bifásica Nivea Rose Care para Todo Tipo de Piel x 400 ml"
                  url={Agua}
                  precio="$11.481"
                  tituloStyle={{
                    fontSize: "18px",
                    textShadow: "1px 1px 2px #c4c4c4",
                  }}
                />
                <button
                  className="btn w-100 mt-3"
                  style={{ backgroundColor: "#ababab", color: "#2e2d2d" }}
                  onClick={handleAddToCart}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
          {/* Card 7 */}
          <div className="col-md-4 mb-4">
            <div
              className="card text-center"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0px 4px 8px 0px #d9d7d7",
                borderRadius: "8px",
              }}
            >
              <div
                className="card-content p-3"
                style={{
                  color: "#121212",
                  textShadow: "1px 1px 2px #8f8f8f",
                }}
              >
                <ProfileCard
                  titulo="Dermaglós Solar"
                  handle="Dermaglós Solar FPS 50 protector solar en emulsión de 250 mL"
                  url={ProtSol}
                  precio="$17.528"
                  tituloStyle={{
                    fontSize: "18px",
                    textShadow: "1px 1px 2px #c4c4c4",
                  }}
                />
                <button
                  className="btn w-100 mt-3"
                  style={{ backgroundColor: "#ababab", color: "#2e2d2d" }}
                  onClick={handleAddToCart}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
          {/* Card 8 */}
          <div className="col-md-4 mb-4">
            <div
              className="card text-center"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0px 4px 8px 0px #d9d7d7",
                borderRadius: "8px",
              }}
            >
              <div
                className="card-content p-3"
                style={{
                  color: "#121212",
                  textShadow: "1px 1px 2px #8f8f8f",
                }}
              >
                <ProfileCard
                  titulo="Minéral 89 Contorno De Ojos"
                  handle="Contorno De Ojos X 15ml De Vichy Tipo de piel Apto para todo tipo de piel"
                  url={VichyOjos}
                  precio="$38.106"
                  tituloStyle={{
                    fontSize: "18px",
                    textShadow: "1px 1px 2px #c4c4c4",
                  }}
                />
                <button
                  className="btn w-100 mt-3"
                  style={{ backgroundColor: "#ababab", color: "#2e2d2d" }}
                  onClick={handleAddToCart}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
          {/* Card 9 */}
          <div className="col-md-4 mb-4">
            <div
              className="card text-center"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0px 4px 8px 0px #d9d7d7",
                borderRadius: "8px",
              }}
            >
              <div
                className="card-content p-3"
                style={{
                  color: "#121212",
                  textShadow: "1px 1px 2px #8f8f8f",
                }}
              >
                <ProfileCard
                  titulo="Serum Acido Hialuronico"
                  handle="Serum Acido Hialuronico 30% Suero Hidratante Antiage 30 ML"
                  url={UltHia}
                  precio="$18.538"
                  tituloStyle={{
                    fontSize: "18px",
                    textShadow: "1px 1px 2px #c4c4c4",
                  }}
                />
                <button
                  className="btn w-100 mt-3"
                  style={{ backgroundColor: "#ababab", color: "#2e2d2d" }}
                  onClick={handleAddToCart}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;