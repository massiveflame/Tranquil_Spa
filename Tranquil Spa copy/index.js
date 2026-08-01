// THERAPY DATABASE
const THERAPIES_DB = {
    aromatherapy: {
        title: "Aroma Therapy",
        duration: "60 Minutes",
        image: "https://tranquilinternationalspa.com/wp-content/uploads/2023/07/asds.jpg",
        description: "Welcome to Tranquil International Spa, your oasis of relaxation in the heart of Bengaluru. Our aromatherapy session is a holistic healing practice that utilizes pure essential plant oils to restore natural balance to the mind, body, and spirit.",
        technique: "Our skilled therapists blend premium botanical essences—ranging from calming lavender to revitalizing eucalyptus—specifically tailored to your preferences. The oils are gently massaged into the skin and dispersed via ambient diffusers, triggering positive olfactory and neurological responses.",
        benefits: [
            "Alleviates daily stress, chronic tension, and mild anxiety",
            "Promotes deeper sleep and balances emotional states",
            "Relieves physical discomforts such as minor headaches and muscle tightness",
            "Intensely nourishes and hydrates skin surfaces"
        ]
    },
    balinese: {
        title: "Balinese Therapy",
        duration: "60 - 90 Minutes",
        image: "https://tranquilinternationalspa.com/wp-content/uploads/2023/07/as4e.jpg",
        description: "Originating from the beautiful volcanic island of Bali, Indonesia, this therapeutic ritual combines acupressure, stretching, and aromatherapy to release muscle knots and restore vital energy flow.",
        technique: "Therapists apply traditional Indonesian techniques including gentle stretching, palm pressure, and rhythmic kneading. A customized blend of warm organic oils is used to improve circulation and stimulate deeper muscle layers.",
        benefits: [
            "Releases deep muscle tension, soreness, and physical stiffness",
            "Stimulates blood flow, boosting cell oxygenation",
            "Balances the body's natural energy flow (sen lines)",
            "Induces a profound sense of physical and mental tranquility"
        ]
    },
    bodyscrub: {
        title: "Body Scrub Therapy",
        duration: "45 - 60 Minutes",
        image: "https://tranquilinternationalspa.com/wp-content/uploads/2023/07/s4edff.jpg",
        description: "A restorative skin treatment designed to exfoliate, purify, and nourish the outer layers of the body, leaving a smooth and glowing complexion.",
        technique: "A coarse, natural scrub infused with ingredients like sea salt, organic sugar, coffee grounds, and therapeutic herbs is applied in gentle, rhythmic circular strokes across the body. The scrub is rinsed with warm mineral water and followed by a light moisturizing lotion.",
        benefits: [
            "Thoroughly exfoliates, removing dry skin cells and impurities",
            "Unclogs pores and promotes cellular renewal",
            "Improves blood circulation, smoothing skin texture",
            "Prepares skin cells for deeper absorption of massage oils"
        ]
    },
    deeptissue: {
        title: "Deep Tissue Therapy",
        duration: "60 - 90 Minutes",
        image: "https://tranquilinternationalspa.com/wp-content/uploads/2023/07/dfgh565r.jpg",
        description: "A highly therapeutic treatment targeting the deeper layers of muscle tissue and fascia, ideal for releasing chronic muscle tightness, physical strain, and fatigue.",
        technique: "Skilled practitioners utilize slow, deliberate strokes and firm, focused pressure using fingers, thumbs, forearms, and elbows. The depth of pressure is continuously adjusted to match each guest's comfort levels.",
        benefits: [
            "Effectively alleviates chronic back, neck, and shoulder soreness",
            "Breaks down muscle knots and reduces physical adhesions",
            "Improves range of motion, posture, and alignment",
            "Aids physical rehabilitation after intense athletic strain"
        ]
    },
    candle: {
        title: "Signature Candle Therapy",
        duration: "75 Minutes",
        image: "https://tranquilinternationalspa.com/wp-content/uploads/2023/07/354ergdf.jpg",
        description: "An exclusive, multi-sensory relaxation ritual that combines warm thermal therapy, nourishing skincare, and ambient aromatherapy.",
        technique: "Special therapeutic massage candles formulated with pure soy wax, rich shea butter, and essential oils are lit. Once melted, the warm cosmetic oil is poured over the body in smooth, flowing strokes and massaged into the skin, transferring soothing warmth deep into the muscle tissues.",
        benefits: [
            "Delivers deep, soothing thermal warmth to relieve tight muscles",
            "Shea butter provides intense moisturization and anti-aging skin care",
            "Slow, flowing strokes release tension and calm the nervous system",
            "Fragrant botanicals provide immediate sensory relaxation"
        ]
    },
    swedish: {
        title: "Swedish Therapy",
        duration: "60 - 90 Minutes",
        image: "https://tranquilinternationalspa.com/wp-content/uploads/2023/08/New-Project-2023-08-08T152225.898.png",
        description: "A classic European therapeutic massage designed to soothe the nervous system, release muscle tension, and induce total relaxation.",
        technique: "Therapists orchestrate five principal strokes: long gliding movements (effleurage), kneading (petrissage), friction, tapping (tapotement), and gentle stretching to target superficial muscle layers.",
        benefits: [
            "Soothes tension and stress, reducing cortisol levels",
            "Improves venous blood return and lymphatic drainage",
            "Enhances joint flexibility and eases minor muscle strain",
            "Boosts overall physical well-being and mental clarity"
        ]
    },
    thai: {
        title: "Thai Therapy",
        duration: "90 - 120 Minutes",
        image: "https://tranquilinternationalspa.com/wp-content/uploads/2023/07/sa65rtgdv.jpg",
        description: "An ancient healing art (Nuad Bo-Rarn) originating from Thailand that uses active stretching and deep breathing to restore vitality.",
        technique: "Practiced on a traditional floor mat. The recipient remains fully clothed in loose, comfortable garments provided by the spa. The therapist uses hands, palms, elbows, and feet to apply acupressure along energy paths (Sen lines) and guide the guest through yoga-like stretches.",
        benefits: [
            "Significantly increases body flexibility and joint mobility",
            "Alleviates deep muscular compression and tension",
            "Rebalances the body's natural energy flow, restoring vigor",
            "Combines physical relief with a calm, meditative state of mind"
        ]
    }
};

