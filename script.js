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

// Scroll Animasyon Gözlemcisi
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // Görünür olduğunda sınıfı ekle
    }
    // Eğer yukarı çıkınca animasyonun tekrar etmesini istersen else bloğunu açabilirsin
    // else {
    //   entry.target.classList.remove('show');
    // }
  });
});

// .hidden sınıfına sahip tüm elementleri seç ve gözlemle
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));