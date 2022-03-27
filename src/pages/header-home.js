export const headerHomeContainer = () => {

    let divHeaderHome = document.createElement("div");
    divHeaderHome.setAttribute("class", "divHeaderHome");

    //Creando header
    let createHeader = document.createElement("header");
    divHeaderHome.appendChild(createHeader);

    let link = document.createElement("a");
    link.setAttribute("href", "https://youtu.be/l0vrsO3_HpU");
    link.setAttribute("target", "_blank");
    createHeader.appendChild(link);

    let logo = document.createElement("img");
    logo.setAttribute("src", "./images/logo-plantasia.svg");
    logo.setAttribute("class", "logoHome");
    link.appendChild(logo);

    let titlePlantasia = document.createElement("h1");
    titlePlantasia.setAttribute("class", "h1Home")
    titlePlantasia.textContent = "Plantasia";
    createHeader.appendChild(titlePlantasia);

    let iconHome = document.createElement("button");
    iconHome

    return divHeaderHome;
}