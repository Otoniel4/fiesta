document.addEventListener('DOMContentLoaded', function() {
    // Mostrar/ocultar ubicación con animación
    const locationBtn = document.getElementById('locationBtn');
    const locationText = document.getElementById('locationText');
    
    locationBtn.addEventListener('click', function() {
        locationText.classList.toggle('hidden');
        if (!locationText.classList.contains('hidden')) {
            animateLocationAppearance();
            createGoldenConfetti();
        }
    });
    
    function animateLocationAppearance() {
        locationText.style.opacity = '0';
        locationText.style.transform = 'translateY(20px)';
        locationText.style.transition = 'none';
        
        setTimeout(() => {
            locationText.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            locationText.style.opacity = '1';
            locationText.style.transform = 'translateY(0)';
        }, 10);
    }
    
    // Copiar dirección al portapapeles con mejor feedback
    const copyBtn = document.getElementById('copyBtn');
    const addressInput = document.getElementById('addressInput');
    
    copyBtn.addEventListener('click', function() {
        addressInput.select();
        document.execCommand('copy');
        
        // Feedback visual mejorado
        copyBtn.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
        copyBtn.style.background = 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)';
        copyBtn.style.border = '1px solid #4CAF50';
        
        setTimeout(function() {
            copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copiar al portapapeles';
            copyBtn.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)';
            copyBtn.style.border = '1px solid #FFD700';
        }, 2000);
    });
    
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
            element.style.color = '#FFF';
            setTimeout(() => {
                element.textContent = newValue;
                element.style.transform = 'scale(1)';
                element.style.color = '#FFD700';
            }, 200);
        }
    }
    
    // Actualizar cada segundo
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // Efecto de confeti dorado mejorado
    function createGoldenConfetti() {
        const confettiCount = 100;
        const container = document.querySelector('.container');
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            
            // Formas variadas
            const shapes = ['circle', 'square', 'triangle', 'star'];
            const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
            
            // Posición inicial aleatoria
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = -20 + 'px';
            
            // Tamaño aleatorio
            const size = Math.random() * 15 + 5;
            
            // Color dorado con variaciones
            const goldVariations = ['#FFD700', '#FFDF00', '#F5D76E', '#E6C229'];
            const randomGold = goldVariations[Math.floor(Math.random() * goldVariations.length)];
            
            // Configurar según la forma
            switch(randomShape) {
                case 'circle':
                    confetti.style.width = size + 'px';
                    confetti.style.height = size + 'px';
                    confetti.style.borderRadius = '50%';
                    confetti.style.backgroundColor = randomGold;
                    break;
                case 'square':
                    confetti.style.width = size + 'px';
                    confetti.style.height = size + 'px';
                    confetti.style.backgroundColor = randomGold;
                    confetti.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
                    break;
                case 'triangle':
                    confetti.style.width = '0';
                    confetti.style.height = '0';
                    confetti.style.borderLeft = size/2 + 'px solid transparent';
                    confetti.style.borderRight = size/2 + 'px solid transparent';
                    confetti.style.borderBottom = size + 'px solid ' + randomGold;
                    break;
                case 'star':
                    confetti.innerHTML = '★';
                    confetti.style.fontSize = size + 'px';
                    confetti.style.color = randomGold;
                    confetti.style.lineHeight = '1';
                    confetti.style.background = 'transparent';
                    break;
            }
            
            // Animación personalizada
            const animationDuration = Math.random() * 3 + 2;
            confetti.style.animation = `fall ${animationDuration}s linear forwards`;
            confetti.style.animationDelay = Math.random() + 's';
            
            container.appendChild(confetti);
            
            // Eliminar después de la animación
            setTimeout(() => {
                confetti.remove();
            }, animationDuration * 1000);
        }
    }
    
    // Efecto de brillo intermitente en elementos dorados
    function addGoldShineEffect() {
        const goldElements = document.querySelectorAll('.title, .subtitle, .quinceanera, .crown-icon');
        
        goldElements.forEach(el => {
            setInterval(() => {
                const intensity = 0.7 + Math.random() * 0.5;
                const blur = 5 + Math.random() * 10;
                el.style.textShadow = `0 0 ${blur}px rgba(255, 215, 0, ${intensity})`;
            }, 2000);
        });
    }
    
    addGoldShineEffect();
    
    // Efecto de carga inicial
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Estilo inicial para el body
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 1s ease';