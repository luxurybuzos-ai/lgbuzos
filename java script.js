// Número de contacto de WhatsApp de LG BUZOS
const whatsappPhone = "573107707763"; 

// TOGGLE DEL MENÚ HAMBURGUESA EN MÓVILES
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

function closeMobileMenu() {
    if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
}

// ABRIR VENTANA MODAL INTERACTIVA CON DESCRIPCIÓN
function openModal(imageSrc, title, description) {
    const modal = document.getElementById('detailModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDescription');
    const wsBtn = document.getElementById('whatsappBtn');

    modalImg.src = imageSrc;
    modalTitle.innerText = title;
    modalDesc.innerText = description;
    
    // Generar mensaje dinámico a WhatsApp según el buzo seleccionado
    const customMessage = encodeURIComponent(`Hola LG BUZOS, quiero más información sobre el ${title}`);
    wsBtn.href = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${customMessage}`;
    
    modal.style.display = 'flex';
}

// CERRAR MODAL
function closeModal() {
    const modal = document.getElementById('detailModal');
    modal.style.display = 'none';
}

// CERRAR AL HACER CLIC FUERA DE LA VENTANA
window.onclick = function(event) {
    const modal = document.getElementById('detailModal');
    if (event.target === modal) {
        closeModal();
    }
}

// CONTADOR DE VISITAS PERSISTENTE CON LOCALSTORAGE
function initVisitorCounter() {
    let visits = localStorage.getItem('pageVisits');
    
    if (!visits) {
        visits = 1250; // Número de partida inicial
    } else {
        visits = parseInt(visits) + 1;
    }
    
    localStorage.setItem('pageVisits', visits);
    
    const visitElement = document.getElementById('visitCount');
    if (visitElement) {
        visitElement.innerText = visits.toLocaleString();
    }
}

document.addEventListener('DOMContentLoaded', initVisitorCounter);