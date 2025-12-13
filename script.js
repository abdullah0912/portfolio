function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Footer yılını otomatik güncelle
document.getElementById("year").textContent = new Date().getFullYear();

// Henüz linki olmayan projeler için uyarı
function showProjectAlert() {
  alert("Project details are currently being updated. Please check the Github repo!");
}

// Intersection Observer: Animasyon Tetikleyici
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-element');
    }
  });
});

// Animasyon uygulanacak tüm elemanları seç
const hiddenElements = document.querySelectorAll('.hidden-element, .hidden-left, .hidden-right');
hiddenElements.forEach((el) => observer.observe(el));