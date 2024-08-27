/*=============== GO TO ANOTHER PAGE IF IS CLICKED ===============*/
document.addEventListener("DOMContentLoaded", function () {
    var inicio = document.getElementById("inicio");
    inicio.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "index.html";
    });

    var jiu = document.getElementById("jj");
    jiu.addEventListener("click", function (event) {
        event.preventDefault(); // Evita el comportamiento por defecto del enlace
        window.location.href = "jiujitsu.aspx"; // Redirige a la página de Jiu-Jitsu
    });

    /*=============== GO DOWN  ===============*/
    document.getElementById('btn').addEventListener('click', function () {
        document.getElementById('form').scrollIntoView({ behavior: "smooth" })
    });

    /*=============== SHOW MENU ===============*/
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
});
/*=============== MODAL APPEARS IF IS CLICKED ===============*/
document.querySelectorAll('.instructor .name').forEach(item => {
    item.addEventListener('click', event => {
        const title = event.target.getAttribute('data-title');
        const role = event.target.getAttribute('data-role');
        const description = event.target.getAttribute('data-description');
        const image = event.target.getAttribute('data-image');

        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-role').innerText = role;
        document.getElementById('modal-description').innerText = description;
        document.getElementById('modal-image').setAttribute('src', image);
    });
});

/*=============== CONTACT WHEN THE BUTTON IS CLICKED ===============*/
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