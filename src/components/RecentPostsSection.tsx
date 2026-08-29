import FadeIn from './FadeIn';
import { posts } from '../data/posts';

export default function RecentPostsSection() {
  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
        <FadeIn>
          <h2 className="font-display font-bold text-ink text-3xl md:text-4xl">Posts recentes</h2>
          <p className="text-muted mt-2 max-w-xl">Não perca as últimas tendências.</p>
        </FadeIn>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <FadeIn key={post.id} delay={i * 0.06}>
              <a
                href="#"
                className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-line hover:shadow-card transition-shadow h-full"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-orbit uppercase tracking-wide">
                    {post.category}
                  </span>
                  <h3 className="font-display font-semibold text-ink mt-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-muted text-sm mt-2 leading-relaxed flex-1">{post.excerpt}</p>
                  <p className="text-xs text-muted mt-4">{post.readTime}</p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
