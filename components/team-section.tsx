"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail } from "lucide-react"

export function TeamSection() {
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

  const team = [
    {
      name: "DIVYANSHU MAURY",
      role: "Frontend & Fullstack Developer Expert",
      description:
        "Expert in modern web technologies with extensive experience in React, Next.js, and full-stack development. Passionate about creating exceptional user experiences.",
      skills: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "AWS"],
      image: "/devbaba.jpg",
      social: {
        github: "https://github.com/Dvyanshu1050",
        linkedin: "https://www.linkedin.com/in/divyanshu-kumar-maurya-9316802a7/",
        email: "divyanshumaurya1050@gmail.com",
      },
    },
    {
      name: "HARIOM",
      role: "Founder & Technical Lead",
      description:
        "Visionary leader with a passion for innovation and technology. Drives the company's strategic direction and ensures delivery of high-quality solutions.",
      skills: ["Leadership", "Strategy", "Architecture", "Project Management", "DevOps", "Cloud"],
      image: "/founder-portrait.png",
      social: {
        github: "#",
        linkedin: "#",
        email: "hariom@springbyte.com",
      },
    },
    {
      name: "ANIL",
      role: "Sales & Business Development",
      description:
        "Expert in client relations and business development. Ensures our clients receive the best solutions tailored to their specific business needs.",
      skills: ["Sales", "Client Relations", "Business Strategy", "Market Analysis", "Negotiation", "CRM"],
      image: "/professional-sales-executive-portrait.jpg",
      social: {
        github: "#",
        linkedin: "#",
        email: "anil@springbyte.com",
      },
    },
  ]

  return (
    <section id="team" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Our talented team of professionals is dedicated to delivering exceptional results for every project.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={member.name} className="animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                  <div className="relative">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-3">
                        <a
                          href={member.social.github}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Github className="h-4 w-4 text-white" />
                        </a>
                        <a
                          href={member.social.linkedin}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Linkedin className="h-4 w-4 text-white" />
                        </a>
                        <a
                          href={`mailto:${member.social.email}`}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Mail className="h-4 w-4 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
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
