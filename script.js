document.addEventListener('DOMContentLoaded', () => {
    // --- Existing Hamburger Menu Code ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

    // --- New Lightbox Code ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    
    // Select all images with the class 'gallery-img'
    const galleryImages = document.querySelectorAll('.gallery-img');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'flex'; // Show the modal
            lightboxImg.src = image.src;     // Set the modal image source to the clicked image
            lightboxImg.alt = image.alt;     // Set alt text for accessibility
        });
    });

    // Close the lightbox when the 'X' is clicked
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Close the lightbox if the user clicks outside the image (on the dark background)
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});