"use client"

import Navbar from "@/components/Navbar/Navbar"
import Hero from "@/components/Hero/Hero"
import About from "@/components/About/About"
import EngNet from "@/components/Experience/EngNet"
import Serpro from "@/components/Experience/Serpro"
import TechCarousel from "@/components/TechCarousel/TechCarousel"
import ProjectsGrid from "@/components/Projects/ProjectsGrid"
import Contact from "@/components/Contact/Contact"

export default function Home() {

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