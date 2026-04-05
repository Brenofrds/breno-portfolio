"use client"

import { useState } from "react"
import ProjectHero from "@/src/components/project/ProjectHero"
import ProjectOverview from "@/src/components/project/ProjectOverview"
import ProjectLinks from "@/src/components/project/ProjectLinks"

export default function ConcursoFacilPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  const metrics = [
    {
      value: "4",
      label: "Repositórios organizados por responsabilidade",
    },
    {
      value: "Full Stack",
      label: "Frontend, backend e autenticação",
    },
  ]

  const about = [
    "O Concurso Fácil foi desenvolvido como um projeto pessoal com foco em resolver um problema real: a dificuldade de organizar rotina, conteúdos e evolução nos estudos para concursos públicos.",
    "Além da interface, o projeto também envolveu definição de arquitetura, separação de responsabilidades entre serviços e publicação de ambiente funcional para demonstração.",
  ]

  const architecture = [
    "Serviço de autenticação separado",
    "Backend com regras de negócio desacopladas",
    "Frontend publicado de forma independente",
    "Estrutura organizada para evolução e manutenção do sistema",
  ]

  const repositoryLinks = [
    {
      title: "Frontend",
      description: "Interface da aplicação em React",
      href: "https://github.com/Brenofrds/concursofacil-frontend",
    },
    {
      title: "Backend",
      description: "API principal e regras de negócio",
      href: "https://github.com/ConcursoFacil/concursofacil-backend",
    },
    {
      title: "Auth",
      description: "Serviço responsável pela autenticação",
      href: "https://github.com/ConcursoFacil/concursofacil-auth",
    },
    {
      title: "Docs",
      description: "Documentação, fluxos e organização técnica",
      href: "https://github.com/ConcursoFacil/concursofacil-docs",
    },
  ]

  return (
    <>
      <ProjectHero
        title="Concurso Fácil"
        description="Plataforma para organização de estudos para concursos públicos, com autenticação separada, backend desacoplado e acompanhamento de desempenho do usuário."
        techs={["Laravel", "Vue", "MySQL"]}
        imageSrc="/concursofacil3.png"
        imageAlt="Projeto Concurso Fácil"
        primaryActionLabel="Acessar demonstração"
        onPrimaryAction={() => setIsDemoModalOpen(true)}
        secondaryHref="/"
        secondaryLabel="Voltar →"
      />

      <main className="bg-[#0e1a2f] text-white px-6 py-16">
        <ProjectOverview
          metrics={metrics}
          about={about}
          architecture={architecture}
        />

        <div className="max-w-5xl mx-auto">
          <ProjectLinks
            title="Repositórios"
            links={repositoryLinks}
          />

          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition"
            >
              Abrir demonstração
            </button>
          </div>
        </div>
      </main>

      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="w-full max-w-lg bg-[#111827] border border-white/10 rounded-2xl p-6 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
              aria-label="Fechar modal"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-4">
              Aviso sobre a demonstração
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              O frontend da demonstração está publicado na Vercel e o backend está hospedado no Render.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Como o backend utiliza uma instância gratuita, a primeira requisição após um período de inatividade pode demorar um pouco mais para responder.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://concursofacil-frontend.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-md text-sm font-semibold transition"
              >
                Continuar para a demonstração
              </a>

              <button
                type="button"
                onClick={() => setIsDemoModalOpen(false)}
                className="px-5 py-2.5 rounded-md text-sm font-semibold border border-white/15 text-gray-300 hover:text-white hover:bg-white/5 transition"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
