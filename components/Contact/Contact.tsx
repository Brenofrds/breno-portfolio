"use client"

import Image from "next/image"
import { FaGithub, FaLinkedin, FaInstagram, FaFileAlt, FaWhatsapp } from "react-icons/fa"
import { bebas } from "@/src/app/fonts"

export default function Contact() {

  return (

    <section id="contato" className="bg-gradient-to-b from-[#0e1a2f] to-[#0b1120] py-28">

      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 max-w-6xl mx-auto items-center bg-[#111827] rounded-2xl">

          {/* LADO ESQUERDO */}

          <div className="p-10">

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

              <h3 className="text-white font-semibold mb-4">
                Email
              </h3>

              <div className="flex items-center gap-4">

                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <Image
                    src="/FotoEmail.jpg"
                    alt="Email"
                    width={40}
                    height={40}
                    className="object-cover hover:scale-110 transition"
                  />
                </div>

                <div>
                  <span className="block text-gray-400 text-sm">
                    Envie um email
                  </span>

                  <a
                    href="mailto:brenofernandes8383@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition font-medium"
                  >
                    brenofernandes8383@gmail.com
                  </a>
                </div>

              </div>

            </div>

            {/* WHATSAPP */}

            <div className="mt-10">

              <h3 className="text-white font-semibold mb-2">
                WhatsApp
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                Prefere um contato mais rápido?
              </p>

              <a
                href="https://wa.me/5561996158418?text=Olá%20Breno,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
                target="_blank"
                className="flex items-center gap-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition px-6 py-3 rounded-lg font-semibold w-fit"
              >
                <FaWhatsapp size={20} />
                Iniciar conversa
              </a>

              <span className="text-gray-500 text-sm block mt-3">
                Normalmente respondo em poucas horas
              </span>

            </div>

            {/* REDES */}

            <div className="mt-10">

              <h3 className="text-white font-semibold mb-4">
                Redes
              </h3>

              <div className="flex gap-4">

                <a
                  href="https://www.linkedin.com/in/breno-fernandes-594a34231"
                  target="_blank"
                  className="h-10 w-10 bg-[#1f2937] hover:bg-blue-600 rounded-full flex items-center justify-center transition"
                >
                  <FaLinkedin className="text-white" />
                </a>

                <a
                  href="https://github.com/Brenofrds"
                  target="_blank"
                  className="h-10 w-10 bg-[#1f2937] hover:bg-blue-600 rounded-full flex items-center justify-center transition"
                >
                  <FaGithub className="text-white" />
                </a>

                <a
                  href="https://www.instagram.com/brenofrds_/"
                  target="_blank"
                  className="h-10 w-10 bg-[#1f2937] hover:bg-blue-600 rounded-full flex items-center justify-center transition"
                >
                  <FaInstagram className="text-white" />
                </a>

                <a
                  href="/CurrículoBrenoFernandes.pdf"
                  target="_blank"
                  download
                  className="h-10 w-10 bg-[#1f2937] hover:bg-blue-600 rounded-full flex items-center justify-center transition"
                >
                  <FaFileAlt className="text-white" />
                </a>

              </div>

            </div>

          </div>

          {/* LADO DIREITO */}

          <div className="relative h-[550px] lg:h-[670px]">

            <Image
              src="/cafeesetup.jpeg"
              alt="Workspace"
              fill
              className="object-cover rounded-xl"
            />

          </div>

        </div>

      </div>

    </section>

  )
}
