const gradientCanvas = document.getElementById('gradient-canvas');
const particlesCanvas = document.getElementById('particles-canvas');
const scrollProgress = document.getElementById('scrollProgress');
const header = document.getElementById('header');
const sections = Array.from(document.querySelectorAll('main section'));
const animatedElements = document.querySelectorAll('[data-animate]');
const nav = document.getElementById('nav');
const navToggle = document.querySelector('.nav-toggle');
const consultingForm = document.querySelector('.js-consulting-form');
const currentYearEl = document.getElementById('currentYear');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function resizeCanvas() {
    const ratio = window.devicePixelRatio || 1;

    [gradientCanvas, particlesCanvas].forEach(canvas => {
        canvas.width = window.innerWidth * ratio;
        canvas.height = window.innerHeight * ratio;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
    });

    if (gradientCtx) {
        gradientCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    if (particlesCtx) {
        particlesCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }
}

let gradientCtx = null;
let particlesCtx = null;
let gradientAnimationId = null;
let particleAnimationId = null;

if (gradientCanvas) {
    gradientCtx = gradientCanvas.getContext('2d');
}

if (particlesCanvas) {
    particlesCtx = particlesCanvas.getContext('2d');
}

const gradientStops = [
    { color: 'rgba(255, 107, 53, 0.55)', pos: 0.0, speed: 0.0006, amplitude: 0.4 },
    { color: 'rgba(255, 140, 90, 0.65)', pos: 0.35, speed: 0.0004, amplitude: 0.3 },
    { color: 'rgba(0, 173, 181, 0.6)', pos: 0.7, speed: 0.0005, amplitude: 0.4 },
    { color: 'rgba(28, 201, 209, 0.6)', pos: 1.0, speed: 0.0003, amplitude: 0.35 }
];

let startTime = performance.now();

function renderGradient(timestamp) {
    if (!gradientCtx) return;
    const time = timestamp - startTime;
    const width = gradientCanvas.width / (window.devicePixelRatio || 1);
    const height = gradientCanvas.height / (window.devicePixelRatio || 1);
    gradientCtx.clearRect(0, 0, width, height);

    const gradient = gradientCtx.createLinearGradient(0, 0, width, height);

    gradientStops.forEach((stop, index) => {
        const oscillation = Math.sin(time * stop.speed + index) * stop.amplitude;
        const offset = Math.min(1, Math.max(0, stop.pos + oscillation * 0.1));
        gradient.addColorStop(offset, stop.color);
    });

    gradientCtx.fillStyle = gradient;
    gradientCtx.fillRect(0, 0, width, height);

    const glowGradient = gradientCtx.createRadialGradient(width * 0.7, height * 0.3, 0, width * 0.7, height * 0.3, width * 0.8);
    glowGradient.addColorStop(0, 'rgba(255, 107, 53, 0.15)');
    glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    gradientCtx.fillStyle = glowGradient;
    gradientCtx.fillRect(0, 0, width, height);

    if (!prefersReducedMotion) {
        gradientAnimationId = requestAnimationFrame(renderGradient);
    }
}

class Particle {
    constructor() {
        this.reset(true);
    }

    reset(initial = false) {
        const width = particlesCanvas.width / (window.devicePixelRatio || 1);
        const height = particlesCanvas.height / (window.devicePixelRatio || 1);
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -10;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = Math.random() * 0.4 + 0.15;
        this.radius = Math.random() * 1.8 + 0.6;
        this.opacity = Math.random() * 0.4 + 0.2;
        this.color = Math.random() > 0.5
            ? `rgba(255, 107, 53, ${this.opacity})`
            : `rgba(0, 173, 181, ${this.opacity})`;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        const width = particlesCanvas.width / (window.devicePixelRatio || 1);
        const height = particlesCanvas.height / (window.devicePixelRatio || 1);

        if (this.x < -10 || this.x > width + 10) this.vx *= -1;
        if (this.y > height + 10) this.reset();
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

const particles = [];

function initParticles() {
    particles.length = 0;
    const baseCount = window.innerWidth < 768 ? 70 : 120;
    for (let i = 0; i < baseCount; i += 1) {
        particles.push(new Particle());
    }
}

function renderParticles() {
    if (!particlesCtx) return;
    const width = particlesCanvas.width / (window.devicePixelRatio || 1);
    const height = particlesCanvas.height / (window.devicePixelRatio || 1);
    particlesCtx.clearRect(0, 0, width, height);

    particles.forEach(particle => {
        particle.update();
        particle.draw(particlesCtx);
    });

    // Connect nearby particles for a subtle network effect
    for (let i = 0; i < particles.length; i += 1) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j += 1) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 110) {
                particlesCtx.beginPath();
                particlesCtx.moveTo(p1.x, p1.y);
                particlesCtx.lineTo(p2.x, p2.y);
                particlesCtx.strokeStyle = `rgba(255, 107, 53, ${0.08 * (1 - distance / 110)})`;
                particlesCtx.lineWidth = 0.5;
                particlesCtx.stroke();
            }
        }
    }

    if (!prefersReducedMotion) {
        particleAnimationId = requestAnimationFrame(renderParticles);
    }
}

function updateScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = `${progress}%`;
}

function updateHeaderState() {
    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        } else {
            entry.target.classList.remove('in-view');
        }
    });
}, {
    threshold: 0.25,
    rootMargin: '-10% 0px -10% 0px'
});

sections.forEach(section => sectionObserver.observe(section));

const animateObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            animateObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
});

animatedElements.forEach(el => animateObserver.observe(el));

function updateActiveNav() {
    let currentId = '';
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.33 && rect.bottom >= window.innerHeight * 0.33) {
            currentId = section.id;
        }
    });

    document.querySelectorAll('.site-nav a').forEach(link => {
        if (!link.getAttribute('href')?.startsWith('#')) return;
        const targetId = link.getAttribute('href').replace('#', '');
        if (targetId === currentId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function updateSectionLighting() {
    const viewportCenter = window.scrollY + window.innerHeight / 2;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + window.scrollY + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        const intensity = Math.max(0.2, 1 - distance / window.innerHeight);
        section.style.setProperty('--section-light', intensity.toFixed(2));
    });
}

function closeNav() {
    nav.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
}

navToggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
        closeNav();
    });
});

window.addEventListener('scroll', () => {
    updateScrollProgress();
    updateHeaderState();
    updateActiveNav();
    updateSectionLighting();
});

window.addEventListener('resize', () => {
    if (gradientAnimationId) {
        cancelAnimationFrame(gradientAnimationId);
        gradientAnimationId = null;
    }
    if (particleAnimationId) {
        cancelAnimationFrame(particleAnimationId);
        particleAnimationId = null;
    }

    resizeCanvas();
    initParticles();
    renderGradient(performance.now());
    renderParticles();
    updateSectionLighting();
});

resizeCanvas();
renderGradient(performance.now());
initParticles();
renderParticles();

updateScrollProgress();
updateHeaderState();
updateActiveNav();
updateSectionLighting();

if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
}

if (consultingForm) {
    consultingForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(consultingForm);
        const name = formData.get('nome') || 'professionista';
        alert(`Grazie ${name}! Ti ricontatteremo entro 24 ore con la proposta migliore per il tuo team.`);
        consultingForm.reset();
    });
}

const heroImage = document.querySelector('.hero-visual img');
if (heroImage && !prefersReducedMotion) {
    document.addEventListener('mousemove', event => {
        const moveX = (event.clientX / window.innerWidth - 0.5) * 20;
        const moveY = (event.clientY / window.innerHeight - 0.5) * 12;
        heroImage.style.setProperty('--parallax-x', `${moveX}px`);
        heroImage.style.setProperty('--parallax-y', `${moveY}px`);
    });
}
