import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar/Navbar"
import Contact from "@/components/Contact/Contact"

export default function ConcursoFacilPage() {

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0e1a2f] text-white px-6 py-32">

        <div className="max-w-5xl mx-auto">

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Concurso Fácil
          </h1>

          {/* Imagem principal */}
          <Image
            src="/concursofacil.png"
            alt="Projeto Concurso Fácil"
            width={1200}
            height={600}
            className="rounded-xl mb-8"
            priority
          />

          {/* Descrição longa */}
          <p className="text-gray-300 text-lg mb-8">
            Plataforma desenvolvida para auxiliar candidatos na organização e preparação
            para concursos públicos. O sistema permite gerenciamento de estudos,
            acompanhamento de desempenho e planejamento estratégico.
          </p>

          {/* Tecnologias */}
          <div className="flex flex-wrap gap-3 mb-10">
            {["Laravel", "React", "MySQL"].map((tech) => (
              <span
                key={tech}
                className="bg-blue-600/20 text-blue-400 px-4 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Seção extra (diferencial) */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Sobre o projeto</h2>

            <p className="text-gray-300 leading-relaxed">
              Esse foi um projeto pessoal onde atuei desde a concepção até a implementação.
              O foco foi resolver um problema real: organização de estudos para concursos,
              algo que muitos candidatos enfrentam.
            </p>
          </div>

          {/* Ações */}
          <div className="flex flex-wrap gap-4">

            <a
              href="https://github.com/..."
              target="_blank"
              className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition"
            >
              Ver no GitHub
            </a>

            <Link
              href="/"
              className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
            >
              Voltar
            </Link>

          </div>

        </div>

      </main>

      <Contact />
    </>
  )
}