// ========== DOKUMENTUM BETÖLTÉSE ESEMÉNY ==========
document.addEventListener('DOMContentLoaded', function() {
    // Inicializálás
    initCursorEffect();
    initScrollEffects();
    initAnimations();
    initCounters();
    initROICalculator();
    initCaseStudySlider();
    initTestimonialSlider();
    initMobileMenu();
    
    // A nyelvválasztó eseménykezelők beállítása
    setupLanguageSwitcher();
});

// ========== EGÉRKURZOR EFFEKT ==========
function initCursorEffect() {
    const cursor = document.querySelector('.cursor-follow');
    
    // Csak asztali eszközökön alkalmazzuk az egér kurzor effektust
    if (window.innerWidth > 992) {
        cursor.style.display = 'block';
        
        // Egérmozgás követése
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
        });
        
        // Parallax effekt a hero kártyán
        const heroCard = document.querySelector('.hero-visual-card');
        if (heroCard) {
            document.addEventListener('mousemove', (e) => {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                
                heroCard.style.transform = `perspective(1000px) rotateY(${-5 + x * 10}deg) rotateX(${5 - y * 10}deg)`;
            });
        }
    }
}

// ========== GÖRGETÉS EFFEKTEK ==========
function initScrollEffects() {
    // Fejléc változása görgetéskor
    const header = document.getElementById('header');
    const scrollThreshold = 50;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
    
    // Simított görgetés a belső linkekhez
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Mobilmenü bezárása, ha nyitva van
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    document.querySelector('.hamburger-menu').classList.remove('active');
                }
            }
        });
    });
    
    // AOS (Animate On Scroll) szerű funkcionalitás
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('[data-aos]');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.85) {
                element.classList.add('aos-animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Első betöltéskor is lefuttatjuk
}

// ========== ANIMÁCIÓK ==========
function initAnimations() {
    // Belépési animációk a hero szekcióhoz
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-actions, .hero-badges, .hero-stats');
    
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100 + (index * 200));
    });
    
    // Hero vizualizáció animáció
    const heroVisual = document.querySelector('.hero-visual-wrapper');
    if (heroVisual) {
        heroVisual.style.opacity = '0';
        heroVisual.style.transform = 'translateX(30px)';
        
        setTimeout(() => {
            heroVisual.style.transition = 'all 1s ease';
            heroVisual.style.opacity = '1';
            heroVisual.style.transform = 'translateX(0)';
        }, 800);
    }
    
    // Lebegő kártyák belépési animációja
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.8s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 1000 + (index * 300));
    });
}

// ========== SZÁMLÁLÓK ==========
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 50; // Animáció sebessége (alacsonyabb = gyorsabb)
    
    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const inc = target / (1000 / speed);
        
        const updateCount = () => {
            if (count < target) {
                count += inc;
                counter.innerText = Math.floor(count);
                setTimeout(updateCount, speed);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCount();
    };
    
    // Observer beállítása, hogy csak akkor induljon a számláló, amikor láthatóvá válik
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// ========== ROI KALKULÁTOR ==========
function initROICalculator() {
    const calculateBtn = document.getElementById('calc-button');
    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateROI);
    }
    
    // Alapértelmezett értékek beállítása a demóhoz
    preloadCalculatorValues();
}

function preloadCalculatorValues() {
    // Előtöltött értékek a kalkulátorhoz
    document.getElementById('monthly-spend').value = '1000';
    document.getElementById('current-conversions').value = '50';
    document.getElementById('avg-order-value').value = '75';
    document.getElementById('profit-margin').value = '30';
}

