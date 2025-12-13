function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Footer yılını otomatik güncelle
document.getElementById("year").textContent = new Date().getFullYear();

function showProjectAlert() {
  alert("Proje detayları güncellenmektedir. Kodları Github'da inceleyebilirsiniz!");
}

/* --- script.js EN ALTINA EKLE --- */

// Intersection Observer: Eleman ekrana girince animasyonu başlatır
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-element'); // Görünür yap
    } else {
      // Eğer yukarı çıkınca tekrar kaybolsun istersen bu satırı aç:
      // entry.target.classList.remove('show-element'); 
    }
  });
});

// HTML'de animasyon vermek istediğin tüm elemanları seç
const hiddenElements = document.querySelectorAll('.hidden-element, .hidden-left, .hidden-right');
hiddenElements.forEach((el) => observer.observe(el));