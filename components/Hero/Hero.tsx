"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa"
import { bebas } from "@/app/fonts"

export default function Hero() {

  const textRef = useRef<HTMLHeadingElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const words = textRef.current?.querySelectorAll("span")

    if (words) {
      gsap.fromTo(
        words,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.08,
          ease: "power3.out"
        }
      )
    }

  }, [])

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting && imageRef.current) {

            gsap.fromTo(
              imageRef.current,
              { scale: 1},
              {
                scale: 1.15,
                duration: 0.9,
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

    if (heroRef.current) observer.observe(heroRef.current)

    return () => observer.disconnect()

  }, [])

  return (

    <header
      ref={heroRef}
      id="home"
      className="bg-gradient-to-b from-[#061226] via-[#0e1a2f] to-[#1b1b1d] pt-32"
    >

      <div className="container mx-auto px-6 py-20 lg:flex lg:items-center">

        {/* TEXTO */}

        <div className="w-full lg:w-1/2">

          <div className="lg:max-w-lg">

            <h1
              ref={textRef}
              className={`${bebas.className} text-3xl sm:text-5xl lg:text-6xl tracking-widest text-white`}
            >

              {"Seja bem-vindo ao meu portfólio"
                .split(" ")
                .map((word, index) => (
                  <span key={index} className="inline-block mr-3">
                    {word}
                  </span>
                ))}

            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mt-6">
              Aqui você pode conhecer um pouco mais sobre minha trajetória,
              experiências e projetos.
            </p>

            {/* SOCIAL LINKS */}

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

              <a
                href="/CurrículoBrenoFernandes.pdf"
                target="_blank"
                download
                title="Baixar currículo"
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                <FaFileAlt size={28} />
              </a>

            </div>

          </div>

        </div>

        {/* IMAGEM */}

        <div className="flex justify-center w-full mt-8 lg:mt-0 lg:w-1/2">

          <div
            ref={imageRef}
            className="overflow-hidden"
          >

            <Image
              src="/profile3.png"
              alt="Breno Fernandes"
              width={500}
              height={500}
              className="object-cover transition duration-500 hover:scale-115"
            />

          </div>

        </div>

      </div>

    </header>

  )
}