import FadeIn from './FadeIn';

const PORTRAIT_URL = 'https://picsum.photos/seed/jackhero/560/560';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <FadeIn>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-orbit uppercase tracking-wider">
              Olá, tudo bem?
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display font-bold text-ink leading-[1.05] mt-4 text-[2.5rem] sm:text-5xl md:text-6xl">
              Eu sou o Jack
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-muted text-base md:text-lg leading-relaxed mt-6 max-w-lg">
              Crio experiências digitais e projetos em 3D com design limpo, interações
              relevantes e tecnologia moderna. Cada render, cor e detalhe existe com um
              propósito: tornar o resultado mais bonito e mais claro para quem vê.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center rounded-full bg-orbit text-white text-sm font-semibold px-6 py-3.5 hover:bg-orbit-dark transition-colors"
              >
                Ver projetos
              </a>
              <a
                href="#contato"
                className="inline-flex items-center rounded-full border border-line text-ink text-sm font-semibold px-6 py-3.5 hover:bg-white transition-colors"
              >
                Assinar novidades
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Signature element: orbiting rings around the portrait */}
        <FadeIn delay={0.15} y={16}>
          <div className="relative mx-auto w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px]">
            <div className="orbit-ring-outer absolute inset-0 rounded-full border-2 border-dashed border-orbit/30" />
            <div className="orbit-ring-inner absolute inset-6 rounded-full border-2 border-dashed border-accent/30" />
            <div className="orbit-ring-outer absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-orbit" />
            <div className="orbit-ring-inner absolute bottom-6 right-4 w-2.5 h-2.5 rounded-full bg-accent" />

            <div className="absolute inset-10 sm:inset-12 md:inset-14 rounded-full overflow-hidden shadow-card bg-white">
              <img
                src={PORTRAIT_URL}
                alt="Retrato de Jack"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
