document.addEventListener('DOMContentLoaded', function() {
    // Animación de texto de invitación
    const invitationTexts = document.querySelectorAll('.invitation-text');
    
    function animateInvitationText() {
        invitationTexts.forEach((text, index) => {
            setTimeout(() => {
                text.classList.add('animate-text');
            }, index * 500);
        });
    }
    
    // Countdown premium
    function updateCountdown() {
        const targetDate = new Date('July 5, 2025 18:00:00').getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        // Cálculos de tiempo
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Mostrar resultados con animación
        animateCountdownChange('days', days.toString().padStart(2, '0'));
        animateCountdownChange('hours', hours.toString().padStart(2, '0'));
        animateCountdownChange('minutes', minutes.toString().padStart(2, '0'));
        animateCountdownChange('seconds', seconds.toString().padStart(2, '0'));
        
        // Si la cuenta regresiva termina
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown-header h3').textContent = '¡La celebración ha comenzado!';
            document.querySelector('.countdown-timer').innerHTML = 
                '<p class="celebration-message">¡Gracias por ser parte de este sueño dorado!</p>';
        }
    }
    
    function animateCountdownChange(id, newValue) {
        const element = document.getElementById(id);
        if (element.textContent !== newValue) {
            element.style.transform = 'scale(1.3)';
            element.style.color = '#D4AF37';
            setTimeout(() => {
                element.textContent = newValue;
                element.style.transform = 'scale(1)';
                element.style.color = '#FFF';
            }, 300);
        }
    }
    
    // Efecto de brillo en botón dorado
    const goldenBtn = document.querySelector('.golden-btn');
    goldenBtn.addEventListener('mouseenter', function() {
        this.querySelector('i').style.transform = 'rotate(15deg)';
    });
    
    goldenBtn.addEventListener('mouseleave', function() {
        this.querySelector('i').style.transform = 'rotate(0)';
    });
    
    // Iniciar animaciones
    setTimeout(animateInvitationText, 1000);
    
    // Actualizar countdown cada segundo
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // Efecto de carga inicial
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Estilo inicial para el body
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 1.5s ease';