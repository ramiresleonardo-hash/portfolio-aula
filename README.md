# BlueOrbit -- Portfólio & Blog do Jack

Landing page de portfólio/blog inspirada na estrutura do template BlueOrbit, adaptada
para um criador digital (3D, branding, motion, web design), em português, com paleta
azul "órbita" e um elemento assinatura: os anéis orbitais animados ao redor do retrato
no Hero -- uma referência literal ao nome do template.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (revelações ao rolar a página)
- Lucide React (ícones)

## Como rodar

```bash
npm install
npm run dev
```

Abra o link impresso no terminal (normalmente `http://localhost:5173`).

Build de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  components/
    Navbar.tsx
    HeroSection.tsx           # heading + anéis orbitais animados (elemento assinatura)
    TopicsSection.tsx         # categorias em destaque
    EditorsPicksSection.tsx   # posts em destaque
    TagsSection.tsx           # tags populares
    RecentPostsSection.tsx    # grid de posts recentes
    PopularPostsSection.tsx   # lista dos mais lidos
    TestimonialsSection.tsx   # depoimentos
    GallerySection.tsx        # galeria estilo Instagram
    Footer.tsx                # sobre, endereço, categorias, newsletter
    FadeIn.tsx                # wrapper de animação reutilizado em todas as seções
  data/
    categories.ts
    posts.ts
    tags.ts
    testimonials.ts
  App.tsx
  main.tsx
  index.css
```

## Trocar as imagens

Todas as imagens são placeholders do serviço picsum.photos (geradas por "seed", então
são estáveis entre recarregamentos). Para usar suas próprias fotos:

- **Retrato do Hero**: `PORTRAIT_URL` em `src/components/HeroSection.tsx`
- **Categorias**: campo `image` em `src/data/categories.ts`
- **Posts / thumbnails**: campo `image` em `src/data/posts.ts`
- **Tags**: campo `image` em `src/data/tags.ts`
- **Depoimentos (avatares)**: campo `avatar` em `src/data/testimonials.ts`
- **Galeria do Instagram**: array `IMAGES` em `src/components/GallerySection.tsx`

Basta trocar as URLs pelos caminhos das suas imagens (ou por links de imagens
hospedadas), sem precisar mexer em mais nada.

## Paleta e tipografia

- Fundo: branco (`#FFFFFF`) e cinza-azulado claro (`#F3F6FB`)
- Texto: `#10131A` (principal) / `#5B6472` (secundário)
- Cor de destaque: azul "órbita" `#2F5EFF`, com um toque de verde-água `#17B2A0`
- Títulos: fonte Sora (display) · Corpo de texto: fonte Inter
