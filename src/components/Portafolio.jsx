import Proyecto from "./Proyecto";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import avanzarImg from "../assets/flecha-correcta.png";
import regresarImg from "../assets/flecha-izquierda.png";
import {TransitionGroup, CSSTransition} from "react-transition-group";

export default function Portafolio (){
  const idiomaActual = useSelector(state=>state.idioma);
  const modoActual = useSelector(state=>state.modoColor)
  const tituloPortafolio = useSelector(state=>state.traducciones[idiomaActual].portafolio.titulo)
  const arrayProyects = useSelector(state=>state.traducciones[idiomaActual].portafolio.proyectos);
  const [proyectoActual, setProyectoActual] = useState(0);
  const [pause, setPause] = useState(false);
  const pauseTransition = useSelector(state=>state.pauseTransition);
  const isMobile = window.innerWidth <= 600;

  function cambiar(i){
    setProyectoActual(i)
  }
  function avanzar(){
    setProyectoActual(proyectoActual===arrayProyects.length-1?0:proyectoActual+1)
  }
  function regresar(){
    setProyectoActual(proyectoActual===0?arrayProyects.length-1:proyectoActual-1)
  }
  function pausar(activar){
    setPause(activar)
  }
  useEffect(()=>{
    if(!isMobile && !pauseTransition){
      const interval = setInterval(()=>{
      if(!pause)avanzar()
    }, 5000);
    return ()=>clearInterval(interval);
    }
  });


  return(
    <div className={modoActual==="oscuro"?"portafolio_container":"portafolio_container_lightMode"}>
      <h5>{tituloPortafolio}</h5>
      <div className="portafolio_proyectos_container">
        <img src={regresarImg} alt="regresar" onClick={()=>regresar()} className="controles"/>
          <div onMouseEnter={()=>pausar(true)} onMouseLeave={()=>pausar(false)} style={{position:"relative", height:"36vw", width:"70vw"}}>
            <TransitionGroup>
          <CSSTransition key={proyectoActual} classNames="fade" timeout={500}>
            <Proyecto 
              imagen={arrayProyects[proyectoActual].img} 
              titulo={arrayProyects[proyectoActual].title} 
              descripcion={arrayProyects[proyectoActual].description} 
              botonVideo={arrayProyects[proyectoActual].botonVideo}
              videoId={arrayProyects[proyectoActual].videoId}
              botonCodigo={arrayProyects[proyectoActual].botonCodigo}
              enlaceCodigo={arrayProyects[proyectoActual].enlaceCodigo}
              botonPagina={arrayProyects[proyectoActual].botonPagina}
              enlacePagina={arrayProyects[proyectoActual].enlacePagina}
              key={proyectoActual}/>
          </CSSTransition>
        </TransitionGroup>
          </div>
        <img src={avanzarImg} alt="avanzar" onClick={()=>avanzar()} className="controles"/>
      </div>
      <div className="portafolio_puntos_container">
        {arrayProyects?.map((p,i)=>(
        <p 
          key={i} 
          onClick={()=>cambiar(i)} 
          className={proyectoActual===i?"active":null}>
            •
        </p>
        ))}  
      </div>
    </div>
  )
}
