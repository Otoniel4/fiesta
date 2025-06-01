document.addEventListener('DOMContentLoaded', function() {
    // Configuración de Three.js para el vestido 3D
    const container = document.getElementById('dress-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    
    // Iluminación
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const directionalLight1 = new THREE.DirectionalLight(0xffd700, 0.8);
    directionalLight1.position.set(1, 1, 1);
    scene.add(directionalLight1);
    
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight2.position.set(-1, -1, -1);
    scene.add(directionalLight2);
    
    // Creación del vestido 3D
    createDress();
    
    camera.position.z = 5;
    
    // Controls para animación automática
    let angle = 0;
    const radius = 5;
    
    // Animación
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotación automática
        angle += 0.002;
        camera.position.x = radius * Math.sin(angle);
        camera.position.z = radius * Math.cos(angle);
        camera.lookAt(0, 0, 0);
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Función para crear el vestido
    function createDress() {
        const group = new THREE.Group();
        
        // Parte superior del vestido (corsé)
        const topGeometry = new THREE.CylinderGeometry(0.8, 0.5, 1.5, 32, 1, true);
        const topMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x111111,
            specular: 0xffd700,
            shininess: 100,
            side: THREE.DoubleSide
        });
        const top = new THREE.Mesh(topGeometry, topMaterial);
        top.rotation.x = Math.PI / 2;
        top.position.y = 0.8;
        group.add(top);
        
        // Falda (parte principal)
        const skirtGeometry = new THREE.ConeGeometry(2, 3, 64, 1, true);
        const skirtMaterial = new THREE.MeshPhongMaterial({
            color: 0x111111,
            specular: 0xffd700,
            shininess: 50,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.9
        });
        const skirt = new THREE.Mesh(skirtGeometry, skirtMaterial);
        skirt.position.y = -1.2;
        group.add(skirt);
        
        // Capas adicionales para efecto volumétrico
        for (let i = 0; i < 3; i++) {
            const layerGeometry = new THREE.ConeGeometry(2.1 + i * 0.1, 3.2, 64, 1, true);
            const layerMaterial = new THREE.MeshPhongMaterial({
                color: 0x000000,
                specular: 0xffd700,
                shininess: 30,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.3 - (i * 0.1)
            });
            const layer = new THREE.Mesh(layerGeometry, layerMaterial);
            layer.position.y = -1.2 - (i * 0.05);
            layer.rotation.z = Math.random() * 0.1;
            group.add(layer);
        }
        
        // Decoraciones doradas
        addDressDecorations(group);
        
        scene.add(group);
    }
    
    // Función para añadir decoraciones al vestido
    function addDressDecorations(group) {
        const decorationGeometry = new THREE.SphereGeometry(0.05, 16, 16);
        const decorationMaterial = new THREE.MeshPhongMaterial({
            color: 0xffd700,
            emissive: 0xffcc00,
            emissiveIntensity: 0.5,
            shininess: 100
        });
        
        // Patrón de decoraciones
        const pattern = [
            { x: 0.5, y: 0.2, z: 0 },
            { x: -0.5, y: 0.2, z: 0 },
            { x: 0, y: -0.5, z: 0.8 },
            { x: 0, y: -0.5, z: -0.8 },
            { x: 0.7, y: -0.8, z: 0.3 },
            { x: -0.7, y: -0.8, z: 0.3 },
            { x: 0.7, y: -0.8, z: -0.3 },
            { x: -0.7, y: -0.8, z: -0.3 }
        ];
        
        pattern.forEach(pos => {
            const decoration = new THREE.Mesh(decorationGeometry, decorationMaterial);
            decoration.position.set(pos.x, pos.y, pos.z);
            
            // Animación individual
            decoration.userData = {
                speed: 0.01 + Math.random() * 0.02,
                angle: Math.random() * Math.PI * 2
            };
            
            group.add(decoration);
        });
    }
    
    // Manejo del responsive
    window.addEventListener('resize', function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    // Funcionalidad del modal
    const modal = document.getElementById('confirmation-modal');
    const confirmBtn = document.getElementById('confirm-btn');
    const declineBtn = document.getElementById('decline-btn');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    
    confirmBtn.addEventListener('click', function() {
        modalTitle.textContent = "¡Confirmado!";
        modalMessage.textContent = "Gracias por confirmar tu asistencia. Estamos emocionados de celebrar contigo este día tan especial.";
        modal.style.display = "flex";
    });
    
    declineBtn.addEventListener('click', function() {
        modalTitle.textContent = "Lo lamentamos";
        modalMessage.textContent = "Sentimos mucho que no puedas asistir. Agradecemos que nos hayas informado. ¡Te extrañaremos!";
        modal.style.display = "flex";
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});