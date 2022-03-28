import { login } from "./pages/logIn.js";
import { register } from "./pages/register.js"
import { home } from "./pages/home.js"

export const route = () => {

  let rootDiv = document.getElementById("root");

  // // Mostrar HTML correcto al recargar la página
  // if (window.location.pathname === '/login') {
  //   rootDiv.appendChild(login());
  // } else if (window.location.pathname === '/register') {
  //   rootDiv.appendChild(register());
  // } else if (window.location.pathname === 'home') {
  //   rootDiv.appendChild(home());
  // }


  // // Cambiar la URL para que no ocupe el #
  // const changeRoute = (hash) => {
  //   if (hash === '#login') {
  //     window.history.replaceState({}, 'login', '/login');
  //   } else if (hash === '#register') {
  //     window.history.replaceState({}, 'register', '/register');
  //   } else if (hash === '#home') {
  //     window.history.replaceState({}, 'home', '/home');
  //   }
  // }

  // Mostrar html después de selleccionar un link
  window.addEventListener('hashchange', () => { //hashchange es lo que ocurre cuando se agrega el # en la url
    if (window.location.hash === '#login') {
      //console.log('se ve el login logooo')
      rootDiv.innerHTML = "";
      rootDiv.appendChild(login()); // Reemplazar el contenido del div con id root
      document.body.style.backgroundColor = "#F9F0E2";
      //changeRoute(window.location.hash);
      
    } else if (window.location.hash === '#register') {
      //console.log('funciona el register')
      rootDiv.innerHTML = "";
      rootDiv.appendChild(register()); // Reemplazar el contenido del div con id root
      document.body.style.backgroundColor = "#F9F0E2";
      //changeRoute(window.location.hash);

    } else if (window.location.hash === '#home') {
      console.log('home')
      rootDiv.innerHTML = "";
      //console.log(home());
      rootDiv.appendChild(home());
      document.body.style.backgroundColor = "#FCFCFC"; 
      //changeRoute(window.location.hash);
    }
  });

  // Mostrar HTML correcto al moverse con los botones de atrás y adelante del navegador
  // window.onpopstate = () => {
  //   if (window.location.pathname === '/login') {
  //     rootDiv.appendChild(login());
  //   } else if (window.location.pathname === '/register') {
  //     rootDiv.appendChild(register());
  //   } else if (window.location.pathname === '/home') {
  //     rootDiv.appendChild(home());
  //   }

  // }
}