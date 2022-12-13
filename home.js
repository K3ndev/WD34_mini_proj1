"use strict";

// hamburger toggle
let menuSm = document.getElementById("menu-sm");
const toggleHamburger = () => {
  // it will remove 'd-none' if true else add 'd-none'
  if (
    // return true if it has 'd-none'  in the classList menuSm
    menuSm.classList.value
      .split(" ")
      .map((str) => {
        return str;
      })
      .some((str) => {
        return str === "menu-sm-hide";
      })
  ) {
    // reset to show
    menuSm.classList.remove("menu-sm-hide");
    menuSm.classList.remove("menu-sm-animation-close");

    menuSm.classList.add("menu-sm-animation-start");
  } else {
    // reset to close
    menuSm.classList.remove("menu-sm-show");
    menuSm.classList.remove("menu-sm-animation-start");

    menuSm.classList.add("menu-sm-hide");
    menuSm.classList.add("menu-sm-animation-close");
  }
};

// event listener
window.addEventListener("resize", function () {
  // from bootstrap md breakpoints
  const query = window.matchMedia("(min-width: 768px)");
  //   if the query is > the target width then add 'd-none' in the classList of menuSm
  if (query.matches) {
    // reset to close
    menuSm.classList.remove("menu-sm-show");
    menuSm.classList.remove("menu-sm-animation-start");

    menuSm.classList.add("menu-sm-hide");
    menuSm.classList.add("menu-sm-animation-close");
  }
});
