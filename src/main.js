// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
//import { app } from "../firebase-config.js";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { headerContainer } from "./pages/header.js";
import { route } from "./route.js";
//import { firestore } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

// Configuración firebase
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

//Observador logged in/logged out
onAuthStateChanged(auth, (user) => {
  if (user !== null) {
      console.log("logged in");
      window.location.hash = '#home';
      route(window.location.hash);
 
  } else {
      console.log("no user");
      window.location.hash = '#login';
      route(window.location.hash);
    // User is signed out
  }

})
window.addEventListener("load", onAuthStateChanged);

// //header
// let rootHeader = document.getElementById("rootHeader");
// rootHeader.appendChild(headerContainer());

