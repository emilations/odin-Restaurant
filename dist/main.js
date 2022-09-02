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
let contactUs = function () {

  let render = function () {
    let divContent = document.querySelector("#content");
    divContent.replaceChildren();


    // MAIN CONTENT

    let divHomepage = document.createElement("div");
    divHomepage.classList.add("content", "h-screen", "font-sans")
    divHomepage.setAttribute("id", "homepage");

    let divGrid = document.createElement("div");
    divGrid.classList.add("grid", "grid-cols-2", "h-full")

    divContent.appendChild(divHomepage)
    divHomepage.appendChild(divGrid)

    // LEFT GRID

    let divLeft = document.createElement("div");
    divLeft.classList.add("left", "grid", "grid-cols-1", "grid-custom-1", "bg-amber-50")

    let divInnerGrid = document.createElement("div");
    divInnerGrid.classList.add("grid", "gap-10", "justify-items-center")

    let divTitle = document.createElement("div");
    divTitle.classList.add("text-xl")

    divTitle.textContent = "EAT.com";

    let divBanner = document.createElement("div");
    divBanner.classList.add("text-xl")
    divBanner.textContent = "Eat with us";

    let buttonMenu = document.createElement("button");
    buttonMenu.type = "button";
    buttonMenu.classList.add("text-xl", "text-gray-900", "bg-white", "border", "border-gray-300", "focus:outline-none", "hover:bg-gray-100", "focus:ring-4", "focus:ring-gray-200", "font-medium", "rounded-lg", "text-sm", "px-5", "py-2.5", "dark:bg-gray-800", "dark:text-white", "dark:border-gray-600", "dark:hover:bg-gray-700", "dark:hover:border-gray-600", "dark:focus:ring-gray-700")
    buttonMenu.innerText = "Contact Us page";

    let divFooter = document.createElement("div");
    divFooter.innerText = "Footer";

    divGrid.appendChild(divLeft)
    divLeft.appendChild(divInnerGrid)
    divLeft.appendChild(divFooter)
    divInnerGrid.appendChild(divTitle)
    divInnerGrid.appendChild(divBanner)
    divInnerGrid.appendChild(buttonMenu)

    // RIGHT GRID

    let divRight = document.createElement("div");
    divRight.classList.add("right", "h-full", "shadow-2xl");

    let divNav = document.createElement("div");
    divNav.setAttribute("id", "nav");
    divNav.classList.add("px-5", "py-3", "drop-shadow-lg");
 
    let divFlex = document.createElement("div");
    divFlex.classList.add("flex", "justify-center", "w-full", "gap-7", "bg-amber-50", "py-2", "navi")

    let buttonNavHome = document.createElement("button");
    buttonNavHome.classList.add("text-xl");
    buttonNavHome.innerText = "Home";
    let buttonNavMenu = document.createElement("button");
    buttonNavMenu.classList.add("text-xl");
    buttonNavMenu.innerText = "Menu";
    let buttonNavContact = document.createElement("button");
    buttonNavContact.classList.add("text-xl");
    buttonNavContact.innerText = "Contact";

    let divImage = document.createElement("div");
    divImage.classList.add("image-background");

    let image = document.createElement("img");
    image.setAttribute("id", "image-custom")
    image.src = "image-2.jpg";

    divGrid.appendChild(divRight)
    divRight.appendChild(divNav)
    divNav.appendChild(divFlex)

    divFlex.appendChild(buttonNavHome)
    divFlex.appendChild(buttonNavMenu)
    divFlex.appendChild(buttonNavContact)

    divRight.appendChild(divImage)
    divImage.appendChild(image)
  };

  let cacheNav = function () {
    document.addEventListener("DOMContentLoaded", function () {
      let nav = document.querySelectorAll(".nav");
    });
  };

  return {
    render,
    cacheNav
  }
}();



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
    divWidth.setAttribute("id", "div-width")
    divGrid.appendChild(divWidth);
    
    // MENU CONTAINER ---------------------------------------------------------

    let divMenuContainerAll = document.createElement("div");
    divMenuContainerAll.setAttribute("id", "menuContainerAll");
    divMenuContainerAll.classList.add("grid", "justify-center");
    divWidth.appendChild(divMenuContainerAll);

    // HERO DIV

    let divHero = document.createElement("div");
    divHero.setAttribute("id", "Hero-container");
    divHero.classList.add("grid", "justify-center");
    divMenuContainerAll.appendChild(divHero);

    let textHero = document.createElement("h2");
    textHero.textContent = "Discover";
    divHero.appendChild(textHero);

    let textHero2 = document.createElement("h1");
    textHero2.textContent = "Our menu";
    divHero.appendChild(textHero2);

    // PLATE CONTAINER ALL
    
    let menuEntryPlateAll = document.createElement("div");
    menuEntryPlateAll.setAttribute("id","PlateAll");
    menuEntryPlateAll.classList.add("grid", "grid-cols-2", "gap-1");
    divMenuContainerAll.appendChild(menuEntryPlateAll);

    // MENU ENTRY ONE
    
    let menuCategory1 = document.createElement("div");
    menuCategory1.setAttribute("id","menu-Category-1")
    menuEntryPlateAll.appendChild(menuCategory1);

    let menuCategory1Title = document.createElement("h1");
    menuCategory1Title.textContent = "Apetizers";
    menuCategory1.appendChild(menuCategory1Title);

    let menuCategory1Plate1 = document.createElement("h2");
    menuCategory1Plate1.textContent = "Clam ships";
    menuCategory1.appendChild(menuCategory1Plate1);

    let menuCategory1Plate1Context = document.createElement("p");
    menuCategory1Plate1Context.textContent = "New england style, with house made sauce";
    menuCategory1.appendChild(menuCategory1Plate1Context);

    let menuCategory1Plate2 = document.createElement("h2");
    menuCategory1Plate2.textContent = "Grilled Bruschetta";
    menuCategory1.appendChild(menuCategory1Plate2);

    let menuCategory1Plate2Context = document.createElement("p");
    menuCategory1Plate2Context.textContent = "White beans, roasted garlic, prosciutto";
    menuCategory1.appendChild(menuCategory1Plate2Context);

    // MENU ENTRY TWO
    let menuCategory2 = document.createElement("div");
    menuCategory2.setAttribute("id","menu-Category-2")
    menuEntryPlateAll.appendChild(menuCategory2);

    let menuCategory2Title = document.createElement("h1");
    menuCategory2Title.textContent = "Burger";
    menuCategory2.appendChild(menuCategory2Title);

    let menuCategory2Plate1 = document.createElement("h2");
    menuCategory2Plate1.textContent = "Veggie Burger";
    menuCategory2.appendChild(menuCategory2Plate1);

    let menuCategory2Plate1Context = document.createElement("p");
    menuCategory2Plate1Context.textContent = "Made with brown rice, black beer, oats and molosses, with lettuce, tomato, onion, pickle and sauce";
    menuCategory2.appendChild(menuCategory2Plate1Context);

    let menuCategory2Plate2 = document.createElement("h2");
    menuCategory2Plate2.textContent = "Smoked Turkey Panini";
    menuCategory2.appendChild(menuCategory2Plate2);

    let menuCategory2Plate2Context = document.createElement("p");
    menuCategory2Plate2Context.textContent = "Delicate turning breast, crispy bacon, mild cheddar cheese, vine ripened tomatoes, creamy mayo on ciabatta bread";
    menuCategory2.appendChild(menuCategory2Plate2Context);

    // MENU ENTRY THREE
    let menuCategory3 = document.createElement("div");
    menuCategory3.setAttribute("id","menu-Category-3")
    menuEntryPlateAll.appendChild(menuCategory3);

    let menuCategory3Title = document.createElement("h1");
    menuCategory3Title.textContent = "Plates";
    menuCategory3.appendChild(menuCategory3Title);

    let menuCategory3Plate1 = document.createElement("h2");
    menuCategory3Plate1.textContent = "Seafood alfredo";
    menuCategory3.appendChild(menuCategory3Plate1);

    let menuCategory3Plate1Context = document.createElement("p");
    menuCategory3Plate1Context.textContent = "Pasta shrimp and crab in a creamy alfredo sauce";
    menuCategory3.appendChild(menuCategory3Plate1Context);

    let menuCategory3Plate2 = document.createElement("h2");
    menuCategory3Plate2.textContent = "Herb roasted half chicken";
    menuCategory3.appendChild(menuCategory3Plate2);

    let menuCategory3Plate2Context = document.createElement("p");
    menuCategory3Plate2Context.textContent = "Oregon raised chicken with our vegetable risotto cake";
    menuCategory3.appendChild(menuCategory3Plate2Context);

    // MENU ENTRY FOUR
    let menuCategory4 = document.createElement("div");
    menuCategory4.setAttribute("id","menu-Category-4")
    menuEntryPlateAll.appendChild(menuCategory4);

    let menuCategory4Title = document.createElement("h1");
    menuCategory4Title.textContent = "Deserts";
    menuCategory4.appendChild(menuCategory4Title);

    let menuCategory4Plate1 = document.createElement("h2");
    menuCategory4Plate1.textContent = "Yogurt";
    menuCategory4.appendChild(menuCategory3Plate1);

    let menuCategory4Plate1Context = document.createElement("p");
    menuCategory4Plate1Context.textContent = "With fresh berries";
    menuCategory4.appendChild(menuCategory4Plate1Context);

    let menuCategory4Plate2 = document.createElement("h2");
    menuCategory4Plate2.textContent = "Carrot cake";
    menuCategory4.appendChild(menuCategory4Plate2);

    let menuCategory4Plate2Context = document.createElement("p");
    menuCategory4Plate2Context.textContent = "Made with carrot, pineapple, coconuts, and raising, with cream cheese frosting";
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
_menu__WEBPACK_IMPORTED_MODULE_1__.menu.render()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7QUN0SXBCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VDdE1EO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNSO0FBQ1U7O0FBRXhDLGtCQUFrQiwrQ0FBUTtBQUMxQixjQUFjLHVDQUFJO0FBQ2xCLG1CQUFtQixpREFBUzs7QUFFNUI7QUFDQSw4Q0FBVyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3RVcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBjb250YWN0VXMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgbGV0IHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBkaXZDb250ZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuXG5cbiAgICAvLyBNQUlOIENPTlRFTlRcblxuICAgIGxldCBkaXZIb21lcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2SG9tZXBhZ2UuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIiwgXCJoLXNjcmVlblwiLCBcImZvbnQtc2Fuc1wiKVxuICAgIGRpdkhvbWVwYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZXBhZ2VcIik7XG5cbiAgICBsZXQgZGl2R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2R3JpZC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiLCBcImdyaWQtY29scy0yXCIsIFwiaC1mdWxsXCIpXG5cbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGRpdkhvbWVwYWdlKVxuICAgIGRpdkhvbWVwYWdlLmFwcGVuZENoaWxkKGRpdkdyaWQpXG5cbiAgICAvLyBMRUZUIEdSSURcblxuICAgIGxldCBkaXZMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZMZWZ0LmNsYXNzTGlzdC5hZGQoXCJsZWZ0XCIsIFwiZ3JpZFwiLCBcImdyaWQtY29scy0xXCIsIFwiZ3JpZC1jdXN0b20tMVwiLCBcImJnLWFtYmVyLTUwXCIpXG5cbiAgICBsZXQgZGl2SW5uZXJHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZJbm5lckdyaWQuY2xhc3NMaXN0LmFkZChcImdyaWRcIiwgXCJnYXAtMTBcIiwgXCJqdXN0aWZ5LWl0ZW1zLWNlbnRlclwiKVxuXG4gICAgbGV0IGRpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKVxuXG4gICAgZGl2VGl0bGUudGV4dENvbnRlbnQgPSBcIkVBVC5jb21cIjtcblxuICAgIGxldCBkaXZCYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkJhbm5lci5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKVxuICAgIGRpdkJhbm5lci50ZXh0Q29udGVudCA9IFwiRWF0IHdpdGggdXNcIjtcblxuICAgIGxldCBidXR0b25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b25NZW51LnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGJ1dHRvbk1lbnUuY2xhc3NMaXN0LmFkZChcInRleHQteGxcIiwgXCJ0ZXh0LWdyYXktOTAwXCIsIFwiYmctd2hpdGVcIiwgXCJib3JkZXJcIiwgXCJib3JkZXItZ3JheS0zMDBcIiwgXCJmb2N1czpvdXRsaW5lLW5vbmVcIiwgXCJob3ZlcjpiZy1ncmF5LTEwMFwiLCBcImZvY3VzOnJpbmctNFwiLCBcImZvY3VzOnJpbmctZ3JheS0yMDBcIiwgXCJmb250LW1lZGl1bVwiLCBcInJvdW5kZWQtbGdcIiwgXCJ0ZXh0LXNtXCIsIFwicHgtNVwiLCBcInB5LTIuNVwiLCBcImRhcms6YmctZ3JheS04MDBcIiwgXCJkYXJrOnRleHQtd2hpdGVcIiwgXCJkYXJrOmJvcmRlci1ncmF5LTYwMFwiLCBcImRhcms6aG92ZXI6YmctZ3JheS03MDBcIiwgXCJkYXJrOmhvdmVyOmJvcmRlci1ncmF5LTYwMFwiLCBcImRhcms6Zm9jdXM6cmluZy1ncmF5LTcwMFwiKVxuICAgIGJ1dHRvbk1lbnUuaW5uZXJUZXh0ID0gXCJDb250YWN0IFVzIHBhZ2VcIjtcblxuICAgIGxldCBkaXZGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkZvb3Rlci5pbm5lclRleHQgPSBcIkZvb3RlclwiO1xuXG4gICAgZGl2R3JpZC5hcHBlbmRDaGlsZChkaXZMZWZ0KVxuICAgIGRpdkxlZnQuYXBwZW5kQ2hpbGQoZGl2SW5uZXJHcmlkKVxuICAgIGRpdkxlZnQuYXBwZW5kQ2hpbGQoZGl2Rm9vdGVyKVxuICAgIGRpdklubmVyR3JpZC5hcHBlbmRDaGlsZChkaXZUaXRsZSlcbiAgICBkaXZJbm5lckdyaWQuYXBwZW5kQ2hpbGQoZGl2QmFubmVyKVxuICAgIGRpdklubmVyR3JpZC5hcHBlbmRDaGlsZChidXR0b25NZW51KVxuXG4gICAgLy8gUklHSFQgR1JJRFxuXG4gICAgbGV0IGRpdlJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZSaWdodC5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIiwgXCJoLWZ1bGxcIiwgXCJzaGFkb3ctMnhsXCIpO1xuXG4gICAgbGV0IGRpdk5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2TmF2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2XCIpO1xuICAgIGRpdk5hdi5jbGFzc0xpc3QuYWRkKFwicHgtNVwiLCBcInB5LTNcIiwgXCJkcm9wLXNoYWRvdy1sZ1wiKTtcbiBcbiAgICBsZXQgZGl2RmxleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2RmxleC5jbGFzc0xpc3QuYWRkKFwiZmxleFwiLCBcImp1c3RpZnktY2VudGVyXCIsIFwidy1mdWxsXCIsIFwiZ2FwLTdcIiwgXCJiZy1hbWJlci01MFwiLCBcInB5LTJcIiwgXCJuYXZpXCIpXG5cbiAgICBsZXQgYnV0dG9uTmF2SG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uTmF2SG9tZS5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKTtcbiAgICBidXR0b25OYXZIb21lLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuICAgIGxldCBidXR0b25OYXZNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b25OYXZNZW51LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXhsXCIpO1xuICAgIGJ1dHRvbk5hdk1lbnUuaW5uZXJUZXh0ID0gXCJNZW51XCI7XG4gICAgbGV0IGJ1dHRvbk5hdkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbk5hdkNvbnRhY3QuY2xhc3NMaXN0LmFkZChcInRleHQteGxcIik7XG4gICAgYnV0dG9uTmF2Q29udGFjdC5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcblxuICAgIGxldCBkaXZJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2SW1hZ2UuY2xhc3NMaXN0LmFkZChcImltYWdlLWJhY2tncm91bmRcIik7XG5cbiAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW1hZ2UtY3VzdG9tXCIpXG4gICAgaW1hZ2Uuc3JjID0gXCJpbWFnZS0yLmpwZ1wiO1xuXG4gICAgZGl2R3JpZC5hcHBlbmRDaGlsZChkaXZSaWdodClcbiAgICBkaXZSaWdodC5hcHBlbmRDaGlsZChkaXZOYXYpXG4gICAgZGl2TmF2LmFwcGVuZENoaWxkKGRpdkZsZXgpXG5cbiAgICBkaXZGbGV4LmFwcGVuZENoaWxkKGJ1dHRvbk5hdkhvbWUpXG4gICAgZGl2RmxleC5hcHBlbmRDaGlsZChidXR0b25OYXZNZW51KVxuICAgIGRpdkZsZXguYXBwZW5kQ2hpbGQoYnV0dG9uTmF2Q29udGFjdClcblxuICAgIGRpdlJpZ2h0LmFwcGVuZENoaWxkKGRpdkltYWdlKVxuICAgIGRpdkltYWdlLmFwcGVuZENoaWxkKGltYWdlKVxuICB9O1xuXG4gIGxldCBjYWNoZU5hdiA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZcIik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXIsXG4gICAgY2FjaGVOYXZcbiAgfVxufSgpO1xuXG5leHBvcnQgeyBjb250YWN0VXMgfTsiLCJsZXQgaG9tZXBhZ2UgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGRpdkNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICAvLyBNQUlOIENPTlRFTlRcblxuICAgIGxldCBkaXZIb21lcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2SG9tZXBhZ2UuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIiwgXCJoLXNjcmVlblwiLCBcImZvbnQtc2Fuc1wiKTtcbiAgICBkaXZIb21lcGFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVwYWdlXCIpO1xuXG4gICAgbGV0IGRpdkdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkdyaWQuY2xhc3NMaXN0LmFkZChcImdyaWRcIiwgXCJncmlkLWNvbHMtMlwiLCBcImgtZnVsbFwiKTtcblxuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2SG9tZXBhZ2UpO1xuICAgIGRpdkhvbWVwYWdlLmFwcGVuZENoaWxkKGRpdkdyaWQpO1xuXG4gICAgLy8gTEVGVCBHUklEXG5cbiAgICBsZXQgZGl2TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2TGVmdC5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJsZWZ0XCIsXG4gICAgICBcImdyaWRcIixcbiAgICAgIFwiZ3JpZC1jb2xzLTFcIixcbiAgICAgIFwiZ3JpZC1jdXN0b20tMVwiLFxuICAgICAgXCJiZy1hbWJlci01MFwiXG4gICAgKTtcbiAgICBkaXZHcmlkLmFwcGVuZENoaWxkKGRpdkxlZnQpO1xuXG4gICAgbGV0IGRpdklubmVyR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2SW5uZXJHcmlkLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIsIFwiZ2FwLTEwXCIsIFwianVzdGlmeS1pdGVtcy1jZW50ZXJcIik7XG4gICAgZGl2TGVmdC5hcHBlbmRDaGlsZChkaXZJbm5lckdyaWQpO1xuXG4gICAgbGV0IGRpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKTtcbiAgICBkaXZUaXRsZS50ZXh0Q29udGVudCA9IFwiRUFULmNvbVwiO1xuICAgIGRpdklubmVyR3JpZC5hcHBlbmRDaGlsZChkaXZUaXRsZSk7XG5cbiAgICBsZXQgZGl2QmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZCYW5uZXIuY2xhc3NMaXN0LmFkZChcInRleHQteGxcIik7XG4gICAgZGl2QmFubmVyLnRleHRDb250ZW50ID0gXCJFYXQgd2l0aCB1c1wiO1xuICAgIGRpdklubmVyR3JpZC5hcHBlbmRDaGlsZChkaXZCYW5uZXIpO1xuXG4gICAgbGV0IGJ1dHRvbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbk1lbnUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgYnV0dG9uTWVudS5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJ0ZXh0LXhsXCIsXG4gICAgICBcInRleHQtZ3JheS05MDBcIixcbiAgICAgIFwiYmctd2hpdGVcIixcbiAgICAgIFwiYm9yZGVyXCIsXG4gICAgICBcImJvcmRlci1ncmF5LTMwMFwiLFxuICAgICAgXCJmb2N1czpvdXRsaW5lLW5vbmVcIixcbiAgICAgIFwiaG92ZXI6YmctZ3JheS0xMDBcIixcbiAgICAgIFwiZm9jdXM6cmluZy00XCIsXG4gICAgICBcImZvY3VzOnJpbmctZ3JheS0yMDBcIixcbiAgICAgIFwiZm9udC1tZWRpdW1cIixcbiAgICAgIFwicm91bmRlZC1sZ1wiLFxuICAgICAgXCJ0ZXh0LXNtXCIsXG4gICAgICBcInB4LTVcIixcbiAgICAgIFwicHktMi41XCIsXG4gICAgICBcImRhcms6YmctZ3JheS04MDBcIixcbiAgICAgIFwiZGFyazp0ZXh0LXdoaXRlXCIsXG4gICAgICBcImRhcms6Ym9yZGVyLWdyYXktNjAwXCIsXG4gICAgICBcImRhcms6aG92ZXI6YmctZ3JheS03MDBcIixcbiAgICAgIFwiZGFyazpob3Zlcjpib3JkZXItZ3JheS02MDBcIixcbiAgICAgIFwiZGFyazpmb2N1czpyaW5nLWdyYXktNzAwXCJcbiAgICApO1xuICAgIGJ1dHRvbk1lbnUuaW5uZXJUZXh0ID0gXCJEaXNjb3ZlciBvdXIgbWVudVwiO1xuICAgIGRpdklubmVyR3JpZC5hcHBlbmRDaGlsZChidXR0b25NZW51KTtcblxuICAgIGxldCBkaXZGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkZvb3Rlci5pbm5lclRleHQgPSBcIkZvb3RlclwiO1xuICAgIGRpdkxlZnQuYXBwZW5kQ2hpbGQoZGl2Rm9vdGVyKTtcblxuICAgIC8vIFJJR0hUIEdSSURcblxuICAgIGxldCBkaXZSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2UmlnaHQuY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIsIFwiaC1mdWxsXCIsIFwic2hhZG93LTJ4bFwiKTtcbiAgICBkaXZHcmlkLmFwcGVuZENoaWxkKGRpdlJpZ2h0KTtcblxuICAgIGxldCBkaXZOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdk5hdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdlwiKTtcbiAgICBkaXZOYXYuY2xhc3NMaXN0LmFkZChcInB4LTVcIiwgXCJweS0zXCIsIFwiZHJvcC1zaGFkb3ctbGdcIik7XG4gICAgZGl2UmlnaHQuYXBwZW5kQ2hpbGQoZGl2TmF2KTtcblxuICAgIGxldCBkaXZGbGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZGbGV4LmNsYXNzTGlzdC5hZGQoXG4gICAgICBcImZsZXhcIixcbiAgICAgIFwianVzdGlmeS1jZW50ZXJcIixcbiAgICAgIFwidy1mdWxsXCIsXG4gICAgICBcImdhcC03XCIsXG4gICAgICBcImJnLWFtYmVyLTUwXCIsXG4gICAgICBcInB5LTJcIixcbiAgICAgIFwibmF2aVwiXG4gICAgKTtcbiAgICBkaXZOYXYuYXBwZW5kQ2hpbGQoZGl2RmxleCk7XG5cbiAgICBsZXQgYnV0dG9uTmF2SG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uTmF2SG9tZS5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKTtcbiAgICBidXR0b25OYXZIb21lLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuICAgIGRpdkZsZXguYXBwZW5kQ2hpbGQoYnV0dG9uTmF2SG9tZSk7XG5cbiAgICBsZXQgYnV0dG9uTmF2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uTmF2TWVudS5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKTtcbiAgICBidXR0b25OYXZNZW51LmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIGRpdkZsZXguYXBwZW5kQ2hpbGQoYnV0dG9uTmF2TWVudSk7XG5cbiAgICBsZXQgYnV0dG9uTmF2Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uTmF2Q29udGFjdC5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKTtcbiAgICBidXR0b25OYXZDb250YWN0LmlubmVyVGV4dCA9IFwiQ29udGFjdFwiO1xuICAgIGRpdkZsZXguYXBwZW5kQ2hpbGQoYnV0dG9uTmF2Q29udGFjdCk7XG5cbiAgICBsZXQgZGl2SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkltYWdlLmNsYXNzTGlzdC5hZGQoXCJpbWFnZS1iYWNrZ3JvdW5kXCIpO1xuICAgIGRpdlJpZ2h0LmFwcGVuZENoaWxkKGRpdkltYWdlKTtcblxuICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbWFnZS1jdXN0b21cIik7XG4gICAgaW1hZ2Uuc3JjID0gXCJpbWFnZS0yLmpwZ1wiO1xuICAgIGRpdkltYWdlLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgfTtcblxuICBsZXQgY2FjaGVOYXYgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2XCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyLFxuICAgIGNhY2hlTmF2LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgaG9tZXBhZ2UgfTtcbiIsImxldCBtZW51ID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBkaXZDb250ZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgLy8gTUFJTiBDT05URU5UIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBsZXQgZGl2SG9tZXBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkhvbWVwYWdlLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIsIFwiaC1zY3JlZW5cIiwgXCJmb250LXNhbnNcIik7XG4gICAgZGl2SG9tZXBhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lcGFnZVwiKTtcblxuICAgIGxldCBkaXZHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZHcmlkLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIsIFwiZ3JpZC1jb2xzLTFcIik7XG5cbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGRpdkhvbWVwYWdlKTtcbiAgICBkaXZIb21lcGFnZS5hcHBlbmRDaGlsZChkaXZHcmlkKTtcblxuICAgIC8vIE5BViBNRU5VIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgbGV0IGRpdk5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2TmF2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2MlwiKTtcbiAgICBkaXZOYXYuY2xhc3NMaXN0LmFkZChcInB4LTVcIiwgXCJweS0zXCIsIFwiZHJvcC1zaGFkb3ctbGdcIik7XG4gICAgZGl2R3JpZC5hcHBlbmRDaGlsZChkaXZOYXYpO1xuXG4gICAgbGV0IGRpdkZsZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkZsZXguY2xhc3NMaXN0LmFkZChcbiAgICAgIFwiZmxleFwiLFxuICAgICAgXCJqdXN0aWZ5LWNlbnRlclwiLFxuICAgICAgXCJ3LWZ1bGxcIixcbiAgICAgIFwiZ2FwLTdcIixcbiAgICAgIFwiYmctYW1iZXItNTBcIixcbiAgICAgIFwicHktMlwiLFxuICAgICAgXCJuYXZpXCJcbiAgICApO1xuICAgIGRpdk5hdi5hcHBlbmRDaGlsZChkaXZGbGV4KTtcblxuICAgIGxldCBidXR0b25OYXZIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b25OYXZIb21lLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXhsXCIpO1xuICAgIGJ1dHRvbk5hdkhvbWUuaW5uZXJUZXh0ID0gXCJIb21lXCI7XG4gICAgZGl2RmxleC5hcHBlbmRDaGlsZChidXR0b25OYXZIb21lKTtcblxuICAgIGxldCBidXR0b25OYXZNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b25OYXZNZW51LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXhsXCIpO1xuICAgIGJ1dHRvbk5hdk1lbnUuaW5uZXJUZXh0ID0gXCJNZW51XCI7XG4gICAgZGl2RmxleC5hcHBlbmRDaGlsZChidXR0b25OYXZNZW51KTtcblxuICAgIGxldCBidXR0b25OYXZDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b25OYXZDb250YWN0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXhsXCIpO1xuICAgIGJ1dHRvbk5hdkNvbnRhY3QuaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XG4gICAgZGl2RmxleC5hcHBlbmRDaGlsZChidXR0b25OYXZDb250YWN0KTtcblxuICAgIC8vIFdJRFRIIENPTlRBSU5FUiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBsZXQgZGl2V2lkdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdldpZHRoLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGl2LXdpZHRoXCIpXG4gICAgZGl2R3JpZC5hcHBlbmRDaGlsZChkaXZXaWR0aCk7XG4gICAgXG4gICAgLy8gTUVOVSBDT05UQUlORVIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBsZXQgZGl2TWVudUNvbnRhaW5lckFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2TWVudUNvbnRhaW5lckFsbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVDb250YWluZXJBbGxcIik7XG4gICAgZGl2TWVudUNvbnRhaW5lckFsbC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiLCBcImp1c3RpZnktY2VudGVyXCIpO1xuICAgIGRpdldpZHRoLmFwcGVuZENoaWxkKGRpdk1lbnVDb250YWluZXJBbGwpO1xuXG4gICAgLy8gSEVSTyBESVZcblxuICAgIGxldCBkaXZIZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZIZXJvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiSGVyby1jb250YWluZXJcIik7XG4gICAgZGl2SGVyby5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiLCBcImp1c3RpZnktY2VudGVyXCIpO1xuICAgIGRpdk1lbnVDb250YWluZXJBbGwuYXBwZW5kQ2hpbGQoZGl2SGVybyk7XG5cbiAgICBsZXQgdGV4dEhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGV4dEhlcm8udGV4dENvbnRlbnQgPSBcIkRpc2NvdmVyXCI7XG4gICAgZGl2SGVyby5hcHBlbmRDaGlsZCh0ZXh0SGVybyk7XG5cbiAgICBsZXQgdGV4dEhlcm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRleHRIZXJvMi50ZXh0Q29udGVudCA9IFwiT3VyIG1lbnVcIjtcbiAgICBkaXZIZXJvLmFwcGVuZENoaWxkKHRleHRIZXJvMik7XG5cbiAgICAvLyBQTEFURSBDT05UQUlORVIgQUxMXG4gICAgXG4gICAgbGV0IG1lbnVFbnRyeVBsYXRlQWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51RW50cnlQbGF0ZUFsbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiUGxhdGVBbGxcIik7XG4gICAgbWVudUVudHJ5UGxhdGVBbGwuY2xhc3NMaXN0LmFkZChcImdyaWRcIiwgXCJncmlkLWNvbHMtMlwiLCBcImdhcC0xXCIpO1xuICAgIGRpdk1lbnVDb250YWluZXJBbGwuYXBwZW5kQ2hpbGQobWVudUVudHJ5UGxhdGVBbGwpO1xuXG4gICAgLy8gTUVOVSBFTlRSWSBPTkVcbiAgICBcbiAgICBsZXQgbWVudUNhdGVnb3J5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUNhdGVnb3J5MS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibWVudS1DYXRlZ29yeS0xXCIpXG4gICAgbWVudUVudHJ5UGxhdGVBbGwuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5MSk7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5MVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG1lbnVDYXRlZ29yeTFUaXRsZS50ZXh0Q29udGVudCA9IFwiQXBldGl6ZXJzXCI7XG4gICAgbWVudUNhdGVnb3J5MS5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnkxVGl0bGUpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTFQbGF0ZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbWVudUNhdGVnb3J5MVBsYXRlMS50ZXh0Q29udGVudCA9IFwiQ2xhbSBzaGlwc1wiO1xuICAgIG1lbnVDYXRlZ29yeTEuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5MVBsYXRlMSk7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5MVBsYXRlMUNvbnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZW51Q2F0ZWdvcnkxUGxhdGUxQ29udGV4dC50ZXh0Q29udGVudCA9IFwiTmV3IGVuZ2xhbmQgc3R5bGUsIHdpdGggaG91c2UgbWFkZSBzYXVjZVwiO1xuICAgIG1lbnVDYXRlZ29yeTEuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5MVBsYXRlMUNvbnRleHQpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTFQbGF0ZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbWVudUNhdGVnb3J5MVBsYXRlMi50ZXh0Q29udGVudCA9IFwiR3JpbGxlZCBCcnVzY2hldHRhXCI7XG4gICAgbWVudUNhdGVnb3J5MS5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnkxUGxhdGUyKTtcblxuICAgIGxldCBtZW51Q2F0ZWdvcnkxUGxhdGUyQ29udGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVDYXRlZ29yeTFQbGF0ZTJDb250ZXh0LnRleHRDb250ZW50ID0gXCJXaGl0ZSBiZWFucywgcm9hc3RlZCBnYXJsaWMsIHByb3NjaXV0dG9cIjtcbiAgICBtZW51Q2F0ZWdvcnkxLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTFQbGF0ZTJDb250ZXh0KTtcblxuICAgIC8vIE1FTlUgRU5UUlkgVFdPXG4gICAgbGV0IG1lbnVDYXRlZ29yeTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVDYXRlZ29yeTIuc2V0QXR0cmlidXRlKFwiaWRcIixcIm1lbnUtQ2F0ZWdvcnktMlwiKVxuICAgIG1lbnVFbnRyeVBsYXRlQWxsLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTIpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBtZW51Q2F0ZWdvcnkyVGl0bGUudGV4dENvbnRlbnQgPSBcIkJ1cmdlclwiO1xuICAgIG1lbnVDYXRlZ29yeTIuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5MlRpdGxlKTtcblxuICAgIGxldCBtZW51Q2F0ZWdvcnkyUGxhdGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIG1lbnVDYXRlZ29yeTJQbGF0ZTEudGV4dENvbnRlbnQgPSBcIlZlZ2dpZSBCdXJnZXJcIjtcbiAgICBtZW51Q2F0ZWdvcnkyLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTJQbGF0ZTEpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTJQbGF0ZTFDb250ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWVudUNhdGVnb3J5MlBsYXRlMUNvbnRleHQudGV4dENvbnRlbnQgPSBcIk1hZGUgd2l0aCBicm93biByaWNlLCBibGFjayBiZWVyLCBvYXRzIGFuZCBtb2xvc3Nlcywgd2l0aCBsZXR0dWNlLCB0b21hdG8sIG9uaW9uLCBwaWNrbGUgYW5kIHNhdWNlXCI7XG4gICAgbWVudUNhdGVnb3J5Mi5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnkyUGxhdGUxQ29udGV4dCk7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5MlBsYXRlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtZW51Q2F0ZWdvcnkyUGxhdGUyLnRleHRDb250ZW50ID0gXCJTbW9rZWQgVHVya2V5IFBhbmluaVwiO1xuICAgIG1lbnVDYXRlZ29yeTIuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5MlBsYXRlMik7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5MlBsYXRlMkNvbnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZW51Q2F0ZWdvcnkyUGxhdGUyQ29udGV4dC50ZXh0Q29udGVudCA9IFwiRGVsaWNhdGUgdHVybmluZyBicmVhc3QsIGNyaXNweSBiYWNvbiwgbWlsZCBjaGVkZGFyIGNoZWVzZSwgdmluZSByaXBlbmVkIHRvbWF0b2VzLCBjcmVhbXkgbWF5byBvbiBjaWFiYXR0YSBicmVhZFwiO1xuICAgIG1lbnVDYXRlZ29yeTIuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5MlBsYXRlMkNvbnRleHQpO1xuXG4gICAgLy8gTUVOVSBFTlRSWSBUSFJFRVxuICAgIGxldCBtZW51Q2F0ZWdvcnkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51Q2F0ZWdvcnkzLnNldEF0dHJpYnV0ZShcImlkXCIsXCJtZW51LUNhdGVnb3J5LTNcIilcbiAgICBtZW51RW50cnlQbGF0ZUFsbC5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnkzKTtcblxuICAgIGxldCBtZW51Q2F0ZWdvcnkzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbWVudUNhdGVnb3J5M1RpdGxlLnRleHRDb250ZW50ID0gXCJQbGF0ZXNcIjtcbiAgICBtZW51Q2F0ZWdvcnkzLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTNUaXRsZSk7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5M1BsYXRlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtZW51Q2F0ZWdvcnkzUGxhdGUxLnRleHRDb250ZW50ID0gXCJTZWFmb29kIGFsZnJlZG9cIjtcbiAgICBtZW51Q2F0ZWdvcnkzLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTNQbGF0ZTEpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTNQbGF0ZTFDb250ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWVudUNhdGVnb3J5M1BsYXRlMUNvbnRleHQudGV4dENvbnRlbnQgPSBcIlBhc3RhIHNocmltcCBhbmQgY3JhYiBpbiBhIGNyZWFteSBhbGZyZWRvIHNhdWNlXCI7XG4gICAgbWVudUNhdGVnb3J5My5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnkzUGxhdGUxQ29udGV4dCk7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5M1BsYXRlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtZW51Q2F0ZWdvcnkzUGxhdGUyLnRleHRDb250ZW50ID0gXCJIZXJiIHJvYXN0ZWQgaGFsZiBjaGlja2VuXCI7XG4gICAgbWVudUNhdGVnb3J5My5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnkzUGxhdGUyKTtcblxuICAgIGxldCBtZW51Q2F0ZWdvcnkzUGxhdGUyQ29udGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVDYXRlZ29yeTNQbGF0ZTJDb250ZXh0LnRleHRDb250ZW50ID0gXCJPcmVnb24gcmFpc2VkIGNoaWNrZW4gd2l0aCBvdXIgdmVnZXRhYmxlIHJpc290dG8gY2FrZVwiO1xuICAgIG1lbnVDYXRlZ29yeTMuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5M1BsYXRlMkNvbnRleHQpO1xuXG4gICAgLy8gTUVOVSBFTlRSWSBGT1VSXG4gICAgbGV0IG1lbnVDYXRlZ29yeTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVDYXRlZ29yeTQuc2V0QXR0cmlidXRlKFwiaWRcIixcIm1lbnUtQ2F0ZWdvcnktNFwiKVxuICAgIG1lbnVFbnRyeVBsYXRlQWxsLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTQpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBtZW51Q2F0ZWdvcnk0VGl0bGUudGV4dENvbnRlbnQgPSBcIkRlc2VydHNcIjtcbiAgICBtZW51Q2F0ZWdvcnk0LmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTRUaXRsZSk7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5NFBsYXRlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtZW51Q2F0ZWdvcnk0UGxhdGUxLnRleHRDb250ZW50ID0gXCJZb2d1cnRcIjtcbiAgICBtZW51Q2F0ZWdvcnk0LmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTNQbGF0ZTEpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTRQbGF0ZTFDb250ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWVudUNhdGVnb3J5NFBsYXRlMUNvbnRleHQudGV4dENvbnRlbnQgPSBcIldpdGggZnJlc2ggYmVycmllc1wiO1xuICAgIG1lbnVDYXRlZ29yeTQuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5NFBsYXRlMUNvbnRleHQpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTRQbGF0ZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbWVudUNhdGVnb3J5NFBsYXRlMi50ZXh0Q29udGVudCA9IFwiQ2Fycm90IGNha2VcIjtcbiAgICBtZW51Q2F0ZWdvcnk0LmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTRQbGF0ZTIpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTRQbGF0ZTJDb250ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWVudUNhdGVnb3J5NFBsYXRlMkNvbnRleHQudGV4dENvbnRlbnQgPSBcIk1hZGUgd2l0aCBjYXJyb3QsIHBpbmVhcHBsZSwgY29jb251dHMsIGFuZCByYWlzaW5nLCB3aXRoIGNyZWFtIGNoZWVzZSBmcm9zdGluZ1wiO1xuICAgIG1lbnVDYXRlZ29yeTQuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5NFBsYXRlMkNvbnRleHQpO1xuICB9O1xuXG4gIGxldCBjYWNoZU5hdiA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZcIik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXIsXG4gICAgY2FjaGVOYXYsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBtZW51IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBob21lcGFnZSB9IGZyb20gXCIuL2hvbWVwYWdlXCI7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgY29udGFjdFVzIH0gZnJvbSBcIi4vY29udGFjdFVzXCI7XG5cbndpbmRvdy5ob21lcGFnZSA9IGhvbWVwYWdlXG53aW5kb3cubWVudSA9IG1lbnVcbndpbmRvdy5jb250YWN0VXMgPSBjb250YWN0VXNcblxuLy8gaG9tZXBhZ2UucmVuZGVyKClcbm1lbnUucmVuZGVyKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=