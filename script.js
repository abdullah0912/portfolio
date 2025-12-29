// --- BLOG YAZILARI VERİTABANI (Çift Dilli ve Tarihli) ---
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
    },
    3: {
        en: {
            date: "10 Dec 2025",
            title: "C Language and Pointers",
            content: `
                <p>Pointers are often the hardest topic for C beginners. But once understood, they become a powerful weapon.</p>
                <h3>Address and Value</h3>
                <p>A variable is stored at an address in RAM. A pointer is a variable that holds that address. Understanding <code>*ptr</code> and <code>&var</code> is key to efficient coding.</p>
            `
        },
        tr: {
            date: "10 Aralık 2025",
            title: "C Dili ve Pointerlar: Belleğin Derinlikleri",
            content: `
                <p>Pointerlar (işaretçiler), C programlamaya yeni başlayanların en çok zorlandığı konudur. Ancak bir kez anlaşıldığında, sistemin en güçlü silahına dönüşür.</p>
                <h3>Adres ve Değer</h3>
                <p>Bir değişken RAM'de bir adreste tutulur. Pointer ise bu adresin kendisini tutan bir değişkendir. Bu konsepti anlamak verimli kod yazmanın anahtarıdır.</p>
            `
        }
    },
    4: {
        en: {
            date: "1 Dec 2025",
            title: "My Web Dev Journey: HTML & CSS",
            content: `
                <p>Coming from a backend and embedded background, Frontend seemed complex initially.</p>
                <h3>Flexbox vs Grid</h3>
                <p>Flexbox is great for 1D layouts, while Grid excels at 2D. Using Grid for this portfolio ensured a fully responsive experience.</p>
            `
        },
        tr: {
            date: "1 Aralık 2025",
            title: "Web Geliştirme Yolculuğum: HTML & CSS",
            content: `
                <p>Backend ve Gömülü sistemlerden gelen biri olarak Frontend dünyası başlangıçta karmaşık geliyordu.</p>
                <h3>Flexbox vs Grid</h3>
                <p>Flexbox tek boyutlu, Grid ise iki boyutlu hizalamalar için mükemmel. Bu portfolyo sitesini tasarlarken Grid yapısını kullanarak tam responsive bir deneyim elde ettim.</p>
            `
        }
    },
    5: {
        en: {
            date: "25 Nov 2025",
            title: "What is IoT?",
            content: "<p>IoT connects physical objects to the internet. Protocols like MQTT and HTTP are essential for low-power communication.</p>"
        },
        tr: {
            date: "25 Kasım 2025",
            title: "Nesnelerin İnterneti (IoT) Nedir?",
            content: "<p>IoT, fiziksel nesnelerin internete bağlanarak veri alışverişi yapmasını sağlayan teknolojidir. MQTT gibi protokoller çok önemlidir.</p>"
        }
    },
    6: {
        en: {
            date: "18 Nov 2025",
            title: "AI and Computer Vision",
            content: "<p>Computer Vision transforms images into data. Using Python and OpenCV, facial recognition projects are accessible.</p>"
        },
        tr: {
            date: "18 Kasım 2025",
            title: "Yapay Zeka ve Görüntü İşleme",
            content: "<p>Bilgisayarlı görü, görüntüleri veriye dönüştürür. Python ve OpenCV kullanarak yüz tanıma gibi projeler geliştirmek erişilebilirdir.</p>"
        }
    },
    7: {
        en: {
            date: "10 Nov 2025",
            title: "Microservices Architecture",
            content: "<p>Moving from Monolithic to Microservices ensures scalability and ease of maintenance.</p>"
        },
        tr: {
            date: "10 Kasım 2025",
            title: "Mikroservis Mimarisi",
            content: "<p>Monolitik yapıdan Mikroservis yapısına geçiş, ölçeklenebilirlik ve bakım kolaylığı sağlar.</p>"
        }
    },
    8: {
        en: {
            date: "1 Nov 2025",
            title: "Clean Code Principles",
            content: "<p>Code is written for humans too. Variable naming should clearly state intent.</p>"
        },
        tr: {
            date: "1 Kasım 2025",
            title: "Clean Code Prensipleri",
            content: "<p>Kod sadece bilgisayarlar için değil, insanlar için de yazılır. İsimlendirme niyeti açıkça belirtmelidir.</p>"
        }
    }
};

