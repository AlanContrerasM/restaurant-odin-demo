const about = (()=>{
    
    //basically a copy of home.js
    const createAboutElements = () =>{
        const mainDiv = document.querySelector("main")

        const mainHomeContainer = document.createElement("div");
        mainHomeContainer.setAttribute("id", "mainHomeContainer");
        mainHomeContainer.classList.add("burgerBackground")

        const homeFirst = document.createElement("div");
        const homeSecond = document.createElement("div");
        homeFirst.setAttribute("id", "homeFirst");
        homeSecond.setAttribute("id", "homeSecond");
        homeFirst.classList.add("floating-quote");
        homeSecond.classList.add("floating-quote");
        homeFirst.innerHTML = "We were founded on 1971";
        homeSecond.innerHTML = 'Still family owned, what else do you need?';

        mainHomeContainer.appendChild(homeFirst);
        mainHomeContainer.appendChild(homeSecond);

        mainDiv.appendChild(mainHomeContainer);
    }
    return{createAboutElements};
})();

export {about};