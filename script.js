// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  // IntersectionObserver for fade-in and slide-in
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        
        // Add slide-in from left or right based on even/odd index
        const index = Array.from(sections).indexOf(entry.target);
        if (index % 2 === 0) {
          entry.target.classList.add('slide-in-left');
        } else {
          entry.target.classList.add('slide-in-right');
        }
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
});

// Green side accents on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});
