import { cacheNav, render } from "./pages";

class Pages {
  constructor(name, path) {
    this.name = name;
    this.path = path;
    this.load = function () {
      render(this);
      cacheNav();
    };
  }
}

let index = {
  homepage: new Pages("homepage", "homepage.html"),
  menu: new Pages("homepage", "menu.html"),
  contact: new Pages("homepage", "contact.html"),
};

index.homepage.load();