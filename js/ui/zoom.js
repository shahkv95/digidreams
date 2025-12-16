const camera = App.camera;
const constants = App.constants;

const thumb = document.getElementById('slider-thumb');
const track = document.getElementById('slider-track');

function syncThumb() {
  const pct =
    (camera.position.z - constants.MIN_ZOOM) /
    (constants.MAX_ZOOM - constants.MIN_ZOOM) * 100;

  thumb.style.top = `${pct}%`;
}

syncThumb();

let dragging = false;

thumb.addEventListener('mousedown', e => {
  dragging = true;
  e.stopPropagation();
});

document.addEventListener('mouseup', () => {
  dragging = false;
});

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
