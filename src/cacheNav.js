let cacheNav = function () {
    document.addEventListener("DOMContentLoaded", function () {
      let nav = document.querySelectorAll(".nav-button");
      console.log(nav)
			nav[0].addEventListener("click", myFunction)
			nav[1].addEventListener("click", (e) => render)
			nav[2].addEventListener("click", (e) => render)
    });
  };

function myFunction() {
  console.log('emile')
}

export { cacheNav }