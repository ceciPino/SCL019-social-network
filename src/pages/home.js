import { headerHomeContainer } from "./header-home.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { getFirestore, collection, addDoc, Timestamp, doc, getDocs, query, orderBy, updateDoc, arrayUnion, arrayRemove, increment, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDBC5o7sgTl7cbHM5DF4pjLP5Wx2H-S8RA",
  authDomain: "social-network-cjv.firebaseapp.com",
  projectId: "social-network-cjv",
  storageBucket: "social-network-cjv.appspot.com",
  messagingSenderId: "55216807698",
  appId: "1:55216807698:web:9cef62683040f7b8afddcb"
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
//console.log(db);

/* ******** VISTA HOME ******* */

export const home = () => {

  history.pushState(null, 'home', '/home');

  let divHome = document.createElement("div");
  divHome.setAttribute("id", "home");

  // ****** HEADER **********
  let divHeaderMobile = document.createElement("div");
  divHeaderMobile.setAttribute("class", "headerMobile");
  divHome.appendChild(divHeaderMobile);

  divHeaderMobile.appendChild(headerHomeContainer())

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

  // // DIVISOR
  // let wallDivider = document.createElement("hr");
  // wallDivider.setAttribute("class", "wallDivider");
  // divWall.appendChild(wallDivider);

  // FORM
  let formHome = document.createElement("form");
  formHome.setAttribute("class", "post");
  divWall.appendChild(formHome);

  let sectionPostArea = document.createElement("div");
  sectionPostArea.setAttribute("class", "sectionPostArea");
  formHome.appendChild(sectionPostArea)

  let userIcon = document.createElement("img");
  userIcon.setAttribute("class", "userIcon");
  userIcon.setAttribute("src", "SCL019-social-network/src/images/own-user-icon.svg");
  userIcon.setAttribute("alt", "icono de usuario");
  userIcon.setAttribute("width", "25px");
  sectionPostArea.appendChild(userIcon);

  let postArea = document.createElement("textarea");
  postArea.setAttribute("class", "areapost");
  postArea.setAttribute("placeholder", "¿Cómo están tus plantas hoy?");
  sectionPostArea.appendChild(postArea);

  // BOTÓN PUBLICAR
  let divButtonSubmit = document.createElement("div");
  divButtonSubmit.setAttribute("class", "divButtonSubmit");
  formHome.appendChild(divButtonSubmit)

  let buttonSubmit = document.createElement("button");
  buttonSubmit.textContent = "Publicar";
  buttonSubmit.setAttribute("class", "buttonSubmit");
  divButtonSubmit.appendChild(buttonSubmit);

  // CONTAINER POST PUBLICADOS
  let postContainer = document.createElement("div");
  postContainer.setAttribute("id", "postContainer");
  postContainer.setAttribute("class", "postContainer");
  divWall.appendChild(postContainer);

  // ********* MENU ********

  let divMenu = document.createElement("div");
  divMenu.setAttribute("class", "menu");
  divHome.appendChild(divMenu);

  let linkHome = document.createElement("a");
  linkHome.setAttribute("href", "#home");
  divMenu.appendChild(linkHome);

  let homeIcon = document.createElement("img");
  homeIcon.setAttribute("class", "menuIcon");
  homeIcon.setAttribute("src", "SCL019-social-network/src/images/home-icon.svg");
  homeIcon.setAttribute("alt", "icono home");
  linkHome.appendChild(homeIcon);

  let exchangeIcon = document.createElement("img");
  exchangeIcon.setAttribute("class", "menuIcon");
  exchangeIcon.setAttribute("src", "SCL019-social-network/src/images/plant-exchange-icon.svg");
  exchangeIcon.setAttribute("alt", "icono intercambio de plantas");
  divMenu.appendChild(exchangeIcon);

  let searchIcon = document.createElement("img");
  searchIcon.setAttribute("class", "menuIcon");
  searchIcon.setAttribute("src", "SCL019-social-network/src/images/search-icon.svg");
  searchIcon.setAttribute("alt", "icono buscar");
  divMenu.appendChild(searchIcon);

  let perfilIcon = document.createElement("img");
  perfilIcon.setAttribute("class", "menuIcon");
  perfilIcon.setAttribute("src", "SCL019-social-network/src/images/user-icon.svg");
  perfilIcon.setAttribute("alt", "icono perfil");
  divMenu.appendChild(perfilIcon);


  // FUNCION PARA CREAR POST CON NOMBRE DE USUARIO 
  const createPost = async (db, text) => {

    let userName;
    if (auth.currentUser.displayName == null) { // displayname?
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
    //console.log("Document written with ID: ", docRef.id)
  };

  function like(post) {
    updateDoc(post, {
      likes: arrayUnion(sessionStorage.getItem('userId'))
    });
    console.log(sessionStorage.getItem('userId'))
    return updateDoc(post, { likesCounter: increment(1) });
  }

  function unlike(post) {
    updateDoc(post, { likes: arrayRemove(sessionStorage.getItem('userId')) });
    return updateDoc(post, { likesCounter: increment(-1) });
  }

  // FUNCION PARA MOSTRAR POST CON NOMBRE DE USUARIO
  const showPost = async () => {

    const postAll = query(collection(db, "post"), orderBy("datepost", "desc"));
    const querySnapshot = await getDocs(postAll);

    const sectionPost = document.getElementById("postContainer");
    sectionPost.innerHTML = "";
    querySnapshot.forEach((documento) => {
      //console.log(documento.id, '=>', documento.data().name);

      //creamos los componentes que contendrán cada nueva publicación
      // div por cada post publicado
      const divPost = document.createElement("div");
      divPost.setAttribute("class", "divPost");

      //div user name + user icon
      const divName = document.createElement("div");
      divName.setAttribute("class", "divName");

      let iconPost = document.createElement("img");
      iconPost.setAttribute("class", "iconPost");
      iconPost.setAttribute("src", "SCL019-social-network/src/images/own-user-icon.svg");
      iconPost.setAttribute("alt", "icono de usuario");
      iconPost.setAttribute("width", "25px");

      //name
      const pUser = document.createElement("p");
      pUser.setAttribute("class", "pUser");

      //text 
      const pPost = document.createElement("p");
      pPost.setAttribute("class", "pPost");

      pUser.innerHTML = documento.data().name;
      pPost.innerHTML = documento.data().text;

      let divLikes = document.createElement("div");
      divLikes.setAttribute("class", "divLikes");

      let likeButton = document.createElement("button");
      likeButton.setAttribute("class", "likeButton");
      divLikes.appendChild(likeButton);

      let likeIcon = document.createElement("img");
      likeIcon.setAttribute("class", "likeIcon");

      let pCounter = document.createElement("p");
      pCounter.setAttribute("class", "pCounter");
      divLikes.appendChild(pCounter);


      if (documento.data().likes.includes(sessionStorage.getItem('userId'))) {
        //mostrando icono like
        likeIcon.setAttribute("src", "SCL019-social-network/src/images/like-icon2.svg");
        likeButton.appendChild(likeIcon);
        pCounter.textContent = documento.data().likesCounter

      } else {
        //mostrando icono unlike
        likeIcon.setAttribute("src", "SCL019-social-network/src/images/unlike-icon.svg");
        likeButton.appendChild(likeIcon);
        pCounter.textContent = documento.data().likesCounter

      }

      // click al botón like
      likeButton.addEventListener('click', async () => {
        if (documento.data().likes.includes(sessionStorage.getItem('userId'))) {
          //mostrando icono like
          likeIcon.setAttribute("src", "SCL019-social-network/src/images/unlike-icon.svg");
          likeButton.appendChild(likeIcon);
          pCounter.textContent = documento.data().likesCounter

          await unlike(doc(db, "post", documento.id));
          //console.log(doc(db, "post", documento.id))
          showPost();

        } else {
          //mostrando icono unlike
          await like(doc(db, "post", documento.id));
          likeIcon.setAttribute("src", "SCL019-social-network/src/images/like-icon2.svg");
          likeButton.appendChild(likeIcon);
          pCounter.textContent = documento.data().likesCounter

          showPost();
        }
      });


      //***** appendchilds ********

      divWall.appendChild(sectionPost);
      sectionPost.appendChild(divPost);
      divPost.appendChild(divName);
      divName.appendChild(iconPost);
      divName.appendChild(pUser);
      divPost.appendChild(pPost);
      divPost.appendChild(divLikes);

      // ***** EDITAR POST ******

     /* // Editar datos
      const editPost = async (id, text) => {
        const refreshPost = doc(db, 'posts', id);
        await updateDoc(refreshPost, {
          description: text,

        })
      }*/

      // Borrar datos
      const deletePost = async (id) => {
        await deleteDoc(doc(db, 'post', documento.id));
        console.log(deleteDoc);
      };

      if (documento.data().uid === auth.currentUser.uid) {
      let userEditDelete = document.createElement("div");
      userEditDelete.setAttribute("class", "edit-delete");

      let deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "deletebtn");
        userEditDelete.appendChild(deleteBtn);

        let imgDelete = document.createElement("img");
        imgDelete.setAttribute("src", "SCL019-social-network/src/images/icon-delete-post.svg");
        imgDelete.setAttribute("class", "trashCan");
        deleteBtn.appendChild(imgDelete);

        divPost.appendChild(userEditDelete);

        deleteBtn.addEventListener('click', (post) => {
          // eslint-disable-next-line no-restricted-globals
          const confirmDelete = confirm('¿Estás seguro de eliminar esta publicación?');
          if (confirmDelete == true) {
            deletePost(post);
            location.reload(post);
          
          }
          
        })
      }


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