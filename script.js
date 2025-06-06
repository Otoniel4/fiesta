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
// Crear brillos dorados adicionales
function createGoldenParticles() {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'golden-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(particle);
    }
}

// Efecto al hacer scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    document.querySelector('.golden-shower').style.opacity = 1 - scrollPosition / 300;
});

// Iniciar efectos
document.addEventListener('DOMContentLoaded', () => {
    createGoldenParticles();
    
    // Efecto de sonido al tocar decoraciones
    document.querySelectorAll('.floating-decor').forEach(decor => {
        decor.addEventListener('click', () => {
            const noteSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...');
            noteSound.volume = 0.1;
            noteSound.play();
            
            decor.style.transform = 'scale(1.5)';
            setTimeout(() => decor.style.transform = 'scale(1)', 300);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('background-music');
    
    // Configuración inicial
    music.volume = 0.5; // Volumen al 50% para no ser intrusivo
    
    // Intenta reproducir automáticamente
    const playMusic = () => {
        music.play()
            .then(() => console.log('Música reproduciéndose automáticamente'))
            .catch(error => {
                console.log('Autoplay bloqueado:', error);
                // Si falla, muestra un mensaje elegante (sin botones)
                const toast = document.createElement('div');
                toast.innerHTML = 'Presiona en cualquier parte para activar la música';
                toast.style.position = 'fixed';
                toast.style.bottom = '20px';
                toast.style.left = '50%';
                toast.style.transform = 'translateX(-50%)';
                toast.style.backgroundColor = 'rgba(0,0,0,0.7)';
                toast.style.color = '#D4AF37';
                toast.style.padding = '10px 20px';
                toast.style.borderRadius = '20px';
                toast.style.zIndex = '1000';
                toast.style.animation = 'fadeInOut 3s forwards';
                document.body.appendChild(toast);
                
                // Elimina el mensaje después de 3 segundos
                setTimeout(() => toast.remove(), 3000);
            });
    };
    
    // Intenta reproducir al hacer cualquier interacción
    document.body.addEventListener('click', function firstInteraction() {
        playMusic();
        document.body.removeEventListener('click', firstInteraction);
    }, { once: true });
    
    // También intenta reproducir al cargar (puede fallar en algunos navegadores)
    playMusic();
});