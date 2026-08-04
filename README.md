# Personalize

Landing page da Personalize — presentes personalizados (camisetas, canecas e
kits) sob encomenda, com pedidos via WhatsApp.

Site estático, sem build step: HTML, CSS e JS puros.

## Estrutura

```
index.html      estrutura da página
styles.css       estilos
script.js        interações (menu mobile, marquee, scroll reveal)
fonts/           fontes auto-hospedadas (.woff2)
favicon.svg      ícone do site
robots.txt       diretivas para crawlers
sitemap.xml      mapa do site para SEO
```

## Rodando localmente

Basta abrir `index.html` no navegador, ou servir a pasta com qualquer
servidor estático:

```
npx serve .
```

## Pendências antes de publicar

- Trocar o número de WhatsApp placeholder (`5500000000000`) pelo número real
  nos 3 links marcados com `TROCAR NÚMERO` em `index.html`.
- Preencher `og:url`, `og:image` e `<link rel="canonical">` em `index.html`,
  e a URL em `sitemap.xml` / `robots.txt`, assim que houver domínio definido.
