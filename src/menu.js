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
  };

  return {
    render,
  };
})();

export { menu };