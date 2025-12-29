document.addEventListener("DOMContentLoaded", () => {
  // --- Existing Hamburger Menu Code ---
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("toggle");
    });
  }

  // --- New Lightbox Code ---
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close-btn");

  // Select all images with the class 'gallery-img'
  const galleryImages = document.querySelectorAll(".gallery-img");

  galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      lightbox.style.display = "flex"; // Show the modal
      lightboxImg.src = image.src; // Set the modal image source to the clicked image
      lightboxImg.alt = image.alt; // Set alt text for accessibility
    });
  });

  // Close the lightbox when the 'X' is clicked
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Close the lightbox if the user clicks outside the image (on the dark background)
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
  // --- Success Modal Code ---
  const successModal = document.getElementById("success-modal");
  const successCloseBtn = document.querySelector(".close-success");
  const successOkBtn = document.getElementById("success-ok-btn");

  // Check URL parameters for 'success=1'
  const urlParams = new URLSearchParams(window.location.search);

  if (successModal && urlParams.get("success") === "1") {
    successModal.style.display = "flex";

    // Optional: Clean up the URL so the popup doesn't appear on refresh
    const newUrl = window.location.pathname;
    window.history.replaceState({}, document.title, newUrl);
  } else if (successModal && urlParams.get("success") === "0") {
    // Handle error case
    alert("There was an error sending your message. Please try again.");
  }

  // Function to close modal
  const closeSuccessModal = () => {
    if (successModal) successModal.style.display = "none";
  };

  // Event Listeners for closing
  if (successCloseBtn)
    successCloseBtn.addEventListener("click", closeSuccessModal);
  if (successOkBtn) successOkBtn.addEventListener("click", closeSuccessModal);

  if (successModal) {
    window.addEventListener("click", (e) => {
      if (e.target === successModal) {
        closeSuccessModal();
      }
    });
  }
});
