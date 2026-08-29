import { useState } from 'react';
import { Menu, X, Orbit } from 'lucide-react';

const LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Blog', href: '#blog' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 md:px-10 h-16 md:h-20">
        <a href="#inicio" className="flex items-center gap-2 font-display font-bold text-lg text-ink">
          <Orbit className="w-6 h-6 text-orbit" strokeWidth={2.2} />
          BlueOrbit
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center rounded-full bg-orbit text-white text-sm font-semibold px-5 py-2.5 hover:bg-orbit-dark transition-colors"
        >
          Fale comigo
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          className="md:hidden text-ink"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-5 pb-5 border-t border-line bg-white">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-medium text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
