// Importa los tipos de acciones necesarios
import {
  CAMBIAR_IDIOMA,
  CAMBIAR_MODO_COLOR,
  PAUSAR_ANIMACION,
} from "./actionTypes.js";
import htmlLogo from "../assets/html5.png";
import cssLogo from "../assets/css-3.png";
import javascriptLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import reduxLogo from "../assets/redux.svg";
import reactRouterLogo from "../assets/react-router.png";
import postgresLogo from "../assets/postgresql.png";
import sequelizeLogo from "../assets/sequelize.png";
import nodejsLogo from "../assets/nodejs.png";
import sassLogo from "../assets/sass.png";
import figmaLogo from "../assets/figma.png";
import proy1 from "../assets/proy1.png";
import proy2 from "../assets/proy2.png";
// Define el estado inicial del reducer
const initialState = {
  modoColor: "oscuro",
  idioma: "es",
  pauseTransition: false,
  habilidades: {
    lenguajes: [
      {
        title: "HTML",
        logo: htmlLogo,
        nivel: 4,
      },
      {
        title: "CSS",
        logo: cssLogo,
        nivel: 3,
      },
      {
        title: "JavaScript",
        logo: javascriptLogo,
        nivel: 4,
      },
    ],
    librerias: [
      {
        title: "React",
        logo: reactLogo,
        nivel: 4,
      },
      {
        title: "Redux",
        logo: reduxLogo,
        nivel: 4,
      },
      {
        title: "React Router",
        logo: reactRouterLogo,
        nivel: 4,
      },
      {
        title: "Sequelize",
        logo: sequelizeLogo,
        nivel: 4,
      },
    ],
    dataBases: [
      {
        title: "PostgreSQL",
        logo: postgresLogo,
        nivel: 3,
      },
    ],
    otros: [
      {
        title: "Node.js",
        logo: nodejsLogo,
        nivel: "-",
      },
      {
        title: "Sass",
        logo: sassLogo,
        nivel: 3,
      },
      {
        title: "Figma",
        logo: figmaLogo,
        nivel: 3,
      },
    ],
  },
  traducciones: {
    es: {
      opcionesBarraNavegacion: [
        "Inicio",
        "Sobre mi",
        "Habilidades",
        "Portafolio",
        "Contacto",
      ],
      profesion: "Desarrollador full stack",
      aboutTitulo: "Sobre mi:",
      aboutP1:
        "Como desarrollador web, cuento con habilidades avanzadas en HTML, CSS,       JavaScript, React, Node.js, Sequelize y PostgreSQL. He trabajado en diversos proyectos que implican el uso de tecnologías web y he demostrado habilidades efectivas en la ejecución de proyectos tanto individuales como en equipo. Me considero una persona analítica y creativa, apasionado por la solución de problemas y la exploración de nuevas tecnologías.",
      aboutP2:
        "Mi objetivo profesional es convertirme en un programador destacado gracias a mis habilidades y conocimientos. Me comprometo a seguir aprendiendo y actualizándome constantemente en este campo para lograr este objetivo. Además, me interesa explorar otras tecnologías, como la inteligencia artificial, y me gustaría tener la oportunidad de trabajar con ellas en la práctica.",
      aboutP3:
        "Creo en la importancia de la honestidad, la ética y la responsabilidad en mi trabajo. Estoy comprometido a trabajar de manera diligente y eficiente en cada proyecto, y a colaborar con mi equipo para lograr los mejores resultados posibles.",
      skills: {
        lenguajes: "Lenguajes:",
        librerias: "Librerías:",
        dataBases: "Bases de datos:",
        otros: "Entornos, Preprocesadores, Herramientas y otros:",
        footer: "Algunos íconos fueron tomados de la página",
      },
      portafolio: {
        titulo: "Proyectos desarrollados",
        proyectos: [
          {
            img: proy1,
            title: "Henry Countries",
            botonVideo: "Ver vídeo",
            enlaceVideo: "https://www.google.com/?hl=es",
            botonCodigo: "Ver código",
            enlaceCodigo: "https://github.com/RHuaraca/PI-Countries",
            botonPagina: "Ver página",
            enlacePagina: "https://www.google.com/?hl=es",
            description: `Durante la penúltima evaluación del bootcamp de Henry, desarrollé de forma individual el proyecto 'Henry Countries'. La aplicación consta de una interfaz front-end desarrollada en React con Redux, y para los estilos se ha utilizado únicamente CSS. El back-end se ha construido utilizando Express, Sequelize y PostgreSQL como base de datos.\nCon esta aplicación, los usuarios pueden explorar más de 240 países y obtener información relevante como la bandera, población y área del país, entre otros. La búsqueda es dinámica y se puede realizar a través de una barra de búsqueda o por categorías. Además, se permite agregar o eliminar actividades de un país, lo que brinda una experiencia personalizada a los usuarios. También se ha implementado la funcionalidad de buscar países por actividad.`,
          },
          {
            img: proy2,
            title: "Cava Verdot",
            botonVideo: "Ver vídeo",
            videoId: "X_zqFvb-gFM",
            botonCodigo: "Ver código",
            enlaceCodigo: "https://github.com/Lucascserrate/cava_verdot",
            botonPagina: "Ver página",
            enlacePagina: "https://cava-verdot.vercel.app/",
            description:
              "El proyecto grupal desarrollado por 5 integrantes como evaluación final del bootcamp de Henry consiste en un e-commerce de bebidas alcohólicas llamado 'Cava Verdot'. La aplicación cuenta con un front-end desarrollado con React, que permite a los usuarios realizar búsquedas a través de una barra de búsqueda, filtrando por categorías, precios, origen de procedencia, entre otros filtros. Además, se puede acceder a los detalles de cada bebida.\nPara realizar pagos, se ha integrado una pasarela de pagos desarrollada con Stripe, para lo cual es necesario registrarse a través de un formulario o con una cuenta de Google, implementado con Firebase. La protección de contraseñas y de información sensible se ha implementado con JWT y se ha guardado de forma protegida la información a través de una función hasheadora.\nPara el back-end se usó Express junto con Sequelize y PostgreSQL que proporciona una arquitectura sólida en la aplicación y que permite gestionar fácilmente las solicitudes HTTP. Además, Sequelize hace que la comunicación con la base de datos sea más fácil y segura, al tiempo que proporciona una capa de abstracción entre la base de datos y la aplicación, lo que significa que los cambios en el esquema de la base de datos pueden ser gestionados con mayor facilidad.",
          },
        ],
      },
    },
    en: {
      opcionesBarraNavegacion: [
        "Home",
        "About",
        "Skills",
        "Portfolio",
        "Contact",
      ],
      profesion: "Full stack developer",
      aboutTitulo: "About me:",
      aboutP1:
        "As a web developer, I have advanced skills in HTML, CSS, JavaScript, React, Node.js, Sequelize, and PostgreSQL. I have worked on various projects that involve the use of web technologies and have demonstrated effective skills in executing projects both individually and in a team. I consider myself an analytical and creative person, passionate about problem-solving and exploring new technologies.",
      aboutP2:
        "My professional goal is to become an outstanding programmer based on my skills and knowledge. I am committed to continuing my learning and staying up-to-date in this field to achieve this goal. Additionally, I have a strong interest in exploring other technologies, such as artificial intelligence, and I would like to have the opportunity to work with them in practice.",
      aboutP3:
        "I believe in the importance of honesty, ethics, and responsibility in my work. I am committed to working diligently and efficiently on each project, and to collaborating with my team to achieve the best possible results.",
      skills: {
        lenguajes: "Languages:",
        librerias: "Libraries:",
        dataBases: "Databases:",
        otros: "Environments, preprocessors, tools and others:",
        footer: "Some icons were taken from the page",
      },
      portafolio: {
        titulo: "Developed projects",
        proyectos: [
          {
            img: proy1,
            title: "Henry Countries",
            botonVideo: "Watch video",
            VideoId: "https://www.google.com/?hl=es",
            botonCodigo: "View code",
            enlaceCodigo: "https://github.com/RHuaraca/PI-Countries",
            botonPagina: "View page",
            enlacePagina: "https://www.google.com/?hl=es",
            description: `During the penultimate evaluation of the Henry bootcamp, I developed the 'Henry Countries' project individually. The application consists of a front-end interface developed in React with Redux, and only CSS has been used for styling. The back-end has been built using Express, Sequelize, and PostgreSQL as the database.\nWith this application, users can explore more than 240 countries and obtain relevant information such as the country's flag, population, and area, among others. The search is dynamic and can be done through a search bar or by categories. In addition, it allows users to add or remove activities from a country, providing a personalized experience. The functionality to search for countries by activity has also been implemented.`,
          },
          {
            img: proy2,
            title: "Cava Verdot",
            botonVideo: "Watch video",
            videoId: "X_zqFvb-gFM",
            botonCodigo: "View code",
            enlaceCodigo: "https://github.com/Lucascserrate/cava_verdot",
            botonPagina: "View page",
            enlacePagina: "https://cava-verdot.vercel.app/",
            description:
              "The group project developed by 5 members as the final evaluation of the Henry bootcamp is an e-commerce of alcoholic beverages called 'Cava Verdot'. The application has a front-end developed with React, which allows users to search through a search bar, filtering by categories, prices, country of origin, among other filters. In addition, users can access the details of each beverage.\nTo process payments, a payment gateway has been integrated with Stripe, for which registration is required through a form or with a Google account, implemented with Firebase. Password and sensitive information protection has been implemented with JWT and information has been securely stored through a hashing function.\nFor the back-end, Express was used along with Sequelize and PostgreSQL, which provides a solid architecture in the application and allows for easy management of HTTP requests. Additionally, Sequelize makes communication with the database easier and more secure, while providing a layer of abstraction between the database and the application, which means that changes to the database schema can be managed more easily.",
          },
        ],
      },
    },
  },
};

// Define el reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAMBIAR_IDIOMA:
      let idiomaActual = state.idioma === "es" ? "en" : "es";
      return {
        ...state,
        idioma: idiomaActual,
      };
    case CAMBIAR_MODO_COLOR:
      let colorActual = state.modoColor === "claro" ? "oscuro" : "claro";
      return {
        ...state,
        modoColor: colorActual,
      };
    case PAUSAR_ANIMACION:
      return {
        ...state,
        pauseTransition: !state.pauseTransition,
      };
    default:
      // Devuelve el estado sin cambios para cualquier otra acción
      return state;
  }
};

export default rootReducer;
