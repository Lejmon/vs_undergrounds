// script.js

document.addEventListener("DOMContentLoaded", function () {
    const joinButtons = document.querySelectorAll('[data-action="join"]');

    function showForm() {
        // Váš kód na zobrazenie formulára
        console.log("Formulár sa má zobraziť");
        alert("Chceme Vás presmerovať na inú stránku, súhlasíte?");
        window.location.replace("login/index.html");
    }

    // Pridajte potrebnú funkcionalitu pre tlačidlá
    joinButtons.forEach(button => {
        button.addEventListener("click", showForm);
    });
});
