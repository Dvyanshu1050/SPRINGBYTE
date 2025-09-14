"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, ShoppingCart, Database, Cloud, Palette, ArrowRight } from "lucide-react"

export function ServicesSection() {
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

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "CMS Integration"],
      color: "text-blue-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      features: ["Native Performance", "Cross-Platform", "Push Notifications", "App Store Deployment"],
      color: "text-green-500",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment gateways, inventory management, and admin panels.",
      features: ["Payment Integration", "Inventory Management", "Order Tracking", "Admin Dashboard"],
      color: "text-purple-500",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust backend systems with APIs, databases, and server infrastructure for scalable applications.",
      features: ["RESTful APIs", "Database Design", "Authentication", "Cloud Integration"],
      color: "text-orange-500",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud deployment, hosting, and maintenance services for reliable and scalable applications.",
      features: ["AWS/Azure Deployment", "Auto Scaling", "Monitoring", "Backup Solutions"],
      color: "text-cyan-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces designed to enhance user experience and engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "text-pink-500",
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                We offer comprehensive software development services to help your business succeed in the digital world.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className={`h-6 w-6 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 bg-transparent"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
