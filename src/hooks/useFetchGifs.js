// USAR RAFCE Y BORRAR RETURN + IMPORTACION

import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  //Aqui necesito hacer peticion y traer las imagenes
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state; //data + loading
};
