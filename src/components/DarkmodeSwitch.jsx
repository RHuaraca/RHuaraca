import { useState } from "react";
import sol from "../assets/sol.png";
import luna from "../assets/luna.png";
import {useSelector, useDispatch} from "react-redux";
import {cambiarModoColor} from "../redux/actions.js";

export default function DarkmodeSwitch(){
  let modoActual = useSelector(state=>state.modoColor);
  let [opaco, setOpaco] = useState(modoActual);
  let dispatch = useDispatch();
  const selecionModoColor = (color)=>{
    if(color!==opaco){
      dispatch(cambiarModoColor());
      setOpaco(opaco==='oscuro'?'claro':'oscuro')
    }
  }
  return(
    <div className="switchModoColor_container">
      <div className="switch_oscuro" onClick={()=>selecionModoColor("oscuro")}>
        <img src={luna} alt="noche" className={opaco==="claro"?"opacar":null}/>
      </div>
      <div className="switch_claro" onClick={()=>selecionModoColor("claro")}>
        <img src={sol} alt="dia" className={opaco==="oscuro"?"opacar":null} />
      </div>
    </div>
  )
}
