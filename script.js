// ===== Scroll Reveal Animation =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    updateDday();
    startSnow();
});

// ===== D-Day Logic (2025.12.20) =====
function updateDday() {
    const targetDate = new Date('2025-12-20T18:30:00').getTime();
    const dDayElement = document.getElementById('d-day-count');

    function calculate() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            dDayElement.innerText = "공연 중!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        dDayElement.innerText = `D-${days}`;
    }

    calculate();
    setInterval(calculate, 60000);
}

// ===== Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ===== Snow Effect =====
function startSnow() {
    const container = document.getElementById('snowContainer');
    const snowflakeCount = 40;

    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    setInterval(() => {
        if (container.childElementCount < snowflakeCount) {
            const el = document.createElement('div');
            el.classList.add('snowflake');
            el.innerHTML = '❄';
            el.style.left = Math.random() * 100 + '%';
            el.style.fontSize = (Math.random() * 15 + 10) + 'px';
            el.style.color = Math.random() > 0.5 ? '#D42E2E' : '#2F7D32'; 
            el.style.opacity = Math.random() * 0.5 + 0.2;
            
            const duration = Math.random() * 5 + 5;
            el.style.animation = `fall ${duration}s linear`;
            
            container.appendChild(el);
            
            setTimeout(() => el.remove(), duration * 1000);
        }
    }, 300);
}