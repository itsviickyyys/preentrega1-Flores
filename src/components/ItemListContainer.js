
import React from "react";

function ItemListContainer({ greeting }) {
  return (
    <div className="container my-4">
      <h2
        className="has-text-black has-text-centered"
        style={{ 
          fontFamily: "Arial, sans-serif", 
          color: "#292828" 
        }}
      >
        {greeting}
      </h2>
    </div>
  );
}

export default ItemListContainer;

