// ============================================
// QUANTUM PORTFOLIO - MAIN APPLICATION
// ============================================

// Global State
const state = {
    currentTheme: 'dark',
    isMobileMenuOpen: false,
    currentCertCategory: 'all',
    currentSlide: 0,
    projectsLoaded: false,
    isTyping: false
};

// DOM Elements
const elements = {
    preloader: document.getElementById('preloader'),
    body: document.body,
    nav: document.getElementById('mainNav'),
    hamburger: document.getElementById('hamburger'),
    mobileMenu: document.getElementById('mobileMenu'),
    themeToggle: document.getElementById('themeToggle'),
    backToTop: document.getElementById('backToTop'),
    contactForm: document.getElementById('contactForm'),
    certSearch: document.getElementById('certSearch')
};

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initNavigation();
    initTheme();
    initBackToTop();
    initProjectCards();
    initCertificates();
    initGithubAccounts();
    initLovableApps();
    initBlogPosts();
    initTestimonials();
    initFAQ();
    initTypingEffect();
    initHomeStats();
    initScrollReveal();
    initCustomCursor();
    initContactForm();
    initChatbot();
    initToast();
});

// ============================================
// PRELOADER
// ============================================
function initPreloader() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            elements.preloader.classList.add('hidden');
        }, 500);
    });
    
    // Fallback in case load event already fired
    if (document.readyState === 'complete') {
        elements.preloader.classList.add('hidden');
    }
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    // Hamburger menu
    elements.hamburger.addEventListener('click', () => {
        elements.hamburger.classList.toggle('active');
        elements.mobileMenu.classList.toggle('active');
        elements.body.classList.toggle('lock-scroll');
        state.isMobileMenuOpen = !state.isMobileMenuOpen;
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-links a').forEach(link => {
        link.addEventListener('click', () => {
            elements.hamburger.classList.remove('active');
            elements.mobileMenu.classList.remove('active');
            elements.body.classList.remove('lock-scroll');
        });
    });
    
    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#\${current}`) {
                link.classList.add('active');
            }
        });
        
        // Navbar shadow on scroll
        if (window.scrollY > 50) {
            elements.nav.classList.add('scrolled');
        } else {
            elements.nav.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// THEME TOGGLE
// ============================================
function initTheme() {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);
    
    elements.themeToggle.addEventListener('click', () => {
        const newTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
    });
}

function setTheme(theme) {
    state.currentTheme = theme;
    elements.body.setAttribute('data-theme', theme);
    
    const icon = elements.themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-moon';
        elements.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        icons.className = 'fas fa-sun';
        elements.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// ============================================
// BACK TO TOP
// ============================================
function initBackToTop() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            elements.backToTop.classList.add('visible');
        } else {
            elements.backToTop.classList.remove('visible');
        }
    });
    
    elements.backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// PROJECT CARDS
// ============================================
function initProjectCards() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="card-glow"></div>
            <div class="card-image">
                <img src="\${project.image}" alt="\${project.title}" loading="lazy">
                <div class="card-overlay">
                    <span class="card-tech">\${project.tech.join(' · ')}</span>
                </div>
            </div>
            <div class="card-content">
                <h3>\${project.title}</h3>
                <p>\${project.description}</p>
                <div class="card-links">
                    <a href="\${project.github}" target="_blank" rel="noopener">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    \${project.demo ? `<a href="\${project.demo}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
                </div>
            </div>
        `;
        grid.appendChild(card);
        
        // Add reveal animation
        card.classList.add('reveal-up');
        addIntersectionObserver(card);
    });
    
    // View All Projects button
    document.querySelector('.view-all-projects .btn-outline').addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://github.com/Dev-moe-kyawaung', '_blank');
    });
}

// ============================================
// CERTIFICATES
// ============================================
function initCertificates() {
    const grid = document.getElementById('certGrid');
    if (!grid) return;
    
    renderCertificates('all');
    
    // Filter buttons
    document.querySelectorAll('.cert-filters .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.cert-filters .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('onclick').match(/'([^']+)'/)[1];
            renderCertificates(category);
        });
    });
    
    // Search functionality
    if (elements.certSearch) {
        elements.certSearch.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const category = document.querySelector('.cert-filters .filter-btn.active').getAttribute('onclick').match(/'([^']+)'/)[1];
            
            if (searchTerm === '') {
                renderCertificates(category);
            } else {
                const filtered = certificatesData.filter(cert => 
                    cert.name.toLowerCase().includes(searchTerm) ||
                    cert.category.toLowerCase().includes(searchTerm)
                );
                renderCertificates('all', filtered);
            }
        });
    }
}

