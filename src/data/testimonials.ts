export interface Testimonial {
  quote: string;
  name: string;
  date: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'O Jack entendeu exatamente o que a marca precisava e entregou um resultado muito acima do que eu esperava.',
    name: 'Marina Costa',
    date: '17 de abril de 2026',
    avatar: 'https://picsum.photos/seed/avatar1/96/96',
  },
  {
    quote:
      'Processo super transparente do início ao fim, com atualizações claras em cada etapa do projeto.',
    name: 'Rafael Souza',
    date: '25 de abril de 2026',
    avatar: 'https://picsum.photos/seed/avatar2/96/96',
  },
  {
    quote:
      'A qualidade dos renders surpreendeu todo o time. Já estamos planejando o próximo projeto juntos.',
    name: 'Ana Beatriz',
    date: '05 de maio de 2026',
    avatar: 'https://picsum.photos/seed/avatar3/96/96',
  },
];
