/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactUs.js":
/*!**************************!*\
  !*** ./src/contactUs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactUs": () => (/* binding */ contactUs)
/* harmony export */ });
let contactUs = (function () {
  let render = function () {
    let divContent = document.querySelector("#content");
    divContent.replaceChildren();

    // MAIN CONTENT -----------------------------------------------------------

    let divHomepage = document.createElement("div");
    divHomepage.classList.add("content", "h-screen", "font-sans");
    divHomepage.setAttribute("id", "homepage");

    let divGrid = document.createElement("div");
    divGrid.classList.add("grid", "grid-cols-1");

    divContent.appendChild(divHomepage);
    divHomepage.appendChild(divGrid);

    // NAV MENU ---------------------------------------------------------------

    let divNav = document.createElement("div");
    divNav.setAttribute("id", "nav2");
    divNav.classList.add("px-5", "py-3", "drop-shadow-lg");
    divGrid.appendChild(divNav);

    let divFlex = document.createElement("div");
    divFlex.classList.add(
      "flex",
      "justify-center",
      "w-full",
      "gap-7",
      "bg-amber-50",
      "py-2",
      "navi"
    );
    divNav.appendChild(divFlex);

    let buttonNavHome = document.createElement("button");
    buttonNavHome.classList.add("text-xl");
    buttonNavHome.innerText = "Home";
    divFlex.appendChild(buttonNavHome);

    let buttonNavMenu = document.createElement("button");
    buttonNavMenu.classList.add("text-xl");
    buttonNavMenu.innerText = "Menu";
    divFlex.appendChild(buttonNavMenu);

    let buttonNavContact = document.createElement("button");
    buttonNavContact.classList.add("text-xl");
    buttonNavContact.innerText = "Contact";
    divFlex.appendChild(buttonNavContact);

    // WIDTH CONTAINER -------------------------------------------------------

    let divWidth2 = document.createElement("div");
    divWidth2.setAttribute("id", "div-width2");
    divWidth2.classList.add("grid", "drop-shadow-lg", "rounded-lg");
    divGrid.appendChild(divWidth2);

    // HERO DIV

    let divHero = document.createElement("div");
    divHero.setAttribute("id", "hero-container");
    divHero.classList.add("place-self-end");
    divWidth2.appendChild(divHero);

    let textHero = document.createElement("p");
    textHero.textContent = "Our story";
    textHero.classList.add("hero-small");
    divHero.appendChild(textHero);

    // STORY DIV

    let divStory = document.createElement("div");
    divStory.setAttribute("id","story");
    divStory.classList.add("place-self-end");
    divStory.textContent =
      "Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet, consectetur, adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?";
    divWidth2.appendChild(divStory);

    // ADDRESS CONTACT

    let divAddressContainer = document.create("div");
    divAddressContainer.setAttribute("id", "address");
    divAddressContainer.textContent = "emiasd"
    divWidth2.appendChild(divAddressContainer)
  };

  let cacheNav = function () {
    document.addEventListener("DOMContentLoaded", function () {
      let nav = document.querySelectorAll(".nav");
    });
  };

  return {
    render,
    cacheNav,
  };
})();




