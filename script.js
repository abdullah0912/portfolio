// --- PROJE DETAYLARI VERİTABANI ---
const projectsData = {
    "webhr": {
        en: {
            title: "WebHR Clone",
            desc: "A cloud-based Human Resources management interface designed for SMEs. Features include employee tracking, payroll management simulations, and leave requests.",
            tech: ["HTML/CSS", "JavaScript", "SQL"],
            link: "#"
        },
        tr: {
            title: "WebHR Clone",
            desc: "KOBİ'ler için tasarlanmış bulut tabanlı bir İnsan Kaynakları yönetim arayüzü. Personel takibi, maaş yönetimi simülasyonları ve izin talepleri özelliklerini içerir.",
            tech: ["HTML/CSS", "JavaScript", "SQL"],
            link: "#"
        }
    },
    "ai-object": {
        en: {
            title: "AI Object Detection",
            desc: "Real-time object detection system using Python and OpenCV. It can identify common objects through a webcam feed with high accuracy.",
            tech: ["Python", "OpenCV", "YOLO"],
            link: "#"
        },
        tr: {
            title: "Yapay Zeka Nesne Algılama",
            desc: "Python ve OpenCV kullanılarak geliştirilmiş gerçek zamanlı nesne algılama sistemi. Web kamerası üzerinden yaygın nesneleri yüksek doğrulukla tanımlayabilir.",
            tech: ["Python", "OpenCV", "YOLO"],
            link: "#"
        }
    },
    "arduino": {
        en: {
            title: "Arduino Home Automation",
            desc: "A smart home prototype controlling lights and temperature sensors via Arduino. Integrated with a mobile app for remote control.",
            tech: ["C++", "Arduino", "IoT", "Bluetooth"],
            link: "#"
        },
        tr: {
            title: "Arduino Ev Otomasyonu",
            desc: "Arduino üzerinden ışık ve sıcaklık sensörlerini kontrol eden akıllı ev prototipi. Uzaktan kontrol için mobil uygulama ile entegre edilmiştir.",
            tech: ["C++", "Arduino", "IoT", "Bluetooth"],
            link: "#"
        }
    },
    "portfolio": {
        en: {
            title: "Personal Portfolio",
            desc: "A fully responsive, bilingual portfolio website built with modern HTML5, CSS3, and JavaScript. Features a dark mode aesthetic and dynamic content loading.",
            tech: ["HTML5", "CSS3", "JavaScript", "Grid Layout"],
            link: "#"
        },
        tr: {
            title: "Kişisel Portfolyo",
            desc: "Modern HTML5, CSS3 ve JavaScript ile oluşturulmuş tam responsive, çift dilli portfolyo sitesi. Karanlık mod estetiği ve dinamik içerik yükleme özelliklerine sahiptir.",
            tech: ["HTML5", "CSS3", "JavaScript", "Grid Layout"],
            link: "#"
        }
    },
    "smart-ag": {
        en: {
            title: "Smart Agriculture System",
            desc: "IoT based soil moisture tracking system. Automatically triggers irrigation when moisture levels drop below a threshold.",
            tech: ["IoT", "Sensors", "C", "Data Analysis"],
            link: "#"
        },
        tr: {
            title: "Akıllı Tarım Sistemi",
            desc: "IoT tabanlı toprak nem takip sistemi. Nem seviyeleri belirli bir eşiğin altına düştüğünde sulamayı otomatik olarak tetikler.",
            tech: ["IoT", "Sensörler", "C", "Veri Analizi"],
            link: "#"
        }
    },
    "voice-ai": {
        en: {
            title: "Voice Assistant AI",
            desc: "A desktop voice assistant capable of opening apps, searching the web, and answering basic questions using Python libraries.",
            tech: ["Python", "SpeechRecognition", "Automation"],
            link: "#"
        },
        tr: {
            title: "Sesli Asistan AI",
            desc: "Uygulamaları açabilen, web araması yapabilen ve temel soruları yanıtlayabilen masaüstü sesli asistanı. Python kütüphaneleri kullanılarak geliştirildi.",
            tech: ["Python", "SpeechRecognition", "Otomasyon"],
            link: "#"
        }
    }
};

