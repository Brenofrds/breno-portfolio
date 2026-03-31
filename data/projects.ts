export type Project = {
  id: number
  name: string
  image: string
  description: string
  tech: string[]

  github?: string
  hasPage?: boolean
  href?: string
}

export const projects: Project[] = [
  {
    id: 2,
    name: "Concurso Fácil",
    image: "/concursofacil.png",
    description:
      "Plataforma desenvolvida para auxiliar candidatos na organização e preparação para concursos públicos.",
    tech: ["Laravel", "Vue", "MySQL"],
    hasPage: true,
    href: "/projetos/concurso-facil"
  }
]