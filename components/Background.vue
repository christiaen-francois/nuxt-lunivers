<template>
  <div id="luniversbg"></div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import * as THREE from '~/node_modules/three/build/three.module.js'
import { SVGLoader } from '~/node_modules/three/examples/jsm/loaders/SVGLoader.js'
export default {
  components: {},
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      parameters: null,
      wrap: null,
      bg_scene: null,
      bg_camera: null,
      bg_texture: null,
      bg_mesh: null,
      bg_light: null,
      MeshLambertMaterial: null,
      mouseX: 0,
      mouseY: 0,
      mouse: {
        x: 0,
        y: 0,
        cameraX: 0,
        cameraY: 0,
      },
      center: {
        x: 0,
        y: 0,
      },
      windowHeight: null,
      windowHalfX: null,
      windowHalfY: null,
      materials: [],
      cube: null,
      sphere: null,
      gsap: null,
      ScrollTrigger: null,
      maintl: null,
      greatLogo: null,
      scrollEvent: {
        y: 0,
        deltaY: 0,
      },
      maxHeight: null,
      scrollY: 0,
    }
  },
  computed: {
    ...mapState({
      sceneLoaded: (state) => state.background.sceneLoaded,
    }),
  },
  mounted() {
    const oCanvas = document.body.getElementsByTagName('canvas')[0]
    if (typeof oCanvas !== 'undefined' && oCanvas != null) {
      document.body.removeChild(oCanvas)
    }

    // this.gsap = this.$gsap
    // this.ScrollTrigger = this.$ScrollTrigger
    // this.gsap.registerPlugin(this.ScrollTrigger)

    this.$nextTick(function () {
      this.getWindowHeight()
    })
    window.addEventListener('resize', this.getWindowHeight)

    this.windowHalfX = window.innerWidth / 2
    this.windowHalfY = window.innerHeight / 2

    this.center.x = this.windowHalfX
    this.center.y = this.windowHalfY

    this.maxHeight =
      (document.body.clientHeight || document.body.offsetHeight) -
      window.innerHeight

    // console.log("muntd", [this.windowHalfX, this.windowHalfY, this.center.x, this.center.y]);

    this.init()
  },
  created() {
    // console.log("created", 'created called.');
  },
  methods: {
    ...mapMutations('background', ['setSceneLoaded']),
    init() {
      const comp = this
      const manager = new THREE.LoadingManager()

      manager.onStart = function (item, loaded, total) {
        // console.log('Loading started')
      }

      manager.onProgress = function (item, loaded, total) {
        // console.log(item, loaded, total)
        // console.log('Loaded:', Math.round((loaded / total) * 100, 2) + '%')
        // bar.animate(1.0)
        //
      }

      manager.onLoad = function () {
        // console.log('Loading complete', comp.scene.render)
        // bar.destroy()
        comp.mySceneLoaded()
        // comp.animateOnScroll()
      }

      manager.onError = function (url) {
        // console.log('Error loading')
      }
      // console.log("mounted", "init");
      // $(".starfield").starfield();
      // var plscene = document.getElementById("scene");
      // var parallaxInstance = new Parallax(plscene);

      // Three.js
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        2000
      )
      this.camera.position.z = 1000
      this.camera.position.y = 300
      /*
      var aspect = window.innerWidth / window.innerHeight;
      var d = 50;
      this.camera = new THREE.OrthographicCamera( - d * aspect, d * aspect, d, - d, 1, 2000 );
      this.camera.position.set( 1000, 1000, 1000 ); // all components equal
      */

      this.scene = new THREE.Scene()
      this.wrap = new THREE.Group()
      this.scene.add(this.wrap)
      this.scene.fog = new THREE.FogExp2(10842, 0.00125)

      // Helper
      // const helper = new THREE.GridHelper(1600, 10)
      // helper.rotation.x = Math.PI / 2
      // this.scene.add(helper)

      const geometry = new THREE.BufferGeometry()
      const vertices = []

      const textureLoader = new THREE.TextureLoader(manager)

      const sprite1 = textureLoader.load('/img/tex1.png')
      const sprite2 = textureLoader.load('/img/tex2.png')
      const sprite3 = textureLoader.load('/img/tex3.png')

      for (let i = 0; i < 20; i++) {
        const x = Math.random(-180, 180) * 2000 - 1000
        const y = Math.random(-180, 180) * 2000 - 1000
        const z = Math.random(-180, 180) * 2000 - 1000

        vertices.push(x, y, z)
      }

      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(vertices, 3)
      )

      this.parameters = [
        [[1.0, 0.2, 0.5], sprite1, 0.3],
        [[0.95, 0.1, 0.5], sprite2, 0.3],
        [[0.9, 0.05, 0.5], sprite3, 0.3],
        [[0.85, 0, 0.5], sprite1, 0.15],
        [[0.8, 0, 0.5], sprite2, 0.15],
      ]

      for (let i = 0; i < this.parameters.length; i++) {
        // const color = this.parameters[i][0]
        const sprite = this.parameters[i][1]
        const size = this.parameters[i][2]

        this.materials[i] = new THREE.PointsMaterial({
          size: 100 * size,
          map: sprite,
          blending: THREE.AdditiveBlending,
          depthTest: false,
          transparent: true,
        })

        const particles = new THREE.Points(geometry, this.materials[i])

        particles.rotation.x = Math.random(-180, 180) * 6
        particles.rotation.y = Math.random(-180, 180) * 6
        particles.rotation.z = Math.random(-180, 180) * 6

        this.scene.add(particles)
      }

      // this.cube = new THREE.Mesh(
      //   new THREE.CubeGeometry(500, 500, 500),
      //   new THREE.MeshNormalMaterial()
      // )
      // this.cube.position.y = 0
      // this.cube.position.z = 0
      // this.cube.position.x = 0
      // this.scene.add(this.cube)

      // SVG !

      // GSAP Timeline

      const loader = new SVGLoader(manager)
      this.greatLogo = new THREE.Group()

      loader.load('/img/lunivers-small.svg', function (data) {
        const paths = data.paths
        // console.log('paths', paths)
        // comp.greatLogo = new THREE.Group()
        comp.greatLogo.scale.multiplyScalar(3.25)
        comp.greatLogo.position.x = -490
        comp.greatLogo.position.y = 490
        comp.greatLogo.position.z = 0
        comp.greatLogo.scale.y *= -1

        for (let i = 0; i < paths.length; i++) {
          const path = paths[i]

          // const fillColor = path.userData.style.fill
          const strokeColor = '#fff' // path.userData.style.stroke
          const strokeOpacity = '0.2' // path.userData.style.strokeOpacity
          // console.log('style', path.userData.style)

          if (strokeColor !== undefined && strokeColor !== 'none') {
            const material = new THREE.MeshBasicMaterial({
              color: new THREE.Color().setStyle(strokeColor),
              opacity: strokeOpacity,
              transparent: strokeOpacity < 1,
              side: THREE.DoubleSide,
              depthWrite: false,
              wireframe: false,
            })
            for (let j = 0, jl = path.subPaths.length; j < jl; j++) {
              const subPath = path.subPaths[j]

              const geometry = SVGLoader.pointsToStroke(
                subPath.getPoints(),
                path.userData.style
              )

              if (geometry) {
                const mesh = new THREE.Mesh(geometry, material)

                comp.greatLogo.add(mesh)
              }
            }
          }
        }
        // console.log(group)
        comp.scene.add(comp.greatLogo)
      })

      //

      // document.body.style.touchAction = 'none'
      document.body.addEventListener('pointermove', this.onPointerMove, false)
      // document.body.addEventListener('wheel', this.onWheel, { passive: false })

      this.renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        precision: 'lowp',
      })
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.renderer.setClearColor(0x070423, 1)

      // Step 2

      this.bg_scene = new THREE.Scene()
      this.bg_camera = new THREE.Camera()
      // camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,.1,1000);
      // camera.position.z = 0;
      // this.bg_texture = THREE.ImageUtils.loadTexture('/img/bg-2.jpg', {})
      this.bg_texture = new THREE.TextureLoader(manager).load('/img/bg-2.jpg')
      this.MeshLambertMaterial = new THREE.MeshLambertMaterial({
        map: this.bg_texture,
      })
      this.bg_mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2, 0),
        this.MeshLambertMaterial
      )
      this.bg_mesh.material.depthTest = !1
      this.bg_mesh.material.depthWrite = !1
      this.bg_scene.add(this.bg_camera)
      this.bg_scene.add(this.bg_mesh)
      this.bg_light = new THREE.SpotLight(16777215, 2, 100, Math.PI / 6, 0.4)
      this.bg_scene.add(this.bg_light)

      // Step 3

      // this.sphere = new THREE.Mesh(
      //   new THREE.SphereGeometry(300, 10, 10),
      //   new THREE.MeshNormalMaterial()
      // )
      // this.sphere.position.y = 0
      // this.sphere.position.z = 0
      // this.sphere.position.x = 500
      // this.scene.add(this.sphere)

      // console.log(vertices);

      document.body.appendChild(this.renderer.domElement)

      this.animate()

      //

      window.addEventListener('resize', this.onWindowResize, false)
    },
    onWindowResize() {
      this.windowHalfX = window.innerWidth / 2
      this.windowHalfY = window.innerHeight / 2
      this.center.x = this.windowHalfX
      this.center.y = this.windowHalfY
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(window.innerWidth, window.innerHeight)
    },
    onPointerMove(event) {
      if (event.isPrimary === false) return

      // console.log(this.center.x);

      // console.log([this.mouse.y, this.mouse.x]);
      // mouseX = event.clientX - windowHalfX;
      // mouseY = event.clientY - windowHalfY;
      this.mouse.x = (event.clientX - this.center.x) / this.center.x
      this.mouse.y = (event.clientY - this.center.y) / this.center.y

      this.mouse.cameraX = 200 * this.mouse.x
      this.mouse.cameraY = 100 * this.mouse.y
      this.mouse.lightX = -this.mouse.x
      this.mouse.lightY = this.mouse.y
    },
    animate() {
      requestAnimationFrame(this.animate)
      this.render()
    },
    render() {
      // const percentage = this.lerp(percentage, -_event.y, 0.07)
      const time = Date.now() * 0.00005

      this.renderer.autoClear = !1
      this.renderer.clear()
      this.bg_light.position.copy(
        new THREE.Vector3(this.mouse.lightX, this.mouse.lightY, 3)
      )
      this.renderer.render(this.bg_scene, this.bg_camera)

      this.camera.position.x +=
        0.05 * (this.mouse.cameraX - this.camera.position.x)
      this.camera.position.y +=
        0.05 * (-this.mouse.cameraY - this.camera.position.y)

      this.camera.lookAt(this.wrap.position)

      // this.greatLogo.position.z = -500

      for (let i = 0; i < this.scene.children.length; i++) {
        const object = this.scene.children[i]

        if (object instanceof THREE.Points) {
          object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1))
        }
      }

      // animer le cube
      // this.cube.rotation.x += 0.01
      // this.cube.rotation.y += 0.0025
      // this.cube.rotation.z += 0.002

      this.renderer.render(this.scene, this.camera)

      // this.animateOnScroll()
    },
    getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight
    },
    mySceneLoaded() {
      this.setSceneLoaded(true)
      // this.animateOnScroll()
    },
    onWheel(e) {
      // for embedded demo
      e.stopImmediatePropagation()
      // e.preventDefault()
      e.stopPropagation()

      const evt = this.scrollEvent
      evt.deltaY = e.wheelDeltaY || e.deltaY * -1
      // reduce by half the delta amount otherwise it scroll too fast
      evt.deltaY *= 0.5

      this.scroll(e)
    },
    scroll(e) {
      const evt = this.scrollEvent
      // limit scroll top
      if (evt.y + evt.deltaY > 0) {
        evt.y = 0
        // limit scroll bottom
      } else if (-(evt.y + evt.deltaY) >= this.maxHeight) {
        evt.y = -this.maxHeight
      } else {
        evt.y += evt.deltaY
      }
      this.scrollY = -evt.y
    },
    lerp(a, b, t) {
      return (1 - t) * a + t * b
    },
    animateOnScroll() {
      // console.log('animateOnScroll', this.greatLogo.position)
      // this.onWindowResize()
      // this.ScrollTrigger.refresh()
      // const sectionDuration = 1

      const tl = this.gsap.timeline({
        // ease: 'circ.inOut',
        // onUpdate: this.scene.render,
        scrollTrigger: {
          scrub: 0.6,
          trigger: '.header-full-height',
          start: 'bottom bottom',
          end: 'bottom 50%',
          markers: {
            startColor: '#01C8EE',
            endColor: '#EE2E7C',
            fontSize: '10px',
            fontWeight: 'normal',
            indent: 20,
          },
        },
        defaults: {
          immediateRender: false,
          // ease: 'power1.inOut',
        },
      })
      // this.ScrollTrigger.refresh()
      const delay = 0.15
      tl.to(this.greatLogo.position, { z: -1100 }, delay)
    },
  },
}
</script>
<style lang="scss">
canvas {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  @include transitionPrefixMultiple(0.2s, all);
}
</style>
