document.addEventListener('DOMContentLoaded', function() {
    const body = document.getElementById('mainBody');
    const buttons = document.querySelectorAll('.cyber-button');
    const chatModal = document.getElementById('chatModal');

    if (body) {
        body.addEventListener('mousemove', function(e) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            body.style.backgroundPosition = `${x * 50}px ${y * 50}px`;
            buttons.forEach(button => {
                const rect = button.getBoundingClientRect();
                const buttonX = (e.clientX - rect.left) / rect.width - 0.5;
                const buttonY = (e.clientY - rect.top) / rect.height - 0.5;
                button.style.transform = `
                    perspective(1000px)
                    rotateY(${buttonX * 10}deg)
                    rotateX(${-buttonY * 10}deg)
                    translateZ(10px)
                `;
            });
        });

        body.addEventListener('mouseleave', function() {
            buttons.forEach(button => {
                button.style.transform = 'none';
            });
        });
    }
});

function openChat() {
    const chatModal = document.getElementById('chatModal');
    if (chatModal) {
        chatModal.classList.remove('hidden');
        chatModal.classList.add('flex');
    }
}

function closeChat() {
    const chatModal = document.getElementById('chatModal');
    if (chatModal) {
        chatModal.classList.add('hidden');
        chatModal.classList.remove('flex');
    }
} 