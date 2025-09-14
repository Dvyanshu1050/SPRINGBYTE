"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const projects = [
  {
    title: "LENSCRAFT MEDIA",
    description: "A modern media website showcasing photography and creative content.",
    technologies: ["HTML", "CSS", "JS"],
    link: "https://dvyanshu1050.github.io/LENSCRAFT-MEDIA/",
    image: "\ChatGPT Image Sep 14, 2025, 07_18_45 PM.png",
  },
  {
    title: "Pizza 1st Trial",
    description: "A pizza ordering landing page with interactive UI and responsive design.",
    technologies: ["HTML", "CSS", "JS"],
    link: "https://dvyanshu1050.github.io/pizza1stTrail/",
    image: "\Screenshot 2025-09-14 191158.png",
  },
  {
    title: "Arka Library 01",
    description: "Library management system demo showcasing books, users, and lending system.",
    technologies: ["HTML", "CSS", "JS"],
    link: "https://dvyanshu1050.github.io/Arka_Library_01/",
    image: "\Screenshot 2025-09-14 191228.png",
  },
  {
    title: "Jewellery Shop",
    description: "E-commerce style jewellery shop landing page with product showcase.",
    technologies: ["HTML", "CSS", "JS"],
    link: "https://dvyanshu1050.github.io/JewelleryShop/",
    image: "\Screenshot 2025-09-14 191320.png",
  },
  {
    title: "My Portfolio",
    description: "Personal portfolio showcasing projects, skills, and contact form.",
    technologies: ["HTML", "CSS", "JS"],
    link: "https://dvyanshu1050.github.io/my_portfolio/",
    image: "\Screenshot 2025-09-14 191422.png",
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F8]">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-md sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">My Portfolio</h1>
          <div className="space-x-6 font-medium">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link href="/projects" className="hover:text-indigo-600 transition-colors">
              Projects
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Projects Section */}
      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-14 text-indigo-600"
          >
            My Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card
                  className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white cursor-pointer overflow-hidden group"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <div className="h-56 w-full overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                      <div className="mb-4">
                        <strong>Technologies:</strong> {project.technologies.join(", ")}
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="mt-auto inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors w-max"
                    >
                      Visit Project <ExternalLink className="ml-2 w-4 h-4" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white border-t"
      >
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-600">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </motion.footer>
    </div>
  )
}