function calculateROI() {
    // Bemeneti értékek lekérése
    const monthlySpend = parseFloat(document.getElementById('monthly-spend').value) || 1000;
    const currentConversions = parseFloat(document.getElementById('current-conversions').value) || 50;
    const avgOrderValue = parseFloat(document.getElementById('avg-order-value').value) || 75;
    const profitMargin = parseFloat(document.getElementById('profit-margin').value) || 30;
    
    // Performance Max javulási arány (átlagos becslés)
    const conversionImprovement = 1.75; // 75% jobb konverzió
    
    // Eredmények kiszámítása
    const expectedConversions = Math.round(currentConversions * conversionImprovement);
    const expectedRevenue = Math.round(expectedConversions * avgOrderValue);
    const expectedProfit = Math.round((expectedRevenue * (profitMargin / 100)) - monthlySpend);
    const expectedROI = Math.round((expectedProfit / monthlySpend) * 100);
    const growthPercentage = Math.round((expectedConversions - currentConversions) / currentConversions * 100);
    
    // Eredmények megjelenítése
    document.getElementById('result-conversions').textContent = expectedConversions;
    document.getElementById('result-revenue').textContent = expectedRevenue.toLocaleString();
    document.getElementById('result-profit').textContent = expectedProfit.toLocaleString();
    document.getElementById('result-roi').textContent = expectedROI;
    document.getElementById('result-growth-percentage').textContent = growthPercentage;
    
    // Eredmények megjelenítése
    const resultsContainer = document.getElementById('calculator-results');
    resultsContainer.classList.add('show');
    
    // Gördítés az eredményekhez
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ========== ESETTANULMÁNY SLIDER ==========
function initCaseStudySlider() {
    const caseStudyCards = document.querySelectorAll('.case-study-card');
    const caseNavBtns = document.querySelectorAll('.case-nav-btn');
    
    if (caseNavBtns.length > 0) {
        caseNavBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.getAttribute('data-index'));
                showCaseStudy(index);
            });
        });
    }
    
    // Automatikus váltás beállítása
    let caseStudyIndex = 0;
    
    function showCaseStudy(index) {
        // Minden kártya elrejtése
        caseStudyCards.forEach(card => {
            card.classList.remove('active');
        });
        
        // Minden gomb deaktiválása
        caseNavBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Aktív kártya és gomb beállítása
        caseStudyCards[index].classList.add('active');
        caseNavBtns[index].classList.add('active');
        
        caseStudyIndex = index;
    }
    
    // Automatikus váltás
    let caseStudyInterval = setInterval(() => {
        caseStudyIndex = (caseStudyIndex + 1) % caseStudyCards.length;
        showCaseStudy(caseStudyIndex);
    }, 8000);
    
    // Az intervallum leállítása, ha a felhasználó manuálisan vált
    caseNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            clearInterval(caseStudyInterval);
            caseStudyInterval = setInterval(() => {
                caseStudyIndex = (caseStudyIndex + 1) % caseStudyCards.length;
                showCaseStudy(caseStudyIndex);
            }, 8000);
        });
    });
}

// ========== VÉLEMÉNYEK SLIDER ==========
function initTestimonialSlider() {
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    
    if (testimonialDots.length > 0) {
        testimonialDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                showTestimonial(index);
            });
        });
    }
    
    // Automatikus váltás beállítása
    let testimonialIndex = 0;
    
    function showTestimonial(index) {
        // Minden slide elrejtése
        testimonialSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Minden pont deaktiválása
        testimonialDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Aktív slide és pont beállítása
        testimonialSlides[index].classList.add('active');
        testimonialDots[index].classList.add('active');
        
        testimonialIndex = index;
    }
    
    // Automatikus váltás
    let testimonialInterval = setInterval(() => {
        testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
        showTestimonial(testimonialIndex);
    }, 10000);
    
    // Az intervallum leállítása, ha a felhasználó manuálisan vált
    testimonialDots.forEach(dot => {
        dot.addEventListener('click', () => {
            clearInterval(testimonialInterval);
            testimonialInterval = setInterval(() => {
                testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
                showTestimonial(testimonialIndex);
            }, 10000);
        });
    });
}

// ========== MOBIL MENÜ ==========
function initMobileMenu() {
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Bezárás a linkekre kattintva
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburgerBtn.classList.remove('active');
            }
        });
    });
    
    // Bezárás a dokumentumra kattintva
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !e.target.closest('.nav-menu') && 
            !e.target.closest('.hamburger-menu')) {
            navMenu.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        }
    });
}

