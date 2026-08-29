export interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  image: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Como planejar uma cena 3D antes de abrir o software',
    excerpt:
      'Um processo simples de esboço e referência que economiza horas de retrabalho em qualquer projeto de modelagem.',
    category: 'Processo',
    readTime: '5 min de leitura',
    author: 'Jack',
    date: '25 de abril de 2026',
    image: 'https://picsum.photos/seed/post1/640/420',
  },
  {
    id: 2,
    title: '10 formas simples de otimizar seus renders',
    excerpt:
      'Pequenos ajustes de iluminação e amostragem que reduzem o tempo de render sem perder qualidade visual.',
    category: 'Renderização',
    readTime: '7 min de leitura',
    author: 'Jack',
    date: '12 de maio de 2026',
    image: 'https://picsum.photos/seed/post2/640/420',
  },
  {
    id: 3,
    title: 'Dando uma nova identidade visual para marcas digitais',
    excerpt:
      'Como transformar um briefing vago em um sistema de marca coeso, do logotipo às aplicações.',
    category: 'Branding',
    readTime: '12 min de leitura',
    author: 'Jack',
    date: '15 de maio de 2026',
    image: 'https://picsum.photos/seed/post3/640/420',
  },
  {
    id: 4,
    title: 'O que aprendi depois de 5 anos como freelancer criativo',
    excerpt:
      'Bastidores reais sobre precificação, prazos e como manter a criatividade viva no dia a dia.',
    category: 'Carreira',
    readTime: '9 min de leitura',
    author: 'Jack',
    date: '27 de junho de 2026',
    image: 'https://picsum.photos/seed/post4/640/420',
  },
  {
    id: 5,
    title: 'Construindo um fluxo de trabalho eficiente em motion design',
    excerpt:
      'As ferramentas e atalhos que mais aceleram a produção de animações sem sacrificar o acabamento.',
    category: 'Motion',
    readTime: '6 min de leitura',
    author: 'Jack',
    date: '28 de junho de 2026',
    image: 'https://picsum.photos/seed/post5/640/420',
  },
];

export const popularPosts = posts.slice(0, 4);