/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homepage": () => (/* binding */ homepage)
/* harmony export */ });
let homepage = (function () {
  let render = function () {
    let divContent = document.querySelector("#content");
    divContent.replaceChildren();

    // MAIN CONTENT

    let divHomepage = document.createElement("div");
    divHomepage.classList.add("content", "h-screen", "font-sans");
    divHomepage.setAttribute("id", "homepage");

    let divGrid = document.createElement("div");
    divGrid.classList.add("grid", "grid-cols-2", "h-full");

    divContent.appendChild(divHomepage);
    divHomepage.appendChild(divGrid);

    // LEFT GRID

    let divLeft = document.createElement("div");
    divLeft.classList.add(
      "left",
      "grid",
      "grid-cols-1",
      "grid-custom-1",
      "bg-amber-50"
    );
    divGrid.appendChild(divLeft);

    let divInnerGrid = document.createElement("div");
    divInnerGrid.classList.add("grid", "gap-10", "justify-items-center");
    divLeft.appendChild(divInnerGrid);

    let divTitle = document.createElement("div");
    divTitle.classList.add("text-xl");
    divTitle.textContent = "EAT.com";
    divInnerGrid.appendChild(divTitle);

    let divBanner = document.createElement("div");
    divBanner.classList.add("text-xl");
    divBanner.textContent = "Eat with us";
    divInnerGrid.appendChild(divBanner);

    let buttonMenu = document.createElement("button");
    buttonMenu.type = "button";
    buttonMenu.classList.add(
      "text-xl",
      "text-gray-900",
      "bg-white",
      "border",
      "border-gray-300",
      "focus:outline-none",
      "hover:bg-gray-100",
      "focus:ring-4",
      "focus:ring-gray-200",
      "font-medium",
      "rounded-lg",
      "text-sm",
      "px-5",
      "py-2.5",
      "dark:bg-gray-800",
      "dark:text-white",
      "dark:border-gray-600",
      "dark:hover:bg-gray-700",
      "dark:hover:border-gray-600",
      "dark:focus:ring-gray-700"
    );
    buttonMenu.innerText = "Discover our menu";
    divInnerGrid.appendChild(buttonMenu);

    let divFooter = document.createElement("div");
    divFooter.innerText = "Footer";
    divLeft.appendChild(divFooter);

    // RIGHT GRID

    let divRight = document.createElement("div");
    divRight.classList.add("right", "h-full", "shadow-2xl");
    divGrid.appendChild(divRight);

    let divNav = document.createElement("div");
    divNav.setAttribute("id", "nav");
    divNav.classList.add("px-5", "py-3", "drop-shadow-lg");
    divRight.appendChild(divNav);

    let divFlex = document.createElement("div");
    divFlex.classList.add(
      "flex",
      "justify-center",
      "w-full",
      "gap-7",
      "bg-amber-50",
      "py-2",
      "navi"
    );
    divNav.appendChild(divFlex);

    let buttonNavHome = document.createElement("button");
    buttonNavHome.classList.add("text-xl");
    buttonNavHome.innerText = "Home";
    divFlex.appendChild(buttonNavHome);

    let buttonNavMenu = document.createElement("button");
    buttonNavMenu.classList.add("text-xl");
    buttonNavMenu.innerText = "Menu";
    divFlex.appendChild(buttonNavMenu);

    let buttonNavContact = document.createElement("button");
    buttonNavContact.classList.add("text-xl");
    buttonNavContact.innerText = "Contact";
    divFlex.appendChild(buttonNavContact);

    let divImage = document.createElement("div");
    divImage.classList.add("image-background");
    divRight.appendChild(divImage);

    let image = document.createElement("img");
    image.setAttribute("id", "image-custom");
    image.src = "image-2.jpg";
    divImage.appendChild(image);
  };

  let cacheNav = function () {
    document.addEventListener("DOMContentLoaded", function () {
      let nav = document.querySelectorAll(".nav");
    });
  };

  return {
    render,
    cacheNav,
  };
})();




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
let menu = (function () {
  let render = function () {
    let divContent = document.querySelector("#content");
    divContent.replaceChildren();

    // MAIN CONTENT -----------------------------------------------------------

    let divHomepage = document.createElement("div");
    divHomepage.classList.add("content", "h-screen", "font-sans");
    divHomepage.setAttribute("id", "homepage");

    let divGrid = document.createElement("div");
    divGrid.classList.add("grid", "grid-cols-1");

    divContent.appendChild(divHomepage);
    divHomepage.appendChild(divGrid);

    // NAV MENU ---------------------------------------------------------------

    let divNav = document.createElement("div");
    divNav.setAttribute("id", "nav2");
    divNav.classList.add("px-5", "py-3", "drop-shadow-lg");
    divGrid.appendChild(divNav);

    let divFlex = document.createElement("div");
    divFlex.classList.add(
      "flex",
      "justify-center",
      "w-full",
      "gap-7",
      "bg-amber-50",
      "py-2",
      "navi"
    );
    divNav.appendChild(divFlex);

    let buttonNavHome = document.createElement("button");
    buttonNavHome.classList.add("text-xl");
    buttonNavHome.innerText = "Home";
    divFlex.appendChild(buttonNavHome);

    let buttonNavMenu = document.createElement("button");
    buttonNavMenu.classList.add("text-xl");
    buttonNavMenu.innerText = "Menu";
    divFlex.appendChild(buttonNavMenu);

    let buttonNavContact = document.createElement("button");
    buttonNavContact.classList.add("text-xl");
    buttonNavContact.innerText = "Contact";
    divFlex.appendChild(buttonNavContact);

    // WIDTH CONTAINER -------------------------------------------------------

    let divWidth = document.createElement("div");
    divWidth.setAttribute("id", "div-width");
    divWidth.classList.add("drop-shadow-lg", "rounded-lg", "grid", "justify-center")
    divGrid.appendChild(divWidth);

    // MENU CONTAINER ---------------------------------------------------------

    let divMenuContainerAll = document.createElement("div");
    divMenuContainerAll.setAttribute("id", "menuContainerAll");
    divMenuContainerAll.classList.add("grid", "justify-center");
    divWidth.appendChild(divMenuContainerAll);

    // HERO DIV

    let divHero = document.createElement("div");
    divHero.setAttribute("id", "hero-container");
    divHero.classList.add("grid", "justify-center");
    divMenuContainerAll.appendChild(divHero);

    let textHero = document.createElement("p");
    textHero.textContent = "Discover";
    textHero.classList.add("hero-small");
    divHero.appendChild(textHero);

    let textHero2 = document.createElement("p");
    textHero2.textContent = "Our food menu";
    textHero2.classList.add("hero-big");
    divHero.appendChild(textHero2);

    // PLATE CONTAINER ALL

    let menuEntryPlateAll = document.createElement("div");
    menuEntryPlateAll.setAttribute("id", "plateAll");
    menuEntryPlateAll.classList.add("grid", "grid-cols-2");
    divMenuContainerAll.appendChild(menuEntryPlateAll);

    // MENU ENTRY ONE

    let menuCategory1 = document.createElement("div");
    menuCategory1.setAttribute("id", "menu-Category-1");
    menuEntryPlateAll.appendChild(menuCategory1);

    let menuCategory1Title = document.createElement("h1");
    menuCategory1Title.textContent = "Apetizers";
    menuCategory1Title.classList.add("text-xl");
    menuCategory1.appendChild(menuCategory1Title);

    let menuCategory1Plate1 = document.createElement("h2");
    menuCategory1Plate1.textContent = "Clam ships";
    menuCategory1.appendChild(menuCategory1Plate1);

    let menuCategory1Plate1Context = document.createElement("p");
    menuCategory1Plate1Context.classList.add("details")
    menuCategory1Plate1Context.textContent =
      "New england style, with house made sauce";
    menuCategory1.appendChild(menuCategory1Plate1Context);

    let menuCategory1Plate2 = document.createElement("h2");
    menuCategory1Plate2.textContent = "Grilled Bruschetta";
    menuCategory1.appendChild(menuCategory1Plate2);

    let menuCategory1Plate2Context = document.createElement("p");
    menuCategory1Plate2Context.classList.add("details")
    menuCategory1Plate2Context.textContent =
      "White beans, roasted garlic, prosciutto";
    menuCategory1.appendChild(menuCategory1Plate2Context);

    // MENU ENTRY TWO

    let menuCategory2 = document.createElement("div");
    menuCategory2.setAttribute("id", "menu-Category-2");
    menuEntryPlateAll.appendChild(menuCategory2);

    let menuCategory2Title = document.createElement("h1");
    menuCategory2Title.textContent = "Burger & Sandwiches";
    menuCategory2Title.classList.add("text-xl");
    menuCategory2.appendChild(menuCategory2Title);

    let menuCategory2Plate1 = document.createElement("h2");
    menuCategory2Plate1.textContent = "Veggie Burger";
    menuCategory2.appendChild(menuCategory2Plate1);

    let menuCategory2Plate1Context = document.createElement("p");
    menuCategory2Plate1Context.classList.add("details")
    menuCategory2Plate1Context.textContent =
      "Made with brown rice, black beer, oats and molosses, with lettuce, tomato, onion, pickle and sauce";
    menuCategory2.appendChild(menuCategory2Plate1Context);

    let menuCategory2Plate2 = document.createElement("h2");
    menuCategory2Plate2.textContent = "Smoked Turkey Panini";
    menuCategory2.appendChild(menuCategory2Plate2);

    let menuCategory2Plate2Context = document.createElement("p");
    menuCategory2Plate2Context.classList.add("details")
    menuCategory2Plate2Context.textContent =
      "Delicate turning breast, crispy bacon, mild cheddar cheese, vine ripened tomatoes, creamy mayo on ciabatta bread";
    menuCategory2.appendChild(menuCategory2Plate2Context);

    // MENU ENTRY THREE

    let menuCategory3 = document.createElement("div");
    menuCategory3.setAttribute("id", "menu-Category-3");
    menuEntryPlateAll.appendChild(menuCategory3);

    let menuCategory3Title = document.createElement("h1");
    menuCategory3Title.textContent = "Plates";
    menuCategory3Title.classList.add("text-xl");
    menuCategory3.appendChild(menuCategory3Title);

    let menuCategory3Plate1 = document.createElement("h2");
    menuCategory3Plate1.textContent = "Seafood alfredo";
    menuCategory3.appendChild(menuCategory3Plate1);

    let menuCategory3Plate1Context = document.createElement("p");
    menuCategory3Plate1Context.classList.add("details")
    menuCategory3Plate1Context.textContent =
      "Pasta shrimp and crab in a creamy alfredo sauce";
    menuCategory3.appendChild(menuCategory3Plate1Context);

    let menuCategory3Plate2 = document.createElement("h2");
    menuCategory3Plate2.textContent = "Herb roasted half chicken";
    menuCategory3.appendChild(menuCategory3Plate2);

    let menuCategory3Plate2Context = document.createElement("p");
    menuCategory3Plate2Context.classList.add("details")
    menuCategory3Plate2Context.textContent =
      "Oregon raised chicken with our vegetable risotto cake";
    menuCategory3.appendChild(menuCategory3Plate2Context);

    // MENU ENTRY FOUR

    let menuCategory4 = document.createElement("div");
    menuCategory4.setAttribute("id", "menu-Category-4");
    menuEntryPlateAll.appendChild(menuCategory4);

    let menuCategory4Title = document.createElement("h1");
    menuCategory4Title.textContent = "Deserts";
    menuCategory4Title.classList.add("text-xl");
    menuCategory4.appendChild(menuCategory4Title);

    let menuCategory4Plate1 = document.createElement("h2");
    menuCategory4Plate1.textContent = "Yogurt";
    menuCategory4.appendChild(menuCategory4Plate1);

    let menuCategory4Plate1Context = document.createElement("p");
    menuCategory4Plate1Context.classList.add("details")
    menuCategory4Plate1Context.textContent = "With fresh berries";
    menuCategory4.appendChild(menuCategory4Plate1Context);

    let menuCategory4Plate2 = document.createElement("h2");
    menuCategory4Plate2.textContent = "Carrot cake";
    menuCategory4.appendChild(menuCategory4Plate2);

    let menuCategory4Plate2Context = document.createElement("p");
    menuCategory4Plate2Context.classList.add("details")
    menuCategory4Plate2Context.textContent =
      "Made with carrot, pineapple, coconuts, and raisins, with cream cheese frosting";
    menuCategory4.appendChild(menuCategory4Plate2Context);
  };

  let cacheNav = function () {
    document.addEventListener("DOMContentLoaded", function () {
      let nav = document.querySelectorAll(".nav");
    });
  };

  return {
    render,
    cacheNav,
  };
})();




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contactUs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactUs */ "./src/contactUs.js");




