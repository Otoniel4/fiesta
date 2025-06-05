document.addEventListener('DOMContentLoaded', function() {
    // Countdown mejorado
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
            element.style.transform = 'scale(1.2)';
            element.style.color = '#D4AF37';
            setTimeout(() => {
                element.textContent = newValue;
                element.style.transform = 'scale(1)';
                element.style.color = '#FFF';
            }, 200);
        }
    }
    
    // Actualizar cada segundo
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // Efecto de brillo intermitente en la corona
    function addCrownShineEffect() {
        const crown = document.querySelector('.crown-icon');
        
        setInterval(() => {
            const intensity = 0.7 + Math.random() * 0.5;
            const blur = 5 + Math.random() * 10;
            crown.style.textShadow = `0 0 ${blur}px rgba(0, 0, 0, ${intensity})`;
        }, 2000);
    }
    
    addCrownShineEffect();
    
    // Efecto de carga inicial
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Estilo inicial para el body
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 1s ease';