const clock = new THREE.Clock();

setTimeout(() => {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';

  setTimeout(() => {
    loader.remove();
  }, 800);

  animate();
}, 1500);

function animate() {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();

  if (!App.state.isWarping) {
    App.scene.rotation.y +=
      0.05 * (App.interaction.mouseX - App.scene.rotation.y);
    App.scene.rotation.x +=
      0.05 * (App.interaction.mouseY - App.scene.rotation.x);

    App.groups.spheres.children.forEach((s, i) => {
      s.position.y += Math.sin(t * 0.5 + i) * 0.02;
    });
  }

  App.renderer.render(App.scene, App.camera);
}
