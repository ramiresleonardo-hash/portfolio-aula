import { Quote } from 'lucide-react';
import FadeIn from './FadeIn';
import { testimonials } from '../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
        <FadeIn>
          <h2 className="font-display font-bold text-ink text-3xl md:text-4xl">O que dizem sobre o trabalho</h2>
        </FadeIn>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <div className="h-full rounded-3xl bg-white border border-line p-6 flex flex-col">
                <Quote className="w-6 h-6 text-orbit/60 mb-4" strokeWidth={2} />
                <p className="text-ink text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 mt-6">
                  <img src={t.avatar} alt="" className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-muted">{t.date}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
