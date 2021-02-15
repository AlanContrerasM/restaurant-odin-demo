const contact = (()=>{
    

    const createContactElements = () =>{
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
        homeFirst.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20820.307830866743!2d-123.15139544788862!3d49.28514182720353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486722983fd3f63%3A0x1793ee2a33d8acda!2sWest%20End%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1613372521430!5m2!1sen!2sca" width="400" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
        homeSecond.innerHTML = 'Just call us 1-888-888-8888';

        mainHomeContainer.appendChild(homeFirst);
        mainHomeContainer.appendChild(homeSecond);

        mainDiv.appendChild(mainHomeContainer);
    }
    return{createContactElements};
})();

export {contact};