import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

export const register = () => {
  //Creación de campos de registro
  let root = document.getElementById("root");
  let header = document.getElementById("header");

  let divHeader = document.createElement("div");
  divHeader.setAttribute("class", "divHeader");
  header.appendChild(divHeader);

  let logo = document.createElement("img")
  logo.setAttribute("src", "./images/logo-plantasia.svg");
  logo.setAttribute("class", "logo");
  divHeader.appendChild(logo);

  let titlePlantasia = document.createElement("h1");
  titlePlantasia.textContent = "Plantasia";
  divHeader.appendChild(titlePlantasia);

  let formRegister = document.createElement("form");
  formRegister.setAttribute("class", "register"); 
  root.appendChild(formRegister);

  let titleCreateAccount = document.createElement("h2");
  titleCreateAccount.setAttribute("class","titleCreate");
  titleCreateAccount.textContent = "Crear una cuenta";
  formRegister.appendChild(titleCreateAccount);

  let userName = document.createElement("input");
  userName.setAttribute("type", "text");
  userName.setAttribute("placeholder", "usuario");
  userName.setAttribute("id", "userName");
  userName.setAttribute("class", "input");
  formRegister.appendChild(userName);

  let eMail = document.createElement("input");
  eMail.setAttribute("type", "email");
  eMail.setAttribute("placeholder", "ejemplo@correo.com");
  eMail.setAttribute("id", "eMail");
  eMail.setAttribute("class", "input");
  formRegister.appendChild(eMail);

  let passwordIn = document.createElement("input");
  passwordIn.setAttribute("type", "password");
  passwordIn.setAttribute("placeholder", "contraseña");
  passwordIn.setAttribute("id","passwordIn");
  passwordIn.setAttribute("class", "input");
  formRegister.appendChild(passwordIn);

  let buttonSend = document.createElement("input");
  buttonSend.setAttribute("type", "submit");
  buttonSend.setAttribute("value", "Registrar");
  buttonSend.setAttribute("class", "buttonsubmit");
  formRegister.appendChild(buttonSend);

  let sectionEnterWithGoogle = document.createElement("div");
  sectionEnterWithGoogle.setAttribute("class", "optionEnterWithGoogle");
  root.appendChild(sectionEnterWithGoogle);

  let optionGoogle = document.createElement("p");
  optionGoogle.textContent = "o"
  sectionEnterWithGoogle.appendChild(optionGoogle);

  let buttonGoogle = document.createElement("button");
  buttonGoogle.setAttribute("class", "buttonGoogle");
  buttonGoogle.setAttribute("id", "buttonGoogle");
  buttonGoogle.textContent = "Continuar con Google";  
  sectionEnterWithGoogle.appendChild(buttonGoogle);

  let logoGoogle = document.createElement("img");
  logoGoogle.setAttribute("class", "logoGoogle");
  logoGoogle.setAttribute("src", "./images/logo-google.png");
  logoGoogle.setAttribute("alt", "logo Google");
  buttonGoogle.appendChild(logoGoogle);

  createUserWithEmailAndPassword(auth, valueEmail, valuePassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // redirigir a muro
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        console.log(errorCode);
        console.log(errorMessage);
      });

}