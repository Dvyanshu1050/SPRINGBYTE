"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Award, TrendingUp } from "lucide-react"

interface Stat {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
  value: string
  link: string
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const stats: Stat[] = [
    { icon: Target, label: "Projects Completed", value: "50+", link: "/projects" },
    { icon: Users, label: "Happy Clients", value: "30+", link: "/clients" },
    { icon: Award, label: "Years Experience", value: "5+", link: "/experience" },
    { icon: TrendingUp, label: "Success Rate", value: "98%", link: "/success" },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Springbyte</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We are a passionate team of developers based in Noida, India, dedicated to creating innovative digital
            solutions that help businesses thrive in the digital age.
          </p>
        </div>

        {/* Mission + Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At Springbyte Software Services, we believe in transforming ideas into powerful digital experiences. Our
              mission is to provide professional, affordable, and scalable software solutions that drive business
              growth and success.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We specialize in modern web technologies, mobile app development, and custom software solutions, ensuring
              that every project we deliver meets the highest standards of quality and performance.
            </p>
          </div>

          <div className="animate-on-scroll" style={{ animationDelay: "0.4s" }}>
            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-50 border border-green-200 shadow-md">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold mb-4">Why Choose Us?</h4>
                <ul className="space-y-3">
                  {[
                    "Expert team with 5+ years of combined experience",
                    "Competitive pricing with transparent cost structure",
                    "Fast delivery without compromising quality",
                    "Ongoing support and maintenance services",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-on-scroll text-center"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <Card
                className="p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => window.open(stat.link, "_blank")} // open HTML file in new tab
              >
                <CardContent className="p-0">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