// --- BLOG VERİTABANI ---
const blogPosts = {
    1: {
        image: "images/blog1.jpg",
        en: {
            date: "29 Dec 2025",
            title: "Intro to Embedded Systems",
            content: `
                <p>Embedded systems are the hidden heroes of modern technology. From smartwatches to car braking systems, they are everywhere. So how do you step into this world?</p>
                <h3>1. Microcontroller Selection</h3>
                <p>Arduino is a great option for beginners, but for professional work, you need to look at STM32 or ESP32. These boards offer more processing power and RTOS capabilities.</p>
                <h3>2. Importance of C</h3>
                <p>The main language of embedded systems is C. It is essential for direct hardware access and memory optimization.</p>
            `
        },
        tr: {
            date: "29 Aralık 2025",
            title: "Embedded Systems'a Giriş: Başlangıç Rehberi",
            content: `
                <p>Gömülü sistemler (Embedded Systems), modern teknolojinin gizli kahramanlarıdır. Kullandığımız akıllı saatlerden, arabamızdaki fren sistemine kadar her yerde bulunurlar.</p>
                <h3>1. Mikrodenetleyici Seçimi</h3>
                <p>Başlangıç için Arduino harika bir seçenektir ancak profesyonel dünyaya adım atmak istiyorsanız STM32 veya ESP32 gibi daha güçlü işlemcilere yönelmeniz gerekir.</p>
                <h3>2. C Dilinin Önemi</h3>
                <p>Gömülü sistemlerin ana dili C'dir. Donanıma doğrudan erişim sağlamak ve bellek yönetimini optimize etmek için C dili vazgeçilmezdir.</p>
            `
        }
    },
    2: {
        en: {
            date: "15 Dec 2025",
            title: "Blue Ocean Strategy in Tech",
            content: `
                <p>Is it possible to create a "Blue Ocean" (new market) instead of drowning in the "Red Ocean" of competition?</p>
                <h3>Differentiation and Cost</h3>
                <p>Instead of building another Todo App, building a niche tool for specific problems puts you ahead. Innovation aims to change the value proposition, not just the technology.</p>
            `
        },
        tr: {
            date: "15 Aralık 2025",
            title: "Yazılım Dünyasında Blue Ocean Stratejisi",
            content: `
                <p>Rekabetin kıyasıya olduğu "Kızıl Okyanus"ta boğulmak yerine, yeni bir pazar, yani "Mavi Okyanus" yaratmak mümkün mü?</p>
                <h3>Farklılaşma ve Maliyet</h3>
                <p>Herkesin yaptığı bir Todo App yerine, niş bir uygulama geliştirmek sizi öne geçirir. İnovasyon sadece teknolojiyi değil, değer önerisini de değiştirmeyi hedefler.</p>
            `
        }
    }
};

// --- ÇEVİRİLER ---
const translations = {
    tr: {
        "nav-about": "Hakkımda", "nav-projects": "Projeler", "nav-blog": "Blog", "nav-contact": "İletişim", "nav-skills": "Yetenekler",
        "hero-title": "Selam👋<br>Ben Abdullah⚡", "hero-subtitle": "Kod Yazarım & <span class='gradient-text'>Dinlenirim 🍿</span>",
        "hero-desc": "İstanbul Üniversitesi Bilgisayar Programcılığı öğrencisi olarak, tam donanımlı bir yazılım mühendisi olma yolunda ilerliyorum. Odak noktam Yapay Zeka ve Gömülü Sistemler.",
        "hero-btn": "Bana Ulaşın", "btn-cv": "CV İndir",
        "about-title": "HAKKIMDA", "explore": "KEŞFET",
        "about-text-1": "Yazılım dünyasında mantık ve yaratıcılık arasındaki dengede ilerleyen tutkulu bir geliştiriciyim.",
        "about-text-2": "Karmaşık problemleri çözmek en büyük motivasyonum.",
        "skills-title": "TEKNOLOJİLER", "skills-sub": "YETENEK SETİM",
        "skill-cat-1": "Uygulama Geliştirme", "skill-cat-2": "Veri, AI & Gömülü",
        "projects-title": "PROJELER", "works": "ÇALIŞMALARIM",
        "recent-posts": "SON YAZILAR",
        "rights": "Tüm hakları saklıdır.", "go-back": "&larr; Geri Dön",
        "view-all": "Tüm Yazıları Gör", "back-home": "Ana Sayfaya Dön", "check-others": "Diğer Yazılara Göz At",
        "read-more": "Devamını Oku &rarr;", "thanks-reading": "Okuduğunuz için teşekkürler.",
        "proj-1-desc": "KOBİ'ler için bulut tabanlı İK yazılımı arayüzü.",
        "proj-2-desc": "Webcam üzerinden nesne algılama sistemi.",
        "proj-3-desc": "Gömülü sistemler ile ev otomasyonu projesi.",
        "proj-4-desc": "Modern ve responsive kişisel web sitesi.",
        "proj-5-desc": "IoT tabanlı akıllı tarım takip sistemi.",
        "proj-6-desc": "Python tabanlı sesli asistan uygulaması.",
        "blog-1-title": "Embedded Systems'a Giriş", "blog-1-desc": "Gömülü sistemler dünyasına adım atarken nelere dikkat etmeliyiz?",
        "blog-2-title": "Yazılımda Blue Ocean Stratejisi", "blog-2-desc": "Rekabetten sıyrılıp kendi pazarınızı nasıl oluşturursunuz?",
        "date-1": "29 Aralık 2025", "date-2": "15 Aralık 2025"
    },
    en: {
        "nav-about": "About Me", "nav-projects": "Projects", "nav-blog": "Blog", "nav-contact": "Contact", "nav-skills": "Skills",
        "hero-title": "Hi👋<br>I'm Abdullah⚡", "hero-subtitle": "I do Code & <span class='gradient-text'>Chill 🍿</span>",
        "hero-desc": "Currently pursuing Computer Programming at Istanbul University, I am evolving into a full-spectrum software engineer. Focus: AI & Embedded Systems.",
        "hero-btn": "Contact Me", "btn-cv": "Download CV",
        "about-title": "ABOUT ME", "explore": "EXPLORE NOW",
        "about-text-1": "As a passionate software engineer, I thrive on the intricate dance between logic and creativity.",
        "about-text-2": "Solving complex problems is my biggest motivation.",
        "skills-title": "TECH STACK", "skills-sub": "MY ARSENAL",
        "skill-cat-1": "App Development Stack", "skill-cat-2": "DB, AI & Embedded Stack",
        "projects-title": "PROJECTS", "works": "MY WORKS",
        "recent-posts": "RECENT POSTS",
        "rights": "All rights reserved.", "go-back": "&larr; Go Back",
        "view-all": "View All Posts", "back-home": "Back to Home", "check-others": "Check Other Posts",
        "read-more": "Read More &rarr;", "thanks-reading": "Thanks for reading.",
        "proj-1-desc": "Cloud-based HR software interface for SMEs.",
        "proj-2-desc": "Object detection system via webcam.",
        "proj-3-desc": "Home automation project with embedded systems.",
        "proj-4-desc": "Modern and responsive personal website.",
        "proj-5-desc": "IoT-based smart agriculture tracking system.",
        "proj-6-desc": "Python-based voice assistant application.",
        "blog-1-title": "Intro to Embedded Systems", "blog-1-desc": "What to consider when stepping into the embedded world?",
        "blog-2-title": "Blue Ocean Strategy in Tech", "blog-2-desc": "How to escape competition and create your own market?",
        "date-1": "29 Dec 2025", "date-2": "15 Dec 2025"
    }
};

