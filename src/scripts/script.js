document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contact-modal");
  const openModalBtn = document.querySelector(".header-content .open-modal");
  const closeBtn = document.querySelector(".modal .close-btn");
  const darkModeLogo = document.getElementById("dark-mode-logo");
  const body = document.body;
  const navbarToggle = document.getElementById("navbar-toggle");
  const navbarMenu = document.getElementById("navbar-menu");

  // Log elements to check if they are correctly selected
  console.log({
    modal,
    openModalBtn,
    closeBtn,
    darkModeLogo,
    navbarToggle,
    navbarMenu,
  });

  // Show the modal
  if (openModalBtn) {
    openModalBtn.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior
      if (modal) {
        modal.style.display = "block";
      }
    });
  }

  // Close the modal
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      if (modal) {
        modal.style.display = "none";
      }
    });
  }

  // Close the modal if the user clicks outside of it
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Toggle dark mode
  if (darkModeLogo) {
    darkModeLogo.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default link behavior
      body.classList.toggle("dark-mode");
    });
  }

  // Toggle navbar menu
  if (navbarToggle) {
    navbarToggle.addEventListener("click", () => {
      if (navbarMenu) {
        navbarMenu.classList.toggle("active");
      }
    });
  }
});
