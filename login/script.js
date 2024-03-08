// script.js

document.addEventListener("DOMContentLoaded", function () {
    const guestButtons = document.querySelectorAll('[data-action="guest"]');

    function enter() {
        window.location.replace("log_form/content/index.html");
    }

    // Přidejte potřebnou funkcionalitu pro tlačítka
    guestButtons.forEach(button => {
        button.addEventListener("click", enter);
    });
});
