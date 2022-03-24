import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { headerContainer } from "./header.js";
//import { login } from "./logIn.js";
import { getFirestore, collection, addDoc, Timestamp, doc, getDocs, query, orderBy, updateDoc, arrayUnion, arrayRemove, increment } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';

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

/* ******** VISTA HOME ******* */

export const home = () => {

  history.pushState(null, 'home', '#home');

  let divHome = document.createElement("div");
  divHome.setAttribute("id", "home");

  // ****** HEADER **********
  let divHeaderMobile = document.createElement("div");
  divHeaderMobile.setAttribute("class", "headerMobile");
  divHome.appendChild(divHeaderMobile);

  let logoHome = headerContainer().querySelector(".plantasia");
  logoHome.classList.add("plantasiaHome"); // NO ESTÁ FUNCIONANDO
  divHeaderMobile.appendChild(headerContainer());

  // ****** BOTON LOG OUT **********
  let buttonLogOut = document.createElement("a");
  buttonLogOut.setAttribute("class", "buttonLogOut");
  buttonLogOut.setAttribute("id", "buttonLogOut");
  buttonLogOut.textContent = "Cerrar Sesión";
  divHeaderMobile.appendChild(buttonLogOut);



  // ************ WALL ****************

  let divWall = document.createElement("div");
  divWall.setAttribute("class", "wall");
  divHome.appendChild(divWall);

  let formHome = document.createElement("form");
  formHome.setAttribute("class", "post");
  divWall.appendChild(formHome);

  let sectionPostArea = document.createElement("div");
  sectionPostArea.setAttribute("class", "sectionPostArea");
  formHome.appendChild(sectionPostArea)

  let userIcon = document.createElement("img");
  userIcon.setAttribute("class", "userIcon");
  userIcon.setAttribute("src", "./images/own-user-icon.svg");
  userIcon.setAttribute("alt", "icono de usuario");
  userIcon.setAttribute("width", "25px");
  sectionPostArea.appendChild(userIcon);

  let postArea = document.createElement("textarea");
  postArea.setAttribute("class", "areapost");
  postArea.setAttribute("placeholder", "¿Cómo están tus plantas hoy?");
  sectionPostArea.appendChild(postArea);

  let divButtonSubmit = document.createElement("div");
  divButtonSubmit.setAttribute("class", "divButtonSubmit");
  formHome.appendChild(divButtonSubmit)

  let buttonSubmit = document.createElement("button");
  buttonSubmit.textContent = "Publicar";
  buttonSubmit.setAttribute("class", "buttonSubmit");
  divButtonSubmit.appendChild(buttonSubmit);

  let postAreaDivider = document.createElement("hr");
  postAreaDivider.setAttribute("class", "postAreaDivider");
  formHome.appendChild(postAreaDivider);

  let postContainer = document.createElement("div");
  postContainer.setAttribute("id", "postContainer");
  postContainer.setAttribute("class", "postContainer");
  divWall.appendChild(postContainer);

  // ********* MENU ********

  let divMenu = document.createElement("div");
  divMenu.setAttribute("class", "menu");
  divHome.appendChild(divMenu);

  let homeIcon = document.createElement("img");
  homeIcon.setAttribute("class", "menuIcon");
  homeIcon.setAttribute("src", "./images/home-icon.svg");
  homeIcon.setAttribute("alt", "icono home");
  divMenu.appendChild(homeIcon);

  let exchangeIcon = document.createElement("img");
  exchangeIcon.setAttribute("class", "menuIcon");
  exchangeIcon.setAttribute("src", "./images/plant-exchange-icon.svg");
  exchangeIcon.setAttribute("alt", "icono intercambio de plantas");
  divMenu.appendChild(exchangeIcon);

  let searchIcon = document.createElement("img");
  searchIcon.setAttribute("class", "menuIcon");
  searchIcon.setAttribute("src", "./images/search-icon.svg");
  searchIcon.setAttribute("alt", "icono home");
  divMenu.appendChild(searchIcon);

  let perfilIcon = document.createElement("img");
  perfilIcon.setAttribute("class", "menuIcon");
  perfilIcon.setAttribute("src", "./images/user-icon.svg");
  perfilIcon.setAttribute("alt", "icono perfil");
  divMenu.appendChild(perfilIcon);

  // FUNCION PARA CREAR POST CON NOMBRE DE USUARIO 
  const createPost = async (db, text) => {

    let userName;
    if (auth.currentUser.displayName == null) {
      let separateEmail = auth.currentUser.email.split('@');
      userName = separateEmail[0];
    } else {
      userName = auth.currentUser.displayName;
    }

    // Datos que recoge nuestra colección
    const docRef = await addDoc(collection(db, "post"), {
      uid: auth.currentUser.uid,
      name: userName,
      text,
      datepost: Timestamp.fromDate(new Date()),
      likes: [],
      likesCounter: 0,
    });

    console.log("Document written with ID: ", docRef.id)
  };

  function like(post) {
    updateDoc(post, { likes: arrayUnion(sessionStorage.getItem('userId')) });
    return updateDoc(post, { likesCounter: increment(1) });
  }

  function unlike(post) {
    updateDoc(post, { likes: arrayRemove(sessionStorage.getItem('userId')) });
    return updateDoc(post, { likesCounter: increment(-1) });
  }



// FUNCION PARA MOSTRAR POST CON NOMBRE DE USUARIO
const showPost = async (db, documento) => {

  const postAll = query(collection(db, "post"), orderBy("datepost", "desc"));
  const querySnapshot = await getDocs(postAll);

  const sectionPost = document.getElementById("postContainer");
  sectionPost.innerHTML = "";
  querySnapshot.forEach((documento) => {
    console.log(documento.id, '=>', documento.data().name);

    //creamos los componentes que contendrán cada nueva publicación
    const divPost = document.createElement("div");
    divPost.setAttribute("class", "divPost");

    const divName = document.createElement("div");
    divName.setAttribute("class", "divName");

    let iconPost = document.createElement("img");
    iconPost.setAttribute("class", "iconPost");
    iconPost.setAttribute("src", "./images/own-user-icon.svg");
    iconPost.setAttribute("alt", "icono de usuario");
    iconPost.setAttribute("width", "25px");

    const pUser = document.createElement("p");
    pUser.setAttribute("class", "pUser");

    const pPost = document.createElement("p");
    pPost.setAttribute("class", "pPost");

    pUser.innerHTML = documento.data().name;
    pPost.innerHTML = documento.data().text;

    let likeButton = document.createElement("button");
    likeButton.setAttribute("class", "likeButton");

    let likeIcon = document.createElement("img");
    likeIcon.setAttribute("src", "./images/liked-icon.svg");
   
    if (documento.data().likes.includes(sessionStorage.getItem('userId'))) {
      likeButton.appendChild(likeIcon);
      likeButton.innerHTML = `🍃 ${documento.data().likesCounter}`;
    } else {
      likeButton.innerHTML = `🍂 ${documento.data().likesCounter}`;
    }

    likeButton.addEventListener('click', async () => {
      if (documento.data().likes.includes(sessionStorage.getItem('userId'))) {
        likeButton.innerHTML = `🍂 ${documento.data().likesCounter - 1}`;

        await unlike(doc(db, 'post', documento.id)); 
        showPost(); 
      } else {
        await like(doc(db, 'post', documento.id));
        likeButton.innerHTML = `🍃 ${documento.data().likesCounter + 1}`;
        showPost();
      }
    })

    divWall.appendChild(sectionPost);
    sectionPost.appendChild(divPost);
    divPost.appendChild(divName);
    divName.appendChild(iconPost);
    divName.appendChild(pUser);
    divPost.appendChild(pPost);
    divPost.appendChild(likeButton);
  })
}

let valuePost = postArea.value;
showPost(db, valuePost);

//Funciones de llamada a los botones 
buttonSubmit.addEventListener("click", (post) => {
  post.preventDefault();
  let valuePost = postArea.value;

  if (valuePost === "") {
    alert("No escribiste nada")
  } else {
    createPost(db, valuePost);
    showPost(db, valuePost);
    formHome.reset();
  }
})

buttonLogOut.addEventListener("click", () => {
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