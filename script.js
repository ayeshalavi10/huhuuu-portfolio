// 1. Dashboard Tab Visibility Toggle Engine
function switchTab(targetTabId) {
    // Hide all view cards
    const currentCards = document.querySelectorAll('.showcase-card');
    currentCards.forEach(card => {
        card.classList.remove('active-view');
    });

    // Remove active markers from nav items
    const currentButtons = document.querySelectorAll('.nav-item');
    currentButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Display target active card panel
    const activeTargetCard = document.getElementById(targetTabId);
    if (activeTargetCard) {
        activeTargetCard.classList.add('active-view');
    }

    // Assign active color styling to clicked tab button
    const actionMatchButton = Array.from(currentButtons).find(btn => 
        btn.getAttribute('onclick').includes(targetTabId)
    );
    if (actionMatchButton) {
        actionMatchButton.classList.add('active');
    }
}

// 2. Interactive Lightbox Engine Logic
const lightboxModal = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

function openLightbox(element) {
    // Locate the inner image element inside the clicked container box
    const targetImg = element.querySelector('img');
    
    if (targetImg) {
        lightboxModal.style.display = 'flex';
        lightboxImg.src = targetImg.src;
        lightboxCaption.textContent = targetImg.alt;
    }
}

function closeLightbox() {
    lightboxModal.style.display = 'none';
    lightboxImg.src = '';
    lightboxCaption.textContent = '';
}

// Optional: Allow exiting the lightbox viewer modal by hitting the 'Escape' key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && lightboxModal.style.display === 'flex') {
        closeLightbox();
    }
});
