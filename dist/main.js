/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"about\": () => (/* binding */ about)\n/* harmony export */ });\nconst about = (()=>{\n    \n    //basically a copy of home.js\n    const createAboutElements = () =>{\n        const mainDiv = document.querySelector(\"main\")\n\n        const mainHomeContainer = document.createElement(\"div\");\n        mainHomeContainer.setAttribute(\"id\", \"mainHomeContainer\");\n        mainHomeContainer.classList.add(\"burgerBackground\")\n\n        const homeFirst = document.createElement(\"div\");\n        const homeSecond = document.createElement(\"div\");\n        homeFirst.setAttribute(\"id\", \"homeFirst\");\n        homeSecond.setAttribute(\"id\", \"homeSecond\");\n        homeFirst.classList.add(\"floating-quote\");\n        homeSecond.classList.add(\"floating-quote\");\n        homeFirst.innerHTML = \"We were founded on 1971\";\n        homeSecond.innerHTML = 'Still family owned, what else do you need?';\n\n        mainHomeContainer.appendChild(homeFirst);\n        mainHomeContainer.appendChild(homeSecond);\n\n        mainDiv.appendChild(mainHomeContainer);\n    }\n    return{createAboutElements};\n})();\n\n\n\n//# sourceURL=webpack://restaurant-odin-demo/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nconst contact = (()=>{\n    \n\n    const createContactElements = () =>{\n        const mainDiv = document.querySelector(\"main\")\n\n        const mainHomeContainer = document.createElement(\"div\");\n        mainHomeContainer.setAttribute(\"id\", \"mainHomeContainer\");\n        mainHomeContainer.classList.add(\"burgerBackground\")\n\n        const homeFirst = document.createElement(\"div\");\n        const homeSecond = document.createElement(\"div\");\n        homeFirst.setAttribute(\"id\", \"homeFirst\");\n        homeSecond.setAttribute(\"id\", \"homeSecond\");\n        homeFirst.classList.add(\"floating-quote\");\n        homeSecond.classList.add(\"floating-quote\");\n        homeFirst.innerHTML = '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20820.307830866743!2d-123.15139544788862!3d49.28514182720353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486722983fd3f63%3A0x1793ee2a33d8acda!2sWest%20End%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1613372521430!5m2!1sen!2sca\" width=\"400\" height=\"250\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>';\n        homeSecond.innerHTML = 'Just call us 1-888-888-8888';\n\n        mainHomeContainer.appendChild(homeFirst);\n        mainHomeContainer.appendChild(homeSecond);\n\n        mainDiv.appendChild(mainHomeContainer);\n    }\n    return{createContactElements};\n})();\n\n\n\n//# sourceURL=webpack://restaurant-odin-demo/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n\nconst home = (()=>{\n    \n\n    const createHomeElements = () =>{\n        const mainDiv = document.querySelector(\"main\")\n\n        const mainHomeContainer = document.createElement(\"div\");\n        mainHomeContainer.setAttribute(\"id\", \"mainHomeContainer\");\n        mainHomeContainer.classList.add(\"burgerBackground\")\n\n        const homeFirst = document.createElement(\"div\");\n        const homeSecond = document.createElement(\"div\");\n        homeFirst.setAttribute(\"id\", \"homeFirst\");\n        homeSecond.setAttribute(\"id\", \"homeSecond\");\n        homeFirst.classList.add(\"floating-quote\");\n        homeSecond.classList.add(\"floating-quote\");\n        homeFirst.innerHTML = \"Proud to serve our customers since 1971<br>-Joe\";\n        homeSecond.innerHTML = 'Best Restaurant in town!\" <br>-The owner';\n\n        mainHomeContainer.appendChild(homeFirst);\n        mainHomeContainer.appendChild(homeSecond);\n\n        mainDiv.appendChild(mainHomeContainer);\n    }\n    return{createHomeElements};\n})();\n\n\n\n//# sourceURL=webpack://restaurant-odin-demo/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _myModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myModule.js */ \"./src/myModule.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n//import _ from 'lodash';//optional, must run npm install --save lodash\n\n\n\n\n\n\n\n\n\n\n_myModule_js__WEBPACK_IMPORTED_MODULE_0__.DisplayController.createBasicDomStructure();\n\n_home_js__WEBPACK_IMPORTED_MODULE_1__.home.createHomeElements();\n\n\n\nlet createNavListeners = () =>{\n  const homeNav = document.querySelector(\"#homeNav\");\n  const menuNav = document.querySelector(\"#menuNav\");\n  const aboutNav = document.querySelector(\"#aboutNav\");\n  const contactNav = document.querySelector(\"#contactNav\");\n\n  homeNav.addEventListener(\"click\", (e) =>{\n      e.target.classList.add(\"activeNav\");\n\n      menuNav.classList.remove(\"activeNav\");\n      aboutNav.classList.remove(\"activeNav\");\n      contactNav.classList.remove(\"activeNav\");\n\n      _myModule_js__WEBPACK_IMPORTED_MODULE_0__.DisplayController.emptyContainer();\n      _home_js__WEBPACK_IMPORTED_MODULE_1__.home.createHomeElements();\n  })\n\n  menuNav.addEventListener(\"click\", (e) =>{\n      e.target.classList.add(\"activeNav\");\n\n      homeNav.classList.remove(\"activeNav\");\n      aboutNav.classList.remove(\"activeNav\");\n      contactNav.classList.remove(\"activeNav\");\n\n      _myModule_js__WEBPACK_IMPORTED_MODULE_0__.DisplayController.emptyContainer();\n      _menu_js__WEBPACK_IMPORTED_MODULE_2__.menu.createMenuElements();\n  })\n\n  aboutNav.addEventListener(\"click\", (e) =>{\n      e.target.classList.add(\"activeNav\");\n\n      homeNav.classList.remove(\"activeNav\");\n      menuNav.classList.remove(\"activeNav\");\n      contactNav.classList.remove(\"activeNav\");\n\n      _myModule_js__WEBPACK_IMPORTED_MODULE_0__.DisplayController.emptyContainer();\n      _about_js__WEBPACK_IMPORTED_MODULE_3__.about.createAboutElements();\n  })\n\n  contactNav.addEventListener(\"click\", (e) =>{\n      e.target.classList.add(\"activeNav\");\n\n      menuNav.classList.remove(\"activeNav\");\n      aboutNav.classList.remove(\"activeNav\");\n      homeNav.classList.remove(\"activeNav\");\n\n      _myModule_js__WEBPACK_IMPORTED_MODULE_0__.DisplayController.emptyContainer();\n      _contact_js__WEBPACK_IMPORTED_MODULE_4__.contact.createContactElements();\n  })\n\n}\n\ncreateNavListeners();\n\n//# sourceURL=webpack://restaurant-odin-demo/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nconst menuItem = (name, price, description) =>{\n    const setName = (newName) =>{ name = newName};\n    const getName = () => name;\n    const getPrice = () => price;\n    const getDesc = () => description;\n    return {setName, getName, getPrice, getDesc};\n}\n\n\nconst entreeMenu = [];\nconst mainMenu = [];\nconst dessertMenu = [];\n\nentreeMenu.push(menuItem(\"Salad\", 7, \"Just a good ol Salad\"));\nentreeMenu.push(menuItem(\"Soup\", 4, \"Just a good ol Soup\"));\nentreeMenu.push(menuItem(\"Chilli\", 8, \"Now we are doing business!\"));\nentreeMenu.push(menuItem(\"Poutine\", 5, \"We're in Canada eh!\"));\n\nmainMenu.push(menuItem(\"Lasagna\", 14, \"Meat lasagna with a side of vegetables\"));\nmainMenu.push(menuItem(\"Pizza\", 12, \"Why not?\"));\nmainMenu.push(menuItem(\"Burger\", 14, \"Perfect Burger, with putine fries\"));\nmainMenu.push(menuItem(\"Wings\", 18, \"All you can eat\"));\nmainMenu.push(menuItem(\"Pasta\", 11, \"Boring but good enough\"));\nmainMenu.push(menuItem(\"Tacos\", 15, \"The best tacos, straight from Mexico\"));\nmainMenu.push(menuItem(\"Steak\", 20, \"For the cowboy in you\"));\n\ndessertMenu.push(menuItem(\"ice Cream\", 5, \"Gelatto straight from Italy\"));\ndessertMenu.push(menuItem(\"Cheesecake\", 6, \"You are welcome!\"));\n\nconst menu = (()=>{\n    const createMenuElements = ()=>{\n        const mainDiv = document.querySelector(\"main\")\n\n        //creating the div container\n        const mainMenuContainer = document.createElement(\"div\");\n        mainMenuContainer.setAttribute(\"id\", \"mainMenuContainer\");\n        mainMenuContainer.classList.add(\"burgerBackground\");\n\n        const menuSelector = document.createElement(\"select\");\n        menuSelector.setAttribute(\"id\", \"menuSelector\");\n        menuSelector.innerHTML = `  <option value=\"entreeMenu\">Entree Menu</option>\n                                    <option value=\"mainMenu\" selected>Main Menu</option>\n                                    <option value=\"desertMenu\"> Desert Menu</option>`;\n\n        menuSelector.addEventListener(\"change\", (e)=>{\n            _changeMenu(e.target.value);\n        })\n\n        mainMenuContainer.appendChild(menuSelector);\n\n\n        \n        //creating cards out of mainMenu array, default.\n        let cardContainer = _createCards(mainMenu);\n\n        mainMenuContainer.appendChild(cardContainer);\n        mainDiv.appendChild(mainMenuContainer);\n\n        \n    }\n\n    const _changeMenu = (menu)=>{\n\n        let mainMenuContainer = document.querySelector(\"#mainMenuContainer\")\n\n        let cardContainer = document.querySelector(\"#cardContainer\");\n\n        mainMenuContainer.removeChild(cardContainer);\n\n        \n        switch(menu){\n            case \"entreeMenu\":\n                mainMenuContainer.appendChild(_createCards(entreeMenu));\n                break;\n            case \"mainMenu\":\n                mainMenuContainer.appendChild(_createCards(mainMenu));\n                break;\n            case \"desertMenu\":\n                mainMenuContainer.appendChild(_createCards(dessertMenu));\n                break;\n\n        }\n    }\n\n    const _createCards = (array) =>{\n        //creating card container\n        const cardContainer = document.createElement(\"div\");\n        cardContainer.setAttribute(\"id\", \"cardContainer\");\n        //creating cards for passed Array\n        array.forEach((item)=>{\n            const newItem = document.createElement(\"div\")\n            newItem.classList.add(\"card\");\n            console.log(typeof item);\n\n            newItem.innerHTML = `<h2>${item.getName()}</h2>\n                                    <h3>$${item.getPrice()}</h3>\n                                    <p>${item.getDesc()}</p>`;\n            cardContainer.appendChild(newItem);\n        })\n\n        return cardContainer;\n    }\n    return{createMenuElements}\n})();\n\n\n\n\n\n//# sourceURL=webpack://restaurant-odin-demo/./src/menu.js?");

