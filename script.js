// Scroll-triggered animations
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to animated elements
    const animatedSelectors = [
        '.skill-card', '.project-card', '.edu-card',
        '.timeline-item', '.fun-item', '.contact-card',
        '.quote', '.about-text', '.languages-section'
    ];
    
    document.querySelectorAll(animatedSelectors.join(',')).forEach(el => {
        el.classList.add('fade-in');
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Observe all fade-in elements with staggered delays
    document.querySelectorAll('.fade-in').forEach((el, i) => {
        // Group siblings for stagger effect
        const parent = el.parentElement;
        const siblings = Array.from(parent.children).filter(c => c.classList.contains('fade-in'));
        const siblingIndex = siblings.indexOf(el);
        el.dataset.delay = siblingIndex * 80;
        observer.observe(el);
    });

    // Nav scroll effect
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Smooth active link highlight
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.style.color = link.getAttribute('href') === '#' + current 
                ? '#e8e8ef' : '';
        });
    });

    // Animate language bars on scroll
    const langObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.lang-fill').forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => { bar.style.width = width; }, 200);
                });
                langObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const langSection = document.querySelector('.languages-section');
    if (langSection) langObserver.observe(langSection);
});
