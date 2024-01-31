document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const burgerMenu = document.querySelector(".burger-menu");
    const closeButton = document.querySelector(".close-btn");

    burgerMenu.addEventListener("click", function () {
        menu.classList.toggle("menu-open");
    });

    // Закриття меню при кліку за його межами або на кнопку "close-btn"
    document.addEventListener("click", function (event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnBurgerMenu = burgerMenu.contains(event.target);

        if (!isClickInsideMenu && !isClickOnBurgerMenu) {
            menu.classList.remove("menu-open");
        }
    });

    // Закриття меню при кліку на кнопку "close-btn"
    closeButton.addEventListener("click", function () {
        menu.classList.remove("menu-open");
    });
});
