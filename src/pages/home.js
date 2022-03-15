import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { headerContainer } from "./header.js";
import { getFirestore, collection, addDoc, Timestamp, doc, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDBC5o7sgTl7cbHM5DF4pjLP5Wx2H-S8RA",
  authDomain: "social-network-cjv.firebaseapp.com",
  projectId: "social-network-cjv",
  storageBucket: "social-network-cjv.appspot.com",
  messagingSenderId: "55216807698",
  appId: "1:55216807698:web:9cef62683040f7b8afddcb"
};


initializeApp(firebaseConfig);

const db = getFirestore();
console.log(db);
const auth = getAuth();



// // funcion create post
// export async function createPost(postForm) {
//   // La declaración try...catch señala un bloque de instrucciones a intentar (try)
//   // y especifica una respuesta si se produce una excepción (catch).
//   try {
//     let nameUser;
//     // si el usuario se registró sin google (es decir no se guardó su displayName)
//     // al momento de crear el post
//     // su nombre será el email.
//     if (auth.currentUser.displayName === null) {
//       nameUser = auth.currentUser.email;
//     } else {
//       nameUser = auth.currentUser.displayName;
//     }
//     // addDoc Agregue un nuevo documento a la CollectionReference especificada con los datos
//     // proporcionados asignándole una ID de documento automáticamente.
//     const docRef = await addDoc(collection(firestore, 'Post'), {
//       // especificamos los atributos que contendrá la coleccion
//       userId: auth.currentUser.uid,
//       name: nameUser,
//       email: auth.currentUser.email,
//       comentUser: postForm.coment.value,
//       // Guarda en la base de datos la fecha en formato legible
//       datepost: Timestamp.fromDate(new Date()),
//       likes: [], // se guardará los id de los user que hagan like en el post
//       likesCounter: 0, // contará los like
//     });
//     console.log('documento escrito con id', docRef.id);
//     postForm.reset(); // Se limpia el input del formulario del post
//     showPost(); // llama a la funcion showPost()
//   } catch (err) {
//     console.log('error : ', err);
//   }
// }

//**************************** */


export const home = () => {

  //VISTA HOME
  history.pushState(null, 'home', '#home');
  
  let divHome = document.createElement("div");
  divHome.setAttribute("id", "home");

  let formHome = document.createElement("form");
  formHome.setAttribute("class", "post");
  divHome.appendChild(formHome);

  let postArea = document.createElement("textarea");
  postArea.setAttribute("class", "areapost");
  postArea.setAttribute("placeholder", "¿Cómo están tus plantas hoy?");
  formHome.appendChild(postArea);

  let buttonSubmit = document.createElement("button");
  // buttonSubmit.setAttribute("type", "submit");
  // buttonSubmit.setAttribute("value", "Publicar");
  buttonSubmit.textContent="Publicar";
  buttonSubmit.setAttribute("class", "buttonSubmit");
  divHome.appendChild(buttonSubmit);

  const createPost = async ( db, text ) => {
    const docRef = await addDoc(collection(db, "post"), {
      text
    });
    console.log("Document written with ID: ", docRef.id)
  };

  const prueba = async (db, text ) => {
    const querySnapshot = await getDocs(collection(db, "post"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }

  buttonSubmit.addEventListener("click", (post) => {
    post.preventDefault();
    let valuePost = postArea.value;
    createPost(db, valuePost);
    prueba(db, valuePost);
    formHome.reset();
    //****************** */

  })


  let buttonLogOut = document.createElement("button");
  buttonLogOut.setAttribute("class", "buttonLogOut");
  buttonLogOut.setAttribute("id", "buttonLogOut");
  buttonLogOut.textContent = "salir";
  divHome.appendChild(buttonLogOut);


  buttonLogOut.addEventListener("click", () => {
    //close.preventDefault();
    const auth = getAuth();


    signOut(auth) 
     .then(() => {
      console.log("el usuario salió");
      sessionStorage.clear();
      window.location.hash = "#login";
      })
     .catch((error) => {
      console.log(error.message);
      });

        

})


return divHome;

}