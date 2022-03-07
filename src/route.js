import { login } from "./pages/logIn.js";
import { register } from "./pages/register.js"
import { home } from "./pages/home.js"

export const route = () => {

  let rootDiv = document.getElementById("root");

  console.log(window.location.pathname);
  if (window.location.pathname === '/login') {
    rootDiv.appendChild(login());
  } else if (window.location.pathname === '/register') {
    rootDiv.appendChild(register());
  } else if (window.location.pathname === '/home') {
    rootDiv.appendChild(home());
  }


  //Paso 1.3
  const changeRoute = (hash) => {
    // cambiando url para que no ocupar #
    if (hash === '#login') {
      window.history.replaceState({}, 'login', '/login');
    } else if (hash === '#register') {
      window.history.replaceState({}, 'register', '/register');
    } else if (hash === '#home') {
      window.history.replaceState({}, 'home', '/home');
    }
  }

  //Paso 1
  window.addEventListener('hashchange', () => {//hashchange es lo que ocurre cuando se agrega el # en la url
    if (window.location.hash === '#login') {
      console.log('se ve el login logooo')
      rootDiv.innerHTML = "";
      rootDiv.appendChild(login()); // Paso 1.2
      changeRoute(window.location.hash);
    } else if (window.location.hash === '#register') {
      console.log('funciona el register')
      rootDiv.innerHTML = "";
      rootDiv.appendChild(register()); // Paso 1.2
      changeRoute(window.location.hash);
    } else if (window.location.hash === '#home') {
      console.log('proximamente un home')
      rootDiv.innerHTML = "";
      //console.log(home());
      rootDiv.appendChild(home());
      changeRoute(window.location.hash);

    }
  });

  // //Paso 3
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