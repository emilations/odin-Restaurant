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

export { contactUs };