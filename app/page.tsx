"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { bebas } from "./fonts";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const textRef = useRef<HTMLHeadingElement>(null);

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

  return (
    <>
      <header className="bg-gradient-to-b from-[#061226] via-[#0e1a2f] to-[#1b1b1d] ">
        {/* NAVBAR */}
        <nav className="relative bg-transparent py-10">
          <div className="container mx-auto px-6 py-4 md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold text-gray-800 dark:text-white">
                Breno Fernandes
              </span>

              {/* Mobile button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 md:hidden dark:text-gray-200"
              >
                {isOpen ? "✕" : "☰"}
              </button>
            </div>

            <div
              className={`${
                isOpen ? "block" : "hidden"
              } mt-4 md:mt-0 md:flex md:items-center`}
            >
              <a className="block py-2 md:mx-4 text-gray-700 dark:text-gray-200 hover:text-blue-500">
                Home
              </a>
              <a className="block py-2 md:mx-4 text-gray-700 dark:text-gray-200 hover:text-blue-500">
                Projects
              </a>
              <a className="block py-2 md:mx-4 text-gray-700 dark:text-gray-200 hover:text-blue-500">
                About
              </a>
              <a className="block py-2 md:mx-4 text-gray-700 dark:text-gray-200 hover:text-blue-500">
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <div className="container mx-auto px-6  lg:flex lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1
                ref={textRef}
                className={`${bebas.className} text-6xl tracking-widest text-gray-800 dark:text-white`}
              >
                {"Seja bem-vindo ao meu portfólio"
                  .split(" ")
                  .map((word, index) => (
                    <span key={index} className="inline-block mr-3">
                      {word}
                    </span>
                  ))}
              </h1>
              <p className="text-2xl mt-4 text-gray-600 dark:text-gray-400">
                Aqui você pode conhecer um pouco mais sobre minha trajetória,
                experiências e projetos.
              </p>
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

      <section className="relative py-20 bg-[#111827] bg-[url('/stars.png')] bg-repeat">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          
          <h2
          className={`${bebas.className} hover-underline text-6xl tracking-widest text-gray-900 text-white`}
        >
          SOBRE MIM
        </h2>

          <p className="text-2xl mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
            Atualmente curso Engenharia de Software na Universidade de Brasília (UnB) e estou construindo minha
            trajetória profissional. 
            Já participei de empresa junior Eng Net onde atuei como acessor de comercial e como gerente de projetos, e 
            atualmente sou estagiário de desenvolvimento no Serpro.
          </p>

          <p className="text-2xl mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
            No inglês, possuo conhecimento em nível intermediário, certificado pelo Ingles 200 horas.
          </p>

          <p className="text-2xl mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
            Busco uma oportunidade na área para continuar aprendendo, crescer profissionalmente e contribuir de forma prática como desenvolvedor.
          </p>

        </div>
      </section>

      <section className="relative py-10 bg-gradient-to-br from-[#1b1b1d] via-[#1b1b1d] to-[#1b1b1d]">
        <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between">

          {/* IMAGENS - ESQUERDA */}
          <div className="lg:w-1/2 relative min-h-[500px] mb-16 lg:mb-0">

            {/* IMAGEM PRINCIPAL */}
            <div className="absolute left-40 rotate-[-8deg] z-20 overflow-hidden rounded-2xl">
              <Image
                src="/engnet5.png"
                alt="Projeto EngNet"
                width={420}
                height={320}
                className="transition duration-500 ease-in-out hover:scale-105"
              />
            </div>

            {/* IMAGEM SUPERIOR */}
            <div className="absolute left-4 top-10 rotate-[-8deg] z-10 overflow-hidden rounded-2xl">
              <Image
                src="/engnet7.png"
                alt="Reunião EngNet"
                width={300}
                height={150}
                className="transition duration-500 ease-in-out hover:scale-105"
              />
            </div>

            {/* IMAGEM INFERIOR */}
            <div className="absolute left-60 top-36 rotate-[8deg] z-0 overflow-hidden rounded-2xl">
              <Image
                src="/engnet6.png"
                alt="Equipe EngNet"
                width={280}
                height={210}
                className="transition duration-500 ease-in-out hover:scale-105"
              />
            </div>

          </div>

          {/* TEXTO - DIREITA */}
          <div className="lg:w-1/2 text-white">
            <h2 className={`${bebas.className} text-5xl tracking-widest mb-6`}>
              EngNet Consultoria
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Atuei como desenvolvedor e gerente de projetos na empresa júnior da UnB,
              liderando iniciativas estratégicas e técnicas voltadas para integração de sistemas
              e estruturação de APIs.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Fui responsável pela integração entre Stays e Jestor,
              garantindo sincronização eficiente de dados e padronização
              da comunicação entre plataformas.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-bold text-blue-400">Node.js</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Desenvolvimento de APIs RESTful
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-bold text-blue-400">Prisma ORM</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Modelagem e integração com PostgreSQL
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="h-22 bg-gradient-to-b from-[#1b1b1d] to-[#1b1b1d]"></div>

      <section className="relative py-10 bg-gradient-to-b from-[#1b1b1d] via-[#111827] to-[#111827]">
        <div className="container mx-auto px-6 lg:flex lg:items-center lg:gap-16">

          {/* TEXTO */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Experiência no Serpro
            </h2>

            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              Atuo como Estagiário de Desenvolvimento no Serviço Federal de
              Processamento de Dados (Serpro), contribuindo na manutenção e
              evolução de sistemas internos utilizados em larga escala.
            </p>

            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              Trabalho com PHP/Laravel, modelagem e ajustes em banco de dados,
              desenvolvimento de APIs RESTful, integração com Power BI,
              automação de processos e documentação técnica.
            </p>

            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              Essa experiência tem fortalecido minha base em arquitetura de
              sistemas, organização de código e desenvolvimento orientado a
              boas práticas.
            </p>
          </div>

          {/* IMAGEM */}
          <div className="flex justify-center w-full mt-8 lg:mt-0 lg:w-1/2">
            <div className="overflow-hidden transition duration-500">
              <Image
                src="/serpro-predio1.png"
                alt="Breno Fernandes"
                width={500}
                height={500}
                className="object-cover transition duration-500 hover:scale-115"
              />
            </div>
          </div>
        </div>
      </section>
    </>


    
  );
}