import { bebas } from "@/src/app/fonts"

export default function About() {

  return (

    <section
      id="sobre"
      className="relative py-16 bg-[#111827] bg-[url('/stars.png')] bg-repeat"
    >

      <div className="container mx-auto px-6 max-w-7xl text-center">

        <h2
          className={`${bebas.className} hover-underline text-6xl tracking-widest text-white`}
        >
          Um pouco mais sobre mim
        </h2>

        <p className="text-lg sm:text-xl lg:text-xl mt-6 text-gray-300 leading-relaxed">
          Atualmente curso Engenharia de Software na Universidade de Brasília (UnB) 
          e estou construindo minha trajetória profissional. Já participei da empresa 
          júnior EngNet Consultoria, onde atuei como assessor comercial e como gerente 
          de dois projetos, e atualmente sou estagiário de desenvolvimento no 
          Serviço Federal de Processamento de Dados (Serpro).
        </p>

        <p className="text-lg sm:text-xl lg:text-xl mt-4 text-gray-300 leading-relaxed">
          No inglês, possuo conhecimento em nível intermediário, certificado pelo 
          curso Inglês 200 horas.
        </p>

        <p className="text-lg sm:text-xl lg:text-xl mt-4 text-gray-300 leading-relaxed">
          Busco uma oportunidade na área para continuar aprendendo, crescer 
          profissionalmente e contribuir de forma prática como desenvolvedor.
        </p>

      </div>

    </section>

  )

}
