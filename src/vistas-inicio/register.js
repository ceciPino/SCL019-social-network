// import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

// const auth = getAuth();

// export const formRegister = () => {
//     //Creación de campos de registro
//     let register = document.getElementById("Register");
    
//     let titleRegister = document.createElement("h1");
//     titleRegister.textContent = "Bienvenida a (nombre app)";
//     register.appendChild(titleRegister);
    
//     let formReg = document.createElement("form");
//     formReg.setAttribute("class", "register");
//     register.appendChild(formReg);
    
//     let userName = document.createElement("input");
//     userName.setAttribute("type", "email");
//     userName.setAttribute("placeholder", "example@mail.com");
//     userName.setAttribute("id", "userName");
//     formReg.appendChild(userName);
    
//     let passwordIn = document.createElement("input");
//     passwordIn.setAttribute("type", "password");
//     passwordIn.setAttribute("placeholder", "contraseña");
//     passwordIn.setAttribute("id","passwordIn");
//     formReg.appendChild(passwordIn);
    
//     let buttonRegister = document.createElement("input");
//     buttonRegister.setAttribute("type", "submit");
//     buttonRegister.setAttribute("value", "Iniciar sesión");
//     formReg.appendChild(buttonRegister);

//     formReg.addEventListener("submit", (register) => {
//         register.preventDefault();
//         let valueUserName = userName.value;
//         let valuePassword = passwordIn.value;
//         console.log(valueUserName + valuePassword);
        
//         createUserWithEmailAndPassword(auth, valueUserName, valuePassword)
//           .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             // redirigir a muro
//             console.log(user);
//           })
//           .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
            
//             console.log(errorCode);
//             console.log(errorMessage);
//           });
        
//           signInWithEmailAndPassword(auth, valueUserName, valuePassword)
//           .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             // ...
//             console.log("ingreso exitoso");
//           })
//           .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode);
//             console.log(errorMessage);
//           });
//         })
// }
