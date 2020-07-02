//Variables for setup

let container;
let camera;
let renderer;
let scene;
let house;


function init() {
  container = document.querySelector(".board");

  //Create scene
  scene = new THREE.Scene();

  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 1000;

  //Camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 5, 30);

  const ambient = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(50, 50, 100);
  scene.add(light);
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  //Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("./mini/mini.gltf", function(gltf) {
    scene.add(gltf.scene);
    house = gltf.scene.children[0];
    animate();
  });
  
}



function animate() {
  requestAnimationFrame(animate);
  // house.rotation.z += 0.005;
  renderer.render(scene, camera);
}

init();

let controls = new THREE.OrbitControls(camera,container);
controls.addEventListener('change', renderer);

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}
renderer.outputEncoding = THREE.sRGBEncoding;

window.addEventListener("resize", onWindowResize);




// scene = new THREE.Scene();


// camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
// scene.add( camera );

// container = document.querySelector(".scene");
// let controls = new THREE.OrbitControls(camera,container);
// controls.addEventListener('change', renderer);


// hlight = new THREE.AmbientLight (0x404040,100);
// scene.add(hlight);

// directionalLight = new THREE.DirectionalLight(0xffffff,100);
// directionalLight.position.set(0,1,0);
// directionalLight.castShadow = true;
// scene.add(directionalLight);

// light = new THREE.PointLight(0xc4c4c4,10);
// light.position.set(50,50,100);
// scene.add(light);

// renderer = new THREE.WebGLRenderer({antialias:true});
// renderer.setSize(window.innerWidth,window.innerHeight);
// renderer.setPixelRatio(window.devicePixelRatio);
// document.body.appendChild(renderer.domElement);

// let loader = new THREE.GLTFLoader();
// loader.load("./mini/mini.gltf", function(gltf){
//   car = gltf.scene.children[0];
//   scene.add(gltf.scene);
//   animate();
// });


// function animate() {
//   renderer.render(scene,camera);
//   requestAnimationFrame(animate);
// }




