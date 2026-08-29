import { Instagram } from 'lucide-react';
import FadeIn from './FadeIn';

const IMAGES = Array.from({ length: 9 }, (_, i) => `https://picsum.photos/seed/gallery${i}/300/300`);

export default function GallerySection() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 py-20 md:py-24">
      <FadeIn>
        <div className="flex items-center gap-2">
          <Instagram className="w-6 h-6 text-orbit" />
          <h2 className="font-display font-bold text-ink text-3xl md:text-4xl">Siga no Instagram</h2>
        </div>
      </FadeIn>

      <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2 sm:gap-3">
        {IMAGES.map((src, i) => (
          <FadeIn key={src} delay={i * 0.03}>
            <a href="#" className="block aspect-square rounded-xl overflow-hidden group">
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
