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
let inputReg = document.getElementById("inputRegister");

let titleRegister = document.createElement("h1");
titleRegister.textContent = "Bienvenida a (nombre app)";
inputReg.appendChild(titleRegister);

let inputLogIn = document.createElement("form");
inputLogIn.setAttribute("class", "register");
inputReg.appendChild(inputLogIn);

let userName = document.createElement("input");
userName.setAttribute("type", "email");
userName.setAttribute("placeholder", "example@mail.com");
userName.setAttribute("id", "userName");
inputLogIn.appendChild(userName);

// let labelInputs = document.createElement("label");
// labelInputs.setAttribute("for", "userName");
// labelInputs.textContent = "Ingresa tus datos";
// inputLogIn.appendChild(labelInputs);

let passwordIn = document.createElement("input");
passwordIn.setAttribute("type", "password");
passwordIn.setAttribute("placeholder", "contraseña");
passwordIn.setAttribute("id","passwordIn");
inputLogIn.appendChild(passwordIn);

let buttonSend = document.createElement("input");
buttonSend.setAttribute("type", "submit");
buttonSend.setAttribute("value", "Iniciar sesión");
inputLogIn.appendChild(buttonSend);

//ACÁ SE GENERA NUEVO USUARIO O SE INICIA SESIÓN (MODULARIZAR)

inputLogIn.addEventListener("submit", (send) => {
send.preventDefault();
let valueUserName = userName.value;
let valuePassword = passwordIn.value;
console.log(valueUserName + valuePassword);

createUserWithEmailAndPassword(auth, valueUserName, valuePassword)
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

  //MODULARIZAR REGISTRO E INICIO SESIÓN

  signInWithEmailAndPassword(auth, valueUserName, valuePassword)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    console.log("ingreso exitoso");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
})





