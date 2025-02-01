// Ambil elemen canvas dan context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Atur ukuran canvas sesuai ukuran layar
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Konfigurasi efek api
let flames = [];

function createFlame() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 3 + 2;
    const speed = Math.random() * 2 + 1;
    const angle = Math.random() * Math.PI * 2;

    flames.push({ x, y, size, speed, angle });
}

function updateFlames() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    flames.forEach((flame, index) => {
        const dx = Math.cos(flame.angle) * flame.speed;
        const dy = Math.sin(flame.angle) * flame.speed;

        flame.x += dx;
        flame.y += dy;

        ctx.beginPath();
        ctx.arc(flame.x, flame.y, flame.size, 0, Math.PI * 2);
        ctx.fillStyle = 'orange';
        ctx.fill();

        // Hapus flame yang keluar dari layar
        if (flame.x < 0 || flame.x > canvas.width || flame.y < 0 || flame.y > canvas.height) {
            flames.splice(index, 1);
        }
    });

    // Ciptakan flame baru secara acak
    if (Math.random() < 0.1) {
        createFlame();
}

function animateFlames() {
    updateFlames();
    requestAnimationFrame(animateFlames);
}

// Mulai animasi api
animateFlames();
