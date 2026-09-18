# Neon Studio — Landing Page

Landing page em React (Vite + Tailwind CSS v4) para a Neon Studio, hub de serviços digitais (Sites, Marketing e Social Media).

## Como rodar

```bash
npm install
npm run dev
```

Acesse http://localhost:5173

## Build de produção

```bash
npm run build
npm run preview
```

## Stack

- React 19 + Vite
- Tailwind CSS v4 (paleta customizada em `src/index.css`: preto `#111111`, branco/off-white `#f7f6f3` e amarelo `#ffc72c`)
- lucide-react (ícones)
- Google Fonts: Poppins (títulos) + Inter (texto)

## Estrutura

```
src/
  components/
    Header.jsx        # Menu fixo com logo e navegação
    Hero.jsx           # Seção principal com mockup de navegador
    Services.jsx       # Sites, Social Media, Estratégia digital
    SocialShowcase.jsx # Mockup de perfil Instagram + cards de resultados
    Portfolio.jsx       # Grid de projetos
    CTA.jsx             # Chamada final para contato/WhatsApp
    Footer.jsx           # Rodapé
    Logo.jsx             # Logo "NS" em SVG fiel à identidade visual
  App.jsx
  index.css
```

## Personalização

- Troque o número do WhatsApp em `src/components/CTA.jsx`
- Troque e-mail/telefone em `src/components/Footer.jsx`
- Imagens de portfólio/hero usam Unsplash como placeholder — troque pelas fotos reais da marca em `Hero.jsx`, `Portfolio.jsx` e `SocialShowcase.jsx`
