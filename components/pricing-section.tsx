"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

export function PricingSection() {
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

  const websitePricing = [
    {
      title: "Basic Website",
      price: "₹15,000 - ₹25,000",
      description: "Perfect for individuals and small businesses",
      features: ["5-7 pages", "Static content", "Responsive design", "Contact form", "Basic SEO", "2 design revisions"],
      popular: false,
    },
    {
      title: "Business Website",
      price: "₹30,000 - ₹50,000",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10 pages",
        "Custom CMS",
        "Blog integration",
        "Service pages",
        "Advanced SEO",
        "Social media integration",
        "Analytics setup",
      ],
      popular: true,
    },
    {
      title: "E-commerce Website",
      price: "₹60,000 - ₹1,20,000",
      description: "Complete online store solution",
      features: [
        "Product catalog",
        "Shopping cart",
        "Payment gateway",
        "User accounts",
        "Order management",
        "Admin panel",
        "Inventory tracking",
      ],
      popular: false,
    },
  ]

  const appPricing = [
    {
      title: "Web Application",
      price: "₹80,000 - ₹2,50,000",
      description: "Custom web applications",
      features: [
        "Custom dashboard",
        "API integration",
        "User authentication",
        "Admin panel",
        "Database design",
        "Scalable architecture",
      ],
    },
    {
      title: "Android App",
      price: "₹70,000 - ₹2,00,000",
      description: "Native Android applications",
      features: [
        "Native performance",
        "Material Design",
        "Push notifications",
        "Offline support",
        "Play Store submission",
      ],
    },
    {
      title: "iOS App",
      price: "₹90,000 - ₹2,50,000",
      description: "Native iOS applications",
      features: [
        "Native performance",
        "iOS design guidelines",
        "Push notifications",
        "iCloud integration",
        "App Store submission",
      ],
    },
    {
      title: "Hybrid App",
      price: "₹1,00,000 - ₹3,00,000",
      description: "Cross-platform solution",
      features: ["Single codebase", "iOS & Android", "React Native/Flutter", "Native features", "Cost-effective"],
    },
  ]

  return (
    <section id="pricing" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transparent <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Professional, affordable, and scalable digital solutions with transparent pricing structure.
              </p>
            </div>
          </div>

          {/* Website Development Pricing */}
          <div className="mb-16">
            <div className="animate-on-scroll mb-8">
              <h3 className="text-2xl font-bold text-center mb-2">Website Development</h3>
              <p className="text-muted-foreground text-center">Professional websites tailored to your business needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {websitePricing.map((plan, index) => (
                <div key={plan.title} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card
                    className={`h-full relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""} hover:shadow-xl transition-all duration-300`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground px-3 py-1">
                          <Star className="w-3 h-3 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-xl mb-2">{plan.title}</CardTitle>
                      <div className="text-2xl font-bold text-primary mb-2">{plan.price}</div>
                      <p className="text-muted-foreground text-sm">{plan.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* App Development Pricing */}
          <div>
            <div className="animate-on-scroll mb-8">
              <h3 className="text-2xl font-bold text-center mb-2">Web & Mobile App Development</h3>
              <p className="text-muted-foreground text-center">Custom applications for web and mobile platforms</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {appPricing.map((plan, index) => (
                <div key={plan.title} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-lg mb-2">{plan.title}</CardTitle>
                      <div className="text-xl font-bold text-primary mb-2">{plan.price}</div>
                      <p className="text-muted-foreground text-sm">{plan.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <Check className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                            <span className="text-xs">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full bg-transparent">
                        Get Quote
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="animate-on-scroll mt-16 p-6 bg-muted/50 rounded-lg">
            <h4 className="text-lg font-semibold mb-4">Terms & Conditions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>• Project timeline: 4-12 weeks depending on scope</li>
                <li>• Payment terms: 50% advance, 50% on completion</li>
              </ul>
              <ul className="space-y-2">
                <li>• Additional features may incur extra charges</li>
                <li>• Support & maintenance available at extra cost</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
