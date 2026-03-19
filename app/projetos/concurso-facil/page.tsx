import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar/Navbar"
import Contact from "@/components/Contact/Contact"

export default function ConcursoFacilPage() {

  return (
    <>
      <Navbar />

      {/* HERO DO PROJETO */}
      <section className="bg-gradient-to-b from-[#061226] via-[#0e1a2f] to-[#0e1a2f] pt-40 pb-20">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Concurso Fácil
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl">
            Plataforma completa para organização de estudos para concursos públicos,
            com arquitetura distribuída, autentação independente e acompanhamento de desempenho.
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 mt-6">
            {["Laravel", "React", "MySQL"].map((tech) => (
              <span
                key={tech}
                className="bg-blue-600/20 text-blue-400 px-4 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

      </section>

      {/* CONTEÚDO */}
      <main className="bg-[#0e1a2f] text-white px-6 py-16">

        <div className="max-w-5xl mx-auto">

          {/* IMAGEM */}
          <Image
            src="/concursofacil3.png"
            alt="Projeto Concurso Fácil"
            width={1200}
            height={600}
            className="rounded-xl mb-10"
            priority
          />

          {/* MÉTRICAS (MUDA MUITO O NÍVEL) */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">

            <div className="bg-[#13203a] p-6 rounded-xl">
              <p className="text-3xl font-bold text-blue-400">9.8</p>
              <p className="text-gray-300">Nota final do projeto</p>
            </div>

            <div className="bg-[#13203a] p-6 rounded-xl">
              <p className="text-3xl font-bold text-blue-400">4</p>
              <p className="text-gray-300">Repositórios independentes</p>
            </div>

            <div className="bg-[#13203a] p-6 rounded-xl">
              <p className="text-3xl font-bold text-blue-400">Full Stack</p>
              <p className="text-gray-300">Arquitetura completa</p>
            </div>

          </div>

          {/* SOBRE */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Sobre o projeto</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Esse foi um projeto pessoal onde atuei desde a concepção até a implementação.
              O foco foi resolver um problema real: organização de estudos para concursos,
              algo que muitos candidatos enfrentam.
            </p>

            <p className="text-gray-400 text-sm">
              Projeto avaliado com base em critérios de arquitetura, testes, qualidade de código,
              banco de dados e deploy completo, atingindo nota final 9.8/10.
            </p>
          </div>

          {/* ARQUITETURA */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Arquitetura do sistema</h2>

            <ul className="text-gray-300 space-y-2">
              <li>• Serviço de autenticação isolado (Laravel Sanctum)</li>
              <li>• Backend com regras de negócio independentes</li>
              <li>• Frontend desacoplado (Vue.js)</li>
              <li>• Documentação completa com UML, backlog e fluxos</li>
            </ul>
          </div>

          {/* REPOSITÓRIOS */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Repositórios</h2>

            <div className="grid md:grid-cols-2 gap-4">

              <a className="bg-[#13203a] p-4 rounded-lg hover:bg-[#1a2a4a] transition">
                <p className="font-semibold">Auth Service</p>
                <p className="text-sm text-gray-400">
                  Autenticação com Laravel Sanctum
                </p>
              </a>

              <a className="bg-[#13203a] p-4 rounded-lg hover:bg-[#1a2a4a] transition">
                <p className="font-semibold">Backend</p>
                <p className="text-sm text-gray-400">
                  Regras de negócio do sistema
                </p>
              </a>

              <a className="bg-[#13203a] p-4 rounded-lg hover:bg-[#1a2a4a] transition">
                <p className="font-semibold">Frontend</p>
                <p className="text-sm text-gray-400">
                  Interface em Vue.js
                </p>
              </a>

              <a className="bg-[#13203a] p-4 rounded-lg hover:bg-[#1a2a4a] transition">
                <p className="font-semibold">Docs</p>
                <p className="text-sm text-gray-400">
                  Arquitetura, requisitos e diagramas
                </p>
              </a>

            </div>
          </div>

          {/* AÇÕES */}
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