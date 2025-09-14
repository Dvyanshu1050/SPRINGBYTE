"use client"

import { Code, Smartphone, Globe, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#team", label: "Team" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ]

  const services = [
    "Web Development",
    "Mobile App Development",
    "E-commerce Solutions",
    "UI/UX Design",
    "Backend Development",
    "Cloud Services",
  ]

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="flex items-center space-x-1">
                <Code className="h-6 w-6 text-primary" />
                <Globe className="h-5 w-5 text-secondary" />
                <Smartphone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold gradient-text">SPRINGBYTE</h3>
                <p className="text-xs text-muted-foreground">SOFTWARE SERVICES</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Professional, affordable, and scalable digital solutions tailored for your business needs.
            </p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Sector 2, Noida, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+91 707973674</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">info@springbyte.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Our Services</h4>
            <ul className="space-y-1">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Business Hours</h4>
            <div className="space-y-1 text-sm">
              <div>
                <p className="font-medium">Monday - Friday</p>
                <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Saturday</p>
                <p className="text-muted-foreground">10:00 AM - 4:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Sunday</p>
                <p className="text-muted-foreground">Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Springbyte Software Services. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-3 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
