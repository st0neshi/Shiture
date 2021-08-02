let menuBtn = document.querySelector("#menu-btn");
let sideBar = document.querySelector(".side-bar");
let searchBtn = document.querySelector("#search-icon");

menuBtn.onclick = function() {
    sideBar.classList.toggle("active");
}

searchBtn.onclick = function() {
    sideBar.classList.toggle("active");
}