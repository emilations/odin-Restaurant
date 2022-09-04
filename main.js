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
    buttonNavHome.classList.add("text-xl", "nav-button");
    buttonNavHome.setAttribute("data-index", "Home")
    buttonNavHome.innerText = "Home";
    divFlex.appendChild(buttonNavHome);

    let buttonNavMenu = document.createElement("button");
    buttonNavMenu.classList.add("text-xl", "nav-button");
    buttonNavMenu.innerText = "Menu";
    divFlex.appendChild(buttonNavMenu);

    let buttonNavContact = document.createElement("button");
    buttonNavContact.classList.add("text-xl", "nav-button");
    buttonNavContact.innerText = "Contact";
    divFlex.appendChild(buttonNavContact);

    // WIDTH CONTAINER -------------------------------------------------------

    let divWidth2 = document.createElement("div");
    divWidth2.setAttribute("id", "div-width2");
    divWidth2.classList.add("grid", "drop-shadow-lg", "rounded-lg");
    divGrid.appendChild(divWidth2);

    // HERO DIV -----------------------------------------------------------

    let divHero = document.createElement("div");
    divHero.setAttribute("id", "hero-container");
    divWidth2.appendChild(divHero);

    let textHero = document.createElement("p");
    textHero.textContent = "Our story";
    textHero.classList.add("hero-small");
    divHero.appendChild(textHero);

    // STORY DIV -----------------------------------------------------------

    let divStory = document.createElement("div");
    divStory.setAttribute("id", "story");

    divStory.classList.add("place-self-end");
    divStory.textContent =
      "Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet, consectetur, adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?";
    divWidth2.appendChild(divStory);

    // ADDRESS CONTACT -----------------------------------------------------

    let divAddressContainer = document.createElement("div");
    divAddressContainer.setAttribute("id", "address");
    divWidth2.appendChild(divAddressContainer);

    let labelAddress = document.createElement("p");
    labelAddress.classList.add("label-right")
    labelAddress.textContent = "Address:";
    divAddressContainer.appendChild(labelAddress);

    let valueAddress = document.createElement("p");
    valueAddress.textContent = "1645 Friendship Lane";
    divAddressContainer.appendChild(valueAddress);

    let labelTelephone = document.createElement("p");
    labelTelephone.classList.add("label-right")
    labelTelephone.textContent = "Telephone:";
    divAddressContainer.appendChild(labelTelephone);

    let valueTelephone = document.createElement("p");
    valueTelephone.textContent = "1 800-645-1120";
    divAddressContainer.appendChild(valueTelephone);

    console.log("loading done")

  };

  return {
    render,
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
      "menu-Button-Hero",
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
    buttonNavHome.classList.add("text-xl", "nav-button");
    buttonNavHome.innerText = "Home";
    divFlex.appendChild(buttonNavHome);

    let buttonNavMenu = document.createElement("button");
    buttonNavMenu.classList.add("text-xl", "nav-button");
    buttonNavMenu.innerText = "Menu";
    divFlex.appendChild(buttonNavMenu);

    let buttonNavContact = document.createElement("button");
    buttonNavContact.classList.add("text-xl", "nav-button");
    buttonNavContact.innerText = "Contact";
    divFlex.appendChild(buttonNavContact);

    let divImage = document.createElement("div");
    divImage.classList.add("image-background");
    divRight.appendChild(divImage);

    let image = document.createElement("img");
    image.setAttribute("id", "image-custom");
    image.src = "image-2.jpg";
    divImage.appendChild(image);

    console.log("loading done")

  };
  return {
    render,
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
    buttonNavHome.classList.add("text-xl", "nav-button");
    buttonNavHome.innerText = "Home";
    divFlex.appendChild(buttonNavHome);

    let buttonNavMenu = document.createElement("button");
    buttonNavMenu.classList.add("text-xl", "nav-button");
    buttonNavMenu.innerText = "Menu";
    divFlex.appendChild(buttonNavMenu);

    let buttonNavContact = document.createElement("button");
    buttonNavContact.classList.add("text-xl", "nav-button");
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

    console.log("loading done")
  };

  return {
    render,
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




function myFunction() {
  console.log('emile')
}

let loadHomepage = function() {
  _homepage__WEBPACK_IMPORTED_MODULE_0__.homepage.render();
  cacheNav();
  cacheHomepageButton()
}

let loadMenu = function() {
  _menu__WEBPACK_IMPORTED_MODULE_1__.menu.render();
  cacheNav();
}

let loadContactUs = function() {
  _contactUs__WEBPACK_IMPORTED_MODULE_2__.contactUs.render();
  cacheNav();
}

function cacheNav() {
  console.log("cache done");
  let nav = document.querySelectorAll(".nav-button");
  nav[0].addEventListener("click", loadHomepage)
  nav[1].addEventListener("click", loadMenu)
  nav[2].addEventListener("click", loadContactUs)
};

function cacheHomepageButton() {
  let menuButton  = document.querySelector(".menu-Button-Hero");
  menuButton.addEventListener("click", loadMenu)
}

loadHomepage()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hJRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VDMU5EO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNSO0FBQ1U7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsc0RBQWU7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSw4Q0FBVztBQUNiO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHdEQUFnQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvY29udGFjdFVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGNvbnRhY3RVcyA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgZGl2Q29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIC8vIE1BSU4gQ09OVEVOVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgbGV0IGRpdkhvbWVwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZIb21lcGFnZS5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiLCBcImgtc2NyZWVuXCIsIFwiZm9udC1zYW5zXCIpO1xuICAgIGRpdkhvbWVwYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZXBhZ2VcIik7XG5cbiAgICBsZXQgZGl2R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2R3JpZC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiLCBcImdyaWQtY29scy0xXCIpO1xuXG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChkaXZIb21lcGFnZSk7XG4gICAgZGl2SG9tZXBhZ2UuYXBwZW5kQ2hpbGQoZGl2R3JpZCk7XG5cbiAgICAvLyBOQVYgTUVOVSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGxldCBkaXZOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdk5hdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdjJcIik7XG4gICAgZGl2TmF2LmNsYXNzTGlzdC5hZGQoXCJweC01XCIsIFwicHktM1wiLCBcImRyb3Atc2hhZG93LWxnXCIpO1xuICAgIGRpdkdyaWQuYXBwZW5kQ2hpbGQoZGl2TmF2KTtcblxuICAgIGxldCBkaXZGbGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZGbGV4LmNsYXNzTGlzdC5hZGQoXG4gICAgICBcImZsZXhcIixcbiAgICAgIFwianVzdGlmeS1jZW50ZXJcIixcbiAgICAgIFwidy1mdWxsXCIsXG4gICAgICBcImdhcC03XCIsXG4gICAgICBcImJnLWFtYmVyLTUwXCIsXG4gICAgICBcInB5LTJcIixcbiAgICAgIFwibmF2aVwiXG4gICAgKTtcbiAgICBkaXZOYXYuYXBwZW5kQ2hpbGQoZGl2RmxleCk7XG5cbiAgICBsZXQgYnV0dG9uTmF2SG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uTmF2SG9tZS5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiLCBcIm5hdi1idXR0b25cIik7XG4gICAgYnV0dG9uTmF2SG9tZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIFwiSG9tZVwiKVxuICAgIGJ1dHRvbk5hdkhvbWUuaW5uZXJUZXh0ID0gXCJIb21lXCI7XG4gICAgZGl2RmxleC5hcHBlbmRDaGlsZChidXR0b25OYXZIb21lKTtcblxuICAgIGxldCBidXR0b25OYXZNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b25OYXZNZW51LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXhsXCIsIFwibmF2LWJ1dHRvblwiKTtcbiAgICBidXR0b25OYXZNZW51LmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIGRpdkZsZXguYXBwZW5kQ2hpbGQoYnV0dG9uTmF2TWVudSk7XG5cbiAgICBsZXQgYnV0dG9uTmF2Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uTmF2Q29udGFjdC5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiLCBcIm5hdi1idXR0b25cIik7XG4gICAgYnV0dG9uTmF2Q29udGFjdC5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcbiAgICBkaXZGbGV4LmFwcGVuZENoaWxkKGJ1dHRvbk5hdkNvbnRhY3QpO1xuXG4gICAgLy8gV0lEVEggQ09OVEFJTkVSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGxldCBkaXZXaWR0aDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdldpZHRoMi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRpdi13aWR0aDJcIik7XG4gICAgZGl2V2lkdGgyLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIsIFwiZHJvcC1zaGFkb3ctbGdcIiwgXCJyb3VuZGVkLWxnXCIpO1xuICAgIGRpdkdyaWQuYXBwZW5kQ2hpbGQoZGl2V2lkdGgyKTtcblxuICAgIC8vIEhFUk8gRElWIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBsZXQgZGl2SGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2SGVyby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlcm8tY29udGFpbmVyXCIpO1xuICAgIGRpdldpZHRoMi5hcHBlbmRDaGlsZChkaXZIZXJvKTtcblxuICAgIGxldCB0ZXh0SGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRleHRIZXJvLnRleHRDb250ZW50ID0gXCJPdXIgc3RvcnlcIjtcbiAgICB0ZXh0SGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyby1zbWFsbFwiKTtcbiAgICBkaXZIZXJvLmFwcGVuZENoaWxkKHRleHRIZXJvKTtcblxuICAgIC8vIFNUT1JZIERJViAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgbGV0IGRpdlN0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZTdG9yeS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN0b3J5XCIpO1xuXG4gICAgZGl2U3RvcnkuY2xhc3NMaXN0LmFkZChcInBsYWNlLXNlbGYtZW5kXCIpO1xuICAgIGRpdlN0b3J5LnRleHRDb250ZW50ID1cbiAgICAgIFwiTmVtbyBlbmltIGlwc2FtIHZvbHVwdGF0ZW0sIHF1aWEgdm9sdXB0YXMgc2l0LCBhc3Blcm5hdHVyIGF1dCBvZGl0IGF1dCBmdWdpdCwgc2VkIHF1aWEgY29uc2VxdXVudHVyIG1hZ25pIGRvbG9yZXMgZW9zLCBxdWkgcmF0aW9uZSB2b2x1cHRhdGVtIHNlcXVpIG5lc2NpdW50LCBuZXF1ZSBwb3JybyBxdWlzcXVhbSBlc3QsIHF1aSBkb2xvcmVtIGlwc3VtLCBxdWlhIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciwgYWRpcGlzY2lbbmddIHZlbGl0LCBzZWQgcXVpYSBub24gbnVtcXVhbSBbZG9dIGVpdXMgbW9kaSB0ZW1wb3JhIGluY2lbZGldZHVudCwgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYW0gYWxpcXVhbSBxdWFlcmF0IHZvbHVwdGF0ZW0uIFV0IGVuaW0gYWQgbWluaW1hIHZlbmlhbSwgcXVpcyBub3N0cnVtIGV4ZXJjaXRhdGlvbmVtIHVsbGFtIGNvcnBvcmlzIHN1c2NpcGl0IGxhYm9yaW9zYW0sIG5pc2kgdXQgYWxpcXVpZCBleCBlYSBjb21tb2RpIGNvbnNlcXVhdHVyPyBRdWlzIGF1dGVtIHZlbCBldW0gaXVyZSByZXByZWhlbmRlcml0LCBxdWkgaW4gZWEgdm9sdXB0YXRlIHZlbGl0IGVzc2UsIHF1YW0gbmloaWwgbW9sZXN0aWFlIGNvbnNlcXVhdHVyLCB2ZWwgaWxsdW0sIHF1aSBkb2xvcmVtIGV1bSBmdWdpYXQsIHF1byB2b2x1cHRhcyBudWxsYSBwYXJpYXR1cj9cIjtcbiAgICBkaXZXaWR0aDIuYXBwZW5kQ2hpbGQoZGl2U3RvcnkpO1xuXG4gICAgLy8gQUREUkVTUyBDT05UQUNUIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBsZXQgZGl2QWRkcmVzc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2QWRkcmVzc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZHJlc3NcIik7XG4gICAgZGl2V2lkdGgyLmFwcGVuZENoaWxkKGRpdkFkZHJlc3NDb250YWluZXIpO1xuXG4gICAgbGV0IGxhYmVsQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxhYmVsQWRkcmVzcy5jbGFzc0xpc3QuYWRkKFwibGFiZWwtcmlnaHRcIilcbiAgICBsYWJlbEFkZHJlc3MudGV4dENvbnRlbnQgPSBcIkFkZHJlc3M6XCI7XG4gICAgZGl2QWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbEFkZHJlc3MpO1xuXG4gICAgbGV0IHZhbHVlQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHZhbHVlQWRkcmVzcy50ZXh0Q29udGVudCA9IFwiMTY0NSBGcmllbmRzaGlwIExhbmVcIjtcbiAgICBkaXZBZGRyZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKHZhbHVlQWRkcmVzcyk7XG5cbiAgICBsZXQgbGFiZWxUZWxlcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsYWJlbFRlbGVwaG9uZS5jbGFzc0xpc3QuYWRkKFwibGFiZWwtcmlnaHRcIilcbiAgICBsYWJlbFRlbGVwaG9uZS50ZXh0Q29udGVudCA9IFwiVGVsZXBob25lOlwiO1xuICAgIGRpdkFkZHJlc3NDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWxUZWxlcGhvbmUpO1xuXG4gICAgbGV0IHZhbHVlVGVsZXBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdmFsdWVUZWxlcGhvbmUudGV4dENvbnRlbnQgPSBcIjEgODAwLTY0NS0xMTIwXCI7XG4gICAgZGl2QWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWx1ZVRlbGVwaG9uZSk7XG5cbiAgICBjb25zb2xlLmxvZyhcImxvYWRpbmcgZG9uZVwiKVxuXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXIsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBjb250YWN0VXMgfTsiLCJsZXQgaG9tZXBhZ2UgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGRpdkNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICAvLyBNQUlOIENPTlRFTlRcblxuICAgIGxldCBkaXZIb21lcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2SG9tZXBhZ2UuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIiwgXCJoLXNjcmVlblwiLCBcImZvbnQtc2Fuc1wiKTtcbiAgICBkaXZIb21lcGFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVwYWdlXCIpO1xuXG4gICAgbGV0IGRpdkdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkdyaWQuY2xhc3NMaXN0LmFkZChcImdyaWRcIiwgXCJncmlkLWNvbHMtMlwiLCBcImgtZnVsbFwiKTtcblxuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2SG9tZXBhZ2UpO1xuICAgIGRpdkhvbWVwYWdlLmFwcGVuZENoaWxkKGRpdkdyaWQpO1xuXG4gICAgLy8gTEVGVCBHUklEXG5cbiAgICBsZXQgZGl2TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2TGVmdC5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJsZWZ0XCIsXG4gICAgICBcImdyaWRcIixcbiAgICAgIFwiZ3JpZC1jb2xzLTFcIixcbiAgICAgIFwiZ3JpZC1jdXN0b20tMVwiLFxuICAgICAgXCJiZy1hbWJlci01MFwiXG4gICAgKTtcbiAgICBkaXZHcmlkLmFwcGVuZENoaWxkKGRpdkxlZnQpO1xuXG4gICAgbGV0IGRpdklubmVyR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2SW5uZXJHcmlkLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIsIFwiZ2FwLTEwXCIsIFwianVzdGlmeS1pdGVtcy1jZW50ZXJcIik7XG4gICAgZGl2TGVmdC5hcHBlbmRDaGlsZChkaXZJbm5lckdyaWQpO1xuXG4gICAgbGV0IGRpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKTtcbiAgICBkaXZUaXRsZS50ZXh0Q29udGVudCA9IFwiRUFULmNvbVwiO1xuICAgIGRpdklubmVyR3JpZC5hcHBlbmRDaGlsZChkaXZUaXRsZSk7XG5cbiAgICBsZXQgZGl2QmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZCYW5uZXIuY2xhc3NMaXN0LmFkZChcInRleHQteGxcIik7XG4gICAgZGl2QmFubmVyLnRleHRDb250ZW50ID0gXCJFYXQgd2l0aCB1c1wiO1xuICAgIGRpdklubmVyR3JpZC5hcHBlbmRDaGlsZChkaXZCYW5uZXIpO1xuXG4gICAgbGV0IGJ1dHRvbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbk1lbnUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgYnV0dG9uTWVudS5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJtZW51LUJ1dHRvbi1IZXJvXCIsXG4gICAgICBcInRleHQteGxcIixcbiAgICAgIFwidGV4dC1ncmF5LTkwMFwiLFxuICAgICAgXCJiZy13aGl0ZVwiLFxuICAgICAgXCJib3JkZXJcIixcbiAgICAgIFwiYm9yZGVyLWdyYXktMzAwXCIsXG4gICAgICBcImZvY3VzOm91dGxpbmUtbm9uZVwiLFxuICAgICAgXCJob3ZlcjpiZy1ncmF5LTEwMFwiLFxuICAgICAgXCJmb2N1czpyaW5nLTRcIixcbiAgICAgIFwiZm9jdXM6cmluZy1ncmF5LTIwMFwiLFxuICAgICAgXCJmb250LW1lZGl1bVwiLFxuICAgICAgXCJyb3VuZGVkLWxnXCIsXG4gICAgICBcInRleHQtc21cIixcbiAgICAgIFwicHgtNVwiLFxuICAgICAgXCJweS0yLjVcIixcbiAgICAgIFwiZGFyazpiZy1ncmF5LTgwMFwiLFxuICAgICAgXCJkYXJrOnRleHQtd2hpdGVcIixcbiAgICAgIFwiZGFyazpib3JkZXItZ3JheS02MDBcIixcbiAgICAgIFwiZGFyazpob3ZlcjpiZy1ncmF5LTcwMFwiLFxuICAgICAgXCJkYXJrOmhvdmVyOmJvcmRlci1ncmF5LTYwMFwiLFxuICAgICAgXCJkYXJrOmZvY3VzOnJpbmctZ3JheS03MDBcIlxuICAgICk7XG4gICAgYnV0dG9uTWVudS5pbm5lclRleHQgPSBcIkRpc2NvdmVyIG91ciBtZW51XCI7XG4gICAgZGl2SW5uZXJHcmlkLmFwcGVuZENoaWxkKGJ1dHRvbk1lbnUpO1xuXG4gICAgbGV0IGRpdkZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2Rm9vdGVyLmlubmVyVGV4dCA9IFwiRm9vdGVyXCI7XG4gICAgZGl2TGVmdC5hcHBlbmRDaGlsZChkaXZGb290ZXIpO1xuXG4gICAgLy8gUklHSFQgR1JJRFxuXG4gICAgbGV0IGRpdlJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZSaWdodC5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIiwgXCJoLWZ1bGxcIiwgXCJzaGFkb3ctMnhsXCIpO1xuICAgIGRpdkdyaWQuYXBwZW5kQ2hpbGQoZGl2UmlnaHQpO1xuXG4gICAgbGV0IGRpdk5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2TmF2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2XCIpO1xuICAgIGRpdk5hdi5jbGFzc0xpc3QuYWRkKFwicHgtNVwiLCBcInB5LTNcIiwgXCJkcm9wLXNoYWRvdy1sZ1wiKTtcbiAgICBkaXZSaWdodC5hcHBlbmRDaGlsZChkaXZOYXYpO1xuXG4gICAgbGV0IGRpdkZsZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkZsZXguY2xhc3NMaXN0LmFkZChcbiAgICAgIFwiZmxleFwiLFxuICAgICAgXCJqdXN0aWZ5LWNlbnRlclwiLFxuICAgICAgXCJ3LWZ1bGxcIixcbiAgICAgIFwiZ2FwLTdcIixcbiAgICAgIFwiYmctYW1iZXItNTBcIixcbiAgICAgIFwicHktMlwiLFxuICAgICAgXCJuYXZpXCJcbiAgICApO1xuICAgIGRpdk5hdi5hcHBlbmRDaGlsZChkaXZGbGV4KTtcblxuICAgIGxldCBidXR0b25OYXZIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b25OYXZIb21lLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXhsXCIsIFwibmF2LWJ1dHRvblwiKTtcbiAgICBidXR0b25OYXZIb21lLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuICAgIGRpdkZsZXguYXBwZW5kQ2hpbGQoYnV0dG9uTmF2SG9tZSk7XG5cbiAgICBsZXQgYnV0dG9uTmF2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uTmF2TWVudS5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiLCBcIm5hdi1idXR0b25cIik7XG4gICAgYnV0dG9uTmF2TWVudS5pbm5lclRleHQgPSBcIk1lbnVcIjtcbiAgICBkaXZGbGV4LmFwcGVuZENoaWxkKGJ1dHRvbk5hdk1lbnUpO1xuXG4gICAgbGV0IGJ1dHRvbk5hdkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbk5hdkNvbnRhY3QuY2xhc3NMaXN0LmFkZChcInRleHQteGxcIiwgXCJuYXYtYnV0dG9uXCIpO1xuICAgIGJ1dHRvbk5hdkNvbnRhY3QuaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XG4gICAgZGl2RmxleC5hcHBlbmRDaGlsZChidXR0b25OYXZDb250YWN0KTtcblxuICAgIGxldCBkaXZJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2SW1hZ2UuY2xhc3NMaXN0LmFkZChcImltYWdlLWJhY2tncm91bmRcIik7XG4gICAgZGl2UmlnaHQuYXBwZW5kQ2hpbGQoZGl2SW1hZ2UpO1xuXG4gICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltYWdlLWN1c3RvbVwiKTtcbiAgICBpbWFnZS5zcmMgPSBcImltYWdlLTIuanBnXCI7XG4gICAgZGl2SW1hZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgY29uc29sZS5sb2coXCJsb2FkaW5nIGRvbmVcIilcblxuICB9O1xuICByZXR1cm4ge1xuICAgIHJlbmRlcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGhvbWVwYWdlIH07IiwibGV0IG1lbnUgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGRpdkNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICAvLyBNQUlOIENPTlRFTlQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGxldCBkaXZIb21lcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2SG9tZXBhZ2UuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIiwgXCJoLXNjcmVlblwiLCBcImZvbnQtc2Fuc1wiKTtcbiAgICBkaXZIb21lcGFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVwYWdlXCIpO1xuXG4gICAgbGV0IGRpdkdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkdyaWQuY2xhc3NMaXN0LmFkZChcImdyaWRcIiwgXCJncmlkLWNvbHMtMVwiKTtcblxuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2SG9tZXBhZ2UpO1xuICAgIGRpdkhvbWVwYWdlLmFwcGVuZENoaWxkKGRpdkdyaWQpO1xuXG4gICAgLy8gTkFWIE1FTlUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBsZXQgZGl2TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZOYXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXYyXCIpO1xuICAgIGRpdk5hdi5jbGFzc0xpc3QuYWRkKFwicHgtNVwiLCBcInB5LTNcIiwgXCJkcm9wLXNoYWRvdy1sZ1wiKTtcbiAgICBkaXZHcmlkLmFwcGVuZENoaWxkKGRpdk5hdik7XG5cbiAgICBsZXQgZGl2RmxleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2RmxleC5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJmbGV4XCIsXG4gICAgICBcImp1c3RpZnktY2VudGVyXCIsXG4gICAgICBcInctZnVsbFwiLFxuICAgICAgXCJnYXAtN1wiLFxuICAgICAgXCJiZy1hbWJlci01MFwiLFxuICAgICAgXCJweS0yXCIsXG4gICAgICBcIm5hdmlcIlxuICAgICk7XG4gICAgZGl2TmF2LmFwcGVuZENoaWxkKGRpdkZsZXgpO1xuXG4gICAgbGV0IGJ1dHRvbk5hdkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbk5hdkhvbWUuY2xhc3NMaXN0LmFkZChcInRleHQteGxcIiwgXCJuYXYtYnV0dG9uXCIpO1xuICAgIGJ1dHRvbk5hdkhvbWUuaW5uZXJUZXh0ID0gXCJIb21lXCI7XG4gICAgZGl2RmxleC5hcHBlbmRDaGlsZChidXR0b25OYXZIb21lKTtcblxuICAgIGxldCBidXR0b25OYXZNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b25OYXZNZW51LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXhsXCIsIFwibmF2LWJ1dHRvblwiKTtcbiAgICBidXR0b25OYXZNZW51LmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIGRpdkZsZXguYXBwZW5kQ2hpbGQoYnV0dG9uTmF2TWVudSk7XG5cbiAgICBsZXQgYnV0dG9uTmF2Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uTmF2Q29udGFjdC5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiLCBcIm5hdi1idXR0b25cIik7XG4gICAgYnV0dG9uTmF2Q29udGFjdC5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcbiAgICBkaXZGbGV4LmFwcGVuZENoaWxkKGJ1dHRvbk5hdkNvbnRhY3QpO1xuXG4gICAgLy8gV0lEVEggQ09OVEFJTkVSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGxldCBkaXZXaWR0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2V2lkdGguc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkaXYtd2lkdGhcIik7XG4gICAgZGl2V2lkdGguY2xhc3NMaXN0LmFkZChcImRyb3Atc2hhZG93LWxnXCIsIFwicm91bmRlZC1sZ1wiLCBcImdyaWRcIiwgXCJqdXN0aWZ5LWNlbnRlclwiKVxuICAgIGRpdkdyaWQuYXBwZW5kQ2hpbGQoZGl2V2lkdGgpO1xuXG4gICAgLy8gTUVOVSBDT05UQUlORVIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBsZXQgZGl2TWVudUNvbnRhaW5lckFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2TWVudUNvbnRhaW5lckFsbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVDb250YWluZXJBbGxcIik7XG4gICAgZGl2TWVudUNvbnRhaW5lckFsbC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiLCBcImp1c3RpZnktY2VudGVyXCIpO1xuICAgIGRpdldpZHRoLmFwcGVuZENoaWxkKGRpdk1lbnVDb250YWluZXJBbGwpO1xuXG4gICAgLy8gSEVSTyBESVZcblxuICAgIGxldCBkaXZIZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZIZXJvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVyby1jb250YWluZXJcIik7XG4gICAgZGl2SGVyby5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiLCBcImp1c3RpZnktY2VudGVyXCIpO1xuICAgIGRpdk1lbnVDb250YWluZXJBbGwuYXBwZW5kQ2hpbGQoZGl2SGVybyk7XG5cbiAgICBsZXQgdGV4dEhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZXh0SGVyby50ZXh0Q29udGVudCA9IFwiRGlzY292ZXJcIjtcbiAgICB0ZXh0SGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyby1zbWFsbFwiKTtcbiAgICBkaXZIZXJvLmFwcGVuZENoaWxkKHRleHRIZXJvKTtcblxuICAgIGxldCB0ZXh0SGVybzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZXh0SGVybzIudGV4dENvbnRlbnQgPSBcIk91ciBmb29kIG1lbnVcIjtcbiAgICB0ZXh0SGVybzIuY2xhc3NMaXN0LmFkZChcImhlcm8tYmlnXCIpO1xuICAgIGRpdkhlcm8uYXBwZW5kQ2hpbGQodGV4dEhlcm8yKTtcblxuICAgIC8vIFBMQVRFIENPTlRBSU5FUiBBTExcblxuICAgIGxldCBtZW51RW50cnlQbGF0ZUFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUVudHJ5UGxhdGVBbGwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF0ZUFsbFwiKTtcbiAgICBtZW51RW50cnlQbGF0ZUFsbC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiLCBcImdyaWQtY29scy0yXCIpO1xuICAgIGRpdk1lbnVDb250YWluZXJBbGwuYXBwZW5kQ2hpbGQobWVudUVudHJ5UGxhdGVBbGwpO1xuXG4gICAgLy8gTUVOVSBFTlRSWSBPTkVcblxuICAgIGxldCBtZW51Q2F0ZWdvcnkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51Q2F0ZWdvcnkxLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudS1DYXRlZ29yeS0xXCIpO1xuICAgIG1lbnVFbnRyeVBsYXRlQWxsLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTEpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBtZW51Q2F0ZWdvcnkxVGl0bGUudGV4dENvbnRlbnQgPSBcIkFwZXRpemVyc1wiO1xuICAgIG1lbnVDYXRlZ29yeTFUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKTtcbiAgICBtZW51Q2F0ZWdvcnkxLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTFUaXRsZSk7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5MVBsYXRlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtZW51Q2F0ZWdvcnkxUGxhdGUxLnRleHRDb250ZW50ID0gXCJDbGFtIHNoaXBzXCI7XG4gICAgbWVudUNhdGVnb3J5MS5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnkxUGxhdGUxKTtcblxuICAgIGxldCBtZW51Q2F0ZWdvcnkxUGxhdGUxQ29udGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVDYXRlZ29yeTFQbGF0ZTFDb250ZXh0LmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpXG4gICAgbWVudUNhdGVnb3J5MVBsYXRlMUNvbnRleHQudGV4dENvbnRlbnQgPVxuICAgICAgXCJOZXcgZW5nbGFuZCBzdHlsZSwgd2l0aCBob3VzZSBtYWRlIHNhdWNlXCI7XG4gICAgbWVudUNhdGVnb3J5MS5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnkxUGxhdGUxQ29udGV4dCk7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5MVBsYXRlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtZW51Q2F0ZWdvcnkxUGxhdGUyLnRleHRDb250ZW50ID0gXCJHcmlsbGVkIEJydXNjaGV0dGFcIjtcbiAgICBtZW51Q2F0ZWdvcnkxLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTFQbGF0ZTIpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTFQbGF0ZTJDb250ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWVudUNhdGVnb3J5MVBsYXRlMkNvbnRleHQuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIilcbiAgICBtZW51Q2F0ZWdvcnkxUGxhdGUyQ29udGV4dC50ZXh0Q29udGVudCA9XG4gICAgICBcIldoaXRlIGJlYW5zLCByb2FzdGVkIGdhcmxpYywgcHJvc2NpdXR0b1wiO1xuICAgIG1lbnVDYXRlZ29yeTEuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5MVBsYXRlMkNvbnRleHQpO1xuXG4gICAgLy8gTUVOVSBFTlRSWSBUV09cblxuICAgIGxldCBtZW51Q2F0ZWdvcnkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51Q2F0ZWdvcnkyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudS1DYXRlZ29yeS0yXCIpO1xuICAgIG1lbnVFbnRyeVBsYXRlQWxsLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTIpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBtZW51Q2F0ZWdvcnkyVGl0bGUudGV4dENvbnRlbnQgPSBcIkJ1cmdlciAmIFNhbmR3aWNoZXNcIjtcbiAgICBtZW51Q2F0ZWdvcnkyVGl0bGUuY2xhc3NMaXN0LmFkZChcInRleHQteGxcIik7XG4gICAgbWVudUNhdGVnb3J5Mi5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnkyVGl0bGUpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTJQbGF0ZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbWVudUNhdGVnb3J5MlBsYXRlMS50ZXh0Q29udGVudCA9IFwiVmVnZ2llIEJ1cmdlclwiO1xuICAgIG1lbnVDYXRlZ29yeTIuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5MlBsYXRlMSk7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5MlBsYXRlMUNvbnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZW51Q2F0ZWdvcnkyUGxhdGUxQ29udGV4dC5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKVxuICAgIG1lbnVDYXRlZ29yeTJQbGF0ZTFDb250ZXh0LnRleHRDb250ZW50ID1cbiAgICAgIFwiTWFkZSB3aXRoIGJyb3duIHJpY2UsIGJsYWNrIGJlZXIsIG9hdHMgYW5kIG1vbG9zc2VzLCB3aXRoIGxldHR1Y2UsIHRvbWF0bywgb25pb24sIHBpY2tsZSBhbmQgc2F1Y2VcIjtcbiAgICBtZW51Q2F0ZWdvcnkyLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTJQbGF0ZTFDb250ZXh0KTtcblxuICAgIGxldCBtZW51Q2F0ZWdvcnkyUGxhdGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIG1lbnVDYXRlZ29yeTJQbGF0ZTIudGV4dENvbnRlbnQgPSBcIlNtb2tlZCBUdXJrZXkgUGFuaW5pXCI7XG4gICAgbWVudUNhdGVnb3J5Mi5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnkyUGxhdGUyKTtcblxuICAgIGxldCBtZW51Q2F0ZWdvcnkyUGxhdGUyQ29udGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVDYXRlZ29yeTJQbGF0ZTJDb250ZXh0LmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpXG4gICAgbWVudUNhdGVnb3J5MlBsYXRlMkNvbnRleHQudGV4dENvbnRlbnQgPVxuICAgICAgXCJEZWxpY2F0ZSB0dXJuaW5nIGJyZWFzdCwgY3Jpc3B5IGJhY29uLCBtaWxkIGNoZWRkYXIgY2hlZXNlLCB2aW5lIHJpcGVuZWQgdG9tYXRvZXMsIGNyZWFteSBtYXlvIG9uIGNpYWJhdHRhIGJyZWFkXCI7XG4gICAgbWVudUNhdGVnb3J5Mi5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnkyUGxhdGUyQ29udGV4dCk7XG5cbiAgICAvLyBNRU5VIEVOVFJZIFRIUkVFXG5cbiAgICBsZXQgbWVudUNhdGVnb3J5MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUNhdGVnb3J5My5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnUtQ2F0ZWdvcnktM1wiKTtcbiAgICBtZW51RW50cnlQbGF0ZUFsbC5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnkzKTtcblxuICAgIGxldCBtZW51Q2F0ZWdvcnkzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbWVudUNhdGVnb3J5M1RpdGxlLnRleHRDb250ZW50ID0gXCJQbGF0ZXNcIjtcbiAgICBtZW51Q2F0ZWdvcnkzVGl0bGUuY2xhc3NMaXN0LmFkZChcInRleHQteGxcIik7XG4gICAgbWVudUNhdGVnb3J5My5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnkzVGl0bGUpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTNQbGF0ZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbWVudUNhdGVnb3J5M1BsYXRlMS50ZXh0Q29udGVudCA9IFwiU2VhZm9vZCBhbGZyZWRvXCI7XG4gICAgbWVudUNhdGVnb3J5My5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnkzUGxhdGUxKTtcblxuICAgIGxldCBtZW51Q2F0ZWdvcnkzUGxhdGUxQ29udGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVDYXRlZ29yeTNQbGF0ZTFDb250ZXh0LmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpXG4gICAgbWVudUNhdGVnb3J5M1BsYXRlMUNvbnRleHQudGV4dENvbnRlbnQgPVxuICAgICAgXCJQYXN0YSBzaHJpbXAgYW5kIGNyYWIgaW4gYSBjcmVhbXkgYWxmcmVkbyBzYXVjZVwiO1xuICAgIG1lbnVDYXRlZ29yeTMuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5M1BsYXRlMUNvbnRleHQpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTNQbGF0ZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbWVudUNhdGVnb3J5M1BsYXRlMi50ZXh0Q29udGVudCA9IFwiSGVyYiByb2FzdGVkIGhhbGYgY2hpY2tlblwiO1xuICAgIG1lbnVDYXRlZ29yeTMuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5M1BsYXRlMik7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5M1BsYXRlMkNvbnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZW51Q2F0ZWdvcnkzUGxhdGUyQ29udGV4dC5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKVxuICAgIG1lbnVDYXRlZ29yeTNQbGF0ZTJDb250ZXh0LnRleHRDb250ZW50ID1cbiAgICAgIFwiT3JlZ29uIHJhaXNlZCBjaGlja2VuIHdpdGggb3VyIHZlZ2V0YWJsZSByaXNvdHRvIGNha2VcIjtcbiAgICBtZW51Q2F0ZWdvcnkzLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTNQbGF0ZTJDb250ZXh0KTtcblxuICAgIC8vIE1FTlUgRU5UUlkgRk9VUlxuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVDYXRlZ29yeTQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51LUNhdGVnb3J5LTRcIik7XG4gICAgbWVudUVudHJ5UGxhdGVBbGwuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5NCk7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5NFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG1lbnVDYXRlZ29yeTRUaXRsZS50ZXh0Q29udGVudCA9IFwiRGVzZXJ0c1wiO1xuICAgIG1lbnVDYXRlZ29yeTRUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKTtcbiAgICBtZW51Q2F0ZWdvcnk0LmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTRUaXRsZSk7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5NFBsYXRlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtZW51Q2F0ZWdvcnk0UGxhdGUxLnRleHRDb250ZW50ID0gXCJZb2d1cnRcIjtcbiAgICBtZW51Q2F0ZWdvcnk0LmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeTRQbGF0ZTEpO1xuXG4gICAgbGV0IG1lbnVDYXRlZ29yeTRQbGF0ZTFDb250ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWVudUNhdGVnb3J5NFBsYXRlMUNvbnRleHQuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIilcbiAgICBtZW51Q2F0ZWdvcnk0UGxhdGUxQ29udGV4dC50ZXh0Q29udGVudCA9IFwiV2l0aCBmcmVzaCBiZXJyaWVzXCI7XG4gICAgbWVudUNhdGVnb3J5NC5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnk0UGxhdGUxQ29udGV4dCk7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5NFBsYXRlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtZW51Q2F0ZWdvcnk0UGxhdGUyLnRleHRDb250ZW50ID0gXCJDYXJyb3QgY2FrZVwiO1xuICAgIG1lbnVDYXRlZ29yeTQuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5NFBsYXRlMik7XG5cbiAgICBsZXQgbWVudUNhdGVnb3J5NFBsYXRlMkNvbnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZW51Q2F0ZWdvcnk0UGxhdGUyQ29udGV4dC5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKVxuICAgIG1lbnVDYXRlZ29yeTRQbGF0ZTJDb250ZXh0LnRleHRDb250ZW50ID1cbiAgICAgIFwiTWFkZSB3aXRoIGNhcnJvdCwgcGluZWFwcGxlLCBjb2NvbnV0cywgYW5kIHJhaXNpbnMsIHdpdGggY3JlYW0gY2hlZXNlIGZyb3N0aW5nXCI7XG4gICAgbWVudUNhdGVnb3J5NC5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcnk0UGxhdGUyQ29udGV4dCk7XG5cbiAgICBjb25zb2xlLmxvZyhcImxvYWRpbmcgZG9uZVwiKVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgbWVudSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaG9tZXBhZ2UgfSBmcm9tIFwiLi9ob21lcGFnZVwiO1xuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IGNvbnRhY3RVcyB9IGZyb20gXCIuL2NvbnRhY3RVc1wiO1xuXG5mdW5jdGlvbiBteUZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnZW1pbGUnKVxufVxuXG5sZXQgbG9hZEhvbWVwYWdlID0gZnVuY3Rpb24oKSB7XG4gIGhvbWVwYWdlLnJlbmRlcigpO1xuICBjYWNoZU5hdigpO1xuICBjYWNoZUhvbWVwYWdlQnV0dG9uKClcbn1cblxubGV0IGxvYWRNZW51ID0gZnVuY3Rpb24oKSB7XG4gIG1lbnUucmVuZGVyKCk7XG4gIGNhY2hlTmF2KCk7XG59XG5cbmxldCBsb2FkQ29udGFjdFVzID0gZnVuY3Rpb24oKSB7XG4gIGNvbnRhY3RVcy5yZW5kZXIoKTtcbiAgY2FjaGVOYXYoKTtcbn1cblxuZnVuY3Rpb24gY2FjaGVOYXYoKSB7XG4gIGNvbnNvbGUubG9nKFwiY2FjaGUgZG9uZVwiKTtcbiAgbGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWJ1dHRvblwiKTtcbiAgbmF2WzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkSG9tZXBhZ2UpXG4gIG5hdlsxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZE1lbnUpXG4gIG5hdlsyXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZENvbnRhY3RVcylcbn07XG5cbmZ1bmN0aW9uIGNhY2hlSG9tZXBhZ2VCdXR0b24oKSB7XG4gIGxldCBtZW51QnV0dG9uICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1CdXR0b24tSGVyb1wiKTtcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZE1lbnUpXG59XG5cbmxvYWRIb21lcGFnZSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9