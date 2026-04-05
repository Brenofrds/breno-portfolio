"use client"

import { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { bebas } from "@/src/app/fonts"

import {
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiLaravel,
  SiNodedotjs,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub
} from "react-icons/si"

export default function TechCarousel() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const techs = [

    { name: "PHP", level: "Experiência Profissional", Icon: SiPhp, color: "text-indigo-400" },
    { name: "Laravel", level: "Experiência Profissional", Icon: SiLaravel, color: "text-red-500" },
    { name: "JavaScript", level: "Experiência Profissional", Icon: SiJavascript, color: "text-yellow-400" },
    { name: "Node.js", level: "Experiência Profissional", Icon: SiNodedotjs, color: "text-green-500" },
    { name: "MySQL", level: "Experiência Profissional", Icon: SiMysql, color: "text-blue-400" },
    { name: "PostgreSQL", level: "Experiência Profissional", Icon: SiPostgresql, color: "text-blue-500" },
    { name: "Docker", level: "Experiência Profissional", Icon: SiDocker, color: "text-blue-300" },
    { name: "Git", level: "Experiência Profissional", Icon: SiGit, color: "text-orange-500" },
    { name: "GitHub", level: "Experiência Profissional", Icon: SiGithub, color: "text-white" },

    { name: "React", level: "Projetos Acadêmicos", Icon: SiReact, color: "text-cyan-400" },
    { name: "Vue.js", level: "Projetos Acadêmicos", Icon: SiVuedotjs, color: "text-green-400" },
    { name: "Java", level: "Projetos Acadêmicos", Icon: SiOpenjdk, color: "text-red-400" },

    { name: "TypeScript", level: "Projetos e Estudos", Icon: SiTypescript, color: "text-blue-500" },
    { name: "Next.js", level: "Projetos e Estudos", Icon: SiNextdotjs, color: "text-white" },
    { name: "Django", level: "Projetos e Estudos", Icon: SiDjango, color: "text-green-600" },
  ]

  return (

    <section id="tecnologias" className="bg-[#0b1120] py-24">

      <div className="container mx-auto px-6 text-center relative">

        <h2 className={`${bebas.className} text-5xl tracking-widest text-white mb-20`}>
          Tecnologias
        </h2>

        <div className="relative max-w-7xl mx-auto">

          {/* esquerda */}
          <button
            onClick={scrollPrev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 p-3 rounded-full hover:bg-white/20 transition"
          >
            <FaChevronLeft className="text-white" />
          </button>

          {/* direita */}
          <button
            onClick={scrollNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 p-3 rounded-full hover:bg-white/20 transition"
          >
            <FaChevronRight className="text-white" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">

              {techs.map(({ name, level, Icon, color }, index) => (

                <div
                  key={index}
                  className="flex-[0_0_33%] md:flex-[0_0_20%] flex flex-col items-center justify-center p-6 text-center"
                >

                  <Icon
                    size={60}
                    className={`${color} transition hover:scale-110`}
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

  )
}
