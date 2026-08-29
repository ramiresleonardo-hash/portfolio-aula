import FadeIn from './FadeIn';
import { tags } from '../data/tags';

export default function TagsSection() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 py-20 md:py-24">
      <FadeIn>
        <h2 className="font-display font-bold text-ink text-3xl md:text-4xl">Tags populares</h2>
        <p className="text-muted mt-2 max-w-xl">As palavras-chave mais buscadas por aqui.</p>
      </FadeIn>

      <div className="mt-10 grid grid-cols-3 sm:grid-cols-5 gap-4">
        {tags.map((tag, i) => (
          <FadeIn key={tag.label} delay={i * 0.04}>
            <a
              href="#blog"
              className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-white py-6 hover:shadow-card transition-shadow"
            >
              <img src={tag.image} alt="" className="w-10 h-10 rounded-full object-cover" loading="lazy" />
              <span className="text-sm font-medium text-ink">{tag.label}</span>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
