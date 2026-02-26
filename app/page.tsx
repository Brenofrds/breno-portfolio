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
            SOBRE MIM
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
            Atualmente curso Engenharia de Software na Universidade de Brasília (UnB) e estou construindo minha
            trajetória profissional. 
            Já participei de empresa junior EngNet Consultoria onde atuei como acessor de comercial e como gerente de dois projetos, e 
            atualmente sou estagiário de desenvolvimento no Serviço Federal de Processamento de Dados (Serpro).
          </p>

          <p className="text-lg sm:text-xl lg:text-2xl mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
            No inglês, possuo conhecimento em nível intermediário, certificado pelo Ingles 200 horas.
          </p>

          <p className="text-lg sm:text-xl lg:text-2xl mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
            Busco uma oportunidade na área para continuar aprendendo, crescer profissionalmente e contribuir de forma prática como desenvolvedor.
          </p>

        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-[#1b1b1d] via-[#0e1a2f] to-[#061226]">
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

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Minha trajetória na EngNet começou na área comercial, participando de reuniões com clientes,
              entendendo as dores deles para que conseguíssemos chegar a uma solução e ajudando na construção
              de estratégias de prospecção ativa e passiva junto com o time. Também participei do processo
              de apresentação de propostas e do fechamento de projetos.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Depois atuei como gerente de dois projetos para a Carneiros Temporada, empresa de gestão
              de imóveis no litoral pernambucano, liderei o desenvolvimento de integrações. 
              A primeira foi uma API construída do zero para conectar Stays e
              Jestor, envolvendo múltiplas regras de negócio, modelagem de dados e adaptação
              constante ao crescimento do escopo. Em seguida, gerenciei o desenvolvimento de
              uma API para integrar a Stays ao Power BI, ampliando a capacidade de análise
              e tomada de decisão do cliente.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Durante esse período, também participei de duas edições do Encontro Nacional de Empresas Juniores (ENEJ),
              ampliando minha visão sobre empreendedorismo, gestão e inovação por meio da troca
              com lideranças e empresas de todo o país.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-[#061226] via-[#0e1a2f] to-[#061226]">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:items-center lg:gap-16">

          {/* TEXTO */}
          <div className="order-2 lg:order-1 py-15 lg:w-1/2 text-white mt-10 lg:mt-0">

            <h2 className={`${bebas.className} text-5xl tracking-widest mb-6`}>
              Serviço Federal de Processamento de Dados (Serpro)
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Desde maio de 2024 atuo como estagiário em desenvolvimento em um sistema
              interno utilizado por cerca de 100 pessoas da área de contratos,
              faturamento e pós-vendas. É um sistema crítico, com muitas regras de
              negócio e uma estrutura grande de banco de dados.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Uma das experiências que mais me marcou foi trabalhar na reformulação
              das funcionalidades de um antigo sistema de faturamento criado
              em 2008 que atendia apenas a Receita Federal. Participamos da tarefa de
              trazer essas funcionalidades para o novo sistema atual, reorganizando regras,
              melhorando a estrutura e tornando a solução mais flexível para atender
              outros clientes além da Receita.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Também participei de várias outras funcionalidades, como a criação de uma API
              para disponibilizar dados do sistema para ferramentas de análise, a implementação
              do controle de acesso por usuários, perfis e grupos, o desenvolvimento de módulos
              para automatizar processos que antes eram feitos manualmente, além da criação
              de novas telas e da adaptação de regras de negócio conforme as necessidades da área.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              No Serpro amadureci muito como desenvolvedor. Hoje tenho mais segurança
              para pegar demandas novas, entender regras complexas e fazer as perguntas
              certas para chegar a uma boa solução.
            </p>

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
    </>


    
  );
}