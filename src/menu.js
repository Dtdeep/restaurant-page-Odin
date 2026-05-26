import {childContent, removeAllChild} from "./removeChildContainer.js";
import drink1 from "./assets/drink1.jpg";
import drink2 from "./assets/drink2.jpg";
import drink3 from "./assets/drink3.jpg";
import side1 from "./assets/side1.jpg";
import side2 from "./assets/side2.jpg";
import side3 from "./assets/side3.jpeg";
import main1 from "./assets/main1.jpg";
import main2 from "./assets/main2.jpg";
import main3 from "./assets/main3.jpg";


const products = {
    beverages : [
        {
            source: drink1,
            alt: 'Whisker',
            title: 'Whisker Cappuccino',
            description:'Smooth cappuccino topped with a cute paw print in cocoa powder. A cozy blend for cat lovers.'
        },
        {
            source:drink2,
            alt: 'Iced Tea',
            title: 'Purr-fect Iced Tea',
            description:'Refreshing iced matcha green tea with milk and a touch of honey. Perfectly balanced for a relaxing afternoon.'
        },
        {
            source:drink3,
            alt: 'Mocha',
            title: 'Meow Mocha',
            description:'Rich dark chocolate mocha with whipped cream and a sprinkle of cinnamon. Warm and comforting just like a cat\'s purr.'
        }
    ],
    sideDish: [
        {
            source:side1,
            alt: 'Salmon Paw Pastries',
            title: 'Salmon Paw Pastries',
            description:'Golden, crispy pastries shaped like cat paws, filled with savory salmon and cream cheese.'
        },
        {
            source:side2,
            alt: 'Whisker Fries',
            title: 'Whisker Fries',
            description:'Thin-cut crispy fries seasoned with sea salt and a hint of garlic, perfect for dipping in our house sauce.'
        },
        {
            source:side3,
            alt: 'Tuna Tartlets',
            title: 'Tuna Tartlets',
            description:'Mini puff pastry tartlets topped with a light tuna salad mix and fresh microgreens. A feline favorite!'
        }
    ],
    mainDish:[
        {
            source:main1,
            alt: 'Whisker Salmon Plate',
            title: 'Whisker Salmon Plate',
            description:'Pan-seared Atlantic salmon fillet served with roasted vegetables and buttery lemon dill sauce. A purr-fect protein choice.'
        },
        {
            source:main2,
            alt: 'Meow Meatball Pasta',
            title: 'Meow Meatball Pasta',
            description:'Homemade meatballs in a rich marinara sauce served over al dente pasta, topped with parmesan and fresh basil.'
        },
        {
            source:main3,
            alt: 'Paw Pad Chicken',
            title: 'Paw Pad Chicken',
            description:'Tender grilled chicken breast topped with a creamy mushroom sauce, served with herb-roasted potatoes and seasonal greens.'
        }
    ]
}

const createMenu = () => {
    removeAllChild();
    childContent.classList.remove("homepage");
    childContent.classList.remove("contact");
    childContent.classList.add("menu")
    const h2Menu = document.createElement("h2");
    h2Menu.textContent = "Menu";
    childContent.appendChild(h2Menu);

    const divBeverages = document.createElement("div");
    divBeverages.classList.add("product");
    const h3Beverage = document.createElement("h3");
    h3Beverage.textContent = "Beverages";
    divBeverages.appendChild(h3Beverage);
    h3Beverage.classList.add("title");
    const renderAllDrinkCard = products.beverages.forEach((drinkItem)=>{
        const drinkDiv = document.createElement("div");
        const drinkImage = document.createElement("img");
        const drinkName = document.createElement("h4");
        const drinkDescription = document.createElement("p");

        drinkImage.src = drinkItem.source;
        drinkImage.alt = drinkItem.alt;
        drinkName.textContent = drinkItem.title;
        drinkDescription.textContent = drinkItem.description;

        drinkDiv.appendChild(drinkImage);
        drinkDiv.appendChild(drinkName);
        drinkDiv.appendChild(drinkDescription);

        divBeverages.appendChild(drinkDiv);
    });
    childContent.appendChild(divBeverages);

    const divSideDish = document.createElement("div");
    divSideDish.classList.add("product");
    const h3SideDish = document.createElement("h3");
    h3SideDish.textContent = "Side Dishes";
    divSideDish.appendChild(h3SideDish);
    h3SideDish.classList.add("title");
    const renderAllSideDishCard = products.sideDish.forEach((sideItem)=>{
        const sideDiv = document.createElement("div");
        const sideImage = document.createElement("img");
        const sideName = document.createElement("h4");
        const sideDescription = document.createElement("p");

        sideImage.src = sideItem.source;
        sideImage.alt = sideItem.alt;
        sideName.textContent = sideItem.title;
        sideDescription.textContent = sideItem.description;

        sideDiv.appendChild(sideImage);
        sideDiv.appendChild(sideName);
        sideDiv.appendChild(sideDescription);

        divSideDish.appendChild(sideDiv);
    });
    childContent.appendChild(divSideDish);

    const divMainDish = document.createElement("div");
    divMainDish.classList.add("product");
    const h3MainDish = document.createElement("h3");
    h3MainDish.textContent = "Main Dishes";
    divMainDish.appendChild(h3MainDish);
    h3MainDish.classList.add("title");
    const renderAllMainDishCard = products.mainDish.forEach((mainItem)=>{
        const mainDiv = document.createElement("div");
        const mainImage = document.createElement("img");
        const mainName = document.createElement("h4");
        const mainDescription = document.createElement("p");

        mainImage.src = mainItem.source;
        mainImage.alt = mainItem.alt;
        mainName.textContent = mainItem.title;
        mainDescription.textContent = mainItem.description;

        mainDiv.appendChild(mainImage);
        mainDiv.appendChild(mainName);
        mainDiv.appendChild(mainDescription);

        divMainDish.appendChild(mainDiv);
    });
    childContent.appendChild(divMainDish);



}

export default createMenu;
