export const headerHomeContainer = () => {

    let divHeaderHome = document.createElement("div");
    divHeaderHome.setAttribute("class", "divHeaderHome");

    //Creando header
    let createHeader = document.createElement("header");
    divHeaderHome.appendChild(createHeader);

    let logo = document.createElement("img");
    logo.setAttribute("src", "./images/logo-plantasia.svg");
    logo.setAttribute("class", "logoHome");
    createHeader.appendChild(logo);

    let titlePlantasia = document.createElement("h1");
    titlePlantasia.setAttribute("class", "h1Home")
    titlePlantasia.textContent = "Plantasia";
    createHeader.appendChild(titlePlantasia);

    let iconHome = document.createElement("button");
    iconHome

    return divHeaderHome;
}