// ========== NYELVVÁLTÓ RENDSZER ==========
function setupLanguageSwitcher() {
    const languageBtns = document.querySelectorAll('.language-btn');
    
    if (languageBtns.length > 0) {
        languageBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                changeLanguage(lang);
                
                // Deaktiváljuk az összes nyelvi gombot
                languageBtns.forEach(b => b.classList.remove('active'));
                
                // Aktiváljuk a kiválasztott nyelv gombját
                btn.classList.add('active');
            });
        });
    }
}

// Nyelv váltása
function changeLanguage(lang) {
    // Beállítjuk a html lang attribútumát
    document.documentElement.lang = lang;
    
    // Frissítjük a szöveges elemeket a fordítások alapján
    if (translations && translations[lang]) {
        Object.keys(translations[lang]).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = translations[lang][id];
            }
        });
    }
    
    // Űrlap címkék frissítése
    updateFormLabels(lang);
    
    // Mentjük a kiválasztott nyelvet a localStorage-ba
    localStorage.setItem('preferredLanguage', lang);
}

// Űrlap címkék frissítése (ezek nincsenek a translations objektumban)
function updateFormLabels(lang) {
    const formLabels = {
        'hu': {
            'name': 'Név',
            'email': 'Email',
            'phone': 'Telefonszám',
            'company': 'Cég neve',
            'message': 'Üzenet'
        },
        'en': {
            'name': 'Name',
            'email': 'Email',
            'phone': 'Phone',
            'company': 'Company',
            'message': 'Message'
        },
        'de': {
            'name': 'Name',
            'email': 'E-Mail',
            'phone': 'Telefonnummer',
            'company': 'Firma',
            'message': 'Nachricht'
        },
        'fr': {
            'name': 'Nom',
            'email': 'Email',
            'phone': 'Téléphone',
            'company': 'Société',
            'message': 'Message'
        },
        'es': {
            'name': 'Nombre',
            'email': 'Correo electrónico',
            'phone': 'Teléfono',
            'company': 'Empresa',
            'message': 'Mensaje'
        },
        'it': {
            'name': 'Nome',
            'email': 'Email',
            'phone': 'Telefono',
            'company': 'Azienda',
            'message': 'Messaggio'
        },
        'ru': {
            'name': 'Имя',
            'email': 'Эл. почта',
            'phone': 'Телефон',
            'company': 'Компания',
            'message': 'Сообщение'
        },
        'pl': {
            'name': 'Imię',
            'email': 'Email',
            'phone': 'Telefon',
            'company': 'Firma',
            'message': 'Wiadomość'
        },
        'ja': {
            'name': '名前',
            'email': 'メール',
            'phone': '電話番号',
            'company': '会社名',
            'message': 'メッセージ'
        },
        'zh': {
            'name': '姓名',
            'email': '电子邮箱',
            'phone': '电话',
            'company': '公司',
            'message': '留言'
        }
    };
    
    // Ha van fordítás az adott nyelvhez
    if (formLabels[lang]) {
        document.querySelectorAll('.contact-form label').forEach(label => {
            const forAttr = label.getAttribute('for');
            if (formLabels[lang][forAttr]) {
                label.textContent = formLabels[lang][forAttr];
            }
        });
    }
}

// Mentett nyelvi beállítás ellenőrzése és alkalmazása
function loadSavedLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        // Alkalmazzuk a mentett nyelvet
        changeLanguage(savedLanguage);
        
        // Aktiváljuk a megfelelő nyelvi gombot
        const langBtn = document.querySelector(`.language-btn[data-lang="${savedLanguage}"]`);
        if (langBtn) {
            document.querySelectorAll('.language-btn').forEach(btn => btn.classList.remove('active'));
            langBtn.classList.add('active');
        }
    }
}

// Kontaktform eseménykezelő
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Itt lenne az AJAX küldés az igazi implementációban
            alert('Köszönjük üzenetét! Hamarosan felvesszük Önnel a kapcsolatot.');
            contactForm.reset();
        });
    }
    
    // Mentett nyelvi beállítás betöltése
    loadSavedLanguage();
});