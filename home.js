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
        return str == "d-none";
      })
  ) {
    menuSm.classList.remove("d-none");
  } else menuSm.classList.add("d-none");
};

// event listener
window.addEventListener("resize", function () {
  // from bootstrap md breakpoints
  const query = window.matchMedia("(min-width: 768px)");
  //   if the query is > the target width then add 'd-none' in the classList of menuSm
  if (query.matches) {
    menuSm.classList.add("d-none");
  }
});
