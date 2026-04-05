"use client"

import { Project } from "@/data/projects"
import Link from "next/link"
import Image from "next/image"

type Props = {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 py-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#061226] via-[#0e1a2f] to-[#0e1a2f] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* BOTÃO FECHAR */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
          aria-label="Fechar modal"
        >
          ✕
        </button>

        {/* GLOW */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl opacity-40" />
        </div>

        {/* CONTEÚDO */}
        <div className="relative z-10 overflow-y-auto max-h-[92vh]">
          <div className="grid lg:grid-cols-2 gap-10 items-center px-6 py-10 md:px-10 lg:px-14 lg:py-14">
            {/* TEXTO */}
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.25em] text-blue-400 mb-4">
                Projeto em destaque
              </p>

              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {project.name}
              </h3>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-blue-600/20 px-4 py-1.5 text-sm font-medium text-blue-400 border border-blue-400/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* BOTÕES */}
              <div className="flex flex-wrap items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    Ver no GitHub
                  </a>
                )}

                {project.hasPage && project.href && (
                  <Link
                    href={project.href}
                    className="rounded-md border border-white/15 px-5 py-2.5 text-sm font-semibold text-gray-200 transition hover:bg-white/10 hover:text-white"
                  >
                    Ir para página do projeto
                  </Link>
                )}
              </div>
            </div>

            {/* IMAGEM */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/60 shadow-2xl">
                <Image
                  src={project.image}
                  alt={`Imagem do projeto ${project.name}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}