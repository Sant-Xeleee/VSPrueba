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

    document.getElementById('send').addEventListener('click', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe normalmente
    
        // Obtener los valores del formulario
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let asunto = document.getElementById('asunto').value;
    
        // Crear el enlace de WhatsApp
        let whatsappLink = `https://api.whatsapp.com/send?phone=+529992790193&text=Nombre: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMensaje: ${encodeURIComponent(asunto)}`;
    
        // Abrir WhatsApp
        window.open(whatsappLink, '_blank');
    });