import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

export const register = () => {
  
  //Creación de campos de registro
  history.pushState(null, 'register', '#register');

  let divRegister = document.createElement("div");

  let formRegister = document.createElement("form");
  formRegister.setAttribute("class", "register"); 
  divRegister.appendChild(formRegister);

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

  let emailError = document.createElement("span");
  emailError.setAttribute("class", "errorcorreo");
  formRegister.appendChild(emailError);

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

  //Creación elemento "ingresar con google"
  let sectionEnterWithGoogle = document.createElement("div");
  sectionEnterWithGoogle.setAttribute("class", "optionEnterWithGoogle");
  divRegister.appendChild(sectionEnterWithGoogle);

  let optionGoogle = document.createElement("p");
  optionGoogle.setAttribute("class", "orGoogle");
  optionGoogle.textContent = "o"
  sectionEnterWithGoogle.appendChild(optionGoogle);

  let buttonGoogle = document.createElement("button");
  buttonGoogle.setAttribute("class", "buttonGoogle");
  buttonGoogle.setAttribute("id", "buttonGoogle");

  let logoGoogle = document.createElement("img");
  logoGoogle.setAttribute("class", "logoGoogle");
  logoGoogle.setAttribute("src", "./images/logo-google.png");
  logoGoogle.setAttribute("alt", "logo Google");
  buttonGoogle.appendChild(logoGoogle);

  let labelBtnGoogle = document.createElement("p");
  labelBtnGoogle.textContent = "Continuar con Google";
  buttonGoogle.appendChild(labelBtnGoogle);
  
  sectionEnterWithGoogle.appendChild(buttonGoogle);


  const auth = getAuth();

  formRegister.addEventListener("submit", (send) => {
    send.preventDefault();
    let valueEmail = eMail.value;
    let valuePassword = passwordIn.value;
    console.log(valueEmail + valuePassword);

    createUserWithEmailAndPassword(auth, valueEmail, valuePassword)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // redirigir a muro
            console.log(user);
            window.location.hash="#home";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            console.log(errorCode);
            console.log(errorMessage);

            let emailMessage = document.querySelector(".errorcorreo");

            if (errorCode == 'auth/email-already-in-use') {
              emailMessage.innerHTML = "<p> Correo existente </p>";
              console.log("error correo existente");
            }
            else if (errorCode == 'auth/invalid-email') {
              emailMessage.innerHTML = "<p> Correo inválido</p>";
            }
      });

  });


  return divRegister;
}