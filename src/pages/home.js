export const home = () => {

  //VISTA HOME
  history.pushState(null, 'home', '#home');
  let divHome = document.createElement("div");
  divHome.setAttribute("id", "home");

  let firstPost = document.createElement("p");
  firstPost.textContent= "home en construcción";
  divHome.appendChild(firstPost);

return divHome;

}