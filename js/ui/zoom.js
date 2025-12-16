const { camera, constants } = App;

const thumb = document.getElementById('slider-thumb');
const track = document.getElementById('slider-track');

/**
 * Clamp zoom range to designed composition
 */
constants.MIN_ZOOM = 50;  // closer
constants.MAX_ZOOM = 95;  // farther

function syncThumb() {
    const pct =
        (camera.position.z - constants.MIN_ZOOM) /
        (constants.MAX_ZOOM - constants.MIN_ZOOM);

    thumb.style.top = `${pct * 100}%`;
}

// Ensure initial camera position is valid
camera.position.z = Math.min(
    constants.MAX_ZOOM,
    Math.max(constants.MIN_ZOOM, camera.position.z)
);

syncThumb();

let dragging = false;

thumb.addEventListener('mousedown', e => {
    dragging = true;
    e.stopPropagation();
});

document.addEventListener('mouseup', () => dragging = false);

document.addEventListener('mousemove', e => {
    if (!dragging) return;

    const rect = track.getBoundingClientRect();
    let t = (e.clientY - rect.top) / rect.height;
    t = Math.max(0, Math.min(1, t));

    camera.position.z =
        constants.MIN_ZOOM +
        t * (constants.MAX_ZOOM - constants.MIN_ZOOM);

    syncThumb();
});
