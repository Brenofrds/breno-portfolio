"use client"

import { Project } from "@/data/projects"

type Props = {
  project: Project
  onClick: (project: Project) => void
}

export default function ProjectCard({ project, onClick }: Props) {

  return (
    <div
      onClick={() => onClick(project)}
      className="bg-[#111827] rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition duration-300 shadow-lg"
    >

      <img
        src={project.image}
        alt={project.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">
        <h3 className="text-white text-xl font-semibold">
          {project.name}
        </h3>
      </div>

    </div>
  )
}