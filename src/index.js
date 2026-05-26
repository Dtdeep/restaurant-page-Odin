import reset from "./comeauReset.css"
import styles from "./styles.css"
import createHomepage from "./homepage.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

console.log("Hello Mikay");

const header = document.querySelector("#header");
createHomepage();

header.addEventListener("click", (e)=>{
    const target = e.target;
    switch(target.id){
        case "home":
            createHomepage();
            console.log("you clicked homepage");
            break;
        case "menu":
            console.log("you clicked menu!");
            createMenu();
            break;
        case "contact":
            console.log("You clicked contact");
            createContact();
            break;
    }
})