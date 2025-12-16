const particlesCount = 2000;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < posArray.length; i += 3) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 20 + Math.random() * 50;
    posArray[i] = Math.cos(angle) * radius;
    posArray[i + 1] = Math.sin(angle) * radius;
    posArray[i + 2] = -200 + Math.random() * 400;
}

const geo = new THREE.BufferGeometry();
geo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const mat = new THREE.PointsMaterial({
    size: 0.4,
    color: 0x00ffff,
    transparent: true,
    opacity: 0
});

const tunnel = new THREE.Points(geo, mat);
App.scene.add(tunnel);

App.groups.particles = { tunnel, geo, mat };
