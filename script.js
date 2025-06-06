document.addEventListener('DOMContentLoaded', function() {
    // Animación de Texto de Invitación
    const animateText = () => {
        const texts = document.querySelectorAll('.animate-text');
        texts.forEach((text, index) => {
            setTimeout(() => {
                text.style.opacity = '1';
                text.style.transform = 'translateY(0)';
            }, index * 500);
        });
    };

    // Countdown Animado
    const updateCountdown = () => {
        const targetDate = new Date('July 5, 2025 18:00:00').getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Animación al Cambiar Números
        const animateNumber = (id, value) => {
            const element = document.getElementById(id);
            if (element.textContent !== value) {
                element.style.transform = 'scale(1.3)';
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
            document.querySelector('.countdown-section h3').textContent = '¡La Fiesta ha Comenzado!';
            document.querySelector('.countdown-timer').innerHTML = '<p>¡Gracias por Celebrar con Nosotros!</p>';
        }
    };

    // Efecto de Brillo en Botón
    const goldenButton = document.querySelector('.golden-button');
    goldenButton.addEventListener('mouseenter', () => {
        goldenButton.style.boxShadow = '0 0 20px #FFD700';
    });
    goldenButton.addEventListener('mouseleave', () => {
        goldenButton.style.boxShadow = '0 5px 20px rgba(255, 215, 0, 0.5)';
    });

    // Iniciar Animaciones
    setTimeout(animateText, 500);
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Efecto de Carga Suave
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 200);
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 1s ease';