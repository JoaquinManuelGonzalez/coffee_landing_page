function toggle_menu() {
    var toggle_menu = document.querySelector(".menu_toggle");
    var nav_bar = document.querySelector(".nav_bar");
    toggle_menu.classList.toggle("active");
    nav_bar.classList.toggle("active");
}