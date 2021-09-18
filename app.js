//NAVBAR
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const profile = document.querySelector("button.profile-icon")
const profmenu = document.querySelector(".profile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

profile.addEventListener("click", () => {
    profmenu.classList.toggle("hidden");
});