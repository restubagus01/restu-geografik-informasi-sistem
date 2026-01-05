function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}
// Toggle mobile menu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

// Toggle dropdown
document.addEventListener("DOMContentLoaded", function() {
  const dropdown = document.querySelector(".dropdown");
  const dropbtn = dropdown.querySelector(".dropbtn");

  dropbtn.addEventListener("click", function(e) {
    e.preventDefault();
    dropdown.classList.toggle("show");
  });

  // Tutup dropdown kalau klik di luar
  window.addEventListener("click", function(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });
});
