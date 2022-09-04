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

export { homepage };