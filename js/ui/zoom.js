const { camera, constants } = App;

const thumb = document.getElementById('slider-thumb');
const track = document.getElementById('slider-track');

function syncThumb() {
    const pct = (camera.position.z - constants.MIN_ZOOM) /
        (constants.MAX_ZOOM - constants.MIN_ZOOM) * 100;
    thumb.style.top = `${pct}%`;
}

syncThumb();

let dragging = false;
thumb.onmousedown = () => dragging = true;
document.onmouseup = () => dragging = false;

document.onmousemove = e => {
    if (!dragging) return;
    const r = track.getBoundingClientRect();
    let t = (e.clientY - r.top) / r.height;
    t = Math.max(0, Math.min(1, t));
    camera.position.z = constants.MIN_ZOOM + t *
        (constants.MAX_ZOOM - constants.MIN_ZOOM);
    syncThumb();
};
