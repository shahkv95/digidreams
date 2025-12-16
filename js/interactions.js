let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', e => {
    if (!App.state.isWarping) {
        mouseX = (e.clientX - window.innerWidth / 2) * 0.0005;
        mouseY = (e.clientY - window.innerHeight / 2) * 0.0005;
    }
});

window.addEventListener('resize', () => {
    App.camera.aspect = window.innerWidth / window.innerHeight;
    App.camera.updateProjectionMatrix();
    App.renderer.setSize(window.innerWidth, window.innerHeight);
});

App.interaction = { mouseX, mouseY };