// TESTIMONIALS DATABASE
const TESTIMONIALS = [
    {
        quote: "After a long week of stress, I visited Tranquil International Spa, and it was an absolute delight! The Swedish therapy by their skilled therapist melted away all my tension, leaving me feeling refreshed and revitalized. The serene ambiance and professional service made it a truly unforgettable experience. I'll be back for more!",
        author: "Ananth, Bengaluru"
    },
    {
        quote: "Tranquil International Spa is my go-to place for ultimate relaxation. Their Signature Rope Therapy was a unique and rejuvenating experience. The therapist's gentle stretches eased my muscle tightness, and I felt like a new person after the session. I highly recommend this spa for anyone seeking a blissful escape.",
        author: "Manju, Udupi"
    },
    {
        quote: "I had the pleasure of trying their Aromatherapy treatment, and it was pure bliss. The scents and ambiance instantly transported me to a tranquil paradise. The therapist's expertise in essential oils made it a therapeutic and calming experience. Tranquil International Spa has won my heart, and I can't wait to return.",
        author: "Swathi, Vizag"
    },
    {
        quote: "Tranquil International Spa's Body Scrub Therapy was exceptional! The exfoliation left my skin feeling incredibly smooth and refreshed. The attention to detail and the therapist's caring approach made me feel pampered throughout the session. This spa is a hidden gem in Bangalore, and I'll be recommending it to all my friends.",
        author: "Venkat, Vijayawada"
    },
    {
        quote: "I recently experienced their Thai therapy, and it was unlike any other I've had before. The combination of acupressure and stretches worked wonders on my body, releasing tension and improving my flexibility. The knowledgeable staff and the peaceful environment made it an extraordinary escape from the daily grind.",
        author: "Tejesh Manda, Srikakulam"
    }
];

