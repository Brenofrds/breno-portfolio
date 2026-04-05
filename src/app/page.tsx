"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

import Hero from "@/src/components/home/Hero/Hero"
import About from "@/src/components/home/About/About"
import EngNet from "@/src/components/home/Experience/EngNet"
import Serpro from "@/src/components/home/Experience/Serpro"
import TechCarousel from "@/src/components/home/TechCarousel/TechCarousel"
import ProjectsGrid from "@/src/components/home/Projects/ProjectsGrid"

export default function Home() {

  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash

    if (hash) {
      const id = hash.replace("#", "")

      // pequeno delay pra garantir render
      setTimeout(() => {
        const element = document.getElementById(id)

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }, 100)
    }
  }, [pathname])

  return (
    <>
      <Hero />
      <About />
      <EngNet />
      <Serpro />
      <TechCarousel />
      <ProjectsGrid />
    </>
  )
}
