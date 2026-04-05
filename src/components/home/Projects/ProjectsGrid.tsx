"use client"

import { useEffect, useState } from "react"
import { projects, Project } from "@/data/projects"
import SectionTitle from "@/src/components/shared/SectionTitle"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [selectedProject])

  return (
    <section id="projetos" className="bg-gradient-to-b from-[#0e1628] to-[#0e1a2f] py-28">
      <div className="container mx-auto px-6">
        <SectionTitle className="text-white text-center mb-20">
          Projetos
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
