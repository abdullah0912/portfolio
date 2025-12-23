// Mobilde menüyü açıp kapatan fonksiyon
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Yıl güncelleme
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Proje uyarısı
function showProjectAlert() {
  alert("Proje detayları güncellenmektedir. Kodları Github'da inceleyebilirsiniz!");
}

// Görünürlük Gözlemcisi (SCROLL REVEAL - YÜKLENME EFEKTİ)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Sadece ekrana girdiğinde 'show' class'ı ekle, çıkınca silme (tek seferlik animasyon için else'i silebilirsin ama tekrar tekrar oynaması için böyle bırakıldı)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// ==========================================
// YENİ: SLIDER KAYDIRMA FONKSİYONU (SAĞ/SOL BUTONLAR)
// ==========================================
function scrollSlider(sliderId, direction) {
  const slider = document.getElementById(sliderId);
  const scrollAmount = 350; // Kart genişliği + boşluk kadar kaydır

  if (direction === 'left') {
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}


// ==========================================
// BLOG ABONELİK SİSTEMİ (En Basit Yöntem)
// ==========================================
function handleSubscribe(event) {
  event.preventDefault(); // Sayfanın yenilenmesini engelle

  const emailInput = document.getElementById('subs-email');
  const container = document.getElementById('subscription-box');
  const submitBtn = document.querySelector('.sub-btn');

  // Email alanı boş mu kontrolü
  if (!emailInput || emailInput.value === "") {
    alert("Lütfen geçerli bir e-mail adresi giriniz.");
    return;
  }

  // 1. Butona basıldığını göster (Kullanıcı anlasın)
  const originalBtnText = submitBtn.innerText;
  submitBtn.innerText = "İşleniyor...";
  submitBtn.disabled = true;

  // 2. FormSubmit servisine senin mailine göndermesi için istek atıyoruz
  // Senin mail adresin kodun içine gömüldü: abdullahkasgar2494@gmail.com
  fetch("https://formsubmit.co/ajax/abdullahkasgar2494@gmail.com", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      email: emailInput.value,
      message: "Yeni bir kişi blog bültenine abone olmak istiyor!"
    })
  })
    .then(response => response.json())
    .then(data => {
      // 3. Başarılı olursa ekrana o güzel mesajı basıyoruz
      container.innerHTML = `
            <div style="text-align:center; color: var(--primary-dark); animation: float 1s ease-in-out;">
                <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">✔ Abonelik Başarılı!</h3>
                <p style="color: var(--text-gray);">
                    Teşekkürler! Bültenimize kaydınız alındı.
                </p>
            </div>
        `;
    })
    .catch(error => {
      console.log(error);
      alert("Bir hata oluştu. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.");
      submitBtn.innerText = originalBtnText;
      submitBtn.disabled = false;
    });
}