// BLOG DATABASE
const BLOG_DB = {
    secrets: {
        title: "The Secrets of Spa Bliss: A Journey to Tranquility",
        badge: "Self Care",
        readtime: "5 Mins Read",
        image: "https://tranquilinternationalspa.com/wp-content/uploads/2023/07/awe5ersd.png",
        content: `
            <p class="lead-text">In today's fast-paced world, finding moments of tranquility is more critical than ever. A trip to the spa is more than a simple pampering session; it is a therapeutic, soul-healing journey designed to rebalance life's chaotic energies.</p>
            
            <h4>The Soul-Healing Powers of Water & Warmth</h4>
            <p>Water and warmth have long been recognized for their therapeutic properties. Spas have harnessed these natural elements to soothe the nervous system, relax muscle fibers, and clear toxic buildup. Warm baths, steam chambers, and hot oil treatments dilate blood vessels, which in turn increases blood circulation and delivers vital nutrients and oxygen to fatigued tissues.</p>
            
            <h4>Mindful Presence & Mental Release</h4>
            <p>Beyond the physical benefits of thermal therapies, a spa visit acts as a digital detox. Unplugging from mobile screens and constant notifications allows the brain to enter an alpha-wave state—the mental state associated with meditation and creative flow. By focusing on sensory elements like botanical scents, soft acoustics, and the gentle touch of a therapist, we cultivate a restorative mindfulness that counteracts daily anxieties.</p>
            
            <h4>Building Lasting Wellness Rituals</h4>
            <p>To enjoy the benefits of spa relaxation, consistency is key. We recommend scheduling a dedicated wellness session at least once a month. This builds a healthy habit of physical care, stress reduction, and emotional resetting, ensuring you face life's daily challenges with renewed vigor.</p>
        `
    },
    beauty: {
        title: "Unraveling the Beauty Secrets of Spa Treatments",
        badge: "Natural Skincare",
        readtime: "4 Mins Read",
        image: "https://tranquilinternationalspa.com/wp-content/uploads/2023/07/354ergdf.jpg",
        content: `
            <p class="lead-text">Beyond superficial cosmetics lies a natural, time-tested approach to radiance. Explore the age-old beauty rituals where ancient natural wisdom and modern science converge to unlock the true essence of skin health.</p>
            
            <h4>The Power of Natural Exfoliation</h4>
            <p>Skin cells continuously regenerate, but dead cells can accumulate on the surface, causing dryness, rough texture, and clogged pores. Exfoliation treatments, such as body polish and salt scrubs, mechanically remove these dead layers. This sloughing process instantly reveals the smooth, radiant skin underneath, stimulates cell regeneration, and increases the efficacy of moisturizing lotions.</p>
            
            <h4>Deep Hydration & Botanical Extracts</h4>
            <p>Many traditional spa facial therapies rely heavily on raw botanical elements. Natural lipids such as coconut oil, jojoba, and shea butter closely mimic the skin's sebum. This allows them to deeply hydrate without clogging pores, creating a healthy protective barrier that locks in moisture and guards against environmental pollutants.</p>
            
            <h4>Improved Lymphatic Circulation</h4>
            <p>Facial and body massage therapies stimulate lymphatic drainage, which helps remove toxins and reduce fluid retention. The result is a natural face lift effect, reduced puffiness under the eyes, and a healthy, oxygenated glow that comes from improved microcirculation.</p>
        `
    },
    relaxation: {
        title: "Healing Hands & Magic Scents: The Art of Relaxation",
        badge: "Therapy Techniques",
        readtime: "6 Mins Read",
        image: "https://tranquilinternationalspa.com/wp-content/uploads/2023/07/as4e.jpg",
        content: `
            <p class="lead-text">Through the skilled touch of healing hands and the subtle release of botanical essential oils, modern massage sessions act as a transformative sanctuary to nurture the mind, body, and soul.</p>
            
            <h4>The Science of Tactile Therapy</h4>
            <p>Touch is one of our most fundamental sensory inputs. Professional massage therapy stimulates mechanoreceptors in the skin, which send calming signals to the central nervous system. This triggers the release of endorphins, serotonin, and dopamine—the body's natural pain relievers and mood elevators—while reducing stress hormones like cortisol.</p>
            
            <h4>Aromatherapy & Olfactory Pathways</h4>
            <p>Scent molecules from essential oils directly access the brain's limbic system, the region responsible for emotions, memory, and autonomic functions. Scenting a space with lavender can slow heart rates and lower blood pressure, while citrus oils stimulate energy and focus. Integrating these scents with bodywork creates a powerful, multi-sensory path to relaxation.</p>
            
            <h4>A Sanctuary of Serenity</h4>
            <p>In our modern lives, we rarely experience complete silence and stillness. The spa environment is intentionally designed to be a sanctuary of quietude. Combining professional tactile care with tailored aromatherapy helps you let go of daily worries, re-center your focus, and restore your inner harmony.</p>
        `
    }
};

