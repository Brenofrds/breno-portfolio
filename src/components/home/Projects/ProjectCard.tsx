"use client"

import { Project } from "@/data/projects"
import Image from "next/image"

type Props = {
  project: Project
  onClick: (project: Project) => void
}

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div
      onClick={() => onClick(project)}
      className="group cursor-pointer overflow-hidden rounded-2xl bg-[#111827] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">
          {project.name}
        </h3>
      </div>
    </div>
  )
}