const menuItem = (name, price, description) =>{
    const setName = (newName) =>{ name = newName};
    const getName = () => name;
    const getPrice = () => price;
    const getDesc = () => description;
    return {setName, getName, getPrice, getDesc};
}


const entreeMenu = [];
const mainMenu = [];
const dessertMenu = [];

entreeMenu.push(menuItem("Salad", 7, "Just a good ol Salad"));
entreeMenu.push(menuItem("Soup", 4, "Just a good ol Soup"));
entreeMenu.push(menuItem("Chilli", 8, "Now we are doing business!"));
entreeMenu.push(menuItem("Poutine", 5, "We're in Canada eh!"));

mainMenu.push(menuItem("Lasagna", 14, "Meat lasagna with a side of vegetables"));
mainMenu.push(menuItem("Pizza", 12, "Why not?"));
mainMenu.push(menuItem("Burger", 14, "Perfect Burger, with putine fries"));
mainMenu.push(menuItem("Wings", 18, "All you can eat"));
mainMenu.push(menuItem("Pasta", 11, "Boring but good enough"));
mainMenu.push(menuItem("Tacos", 15, "The best tacos, straight from Mexico"));
mainMenu.push(menuItem("Steak", 20, "For the cowboy in you"));

dessertMenu.push(menuItem("ice Cream", 5, "Gelatto straight from Italy"));
dessertMenu.push(menuItem("Cheesecake", 6, "You are welcome!"));

const menu = (()=>{
    const createMenuElements = ()=>{
        const mainDiv = document.querySelector("main")

        //creating the div container
        const mainMenuContainer = document.createElement("div");
        mainMenuContainer.setAttribute("id", "mainMenuContainer");
        mainMenuContainer.classList.add("burgerBackground");

        const menuSelector = document.createElement("select");
        menuSelector.setAttribute("id", "menuSelector");
        menuSelector.innerHTML = `  <option value="entreeMenu">Entree Menu</option>
                                    <option value="mainMenu" selected>Main Menu</option>
                                    <option value="desertMenu"> Desert Menu</option>`;

        menuSelector.addEventListener("change", (e)=>{
            _changeMenu(e.target.value);
        })

        mainMenuContainer.appendChild(menuSelector);


        
        //creating cards out of mainMenu array, default.
        let cardContainer = _createCards(mainMenu);

        mainMenuContainer.appendChild(cardContainer);
        mainDiv.appendChild(mainMenuContainer);

        
    }

    const _changeMenu = (menu)=>{

        let mainMenuContainer = document.querySelector("#mainMenuContainer")

        let cardContainer = document.querySelector("#cardContainer");

        mainMenuContainer.removeChild(cardContainer);

        
        switch(menu){
            case "entreeMenu":
                mainMenuContainer.appendChild(_createCards(entreeMenu));
                break;
            case "mainMenu":
                mainMenuContainer.appendChild(_createCards(mainMenu));
                break;
            case "desertMenu":
                mainMenuContainer.appendChild(_createCards(dessertMenu));
                break;

        }
    }

    const _createCards = (array) =>{
        //creating card container
        const cardContainer = document.createElement("div");
        cardContainer.setAttribute("id", "cardContainer");
        //creating cards for passed Array
        array.forEach((item)=>{
            const newItem = document.createElement("div")
            newItem.classList.add("card");
            console.log(typeof item);

            newItem.innerHTML = `<h2>${item.getName()}</h2>
                                    <h3>$${item.getPrice()}</h3>
                                    <p>${item.getDesc()}</p>`;
            cardContainer.appendChild(newItem);
        })

        return cardContainer;
    }
    return{createMenuElements}
})();



export{menu};