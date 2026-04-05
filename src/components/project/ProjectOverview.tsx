type Metric = {
  value: string
  label: string
}

type ProjectOverviewProps = {
  metrics: Metric[]
  about: string[]
  architecture: string[]
}

export default function ProjectOverview({
  metrics,
  about,
  architecture,
}: ProjectOverviewProps) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {metrics.map((metric) => (
          <div key={`${metric.value}-${metric.label}`} className="bg-[#13203a] p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">{metric.value}</p>
            <p className="text-gray-300">{metric.label}</p>
          </div>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sobre o projeto</h2>

        {about.map((paragraph, index) => (
          <p
            key={index}
            className={`text-gray-300 leading-relaxed ${index < about.length - 1 ? "mb-4" : ""}`}
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Arquitetura do sistema</h2>

        <ul className="text-gray-300 space-y-2">
          {architecture.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
