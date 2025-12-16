const container = document.getElementById('canvas-container');

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0xE3EBE6, 0.012);
scene.background = new THREE.Color(0xE3EBE6);

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
);
camera.position.set(0, 30, 80);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

container.appendChild(renderer.domElement);

App.scene = scene;
App.camera = camera;
App.renderer = renderer;
