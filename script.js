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

  // --- Lightbox Code (Fixed to prevent errors on Contact Page) ---
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close-btn");
  const galleryImages = document.querySelectorAll(".gallery-img");

  // Only run lightbox logic if the lightbox actually exists on this page
  if (lightbox) {
    galleryImages.forEach((image) => {
      image.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
      });
    });

    // Check if close button exists before adding listener
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
      });
    }

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  }

  // --- Success Modal Code ---
  const successModal = document.getElementById("success-modal");
  const successCloseBtn = document.querySelector(".close-success");
  const successOkBtn = document.getElementById("success-ok-btn");

  // Check URL parameters for 'success=1'
  const urlParams = new URLSearchParams(window.location.search);

  // We add '&& successModal' to ensure we don't run this on pages without the modal
  if (successModal && urlParams.get("success") === "1") {
    successModal.style.display = "flex";

    // Clean up the URL so the popup doesn't appear on refresh
    const newUrl = window.location.pathname;
    window.history.replaceState({}, document.title, newUrl);
  } else if (successModal && urlParams.get("success") === "0") {
    alert("There was an error sending your message. Please try again.");
  }

  // Function to close modal
  const closeSuccessModal = () => {
    if (successModal) successModal.style.display = "none";
  };

  // Event Listeners for closing
  if (successCloseBtn) {
      successCloseBtn.addEventListener("click", closeSuccessModal);
  }
  
  if (successOkBtn) {
      successOkBtn.addEventListener("click", closeSuccessModal);
  }

  if (successModal) {
    window.addEventListener("click", (e) => {
      if (e.target === successModal) {
        closeSuccessModal();
      }
    });
  }
});