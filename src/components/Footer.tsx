import { useState, FormEvent } from 'react';
import { Orbit, Twitter, Linkedin, Instagram } from 'lucide-react';

const CATEGORY_LINKS = [
  'Design 3D',
  'Branding',
  'Motion',
  'Web Design',
  'Renderização',
  'Processo',
  'Ferramentas',
  'Bastidores',
  'Carreira',
  'Freelance',
  'Portfólio',
  'Inspiração',
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail('');
  }

  return (
    <footer id="contato" className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 py-16 md:py-20 grid md:grid-cols-4 gap-10">
        <div>
          <a href="#inicio" className="flex items-center gap-2 font-display font-bold text-lg">
            <Orbit className="w-6 h-6 text-orbit-light" />
            BlueOrbit
          </a>
          <p className="text-white/60 text-sm leading-relaxed mt-4 max-w-xs">
            Portfólio e blog de Jack, criador digital especializado em 3D, branding e
            experiências web feitas com atenção aos detalhes.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Endereço</h4>
          <p className="text-white/60 text-sm leading-relaxed">
            Rua das Flores, 123
            <br />
            Pelotas, RS -- Brasil
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Categorias</h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {CATEGORY_LINKS.map((cat) => (
              <a key={cat} href="#blog" className="text-white/60 text-sm hover:text-white transition-colors">
                {cat}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Newsletter</h4>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Receba novidades, estudos de caso e novos projetos direto no seu e-mail.
          </p>
          {sent ? (
            <p className="text-accent text-sm font-medium">Inscrição confirmada, obrigado!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="rounded-full bg-white/10 border border-white/15 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-orbit-light"
              />
              <button
                type="submit"
                className="rounded-full bg-orbit text-white text-sm font-semibold px-5 py-2.5 hover:bg-orbit-dark transition-colors"
              >
                Assinar
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">© 2026 BlueOrbit. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="text-white/50 hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white/50 hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="text-white/50 hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
