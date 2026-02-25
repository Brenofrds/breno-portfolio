"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="pt-15 bg-white dark:bg-gray-900">
      {/* NAVBAR */}
      <nav className="relative bg-white dark:bg-gray-900">
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
      <div className="container mx-auto px-6 py-16 lg:flex lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-5xl font-bold leading-tight text-gray-800 dark:text-white">
              Seja bem-vindo ao meu portfólio
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
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

      <section className="bg-white dark:bg-gray-950 py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Sobre mim
          </h2>

          <p className="mt-8 text-gray-600 dark:text-gray-400 leading-relaxed">
            Atualmente curso Engenharia de Software e estou construindo minha
            trajetória profissional com foco em desenvolvimento de sistemas e backend.
            Tenho interesse em arquitetura de software, organização de código e
            construção de soluções escaláveis.
          </p>

          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            Busco evoluir constantemente como desenvolvedor, aprofundando
            conhecimentos técnicos e aplicando boas práticas para entregar soluções
            bem estruturadas, eficientes e sustentáveis.
          </p>

        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-900 py-24">
        <div className="container mx-auto px-6 lg:flex lg:items-center lg:gap-16">

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
        </div>
      </section>
    </header>

    
  );
}