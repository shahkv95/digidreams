const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
    App.state.isDarkMode = !App.state.isDarkMode;
    document.body.classList.toggle('dark-mode');

    toggleBtn.innerHTML = `<i data-lucide="${App.state.isDarkMode ? 'moon' : 'sun'}"></i>`;
    lucide.createIcons();
});
