import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn animate__delay-1s animate__slow 	2s ">
        {category}
      </h3>

      {/* {loading ? "Loading..." : null} */}
      {loading && <p>Loading...</p>}

      <div className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} /> //le paso como propiedad independiente
        ))}
      </div>
    </>
  );
};

export default GifGrid;
