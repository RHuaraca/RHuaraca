import { useSelector } from "react-redux";

export default function Home(){
  let idiomaActual = useSelector(state=>state.idioma);
  let colorMode = useSelector(state=>state.modoColor);
  let showProfesion = useSelector(state=>state.traducciones[idiomaActual].profesion);
    return (
        <section className={colorMode==="oscuro"?"home_container":"home_container_ligthMode"}>
          <h1>RENE HUARACA</h1>
          <h2>{showProfesion}</h2>
        </section>
    );
}
