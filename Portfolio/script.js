document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos todas las secciones con la clase 'about-section'
    const sections = document.querySelectorAll('.about-section');

    // Función para comprobar si una sección está visible en la pantalla
    function checkVisibility() {
        const scrollPosition = window.scrollY + window.innerHeight; // Posición actual del scroll + altura de la ventana
        sections.forEach(section => {
            // Si la sección está en la pantalla, añadimos la clase 'show'
            if (section.offsetTop + section.offsetHeight <= scrollPosition) {
                section.classList.add('show');
            }
        });
    }

    // Llamamos a la función al cargar la página y cada vez que el usuario hace scroll
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});

document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos todas las secciones con la clase 'education-section'
    const sections = document.querySelectorAll('.education-section');

    // Función para comprobar si una sección está visible en la pantalla
    function checkVisibility() {
        const scrollPosition = window.scrollY + window.innerHeight; // Posición actual del scroll + altura de la ventana
        sections.forEach(section => {
            // Si la sección está en la pantalla, añadimos la clase 'show'
            if (section.offsetTop + section.offsetHeight <= scrollPosition) {
                section.classList.add('show');
            }
        });
    }

    // Llamamos a la función al cargar la página y cada vez que el usuario hace scroll
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});

document.querySelector('.viewButton').addEventListener('click', function() {
    var imagenes = document.getElementById('imagenes');
    var span = this.querySelector('span');
    
    if (imagenes.style.display === "none" || imagenes.style.display === "") {
        imagenes.style.display = "block"; // Mostrar imágenes
        span.textContent = 'ver menos'; // Cambiar texto a "ver menos"
    } else {
        imagenes.style.display = "none"; // Ocultar imágenes
        span.textContent = 'ver más'; // Cambiar texto a "ver más"
    }
});

// Abre el modal con la imagen grande
function openModal(image) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
}

// Cierra el modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
