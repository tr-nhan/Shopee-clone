function showRegistryForm() {
  let modalOverlayLogin = document.getElementsByClassName("modal--login");
  modalOverlayLogin[0].style.display = "none";
  let modalOverlayRegistry = document.getElementsByClassName("modal--registry");
  modalOverlayRegistry[0].style.display = "flex";
}

function showLoginForm() {
  let modalOverlayLogin = document.getElementsByClassName("modal--login");
  modalOverlayLogin[0].style.display = "flex";
  let modalOverlayRegistry = document.getElementsByClassName("modal--registry");
  modalOverlayRegistry[0].style.display = "none";
}

function hideForm() {
  let modalOverlayLogin = document.getElementsByClassName("modal--login");
  modalOverlayLogin[0].style.display = "none";
  let modalOverlayRegistry = document.getElementsByClassName("modal--registry");
  modalOverlayRegistry[0].style.display = "none";
}
