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
    id: 1,
    name: "MicroData",
    image: "/microdata.png",
    description: "Sistema para monitoramento de microrganismos...",
    tech: ["React", "Node.js", "Prisma", "PostgreSQL"],
    github: "https://github.com/..."
  },
  {
    id: 2,
    name: "Concurso Fácil",
    image: "/concursofacil.png",
    description:
      "Plataforma desenvolvida para auxiliar candidatos na organização e preparação para concursos públicos.",
    tech: ["Laravel", "React", "MySQL"],
    hasPage: true,
    href: "/projetos/concurso-facil"
  },
  {
    id: 3,
    name: "UnB na Mão",
    image: "/unbnamao.png",
    description: "Aplicação voltada para estudantes da UnB.",
    tech: ["Laravel", "React", "MySQL"],
    github: "https://github.com/..."
  }
]