import reset from "./comeauReset.css"
import styles from "./styles.css"
import createHomepage from "./homepage.js";

console.log("Hello Mikay");

const header = document.querySelector("#header");

header.addEventListener("click", (e)=>{
    const target = e.target;
    switch(target.id){
        case "home":
            createHomepage();
            console.log("you clicked homepage")
            break;
        case "menu":
            console.log("you clicked menu!")
            break;
        case "contact":
            console.log("You clicked contact")
            break;
    }
})