/***/ }),

/***/ "./src/myModule.js":
/*!*************************!*\
  !*** ./src/myModule.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DisplayController\": () => (/* binding */ DisplayController)\n/* harmony export */ });\n//myModule.js\n\n//A Module for editing\nconst DisplayController  = (()=>{\n    let container = document.querySelector(\"#container\");\n\n    //privates is better to declare starting with _\n    //set popup to visible\n    let _showPopUp = (something)=>{ return prompt(something); }\n\n    \n\n    let _createHeader = () =>{\n        const header = document.createElement(\"header\");\n        const h1 = document.createElement(\"h1\");\n\n        h1.textContent = \"The Sailor\";\n        header.appendChild(h1);\n\n        return header;\n\n    }\n\n    let _createNav = () =>{\n        const nav = document.createElement(\"nav\");\n        const ul = document.createElement(\"ul\");\n\n        const homeNav = document.createElement(\"li\");\n\n        homeNav.setAttribute(\"id\", \"homeNav\");\n        homeNav.classList.add(\"activeNav\");\n        homeNav.textContent = \"Home\";\n        ul.appendChild(homeNav);\n\n        const menuNav = document.createElement(\"li\");\n        menuNav.setAttribute(\"id\", \"menuNav\");\n        menuNav.textContent = \"Menu\";\n        ul.appendChild(menuNav);\n\n        const aboutNav = document.createElement(\"li\");\n        aboutNav.setAttribute(\"id\", \"aboutNav\");\n        aboutNav.textContent = \"About\";\n        ul.appendChild(aboutNav);\n\n        const contactNav = document.createElement(\"li\");\n        contactNav.setAttribute(\"id\", \"contactNav\");\n        contactNav.textContent = \"Contact\";\n        ul.appendChild(contactNav);\n\n        nav.appendChild(ul);\n        return nav;\n    }\n\n    const _createFooter = () =>{\n        const footer = document.createElement(\"footer\");\n\n        const footLeft = document.createElement(\"div\");\n        footLeft.setAttribute(\"id\", \"footLeft\");\n        footLeft.innerHTML = \"Sherman, 42 Wallaby Way,<br>Sydney\";\n        footer.appendChild(footLeft);\n\n        const footCenter = document.createElement(\"div\");\n        const gitLink = document.createElement(\"a\");\n        gitLink.setAttribute(\"href\", \"https://github.com/AlanContrerasM\");\n        gitLink.innerHTML = \"By Alan Contreras<br>Copyright &copy; 2021\";\n        footCenter.appendChild(gitLink);\n        footer.appendChild(footCenter);\n\n        const footRight = document.createElement(\"div\");\n        footRight.setAttribute(\"id\", \"footRight\");\n        footRight.innerHTML = \"+1-777-888-8888<br>+1-800-888-8888\";\n        footer.appendChild(footRight);\n\n\n        return footer;\n    }\n\n    const emptyContainer = () =>{\n        const mainDiv = document.querySelector(\"main\");\n        mainDiv.innerHTML = \"\";\n    }\n\n    let createBasicDomStructure = () =>{\n        \n        container.appendChild(_createHeader());\n        container.appendChild(_createNav());\n        //main is empty\n        container.appendChild(document.createElement(\"main\"));\n        container.appendChild(_createFooter());\n    }\n\n    return {createBasicDomStructure, emptyContainer}\n})();\n\n\n//A factory function\nconst Player = (human = \"Hi Player\") =>{\n    //human param is boolean, false for computers, stored in closure\n    let counter = 0;\n    //setting default choices\n    let choice = \"X\";\n    let player = human;\n    const setChoice = (newChoice) =>{ choice = newChoice};\n    const getChoice = () => {return choice};\n    const addCounter = () => {counter++};\n    const getCounter = () => {return counter};\n    const getPlayer = () => player;\n\n    return {setChoice, getChoice, addCounter, getCounter, getPlayer}\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-odin-demo/./src/myModule.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;