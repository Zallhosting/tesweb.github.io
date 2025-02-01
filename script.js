// Ambil elemen
const computerEffect = document.getElementById('computer-effect');
const textElement = document.getElementById('text');

// Fungsi untuk menampilkan efek komputer setelah animasi teks selesai
setTimeout(() => {
    textElement.style.display = 'none';  // Sembunyikan teks asli
    computerEffect.style.display = 'block';  // Tampilkan efek komputer
}, 7000);  // Setelah 7 detik, tampilkan efek komputer
