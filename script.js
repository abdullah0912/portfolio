function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Footer yılını otomatik güncelle
document.getElementById("year").textContent = new Date().getFullYear();