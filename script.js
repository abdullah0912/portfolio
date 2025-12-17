// Mobilde menüyü açıp kapatan fonksiyon
function toggleMenu() {
  // 'menu-links' sınıfına sahip elementi (açılır menüyü) seç
  const menu = document.querySelector(".menu-links");
  // 'hamburger-icon' sınıfına sahip elementi (menü ikonunu) seç
  const icon = document.querySelector(".hamburger-icon");

  // Menüye 'open' sınıfını ekle veya çıkar (Aç/Kapa)
  menu.classList.toggle("open");
  // İkona 'open' sınıfını ekle veya çıkar (Çizgiden X'e dönüşüm)
  icon.classList.toggle("open");
}

// Footer kısmındaki yılı otomatik olarak güncel yıla ayarlar (Örn: 2024, 2025)
document.getElementById("year").textContent = new Date().getFullYear();

// Proje butonlarına tıklandığında kullanıcıya gösterilen uyarı mesajı
function showProjectAlert() {
  alert("Proje detayları güncellenmektedir. Kodları Github'da inceleyebilirsiniz!");
}

// Görünürlük Gözlemcisi (Intersection Observer)
// Sayfa kaydırıldığında elemanların ekrana girişini algılar
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Eğer eleman ekranda görünür hale geldiyse:
    if (entry.isIntersecting) {
      // Ona 'show' sınıfını ekle (CSS'teki animasyonu tetikler)
      entry.target.classList.add('show');
    }
  });
});

// Sayfada 'hidden' sınıfına sahip tüm elemanları seç
const hiddenElements = document.querySelectorAll('.hidden');
// Her bir gizli elemanı gözlemciye kaydet
hiddenElements.forEach((el) => observer.observe(el));