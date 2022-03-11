export const footerContainer = () => {
    let createFooter = document.createElement("footer");

    let pLinksRepositories = document.createElement("p");
    pLinksRepositories.setAttribute("class", "divLinksRepositories");
    createFooter.appendChild(pLinksRepositories);
    
    let anchorCeci = document.createElement("a");
    anchorCeci.setAttribute("href", "https://github.com/ceciPino");
    anchorCeci.setAttribute("target", "_blank");
    anchorCeci.textContent = "María Cecilia Pino";
    pLinksRepositories.appendChild(anchorCeci);

    let spanBetween1 = document.createElement("span");
    spanBetween1.textContent = ", ";
    pLinksRepositories.appendChild(spanBetween1);


    let anchorJesu = document.createElement("a");
    anchorJesu.setAttribute("href", "https://github.com/majesuso");
    anchorJesu.setAttribute("target", "_blank");
    anchorJesu.textContent = "María Jesús Oliva";
    pLinksRepositories.appendChild(anchorJesu);

    let spanBetween2 = document.createElement("span");
    spanBetween2.textContent = " and ";
    pLinksRepositories.appendChild(spanBetween2);

    let anchorVale = document.createElement("a");
    anchorVale.setAttribute("href", "https://github.com/ValeMontecinosP");
    anchorVale.setAttribute("target", "_blank");
    anchorVale.textContent = "Valentina Montecinos";
    pLinksRepositories.appendChild(anchorVale);


    let pCopyrigth = document.createElement("p");
    pCopyrigth.textContent = "© 2022 Plantasia";
    createFooter.appendChild(pCopyrigth);

    return createFooter
}

/* <footer>
        <p> 
            <a href="https://github.com/ceciPino" target="_blank">
            María Cecilia Pino
            </a>,
            <a href="https://github.com/majesuso" target="_blank"> María Jesús Oliva</a> and <a href="https://github.com/ValeMontecinosP" target="_blank">Valentina Montecinos</a>
        </p>
        <p>© 2022 Plantasia</p> 
    </footer>
*/