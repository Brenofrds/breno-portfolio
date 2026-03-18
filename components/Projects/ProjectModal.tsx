"use client"

import { Project } from "@/data/projects"
import Link from "next/link"

type Props = {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {

  if (!project) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-[#111827] w-[95%] max-w-4xl rounded-xl p-6 md:p-8 relative flex flex-col max-h-[90vh] overflow-hidden">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl"
        >
          ✕
        </button>

        <h3 className="text-2xl text-white mb-4">
          {project.name}
        </h3>

        <div className="overflow-y-auto pr-2 custom-scroll">

            <img
              src={project.image}
              alt={project.name}
              className="w-full rounded-lg mb-6"
            />

            <p className="text-gray-300 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, index) => (
                <span key={index} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                  {t}
                </span>
              ))}
            </div>

          </div>

        <div className="border-t border-gray-700 mt-auto pt-6 flex justify-end gap-4">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="px-4 py-2 text-blue-400 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition"
            >
              Ver no GitHub
            </a>
          )}

          {project.slug && (
            <Link
              href={`/${project.slug}`}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Ir para página do projeto
            </Link>
          )}

        </div>

      </div>

    </div>
  )
}