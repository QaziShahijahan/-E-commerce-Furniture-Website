// Get references to the burger button and the menu
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

// Add a click event listener to the burger button
burger.addEventListener("click", () => {
  // Toggle the "active" class on the burger button
  burger.classList.toggle("active");

  // Toggle the "active" class on the menu
  navLinks.parentElement.classList.toggle("active");
});

// Close the menu when clicking outside of it
document.addEventListener("click", (event) => {
    const isClickInsideMenu = navLinks.contains(event.target) || burger.contains(event.target);
    if (!isClickInsideMenu && navLinks.parentElement.classList.contains("active")) {
      navLinks.parentElement.classList.remove("active");
      burger.classList.remove("active");
    }
  });