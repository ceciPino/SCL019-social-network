// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { headerContainer } from "./pages/header.js";
import { login } from "./pages/logIn.js";
//import { route } from "./route.js";
import { register } from "./pages/register.js";
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



let rootHeader = document.getElementById("rootHeader");
rootHeader.appendChild(headerContainer());

let root = document.getElementById("root");


window.addEventListener('hashchange', () => {//hashchange es lo que ocurre cuando se agrega el # en la url
  if (window.location.hash === '#login'){
    console.log('mostrar about')
    root.appendChild(login());// Paso 1.2
    changeRoute(window.location.hash);
  } else if (window.location.hash === '#register'){
    console.log('mostrar about')
    login().remove();
    root.appendChild(register()); // Paso 1.2
    changeRoute(window.location.hash);
  } 
});


// let root = document.getElementById("root");
// root.appendChild(register());

//route ();
//register();


