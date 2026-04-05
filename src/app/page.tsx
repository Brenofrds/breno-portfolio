"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

import Navbar from "@/components/Navbar/Navbar"
import Hero from "@/components/Hero/Hero"
import About from "@/components/About/About"
import EngNet from "@/components/Experience/EngNet"
import Serpro from "@/components/Experience/Serpro"
import TechCarousel from "@/components/TechCarousel/TechCarousel"
import ProjectsGrid from "@/components/Projects/ProjectsGrid"
import Contact from "@/components/Contact/Contact"

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
      <Navbar />
      <Hero />
      <About />
      <EngNet />
      <Serpro />
      <TechCarousel />
      <ProjectsGrid />
      <Contact />
    </>
  )
}