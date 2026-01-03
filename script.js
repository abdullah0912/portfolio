// --- PROJE DETAYLARI VERİTABANI ---
const projectsData = {
    "webhr": {
        en: { title: "WebHR Clone", desc: "A cloud-based HR management interface.", tech: ["HTML", "CSS", "JS"], link: "#" },
        tr: { title: "WebHR Clone", desc: "Bulut tabanlı İK yönetim arayüzü.", tech: ["HTML", "CSS", "JS"], link: "#" }
    },
    "ai-object": {
        en: { title: "AI Object Detection", desc: "Real-time object detection with Python.", tech: ["Python", "OpenCV"], link: "#" },
        tr: { title: "Yapay Zeka Nesne Algılama", desc: "Python ile gerçek zamanlı nesne algılama.", tech: ["Python", "OpenCV"], link: "#" }
    },
    "arduino": {
        en: { title: "Arduino Home Automation", desc: "Smart home prototype controlling lights.", tech: ["C++", "Arduino"], link: "#" },
        tr: { title: "Arduino Ev Otomasyonu", desc: "Işıkları kontrol eden akıllı ev prototipi.", tech: ["C++", "Arduino"], link: "#" }
    },
    "portfolio": {
        en: { title: "Personal Portfolio", desc: "Responsive bilingual portfolio website.", tech: ["HTML5", "CSS3"], link: "#" },
        tr: { title: "Kişisel Portfolyo", desc: "Responsive ve çift dilli portfolyo sitesi.", tech: ["HTML5", "CSS3"], link: "#" }
    },
    "smart-ag": {
        en: { title: "Smart Agriculture", desc: "IoT based soil moisture tracking.", tech: ["IoT", "Sensors"], link: "#" },
        tr: { title: "Akıllı Tarım", desc: "IoT tabanlı toprak nem takibi.", tech: ["IoT", "Sensörler"], link: "#" }
    },
    "voice-ai": {
        en: { title: "Voice Assistant AI", desc: "Desktop voice assistant.", tech: ["Python", "AI"], link: "#" },
        tr: { title: "Sesli Asistan AI", desc: "Masaüstü sesli asistan.", tech: ["Python", "AI"], link: "#" }
    }
};

// --- BLOG VERİTABANI (TEK VE MERKEZİ) ---
// Not: Resim yollarının (images/...) klasöründe olduğundan emin ol.
const blogPosts = {
    1: {
        image: "images/embedded.jpg",
        en: { date: "29 Dec 2025", title: "Intro to Embedded Systems", content: "<p>Embedded systems are the hidden heroes...</p><h3>1. Microcontrollers</h3><p>Arduino is great for start...</p>" },
        tr: { date: "29 Aralık 2025", title: "Embedded Systems'a Giriş", content: "<p>Gömülü sistemler gizli kahramanlardır...</p><h3>1. Mikrodenetleyiciler</h3><p>Başlangıç için Arduino harikadır...</p>" }
    },
    2: {
        image: "images/blue-ocean.jpg",
        en: { date: "15 Dec 2025", title: "Blue Ocean Strategy in Tech", content: "<p>Create a new market instead of competing...</p>" },
        tr: { date: "15 Aralık 2025", title: "Yazılımda Blue Ocean Stratejisi", content: "<p>Rekabet etmek yerine yeni pazar oluşturun...</p>" }
    },
    3: {
        image: "images/embedded.jpg", // Test için aynı resmi kullandım
        en: { date: "10 Dec 2025", title: "Microcontrollers 101", content: "<p>Basics of MCU...</p>" },
        tr: { date: "10 Aralık 2025", title: "Mikrodenetleyiciler 101", content: "<p>MCU temelleri...</p>" }
    },
    4: {
        image: "images/blue-ocean.jpg",
        en: { date: "05 Dec 2025", title: "Future of AI", content: "<p>Where is AI going?</p>" },
        tr: { date: "05 Aralık 2025", title: "Yapay Zekanın Geleceği", content: "<p>YZ nereye gidiyor?</p>" }
    },
    5: {
        image: "images/embedded.jpg",
        en: { date: "01 Dec 2025", title: "IoT Protocols", content: "<p>MQTT, HTTP and more...</p>" },
        tr: { date: "01 Aralık 2025", title: "IoT Protokolleri", content: "<p>MQTT, HTTP ve dahası...</p>" }
    }
};

