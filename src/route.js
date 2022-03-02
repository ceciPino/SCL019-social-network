import { login } from "./pages/logIn.js";
import { register } from "./pages/register.js"

export const route = () => {
    
const root = document.getElementById("root");

const linkContent = {
    "#login": login(),
    "#register": register(),
};

const routes = {
    "/login": login(),
    "/register": register(),
};

const pathname = window.location.pathname;
root.innerHTML = routes[pathname];

const changeRoute = (hash) => {
    if (hash === "#login") {
        window.history.replaceState({},"login","/login");
    } else if (hash === "#register") {
        window.history.replaceState({},"register","/register");
    }
};


window.addEventListener("hashchange", () => {
    const hash = window.location.hash;
    root.innerHTML = linkContent[hash];
    changeRoute(hash);
});

window.onpopstate = () => {
    const pathname = window.location.pathname;
    root.innerHTML = routes[pathname];
};
}