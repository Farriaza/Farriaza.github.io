/* ================================================================
   IREK — main.js
================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAV SCROLL ── */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── MOBILE NAV ── */
  const hamburger  = document.querySelector('.nav-hamburger');
  const mobileNav  = document.querySelector('.nav-mobile');
  const mobileLinks = document.querySelectorAll('.nav-mobile a');

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 74;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── SCROLL REVEAL ── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach(el => revealObserver.observe(el));

  /* ── HERO PARTICLES ── */
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    const count = 14;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'hero-particle';
      const size = Math.random() * 4 + 2;
      p.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 90}%;
        bottom: ${Math.random() * 40}%;
        animation-duration: ${Math.random() * 10 + 8}s;
        animation-delay: ${Math.random() * 8}s;
        opacity: 0;
      `;
      heroBg.appendChild(p);
    }
  }

  /* ── HERO COUNTER ANIMATION ── */
  const counters = document.querySelectorAll('.hero-stat-num[data-target]');
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const duration = 1800;
      const start = performance.now();

      const tick = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const value = target * ease;
        el.textContent = (Number.isInteger(target) ? Math.round(value) : value.toFixed(1)) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  /* ── ACTIVE NAV LINK ON SCROLL ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a, .nav-mobile a');

  const activateLink = () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === `#${current}`) a.classList.add('active');
    });
  };
  window.addEventListener('scroll', activateLink, { passive: true });

  /* ── SERVICE CARD TILT (subtle) ── */
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 8;
      card.style.transform = `translateY(-7px) rotateX(${-y}deg) rotateY(${x}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

});

/* ── FLIP CARDS — touch toggle para móvil ── */
(function() {
  const isTouchDevice = () => window.matchMedia('(hover: none)').matches;

  document.querySelectorAll('.flip-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');

    card.addEventListener('click', () => {
      if (!isTouchDevice()) return;
      const wasFlipped = card.classList.contains('flipped');
      document.querySelectorAll('.flip-card.flipped').forEach(c => c.classList.remove('flipped'));
      if (!wasFlipped) card.classList.add('flipped');
    });

    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });
  });

  document.addEventListener('click', e => {
    if (!isTouchDevice()) return;
    if (!e.target.closest('.flip-card')) {
      document.querySelectorAll('.flip-card.flipped').forEach(c => c.classList.remove('flipped'));
    }
  });
})();

(function () {

  const WA_NUMBER = "56974493441";

  document.querySelectorAll('.flip-card').forEach(card => {

    card.addEventListener('click', function () {

      if (!this.classList.contains('is-flipped')) {
        this.classList.add('is-flipped');
        return;
      }

      const service = this.querySelector('h3').textContent.trim();

      const message = `¡Hola! Me interesa el servicio de "${service}". ¿Me pueden dar más información?`;

      const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

      window.open(url, '_blank');
    });

  });

})();
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".collage-img");

  let positions = ["position-1", "position-2", "position-3"];

  // Asignar posiciones iniciales
  images.forEach((img, index) => {
    img.classList.add(positions[index]);
  });

  function rotateCollage() {
    positions.unshift(positions.pop());

    images.forEach((img, index) => {
      img.classList.remove("position-1", "position-2", "position-3");
      img.classList.add(positions[index]);
    });
  }

  setInterval(rotateCollage, 2500);
});