import { login } from "./pages/logIn.js";
import { register } from "./pages/register.js"
import { home } from "./pages/home.js"
export const route = () => {
 let rootDiv = document.getElementById("root");
 
 //rootDiv.innerHTML = "";
    //Paso 1

window.addEventListener('hashchange', () => {//hashchange es lo que ocurre cuando se agrega el # en la url
    if (window.location.hash === '#login'){
      console.log('se ve login logooo')
      rootDiv.innerHTML = "";
      rootDiv.appendChild(login()); // Paso 1.2
      //changeRout(window.location.hash);
    } else if (window.location.hash === '#register'){
      console.log('funciona register')
      rootDiv.innerHTML = "";
      rootDiv.appendChild(register()); // Paso 1.2
      //changeRout(window.location.hash);
    } else if (window.location.hash === '#home'){
      console.log('proximamente un home')
      rootDiv.innerHTML = "";
      //console.log(home());
      rootDiv.appendChild(home());
      
    }
  }); 
  
    
}