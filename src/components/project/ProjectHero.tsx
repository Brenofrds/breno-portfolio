import Image from "next/image"
import Link from "next/link"
import Tag from "@/src/components/shared/Tag"

type ProjectHeroProps = {
  title: string
  description: string
  techs: string[]
  imageSrc: string
  imageAlt: string
  primaryActionLabel: string
  onPrimaryAction: () => void
  secondaryHref: string
  secondaryLabel: string
}

export default function ProjectHero({
  title,
  description,
  techs,
  imageSrc,
  imageAlt,
  primaryActionLabel,
  onPrimaryAction,
  secondaryHref,
  secondaryLabel,
}: ProjectHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-[#061226] via-[#0e1a2f] to-[#0e1a2f] pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:gap-16">
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>

          <p className="text-lg text-gray-300 max-w-xl mb-6">
            {description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {techs.map((tech) => (
              <Tag
                key={tech}
                className="bg-blue-600/20 text-blue-400 px-4 py-1 rounded-full"
              >
                {tech}
              </Tag>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onPrimaryAction}
              className="bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-md text-sm font-semibold transition"
            >
              {primaryActionLabel}
            </button>

            <Link
              href={secondaryHref}
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={900}
            height={600}
            className="rounded-xl shadow-2xl ring-1 ring-white/10"
          />
        </div>
      </div>
    </section>
  )
}
