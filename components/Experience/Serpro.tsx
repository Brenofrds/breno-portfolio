"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { bebas } from "@/app/fonts"

export default function Serpro() {

  const [showMore, setShowMore] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const firstImageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting && firstImageRef.current) {

            gsap.fromTo(
              firstImageRef.current,
              { scale: 1 },
              {
                scale: 1.15,
                duration: 0.5,
                ease: "power2.out",
                yoyo: true,
                repeat: 1
              }
            )

          }

        })

      },
      { threshold: 0.6 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()

  }, [])

  return (

    <section
      ref={sectionRef}
      className="relative py-12 bg-gradient-to-b from-[#0e1a2f] via-[#0e1a2f] to-[#0e1a2f]"
    >

      <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:items-center lg:gap-16">

        {/* TEXTO */}

        <div className="order-2 lg:order-1 py-16 lg:w-1/2 text-white mt-10 lg:mt-0">

          <h2 className={`${bebas.className} text-5xl tracking-widest mb-6`}>
            Serviço Federal de Processamento de Dados (Serpro)
          </h2>

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

          {showMore && (
            <>
              <p className="text-lg text-gray-300 leading-relaxed mb-6 transition-all duration-500">
                Uma das experiências mais relevantes foi participar da reformulação
                de funcionalidades de um sistema de faturamento criado em 2008,
                originalmente voltado apenas para a Receita Federal. Atuamos na
                migração dessas regras para o novo sistema, reorganizando estruturas,
                tornando a solução mais flexível e preparada para atender outros clientes.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6 transition-all duration-500">
                Também contribuí com a criação de uma API para disponibilização de dados
                para ferramentas analíticas, implementação de controle de acesso por usuários,
                perfis e grupos, automação de processos antes manuais e desenvolvimento
                de novas telas e adaptações de regras conforme as necessidades da área.
              </p>
            </>
          )}

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 px-6 py-2 border border-gray-400 text-gray-300 hover:bg-white hover:text-black transition duration-300 rounded-lg"
          >
            {showMore ? "Mostrar menos" : "Saiba mais"}
          </button>

        </div>

        {/* IMAGENS */}

        <div className="order-1 lg:order-2 lg:w-1/2 relative flex items-center justify-center py-10 lg:py-20">

          <div className="relative">

            {/* imagem principal */}

            <div
              ref={firstImageRef}
              className="relative z-20 lg:rotate-[5deg] lg:translate-x-0 lg:-translate-y-40"
            >
              <Image
                src="/serpro-logo.png"
                alt="Serpro prédio"
                width={500}
                height={320}
                className="rounded-2xl transition duration-500 hover:scale-125"
              />
            </div>

            {/* imagem secundaria 1 */}

            <div className="hidden lg:block absolute -left-20 -top-10 rotate-[-15deg] z-10">
              <Image
                src="/BrenoSerpro.png"
                alt="Serpro"
                width={380}
                height={1320}
                quality={100}
                className="rounded-2xl transition duration-500 hover:scale-125 object-contain"
              />
            </div>

            {/* imagem secundaria 2 */}

            <div className="hidden lg:block absolute right-[-10px] bottom-[-140px] rotate-[12deg] z-0">
              <Image
                src="/serpro-predio1.png"
                alt="Equipe Serpro"
                width={350}
                height={210}
                className="rounded-2xl transition duration-500 hover:scale-125"
              />
            </div>

          </div>

        </div>

      </div>

    </section>

  )

}