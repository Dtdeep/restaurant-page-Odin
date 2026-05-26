import {childContent, removeAllChild} from "./removeChildContainer.js";
import realCatImage from "./assets/realCat.jpeg";
const createContact = () =>{
    removeAllChild();
    childContent.classList.add("contact")
    childContent.classList.remove("menu");
    childContent.classList.remove("homepage");

    const contactTitle = document.createElement("h2");
    const realCat = document.createElement("img");
    const contactMessage = document.createElement("p");
    contactTitle.textContent = "Contact Us";
    realCat.src = realCatImage;
    realCat.alt = "Picture of my family's real cat"
    contactMessage.textContent = "Have questions or want to make a reservation at Mikay's Cat Cafe? We'd love to hear from you! Call us at (555) 123-4567 or send us an email at hello@mikayscatcafe.com. You can also visit us in person at 123 Whisker Lane, Feline City, FC 12345. We're open Monday through Sunday, 10 AM to 8 PM. Follow us on social media for daily cat content and special promotions!";

    childContent.appendChild(contactTitle);
    childContent.appendChild(realCat);
    childContent.appendChild(contactMessage);

}

export default createContact;