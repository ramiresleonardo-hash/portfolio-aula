import FadeIn from './FadeIn';
import { posts } from '../data/posts';

export default function EditorsPicksSection() {
  const [main, ...rest] = posts;

  return (
    <section id="blog" className="bg-surface py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
        <FadeIn>
          <h2 className="font-display font-bold text-ink text-3xl md:text-4xl">Seleção do editor</h2>
          <p className="text-muted mt-2 max-w-xl">Artigos em destaque, escolhidos a dedo.</p>
        </FadeIn>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <FadeIn>
            <a href="#" className="group block rounded-3xl overflow-hidden bg-white border border-line hover:shadow-card transition-shadow h-full">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={main.image}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-orbit uppercase tracking-wide">
                  {main.category} · {main.readTime}
                </span>
                <h3 className="font-display font-semibold text-xl md:text-2xl text-ink mt-3 leading-snug">
                  {main.title}
                </h3>
                <p className="text-muted text-sm mt-3 leading-relaxed">{main.excerpt}</p>
              </div>
            </a>
          </FadeIn>

          <div className="flex flex-col gap-6">
            {rest.map((post, i) => (
              <FadeIn key={post.id} delay={i * 0.08}>
                <a
                  href="#"
                  className="group flex gap-4 rounded-2xl bg-white border border-line p-4 hover:shadow-card transition-shadow"
                >
                  <div className="w-28 h-24 sm:w-32 sm:h-28 flex-shrink-0 rounded-xl overflow-hidden">
                    <img
                      src={post.image}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-semibold text-orbit uppercase tracking-wide">
                      {post.category}
                    </span>
                    <h4 className="font-display font-semibold text-ink mt-1.5 leading-snug line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-xs text-muted mt-1.5">{post.readTime}</p>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
