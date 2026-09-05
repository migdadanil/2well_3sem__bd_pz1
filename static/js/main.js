// Управление музыкой
function toggleMusic() {
    var music = document.getElementById('bg-music');
    var btn = document.getElementById('music-toggle');
    
    if (!music) return;
    
    if (music.paused) {
        music.play().catch(function(error) {
            console.log('Ошибка воспроизведения:', error);
        });
        btn.textContent = '🔇 Выключить';
        btn.style.background = '#B89999';
    } else {
        music.pause();
        btn.textContent = ' Музыка';
        btn.style.background = '#722F37';
    }
}

// При загрузке страницы - музыка выключена
window.addEventListener('load', function() {
    var music = document.getElementById('bg-music');
    var btn = document.getElementById('music-toggle');
    
    if (music) {
        music.pause();
        music.currentTime = 0; // Сбросить на начало
    }
    
    if (btn) {
        btn.textContent = '🎵 Музыка';
        btn.style.background = '#722F37';
    }
});
