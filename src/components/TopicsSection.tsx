import FadeIn from './FadeIn';
import { categories } from '../data/categories';

export default function TopicsSection() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 py-20 md:py-24">
      <FadeIn>
        <h2 className="font-display font-bold text-ink text-3xl md:text-4xl">Temas em destaque</h2>
        <p className="text-muted mt-2 max-w-xl">
          Não perca as últimas novidades sobre processo criativo, ferramentas e bastidores.
        </p>
      </FadeIn>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {categories.map((cat, i) => (
          <FadeIn key={cat.name} delay={i * 0.05}>
            <a
              href="#blog"
              className="group flex flex-col items-center gap-3 rounded-2xl border border-line bg-white p-5 text-center hover:shadow-card transition-shadow"
            >
              <img
                src={cat.image}
                alt=""
                className="w-14 h-14 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-ink text-sm">{cat.name}</p>
                <p className="text-xs text-muted mt-0.5">{cat.count} artigos</p>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