// GALLERY IMAGES DB (For Lightbox Navigation)
const GALLERY_IMAGES = [
    // Home page images
    { src: "https://tranquilinternationalspa.com/wp-content/uploads/2023/08/IMG-2741-scaled.jpg", alt: "Treatment Suite - Interior" },
    { src: "https://tranquilinternationalspa.com/wp-content/uploads/2023/08/IMG-2736-scaled.jpg", alt: "Therapy Room - Treatment Rooms" },
    { src: "https://tranquilinternationalspa.com/wp-content/uploads/2023/08/IMG-2733-scaled.jpg", alt: "Stone Accents - Ambience" },
    { src: "https://tranquilinternationalspa.com/wp-content/uploads/2023/08/IMG-2728-scaled.jpg", alt: "Reception Walkway - Interior" },
    { src: "https://tranquilinternationalspa.com/wp-content/uploads/2023/08/IMG-2722-scaled.jpg", alt: "Essential Oil Selection - Treatment Rooms" },
    { src: "https://tranquilinternationalspa.com/wp-content/uploads/2023/08/IMG-2721-scaled.jpg", alt: "Warm Candle Details - Ambience" },
    // Gallery page images
    { src: "https://tranquilinternationalspa.com/wp-content/uploads/2023/07/as4e.jpg", alt: "Sanctuary Lobby - Interior" },
    { src: "https://tranquilinternationalspa.com/wp-content/uploads/2023/07/dfgh565r.jpg", alt: "Massage Treatment Suite - Treatment Rooms" },
    { src: "https://tranquilinternationalspa.com/wp-content/uploads/2023/07/asds.jpg", alt: "Aromatherapy Set - Ambience" },
    { src: "https://tranquilinternationalspa.com/wp-content/uploads/2023/07/s4edff.jpg", alt: "Scrub & Exfoliation Room - Treatment Rooms" },
    { src: "https://tranquilinternationalspa.com/wp-content/uploads/2023/07/354ergdf.jpg", alt: "Thermal Candle Ambience - Ambience" },
    { src: "https://tranquilinternationalspa.com/wp-content/uploads/2023/07/sa65rtgdv.jpg", alt: "Thai Yoga Suite - Interior" }
];

// STATE VARIABLES
let activeTestimonialIndex = 0;
let activeLightboxIndex = 0;

// DOM LOADER HANDLER
document.addEventListener("DOMContentLoaded", () => {
    // Reset scroll to top on page refresh/load
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    initNavbarScroll();
    initMobileMenu();
    initMobileDropdown();
    initScrollReveal();
    initGalleryFilters();
    initBookingForm();
    initTestimonialSlider();
    initBlogSlider();
    initHeroVideo();
    initEscapeKey();
});

// 1. NAVBAR SCROLL STYLING
function initNavbarScroll() {
    const navbar = document.getElementById("main-nav");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
        updateActiveNavLink();
    });
}

// Update Active Nav Link on Scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll("section, header");
    const navLinks = document.querySelectorAll(".nav-link");
    
    let scrollPos = window.scrollY + 150;
    
    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            const currentId = section.getAttribute("id");
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${currentId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}

// 2. MOBILE MENU TOGGLE
function initMobileMenu() {
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link-mobile");
    
    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            mobileBtn.classList.toggle("active");
        });
        
        // Close menu when clicking link (excluding dropdown toggles)
        navLinks.forEach(link => {
            if (!link.classList.contains("dropdown-toggle-mobile")) {
                link.addEventListener("click", () => {
                    navMenu.classList.remove("active");
                    mobileBtn.classList.remove("active");
                });
            }
        });
    }
}

