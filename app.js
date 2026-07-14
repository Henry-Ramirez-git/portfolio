// Scroll-Animation mit Intersection Observer
const animateElements = document.querySelectorAll('.animate-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Einmalig sichtbar lassen
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

animateElements.forEach(el => observer.observe(el));

// Smooth Scroll für interne Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
