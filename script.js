function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// --- DİL DEĞİŞTİRME KODLARI ---

// Çevirilerin listesi
const translations = {
  en: {
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hello: "Hello, I'm",
    job_title: "Software Developer",
    download_cv: "Download CV",
    contact_info: "Contact Info",
    // Profesyonel uzun metin
    about_text: "Currently pursuing rigorous Computer Programming studies at Istanbul University, I am actively evolving into a full-spectrum software engineer with a strong foundation in algorithms and system architecture. My technical focus is centred at the intersection of advanced methodologies: I am delving deeply into Artificial Intelligence, moving beyond theory to practical applications of Machine Learning models and Neural Networks, while simultaneously engineering robust embedded systems through low-level programming and real-time IoT protocol integration. I complement this with fluency in modern software development life cycles, including cloud-native technologies and containerization. Driven by the high-impact potential of the startup ecosystem, my objective is to leverage this multidisciplinary technical expertise to architect highly scalable, computationally efficient, and disruptive technology solutions capable of solving complex real-world challenges."
  },
  tr: {
    nav_about: "Hakkımda",
    nav_experience: "Deneyim",
    nav_projects: "Projeler",
    nav_contact: "İletişim",
    hello: "Merhaba, Ben",
    job_title: "Yazılım Geliştirici",
    download_cv: "CV İndir",
    contact_info: "İletişim Bilgisi",
    // Profesyonel metnin Türkçe çevirisi
    about_text: "İstanbul Üniversitesi'nde Bilgisayar Programcılığı eğitimime titizlikle devam ederken, algoritmalar ve sistem mimarisi konusunda güçlü bir temele sahip, çok yönlü bir yazılım mühendisine dönüşüyorum. Teknik odağım ileri metodolojilerin kesişim noktasındadır: Yapay Zeka konusunu derinlemesine inceliyor, teorinin ötesine geçerek Makine Öğrenimi modelleri ve Sinir Ağlarının pratik uygulamalarına odaklanıyorum. Aynı zamanda, düşük seviyeli programlama ve gerçek zamanlı IoT protokol entegrasyonu yoluyla sağlam gömülü sistemler tasarlıyorum. Bu yetkinliklerimi, bulut tabanlı teknolojiler ve konteynerizasyon dahil olmak üzere modern yazılım geliştirme yaşam döngülerine olan hakimiyetimle tamamlıyorum. Girişim ekosisteminin yüksek etki potansiyelinden güç alarak hedefim; karmaşık gerçek dünya sorunlarını çözebilecek, yüksek ölçeklenebilirliğe sahip, hesaplama açısından verimli ve yıkıcı teknoloji çözümleri tasarlamak için bu çok disiplinli teknik uzmanlığımı kullanmaktır."
  }
};

let currentLang = "en"; // Varsayılan dil İngilizce

function toggleLanguage() {
  // 1. Dili değiştir (EN ise TR yap, TR ise EN yap)
  if (currentLang === "en") {
    currentLang = "tr";
  } else {
    currentLang = "en";
  }

  // 2. Butonların üzerindeki yazıyı güncelle (Tüm .language-switch class'lı elemanları bul)
  const buttons = document.querySelectorAll(".language-switch");
  buttons.forEach(btn => {
    // Eğer dil TR olduysa butonda '🇬🇧 EN' yazsın ki geri dönülebilsin
    if (currentLang === "tr") {
      btn.textContent = "🇬🇧 EN"; 
    } else {
      btn.textContent = "🇹🇷 TR";
    }
  });

  // 3. Sayfadaki yazıları güncelle
  // data-translate etiketine sahip tüm elementleri bul
  const elements = document.querySelectorAll("[data-translate]");
  
  elements.forEach((element) => {
    // Elementin üzerindeki etiketi oku (örn: 'nav_about')
    const key = element.getAttribute("data-translate");
    
    // Eğer bu etiket bizim listemizde varsa, metni değiştir
    if (translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });
}