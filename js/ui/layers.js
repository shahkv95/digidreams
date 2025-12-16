const layersBtn = document.getElementById('layers-toggle');

layersBtn.onclick = () => {
    App.state.isWireframe = !App.state.isWireframe;

    App.scene.traverse(obj => {
        if (!obj.isMesh) return;

        if (!obj.userData.origMat) obj.userData.origMat = obj.material;

        obj.material = App.state.isWireframe
            ? new THREE.MeshBasicMaterial({
                wireframe: true,
                transparent: true,
                opacity: 0.3
            })
            : obj.userData.origMat;
    });
};