// --- ÇEVİRİLER ---
const translations = {
    tr: {
        "nav-about": "Hakkımda", "nav-projects": "Projeler", "nav-blog": "Blog", "nav-contact": "İletişim", "nav-skills": "Yetenekler",
        "hero-title": "Selam👋<br>Ben Abdullah⚡", "hero-subtitle": "Kod Yazarım & <span class='gradient-text'>Dinlenirim 🍿</span>",
        "hero-desc": "İstanbul Üniversitesi Bilgisayar Programcılığı öğrencisi. Odak noktam Yapay Zeka ve Gömülü Sistemler.",
        "hero-btn": "Bana Ulaşın", "btn-cv": "CV İndir",
        "about-title": "HAKKIMDA", "explore": "KEŞFET",
        "about-text-1": "Mantık ve yaratıcılık arasındaki dengede ilerleyen tutkulu bir geliştiriciyim.",
        "about-text-2": "Karmaşık problemleri çözmek en büyük motivasyonum.",
        "skills-title": "TEKNOLOJİLER", "skills-sub": "YETENEK SETİM",
        "skill-cat-1": "Uygulama Geliştirme", "skill-cat-2": "Veri, AI & Gömülü",
        "projects-title": "PROJELER", "works": "ÇALIŞMALARIM",
        "recent-posts": "SON YAZILAR",
        "rights": "Tüm hakları saklıdır.", "go-back": "&larr; Geri Dön",
        "view-all": "Tüm Yazıları Gör", "back-home": "Ana Sayfaya Dön", "check-others": "Diğer Yazılara Göz At",
        "read-more": "Devamını Oku &rarr;", "thanks-reading": "Okuduğunuz için teşekkürler.",
        "proj-1-desc": "KOBİ'ler için bulut tabanlı İK yazılımı.", "proj-2-desc": "Webcam nesne algılama sistemi.",
        "proj-3-desc": "Gömülü sistemler ev otomasyonu.", "proj-4-desc": "Kişisel web sitesi.",
        "proj-5-desc": "IoT akıllı tarım sistemi.", "proj-6-desc": "Python sesli asistan.",
        "blog-1-title": "Embedded Systems'a Giriş", "blog-1-desc": "Gömülü sistemlere başlarken dikkat edilmesi gerekenler.",
        "blog-2-title": "Yazılımda Blue Ocean Stratejisi", "blog-2-desc": "Kendi pazarınızı nasıl oluşturursunuz?",
        "date-1": "29 Aralık 2025", "date-2": "15 Aralık 2025",
        "other-posts": "Diğer Yazılar"
    },
    en: {
        "nav-about": "About Me", "nav-projects": "Projects", "nav-blog": "Blog", "nav-contact": "Contact", "nav-skills": "Skills",
        "hero-title": "Hi👋<br>I'm Abdullah⚡", "hero-subtitle": "I do Code & <span class='gradient-text'>Chill 🍿</span>",
        "hero-desc": "Computer Programming student at Istanbul University. Focus: AI & Embedded Systems.",
        "hero-btn": "Contact Me", "btn-cv": "Download CV",
        "about-title": "ABOUT ME", "explore": "EXPLORE NOW",
        "about-text-1": "Passionate software engineer thriving on logic and creativity.",
        "about-text-2": "Solving complex problems is my motivation.",
        "skills-title": "TECH STACK", "skills-sub": "MY ARSENAL",
        "skill-cat-1": "App Development Stack", "skill-cat-2": "DB, AI & Embedded Stack",
        "projects-title": "PROJECTS", "works": "MY WORKS",
        "recent-posts": "RECENT POSTS",
        "rights": "All rights reserved.", "go-back": "&larr; Go Back",
        "view-all": "View All Posts", "back-home": "Back to Home", "check-others": "Check Other Posts",
        "read-more": "Read More &rarr;", "thanks-reading": "Thanks for reading.",
        "proj-1-desc": "Cloud-based HR software interface.", "proj-2-desc": "Object detection via webcam.",
        "proj-3-desc": "Home automation with embedded systems.", "proj-4-desc": "Personal website.",
        "proj-5-desc": "IoT smart agriculture system.", "proj-6-desc": "Python voice assistant.",
        "blog-1-title": "Intro to Embedded Systems", "blog-1-desc": "Stepping into the embedded world.",
        "blog-2-title": "Blue Ocean Strategy in Tech", "blog-2-desc": "Creating your own market.",
        "date-1": "29 Dec 2025", "date-2": "15 Dec 2025",
        "other-posts": "Other Posts"
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
            location.reload(); // Dil değişince sayfayı yenile (Kartlar yeniden çizilsin)
        });
    }

    // 2. Mobil Menü
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            hamburger.innerHTML = navLinks.classList.contains("active") ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    // 3. Proje Detay Sayfası
    if (window.location.pathname.includes("proje-detay.html")) {
        const params = new URLSearchParams(window.location.search);
        const projId = params.get("id");
        const container = document.getElementById("project-container");

        if (projId && projectsData[projId]) {
            const data = projectsData[projId][currentLang];
            const tagsHtml = data.tech.map(t => `<span class="tag">${t}</span>`).join(" ");
            container.innerHTML = `
                <div class="proj-header">
                    <h1 class="proj-title">${data.title}</h1>
                    <div class="tech-tags">${tagsHtml}</div>
                </div>
                <img src="images/project-placeholder.jpg" class="proj-img" onerror="this.src='https://via.placeholder.com/800x400?text=Project+Preview'">
                <div class="proj-content">
                    <p>${data.desc}</p>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div class="proj-links">
                    <a href="${data.link}" class="btn-white"><i class="fab fa-github"></i> GitHub</a>
                </div>
            `;
        } else {
            container.innerHTML = "<h2>Project not found.</h2><a href='index.html' class='btn-outline'>Go Home</a>";
        }
    }

    // 4. Blog Detay Sayfası (DÜZELTİLEN KISIM)
    if (window.location.pathname.includes("blog-detay.html")) {
        const params = new URLSearchParams(window.location.search);
        const postId = params.get("id");

        // HATA BURADAYDI: 'post' tanımlanmadan kullanılıyordu.
        const post = blogPosts[postId];

        if (post) {
            // Ana Yazıyı Doldur
            const contentData = post[currentLang] || post['en'];

            document.getElementById("post-title").innerText = contentData.title;
            document.getElementById("post-date").innerText = contentData.date;
            document.getElementById("post-body").innerHTML = contentData.content;

            const imgEl = document.getElementById("post-image");
            if (post.image) {
                imgEl.src = post.image;
                imgEl.style.display = 'block';
            } else {
                imgEl.style.display = 'none';
            }

            // Loading'i gizle, içeriği göster
            document.getElementById("loading").style.display = "none";
            document.getElementById("blog-content").style.display = "block";

            // "Diğer Yazılar" Kısmını Doldur
            const otherContainer = document.getElementById("other-posts-container");
            if (otherContainer) {
                otherContainer.innerHTML = "";
                let count = 0;
                const maxPosts = 4; // 4 Tane kart

                Object.keys(blogPosts).forEach(key => {
                    // Şu anki yazı hariç ve limit dolmadıysa ekle
                    if (key !== postId && count < maxPosts) {
                        const otherPost = blogPosts[key];
                        const otherData = otherPost[currentLang] || otherPost['en'];
                        const imgSrc = otherPost.image ? otherPost.image : 'https://via.placeholder.com/500x250?text=No+Image';

                        const cardHTML = `
                            <a href="blog-detay.html?id=${key}" class="blog-card">
                                <img src="${imgSrc}" alt="${otherData.title}" class="blog-image">
                                <div class="blog-content">
                                    <span class="blog-date">${otherData.date}</span>
                                    <h3>${otherData.title}</h3>
                                    <span class="read-more">${translations[currentLang]["read-more"]}</span>
                                </div>
                            </a>
                        `;
                        otherContainer.innerHTML += cardHTML;
                        count++;
                    }
                });
            }
        } else {
            document.getElementById("loading").innerText = "Post not found.";
        }
    }

    // 5. Yıl Güncelleme
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

// --- DİL UYGULAMA ---
function applyLanguage(lang) {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// --- GÜVENLİK ---
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
    if (e.key === "F12" || (e.ctrlKey && (e.key === 'u' || e.key === 'U'))) e.preventDefault();
});