"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Zap, Shield } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="animate-on-scroll mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Professional <span className="gradient-text">Software Development</span> Services
            </h1>
          </div>

          {/* Sub text */}
          <div className="animate-on-scroll mb-8" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              We create scalable, modern web and mobile applications that drive your business forward. From concept to
              deployment, we deliver excellence.
            </p>
          </div>

          {/* Buttons */}
          <div className="animate-on-scroll mb-12" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              {/* Link added to View Our Work */}
              <Link href="/projects" passHref>
                <Button
                  
                  size="lg"
                  className="border border-primary text-primary bg-transparent 
                             hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>

          {/* Features */}
          <div
            className="animate-on-scroll grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex flex-col items-center p-6 rounded-xl border shadow-md bg-white/70 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <Code2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Development</h3>
              <p className="text-muted-foreground text-center">
                Full-stack expertise with modern technologies and best practices
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl border shadow-md bg-white/70 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <Zap className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground text-center">
                Quick turnaround times without compromising on quality
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl border shadow-md bg-white/70 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <Shield className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reliable Support</h3>
              <p className="text-muted-foreground text-center">
                Ongoing maintenance and support for all your projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
