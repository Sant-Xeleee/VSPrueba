document.addEventListener("DOMContentLoaded", function () {
    var inicio = document.getElementById("inicio");
    inicio.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "Page.aspx";
    });

    var jiu = document.getElementById("jj");
    jiu.addEventListener("click", function (event) {
        event.preventDefault(); // Evita el comportamiento por defecto del enlace
        window.location.href = "jiujitsu.aspx"; // Redirige a la página de Jiu-Jitsu
    });
    /*=============== SHOW MENU ===============*/
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');

        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    });