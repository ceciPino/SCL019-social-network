import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { headerContainer } from "./header.js";
import { footerContainer } from "./footer.js";

export const register = () => {

  history.pushState(null, 'register', '#register');

  let divRegister = document.createElement("div");
  divRegister.setAttribute("class", "divRegister");

  //IMAGEN DESKTOP
  let divIllustration = document.createElement("divIllustration");
  divIllustration.setAttribute("class", "divIllustration");
  divRegister.appendChild(divIllustration);

  let illustrationPlants = document.createElement("img");
  illustrationPlants.setAttribute("class", "illustrationPlants");
  illustrationPlants.setAttribute("src", "./images/ilustracion_plant_lovers.svg");
  illustrationPlants.setAttribute("alt", "ilustración de Charlotte Ager");
  divIllustration.appendChild(illustrationPlants);

  //DIV PARA HEADER Y MAIN
  let divHeader_main = document.createElement("div");
  divHeader_main.setAttribute("class", "divHeader_main");
  divRegister.appendChild(divHeader_main);

  //Trayendo header
  divHeader_main.appendChild(headerContainer());

  //Creación de main
  let divMain = document.createElement("main");
  divHeader_main.appendChild(divMain);

  //FORM
  let formRegister = document.createElement("form");
  formRegister.setAttribute("class", "register");
  divMain.appendChild(formRegister);
  //Titulo
  let titleCreateAccount = document.createElement("h2");
  titleCreateAccount.setAttribute("class", "titleCreate");
  titleCreateAccount.textContent = "Crear una cuenta";
  formRegister.appendChild(titleCreateAccount);

  //input username
  let userName = document.createElement("input");
  userName.setAttribute("type", "text");
  userName.setAttribute("placeholder", "usuario");
  userName.setAttribute("id", "userName");
  userName.setAttribute("class", "input");
  userName.setAttribute("required", "");
  formRegister.appendChild(userName);

  //input email
  let eMail = document.createElement("input");
  eMail.setAttribute("type", "email");
  eMail.setAttribute("placeholder", "ejemplo@correo.com");
  eMail.setAttribute("id", "eMail");
  eMail.setAttribute("class", "input");
  eMail.setAttribute("required", "");
  formRegister.appendChild(eMail);
  //mensaje error email
  let emailError = document.createElement("span");
  emailError.setAttribute("class", "errorcorreo");
  formRegister.appendChild(emailError);

  //input password
  let passwordIn = document.createElement("input");
  passwordIn.setAttribute("type", "password");
  passwordIn.setAttribute("placeholder", "contraseña");
  passwordIn.setAttribute("id", "passwordIn");
  passwordIn.setAttribute("class", "input");
  passwordIn.setAttribute("required", "");
  formRegister.appendChild(passwordIn);
  //mensaje error contraseña
  let passwordError = document.createElement("span");
  passwordError.setAttribute("class", "errorcontrasena");
  formRegister.appendChild(passwordError);

  //Mostrar contraseña
  const openEyeR = document.createElement('img');
    openEyeR.setAttribute("class", "openEye");
    openEyeR.setAttribute("src", "./images/openeye.png");
    formRegister.appendChild(openEyeR);
    
    const showPassword = (e) => {
        e.preventDefault();
        const p1 = document.getElementById('passwordIn');
        if (p1.type === 'password') {
          p1.type = 'text';
        } else {
          p1.type = 'password';
        }
      };
    
    openEyeR.addEventListener('click', showPassword);

  //botón registrarse
  let buttonSend = document.createElement("input");
  buttonSend.setAttribute("type", "submit");
  buttonSend.setAttribute("value", "Registrar");
  buttonSend.setAttribute("class", "buttonsubmit");
  formRegister.appendChild(buttonSend);

  //SECCION GOOGLE
  let sectionEnterWithGoogle = document.createElement("div");
  sectionEnterWithGoogle.setAttribute("class", "optionEnterWithGoogle");
  divMain.appendChild(sectionEnterWithGoogle);

  let optionGoogle = document.createElement("p");
  optionGoogle.setAttribute("class", "orGoogle");
  optionGoogle.textContent = "o"
  sectionEnterWithGoogle.appendChild(optionGoogle);

  //botón google
  let buttonGoogle = document.createElement("button");
  buttonGoogle.setAttribute("class", "buttonGoogle");
  buttonGoogle.setAttribute("id", "buttonGoogle");
  //logo google
  let logoGoogle = document.createElement("img");
  logoGoogle.setAttribute("class", "logoGoogle");
  logoGoogle.setAttribute("src", "./images/logo-google.png");
  logoGoogle.setAttribute("alt", "logo Google");
  buttonGoogle.appendChild(logoGoogle);
  //texto botón google
  let labelBtnGoogle = document.createElement("p");
  labelBtnGoogle.textContent = "Continuar con Google";
  buttonGoogle.appendChild(labelBtnGoogle);

  sectionEnterWithGoogle.appendChild(buttonGoogle);

  //FOOTER
  divRegister.appendChild(footerContainer());

  //función verificación de email
  const auth = getAuth();
  
  const emailCheck = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        alert("Hemos enviado un correo de verificación. Debe validar su correo para iniciar sesión")
      })
      .catch((error) => {
        console.log(error);
      })
  }
  //función crear cuenta
  formRegister.addEventListener("submit", (send) => {
    send.preventDefault();
    let valueEmail = eMail.value;
    let valuePassword = passwordIn.value;
    console.log(valueEmail + valuePassword);

    createUserWithEmailAndPassword(auth, valueEmail, valuePassword)
      .then((userCredential) => {
        // Signed in
        emailCheck();
        const user = userCredential.user;
        // redirigir a login
        console.log(user);
        window.location.hash = "#login";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);

        let emailMessage = document.querySelector(".errorcorreo");
        let passwordMessage = document.querySelector(".errorcontrasena");

        if (errorCode == 'auth/email-already-in-use') {
          emailMessage.innerHTML = "<p>Este correo ya se encuentra en uso</p>";
          console.log("error correo existente");
        }
        else if (errorCode == 'auth/invalid-email') {
          emailMessage.innerHTML = "<p>Ingresa un correo electrónico válido</p>";
        }

        else if (errorCode == 'auth/weak-password') {
          passwordMessage.innerHTML = "<p>La contraseña debe tener al menos 6 caracteres</p>";
        }

      });

  });

  return divRegister;
}