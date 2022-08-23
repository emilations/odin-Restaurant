import { homepage, menu, contact } from "./pages";

class Pages {
  constructor(name) {
    this.name = name;
    this.load = function () {
      homepage.render();
    };
  }
}

let index = {
  homepage: new Pages("homepage"),
  menu: new Pages("menu"),
  contact: new Pages("contact"),
};

index.homepage.load();