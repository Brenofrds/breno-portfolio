"use client"

import { useState } from "react"
import Image from "next/image"
import { bebas } from "@/app/fonts"

export default function Serpro() {

  const [showMore, setShowMore] = useState(false)

  return (

    <section className="relative bg-gradient-to-b from-[#0e1a2f] via-[#0e1a2f] to-[#0e1a2f]">

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

  )

}