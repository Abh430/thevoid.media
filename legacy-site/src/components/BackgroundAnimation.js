import * as THREE from "three";
import * as dat from 'dat.gui';

//this animation is borrowed from: https://codepen.io/enesser/pen/jdenE



export default Animation = (mountNodeRef) => {
  // const stats = initStats();

  // create a scene, that will hold all our elements such as objects, cameras and lights.
  var scene = new THREE.Scene();

  // create a camera, which defines where we're looking at.
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

  // create a render and set the size
  var webGLRenderer = new THREE.WebGLRenderer();
  webGLRenderer.setClearColor(new THREE.Color("rgba(5, 0, 20, 1.0)"));
  webGLRenderer.setSize(window.innerWidth, window.innerHeight);
  webGLRenderer.shadowMapEnabled = true;


  // position and point the camera to the center of the scene
  camera.position.x = -30;
  camera.position.y = 40;
  camera.position.z = 50;
  camera.lookAt(new THREE.Vector3(10, 0, 0));

  // add the output of the renderer to the html element
  mountNodeRef.append(webGLRenderer.domElement);

  // call the render function
  var step = 0;

  var knot;

  // setup the control gui
  var controls = new function () {
      // we need the first child, since it's a multimaterial
      this.radius = 40;
      this.tube = 28.2;
      this.radialSegments = 600;
      this.tubularSegments = 12;
      this.p = 5;
      this.q = 4;
      this.heightScale = 4;
      this.asParticles = true;
      this.rotate = true;

      this.redraw = function () {
          // remove the old plane
          if (knot) scene.remove(knot);
          // create a new one
          var geom = new THREE.TorusKnotBufferGeometry(controls.radius, controls.tube, Math.round(controls.radialSegments), Math.round(controls.tubularSegments), Math.round(controls.p), Math.round(controls.q), controls.heightScale);

          if (controls.asParticles) {
              knot = createParticleSystem(geom);
          } else {
              knot = createMesh(geom);
          }

          // add it to the scene.
          scene.add(knot);
      };

  }



  var gui = new dat.GUI({autoPlace: true});
  gui.add(controls, 'radius', 0, 40).onChange(controls.redraw);
  gui.add(controls, 'tube', 0, 40).onChange(controls.redraw);
  gui.add(controls, 'radialSegments', 0, 400).step(1).onChange(controls.redraw);
  gui.add(controls, 'tubularSegments', 1, 20).step(1).onChange(controls.redraw);
  gui.add(controls, 'p', 1, 10).step(1).onChange(controls.redraw);
  gui.add(controls, 'q', 1, 15).step(1).onChange(controls.redraw);
  gui.add(controls, 'heightScale', 0, 5).onChange(controls.redraw);
  gui.add(controls, 'asParticles').onChange(controls.redraw);
  gui.add(controls, 'rotate').onChange(controls.redraw);

  gui.close();
  gui.hide();
  controls.redraw();

  render();

  // from THREE.js examples
  function generateSprite() {

      var canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;

      var context = canvas.getContext('2d');
      var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
      gradient.addColorStop(0, 'rgba(255,255,255,0.8)');
      gradient.addColorStop(0.2, 'rgba(0,255,255,0.6)');
      gradient.addColorStop(0.4, 'rgba(0,0,64,0.3)');
      gradient.addColorStop(1, 'rgba(0,0,0,0.1)');

      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);

      var texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      return texture;

  }

  function createParticleSystem(geom) {
      var material = new THREE.ParticleBasicMaterial({
          color: 0xffffff,
          size: 1,
          transparent: true,
          blending: THREE.AdditiveBlending,
          map: generateSprite()
      });

      var system = new THREE.ParticleSystem(geom, material);
      system.sortParticles = true;
      return system;
  }

  function createMesh(geom) {

      // assign two materials
      var meshMaterial = new THREE.MeshNormalMaterial({});
      meshMaterial.side = THREE.DoubleSide;

      // create a multimaterial
      var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);

      return mesh;
  }

  window.addEventListener( 'resize', onWindowResize, false );

  function onWindowResize(){

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      webGLRenderer.setSize( window.innerWidth, window.innerHeight );

  }

  function render() {
      // stats.update();

      let scrollPosition = window.scrollY;
      step += 0.0005;

      if (controls.rotate) {
          // knot.rotation.y = step += 0.001;

           knot.rotation.y = scrollPosition/5000.0;
      }

      knot.scale.x = Math.abs(Math.sin(step));
      knot.scale.y = Math.abs(Math.cos(step));


      //update radius based on time --> this doesnt work, i think because updating the radius of a drawn
      //geometry effeciently isnt really great.
      // knot.geometry.parameters.radius = 40*Math.abs(Math.sin(step));


      // render using requestAnimationFrame
      requestAnimationFrame(render);
      webGLRenderer.render(scene, camera);
  }

  // function initStats() {
  //
  //     var stats = new Stats();
  //     stats.setMode(0); // 0: fps, 1: ms
  //
  //     // Align top-left
  //     stats.domElement.style.position = 'absolute';
  //     stats.domElement.style.left = '0px';
  //     stats.domElement.style.top = '0px';
  //
  //     $("#Stats-output").append(stats.domElement);
  //
  //     return stats;
  // }
}
