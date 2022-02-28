// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
//import { firestore } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBC5o7sgTl7cbHM5DF4pjLP5Wx2H-S8RA",
  authDomain: "social-network-cjv.firebaseapp.com",
  projectId: "social-network-cjv",
  storageBucket: "social-network-cjv.appspot.com",
  messagingSenderId: "55216807698",
  appId: "1:55216807698:web:9cef62683040f7b8afddcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });


onAuthStateChanged(auth, (user) => {
  if (user !== null) {
      console.log("logged in");
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    //const uid = user.uid;
    // ...
  } else {
      console.log("no user");
    // User is signed out
    // ...
  }
});

myFunction();
//Creación de campos de registro
// let root = document.getElementById("root");
// let header = document.getElementById("header");

// let divHeader = document.createElement("div");
// divHeader.setAttribute("class", "divHeader");
// header.appendChild(divHeader);

// let logo = document.createElement("img")
// logo.setAttribute("src", "./images/logo-plantasia.svg");
// logo.setAttribute("class", "logo");
// divHeader.appendChild(logo);

// let titlePlantasia = document.createElement("h1");
// titlePlantasia.textContent = "Plantasia";
// divHeader.appendChild(titlePlantasia);

// let formRegister = document.createElement("form");
// formRegister.setAttribute("class", "register"); 
// root.appendChild(formRegister);

// let titleCreateAccount = document.createElement("h2");
// titleCreateAccount.setAttribute("class","titleCreate");
// titleCreateAccount.textContent = "Crear una cuenta";
// formRegister.appendChild(titleCreateAccount);

// let userName = document.createElement("input");
// userName.setAttribute("type", "text");
// userName.setAttribute("placeholder", "usuario");
// userName.setAttribute("id", "userName");
// userName.setAttribute("class", "input");
// formRegister.appendChild(userName);

// let eMail = document.createElement("input");
// eMail.setAttribute("type", "email");
// eMail.setAttribute("placeholder", "ejemplo@correo.com");
// eMail.setAttribute("id", "eMail");
// eMail.setAttribute("class", "input");
// formRegister.appendChild(eMail);

// let passwordIn = document.createElement("input");
// passwordIn.setAttribute("type", "password");
// passwordIn.setAttribute("placeholder", "contraseña");
// passwordIn.setAttribute("id","passwordIn");
// passwordIn.setAttribute("class", "input");
// formRegister.appendChild(passwordIn);

// let buttonSend = document.createElement("input");
// buttonSend.setAttribute("type", "submit");
// buttonSend.setAttribute("value", "Registrar");
// buttonSend.setAttribute("class", "buttonsubmit");
// formRegister.appendChild(buttonSend);

// let sectionEnterWithGoogle = document.createElement("div");
// sectionEnterWithGoogle.setAttribute("class", "optionEnterWithGoogle");
// root.appendChild(sectionEnterWithGoogle);

// let optionGoogle = document.createElement("p");
// optionGoogle.textContent = "o"
// sectionEnterWithGoogle.appendChild(optionGoogle);

// let buttonGoogle = document.createElement("button");
// buttonGoogle.setAttribute("class", "buttonGoogle");
// buttonGoogle.setAttribute("id", "buttonGoogle");

// let logoGoogle = document.createElement("img");
// logoGoogle.setAttribute("class", "logoGoogle");
// logoGoogle.setAttribute("src", "./images/logo-google.png");
// logoGoogle.setAttribute("alt", "logo Google");
// buttonGoogle.appendChild(logoGoogle);

// let labelBtnGoogle = document.createElement("p");
// labelBtnGoogle.textContent = "Continuar con Google";
// buttonGoogle.appendChild(labelBtnGoogle);

// sectionEnterWithGoogle.appendChild(buttonGoogle);

//VISTA LOG IN
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


let formLogIn = document.createElement("form");
formLogIn.setAttribute("class", "register"); 
root.appendChild(formLogIn);

let eMail = document.createElement("input");
eMail.setAttribute("type", "email");
eMail.setAttribute("placeholder", "ejemplo@correo.com");
eMail.setAttribute("id", "eMail");
eMail.setAttribute("class", "input");
formLogIn.appendChild(eMail);

let passwordIn = document.createElement("input");
passwordIn.setAttribute("type", "password");
passwordIn.setAttribute("placeholder", "contraseña");
passwordIn.setAttribute("id","passwordIn");
passwordIn.setAttribute("class", "input");
formLogIn.appendChild(passwordIn);

let buttonSend = document.createElement("input");
buttonSend.setAttribute("type", "submit");
buttonSend.setAttribute("value", "Iniciar Sesión");
buttonSend.setAttribute("class", "buttonsubmit");
formLogIn.appendChild(buttonSend);

let sectionEnterWithGoogle = document.createElement("div");
sectionEnterWithGoogle.setAttribute("class", "optionEnterWithGoogle");
root.appendChild(sectionEnterWithGoogle);

let optionGoogle = document.createElement("p");
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

let divUnregistered = document.createElement("div");
divUnregistered.setAttribute("class", "unregisteredText_Link");
root.appendChild(divUnregistered);

let unregisteredUser = document.createElement("p");
unregisteredUser.textContent = "¿No tienes una cuenta?";
divUnregistered.appendChild(unregisteredUser);

let linkRegister = document.createElement("a");
linkRegister.setAttribute("class", "logIn_linkRegister");
linkRegister.setAttribute("href", ""); // insertar ruta registro
linkRegister.textContent = "Regístrate";
divUnregistered.appendChild(linkRegister);

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
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
      console.log(errorCode);
      console.log(errorMessage);
    });

    signInWithEmailAndPassword(auth, valueEmail, valuePassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log(user+" ingreso exitoso");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
})