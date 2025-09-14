// Import Three.js
const THREE = window.THREE

// Three.js Background Animation
class BackgroundAnimation {
  constructor() {
    this.canvas = document.getElementById("background-canvas")
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true })

    this.particles = []
    this.particleCount = 100

    this.init()
    this.createParticles()
    this.animate()
    this.handleResize()
  }

  init() {
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.camera.position.z = 5
  }

  createParticles() {
    const geometry = new THREE.SphereGeometry(0.02, 8, 8)
    const material = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.6,
    })

    for (let i = 0; i < this.particleCount; i++) {
      const particle = new THREE.Mesh(geometry, material)

      particle.position.x = (Math.random() - 0.5) * 10
      particle.position.y = (Math.random() - 0.5) * 10
      particle.position.z = (Math.random() - 0.5) * 10

      particle.velocity = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      }

      this.particles.push(particle)
      this.scene.add(particle)
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate())

    this.particles.forEach((particle) => {
      particle.position.x += particle.velocity.x
      particle.position.y += particle.velocity.y
      particle.position.z += particle.velocity.z

      // Boundary check
      if (particle.position.x > 5 || particle.position.x < -5) {
        particle.velocity.x *= -1
      }
      if (particle.position.y > 5 || particle.position.y < -5) {
        particle.velocity.y *= -1
      }
      if (particle.position.z > 5 || particle.position.z < -5) {
        particle.velocity.z *= -1
      }

      // Rotation
      particle.rotation.x += 0.01
      particle.rotation.y += 0.01
    })

    this.renderer.render(this.scene, this.camera)
  }

  handleResize() {
    window.addEventListener("resize", () => {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    })
  }
}

// Initialize background animation when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new BackgroundAnimation()
})
