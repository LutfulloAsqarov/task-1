let navBar = document.getElementById("header__nav__hamburger-btn");
let navList = document.getElementById("header__nav-list");
let backtop = document.getElementById("backtop");
let navShrink = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    showBacktop();
    showNavShrink();
});

navBar.addEventListener("click", function () {
    navList.classList.toggle("show-header__nav-list");
});

function showBacktop() {
    if (scrollY > 200) {
        backtop.classList.add("show-backtop");
    } else {
        backtop.classList.remove("show-backtop");
    }
}
function showNavShrink() {
    if (scrollY > 0) {
        navShrink.classList.add("show-navshrink");
    } else {
        navShrink.classList.remove("show-navshrink");
    }
}
