let modalOverlayLogin = document.getElementsByClassName(
  "modal__overlay--login"
);
let modalOverlayRegistry = document.getElementsByClassName(
  "modal__overlay--registry"
);
let modalLogin = document.getElementsByClassName("modal--login");
let modalRegistry = document.getElementsByClassName("modal--registry");
window.onclick = (e) => {
  if (e.target === modalOverlayLogin[0]) {
    modalLogin[0].style.display = "none";
  }
  if (e.target === modalOverlayRegistry[0]) {
    modalRegistry[0].style.display = "none";
  }
};
