import { login } from "./pages/logIn.js";
import { register } from "./pages/register.js"

export const route = () => {

    let rootDiv = document.getElementById("root");

    //Paso 1
window.addEventListener('hashchange', () => {//hashchange es lo que ocurre cuando se agrega el # en la url
    if (window.location.hash === '#login'){
      console.log('mostrar about')
      rootDiv.appendChild(login()); // Paso 1.2
      changeRout(window.location.hash);
    } else if (window.location.hash === '#register'){
      console.log('funciona register')
      rootDiv.innerHTML = register() // Paso 1.2
      changeRout(window.location.hash);
    } 
  }); 
  
    
}