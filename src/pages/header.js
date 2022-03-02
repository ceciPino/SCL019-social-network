export const headerContent = () => {
    let divHeader = document.createElement("div");
    divHeader.setAttribute("class", "divHeader");
    header.appendChild(divHeader);
    
    let logo = document.createElement("img");
    logo.setAttribute("src", "./images/logo-plantasia.svg");
    logo.setAttribute("class", "logo");
    divHeader.appendChild(logo);
    
    let titlePlantasia = document.createElement("h1");
    titlePlantasia.textContent = "Plantasia";
    divHeader.appendChild(titlePlantasia);
}
