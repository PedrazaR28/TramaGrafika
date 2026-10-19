# Trama Gráfica — sitio web

Sitio estático (HTML + CSS + JS) de Trama Gráfica, Bogotá. Dominio: https://tramagrafica.com.co

## Estructura
- `index.html` — página principal.
- `portafolio_trama_grafica.html` — portafolio comercial imprimible.
- `assets/` — css, js, imágenes (.webp) y videos.
- `Portafolio_TRAMA_GRAFICA.pdf` — portafolio descargable.
- `robots.txt`, `sitemap.xml`, `vercel.json` — SEO y despliegue en Vercel.

## Desarrollo
```bash
npm install
npm run build:css   # compila Tailwind -> assets/css/tailwind.min.css
```
`assets/js/app-bundle.js` es la concatenación de `config.js`, `products-data.js` y `main.js`; regenerarlo tras editar esos archivos.

## Despliegue
Vercel como proyecto estático (sin build obligatorio; el CSS compilado ya está versionado).