// Mobile Dropdown Toggle Handler
function initMobileDropdown() {
    const experiencesDropdown = document.getElementById("experiences-dropdown-mobile");
    if (experiencesDropdown) {
        experiencesDropdown.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor navigation
            const parent = experiencesDropdown.parentElement;
            parent.classList.toggle("active");
            
            const chevron = experiencesDropdown.querySelector(".chevron");
            if (chevron) {
                if (parent.classList.contains("active")) {
                    chevron.style.transform = "rotate(180deg)";
                } else {
                    chevron.style.transform = "rotate(0deg)";
                }
            }
        });
    }
}

// 3. SCROLL REVEAL OBSERVER
function initScrollReveal() {
    const animateElements = document.querySelectorAll(".animate-scroll");
    
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Unobserve after animating once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// 4. THERAPY DETAIL MODALS
function openTherapyModal(therapyId) {
    const modal = document.getElementById("therapy-modal");
    const contentBox = document.getElementById("therapy-modal-content");
    const therapy = THERAPIES_DB[therapyId];
    
    if (!therapy) return;
    
    const benefitsHTML = therapy.benefits.map(b => `<li>${b}</li>`).join("");
    
    contentBox.innerHTML = `
        <div class="modal-therapy-header">
            <h3 class="modal-therapy-title">${therapy.title}</h3>
            <span class="modal-therapy-duration">${therapy.duration}</span>
        </div>
        <div class="modal-therapy-main">
            <div class="modal-therapy-info">
                <div>
                    <h5 class="info-block-title">About the Treatment</h5>
                    <p>${therapy.description}</p>
                </div>
                <div>
                    <h5 class="info-block-title">Method & Experience</h5>
                    <p>${therapy.technique}</p>
                </div>
                <div>
                    <h5 class="info-block-title">Key Therapeutic Benefits</h5>
                    <ul class="modal-benefits-list">
                        ${benefitsHTML}
                    </ul>
                </div>
                <div style="margin-top: 15px;">
                    <a href="#contact" class="btn btn-primary" onclick="closeModal('therapy-modal')">Book This Therapy</a>
                </div>
            </div>
            <div class="modal-therapy-visual">
                <img src="${therapy.image}" alt="${therapy.title}" class="modal-therapy-img">
            </div>
        </div>
    `;
    
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent page scrolling
}

// 5. BLOG MODALS
function openBlogModal(blogId) {
    const modal = document.getElementById("blog-modal");
    const contentBox = document.getElementById("blog-modal-content");
    const article = BLOG_DB[blogId];
    
    if (!article) return;
    
    contentBox.innerHTML = `
        <div class="blog-modal-header">
            <div class="blog-modal-meta">
                <span class="post-badge">${article.badge}</span>
                <span class="post-readtime">${article.readtime}</span>
            </div>
            <h3 class="blog-modal-title">${article.title}</h3>
            <p style="color: var(--accent); font-family: var(--font-heading); font-style: italic;">Written by Tranquil Spa Wellness Panel</p>
        </div>
        <div class="blog-modal-visual">
            <img src="${article.image}" alt="${article.title}" class="blog-modal-img">
        </div>
        <div class="blog-modal-content">
            ${article.content}
        </div>
    `;
    
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// CLOSE MODAL UTILITY
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = ""; // Restore page scrolling
    }
}

// Click outside modal container to close
const modals = document.querySelectorAll(".modal-overlay");
modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal(modal.id);
        }
    });
});

// Escape Key closes modals
function initEscapeKey() {
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            const activeModal = document.querySelector(".modal-overlay.active");
            if (activeModal) {
                closeModal(activeModal.id);
            }
        }
    });
}

