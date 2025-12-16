const modal = document.getElementById('about-modal');
const btnAbout = document.getElementById('btn-about');
const closeBtn = modal.querySelector('.close-modal');

btnAbout.onclick = () => {
    modal.classList.add('active');
    document.body.classList.add('modal-open');
};

closeBtn.onclick = () => {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
};

document.addEventListener('click', e => {
    if (!modal.contains(e.target) && !btnAbout.contains(e.target)) {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
});
