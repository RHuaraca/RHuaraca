import perfilOriginal from "../assets/perfilOriginal.jpeg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function About() {
  const [mostrarImagen, setMostrarImagen] = useState(false);
  const idiomaActual = useSelector(state=>state.idioma);
  const titulo = useSelector(state=>state.traducciones[idiomaActual].aboutTitulo);
  const parrafo1 = useSelector(state=>state.traducciones[idiomaActual].aboutP1); 
  const parrafo2 = useSelector(state=>state.traducciones[idiomaActual].aboutP2);
  const parrafo3 = useSelector(state=>state.traducciones[idiomaActual].aboutP3);
  const colorActual = useSelector(state=>state.modoColor);
  useEffect(() => {
    setMostrarImagen(true);
  }, []);
  return(
    <div className={colorActual==="oscuro"?"about_container":"about_container_ligthMode"}>
      <div className="about_imgTitleParrafo">
        <img src={perfilOriginal} className={mostrarImagen?"mostrar":""} alt="Rene Huaraca" />
        <div>
          <h3>{titulo}</h3>
          <p>{parrafo1}</p>
        </div>
      </div>
      <p>{parrafo2}</p>
      <p>{parrafo3}</p>
    </div>
  )
}
