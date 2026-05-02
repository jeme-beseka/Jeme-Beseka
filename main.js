/* ═══════════════════════════════════════════════════════════════
   JEME BESEKA FONCHAM — main.js
   Handles: theme toggle, navbar scroll, mobile menu, reveal animations
   ═══════════════════════════════════════════════════════════════ */

'use strict';

// ─── YEAR ───────────────────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ─── THEME TOGGLE ───────────────────────────────────────────────
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const getTheme = () =>
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

const applyTheme = (theme) => {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
};

// Apply immediately (already done inline in HTML, this just syncs the button state)
applyTheme(getTheme());

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
});

// Listen for OS-level theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
    }
});

// ─── NAVBAR SCROLL ──────────────────────────────────────────────
const navbar = document.getElementById('navbar');

const handleNavScroll = () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll(); // Run on init

// ─── MOBILE MENU ────────────────────────────────────────────────
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    navMenu.classList.toggle('open', !isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
});

// Close menu when a nav link is clicked
navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
    }
});

// ─── SCROLL REVEAL ──────────────────────────────────────────────
const revealElements = document.querySelectorAll(
    '.section-label, .section-heading, .about-para, .lang-tags, .about-visual, ' +
    '.stack-group, .timeline-item, .link-card, .links-sub, ' +
    '.contact-sub, .contact-email, .availability-badge'
);

// Add reveal class to section elements
revealElements.forEach(el => {
    el.classList.add('reveal');
});

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

revealElements.forEach(el => revealObserver.observe(el));

// Stagger timeline items and link cards
document.querySelectorAll('.timeline-item').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
});
document.querySelectorAll('.link-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.06}s`;
});
document.querySelectorAll('.stack-group').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
});

// ─── HERO REVEAL ON LOAD ────────────────────────────────────────
window.addEventListener('load', () => {
    document.querySelectorAll('.hero .reveal').forEach(el => {
        // Small RAF to ensure CSS is painted
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                el.classList.add('visible');
            });
        });
    });
});

// ─── SMOOTH SCROLL OFFSET (for fixed navbar) ────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        const offset = navbar.offsetHeight + 16;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});

// ─── ACTIVE NAV LINK (highlight current section) ────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.style.color = link.getAttribute('href') === `#${id}`
                        ? 'var(--coral)'
                        : '';
                });
            }
        });
    },
    { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));

// ─── HERO ORB PARALLAX ──────────────────────────────────────────
const orb1 = document.querySelector('.orb-1');
const orb2 = document.querySelector('.orb-2');

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 24;
        const y = (e.clientY / window.innerHeight - 0.5) * 18;

        if (orb1) {
            orb1.style.transform = `translate(${x}px, ${y}px)`;
        }
        if (orb2) {
            orb2.style.transform = `translate(${-x * 0.6}px, ${-y * 0.6}px)`;
        }
    }, { passive: true });
}