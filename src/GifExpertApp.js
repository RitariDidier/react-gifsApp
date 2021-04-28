import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categorias, setCategorias] = useState([
    "Dragon Ball",
    // "Full Metal Alchemist",
    // "Shaman King",
  ]);

  // const handleAdd = () => {
  //   // setCategorias([...categorias, "HunterXHunter"]);  // Agrego al finals
  //   // setCategorias(["HunterXHunter", ...categorias]); //agrego al inicio
  //   setCategorias((cats) => [...cats, "HunterXHunter"]); // Con callback
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias} />
      <br></br>

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {categorias.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
