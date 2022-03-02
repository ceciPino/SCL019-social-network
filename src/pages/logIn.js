import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
//import { register } from "..pages/register.js"

export const login = () => {
    //VISTA LOG IN
    let root = document.getElementById("root");
    let header = document.getElementById("header");

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


    let formLogIn = document.createElement("form");
    formLogIn.setAttribute("class", "register");
    root.appendChild(formLogIn);

    let eMail = document.createElement("input");
    eMail.setAttribute("type", "email");
    eMail.setAttribute("placeholder", "ejemplo@correo.com");
    eMail.setAttribute("id", "eMail");
    eMail.setAttribute("class", "input");
    formLogIn.appendChild(eMail);

    let passwordIn = document.createElement("input");
    passwordIn.setAttribute("type", "password");
    passwordIn.setAttribute("placeholder", "contraseña");
    passwordIn.setAttribute("id", "passwordIn");
    passwordIn.setAttribute("class", "input");
    formLogIn.appendChild(passwordIn);

    let buttonSend = document.createElement("input");
    buttonSend.setAttribute("type", "submit");
    buttonSend.setAttribute("value", "Iniciar Sesión");
    buttonSend.setAttribute("class", "buttonsubmit");
    formLogIn.appendChild(buttonSend);

    let sectionEnterWithGoogle = document.createElement("div");
    sectionEnterWithGoogle.setAttribute("class", "optionEnterWithGoogle");
    root.appendChild(sectionEnterWithGoogle);

    let optionGoogle = document.createElement("p");
    optionGoogle.setAttribute("class", "orGoogle");
    optionGoogle.textContent = "ó"
    sectionEnterWithGoogle.appendChild(optionGoogle);

    let buttonGoogle = document.createElement("button");
    buttonGoogle.setAttribute("class", "buttonGoogle");
    buttonGoogle.setAttribute("id", "buttonGoogle");

    let logoGoogle = document.createElement("img");
    logoGoogle.setAttribute("class", "logoGoogle");
    logoGoogle.setAttribute("src", "./images/logo-google.png");
    logoGoogle.setAttribute("alt", "logo Google");
    buttonGoogle.appendChild(logoGoogle);

    let labelBtnGoogle = document.createElement("p");
    labelBtnGoogle.textContent = "Continuar con Google";
    buttonGoogle.appendChild(labelBtnGoogle);

    sectionEnterWithGoogle.appendChild(buttonGoogle);

    let divUnregistered = document.createElement("div");
    divUnregistered.setAttribute("class", "unregisteredText_Link");
    root.appendChild(divUnregistered);

    let unregisteredUser = document.createElement("p");
    unregisteredUser.textContent = "¿No tienes una cuenta?";
    divUnregistered.appendChild(unregisteredUser);

    let linkRegister = document.createElement("a");
    linkRegister.setAttribute("class", "logIn_linkRegister");
    linkRegister.setAttribute("href", "#register"); // insertar ruta registro 
    linkRegister.textContent = "Regístrate";
    divUnregistered.appendChild(linkRegister);

    formLogIn.addEventListener("submit", (send) => {
        send.preventDefault();
        let valueEmail = eMail.value;
        let valuePassword = passwordIn.value;
        console.log(valueEmail + valuePassword);

        const auth = getAuth();
        signInWithEmailAndPassword(auth, valueEmail, valuePassword)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                console.log(user + " ingreso exitoso");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    })

    buttonGoogle.addEventListener("click", (loginGoogle) => {
        loginGoogle.preventDefault();
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log("inicio sesion google")
                console.log(token);
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                console.log("errores google")
                console.log(errorCode)
                const errorMessage = error.message;
                console.log(errorMessage)
                // The email of the user's account used.
                const email = error.email;
                console.log(email)
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(credential)
                // ...
            });


    })
}