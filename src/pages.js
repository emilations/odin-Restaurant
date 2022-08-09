let render = function (page) {
  fetch(page.path)
    .then((response) => response.text())
    .then((text) => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(text, "text/html");
      let section = doc.getElementById("#content")
      console.log(section)
      document.getElementById("content").innerHTML = section;
    });
};

let cacheNav = function () {
  document.addEventListener("DOMContentLoaded", function () {
    let nav = document.querySelectorAll(".nav");
  });
};

export { render, cacheNav };