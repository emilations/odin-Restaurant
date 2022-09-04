import { homepage } from "./homepage";
import { menu } from "./menu";
import { contactUs } from "./contactUs";

function myFunction() {
  console.log('emile')
}

let loadHomepage = function() {
  homepage.render();
  cacheNav();
  cacheHomepageButton()
}

let loadMenu = function() {
  menu.render();
  cacheNav();
}

let loadContactUs = function() {
  contactUs.render();
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