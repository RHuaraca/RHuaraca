import Skill from "./Skill";
import {useSelector} from "react-redux";

export default function Skills(){
  const idiomaActual = useSelector(state=>state.idioma);
  const lenguajes = useSelector(state=>state.habilidades.lenguajes);
  const librerias = useSelector(state=>state.habilidades.librerias);
  const dataBases = useSelector(state=>state.habilidades.dataBases);
  const otros = useSelector(state => state.habilidades.otros);
  const idiomas = useSelector(state => state.traducciones[idiomaActual].skills);
  const colorMode = useSelector(state => state.modoColor);
  return(
    <div className={colorMode==="oscuro"?"skills_container":"skills_container_ligthMode"}>
      <h5>{idiomas.lenguajes}</h5>
      <div className="skills_section">
        {lenguajes?.map((lenguaje,i)=>(
        <Skill 
        title={lenguaje.title} 
        key={i} 
        logo={lenguaje.logo}
        nivel={lenguaje.nivel}/>))}
      </div>
      <h5>{idiomas.librerias}</h5>
      <div className="skills_section">
        {librerias?.map((libreria,i)=>(
          <Skill
          title={libreria.title}
          logo={libreria.logo}
          nivel={libreria.nivel}
          key={i}
          />
        ))}
      </div>
      <h5>{idiomas.dataBases}</h5>
      <div className="skills_section">
        {dataBases?.map((dataBase,i)=>(
          <Skill
          title={dataBase.title}
          logo={dataBase.logo}
          nivel={dataBase.nivel}
          key={i}
          />
        ))}
      </div>
      <h5>{idiomas.otros}</h5>
      <div className="skills_section">
        {otros?.map((otro,i)=>(
          <Skill
          title={otro.title}
          logo={otro.logo}
          nivel={otro.nivel}
          key={i}
          />
        ))}
      </div>
      <footer>
        <p>{idiomas.footer} <a href="https://www.flaticon.com/">Flaticon</a></p>
      </footer>
    </div>
  )
}