window.homepage = _homepage__WEBPACK_IMPORTED_MODULE_0__.homepage
window.menu = _menu__WEBPACK_IMPORTED_MODULE_1__.menu
window.contactUs = _contactUs__WEBPACK_IMPORTED_MODULE_2__.contactUs

// homepage.render()
_contactUs__WEBPACK_IMPORTED_MODULE_2__.contactUs.render()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7O0FDbkdyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7OztBQ3RJcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVlOzs7Ozs7O1VDak9oQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDUjtBQUNVOztBQUV4QyxrQkFBa0IsK0NBQVE7QUFDMUIsY0FBYyx1Q0FBSTtBQUNsQixtQkFBbUIsaURBQVM7O0FBRTVCO0FBQ0Esd0RBQWdCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvY29udGFjdFVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGNvbnRhY3RVcyA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgZGl2Q29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIC8vIE1BSU4gQ09OVEVOVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgbGV0IGRpdkhvbWVwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZIb21lcGFnZS5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiLCBcImgtc2NyZWVuXCIsIFwiZm9udC1zYW5zXCIpO1xuICAgIGRpdkhvbWVwYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZXBhZ2VcIik7XG5cbiAgICBsZXQgZGl2R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2R3JpZC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiLCBcImdyaWQtY29scy0xXCIpO1xuXG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChkaXZIb21lcGFnZSk7XG4gICAgZGl2SG9tZXBhZ2UuYXBwZW5kQ2hpbGQoZGl2R3JpZCk7XG5cbiAgICAvLyBOQVYgTUVOVSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGxldCBkaXZOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdk5hdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdjJcIik7XG4gICAgZGl2TmF2LmNsYXNzTGlzdC5hZGQoXCJweC01XCIsIFwicHktM1wiLCBcImRyb3Atc2hhZG93LWxnXCIpO1xuICAgIGRpdkdyaWQuYXBwZW5kQ2hpbGQoZGl2TmF2KTtcblxuICAgIGxldCBkaXZGbGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZGbGV4LmNsYXNzTGlzdC5hZGQoXG4gICAgICBcImZsZXhcIixcbiAgICAgIFwianVzdGlmeS1jZW50ZXJcIixcbiAgICAgIFwidy1mdWxsXCIsXG4gICAgICBcImdhcC03XCIsXG4gICAgICBcImJnLWFtYmVyLTUwXCIsXG4gICAgICBcInB5LTJcIixcbiAgICAgIFwibmF2aVwiXG4gICAgKTtcbiAgICBkaXZOYXYuYXBwZW5kQ2hpbGQoZGl2RmxleCk7XG5cbiAgICBsZXQgYnV0dG9uTmF2SG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uTmF2SG9tZS5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKTtcbiAgICBidXR0b25OYXZIb21lLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuICAgIGRpdkZsZXguYXBwZW5kQ2hpbGQoYnV0dG9uTmF2SG9tZSk7XG5cbiAgICBsZXQgYnV0dG9uTmF2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uTmF2TWVudS5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKTtcbiAgICBidXR0b25OYXZNZW51LmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIGRpdkZsZXguYXBwZW5kQ2hpbGQoYnV0dG9uTmF2TWVudSk7XG5cbiAgICBsZXQgYnV0dG9uTmF2Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uTmF2Q29udGFjdC5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKTtcbiAgICBidXR0b25OYXZDb250YWN0LmlubmVyVGV4dCA9IFwiQ29udGFjdFwiO1xuICAgIGRpdkZsZXguYXBwZW5kQ2hpbGQoYnV0dG9uTmF2Q29udGFjdCk7XG5cbiAgICAvLyBXSURUSCBDT05UQUlORVIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgbGV0IGRpdldpZHRoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2V2lkdGgyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGl2LXdpZHRoMlwiKTtcbiAgICBkaXZXaWR0aDIuY2xhc3NMaXN0LmFkZChcImdyaWRcIiwgXCJkcm9wLXNoYWRvdy1sZ1wiLCBcInJvdW5kZWQtbGdcIik7XG4gICAgZGl2R3JpZC5hcHBlbmRDaGlsZChkaXZXaWR0aDIpO1xuXG4gICAgLy8gSEVSTyBESVZcblxuICAgIGxldCBkaXZIZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZIZXJvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVyby1jb250YWluZXJcIik7XG4gICAgZGl2SGVyby5jbGFzc0xpc3QuYWRkKFwicGxhY2Utc2VsZi1lbmRcIik7XG4gICAgZGl2V2lkdGgyLmFwcGVuZENoaWxkKGRpdkhlcm8pO1xuXG4gICAgbGV0IHRleHRIZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGV4dEhlcm8udGV4dENvbnRlbnQgPSBcIk91ciBzdG9yeVwiO1xuICAgIHRleHRIZXJvLmNsYXNzTGlzdC5hZGQoXCJoZXJvLXNtYWxsXCIpO1xuICAgIGRpdkhlcm8uYXBwZW5kQ2hpbGQodGV4dEhlcm8pO1xuXG4gICAgLy8gU1RPUlkgRElWXG5cbiAgICBsZXQgZGl2U3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdlN0b3J5LnNldEF0dHJpYnV0ZShcImlkXCIsXCJzdG9yeVwiKTtcbiAgICBkaXZTdG9yeS5jbGFzc0xpc3QuYWRkKFwicGxhY2Utc2VsZi1lbmRcIik7XG4gICAgZGl2U3RvcnkudGV4dENvbnRlbnQgPVxuICAgICAgXCJOZW1vIGVuaW0gaXBzYW0gdm9sdXB0YXRlbSwgcXVpYSB2b2x1cHRhcyBzaXQsIGFzcGVybmF0dXIgYXV0IG9kaXQgYXV0IGZ1Z2l0LCBzZWQgcXVpYSBjb25zZXF1dW50dXIgbWFnbmkgZG9sb3JlcyBlb3MsIHF1aSByYXRpb25lIHZvbHVwdGF0ZW0gc2VxdWkgbmVzY2l1bnQsIG5lcXVlIHBvcnJvIHF1aXNxdWFtIGVzdCwgcXVpIGRvbG9yZW0gaXBzdW0sIHF1aWEgZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyLCBhZGlwaXNjaVtuZ10gdmVsaXQsIHNlZCBxdWlhIG5vbiBudW1xdWFtIFtkb10gZWl1cyBtb2RpIHRlbXBvcmEgaW5jaVtkaV1kdW50LCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hbSBhbGlxdWFtIHF1YWVyYXQgdm9sdXB0YXRlbS4gVXQgZW5pbSBhZCBtaW5pbWEgdmVuaWFtLCBxdWlzIG5vc3RydW0gZXhlcmNpdGF0aW9uZW0gdWxsYW0gY29ycG9yaXMgc3VzY2lwaXQgbGFib3Jpb3NhbSwgbmlzaSB1dCBhbGlxdWlkIGV4IGVhIGNvbW1vZGkgY29uc2VxdWF0dXI/IFF1aXMgYXV0ZW0gdmVsIGV1bSBpdXJlIHJlcHJlaGVuZGVyaXQsIHF1aSBpbiBlYSB2b2x1cHRhdGUgdmVsaXQgZXNzZSwgcXVhbSBuaWhpbCBtb2xlc3RpYWUgY29uc2VxdWF0dXIsIHZlbCBpbGx1bSwgcXVpIGRvbG9yZW0gZXVtIGZ1Z2lhdCwgcXVvIHZvbHVwdGFzIG51bGxhIHBhcmlhdHVyP1wiO1xuICAgIGRpdldpZHRoMi5hcHBlbmRDaGlsZChkaXZTdG9yeSk7XG5cbiAgICAvLyBBRERSRVNTIENPTlRBQ1RcblxuICAgIGxldCBkaXZBZGRyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlKFwiZGl2XCIpO1xuICAgIGRpdkFkZHJlc3NDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRyZXNzXCIpO1xuICAgIGRpdkFkZHJlc3NDb250YWluZXIudGV4dENvbnRlbnQgPSBcImVtaWFzZFwiXG4gICAgZGl2V2lkdGgyLmFwcGVuZENoaWxkKGRpdkFkZHJlc3NDb250YWluZXIpXG4gIH07XG5cbiAgbGV0IGNhY2hlTmF2ID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdlwiKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbmRlcixcbiAgICBjYWNoZU5hdixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGNvbnRhY3RVcyB9O1xuIiwibGV0IGhvbWVwYWdlID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBkaXZDb250ZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgLy8gTUFJTiBDT05URU5UXG5cbiAgICBsZXQgZGl2SG9tZXBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkhvbWVwYWdlLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIsIFwiaC1zY3JlZW5cIiwgXCJmb250LXNhbnNcIik7XG4gICAgZGl2SG9tZXBhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lcGFnZVwiKTtcblxuICAgIGxldCBkaXZHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZHcmlkLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIsIFwiZ3JpZC1jb2xzLTJcIiwgXCJoLWZ1bGxcIik7XG5cbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGRpdkhvbWVwYWdlKTtcbiAgICBkaXZIb21lcGFnZS5hcHBlbmRDaGlsZChkaXZHcmlkKTtcblxuICAgIC8vIExFRlQgR1JJRFxuXG4gICAgbGV0IGRpdkxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkxlZnQuY2xhc3NMaXN0LmFkZChcbiAgICAgIFwibGVmdFwiLFxuICAgICAgXCJncmlkXCIsXG4gICAgICBcImdyaWQtY29scy0xXCIsXG4gICAgICBcImdyaWQtY3VzdG9tLTFcIixcbiAgICAgIFwiYmctYW1iZXItNTBcIlxuICAgICk7XG4gICAgZGl2R3JpZC5hcHBlbmRDaGlsZChkaXZMZWZ0KTtcblxuICAgIGxldCBkaXZJbm5lckdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdklubmVyR3JpZC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiLCBcImdhcC0xMFwiLCBcImp1c3RpZnktaXRlbXMtY2VudGVyXCIpO1xuICAgIGRpdkxlZnQuYXBwZW5kQ2hpbGQoZGl2SW5uZXJHcmlkKTtcblxuICAgIGxldCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2VGl0bGUuY2xhc3NMaXN0LmFkZChcInRleHQteGxcIik7XG4gICAgZGl2VGl0bGUudGV4dENvbnRlbnQgPSBcIkVBVC5jb21cIjtcbiAgICBkaXZJbm5lckdyaWQuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuXG4gICAgbGV0IGRpdkJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2QmFubmVyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXhsXCIpO1xuICAgIGRpdkJhbm5lci50ZXh0Q29udGVudCA9IFwiRWF0IHdpdGggdXNcIjtcbiAgICBkaXZJbm5lckdyaWQuYXBwZW5kQ2hpbGQoZGl2QmFubmVyKTtcblxuICAgIGxldCBidXR0b25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b25NZW51LnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGJ1dHRvbk1lbnUuY2xhc3NMaXN0LmFkZChcbiAgICAgIFwidGV4dC14bFwiLFxuICAgICAgXCJ0ZXh0LWdyYXktOTAwXCIsXG4gICAgICBcImJnLXdoaXRlXCIsXG4gICAgICBcImJvcmRlclwiLFxuICAgICAgXCJib3JkZXItZ3JheS0zMDBcIixcbiAgICAgIFwiZm9jdXM6b3V0bGluZS1ub25lXCIsXG4gICAgICBcImhvdmVyOmJnLWdyYXktMTAwXCIsXG4gICAgICBcImZvY3VzOnJpbmctNFwiLFxuICAgICAgXCJmb2N1czpyaW5nLWdyYXktMjAwXCIsXG4gICAgICBcImZvbnQtbWVkaXVtXCIsXG4gICAgICBcInJvdW5kZWQtbGdcIixcbiAgICAgIFwidGV4dC1zbVwiLFxuICAgICAgXCJweC01XCIsXG4gICAgICBcInB5LTIuNVwiLFxuICAgICAgXCJkYXJrOmJnLWdyYXktODAwXCIsXG4gICAgICBcImRhcms6dGV4dC13aGl0ZVwiLFxuICAgICAgXCJkYXJrOmJvcmRlci1ncmF5LTYwMFwiLFxuICAgICAgXCJkYXJrOmhvdmVyOmJnLWdyYXktNzAwXCIsXG4gICAgICBcImRhcms6aG92ZXI6Ym9yZGVyLWdyYXktNjAwXCIsXG4gICAgICBcImRhcms6Zm9jdXM6cmluZy1ncmF5LTcwMFwiXG4gICAgKTtcbiAgICBidXR0b25NZW51LmlubmVyVGV4dCA9IFwiRGlzY292ZXIgb3VyIG1lbnVcIjtcbiAgICBkaXZJbm5lckdyaWQuYXBwZW5kQ2hpbGQoYnV0dG9uTWVudSk7XG5cbiAgICBsZXQgZGl2Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZGb290ZXIuaW5uZXJUZXh0ID0gXCJGb290ZXJcIjtcbiAgICBkaXZMZWZ0LmFwcGVuZENoaWxkKGRpdkZvb3Rlcik7XG5cbiAgICAvLyBSSUdIVCBHUklEXG5cbiAgICBsZXQgZGl2UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdlJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiLCBcImgtZnVsbFwiLCBcInNoYWRvdy0yeGxcIik7XG4gICAgZGl2R3JpZC5hcHBlbmRDaGlsZChkaXZSaWdodCk7XG5cbiAgICBsZXQgZGl2TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZOYXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXZcIik7XG4gICAgZGl2TmF2LmNsYXNzTGlzdC5hZGQoXCJweC01XCIsIFwicHktM1wiLCBcImRyb3Atc2hhZG93LWxnXCIpO1xuICAgIGRpdlJpZ2h0LmFwcGVuZENoaWxkKGRpdk5hdik7XG5cbiAgICBsZXQgZGl2RmxleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2RmxleC5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJmbGV4XCIsXG4gICAgICBcImp1c3RpZnktY2VudGVyXCIsXG4gICAgICBcInctZnVsbFwiLFxuICAgICAgXCJnYXAtN1wiLFxuICAgICAgXCJiZy1hbWJlci01MFwiLFxuICAgICAgXCJweS0yXCIsXG4gICAgICBcIm5hdmlcIlxuICAgICk7XG4gICAgZGl2TmF2LmFwcGVuZENoaWxkKGRpdkZsZXgpO1xuXG4gICAgbGV0IGJ1dHRvbk5hdkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbk5hdkhvbWUuY2xhc3NMaXN0LmFkZChcInRleHQteGxcIik7XG4gICAgYnV0dG9uTmF2SG9tZS5pbm5lclRleHQgPSBcIkhvbWVcIjtcbiAgICBkaXZGbGV4LmFwcGVuZENoaWxkKGJ1dHRvbk5hdkhvbWUpO1xuXG4gICAgbGV0IGJ1dHRvbk5hdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbk5hdk1lbnUuY2xhc3NMaXN0LmFkZChcInRleHQteGxcIik7XG4gICAgYnV0dG9uTmF2TWVudS5pbm5lclRleHQgPSBcIk1lbnVcIjtcbiAgICBkaXZGbGV4LmFwcGVuZENoaWxkKGJ1dHRvbk5hdk1lbnUpO1xuXG4gICAgbGV0IGJ1dHRvbk5hdkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbk5hdkNvbnRhY3QuY2xhc3NMaXN0LmFkZChcInRleHQteGxcIik7XG4gICAgYnV0dG9uTmF2Q29udGFjdC5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcbiAgICBkaXZGbGV4LmFwcGVuZENoaWxkKGJ1dHRvbk5hdkNvbnRhY3QpO1xuXG4gICAgbGV0IGRpdkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZJbWFnZS5jbGFzc0xpc3QuYWRkKFwiaW1hZ2UtYmFja2dyb3VuZFwiKTtcbiAgICBkaXZSaWdodC5hcHBlbmRDaGlsZChkaXZJbWFnZSk7XG5cbiAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW1hZ2UtY3VzdG9tXCIpO1xuICAgIGltYWdlLnNyYyA9IFwiaW1hZ2UtMi5qcGdcIjtcbiAgICBkaXZJbWFnZS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIH07XG5cbiAgbGV0IGNhY2hlTmF2ID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdlwiKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbmRlcixcbiAgICBjYWNoZU5hdixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGhvbWVwYWdlIH07XG4iLCJsZXQgbWVudSA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgZGl2Q29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIC8vIE1BSU4gQ09OVEVOVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgbGV0IGRpdkhvbWVwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZIb21lcGFnZS5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiLCBcImgtc2NyZWVuXCIsIFwiZm9udC1zYW5zXCIpO1xuICAgIGRpdkhvbWVwYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZXBhZ2VcIik7XG5cbiAgICBsZXQgZGl2R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2R3JpZC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiLCBcImdyaWQtY29scy0xXCIpO1xuXG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChkaXZIb21lcGFnZSk7XG4gICAgZGl2SG9tZXBhZ2UuYXBwZW5kQ2hpbGQoZGl2R3JpZCk7XG5cbiAgICAvLyBOQVYgTUVOVSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGxldCBkaXZOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdk5hdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdjJcIik7XG4gICAgZGl2TmF2LmNsYXNzTGlzdC5hZGQoXCJweC01XCIsIFwicHktM1wiLCBcImRyb3Atc2hhZG93LWxnXCIpO1xuICAgIGRpdkdyaWQuYXBwZW5kQ2hpbGQoZGl2TmF2KTtcblxuICAgIGxldCBkaXZGbGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZGbGV4LmNsYXNzTGlzdC5hZGQoXG4gICAgICBcImZsZXhcIixcbiAgICAgIFwianVzdGlmeS1jZW50ZXJcIixcbiAgICAgIFwidy1mdWxsXCIsXG4gICAgICBcImdhcC03XCIsXG4gICAgICBcImJnLWFtYmVyLTUwXCIsXG4gICAgICBcInB5LTJcIixcbiAgICAgIFwibmF2aVwiXG4gICAgKTtcbiAgICBkaXZOYXYuYXBwZW5kQ2hpbGQoZGl2RmxleCk7XG5cbiAgICBsZXQgYnV0dG9uTmF2SG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uTmF2SG9tZS5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKTtcbiAgICBidXR0b25OYXZIb21lLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuICAgIGRpdkZsZXguYXBwZW5kQ2hpbGQoYnV0dG9uTmF2SG9tZSk7XG5cbiAgICBsZXQgYnV0dG9uTmF2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uTmF2TWVudS5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKTtcbiAgICBidXR0b25OYXZNZW51LmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIGRpdkZsZXguYXBwZW5kQ2hpbGQoYnV0dG9uTmF2TWVudSk7XG5cbiAgICBsZXQgYnV0dG9uTmF2Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uTmF2Q29udGFjdC5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKTtcbiAgICBidXR0b25OYXZDb250YWN0LmlubmVyVGV4dCA9IFwiQ29udGFjdFwiO1xuICAgIGRpdkZsZXguYXBwZW5kQ2hpbGQoYnV0dG9uTmF2Q29udGFjdCk7XG5cbiAgICAvLyBXSURUSCBDT05UQUlORVIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgbGV0IGRpdldpZHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZXaWR0aC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRpdi13aWR0aFwiKTtcbiAgICBkaXZXaWR0aC5jbGFzc0xpc3QuYWRkKFwiZHJvcC1zaGFkb3ctbGdcIiwgXCJyb3VuZGVkLWxnXCIsIFwiZ3JpZFwiLCBcImp1c3RpZnktY2VudGVyXCIpXG4gICAgZGl2R3JpZC5hcHBlbmRDaGlsZChkaXZXaWR0aCk7XG5cbiAgICAvLyBNRU5VIENPTlRBSU5FUiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGxldCBkaXZNZW51Q29udGFpbmVyQWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZNZW51Q29udGFpbmVyQWxsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudUNvbnRhaW5lckFsbFwiKTtcbiAgICBkaXZNZW51Q29udGFpbmVyQWxsLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIsIFwianVzdGlmeS1jZW50ZXJcIik7XG4gICAgZGl2V2lkdGguYXBwZW5kQ2hpbGQoZGl2TWVudUNvbnRhaW5lckFsbCk7XG5cbiAgICAvLyBIRVJPIERJVlxuXG4gICAgbGV0IGRpdkhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkhlcm8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZXJvLWNvbnRhaW5lclwiKTtcbiAgICBkaXZIZXJvLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIsIFwianVzdGlmeS1jZW50ZXJcIik7XG4gICAgZGl2TWVudUNvbnRhaW5lckFsbC5hcHBlbmRDaGlsZChkaXZIZXJvKTtcblxuICAgIGxldCB0ZXh0SGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRleHRIZXJvLnRleHRDb250ZW50ID0gXCJEaXNjb3ZlclwiO1xuICAgIHRleHRIZXJvLmNsYXNzTGlzdC5hZGQoXCJoZXJvLXNtYWxsXCIpO1xuICAgIGRpdkhlcm8uYXBwZW5kQ2hpbGQodGV4dEhlcm8pO1xuXG4gICAgbGV0IHRleHRIZXJvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRleHRIZXJvMi50ZXh0Q29udGVudCA9IFwiT3VyIGZvb2QgbWVudVwiO1xuICAgIHRleHRIZXJvMi5jbGFzc0xpc3QuYWRkKFwiaGVyby1iaWdcIik7XG4gICAgZGl2SGVyby5hcHBlbmRDaGlsZCh0ZXh0SGVybzIpO1xuXG4gICAgLy8gUExBVEUgQ09OVEFJTkVSIEFMTFxuXG4gICAgbGV0IG1lbnVFbnRyeVBsYXRlQWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51RW50cnlQbGF0ZUFsbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXRlQWxsXCIpO1xuICAgIG1lbnVFbnRyeVBsYXRlQWxsLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIsIFwiZ3JpZC1jb2xzLTJcIik7XG4gICAgZGl2TWVudUNvbnRhaW5lckFsbC5hcHBlbmRDaGlsZChtZW51RW50cnlQbGF0ZUFsbCk7XG5cbiAgICAvLyBNRU5VIEVOVFJZIE9ORVxuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVDYXRlZ29yeTEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51LUNhdGVnb3J5LTFcIik7XG4gICAgbWVudUVudHJ5UGxhdGVBbGwuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5MSk7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5MVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG1lbnVDYXRlZ29yeTFUaXRsZS50ZXh0Q29udGVudCA9IFwiQXBldGl6ZXJzXCI7XG4gICAgbWVudUNhdGVnb3J5MVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXhsXCIpO1xuICAgIG1lbnVDYXRlZ29yeTEuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5MVRpdGxlKTtcblxuICAgIGxldCBtZW51Q2F0ZWdvcnkxUGxhdGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIG1lbnVDYXRlZ29yeTFQbGF0ZTEudGV4dENvbnRlbnQgPSBcIkNsYW0gc2hpcHNcIjtcbiAgICBtZW51Q2F0ZWdvcnkxLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTFQbGF0ZTEpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTFQbGF0ZTFDb250ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWVudUNhdGVnb3J5MVBsYXRlMUNvbnRleHQuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIilcbiAgICBtZW51Q2F0ZWdvcnkxUGxhdGUxQ29udGV4dC50ZXh0Q29udGVudCA9XG4gICAgICBcIk5ldyBlbmdsYW5kIHN0eWxlLCB3aXRoIGhvdXNlIG1hZGUgc2F1Y2VcIjtcbiAgICBtZW51Q2F0ZWdvcnkxLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTFQbGF0ZTFDb250ZXh0KTtcblxuICAgIGxldCBtZW51Q2F0ZWdvcnkxUGxhdGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIG1lbnVDYXRlZ29yeTFQbGF0ZTIudGV4dENvbnRlbnQgPSBcIkdyaWxsZWQgQnJ1c2NoZXR0YVwiO1xuICAgIG1lbnVDYXRlZ29yeTEuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5MVBsYXRlMik7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5MVBsYXRlMkNvbnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZW51Q2F0ZWdvcnkxUGxhdGUyQ29udGV4dC5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKVxuICAgIG1lbnVDYXRlZ29yeTFQbGF0ZTJDb250ZXh0LnRleHRDb250ZW50ID1cbiAgICAgIFwiV2hpdGUgYmVhbnMsIHJvYXN0ZWQgZ2FybGljLCBwcm9zY2l1dHRvXCI7XG4gICAgbWVudUNhdGVnb3J5MS5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnkxUGxhdGUyQ29udGV4dCk7XG5cbiAgICAvLyBNRU5VIEVOVFJZIFRXT1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVDYXRlZ29yeTIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51LUNhdGVnb3J5LTJcIik7XG4gICAgbWVudUVudHJ5UGxhdGVBbGwuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5Mik7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5MlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG1lbnVDYXRlZ29yeTJUaXRsZS50ZXh0Q29udGVudCA9IFwiQnVyZ2VyICYgU2FuZHdpY2hlc1wiO1xuICAgIG1lbnVDYXRlZ29yeTJUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKTtcbiAgICBtZW51Q2F0ZWdvcnkyLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTJUaXRsZSk7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5MlBsYXRlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtZW51Q2F0ZWdvcnkyUGxhdGUxLnRleHRDb250ZW50ID0gXCJWZWdnaWUgQnVyZ2VyXCI7XG4gICAgbWVudUNhdGVnb3J5Mi5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnkyUGxhdGUxKTtcblxuICAgIGxldCBtZW51Q2F0ZWdvcnkyUGxhdGUxQ29udGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVDYXRlZ29yeTJQbGF0ZTFDb250ZXh0LmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpXG4gICAgbWVudUNhdGVnb3J5MlBsYXRlMUNvbnRleHQudGV4dENvbnRlbnQgPVxuICAgICAgXCJNYWRlIHdpdGggYnJvd24gcmljZSwgYmxhY2sgYmVlciwgb2F0cyBhbmQgbW9sb3NzZXMsIHdpdGggbGV0dHVjZSwgdG9tYXRvLCBvbmlvbiwgcGlja2xlIGFuZCBzYXVjZVwiO1xuICAgIG1lbnVDYXRlZ29yeTIuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5MlBsYXRlMUNvbnRleHQpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTJQbGF0ZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbWVudUNhdGVnb3J5MlBsYXRlMi50ZXh0Q29udGVudCA9IFwiU21va2VkIFR1cmtleSBQYW5pbmlcIjtcbiAgICBtZW51Q2F0ZWdvcnkyLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTJQbGF0ZTIpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTJQbGF0ZTJDb250ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWVudUNhdGVnb3J5MlBsYXRlMkNvbnRleHQuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIilcbiAgICBtZW51Q2F0ZWdvcnkyUGxhdGUyQ29udGV4dC50ZXh0Q29udGVudCA9XG4gICAgICBcIkRlbGljYXRlIHR1cm5pbmcgYnJlYXN0LCBjcmlzcHkgYmFjb24sIG1pbGQgY2hlZGRhciBjaGVlc2UsIHZpbmUgcmlwZW5lZCB0b21hdG9lcywgY3JlYW15IG1heW8gb24gY2lhYmF0dGEgYnJlYWRcIjtcbiAgICBtZW51Q2F0ZWdvcnkyLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTJQbGF0ZTJDb250ZXh0KTtcblxuICAgIC8vIE1FTlUgRU5UUlkgVEhSRUVcblxuICAgIGxldCBtZW51Q2F0ZWdvcnkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51Q2F0ZWdvcnkzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudS1DYXRlZ29yeS0zXCIpO1xuICAgIG1lbnVFbnRyeVBsYXRlQWxsLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTMpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBtZW51Q2F0ZWdvcnkzVGl0bGUudGV4dENvbnRlbnQgPSBcIlBsYXRlc1wiO1xuICAgIG1lbnVDYXRlZ29yeTNUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKTtcbiAgICBtZW51Q2F0ZWdvcnkzLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTNUaXRsZSk7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5M1BsYXRlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtZW51Q2F0ZWdvcnkzUGxhdGUxLnRleHRDb250ZW50ID0gXCJTZWFmb29kIGFsZnJlZG9cIjtcbiAgICBtZW51Q2F0ZWdvcnkzLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTNQbGF0ZTEpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTNQbGF0ZTFDb250ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWVudUNhdGVnb3J5M1BsYXRlMUNvbnRleHQuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIilcbiAgICBtZW51Q2F0ZWdvcnkzUGxhdGUxQ29udGV4dC50ZXh0Q29udGVudCA9XG4gICAgICBcIlBhc3RhIHNocmltcCBhbmQgY3JhYiBpbiBhIGNyZWFteSBhbGZyZWRvIHNhdWNlXCI7XG4gICAgbWVudUNhdGVnb3J5My5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnkzUGxhdGUxQ29udGV4dCk7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5M1BsYXRlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtZW51Q2F0ZWdvcnkzUGxhdGUyLnRleHRDb250ZW50ID0gXCJIZXJiIHJvYXN0ZWQgaGFsZiBjaGlja2VuXCI7XG4gICAgbWVudUNhdGVnb3J5My5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnkzUGxhdGUyKTtcblxuICAgIGxldCBtZW51Q2F0ZWdvcnkzUGxhdGUyQ29udGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVDYXRlZ29yeTNQbGF0ZTJDb250ZXh0LmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpXG4gICAgbWVudUNhdGVnb3J5M1BsYXRlMkNvbnRleHQudGV4dENvbnRlbnQgPVxuICAgICAgXCJPcmVnb24gcmFpc2VkIGNoaWNrZW4gd2l0aCBvdXIgdmVnZXRhYmxlIHJpc290dG8gY2FrZVwiO1xuICAgIG1lbnVDYXRlZ29yeTMuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5M1BsYXRlMkNvbnRleHQpO1xuXG4gICAgLy8gTUVOVSBFTlRSWSBGT1VSXG5cbiAgICBsZXQgbWVudUNhdGVnb3J5NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUNhdGVnb3J5NC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnUtQ2F0ZWdvcnktNFwiKTtcbiAgICBtZW51RW50cnlQbGF0ZUFsbC5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnk0KTtcblxuICAgIGxldCBtZW51Q2F0ZWdvcnk0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbWVudUNhdGVnb3J5NFRpdGxlLnRleHRDb250ZW50ID0gXCJEZXNlcnRzXCI7XG4gICAgbWVudUNhdGVnb3J5NFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXhsXCIpO1xuICAgIG1lbnVDYXRlZ29yeTQuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5NFRpdGxlKTtcblxuICAgIGxldCBtZW51Q2F0ZWdvcnk0UGxhdGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIG1lbnVDYXRlZ29yeTRQbGF0ZTEudGV4dENvbnRlbnQgPSBcIllvZ3VydFwiO1xuICAgIG1lbnVDYXRlZ29yeTQuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5NFBsYXRlMSk7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5NFBsYXRlMUNvbnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZW51Q2F0ZWdvcnk0UGxhdGUxQ29udGV4dC5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKVxuICAgIG1lbnVDYXRlZ29yeTRQbGF0ZTFDb250ZXh0LnRleHRDb250ZW50ID0gXCJXaXRoIGZyZXNoIGJlcnJpZXNcIjtcbiAgICBtZW51Q2F0ZWdvcnk0LmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTRQbGF0ZTFDb250ZXh0KTtcblxuICAgIGxldCBtZW51Q2F0ZWdvcnk0UGxhdGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIG1lbnVDYXRlZ29yeTRQbGF0ZTIudGV4dENvbnRlbnQgPSBcIkNhcnJvdCBjYWtlXCI7XG4gICAgbWVudUNhdGVnb3J5NC5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnk0UGxhdGUyKTtcblxuICAgIGxldCBtZW51Q2F0ZWdvcnk0UGxhdGUyQ29udGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVDYXRlZ29yeTRQbGF0ZTJDb250ZXh0LmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpXG4gICAgbWVudUNhdGVnb3J5NFBsYXRlMkNvbnRleHQudGV4dENvbnRlbnQgPVxuICAgICAgXCJNYWRlIHdpdGggY2Fycm90LCBwaW5lYXBwbGUsIGNvY29udXRzLCBhbmQgcmFpc2lucywgd2l0aCBjcmVhbSBjaGVlc2UgZnJvc3RpbmdcIjtcbiAgICBtZW51Q2F0ZWdvcnk0LmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTRQbGF0ZTJDb250ZXh0KTtcbiAgfTtcblxuICBsZXQgY2FjaGVOYXYgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2XCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyLFxuICAgIGNhY2hlTmF2LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgbWVudSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBob21lcGFnZSB9IGZyb20gXCIuL2hvbWVwYWdlXCI7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgY29udGFjdFVzIH0gZnJvbSBcIi4vY29udGFjdFVzXCI7XG5cbndpbmRvdy5ob21lcGFnZSA9IGhvbWVwYWdlXG53aW5kb3cubWVudSA9IG1lbnVcbndpbmRvdy5jb250YWN0VXMgPSBjb250YWN0VXNcblxuLy8gaG9tZXBhZ2UucmVuZGVyKClcbmNvbnRhY3RVcy5yZW5kZXIoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==