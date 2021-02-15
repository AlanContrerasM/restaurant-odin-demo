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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n\nconst home = (()=>{\n    \n\n    const createHomeElements = () =>{\n        const mainDiv = document.querySelector(\"main\")\n\n        const mainHomeContainer = document.createElement(\"div\");\n        mainHomeContainer.setAttribute(\"id\", \"mainHomeContainer\");\n\n        const homeFirst = document.createElement(\"div\");\n        const homeSecond = document.createElement(\"div\");\n        homeFirst.setAttribute(\"id\", \"homeFirst\");\n        homeSecond.setAttribute(\"id\", \"homeSecond\");\n        homeFirst.classList.add(\"floating-quote\");\n        homeSecond.classList.add(\"floating-quote\");\n        homeFirst.innerHTML = \"Proud to serve our customers since 1971<br>-Joe\";\n        homeSecond.innerHTML = 'Best Restaurant in town!\" <br>-The owner';\n\n        mainHomeContainer.appendChild(homeFirst);\n        mainHomeContainer.appendChild(homeSecond);\n\n        mainDiv.appendChild(mainHomeContainer);\n    }\n    return{createHomeElements};\n})();\n\n\n\n//# sourceURL=webpack://restaurant-odin-demo/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _myModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myModule.js */ \"./src/myModule.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n//import _ from 'lodash';//optional, must run npm install --save lodash\n\n\n\n\n\n\n\n_myModule_js__WEBPACK_IMPORTED_MODULE_0__.DisplayController.createBasicDomStructure();\n\n_home_js__WEBPACK_IMPORTED_MODULE_1__.home.createHomeElements();\n\n\n\nlet createNavListeners = () =>{\n  const homeNav = document.querySelector(\"#homeNav\");\n  const menuNav = document.querySelector(\"#menuNav\");\n  const aboutNav = document.querySelector(\"#aboutNav\");\n  const contactNav = document.querySelector(\"#contactNav\");\n\n  homeNav.addEventListener(\"click\", (e) =>{\n      e.target.classList.add(\"activeNav\");\n\n      menuNav.classList.remove(\"activeNav\");\n      aboutNav.classList.remove(\"activeNav\");\n      contactNav.classList.remove(\"activeNav\");\n\n      _myModule_js__WEBPACK_IMPORTED_MODULE_0__.DisplayController.emptyContainer();\n      _home_js__WEBPACK_IMPORTED_MODULE_1__.home.createHomeElements();\n  })\n\n  menuNav.addEventListener(\"click\", (e) =>{\n      e.target.classList.add(\"activeNav\");\n\n      homeNav.classList.remove(\"activeNav\");\n      aboutNav.classList.remove(\"activeNav\");\n      contactNav.classList.remove(\"activeNav\");\n\n      _myModule_js__WEBPACK_IMPORTED_MODULE_0__.DisplayController.emptyContainer();\n  })\n\n  aboutNav.addEventListener(\"click\", (e) =>{\n      e.target.classList.add(\"activeNav\");\n\n      homeNav.classList.remove(\"activeNav\");\n      menuNav.classList.remove(\"activeNav\");\n      contactNav.classList.remove(\"activeNav\");\n\n      _myModule_js__WEBPACK_IMPORTED_MODULE_0__.DisplayController.emptyContainer();\n  })\n\n  contactNav.addEventListener(\"click\", (e) =>{\n      e.target.classList.add(\"activeNav\");\n\n      menuNav.classList.remove(\"activeNav\");\n      aboutNav.classList.remove(\"activeNav\");\n      homeNav.classList.remove(\"activeNav\");\n\n      _myModule_js__WEBPACK_IMPORTED_MODULE_0__.DisplayController.emptyContainer();\n  })\n\n}\n\ncreateNavListeners();\n\n//# sourceURL=webpack://restaurant-odin-demo/./src/index.js?");

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