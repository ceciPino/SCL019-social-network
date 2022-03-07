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


return divHome;

}