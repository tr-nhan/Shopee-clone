let input = document.getElementsByClassName("header__search-input");
let searchHistory = document.getElementsByClassName("header__search-history");

input[0].addEventListener(
  "focus",
  () => {
    searchHistory[0].style.display = "block";
  },
  true
);
input[0].addEventListener(
  "focusout",
  () => {
    searchHistory[0].style.display = "none";
  },
  true
);
