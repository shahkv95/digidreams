const { scene, materials } = App;

// Terrain
const terrain = new THREE.Mesh(
    new THREE.CylinderGeometry(60, 55, 10, 64),
    materials.terrain
);
terrain.position.y = -5;
terrain.receiveShadow = true;
scene.add(terrain);

// Mountains
const mtGroup = new THREE.Group();

function createMountain(x, z, h, r) {
    const geo = new THREE.ConeGeometry(r, h, 7, 1);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
        if (pos.getY(i) < h / 2 - 1) {
            pos.setX(i, pos.getX(i) + (Math.random() - 0.5) * 3);
            pos.setZ(i, pos.getZ(i) + (Math.random() - 0.5) * 3);
        }
    }
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, materials.mountain);
    mesh.position.set(x, h / 2 - 5, z);
    mesh.castShadow = true;
    mtGroup.add(mesh);
}

createMountain(-25, -20, 45, 20);
createMountain(0, -35, 60, 25);
createMountain(30, -25, 40, 18);

scene.add(mtGroup);

// Floating spheres
const spheresGroup = new THREE.Group();
for (let i = 0; i < 15; i++) {
    const s = new THREE.Mesh(
        new THREE.SphereGeometry(1, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0xBCE3D6,
            transparent: true,
            opacity: 0.8
        })
    );
    s.scale.setScalar(Math.random() * 3 + 1);
    s.position.set(
        (Math.random() - 0.5) * 100,
        15 + Math.random() * 30,
        (Math.random() - 0.5) * 60
    );
    spheresGroup.add(s);
}

scene.add(spheresGroup);
App.groups.spheres = spheresGroup;
