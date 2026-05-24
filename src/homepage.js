import catImage from "./assets/homepage-cat.jpeg"
import {childContent} from "./removeChildContainer.js"

const createHompage = () =>{
    childContent.classList.add("homepage");

    const image = document.createElement("img");
    image.src = catImage;
    image.alt = "An image of cat on a table"

    const divDescription = document.createElement("div");
    const pDescription = document.createElement("p");
    divDescription.classList.add("description")
    pDescription.textContent = "Mikay's Cat Cafe is where you can enjoy delicious food while dining with adorable rescue cats. Our menu features international cuisine and specialty beverages. Every visit helps us provide care and forever homes for cats in need. Book your table today!"
    divDescription.appendChild(pDescription);


    const workingHours = [
        "Sunday: 10:00 AM - 6:00 PM",
        "Monday: 9:00 AM - 8:00 PM",
        "Tuesday: 9:00 AM - 8:00 PM",
        "Wednesday: 9:00 AM - 8:00 PM",
        "Thursday: 9:00 AM - 8:00 PM",
        "Friday: 9:00 AM - 9:00 PM",
        "Saturday: 10:00 AM - 9:00 PM"
    ];
    const divHours = document.createElement("div");
    const h3Hours = document.createElement("h3");
    const ulHours = document.createElement("ul");
    h3Hours.textContent = "Working Hours"
    workingHours.forEach((item)=>{
        const liTime = document.createElement("li");
        liTime.textContent = item;
        ulHours.appendChild(liTime);
    })
    divHours.appendChild(h3Hours);
    divHours.appendChild(ulHours);

    const divLocation = document.createElement("div");
    const h3Location = document.createElement("h3");
    const pLocation = document.createElement("p");
    pLocation.textContent = "456 Tabby Trail, Kitty Crossing, Cat Haven, NY 10001"
    h3Location.textContent = "Location"
    divLocation.appendChild(h3Location);
    divLocation.appendChild(pLocation);

    childContent.appendChild(image);
    childContent.appendChild(divDescription);
    childContent.appendChild(divHours);
    childContent.appendChild(divLocation);
}

export default createHompage;

