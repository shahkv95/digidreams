const modal = document.getElementById('about-modal');
const btnAbout = document.getElementById('btn-about');
const closeBtn = modal.querySelector('.close-modal');
const uiLayer = document.getElementById('ui-layer');

function restoreUI() {
    uiLayer.style.opacity = '1';
    uiLayer.style.transform = 'scale(1)';
}

btnAbout.onclick = () => {
    modal.classList.add('active');
    document.body.classList.add('modal-open');
};

closeBtn.onclick = () => {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    restoreUI();
};

document.addEventListener('click', e => {
    if (
        modal.classList.contains('active') &&
        !modal.contains(e.target) &&
        !btnAbout.contains(e.target)
    ) {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
        restoreUI();
    }
});
