import iconoGithub from "../assets/iconoGithub.png";
import iconoLinkedin from "../assets/iconoLinkedin.png";
import iconoCorreo from "../assets/iconoCorreo.png";
import iconoWhatsapp from "../assets/iconoWhatsapp.png";

export default function IconoGithub(){
  return(
    <div className="iconoGithub_container">
      <a href="https://github.com/RHuaraca" target="_blank" rel="noreferrer">
        <img src={iconoGithub} alt="icono de GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/rene-huaraca-ccancce-38275b105" target="_blank" rel="noreferrer">
      <img src={iconoLinkedin} alt="icono de Linkedin" />
      </a>
      <a href="mailto:renepersonal@gmail.com" target="_blank" rel="noreferrer">
      <img src={iconoCorreo} alt="icono de correo" />
      </a>
      <a href="https://api.whatsapp.com/send/?phone=51933423315" target="_blank" rel="noreferrer">
      <img src={iconoWhatsapp} alt="icono de whatsapp" />
      </a>
    </div>
  )
}
