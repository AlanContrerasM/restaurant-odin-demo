//myModule.js

//A Module for editing
const DisplayController  = (()=>{
    let container = document.querySelector("#container");

    //privates is better to declare starting with _
    //set popup to visible
    let _showPopUp = (something)=>{ return prompt(something); }

    

    let _createHeader = () =>{
        const header = document.createElement("header");
        const h1 = document.createElement("h1");

        h1.textContent = "The Sailor";
        header.appendChild(h1);

        return header;

    }

    let _createNav = () =>{
        const nav = document.createElement("nav");
        const ul = document.createElement("ul");

        const homeNav = document.createElement("li");

        homeNav.setAttribute("id", "homeNav");
        homeNav.classList.add("activeNav");
        homeNav.textContent = "Home";
        ul.appendChild(homeNav);

        const menuNav = document.createElement("li");
        menuNav.setAttribute("id", "menuNav");
        menuNav.textContent = "Menu";
        ul.appendChild(menuNav);

        const aboutNav = document.createElement("li");
        aboutNav.setAttribute("id", "aboutNav");
        aboutNav.textContent = "About";
        ul.appendChild(aboutNav);

        const contactNav = document.createElement("li");
        contactNav.setAttribute("id", "contactNav");
        contactNav.textContent = "Contact";
        ul.appendChild(contactNav);

        nav.appendChild(ul);
        return nav;
    }

    const _createFooter = () =>{
        const footer = document.createElement("footer");

        const footLeft = document.createElement("div");
        footLeft.setAttribute("id", "footLeft");
        footLeft.innerHTML = "Sherman, 42 Wallaby Way,<br>Sydney";
        footer.appendChild(footLeft);

        const footCenter = document.createElement("div");
        const gitLink = document.createElement("a");
        gitLink.setAttribute("href", "https://github.com/AlanContrerasM");
        gitLink.innerHTML = "By Alan Contreras<br>Copyright &copy; 2021";
        footCenter.appendChild(gitLink);
        footer.appendChild(footCenter);

        const footRight = document.createElement("div");
        footRight.setAttribute("id", "footRight");
        footRight.innerHTML = "+1-777-888-8888<br>+1-800-888-8888";
        footer.appendChild(footRight);


        return footer;
    }

    const emptyContainer = () =>{
        const mainDiv = document.querySelector("main");
        mainDiv.innerHTML = "";
    }

    let createBasicDomStructure = () =>{
        
        container.appendChild(_createHeader());
        container.appendChild(_createNav());
        //main is empty
        container.appendChild(document.createElement("main"));
        container.appendChild(_createFooter());
    }

    return {createBasicDomStructure, emptyContainer}
})();


//A factory function
const Player = (human = "Hi Player") =>{
    //human param is boolean, false for computers, stored in closure
    let counter = 0;
    //setting default choices
    let choice = "X";
    let player = human;
    const setChoice = (newChoice) =>{ choice = newChoice};
    const getChoice = () => {return choice};
    const addCounter = () => {counter++};
    const getCounter = () => {return counter};
    const getPlayer = () => player;

    return {setChoice, getChoice, addCounter, getCounter, getPlayer}
}


export {DisplayController};