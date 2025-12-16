const musicBtn = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
bgMusic.volume = 0.2;

let busy = false;

musicBtn.addEventListener('click', async () => {
    if (busy) return;
    busy = true;
    try {
        if (bgMusic.paused) {
            await bgMusic.play();
            musicBtn.innerHTML = '<i data-lucide="volume-2"></i>';
        } else {
            bgMusic.pause();
            musicBtn.innerHTML = '<i data-lucide="music"></i>';
        }
        lucide.createIcons();
    } finally {
        busy = false;
    }
});
