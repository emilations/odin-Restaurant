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
  };

  return {
    render,
  };
})();

export { contactUs };