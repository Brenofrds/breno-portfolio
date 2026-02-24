export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex max-w-5xl flex-col items-start justify-center px-6 py-32">
        <p className="mb-4 text-sm uppercase tracking-widest text-zinc-400">
          Software Engineer
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight">
          Breno Fernandes
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-zinc-400">
          Backend-focused developer building scalable systems, APIs and
          well-structured architectures. Experienced with legacy systems,
          Laravel and modern web technologies.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/seu-user"
            target="_blank"
            className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-300"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/seu-user"
            target="_blank"
            className="rounded-lg border border-white px-6 py-3 font-medium transition hover:bg-white hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}