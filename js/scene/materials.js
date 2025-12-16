App.materials = {
    terrain: new THREE.MeshStandardMaterial({
        color: 0xDCE8E2,
        roughness: 0.9,
        flatShading: true
    }),
    mountain: new THREE.MeshStandardMaterial({
        color: 0xC8D6D0,
        roughness: 1,
        flatShading: true
    }),
    snow: new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.5
    }),
    tree: new THREE.MeshStandardMaterial({
        color: 0x5D7066,
        roughness: 0.9
    }),
    building: new THREE.MeshStandardMaterial({
        color: 0xFDFCF8,
        roughness: 0.3,
        metalness: 0.1
    }),
    glass: new THREE.MeshPhysicalMaterial({
        color: 0x8DA399,
        roughness: 0,
        metalness: 0,
        transparent: true,
        opacity: 0.5,
        transmission: 0.9
    })
};