// 6. GALLERY DYNAMIC FILTERS
function initGalleryFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");
    
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Toggle active state
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const category = btn.getAttribute("data-filter");
            
            galleryItems.forEach(item => {
                if (category === "all" || item.classList.contains(category)) {
                    item.style.display = "block";
                    setTimeout(() => {
                        item.style.opacity = "1";
                        item.style.transform = "scale(1)";
                    }, 50);
                } else {
                    item.style.opacity = "0";
                    item.style.transform = "scale(0.95)";
                    setTimeout(() => {
                        item.style.display = "none";
                    }, 300);
                }
            });
        });
    });
}

// 7. LIGHTBOX SYSTEM
function openLightbox(index) {
    const modal = document.getElementById("lightbox-modal");
    if (!modal) return;
    activeLightboxIndex = index;
    updateLightbox();
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    closeModal("lightbox-modal");
}
function updateLightbox() {
    const imageEl = document.getElementById("lightbox-img");
    const captionEl = document.getElementById("lightbox-caption");
    const image = GALLERY_IMAGES[activeLightboxIndex];
    
    if (image) {
        imageEl.src = image.src;
        imageEl.alt = image.alt;
        captionEl.textContent = image.alt;
    }
}

function changeLightboxImage(direction) {
    activeLightboxIndex += direction;
    
    if (activeLightboxIndex >= GALLERY_IMAGES.length) {
        activeLightboxIndex = 0;
    } else if (activeLightboxIndex < 0) {
        activeLightboxIndex = GALLERY_IMAGES.length - 1;
    }
    
    updateLightbox();
}

// 8. TESTIMONIAL SLIDER
function initTestimonialSlider() {
    const cardEl = document.querySelector(".testimonial-card");
    const container = document.querySelector(".testimonials-slider-container");
    if (!cardEl || !container) return;

    // Populate first testimonial
    updateTestimonialCard();

    // Lock the container height after first render so transitions never shift layout
    requestAnimationFrame(() => {
        const h = cardEl.offsetHeight;
        if (h > 0) {
            container.style.minHeight = h + "px";
        }
    });

    // Auto-play: advance every 5 seconds
    let autoplayTimer = null;

    function startAutoplay() {
        stopAutoplay();
        autoplayTimer = setInterval(() => {
            moveTestimonial(1);
        }, 5000);
    }

    function stopAutoplay() {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }

    // Pause on hover, resume on mouse leave
    container.addEventListener("mouseenter", stopAutoplay);
    container.addEventListener("mouseleave", startAutoplay);

    // Pause on touch (mobile), resume after 8s idle
    container.addEventListener("touchstart", () => {
        stopAutoplay();
        setTimeout(startAutoplay, 8000);
    }, { passive: true });

    // Expose restart for nav buttons
    window._testimonialRestartAutoplay = startAutoplay;

    startAutoplay();
}

// Blog Slider click scroll handler (Infinite Carousel)
function initBlogSlider() {
    const prevBtn = document.querySelector(".blog-arrow.prev");
    const nextBtn = document.querySelector(".blog-arrow.next");
    const grid = document.querySelector(".blog-grid");
    
    if (prevBtn && nextBtn && grid) {
        let isTransitioning = false;
        
        nextBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (isTransitioning) return;
            isTransitioning = true;
            
            const card = grid.querySelector(".blog-card");
            if (!card) {
                isTransitioning = false;
                return;
            }
            
            const gap = 24;
            const slideWidth = card.offsetWidth + gap;
            
            grid.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
            grid.style.transform = `translateX(-${slideWidth}px)`;
            
            setTimeout(() => {
                grid.style.transition = "none";
                grid.style.transform = "translateX(0)";
                grid.appendChild(grid.firstElementChild);
                isTransitioning = false;
            }, 400);
        });
        
        prevBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (isTransitioning) return;
            isTransitioning = true;
            
            const card = grid.querySelector(".blog-card");
            if (!card) {
                isTransitioning = false;
                return;
            }
            
            const gap = 24;
            const slideWidth = card.offsetWidth + gap;
            
            grid.style.transition = "none";
            grid.insertBefore(grid.lastElementChild, grid.firstElementChild);
            grid.style.transform = `translateX(-${slideWidth}px)`;
            
            grid.offsetHeight; // Force reflow
            
            grid.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
            grid.style.transform = "translateX(0)";
            
            setTimeout(() => {
                isTransitioning = false;
            }, 400);
        });
        
        // Touch Swipe Support for mobile screens
        let touchStartX = 0;
        let touchEndX = 0;
        
        grid.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        grid.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const threshold = 50; // min swipe distance in px
            if (touchStartX - touchEndX > threshold) {
                // Swipe Left -> Next
                nextBtn.click();
            } else if (touchEndX - touchStartX > threshold) {
                // Swipe Right -> Prev
                prevBtn.click();
            }
        }
    }
}