function renderCertificates(category, customData = null) {
    const grid = document.getElementById('certGrid');
    if (!grid) return;
    
    const certs = customData || certificatesData.filter(cert => 
        category === 'all' || cert.category === category
    );
    
    grid.innerHTML = '';
    
    certs.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'cert-card';
        card.innerHTML = `
            <div class="cert-icon">\${cert.icon}</div>
            <h4>\${cert.name}</h4>
            <div class="cert-category">\${cert.category}</div>
            <div class="cert-date"><i class="fas fa-calendar-alt"></i> \${formatDate(cert.date)}</div>
            <div class="cert-id">ID: \${cert.id}</div>
            <button class="cert-verify" onclick="verifyCertificate('\${cert.id}')">
                <i class="fas fa-check-circle"></i> Verify
            </button>
        `;
        grid.appendChild(card);
    });
}

function verifyCertificate(id) {
    showToast(`Verifying certificate: \${id}`);
    // This would connect to Programming Hub API in production
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function filterCerts() {
    // Placeholder for filter function
    console.log('Filtering certificates...');
}

// ============================================
// GITHUB ACCOUNTS
// ============================================
function initGithubAccounts() {
    const grid = document.getElementById('accountsGrid');
    if (!grid) return;
    
    // Display first 12 accounts for performance
    githubAccounts.slice(0, 12).forEach(account => {
        const item = document.createElement('a');
        item.className = 'account-item';
        item.href = account;
        item.target = '_blank';
        item.rel = 'noopener';
        
        const domain = new URL(account).hostname.split('.')[0];
        item.innerHTML = `
            <i class="fab fa-github"></i>
            <span>\${domain}</span>
        `;
        grid.appendChild(item);
    });
}

// ============================================
// LOVABLE APPS
// ============================================
function initLovableApps() {
    const grid = document.getElementById('lovableGrid');
    if (!grid) return;
    
    lovableApps.forEach((app, index) => {
        const card = document.createElement('div');
        card.className = 'lovable-card reveal-up';
        card.style.transitionDelay = `\${index * 0.1}s`;
        card.innerHTML = `
            <div class="lovable-icon">\${app.icon}</div>
            <h3>\${app.title}</h3>
            <p>\${app.description}</p>
            <a href="\${app.url}" target="_blank" rel="noopener" class="lovable-link">
                <i class="fas fa-external-link-alt"></i> Visit App
            </a>
        `;
        grid.appendChild(card);
    });
}

// ============================================
// BLOG POSTS
// ============================================
function initBlogPosts() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    
    blogPosts.forEach((post, index) => {
        const card = document.createElement('article');
        card.className = 'blog-card reveal-up';
        card.style.transitionDelay = `\${index * 0.1}s`;
        card.innerHTML = `
            <div class="blog-image">
                <img src="\${post.image}" alt="\${post.title}">
            </div>
            <div class="blog-content">
                <div class="blog-category">\${post.category}</div>
                <h3 class="blog-title">\${post.title}</h3>
                <p class="blog-excerpt">\${post.excerpt}</p>
                <div class="blog-meta">
                    <span><i class="fas fa-calendar"></i> \${formatDate(post.date)}</span>
                    <span><i class="fas fa-clock"></i> \${post.readTime}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}
// ============================================
// TESTIMONIALS SLIDER
// ============================================
function initTestimonials() {
    const slides = document.querySelectorAll('.testimonial');
    const dotsContainer = document.querySelector('.slider-dots');
    if (!slides.length || !dotsContainer) return;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.setAttribute('data-slide', index);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    // Auto-play
    state.slideInterval = setInterval(() => {
        goToSlide((state.currentSlide + 1) % slides.length);
    }, 5000);
    
    // Update dots
    updateSliderDots();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.testimonial');
    if (!slides.length) return;
    
    state.currentSlide = index;
    
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    
    updateSliderDots();
}

function updateSliderDots() {
    document.querySelectorAll('.slider-dots .dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === state.currentSlide);
    });
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.testimonial');
    if (!slides.length) return;
    
    clearInterval(state.slideInterval);
    const nextSlide = (state.currentSlide + direction + slides.length) % slides.length;
    goToSlide(nextSlide);
    
    // Restart auto-play
    state.slideInterval = setInterval(() => {
        goToSlide((state.currentSlide + 1) % slides.length);
    }, 5000);
}

// ============================================
// FAQ ACCORDION
// ============================================
function initFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            
            // Close all
            document.querySelectorAll('.faq-item.open').forEach(openItem => {
                if (openItem !== item) {
                    openItem.classList.remove('open');
                    openItem.querySelector('.faq-answer').style.maxHeight = null;
                }
            });
            
            // Toggle current
            item.classList.toggle('open');
            const answer = item.querySelector('.faq-answer');
            
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
}

// ============================================
// TYPING EFFECT
// ============================================
function initTypingEffect() {
    const phrases = [
        'Senior Android Developer',
        'Kotlin Expert',
        'Jetpack Compose Enthusiast',
        'Clean Architecture Advocate',
        'Mobile App Architect'
    ];
    
    const titleElement = document.querySelector('.title-subtitle');
    if (!titleElement) return;
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        const currentLength = charIndex;
        
        // Use initial content as placeholder
        const displayText = currentPhrase.substring(0, currentLength);
        titleElement.innerHTML = `[\${displayText}]<span class="typing-cursor"></span>`;
        
        if (!isDeleting && charIndex < currentPhrase.length) {
            charIndex++;
            setTimeout(type, 100);
        } else if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, 50);
        } else {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            charIndex = 0;
            setTimeout(type, 500);
        }
    }
    
    type();
}

// ============================================
// HOME STATS COUNTER
// ============================================
function initHomeStats() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseInt(target.getAttribute('data-target'));
                animateCount(target, targetValue);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateCount(element, target) {
    const duration = 2000;
    const startTime = performance.now();
    const startValue = 0;
    
    function update(currentTime) {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(startValue + (target - startValue) * easeProgress);
        
        element.textContent = currentValue;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(update);
}

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    
    revealElements.forEach(element => observer.observe(element));
    
    // Also initialize existing reveal elements
    document.querySelectorAll('[data-animation]').forEach(element => {
        const animation = element.getAttribute('data-animation');
        element.classList.add(`reveal-\${animation}`);
        observer.observe(element);
    });
}

// ============================================
// CUSTOM CURSOR
// ============================================
function initCustomCursor() {
    // Skip if touch device
    if (window.matchMedia('(hover: none)').matches) return;
    
    const cursorDot = document.createElement('div');
    const cursorOutline = document.createElement('div');
    
    cursorDot.className = 'cursor-dot';
    cursorOutline.className = 'cursor-outline';
    
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);
    
    let mouseX = -100;
    let mouseY = -100;
    let outlineX = -100;
    let outlineY = -100;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorDot.style.left = `\${mouseX}px`;
        cursorDot.style.top = `\${mouseY}px`;
    });
    
    // Smooth outline follow
    function animateOutline() {
        const dx = mouseX - outlineX;
        const dy = mouseY - outlineY;
        
        outlineX += dx * 0.15;
        outlineY += dy * 0.15;
        
        cursorOutline.style.left = `\${outlineX}px`;
        cursorOutline.style.top = `\${outlineY}px`;
        
        requestAnimationFrame(animateOutline);
    }
    animateOutline();
    
    // Hover effect on interactive elements
    document.addEventListener('mouseover', (e) => {
        const target = e.target;
        if (target.closest('a, button, .project-card, .skill-chip, .faq-question')) {
            cursorOutline.classList.add('hovered');
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        const target = e.target;
        if (target.closest('a, button, .project-card, .skill-chip, .faq-question')) {
            cursorOutline.classList.remove('hovered');
        }
    });
    
    // Hide cursor on leave
    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = '0';
        cursorOutline.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '1';
    });
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
    if (!elements.contactForm) return;
    
    elements.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(elements.contactForm);
        const data = Object.fromEntries(formData);
        
        // Validate email
        if (!isValidEmail(data.email)) {
            showToast('Please enter a valid email address');
            return;
        }
        
        // Simulate submission (in production, connect to backend)
        const submitBtn = elements.contactForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            elements.contactForm.reset();
            showToast('Thank you! Your message has been sent successfully.');
        }, 2000);
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+\$/.test(email);
}

// ============================================
// CHATBOT
// ============================================
function initChatbot() {
    // Create chatbot elements if not present
    if (!document.querySelector('.chatbot-orb')) {
        const orb = document.createElement('div');
        orb.className = 'chatbot-orb';
        orb.innerHTML = '<i class="fas fa-comments"></i>';
        document.body.appendChild(orb);
        
        const popup = document.createElement('div');
        popup.className = 'chatbot-popup';
        popup.innerHTML = `
            <div class="chatbot-header">
                <span>◈ MKA Assistant</span>
                <button class="close-chat"><i class="fas fa-times"></i></button>
            </div>
            <div class="chatbot-messages">
                <div class="message bot-message">Hi! I'm your AI assistant. How can I help you today?</div>
            </div>
            <div class="chatbot-input">
                <input type="text" placeholder="Type your question..." id="chatInput">
                <button id="sendChat"><i class="fas fa-paper-plane"></i></button>
            </div>
        `;
        document.body.appendChild(popup);
        
        // Toggle chat
        orb.addEventListener('click', () => {
            popup.classList.toggle('active');
            if (popup.classList.contains('active')) {
                document.getElementById('chatInput').focus();
            }
        });
        
        popup.querySelector('.close-chat').addEventListener('click', () => {
            popup.classList.remove('active');
        });
        
        // Send message
        const handleSend = () => {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            if (!message) return;
            
            // Add user message
            const messagesContainer = popup.querySelector('.chatbot-messages');
            const userMsg = document.createElement('div');
            userMsg.className = 'message user-message';
            userMsg.textContent = message;
            messagesContainer.appendChild(userMsg);
            
            // Clear input
            input.value = '';
            
            // Bot response (simple AI logic)
            setTimeout(() => {
                const botMsg = document.createElement('div');
                botMsg.className = 'message bot-message';
                botMsg.textContent = getBotResponse(message);
                messagesContainer.appendChild(botMsg);
                
                // Scroll to bottom
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, 500);
        };
        
        document.getElementById('sendChat').addEventListener('click', handleSend);
        document.getElementById('chatInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSend();
        });
    }
}

function getBotResponse(message) {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('kotlin') || lowerMsg.includes('android')) {
        return "I'm an experienced Android developer with 3+ years in Kotlin. I can help you with app architecture, Jetpack Compose, and best practices!";
    } else if (lowerMsg.includes('contact')) {
        return "You can reach me at moekyawaung@technologist.com or call +95 9 889 000 889";
    } else if (lowerMsg.includes('project')) {
        return "I've built 40+ projects including POS systems, social dashboards, weather apps, and more. Check my GitHub: https://github.com/Dev-moe-kyawaung";
    } else if (lowerMsg.includes('certificate')) {
        return "I have 82+ certificates in 9 tech domains from Programming Hub. Would you like to see them?";
    } else if (lowerMsg.includes('resume')) {
        return "Click the 'Download Resume' button in the home section to get my resume!";
    } else {
        return "That's interesting! Feel free to explore my portfolio or ask me about my skills, projects, or experience.";
    }
}

// ============================================
// TOAST NOTIFICATION
// ============================================
const toast = document.getElementById('toast');

function initToast() {
    // Pre-create toast with icon
    toast.innerHTML = '<i class="fas fa-check-circle"></i> <span></span>';
}

function showToast(message) {
    toast.querySelector('span').textContent = message;
    toast.classList.add('show');
    
    clearTimeout(state.toastTimeout);
    state.toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// MATRIX RAIN BACKGROUND
// ============================================
function initMatrixBackground() {
    const canvas = document.getElementById('matrixRain');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let fontSize = 14;
    let columns = Math.ceil(window.innerWidth / fontSize);
    let drops = new Array(columns).fill(1);
    
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ01010101';
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0f0';
        ctx.font = `\${fontSize}px monospace`;
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i]++;
        }
    }
    
    setInterval(draw, 33);
    
    // Resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = Math.ceil(window.innerWidth / fontSize);
        drops = new Array(columns).fill(1);
    });
}

// ============================================
// QUANTUM ORB INTERACTION
// ============================================
function initQuantumOrb() {
    const orb = document.getElementById('quantumOrb');
    if (!orb) return;
    
    orb.addEventListener('click', () => {
        // Create particle burst effect
        if (window.quantumEffects) {
            window.quantumEffects.createOrbBurst();
        }
        
        // Add notification
        showToast('⚛ Quantum burst initiated!');
    });
    
    // Continuous subtle floating
    orb.style.animation = 'float 6s ease-in-out infinite';
}

// ============================================
// PAGE TRANSITIONS
// ============================================
function initPageTransitions() {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="https"]');
        if (link) {
            // Brief loading state for external links
            state.isNavigating = true;
            setTimeout(() => {
                state.isNavigating = false;
            }, 1000);
        }
    });
}

// ============================================
// VIEW COUNTER
// ============================================
function updateViewCount() {
    let views = localStorage.getItem('portfolio-views');
    views = views ? parseInt(views) + 1 : 1;
    localStorage.setItem('portfolio-views', views);
    
    // Add to footer
    const footer = document.querySelector('.footer-bottom');
    if (footer) {
        footer.innerHTML = `© 2026 Moe Kyaw Aung · \${views} project views <span style="opacity:0.5">| Built with ⚛ Quantum Matrix</span>`;
    }
}

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================
function initPerformanceOptimizations() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Core initializations
    initPreloader();
    initNavigation();
    initTheme();
    initBackToTop();
    initProjectCards();
    initCertificates();
    initGithubAccounts();
    initLovableApps();
    initBlogPosts();
    initTestimonials();
    initFAQ();
    initTypingEffect();
    initHomeStats();
    initScrollReveal();
    initCustomCursor();
    initContactForm();
    initChatbot();
    initToast();
    initMatrixBackground();
    initQuantumOrb();
    initPageTransitions();
    updateViewCount();
    initPerformanceOptimizations();
    
    // Global click handler for download resume
    document.querySelectorAll('.btn-primary:has(.fa-download)').forEach(btn => {
        btn.addEventListener('click', downloadResume);
    });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================
function downloadResume() {
    // Show loading toast
    showToast('Preparing resume...');
    
    // Create a simple text resume as fallback (in production, link to PDF)
    const resumeContent = `
        MOE KYAW AUNG
        Senior Android Developer
        
        Location: Tachileik, Myanmar ↔ Bangkok, Thailand
        Email: moekyawaung@technologist.com
        Phone: +95 9 889 000 889
        
        EXPERIENCE:
        - Senior Android Developer (2024-Present)
        - Android Developer (2023-2024)
        - Web & Mobile Developer (2022-2023)
        
        SKILLS:
        - Kotlin, Jetpack Compose, MVVM, Clean Architecture
        - Firebase, REST APIs, Retrofit, Room
        - Python, TensorFlow Lite, Ethical Hacking
        - Git, GitHub Actions, Docker
        
        CERTIFICATIONS:
        - 82+ Programming Hub certificates
        - 9 technical domains
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Moe_Kyaw_Aung_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
    
    setTimeout(() => {
        showToast('Resume downloaded! 📄');
    }, 1000);
}

function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleTheme() {
    // Trigger theme toggle
    document.getElementById('themeToggle').click();
}

function openLink(url) {
    window.open(url, '_blank', 'noopener');
}

// Export functions for external use
window.showToast = showToast;
window.downloadResume = downloadResume;
window.smoothScroll = smoothScroll;
window.openLink = openLink;
window.changeSlide = changeSlide;
window.goToSlide = goToSlide;
window.filterCerts = filterCerts;

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
    // Toggle theme with 'd'
    if (e.key === 'd' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        toggleTheme();
    }
    
    // Go to next testimonial with arrow keys
    if (e.key === 'ArrowRight' && isInSection('testimonials')) {
        changeSlide(1);
    }
    if (e.key === 'ArrowLeft' && isInSection('testimonials')) {
        changeSlide(-1);
    }
    
    // Close mobile menu with Escape
    if (e.key === 'Escape' && state.isMobileMenuOpen) {
        elements.hamburger.classList.remove('active');
        elements.mobileMenu.classList.remove('active');
        elements.body.classList.remove('lock-scroll');
    }
});

function isInSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return false;
    
    const rect = section.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

// ============================================
// ERROR HANDLING
// ============================================
window.addEventListener('error', (e) => {
    console.error('Application error:', e.message);
    // Could add custom error logging here
});

// ============================================
// PWA SUPPORT (If needed)
// ============================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Register service worker for PWA support
        // navigator.serviceWorker.register('/sw.js');
    });
}


