type ProjectLink = {
  title: string
  description: string
  href: string
}

type ProjectLinksProps = {
  title: string
  links: ProjectLink[]
}

export default function ProjectLinks({ title, links }: ProjectLinksProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#13203a] p-4 rounded-lg hover:bg-[#1a2a4a] transition border border-white/10"
          >
            <p className="font-semibold">{link.title}</p>
            <p className="text-sm text-gray-400">
              {link.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}
