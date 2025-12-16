const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
App.scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(-50, 80, 50);
dirLight.castShadow = true;
App.scene.add(dirLight);

const spotLight = new THREE.SpotLight(0xE8D5D5, 0.8);
spotLight.position.set(50, 40, -50);
spotLight.lookAt(0, 0, 0);
App.scene.add(spotLight);

App.lights = { hemiLight, dirLight, spotLight };
