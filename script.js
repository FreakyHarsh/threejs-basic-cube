//Scene
const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "cyan" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const size = {
  width: 800,
  height: 800
};

// Camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl");
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;
const renderer = new THREE.WebGLRenderer({
  canvas
});
renderer.setSize(size.width, size.height);

renderer.render(scene, camera);