// --- ANA FONKSİYONLAR ---
document.addEventListener("DOMContentLoaded", () => {
    // 1. Dil Yönetimi
    let currentLang = localStorage.getItem('siteLang') || (navigator.language.startsWith('tr') ? 'tr' : 'en');
    applyLanguage(currentLang);

    const langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            currentLang = currentLang === 'tr' ? 'en' : 'tr';
            localStorage.setItem('siteLang', currentLang);
            applyLanguage(currentLang);
        });
    }

    // 2. Mobil Menü (Hamburger)
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            hamburger.innerHTML = navLinks.classList.contains("active") ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Linke tıklayınca menüyü kapat
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    // 3. Proje Detay Sayfası Doldurma
    if (window.location.pathname.includes("proje-detay.html")) {
        const params = new URLSearchParams(window.location.search);
        const projId = params.get("id");
        const container = document.getElementById("project-container");

        if (projId && projectsData[projId]) {
            const data = projectsData[projId][currentLang];
            const imgPath = "images/project-placeholder.jpg";

            let tagsHtml = data.tech.map(t => `<span class="tag">${t}</span>`).join(" ");

            container.innerHTML = `
                <div class="proj-header">
                    <h1 class="proj-title">${data.title}</h1>
                    <div class="tech-tags">${tagsHtml}</div>
                </div>
                <img src="${imgPath}" class="proj-img" onerror="this.src='https://via.placeholder.com/800x400?text=Project+Preview'">
                <div class="proj-content">
                    <p>${data.desc}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="proj-links">
                    <a href="${data.link}" class="btn-white"><i class="fab fa-github"></i> GitHub</a>
                    <a href="#" class="btn-outline">Live Demo</a>
                </div>
            `;
        } else {
            container.innerHTML = "<h2>Project not found.</h2><a href='index.html' class='btn-outline'>Go Home</a>";
        }
    }

    // 4. Blog Detay Sayfası Doldurma
    if (window.location.pathname.includes("blog-detay.html")) {
        const params = new URLSearchParams(window.location.search);
        const postId = params.get("id");
        const post = blogPosts[postId];

        if (post) {
            const contentData = post[currentLang] || post['en'];
            const titleEl = document.getElementById("post-title");
            const dateEl = document.getElementById("post-date");
            const bodyEl = document.getElementById("post-body");
            const imgEl = document.getElementById("post-image");
            const loadingEl = document.getElementById("loading");
            const contentEl = document.getElementById("blog-content");

            if (titleEl) titleEl.innerText = contentData.title;
            if (dateEl) dateEl.innerText = contentData.date;
            if (bodyEl) bodyEl.innerHTML = contentData.content;

            if (post.image && imgEl) {
                imgEl.src = post.image;
            } else if (imgEl) {
                imgEl.style.display = 'none';
            }

            if (loadingEl) loadingEl.style.display = "none";
            if (contentEl) contentEl.style.display = "block";
        }
    }

    // 5. Tarih Güncelleme
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

// --- DİL UYGULAMA FONKSİYONU ---
function applyLanguage(lang) {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}