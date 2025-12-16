const container = document.getElementById('canvas-container');

App.scene = new THREE.Scene();
App.scene.fog = new THREE.FogExp2(0xE3EBE6, 0.012);
App.scene.background = new THREE.Color(0xE3EBE6);

App.camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  1000
);

App.camera.position.set(0, 30, 80);
App.camera.lookAt(0, 0, 0);

App.renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});

App.renderer.setSize(window.innerWidth, window.innerHeight);
App.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
App.renderer.shadowMap.enabled = true;
App.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

container.appendChild(App.renderer.domElement);

window.addEventListener('resize', () => {
  App.camera.aspect = window.innerWidth / window.innerHeight;
  App.camera.updateProjectionMatrix();
  App.renderer.setSize(window.innerWidth, window.innerHeight);
});
