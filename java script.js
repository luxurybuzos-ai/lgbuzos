// Número de contacto de WhatsApp para LG BUZOS
const whatsappPhone = "573107707763"; 

// Abrir ventana modal interactiva con datos del producto
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

// Cerrar la ventana modal
function closeModal() {
    const modal = document.getElementById('detailModal');
    modal.style.display = 'none';
}

// Cerrar al hacer clic fuera del cuadro de la modal
window.onclick = function(event) {
    const modal = document.getElementById('detailModal');
    if (event.target === modal) {
        closeModal();
    }
}

// CONTADOR DE VISITAS PERSISTENTE EN LOCALSTORAGE
function initVisitorCounter() {
    let visits = localStorage.getItem('pageVisits');
    
    if (!visits) {
        visits = 1250; // Número base inicial
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