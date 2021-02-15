"use strict";
//import _ from 'lodash';//optional, must run npm install --save lodash
import {DisplayController} from './myModule.js';
import {home} from './home.js';
import {menu} from './menu.js';
import {about} from './about.js';
import {contact} from './contact.js';





DisplayController.createBasicDomStructure();

home.createHomeElements();



let createNavListeners = () =>{
  const homeNav = document.querySelector("#homeNav");
  const menuNav = document.querySelector("#menuNav");
  const aboutNav = document.querySelector("#aboutNav");
  const contactNav = document.querySelector("#contactNav");

  homeNav.addEventListener("click", (e) =>{
      e.target.classList.add("activeNav");

      menuNav.classList.remove("activeNav");
      aboutNav.classList.remove("activeNav");
      contactNav.classList.remove("activeNav");

      DisplayController.emptyContainer();
      home.createHomeElements();
  })

  menuNav.addEventListener("click", (e) =>{
      e.target.classList.add("activeNav");

      homeNav.classList.remove("activeNav");
      aboutNav.classList.remove("activeNav");
      contactNav.classList.remove("activeNav");

      DisplayController.emptyContainer();
      menu.createMenuElements();
  })

  aboutNav.addEventListener("click", (e) =>{
      e.target.classList.add("activeNav");

      homeNav.classList.remove("activeNav");
      menuNav.classList.remove("activeNav");
      contactNav.classList.remove("activeNav");

      DisplayController.emptyContainer();
      about.createAboutElements();
  })

  contactNav.addEventListener("click", (e) =>{
      e.target.classList.add("activeNav");

      menuNav.classList.remove("activeNav");
      aboutNav.classList.remove("activeNav");
      homeNav.classList.remove("activeNav");

      DisplayController.emptyContainer();
      contact.createContactElements();
  })

}

createNavListeners();