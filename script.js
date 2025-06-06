document.addEventListener('DOMContentLoaded', function() {
    // Countdown Animado
    function updateCountdown() {
        const targetDate = new Date('July 5, 2025 18:00:00').getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Animación al cambiar números
        const animateNumber = (elementId, value) => {
            const element = document.getElementById(elementId);
            if (element.textContent !== value) {
                element.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    element.textContent = value;
                    element.style.transform = 'scale(1)';
                }, 200);
            }
        };

        animateNumber('days', days.toString().padStart(2, '0'));
        animateNumber('hours', hours.toString().padStart(2, '0'));
        animateNumber('minutes', minutes.toString().padStart(2, '0'));
        animateNumber('seconds', seconds.toString().padStart(2, '0'));

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown-container h3').textContent = '¡La Celebración ha Comenzado!';
            document.querySelector('.countdown').innerHTML = '<p class="celebration-text">¡Gracias por acompañarnos!</p>';
        }
    }

    // Efecto de Carga Inicial
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 300);

    // Iniciar Countdown
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Efecto Hover en Botón
    const goldButton = document.querySelector('.gold-button');
    goldButton.addEventListener('mouseenter', () => {
        goldButton.style.transform = 'translateY(-5px)';
    });
    goldButton.addEventListener('mouseleave', () => {
        goldButton.style.transform = 'translateY(0)';
    });
});

// Transición suave al cargar
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 1s ease';
// Efecto de Partículas Interactivas
particlesJS("particles-js", {
    particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#D4AF37" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#D4AF37", opacity: 0.3, width: 1 },
        move: { enable: true, speed: 3, direction: "none", random: true, straight: false, out_mode: "out" }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        }
    }
});

// Efecto de sonido al pasar mouse sobre notas musicales
document.querySelectorAll('.music-note').forEach(note => {
    note.addEventListener('mouseenter', () => {
        const noteSound = new Audio('data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
        noteSound.volume = 0.2;
        noteSound.play();
        
        // Efecto visual
        note.style.transform = 'scale(1.5)';
        setTimeout(() => {
            note.style.transform = 'scale(1)';
        }, 300);
    });
});

// Movimiento parallax para vestidos
window.addEventListener('mousemove', (e) => {
    const xPos = e.clientX / window.innerWidth;
    const yPos = e.clientY / window.innerHeight;
    
    document.querySelectorAll('.floating-dress').forEach((dress, index) => {
        const speed = index * 0.5 + 1;
        dress.style.transform = `translate(${xPos * 20 * speed}px, ${yPos * 20 * speed}px)`;
    });
});