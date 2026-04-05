"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar/Navbar"
import Contact from "@/components/Contact/Contact"

export default function ConcursoFacilPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <>
      <Navbar />

      {/* HERO DO PROJETO */}
      <section className="relative bg-gradient-to-b from-[#061226] via-[#0e1a2f] to-[#0e1a2f] pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full opacity-40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Concurso Fácil
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-6">
              Plataforma para organização de estudos para concursos públicos,
              com autenticação separada, backend desacoplado e acompanhamento
              de desempenho do usuário.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Laravel", "Vue", "MySQL"].map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-600/20 text-blue-400 px-4 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-md text-sm font-semibold transition"
              >
                Acessar demonstração
              </button>

              <Link
                href="/"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Voltar →
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <Image
              src="/concursofacil3.png"
              alt="Projeto Concurso Fácil"
              width={900}
              height={600}
              className="rounded-xl shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <main className="bg-[#0e1a2f] text-white px-6 py-16">
        <div className="max-w-5xl mx-auto">
          {/* MÉTRICAS */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#13203a] p-6 rounded-xl">
              <p className="text-3xl font-bold text-blue-400">4</p>
              <p className="text-gray-300">Repositórios organizados por responsabilidade</p>
            </div>

            <div className="bg-[#13203a] p-6 rounded-xl">
              <p className="text-3xl font-bold text-blue-400">Full Stack</p>
              <p className="text-gray-300">Frontend, backend e autenticação</p>
            </div>
          </div>

          {/* SOBRE */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Sobre o projeto</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              O Concurso Fácil foi desenvolvido como um projeto pessoal com foco
              em resolver um problema real: a dificuldade de organizar rotina,
              conteúdos e evolução nos estudos para concursos públicos.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Além da interface, o projeto também envolveu definição de arquitetura,
              separação de responsabilidades entre serviços e publicação de ambiente
              funcional para demonstração.
            </p>
          </div>

          {/* ARQUITETURA */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Arquitetura do sistema</h2>

            <ul className="text-gray-300 space-y-2">
              <li>• Serviço de autenticação separado</li>
              <li>• Backend com regras de negócio desacopladas</li>
              <li>• Frontend publicado de forma independente</li>
              <li>• Estrutura organizada para evolução e manutenção do sistema</li>
            </ul>
          </div>

          {/* REPOSITÓRIOS */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Repositórios</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="https://github.com/Brenofrds/concursofacil-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#13203a] p-4 rounded-lg hover:bg-[#1a2a4a] transition border border-white/10"
              >
                <p className="font-semibold">Frontend</p>
                <p className="text-sm text-gray-400">
                  Interface da aplicação em React
                </p>
              </a>

              <a
                href="https://github.com/ConcursoFacil/concursofacil-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#13203a] p-4 rounded-lg hover:bg-[#1a2a4a] transition border border-white/10"
              >
                <p className="font-semibold">Backend</p>
                <p className="text-sm text-gray-400">
                  API principal e regras de negócio
                </p>
              </a>

              <a
                href="https://github.com/ConcursoFacil/concursofacil-auth"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#13203a] p-4 rounded-lg hover:bg-[#1a2a4a] transition border border-white/10"
              >
                <p className="font-semibold">Auth</p>
                <p className="text-sm text-gray-400">
                  Serviço responsável pela autenticação
                </p>
              </a>

              <a
                href="https://github.com/ConcursoFacil/concursofacil-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#13203a] p-4 rounded-lg hover:bg-[#1a2a4a] transition border border-white/10"
              >
                <p className="font-semibold">Docs</p>
                <p className="text-sm text-gray-400">
                  Documentação, fluxos e organização técnica
                </p>
              </a>
            </div>
          </div>

          {/* AÇÕES */}
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

      {/* MODAL DA DEMONSTRAÇÃO */}
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

      <Contact />
    </>
  )
}