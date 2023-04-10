import { useSelector } from "react-redux";

export default function Skill ({logo, title, nivel}){

  const color = useSelector(state=>state.modoColor);

  return(
    <div className={color==="oscuro"?"skill_container":"skill_container_ligthMode"}>
      <img src={logo} alt={title} />
      <h6>{title}</h6>
    </div>
  )
}
