export interface Category {
  name: string;
  count: number;
  image: string;
}

export const categories: Category[] = [
  { name: 'Design 3D', count: 36, image: 'https://picsum.photos/seed/design3d/300/300' },
  { name: 'Branding', count: 18, image: 'https://picsum.photos/seed/branding/300/300' },
  { name: 'Motion', count: 44, image: 'https://picsum.photos/seed/motion/300/300' },
  { name: 'Web Design', count: 65, image: 'https://picsum.photos/seed/webdesign/300/300' },
  { name: 'Renderização', count: 36, image: 'https://picsum.photos/seed/render/300/300' },
  { name: 'Processo', count: 35, image: 'https://picsum.photos/seed/processo/300/300' },
  { name: 'Ferramentas', count: 32, image: 'https://picsum.photos/seed/ferramentas/300/300' },
  { name: 'Bastidores', count: 28, image: 'https://picsum.photos/seed/bastidores/300/300' },
  { name: 'Carreira', count: 35, image: 'https://picsum.photos/seed/carreira/300/300' },
];
