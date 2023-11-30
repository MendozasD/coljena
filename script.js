const dropdownIcon = document.getElementById("dropdown_icon");
const navbarMenu = document.getElementById("dropdown_list");
const dropdownBg = document.getElementById("dropdown_bg_close");

dropdownIcon.addEventListener("click", () => {
  if (navbarMenu.classList.contains("active")) {
    // navbarMenu.classList.add("animate__bounceOutDown");
    navbarMenu.classList.remove("active");
    navbarMenu.style.display = "none";
    dropdown_bg_close.style.display = "none";
  } else {
    dropdown_bg_close.style.display = "inline";
    navbarMenu.style.display = "grid";
    navbarMenu.classList.toggle("active");
    navbarMenu.classList.add("animate__bounceInDown");
  }
});

dropdownBg.addEventListener("click", () => {
  navbarMenu.classList.remove("active");
  navbarMenu.style.display = "none";
  dropdown_bg_close.style.display = "none";
});