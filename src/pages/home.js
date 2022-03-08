import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

export const home = () => {

  //VISTA HOME
  history.pushState(null, 'home', '#home');
  let divHome = document.createElement("div");
  divHome.setAttribute("id", "home");

  let firstPost = document.createElement("p");
  firstPost.textContent= "home en construcción";
  divHome.appendChild(firstPost);

  let postArea = document.createElement("textarea");
  postArea.setAttribute("class", "areapost");
  postArea.setAttribute("placeholder", "¿Cómo están tus plantas hoy?");
  divHome.appendChild(postArea);

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