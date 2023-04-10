import {useState} from "react";
import VideoModal from "./VideoModal";
import {useDispatch, useSelector} from "react-redux";
import {pausarAnimacion} from "../redux/actions.js"

export default function Proyecto ({imagen, titulo, descripcion, botonVideo, videoId, botonCodigo, enlaceCodigo, botonPagina, enlacePagina}){
  const modoActual = useSelector(state=>state.modoColor);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()
  const toggleModal = () => {
    setIsOpen(!isOpen);
    dispatch(pausarAnimacion())
  };
  //console.log(isOpen)
  const parrafos = descripcion.split("\n");
  return(
    <div className={modoActual==="oscuro"?"proyecto_container":"proyecto_container_lightMode"}>
      <img src={imagen} alt={`imagen de ${titulo}`} />
      <div className="visible_container">
        <div className="proyecto_text_container">
          <h6>{titulo}</h6>
          {parrafos?.map((parrafo,i)=>(<p key={i}>{parrafo}{"\n"}</p>))}
        </div>
        <div className="botones">
          <button onClick={toggleModal}>{botonVideo}</button>
          <button><a href={enlaceCodigo} target="_blank" rel="noreferrer">{botonCodigo}</a></button>
          <button><a href={enlacePagina} target="_blank" rel="noreferrer">{botonPagina}</a></button>
        </div>
      </div>
      {isOpen?<div className="modal">
      <span className="close" onClick={toggleModal}>&times;</span>
      <VideoModal videoId={videoId} titulo={titulo}/>
      </div>:null}
    </div>
  )
}
    
