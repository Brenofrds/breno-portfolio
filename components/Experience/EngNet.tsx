"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { bebas } from "@/src/app/fonts"

export default function EngNet() {

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
      className="relative py-20 bg-gradient-to-b from-[#1b1b1d] via-[#0e1a2f] to-[#0e1a2f]"
    >

      <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between">

        {/* IMAGENS */}

        <div className="lg:w-1/2 relative flex items-center justify-center py-10 lg:py-20">

          <div className="relative">

            <div
              ref={firstImageRef}
              className="relative z-20 lg:rotate-[-8deg] lg:-translate-x-5 lg:-translate-y-40"
            >
              <Image
                src="/engnet5.png"
                alt="Projeto EngNet"
                width={500}
                height={320}
                className="rounded-2xl transition duration-500 hover:scale-125"
              />
            </div>

            <div className="hidden lg:block absolute -left-20 -top-5 rotate-[-20deg] z-10">
              <Image
                src="/engnet7.png"
                alt="Reunião EngNet"
                width={350}
                height={150}
                className="rounded-2xl transition duration-500 hover:scale-125"
              />
            </div>

            <div className="hidden lg:block absolute right-[-10px] bottom-[-150px] rotate-[15deg] z-0">
              <Image
                src="/engnet6.png"
                alt="Equipe EngNet"
                width={350}
                height={210}
                className="rounded-2xl transition duration-500 hover:scale-125"
              />
            </div>

          </div>

        </div>

        {/* TEXTO */}

        <div className="lg:w-1/2 text-white">

          <h2 className={`${bebas.className} text-5xl tracking-widest mb-6`}>
            EngNet Consultoria
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Na EngNet Consultoria, vivi uma transição que marcou minha formação:
            comecei entendendo negócios e evoluí para a liderança de projetos técnicos.
            Foi nesse ambiente que desenvolvi visão estratégica, capacidade de execução
            e maturidade para assumir responsabilidades maiores.
          </p>

          {showMore && (
            <>
              <p className="text-lg text-gray-300 leading-relaxed mb-6 transition-all duration-500">
                Iniciei na área comercial, participando de reuniões com clientes,
                identificando dores reais e ajudando na construção de estratégias de
                prospecção e fechamento de projetos. Essa fase fortaleceu minha
                comunicação, negociação e entendimento de negócio.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6 transition-all duration-500">
                Depois atuei como gerente de dois projetos para a Carneiros Temporada,
                liderando o desenvolvimento de integrações. Construímos uma API do zero
                para conectar Stays e Jestor, lidando com múltiplas regras de negócio e
                evolução constante de escopo. Em seguida, desenvolvemos uma integração
                com Power BI, ampliando a capacidade analítica e a tomada de decisão do cliente.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6 transition-all duration-500">
                Durante esse período, participei de duas edições do ENEJ,
                ampliando minha visão sobre liderança, inovação e empreendedorismo
                por meio da troca com empresas e lideranças de todo o país.
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

      </div>

    </section>

  )

}
