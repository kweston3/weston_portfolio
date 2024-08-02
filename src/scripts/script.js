document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contact-modal");
  const openModalBtn = document.querySelector(".header-content .open-modal");
  const closeBtn = document.querySelector(".modal .close-btn");
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;
  const navbarToggle = document.getElementById("navbar-toggle");
  const navbarMenu = document.getElementById("navbar-menu");

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
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default link behavior
      body.classList.toggle("dark-mode");
      const toggleSwitch = darkModeToggle.querySelector(".toggle-switch");
      toggleSwitch.classList.toggle("active");
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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const thankYouMessage = document.getElementById("thank-you");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      form.style.display = "none";
      thankYouMessage.style.display = "block";
    } catch (error) {
      alert("There was a problem with the submission. Please try again.");
    }
  });
});