function moveTestimonial(direction) {
    const cardEl = document.querySelector(".testimonial-card");
    if (!cardEl || cardEl._animating) return;
    cardEl._animating = true;

    const slideOutX = direction > 0 ? "-40px" : "40px";
    const slideInX  = direction > 0 ? "40px"  : "-40px";

    // Slide + fade OUT
    cardEl.style.transition = "opacity 0.35s ease, transform 0.35s ease";
    cardEl.style.opacity = "0";
    cardEl.style.transform = `translateX(${slideOutX})`;

    setTimeout(() => {
        // Update content while invisible
        activeTestimonialIndex = (activeTestimonialIndex + direction + TESTIMONIALS.length) % TESTIMONIALS.length;
        updateTestimonialCard();

        // Position off-screen on the incoming side (no transition)
        cardEl.style.transition = "none";
        cardEl.style.transform = `translateX(${slideInX})`;
        cardEl.style.opacity = "0";

        // Force reflow
        void cardEl.offsetHeight;

        // Slide + fade IN
        cardEl.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        cardEl.style.opacity = "1";
        cardEl.style.transform = "translateX(0)";

        setTimeout(() => {
            cardEl._animating = false;
        }, 400);
    }, 350);

    // Restart autoplay timer whenever user manually navigates
    if (window._testimonialRestartAutoplay) {
        window._testimonialRestartAutoplay();
    }
}

function updateTestimonialCard() {
    const quoteEl = document.querySelector(".testimonial-quote");
    const authorEl = document.querySelector(".testimonial-author");
    const counterEl = document.getElementById("testimonial-counter");

    const testimonial = TESTIMONIALS[activeTestimonialIndex];
    if (testimonial) {
        if (quoteEl) quoteEl.innerHTML = `"${testimonial.quote}"`;
        if (authorEl) authorEl.textContent = `\u2014 ${testimonial.author}`;
        if (counterEl) counterEl.textContent = `${activeTestimonialIndex + 1} of ${TESTIMONIALS.length}`;
    }
}
// 9. BOOKING FORM PROCESSOR
function initBookingForm() {
    const form = document.getElementById("booking-form");
    if (!form) return;
    
    // Check URL parameters for therapy selection
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTherapy = urlParams.get('therapy');
    if (selectedTherapy) {
        const therapySelect = document.getElementById("form-therapy");
        if (therapySelect) {
            therapySelect.value = selectedTherapy;
        }
    }
    
    // Set minimum date input to today
    const dateInput = document.getElementById("form-date");
    if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.min = today;
    }
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Fetch inputs
        const name = document.getElementById("form-name").value.trim();
        const phone = document.getElementById("form-phone").value.trim();
        const email = document.getElementById("form-email").value.trim();
        const therapy = document.getElementById("form-therapy").value;
        const date = document.getElementById("form-date").value;
        const time = document.getElementById("form-time").value;
        
        if (!name || !phone || !email || !therapy || !date || !time) {
            alert("Please complete all required fields.");
            return;
        }
        
        // Mock API Submit - Success Modal Trigger
        openSuccessModal();
        form.reset();
    });
}

function openSuccessModal() {
    const modal = document.getElementById("success-modal");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// 12. HERO VIDEO ERROR CHECK
function initHeroVideo() {
    const video = document.querySelector(".hero-video");
    if (!video) return;
    
    // Safety mute to satisfy browser policy
    video.muted = true;
    
    const playPromise = video.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.warn("Autoplay blocked or local video access restricted. Hiding video container.", error);
            video.style.display = "none";
        });
    }
    
    video.addEventListener("error", () => {
        console.warn("Video resource failed to load, hiding video element.");
        video.style.display = "none";
    });
}
