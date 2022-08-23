/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages.js":
/*!**********************!*\
  !*** ./src/pages.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homepage": () => (/* binding */ homepage)
/* harmony export */ });
let homepage = function () {

  let render = function () {
    let divContent = document.querySelector("#content");

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
    buttonMenu.innerText = "Discover our menu";

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
    // buttonNavHome.type = "button";
    buttonNavHome.innerText = "Home";
    let buttonNavMenu = document.createElement("button");
    buttonNavMenu.classList.add("text-xl");
    // buttonNavMenu.type = "button";
    buttonNavMenu.innerText = "Menu";
    let buttonNavContact = document.createElement("button");
    buttonNavContact.classList.add("text-xl");
    // buttonNavContact.type = "button";
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
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ "./src/pages.js");


class Pages {
  constructor(name) {
    this.name = name;
    this.load = function () {
      _pages__WEBPACK_IMPORTED_MODULE_0__.homepage.render();
    };
  }
}

let index = {
  homepage: new Pages("homepage"),
  menu: new Pages("menu"),
  contact: new Pages("contact"),
};

index.homepage.load();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VDdkdEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0Q7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBZTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9wYWdlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGhvbWVwYWdlID0gZnVuY3Rpb24gKCkge1xuXG4gIGxldCByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICAvLyBNQUlOIENPTlRFTlRcblxuICAgIGxldCBkaXZIb21lcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2SG9tZXBhZ2UuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIiwgXCJoLXNjcmVlblwiLCBcImZvbnQtc2Fuc1wiKVxuICAgIGRpdkhvbWVwYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZXBhZ2VcIik7XG5cbiAgICBsZXQgZGl2R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2R3JpZC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiLCBcImdyaWQtY29scy0yXCIsIFwiaC1mdWxsXCIpXG5cbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGRpdkhvbWVwYWdlKVxuICAgIGRpdkhvbWVwYWdlLmFwcGVuZENoaWxkKGRpdkdyaWQpXG5cbiAgICAvLyBMRUZUIEdSSURcblxuICAgIGxldCBkaXZMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZMZWZ0LmNsYXNzTGlzdC5hZGQoXCJsZWZ0XCIsIFwiZ3JpZFwiLCBcImdyaWQtY29scy0xXCIsIFwiZ3JpZC1jdXN0b20tMVwiLCBcImJnLWFtYmVyLTUwXCIpXG5cbiAgICBsZXQgZGl2SW5uZXJHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZJbm5lckdyaWQuY2xhc3NMaXN0LmFkZChcImdyaWRcIiwgXCJnYXAtMTBcIiwgXCJqdXN0aWZ5LWl0ZW1zLWNlbnRlclwiKVxuXG4gICAgbGV0IGRpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKVxuXG4gICAgZGl2VGl0bGUudGV4dENvbnRlbnQgPSBcIkVBVC5jb21cIjtcblxuICAgIGxldCBkaXZCYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkJhbm5lci5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKVxuICAgIGRpdkJhbm5lci50ZXh0Q29udGVudCA9IFwiRWF0IHdpdGggdXNcIjtcblxuICAgIGxldCBidXR0b25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b25NZW51LnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGJ1dHRvbk1lbnUuY2xhc3NMaXN0LmFkZChcInRleHQteGxcIiwgXCJ0ZXh0LWdyYXktOTAwXCIsIFwiYmctd2hpdGVcIiwgXCJib3JkZXJcIiwgXCJib3JkZXItZ3JheS0zMDBcIiwgXCJmb2N1czpvdXRsaW5lLW5vbmVcIiwgXCJob3ZlcjpiZy1ncmF5LTEwMFwiLCBcImZvY3VzOnJpbmctNFwiLCBcImZvY3VzOnJpbmctZ3JheS0yMDBcIiwgXCJmb250LW1lZGl1bVwiLCBcInJvdW5kZWQtbGdcIiwgXCJ0ZXh0LXNtXCIsIFwicHgtNVwiLCBcInB5LTIuNVwiLCBcImRhcms6YmctZ3JheS04MDBcIiwgXCJkYXJrOnRleHQtd2hpdGVcIiwgXCJkYXJrOmJvcmRlci1ncmF5LTYwMFwiLCBcImRhcms6aG92ZXI6YmctZ3JheS03MDBcIiwgXCJkYXJrOmhvdmVyOmJvcmRlci1ncmF5LTYwMFwiLCBcImRhcms6Zm9jdXM6cmluZy1ncmF5LTcwMFwiKVxuICAgIGJ1dHRvbk1lbnUuaW5uZXJUZXh0ID0gXCJEaXNjb3ZlciBvdXIgbWVudVwiO1xuXG4gICAgbGV0IGRpdkZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2Rm9vdGVyLmlubmVyVGV4dCA9IFwiRm9vdGVyXCI7XG5cbiAgICBkaXZHcmlkLmFwcGVuZENoaWxkKGRpdkxlZnQpXG4gICAgZGl2TGVmdC5hcHBlbmRDaGlsZChkaXZJbm5lckdyaWQpXG4gICAgZGl2TGVmdC5hcHBlbmRDaGlsZChkaXZGb290ZXIpXG4gICAgZGl2SW5uZXJHcmlkLmFwcGVuZENoaWxkKGRpdlRpdGxlKVxuICAgIGRpdklubmVyR3JpZC5hcHBlbmRDaGlsZChkaXZCYW5uZXIpXG4gICAgZGl2SW5uZXJHcmlkLmFwcGVuZENoaWxkKGJ1dHRvbk1lbnUpXG5cbiAgICAvLyBSSUdIVCBHUklEXG5cbiAgICBsZXQgZGl2UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdlJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiLCBcImgtZnVsbFwiLCBcInNoYWRvdy0yeGxcIik7XG5cbiAgICBsZXQgZGl2TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZOYXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXZcIik7XG4gICAgZGl2TmF2LmNsYXNzTGlzdC5hZGQoXCJweC01XCIsIFwicHktM1wiLCBcImRyb3Atc2hhZG93LWxnXCIpO1xuIFxuICAgIGxldCBkaXZGbGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZGbGV4LmNsYXNzTGlzdC5hZGQoXCJmbGV4XCIsIFwianVzdGlmeS1jZW50ZXJcIiwgXCJ3LWZ1bGxcIiwgXCJnYXAtN1wiLCBcImJnLWFtYmVyLTUwXCIsIFwicHktMlwiLCBcIm5hdmlcIilcblxuICAgIGxldCBidXR0b25OYXZIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b25OYXZIb21lLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXhsXCIpO1xuICAgIC8vIGJ1dHRvbk5hdkhvbWUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgYnV0dG9uTmF2SG9tZS5pbm5lclRleHQgPSBcIkhvbWVcIjtcbiAgICBsZXQgYnV0dG9uTmF2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uTmF2TWVudS5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiKTtcbiAgICAvLyBidXR0b25OYXZNZW51LnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGJ1dHRvbk5hdk1lbnUuaW5uZXJUZXh0ID0gXCJNZW51XCI7XG4gICAgbGV0IGJ1dHRvbk5hdkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbk5hdkNvbnRhY3QuY2xhc3NMaXN0LmFkZChcInRleHQteGxcIik7XG4gICAgLy8gYnV0dG9uTmF2Q29udGFjdC50eXBlID0gXCJidXR0b25cIjtcbiAgICBidXR0b25OYXZDb250YWN0LmlubmVyVGV4dCA9IFwiQ29udGFjdFwiO1xuXG4gICAgbGV0IGRpdkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZJbWFnZS5jbGFzc0xpc3QuYWRkKFwiaW1hZ2UtYmFja2dyb3VuZFwiKTtcblxuICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbWFnZS1jdXN0b21cIilcbiAgICBpbWFnZS5zcmMgPSBcImltYWdlLTIuanBnXCI7XG5cbiAgICBkaXZHcmlkLmFwcGVuZENoaWxkKGRpdlJpZ2h0KVxuICAgIGRpdlJpZ2h0LmFwcGVuZENoaWxkKGRpdk5hdilcbiAgICBkaXZOYXYuYXBwZW5kQ2hpbGQoZGl2RmxleClcblxuICAgIGRpdkZsZXguYXBwZW5kQ2hpbGQoYnV0dG9uTmF2SG9tZSlcbiAgICBkaXZGbGV4LmFwcGVuZENoaWxkKGJ1dHRvbk5hdk1lbnUpXG4gICAgZGl2RmxleC5hcHBlbmRDaGlsZChidXR0b25OYXZDb250YWN0KVxuXG4gICAgZGl2UmlnaHQuYXBwZW5kQ2hpbGQoZGl2SW1hZ2UpXG4gICAgZGl2SW1hZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gIH07XG5cbiAgbGV0IGNhY2hlTmF2ID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdlwiKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbmRlcixcbiAgICBjYWNoZU5hdlxuICB9XG59KCk7XG5cbmV4cG9ydCB7IGhvbWVwYWdlIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBob21lcGFnZSwgbWVudSwgY29udGFjdCB9IGZyb20gXCIuL3BhZ2VzXCI7XG5cbmNsYXNzIFBhZ2VzIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgaG9tZXBhZ2UucmVuZGVyKCk7XG4gICAgfTtcbiAgfVxufVxuXG5sZXQgaW5kZXggPSB7XG4gIGhvbWVwYWdlOiBuZXcgUGFnZXMoXCJob21lcGFnZVwiKSxcbiAgbWVudTogbmV3IFBhZ2VzKFwibWVudVwiKSxcbiAgY29udGFjdDogbmV3IFBhZ2VzKFwiY29udGFjdFwiKSxcbn07XG5cbmluZGV4LmhvbWVwYWdlLmxvYWQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=