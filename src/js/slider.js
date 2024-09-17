let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.list');
let sliderItems = sliderList.querySelectorAll('.item');
let totalSlides = sliderItems.length;
let contactSection = document.getElementById('contact');

let navLinks = {
    home: document.getElementById('home-link'),
    about: document.getElementById('about-link'),
    portfolio: document.getElementById('portfolio-link'),
    services: document.getElementById('services-link'),
    contact: document.getElementById('contact-link')
};

let currentIndex = 0;

function updateActiveLink() {
    // Remover las clases activas de todos los enlaces
    Object.values(navLinks).forEach(link => link.classList.remove('active'));

    // Aplicar clase activa en función del índice actual
    if (currentIndex === totalSlides) {
        navLinks.contact.classList.add('active'); // Sección de Contacto
    } else if (currentIndex === totalSlides - 1) {
        navLinks.services.classList.add('active'); // Sección de Servicios
    } 
    else if (currentIndex === totalSlides - 1) {
        navLinks.contact.classList.add('active'); // Sección de Servicios
    }else {
        Object.values(navLinks)[currentIndex].classList.add('active');
    }
}

function showContactSection() {
    const contactSection = document.getElementById('contact');
    
    // Comprobar si ya está visible antes de mostrar
    if (contactSection.style.display === 'none' || contactSection.style.display === '') {
        contactSection.style.display = 'block';  // Asegurar que sea visible
        setTimeout(() => {
            contactSection.classList.add('show');
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    } else {
        // Si ya está visible, solo hacer scroll
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function hideContactSection() {
    const contactSection = document.getElementById('contact');
    contactSection.classList.remove('show');
    setTimeout(() => {
        contactSection.style.display = 'none'; // Ocultar después de la animación
    }, 500);
}

function moveSliderToIndex(index) {
    if (index === totalSlides) {
        // Si es el índice de Contacto, hacer scroll hacia abajo
        // contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // currentIndex = totalSlides; // Mantener el índice en Contacto
        // Mostrar la sección de contacto al llegar al final del slider
        showContactSection();
        if (contactSection.style.display === 'none' || contactSection.style.display === '') {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        currentIndex = totalSlides; // Asegurar que el índice sea de la sección de Contacto
    } else {
        // Asegurarse de que el contacto esté oculto al salir
        hideContactSection();
        currentIndex = index;
        sliderList.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    updateActiveLink();
}

// function moveSlider(direction) {
//     if (direction === 'next') {
//         if (currentIndex < totalSlides - 1) {
//             currentIndex++; // Avanzar al siguiente ítem
//         } else if (currentIndex === totalSlides - 1) {
//             // Mostrar Contacto al llegar a Servicios
//             contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//             currentIndex = totalSlides; // Índice de Contacto
//         } else if (currentIndex === totalSlides) {
//             // Volver a Home después de Contacto
//             currentIndex = 0;
//             sliderList.style.transform = `translateX(0%)`; // Ir al primer ítem (Home)
//         }
//     } else { // Manejamos el botón 'prev'
//         if (currentIndex === 0) {
//             // Retroceder a Contacto si estamos en Home
//             currentIndex = totalSlides; // Ir a Contacto desde Home
//             contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         } else if (currentIndex > 0) {
//             currentIndex--; // Retroceder un ítem
//             sliderList.style.transform = `translateX(-${currentIndex * 100}%)`;
//         }
//     }

//     if (currentIndex < totalSlides) {
//         sliderList.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }

//     updateActiveLink();
// }

// Event listeners para botones 'next' y 'prev'
function moveSlider(direction) {
    if (direction === 'next') {
        if (currentIndex < totalSlides - 1) {
            currentIndex++; // Avanzar al siguiente ítem
        } else if (currentIndex === totalSlides - 1) {
            // Mostrar Contacto al llegar a Servicios
            showContactSection(); // Mostrar la sección
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Realizar scroll
            currentIndex = totalSlides; // Índice de Contacto
        } else if (currentIndex === totalSlides) {
            // Volver a Home después de Contacto
            currentIndex = 0;
            sliderList.style.transform = `translateX(0%)`; // Ir al primer ítem (Home)
        }
    } else { // Manejamos el botón 'prev'
        if (currentIndex === 0) {
            // Retroceder a Contacto si estamos en Home
            currentIndex = totalSlides; // Ir a Contacto desde Home
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (currentIndex > 0) {
            currentIndex--; // Retroceder un ítem
            sliderList.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }

    if (currentIndex < totalSlides) {
        sliderList.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    updateActiveLink();
}
nextBtn.addEventListener('click', () => {
    moveSlider('next');
});

prevBtn.addEventListener('click', () => {
    moveSlider('prev');
});

// Event listener para enlaces de navegación
Object.values(navLinks).forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        let targetIndex = parseInt(link.getAttribute('data-index'));

        if (link === navLinks.contact) {
            // Si es el índice de Contacto
            // contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // currentIndex = totalSlides; // Dejar el slider en "Contacto"
            showContactSection(); // Mostrar la sección con animación   
        } else {
            moveSliderToIndex(targetIndex);
        }
    });
});
// Función para detectar el scroll
function handleScroll() {
    const scrollPosition = window.scrollY; // Obtener la posición actual del scroll
  
    // Si el scroll es mayor a un cierto valor, agrandamos el slider
    if (scrollPosition > 100) {
      slider.classList.add('expanded');
    } else {
      slider.classList.remove('expanded');
    }
  }
  
  // Escuchar el evento de scroll en la ventana
  window.addEventListener('scroll', handleScroll);

// Marcar el enlace activo al cargar la página
updateActiveLink();
