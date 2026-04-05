"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Sobre", id: "sobre" },
    { name: "Tecnologias", id: "tecnologias" },
    { name: "Projetos", id: "projetos" },
    { name: "Contato", id: "contato" },
  ]

  const handleNavigation = (id: string) => {

    // ✅ CONTATO → sempre tenta scroll direto
    if (id === "contato") {

      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      } else {
        // fallback (caso algo dê errado)
        router.push(`/#${id}`, { scroll: false })
      }

      setIsOpen(false)
      return
    }

    // ✅ OUTROS → comportamento híbrido
    if (pathname === "/") {

      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }

    } else {
      router.push(`/#${id}`, { scroll: false })
    }

    setIsOpen(false)
  }

  return (

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

        {/* LOGO */}
        <div className="flex items-center justify-between">

          <span
            onClick={() => router.push("/")}
            className={`font-bold cursor-pointer transition-all duration-500 ${
              isScrolled
                ? "text-3xl text-gray-900 dark:text-white"
                : "text-5xl text-white"
            }`}
          >
            Breno Fernandes
          </span>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white dark:text-gray-200"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* MENU */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } mt-4 md:mt-0 md:flex md:items-center`}
        >

          {menuItems.map((item) => {

            // 🔥 CASO PROJETOS (com dropdown)
            if (item.name === "Projetos") {
              return (
                <div key={item.name} className="relative group">

                  {/* BOTÃO PRINCIPAL */}
                  <button
                    onClick={() => handleNavigation(item.id)}
                    className={`block transition-all duration-300 ${
                      isScrolled
                        ? "py-2 md:mx-4 text-gray-700 hover:text-blue-600 dark:text-gray-200"
                        : "py-3 md:mx-6 text-white hover:text-blue-400"
                    }`}
                  >
                    {item.name}
                  </button>

                  {/* DROPDOWN */}
                  <div className="absolute left-0 mt-2 w-56 bg-[#111827] border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

                    <button
                      onClick={() => {
                        router.push("/projetos/concurso-facil")
                        setIsOpen(false)
                      }}
                      className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-blue-600 hover:text-white transition rounded-lg"
                    >
                      Concurso Fácil
                    </button>

                    {/* FUTURO: adicionar mais projetos aqui */}
                    {/* 
                    <button className="...">
                      MicroData
                    </button>
                    */}

                  </div>

                </div>
              )
            }

            // 🔥 OUTROS ITENS (normal)
            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.id)}
                className={`block transition-all duration-300 ${
                  isScrolled
                    ? "py-2 md:mx-4 text-gray-700 hover:text-blue-600 dark:text-gray-200"
                    : "py-3 md:mx-6 text-white hover:text-blue-400"
                }`}
              >
                {item.name}
              </button>
            )

          })}

        </div>

      </div>

    </nav>

  )
}