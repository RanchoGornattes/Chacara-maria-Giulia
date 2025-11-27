// ===================================
// CAROUSEL FUNCTIONALITY
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('#carousel-slides > div');
    const dots = document.querySelectorAll('#carousel-dots > button');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');

    if (slides.length > 0) {
        let currentSlide = 0;
        const totalSlides = slides.length;
        let slideInterval;

        // Function to show a specific slide
        function showSlide(index) {
            // Handle index bounds
            if (index < 0) index = totalSlides - 1;
            if (index >= totalSlides) index = 0;

            currentSlide = index;

            // Update slides
            slides.forEach((slide, i) => {
                if (i === currentSlide) {
                    slide.classList.remove('opacity-0');
                    slide.classList.add('opacity-100');
                } else {
                    slide.classList.remove('opacity-100');
                    slide.classList.add('opacity-0');
                }
            });

            // Update dots
            dots.forEach((dot, i) => {
                if (i === currentSlide) {
                    dot.classList.remove('bg-white/50');
                    dot.classList.add('bg-white', 'scale-125');
                } else {
                    dot.classList.add('bg-white/50');
                    dot.classList.remove('bg-white', 'scale-125');
                }
            });
        }

        // Next Slide
        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        // Previous Slide
        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        // Event Listeners
        if (nextBtn) nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });

        if (prevBtn) prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                resetInterval();
            });
        });

        // Auto Play
        function startInterval() {
            slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        }

        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        // Initialize
        startInterval();
    }
});

// ===================================
// SMOOTH SCROLLING FOR NAVIGATION
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// BACK TO TOP BUTTON
// ===================================
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('translate-y-20', 'opacity-0');
        } else {
            backToTopButton.classList.add('translate-y-20', 'opacity-0');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// MOBILE MENU TOGGLE
// ===================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
// Note: Since we haven't implemented a full mobile menu overlay yet, 
// this is a placeholder or could toggle a simple dropdown if added.
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        // For now, just scroll to contact or show an alert, 
        // or we could implement a simple mobile menu overlay.
        // Let's just scroll to footer for now as a simple action
        document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
    });
}

// ===================================
// LAZY LOADING IMAGES (Native support is good, but fallback)
// ===================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
}

// ===================================
// CONSOLE MESSAGE
// ===================================
console.log('%c🌳 Rancho Gornattes - Chácara Maria Giulia', 'color: #3D550C; font-size: 20px; font-weight: bold;');