// --- TÜRKÇE ÇEVİRİLERİ (İngilizce Varsayılan Olduğu İçin Sadece TR Gerekli) ---
const translations = {
    tr: {
        "nav-about": "Hakkımda", "nav-blog": "Blog", "nav-contact": "İletişim",
        "hero-subtitle": "Kod Yazarım & <span class='gradient-text'>Dinlenirim 🍿</span>",
        "hero-desc": "Gömülü Sistemler ve Yapay Zeka odaklı, şık ve işlevsel çözümler üretmeye kendini adamış tutkulu bir Yazılım Mühendisi.",
        "hero-btn": "Bana Ulaşın", "about-title": "HAKKIMDA", "explore": "KEŞFET",
        "about-text-1": "Yazılım dünyasında mantık ve yaratıcılık arasındaki dengede ilerleyen tutkulu bir geliştiriciyim.",
        "about-text-2": "Karmaşık problemleri çözmek en büyük motivasyonum.",
        "projects-title": "PROJELER", "works": "ÇALIŞMALARIM", "recent-posts": "SON YAZILAR",

        // Blog Başlıkları ve Özetleri
        "blog-1-title": "Embedded Systems'a Giriş", "blog-1-desc": "Gömülü sistemler dünyasına adım atarken nelere dikkat etmeliyiz?",
        "blog-2-title": "Yazılımda Blue Ocean Stratejisi", "blog-2-desc": "Rekabetten sıyrılıp kendi pazarınızı nasıl oluşturursunuz?",
        "blog-3-title": "C Dili ve Pointerlar", "blog-3-desc": "Bellek yönetimi ve pointer mantığını anlamak üzerine notlar?",
        "blog-4-title": "Web Geliştirme Yolculuğum", "blog-4-desc": "HTML ve CSS öğrenirken karşılaştığım zorluklar.",
        "blog-5-title": "Nesnelerin İnterneti (IoT) Nedir?", "blog-5-desc": "IoT teknolojilerinin geleceği ve kullanım alanları hakkında inceleme.",
        "blog-6-title": "Yapay Zeka ve Görüntü İşleme", "blog-6-desc": "OpenCV kütüphanesi ile görüntü işleme temelleri.",
        "blog-7-title": "Mikroservis Mimarisi", "blog-7-desc": "Monolitik yapıdan mikroservislere geçiş süreci.",
        "blog-8-title": "Clean Code Prensipleri", "blog-8-desc": "Daha okunabilir ve sürdürülebilir kod yazmak için ipuçları.",

        // Blog Tarihleri (Statik kartlar için)
        "date-1": "29 Aralık 2025", "date-2": "15 Aralık 2025", "date-3": "10 Aralık 2025", "date-4": "1 Aralık 2025",
        "date-5": "25 Kasım 2025", "date-6": "18 Kasım 2025", "date-7": "10 Kasım 2025", "date-8": "1 Kasım 2025",

        // Proje Açıklamaları
        "proj-1-desc": "KOBİ'ler için bulut tabanlı İK yazılımı arayüzü.",
        "proj-2-desc": "Webcam üzerinden nesne algılama sistemi.",
        "proj-3-desc": "Gömülü sistemler ile ev otomasyonu projesi.",
        "proj-4-desc": "Modern ve responsive kişisel web sitesi.",
        "proj-5-desc": "IoT tabanlı akıllı tarım takip sistemi.",
        "proj-6-desc": "Python tabanlı sesli asistan uygulaması.",

        // Proje Detay Sayfası (YENİ)
        "construction-title": "PROJE YAPIM AŞAMASINDADIR",
        "construction-desc": "Bu projenin detayları üzerine şu anda çalışıyorum.<br>Yakında burada olacak.",

        "read-more": "Devamını Oku &rarr;", "view-all": "Tüm Yazıları Gör", "rights": "Tüm hakları saklıdır.",
        "more-coming": "Daha fazla içerik yakında eklenecektir.", "back-home": "Ana Sayfaya Dön",
        "go-back": "&larr; Geri Dön", "thanks-reading": "Okuduğunuz için teşekkürler.", "check-others": "Diğer Yazılara Göz At"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Dil Ayarları (Varsayılan EN, kullanıcı TR ise TR yap)
    const userLang = navigator.language || navigator.userLanguage;
    const lang = userLang.startsWith('tr') ? 'tr' : 'en';

    // Sadece kullanıcı Türk ise çeviri yap (çünkü HTML zaten İngilizce)
    if (lang === 'tr') {
        const elements = document.querySelectorAll("[data-lang]");
        elements.forEach(element => {
            const key = element.getAttribute("data-lang");
            if (translations['tr'][key]) {
                element.innerHTML = translations['tr'][key];
            }
        });
    }

    // 2. Blog Detay Sayfası Kontrolü
    if (window.location.pathname.includes("blog-detay.html")) {
        const params = new URLSearchParams(window.location.search);
        const postId = params.get("id");

        const post = blogPosts[postId];

        if (post) {
            // İlgili dildeki içeriği seç (post.tr veya post.en)
            const contentData = post[lang] || post['en'];

            document.getElementById("post-title").innerText = contentData.title;
            // Tarih artık dil objesinin içinde
            document.getElementById("post-date").innerText = contentData.date;
            document.getElementById("post-body").innerHTML = contentData.content;

            if (post.image) {
                document.getElementById("post-image").src = post.image;
            } else {
                document.getElementById("post-image").style.display = 'none';
            }

            document.getElementById("loading").style.display = "none";
            document.getElementById("blog-content").style.display = "block";
        } else {
            document.getElementById("loading").innerText = lang === 'tr' ? "Yazı bulunamadı." : "Post not found.";
        }
    }
});