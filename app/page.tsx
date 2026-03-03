"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { FaGithub, FaLinkedin, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { gsap } from "gsap";
import Image from "next/image";
import { bebas } from "./fonts";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
import {
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiLaravel,
  SiNodedotjs,
  SiDjango,
  SiPrisma,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiSwagger
} from "react-icons/si";
import { Project } from "next/dist/build/swc/types";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const textRef = useRef<HTMLHeadingElement>(null);

  const [isScrolled, setIsScrolled] = useState(false)

  const [showMore, setShowMore] = useState(false);

  const [showMoreSerpro, setShowMoreSerpro] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const techs = [
    // Experiência Profissional
    { name: "PHP", level: "Experiência Profissional", Icon: SiPhp, color: "text-indigo-400" },
    { name: "Laravel", level: "Experiência Profissional", Icon: SiLaravel, color: "text-red-500" },
    { name: "JavaScript", level: "Experiência Profissional", Icon: SiJavascript, color: "text-yellow-400" },
    { name: "Node.js", level: "Experiência Profissional", Icon: SiNodedotjs, color: "text-green-500" },
    { name: "MySQL", level: "Experiência Profissional", Icon: SiMysql, color: "text-blue-400" },
    { name: "PostgreSQL", level: "Experiência Profissional", Icon: SiPostgresql, color: "text-blue-500" },
    { name: "Docker", level: "Experiência Profissional", Icon: SiDocker, color: "text-blue-300" },
    { name: "Git", level: "Experiência Profissional", Icon: SiGit, color: "text-orange-500" },
    { name: "GitHub", level: "Experiência Profissional", Icon: SiGithub, color: "text-white" },

    // Projetos Acadêmicos
    { name: "React", level: "Projetos Acadêmicos", Icon: SiReact, color: "text-cyan-400" },
    { name: "Vue.js", level: "Projetos Acadêmicos", Icon: SiVuedotjs, color: "text-green-400" },
    { name: "Java", level: "Projetos Acadêmicos", Icon: SiOpenjdk, color: "text-red-400" },

    // Projetos e Estudos
    { name: "TypeScript", level: "Projetos e Estudos", Icon: SiTypescript, color: "text-blue-500" },
    { name: "Next.js", level: "Projetos e Estudos", Icon: SiNextdotjs, color: "text-white" },
    { name: "Django", level: "Projetos e Estudos", Icon: SiDjango, color: "text-green-600" },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      name: "MicroData",
      image: "/microdata.png",
      description:
        "Sistema para monitoramento de microrganismos...",
      tech: ["React", "Node.js", "Prisma", "PostgreSQL"],
      github: "https://github.com/...",
      // não tem página dedicada
    },
    {
      id: 2,
      name: "Concurso Fácil",
      image: "/concursofacil.png",
      description:
        "Plataforma desenvolvida para auxiliar candidatos na organização e preparação para concursos públicos. O sistema permite gerenciamento de disciplinas, controle de progresso, acompanhamento de desempenho e organização de estudos com base em regras de priorização e metas definidas pelo usuário.",
      tech: ["Laravel", "React", "MySQL"],
      github: "https://github.com/...",
      slug: "concurso-facil", // 🔥 só esse tem página dedicada
    },
    {
      id: 3,
      name: "UnB na Mão",
      image: "/unbnamao.png",
      description:
        "Plataforma desenvolvida para auxiliar candidatos na organização e preparação para concursos públicos. O sistema permite gerenciamento de disciplinas, controle de progresso, acompanhamento de desempenho e organização de estudos com base em regras de priorização e metas definidas pelo usuário.",
      tech: ["Laravel", "React", "MySQL"],
      github: "https://github.com/...",
      slug: "concurso-facil", // 🔥 só esse tem página dedicada
    },
  ];

  useEffect(() => {
    const words = textRef.current?.querySelectorAll("span");

    if (words) {
      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.08,
          ease: "power3.out",
        }
      );
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className="bg-gradient-to-b from-[#061226] via-[#0e1a2f] to-[#1b1b1d] pt-24">
        {/* NAVBAR */}
        <nav
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            isScrolled
              ? "bg-white shadow-md dark:bg-gray-900"
              : "bg-transparent"
          }`}
        >
          <div
            className={`container mx-auto px-6 md:flex md:items-center md:justify-between transition-all duration-500 ${
              isScrolled ? "py-5" : "py-10"
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`font-bold transition-all duration-500 ${
                  isScrolled
                    ? "text-3xl text-gray-900 dark:text-white"
                    : "text-5xl text-white"
                }`}
              >
                Breno Fernandes
              </span>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white dark:text-gray-200"
              >
                {isOpen ? "✕" : "☰"}
              </button>
            </div>

            <div
              className={`${
                isOpen ? "block" : "hidden"
              } mt-4 md:mt-0 md:flex md:items-center`}
            >
              {["Home", "Projects", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  className={`block transition-all duration-300 ${
                    isScrolled
                      ? "py-2 md:mx-4 text-gray-700 hover:text-blue-600 dark:text-gray-200"
                      : "py-3 md:mx-6 text-white hover:text-blue-400"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* HERO */}
        <div className="container mx-auto px-6 py-20 lg:flex lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1
                ref={textRef}
                className={`${bebas.className} text-3xl sm:text-5xl lg:text-6xl tracking-widest text-gray-800 dark:text-white`}
              >
                {"Seja bem-vindo ao meu portfólio"
                  .split(" ")
                  .map((word, index) => (
                    <span key={index} className="inline-block mr-3">
                      {word}
                    </span>
                  ))}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Aqui você pode conhecer um pouco mais sobre minha trajetória,
                experiências e projetos.
              </p>
              <div className="flex items-center gap-6 mt-6">
                <a
                  href="https://github.com/Brenofrds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition duration-300"
                >
                  <FaGithub size={28} />
                </a>

                <a
                  href="https://www.linkedin.com/in/breno-fernandes-594a34231"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition duration-300"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full mt-8 lg:mt-0 lg:w-1/2">
            <div className="overflow-hidden transition duration-500">
              <Image
                src="/profile3.png"
                alt="Breno Fernandes"
                width={500}
                height={500}
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-5 bg-[#111827] bg-[url('/stars.png')] bg-repeat">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          
          <h2
            className={`${bebas.className} hover-underline text-6xl tracking-widest text-gray-900 text-white`}
          >
            Um pouco mais sobre mim
          </h2>

          <p className="text-lg sm:text-xl lg:text-xl mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
            Atualmente curso Engenharia de Software na Universidade de Brasília (UnB) e estou construindo minha
            trajetória profissional. 
            Já participei de empresa junior EngNet Consultoria onde atuei como acessor de comercial e como gerente de dois projetos, e 
            atualmente sou estagiário de desenvolvimento no Serviço Federal de Processamento de Dados (Serpro).
          </p>

          <p className="text-lg sm:text-xl lg:text-xl mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
            No inglês, possuo conhecimento em nível intermediário, certificado pelo Ingles 200 horas.
          </p>

          <p className="text-lg sm:text-xl lg:text-xl mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
            Busco uma oportunidade na área para continuar aprendendo, crescer profissionalmente e contribuir de forma prática como desenvolvedor.
          </p>

        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-[#1b1b1d] via-[#0e1a2f] to-[#0e1a2f]">
        <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between">

          <div className="lg:w-1/2 relative flex items-center justify-center py-10 lg:py-20">

            <div className="relative">

              <div className="relative z-20 lg:rotate-[-8deg] lg:-translate-x-5 lg:-translate-y-40">
                <Image
                  src="/engnet5.png"
                  alt="Projeto EngNet"
                  width={500}
                  height={320}
                  className="rounded-2xl transition duration-500 hover:scale-105"
                />
              </div>

              <div className="hidden lg:block absolute -left-20 -top-5 rotate-[-20deg] z-10">
                <Image
                  src="/engnet7.png"
                  alt="Reunião EngNet"
                  width={350}
                  height={150}
                  className="rounded-2xl transition duration-500 hover:scale-105"
                />
              </div>

              <div className="hidden lg:block absolute right-[-10px] bottom-[-150px] rotate-[15deg] z-0">
                <Image
                  src="/engnet6.png"
                  alt="Equipe EngNet"
                  width={350}
                  height={210}
                  className="rounded-2xl transition duration-500 hover:scale-105"
                />
              </div>

            </div>
          </div>

          {/* TEXTO - DIREITA */}
          <div className="lg:w-1/2 text-white">
            <h2 className={`${bebas.className} text-5xl tracking-widest mb-6`}>
              EngNet Consultoria
            </h2>

            {/* Primeiro parágrafo - INTRODUÇÃO (sempre visível) */}
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Na EngNet Consultoria, vivi uma transição que marcou minha formação: 
              comecei entendendo negócios e evoluí para a liderança de projetos técnicos. 
              Foi nesse ambiente que desenvolvi visão estratégica, capacidade de execução 
              e maturidade para assumir responsabilidades maiores.
            </p>

            {/* Conteúdo expandido */}
            {showMore && (
              <>
                {/* 2 - Comercial */}
                <p className="text-lg text-gray-300 leading-relaxed mb-6 transition-all duration-500">
                  Iniciei na área comercial, participando de reuniões com clientes, 
                  identificando dores reais e ajudando na construção de estratégias de 
                  prospecção e fechamento de projetos. Essa fase fortaleceu minha 
                  comunicação, negociação e entendimento de negócio.
                </p>

                {/* 3 - Gestão + APIs */}
                <p className="text-lg text-gray-300 leading-relaxed mb-6 transition-all duration-500">
                  Depois atuei como gerente de dois projetos para a Carneiros Temporada, 
                  liderando o desenvolvimento de integrações. Construímos uma API do zero 
                  para conectar Stays e Jestor, lidando com múltiplas regras de negócio e 
                  evolução constante de escopo. Em seguida, desenvolvemos uma integração 
                  com Power BI, ampliando a capacidade analítica e a tomada de decisão do cliente.
                </p>

                {/* 4 - ENEJ */}
                <p className="text-lg text-gray-300 leading-relaxed mb-6 transition-all duration-500">
                  Durante esse período, participei de duas edições do ENEJ, ampliando minha 
                  visão sobre liderança, inovação e empreendedorismo por meio da troca com 
                  empresas e lideranças de todo o país.
                </p>
              </>
            )}

            {/* Botão */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 px-6 py-2 border border-gray-400 text-gray-300 hover:bg-white hover:text-black transition duration-300 rounded-lg"
            >
              {showMore ? "Mostrar menos" : "Saiba mais"}
            </button>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-[#0e1a2f] via-[#0e1a2f] to-[#0e1a2f]">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:items-center lg:gap-16">

          {/* TEXTO */}
          <div className="order-2 lg:order-1 py-15 lg:w-1/2 text-white mt-10 lg:mt-0">

            <h2 className={`${bebas.className} text-5xl tracking-widest mb-6`}>
              Serviço Federal de Processamento de Dados (Serpro)
            </h2>

            {/* Parágrafo visível - INTRODUÇÃO + MATURIDADE */}
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Desde maio de 2024 atuo como estagiário em desenvolvimento no Serpro,
              trabalhando em um sistema interno utilizado por cerca de 100 pessoas
              das áreas de contratos, faturamento e pós-vendas. É um sistema crítico,
              com muitas regras de negócio e uma estrutura de banco de dados grande,
              o que exige atenção, responsabilidade e cuidado nas decisões técnicas.
              No Serpro amadureci muito como desenvolvedor. Hoje tenho mais segurança
              para assumir demandas novas, entender cenários complexos e fazer as
              perguntas certas para construir boas soluções.
            </p>

            {/* Conteúdo expandido */}
            {showMoreSerpro && (
              <>
                {/* Reforma sistema legado */}
                <p className="text-lg text-gray-300 leading-relaxed mb-6 transition-all duration-500">
                  Uma das experiências mais relevantes foi participar da reformulação
                  de funcionalidades de um sistema de faturamento criado em 2008,
                  originalmente voltado apenas para a Receita Federal. Atuamos na
                  migração dessas regras para o novo sistema, reorganizando estruturas,
                  tornando a solução mais flexível e preparada para atender outros clientes.
                </p>

                {/* Outras entregas técnicas */}
                <p className="text-lg text-gray-300 leading-relaxed mb-6 transition-all duration-500">
                  Também contribuí com a criação de uma API para disponibilização de dados
                  para ferramentas analíticas, implementação de controle de acesso por usuários,
                  perfis e grupos, automação de processos antes manuais e desenvolvimento
                  de novas telas e adaptações de regras conforme as necessidades da área.
                </p>
              </>
            )}

            <button
              onClick={() => setShowMoreSerpro(!showMoreSerpro)}
              className="mt-4 px-6 py-2 border border-gray-400 text-gray-300 hover:bg-white hover:text-black transition duration-300 rounded-lg"
            >
              {showMoreSerpro ? "Mostrar menos" : "Saiba mais"}
            </button>

          </div>

          {/* IMAGEM */}
          <div className="order-1 lg:order-2 flex justify-center w-full mt-10 lg:mt-0 lg:w-1/2">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/serpro-predio1.png"
                alt="Serpro"
                width={500}
                height={500}
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </section>

      <section className="bg-[#0b1120] py-24">
        <div className="container mx-auto px-6 text-center relative">

          <h2 className={`${bebas.className} text-5xl tracking-widest text-white text-center mb-20`}>
            Tecnologias
          </h2>
          

          <div className="relative max-w-8xl mx-auto">

            {/* Seta Esquerda */}
            <button
              onClick={scrollPrev}
              className="absolute -left-6 top-1/2 -translate-y-1/2 p-3 rounded-full transition duration-300 hover:bg-white/20"
            >
              <FaChevronLeft className="text-white" />
            </button>

            {/* Seta Direita */}
            <button
              onClick={scrollNext}
              className="absolute -right-6 top-1/2 -translate-y-1/2 p-3 rounded-full transition duration-300 hover:bg-white/20"
            >
              <FaChevronRight className="text-white" />
            </button>

            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {techs.map(({ name, level, Icon, color }, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_33%] md:flex-[0_0_20%] flex flex-col items-center justify-center p-6 text-center"
                  >
                    <Icon
                      size={60}
                      className={`${color} transition duration-300 hover:scale-110`}
                    />

                    <span className="mt-3 text-sm text-white font-medium">
                      {name}
                    </span>

                    <span className="text-xs text-gray-400">
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0e1628] py-28">
        <div className="container mx-auto px-6">
          <h2 className={`${bebas.className} text-5xl tracking-widest text-white text-center mb-20`}>
            Projetos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
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
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#111827] w-[90%] md:w-[1100px] rounded-xl p-8 relative flex flex-col max-h-[90vh]">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl text-white mb-4">
              {selectedProject.name}
            </h3>

            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full rounded-lg mb-6"
            />

            <p className="text-gray-300 mb-6">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map((t, index) => (
                <span
                  key={index}
                  className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="border-t border-gray-700 mt-auto pt-6 flex justify-end gap-4">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-blue-400 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition"
                >
                  Ver no GitHub
                </a>
              )}

              {selectedProject.slug && (
                <Link
                  href={`/${selectedProject.slug}`}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Ir para página do projeto
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      <section className="bg-gradient-to-b from-[#0e1a2f] to-[#0b1120] py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto bg-[#111827] rounded-2xl p-10 shadow-2xl">

            {/* LADO ESQUERDO */}
            <div>
              <h2 className={`${bebas.className} text-5xl tracking-widest text-white mb-6`}>
                Vamos conversar?
              </h2>

              <p className="text-gray-400 mt-6 leading-relaxed">
                Estou aberto a novas oportunidades e projetos desafiadores.
                Se você quer trocar uma ideia ou discutir uma proposta,
                fico à disposição.
              </p>

              {/* EMAIL */}
              <div className="mt-12">
                <h3 className="text-white font-semibold mb-4">Email</h3>
                <div className="flex items-center gap-4 bg-[#1f2937] p-4 rounded-lg">
                  <div className="h-10 w-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <span className="block text-gray-400 text-sm">Envie um email</span>
                    <span className="text-blue-400 font-medium">
                      seuemail@email.com
                    </span>
                  </div>
                </div>
              </div>

              {/* REDES */}
              <div className="mt-12">
                <h3 className="text-white font-semibold mb-4">Redes</h3>
                <div className="flex gap-4">
                  <a className="h-10 w-10 bg-[#1f2937] hover:bg-blue-600 rounded-full flex items-center justify-center transition">
                    <span className="text-white">in</span>
                  </a>
                  <a className="h-10 w-10 bg-[#1f2937] hover:bg-blue-600 rounded-full flex items-center justify-center transition">
                    <span className="text-white">gh</span>
                  </a>
                </div>
              </div>
            </div>

            {/* FORMULÁRIO */}
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Nome"
                className="w-full bg-[#1f2937] text-white rounded-lg py-3 px-4 border border-gray-700 focus:border-blue-500 outline-none transition"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#1f2937] text-white rounded-lg py-3 px-4 border border-gray-700 focus:border-blue-500 outline-none transition"
              />

              <input
                type="text"
                placeholder="Assunto"
                className="w-full bg-[#1f2937] text-white rounded-lg py-3 px-4 border border-gray-700 focus:border-blue-500 outline-none transition"
              />

              <textarea
                rows={5}
                placeholder="Mensagem"
                className="w-full bg-[#1f2937] text-white rounded-lg py-3 px-4 border border-gray-700 focus:border-blue-500 outline-none transition"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-semibold text-white"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}