
// Create WebGL renderer with the full width and height of the window

var gPadX1=0, gPadY1=0;
var gPadX2=0, gPadY2=0;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Create the scene
var scene = new THREE.Scene();

// Create a perspective camera and add to scene
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 100);
camera.position.z = 3;
scene.add(camera);

// Add ambient light to scene
var ambientLight = new THREE.AmbientLight(0x888888);
scene.add(ambientLight);

// Add directional light to scene
var directionalLight = new THREE.DirectionalLight(0xCCCCCC, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Create the earth mesh and add to scene
// var myGeometry = new THREE.SphereGeometry(0.5, 6, 6);
var myGeometry = new THREE.BoxGeometry( 1, 1, 1 );
var ballGeometry = new THREE.SphereGeometry(0.5, 12, 12);


// var myMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var myMaterial = new THREE.MeshNormalMaterial();

var myMesh1 = new THREE.Mesh(myGeometry, myMaterial);
var myMesh2 = new THREE.Mesh(myGeometry, myMaterial);

myMesh1.position.set(-1, 0, 0);
myMesh2.position.set( 1, 0, 0);

scene.add(myMesh1);
scene.add(myMesh2);


// Animation loop for rendering
requestAnimationFrame(function animate() {
    // Continue looping
    requestAnimationFrame(animate);
    // camera.position.x .y .z 
    myMesh1.rotation.x = gPadX1; // cube.scale.x	
    myMesh1.rotation.y = gPadY1; 
	
    myMesh2.rotation.x = gPadX2; // cube.scale.x	
    myMesh2.rotation.y = gPadY2;
    
    // Render scene
    renderer.render(scene, camera);
});
