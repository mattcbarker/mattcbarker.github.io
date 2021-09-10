<template>
  <b-container fluid class="zp">
    <b-row class="zp">
      <b-col id="c"></b-col>
    </b-row>
  </b-container>
</template>
<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default {
  name: "exp",
  components: {},
  data() {
    return {
      renderer: null,
      scene: null,
      camera: null,
      scenebox: null,
      container: null,
      canvasW: null,
      canvasH: null,
      mesh: null,
      geometry: null,
      material: null,
      loader: null,
      parser: null,
      gui: null,
      gltf: Object,
      controls: null,
    };
  },
  created() {
    window.addEventListener("resize", this.resize);
  },
  detroyed() {
    window.addEventListener("resize", this.resize);
  },

  methods: {
    init: function () {
      this.scenebox = document.getElementById("c");
      this.container = document.getElementById("app");

      this.canvasW = this.container.clientWidth;
      this.canvasH = this.canvasW / 2;

      this.camera = new THREE.PerspectiveCamera(
        70,
        this.canvasW / this.canvasH,
        0.01,
        20
      );

      this.camera.position.set(8, 0, 0);
      //this.camera.rotation.set(-0.785398, 0.7, 0.5);
      this.scene = new THREE.Scene();
      this.loader = new GLTFLoader();

      this.loader.load(
        "/newweb.gltf",
        (gltf) => {
          this.gltf = gltf;
          console.log(gltf.scene);
          this.scene.add(gltf.scene);

          gltf.animations; // Array<THREE.AnimationClip>
          gltf.scene; // THREE.Group
          gltf.scenes; // Array<THREE.Group>
          gltf.cameras; // Array<THREE.Camera>
          gltf.asset; // Object
        },
        function (xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        function (error) {
          console.log("An error happened: " + error);
        }
      );

      //lighting
      const light = new THREE.AmbientLight(0x404040); // soft white light
      this.scene.add(light);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      this.scene.add(directionalLight);

      const light2 = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
      this.scene.add(light2);

      //end lighting

      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setClearColor(0x000000, 0);
      this.renderer.setSize(this.canvasW / this.canvasH);

      //centers this
      this.renderer.domElement.setAttribute("style", "margin:auto");

      //adds orbit controls
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableZoom = false;

      this.scenebox.appendChild(this.renderer.domElement);
    },
    animat3d: function () {
      requestAnimationFrame(this.animat3d);
      //this.mesh.rotation.x += 0.01;
      //this.gltf.scene.children[0].rotation.y += 0.01;
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    },
    resize: function () {
      this.canvasW = this.container.clientWidth;
      this.canvasH = this.canvasW / 2;
      this.camera.aspect = this.canvasW / this.canvasH;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.canvasW, this.canvasH);
    },
  },
  mounted() {
    this.init();
    this.resize();
    this.animat3d();
  },
};
</script>

<style scoped>
.zp {
  padding: 0;
}
</style>
