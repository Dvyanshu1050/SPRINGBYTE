// Main JavaScript file for Springbyte website
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import LocomotiveScroll from "locomotive-scroll"

class SpringbyteWebsite {
  constructor() {
    this.initializeComponents()
    this.setupEventListeners()
    this.initializeAnimations()
    this.initializeLocomotiveScroll()
  }

  initializeComponents() {
    this.header = document.querySelector(".header")
    this.navToggle = document.getElementById("nav-toggle")
    this.navMenu = document.getElementById("nav-menu")
    this.contactForm = document.getElementById("contact-form")
  }

  setupEventListeners() {
    // Mobile navigation toggle
    this.navToggle?.addEventListener("click", () => {
      this.navMenu.classList.toggle("active")
      this.animateNavToggle()
    })

    // Close mobile menu when clicking on links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        this.navMenu.classList.remove("active")
        this.resetNavToggle()
      })
    })

    // Header scroll effect
    window.addEventListener("scroll", () => {
      this.handleHeaderScroll()
    })

    // Contact form submission
    this.contactForm?.addEventListener("submit", (e) => {
      this.handleFormSubmission(e)
    })

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault()
        const target = document.querySelector(anchor.getAttribute("href"))
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })
  }

  animateNavToggle() {
    const spans = this.navToggle.querySelectorAll("span")
    if (this.navMenu.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
      spans[1].style.opacity = "0"
      spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
    } else {
      this.resetNavToggle()
    }
  }

  resetNavToggle() {
    const spans = this.navToggle.querySelectorAll("span")
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  }

  handleHeaderScroll() {
    if (window.scrollY > 100) {
      this.header.style.background = "rgba(255, 255, 255, 0.98)"
      this.header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)"
    } else {
      this.header.style.background = "rgba(255, 255, 255, 0.95)"
      this.header.style.boxShadow = "none"
    }
  }

  handleFormSubmission(e) {
    e.preventDefault()

    // Get form data
    const formData = new FormData(this.contactForm)
    const data = Object.fromEntries(formData)

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      this.showNotification("Please fill in all required fields.", "error")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      this.showNotification("Please enter a valid email address.", "error")
      return
    }

    // Simulate form submission
    this.showNotification("Thank you! Your message has been sent. We'll get back to you soon.", "success")
    this.contactForm.reset()

    // In a real application, you would send the data to your server here
    console.log("Form data:", data)
  }

  showNotification(message, type = "info") {
    // Create notification element
    const notification = document.createElement("div")
    notification.className = `notification notification-${type}`
    notification.textContent = message

    // Style the notification
    Object.assign(notification.style, {
      position: "fixed",
      top: "20px",
      right: "20px",
      padding: "16px 24px",
      borderRadius: "8px",
      color: "white",
      fontWeight: "600",
      zIndex: "10000",
      maxWidth: "400px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      transform: "translateX(100%)",
      transition: "transform 0.3s ease",
    })

    // Set background color based on type
    const colors = {
      success: "#10b981",
      error: "#ef4444",
      info: "#3b82f6",
    }
    notification.style.backgroundColor = colors[type] || colors.info

    // Add to DOM
    document.body.appendChild(notification)

    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)"
    }, 100)

    // Remove after 5 seconds
    setTimeout(() => {
      notification.style.transform = "translateX(100%)"
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 5000)
  }

  initializeAnimations() {
    // GSAP ScrollTrigger animations
    gsap.registerPlugin(ScrollTrigger)

    // Hero animations
    gsap.from(".hero-title", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    })

    gsap.from(".hero-subtitle", {
      duration: 1,
      y: 30,
      opacity: 0,
      delay: 0.3,
      ease: "power3.out",
    })

    gsap.from(".hero-buttons", {
      duration: 1,
      y: 30,
      opacity: 0,
      delay: 0.6,
      ease: "power3.out",
    })

    gsap.from(".stat-item", {
      duration: 1,
      y: 30,
      opacity: 0,
      delay: 0.9,
      stagger: 0.2,
      ease: "power3.out",
    })

    // Section animations
    gsap.utils.toArray(".section-title").forEach((title) => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      })
    })

    // Service cards animation
    gsap.utils.toArray(".service-card").forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
        y: 50,
        opacity: 0,
        delay: index * 0.2,
        ease: "power3.out",
      })
    })

    // Team cards animation
    gsap.utils.toArray(".team-card").forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
        y: 50,
        opacity: 0,
        delay: index * 0.2,
        ease: "power3.out",
      })
    })

    // Pricing cards animation
    gsap.utils.toArray(".pricing-card").forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
        y: 50,
        opacity: 0,
        delay: index * 0.1,
        ease: "power3.out",
      })
    })

    // Contact section animation
    gsap.from(".contact-info", {
      scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      duration: 1,
      x: -50,
      opacity: 0,
      ease: "power3.out",
    })

    gsap.from(".contact-form", {
      scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      duration: 1,
      x: 50,
      opacity: 0,
      delay: 0.3,
      ease: "power3.out",
    })
  }

  initializeLocomotiveScroll() {
    // Initialize Locomotive Scroll for smooth scrolling
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
      multiplier: 1,
      class: "is-revealed",
    })

    // Update ScrollTrigger when Locomotive Scroll updates
    scroll.on("scroll", ScrollTrigger.update)

    // Tell ScrollTrigger to use these proxy methods for the "#main" element
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return value !== undefined ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
    })

    // Refresh ScrollTrigger and update LocomotiveScroll
    ScrollTrigger.addEventListener("refresh", () => scroll.update())
    ScrollTrigger.refresh()
  }
}

// Initialize the website when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new SpringbyteWebsite()
})

// Performance optimization: Lazy load images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img[data-src]")

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
})
