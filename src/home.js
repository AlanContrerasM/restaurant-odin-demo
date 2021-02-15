
const home = (()=>{
    

    const createHomeElements = () =>{
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
        homeFirst.innerHTML = "Proud to serve our customers since 1971<br>-Joe";
        homeSecond.innerHTML = 'Best Restaurant in town!" <br>-The owner';

        mainHomeContainer.appendChild(homeFirst);
        mainHomeContainer.appendChild(homeSecond);

        mainDiv.appendChild(mainHomeContainer);
    }
    return{createHomeElements};
})();

export {home};