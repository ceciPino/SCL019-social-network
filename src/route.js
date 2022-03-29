import { login } from "./pages/logIn.js";
import { register } from "./pages/register.js"
import { home } from "./pages/home.js"

export const route = () => {

  let rootDiv = document.getElementById("root");


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

}