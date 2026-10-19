module.exports = {
  content: ['./index.html', './portafolio_trama_grafica.html', './assets/js/main.js', './assets/js/products-data.js'],
  theme: { extend: {
    fontFamily: { sans: ['Montserrat','system-ui','sans-serif'], display: ['Montserrat','system-ui','sans-serif'], mono: ['Courier New','monospace'] },
    colors: { trama: { black:'#0A0C10', card:'#12161F', border:'#1F2633', cyan:'#00F0FF', magenta:'#FF007A', yellow:'#FFDE00', accent:'#3B82F6', paper:'#F8F9FA' } }
  } },
  plugins: []
};