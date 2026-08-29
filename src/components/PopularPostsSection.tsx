import FadeIn from './FadeIn';
import { popularPosts } from '../data/posts';

export default function PopularPostsSection() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 py-20 md:py-24">
      <FadeIn>
        <h2 className="font-display font-bold text-ink text-3xl md:text-4xl">Posts mais lidos</h2>
      </FadeIn>

      <div className="mt-10 divide-y divide-line border-t border-b border-line">
        {popularPosts.map((post, i) => (
          <FadeIn key={post.id} delay={i * 0.05}>
            <a href="#" className="group flex items-center gap-5 py-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-2xl overflow-hidden">
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
                <h3 className="font-display font-semibold text-ink mt-1 leading-snug truncate">
                  {post.title}
                </h3>
                <p className="text-xs text-muted mt-1">{post.readTime}</p>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
