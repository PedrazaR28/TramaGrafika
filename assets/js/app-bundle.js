// Bundle generado de config.js + products-data.js + main.js (compatible con file:// y servidor)
// =============================================================================
// TRAMA GRÁFICA - Configuración General del Sitio
// =============================================================================

const CONFIG = {
  // Datos comerciales principales
  companyName: "TRAMA GRÁFICA",
  slogan: "Impresión Interactiva, Litografía, Facturación Empresarial DIAN & Empaques",
  
  // Canales de contacto directo
  whatsappNumber: "573115721689", // Número internacional sin símbolos para la API
  whatsappDisplay: "+57 311 572 1689", // Formato legible para el usuario
  phoneDisplay: "+57 311 572 1689",
  email: "jpimpresos@gmail.com",
  
  // Ubicación física y cobertura
  locationNeighborhood: "B. La Estrada, Engativá",
  city: "Bogotá D.C., Colombia",
  address: "Cl. 71 #69k-10, B. La Estrada, Bogotá",
  coverage: "Atención directa en punto de atención en Bogotá & Envíos a nivel nacional con guía de transporte",
  schedule: "Lunes a Viernes: 8:00 AM – 6:00 PM | Sábados: 9:00 AM – 2:00 PM",
  
  // Opciones de interactividad
  enableSoundFX: true,
  defaultProduct: "tarjetas",
  defaultMaterial: "propalcote300"
};

// =============================================================================
// TRAMA GRÁFICA - Catálogo de Productos, Materiales y Acabados (Con Fotos Reales)
// =============================================================================

const CATEGORIES = [
  { id: "all", label: "Todos los Productos" },
  { id: "seguridad", label: "Seguridad & Formularios" },
  { id: "empaques", label: "Empaques & Cajas" },
  { id: "corporativo", label: "Papelería & Editorial" },
  { id: "merch", label: "Promocionales & Merch" },
  { id: "litografia", label: "Litografía General" }
];

const PRODUCTS = [
  {
    id: "facturas",
    title: "Facturas & Formularios Empresariales",
    category: "seguridad",
    icon: "🧾",
    badge: "Papel Autocopiante",
    badgeColor: "cyan",
    unit: "Talonario x 50",
    desc: "Talonarios de facturas, remisiones y cuentas de cobro con copias autocopiantes, numeración consecutiva y desprendible limpio.",
    defaultMaterial: "quimico",
    image: "assets/images/facturas.webp",
    searchTerms: "facturas remisiones cuentas de cobro formularios talonarios papel quimico copia foliado papeleria comercial"
  },
  {
    id: "minutas",
    title: "Minutas para Seguridad",
    category: "seguridad",
    icon: "🛡️",
    badge: "Control Folios",
    badgeColor: "pink",
    unit: "Libro 200 Folios",
    desc: "Libros cosidos de máxima resistencia con foliado estricto para empresas de vigilancia y conjuntos.",
    defaultMaterial: "propalcote300",
    image: "assets/images/minutas para empresas de seguridad.webp",
    searchTerms: "minutas libros de vigilancia seguridad privada folios foliado control de acceso"
  },
  {
    id: "tarjetas",
    title: "Tarjetas de Presentación Lujo",
    category: "corporativo",
    icon: "🪪",
    badge: "Best Seller",
    badgeColor: "pink",
    unit: "100 unids",
    desc: "Propalcote 300g con laminado Soft-Touch seda, brillo UV sectorizado 3D y foil metalizado.",
    defaultMaterial: "propalcote300",
    image: "assets/images/tarjetas de presentacion.webp",
    searchTerms: "tarjetas de presentacion personal business cards soft touch mate uv 3d foil oro plata"
  },
  {
    id: "cajas",
    title: "Cajas & Empaques a Medida",
    category: "empaques",
    icon: "📦",
    badge: "Packaging",
    badgeColor: "emerald",
    unit: "50 unids",
    desc: "Plegadizas en Maule o Kraft con troquelado digital exacto, ventanillas y acabados retail.",
    defaultMaterial: "maule",
    image: "assets/images/taller-acabados.webp",
    searchTerms: "cajas empaques packaging cajas kraft plegadizas cajas troqueladas envios e-commerce"
  },
  {
    id: "etiquetas",
    title: "Etiquetas & Stickers Vinilo",
    category: "empaques",
    icon: "🏷️",
    badge: "Impermeable",
    badgeColor: "cyan",
    unit: "250 unids",
    desc: "Adhesivos troquelados resistentes al agua, intemperie y refrigeración en vinilo o propalcote adhesivo.",
    defaultMaterial: "vinilo",
    image: "assets/images/etiquetas.webp",
    searchTerms: "etiquetas adhesivas stickers vinilo impermeable troqueladas rollos pliegos botellas"
  },
  {
    id: "agendas",
    title: "Agendas Empresariales",
    category: "corporativo",
    icon: "📔",
    badge: "Corporativo",
    badgeColor: "amber",
    unit: "10 unids",
    desc: "Tapa dura empastada de 2mm con grabado en bajo relieve o foil, cinta separadora y hojas personalizadas.",
    defaultMaterial: "tapadura",
    image: "assets/images/todo para tu empresa negocio o emprendimiento.webp",
    searchTerms: "agendas corporativas empresariales tapa dura planeadores ejecutivas fin de año"
  },
  {
    id: "cuadernos",
    title: "Cuadernos Personalizados",
    category: "corporativo",
    icon: "📓",
    badge: "Anillado Doble O",
    badgeColor: "cyan",
    unit: "15 unids",
    desc: "Carátulas personalizadas full color con plastificado mate y hojas internas a elección (rayas, puntos, logo).",
    defaultMaterial: "propalcote300",
    image: "assets/images/cuadernos.webp",
    searchTerms: "cuadernos corporativos anillados doble o libreta notas dotacion empresarial"
  },
  {
    id: "pocillos",
    title: "Pocillos & Mugs Cerámica",
    category: "merch",
    icon: "☕",
    badge: "Sublimación HD",
    badgeColor: "pink",
    unit: "6 unids",
    desc: "Cerámica prémium blanca o mágica con impresión de alta definición resistente al microondas y lavavajillas.",
    defaultMaterial: "propalcote300",
    image: "assets/images/pocillos y llaveros personalizados.webp",
    searchTerms: "pocillos mugs tazas cafe sublimacion merchandising regalos corporativos"
  },
  {
    id: "menus",
    title: "Menús & Cartas Gastro",
    category: "corporativo",
    icon: "🍽️",
    badge: "Antifluido",
    badgeColor: "emerald",
    unit: "10 unids",
    desc: "Plastificado térmico ultra grueso lavable o tapa dura de lujo para restaurantes, bares y cafeterías.",
    defaultMaterial: "propalcote300",
    image: "assets/images/menus y cartas personalizadas.webp",
    searchTerms: "menus cartas gastronomicas restaurantes bares plastificado grueso lavable antifluido"
  },
  {
    id: "portavasos",
    title: "Portavasos Absorbentes",
    category: "merch",
    icon: "🍺",
    badge: "Cartón Importado",
    badgeColor: "amber",
    unit: "100 unids",
    desc: "Cartón absorbente especializado (beermat) con impresión tiro y retiro resistente a condensación y líquidos.",
    defaultMaterial: "kraft",
    image: "assets/images/porta vasos.webp",
    searchTerms: "portavasos carton absorbente posavasos beermat cervecerias bares pub eventos"
  },
  {
    id: "imanes",
    title: "Imanes Publicitarios",
    category: "merch",
    icon: "🧲",
    badge: "Alto Magnetismo",
    badgeColor: "cyan",
    unit: "100 unids",
    desc: "Lámina imantada de alta adherencia con plastificado brillante para neveras, vehículos y domicilios.",
    defaultMaterial: "vinilo",
    image: "assets/images/imanes nevera.webp",
    searchTerms: "imanes publicidad magnetica imanes nevera domicilios restaurantes vehiculos"
  },
  {
    id: "plegables",
    title: "Plegables & Folletos",
    category: "litografia",
    icon: "📄",
    badge: "Offset Alta Gama",
    badgeColor: "pink",
    unit: "1000 unids",
    desc: "Dípticos, trípticos y polípticos en Propalcote brillante o mate con plegado y trazado mecánico perfecto.",
    defaultMaterial: "propalcote150",
    image: "assets/images/hero-showcase.jpg",
    searchTerms: "plegables folletos dipticos tripticos brochures volantes impresion offset"
  },
  {
    id: "volantes",
    title: "Volantes Publicitarios",
    category: "litografia",
    icon: "⚡",
    badge: "Impacto Rápido",
    badgeColor: "amber",
    unit: "1000 unids",
    desc: "Flyers en Propalcote 115g o 150g a full color 4x0 o 4x4 tintas para eventos, promociones y lanzamientos.",
    defaultMaterial: "propalcote150",
    image: "assets/images/volantes.jpeg",
    searchTerms: "volantes flyers publicidad volanteo eventos promociones buzoneo"
  },
  {
    id: "numeracion",
    title: "Boletas & Bonos de Seguridad",
    category: "seguridad",
    icon: "🔢",
    badge: "Foliado & Desprendible",
    badgeColor: "emerald",
    unit: "1000 boletas",
    desc: "Boletería para eventos y rifas con numeración consecutiva tipográfica, perforado fácil desprendible y tintas de seguridad.",
    defaultMaterial: "propalcote150",
    image: "assets/images/facturas.webp",
    searchTerms: "boletas bonos rifas entradas eventos foliado numerado talonarios de rifa"
  },
  {
    id: "calendarios",
    title: "Calendarios & Almanaques",
    category: "merch",
    icon: "📅",
    badge: "Fin de Año",
    badgeColor: "cyan",
    unit: "25 unids",
    desc: "Almanaques de pared con varilla metálica, calendarios de escritorio tipo pirámide o bolsillo.",
    defaultMaterial: "propalcote300",
    image: "assets/images/todo para tu empresa negocio o emprendimiento.webp",
    searchTerms: "calendarios almanaques pared escritorio piramide varilla metalica año nuevo"
  },
  {
    id: "sellos",
    title: "Sellos Automáticos & Secos",
    category: "seguridad",
    icon: "✒️",
    badge: "Grabado Láser",
    badgeColor: "pink",
    unit: "1 sello",
    desc: "Sellos automáticos autoentintables marcas Trodat y Colop, sellos secos de alto relieve y fechadores.",
    defaultMaterial: "propalcote300",
    image: "assets/images/sellos.webp",
    searchTerms: "sellos automaticos sellos secos trodat colop sellos de madera fechadores notariales"
  },
  {
    id: "esferos",
    title: "Llaveros & Esferos de Marca",
    category: "merch",
    icon: "🔑",
    badge: "Grabado Láser / UV",
    badgeColor: "amber",
    unit: "50 unids",
    desc: "Llaveros en acrílico o metal y bolígrafos con grabado láser permanente o serigrafía de alta durabilidad.",
    defaultMaterial: "propalcote300",
    image: "assets/images/llaveros personalizados para tu empresa o negocio.jpeg",
    searchTerms: "llaveros esferos boligrafos lapiceros grabados laser merchandising eventos ferias"
  },
  {
    id: "cajas_ecommerce",
    title: "Cajas Envío E-Commerce",
    category: "empaques",
    icon: "📦",
    badge: "Autoarmable",
    badgeColor: "emerald",
    unit: "100 unids",
    desc: "Cajas postales autoarmables en cartón microcorrugado o Kraft reforzado, con o sin impresión interna.",
    defaultMaterial: "kraft",
    image: "assets/images/taller-acabados.webp",
    searchTerms: "cajas ecommerce envios cajas postales microcorrugado autoarmables tiendas online"
  }
];

const VIDEOS = [
  {
    id: "maquina",
    title: "Prensa en Acción",
    subtitle: "Impresión Offset en Taller",
    filename: "maquina trabajando.mp4",
    duration: "HD",
    badge: "Producción"
  },
  {
    id: "oficina",
    title: "Tour Taller & Oficina",
    subtitle: "Atención y Despachos Bogotá",
    filename: "video oficina.mp4",
    duration: "HD",
    badge: "Instalaciones"
  },
  {
    id: "disenos",
    title: "Diseños Personalizados",
    subtitle: "Pre-Prensa y Muestras Virtuales",
    filename: "disenos-personalizados.mp4",
    duration: "HD",
    badge: "Diseño Gráfico"
  },
  {
    id: "agendas",
    title: "Agendas Corporativas",
    subtitle: "Tapa Dura y Grabado Especial",
    filename: "agendas personalizadas para tu empresa.mp4",
    duration: "HD",
    badge: "Editorial"
  },
  {
    id: "menus",
    title: "Cartas y Menús Gastro",
    subtitle: "Plastificado Grueso Antifluido",
    filename: "menus y cartas personalizadas.mp4",
    duration: "HD",
    badge: "Restaurantes"
  },
  {
    id: "llaveros",
    title: "Llaveros y Merchandising",
    subtitle: "Acrílico y Metal para Marcas",
    filename: "llaveros personalizados.mp4",
    duration: "HD",
    badge: "Promocional"
  }
];

const GALLERY_PHOTOS = [
  { src: "assets/images/tarjetas de presentacion.webp", title: "Tarjetas de Presentación", tag: "Foil & UV 3D" },
  { src: "assets/images/facturas.webp", title: "Facturación & Remisiones", tag: "Papelería Comercial" },
  { src: "assets/images/minutas para empresas de seguridad.webp", title: "Minutas de Vigilancia", tag: "Seguridad Privada" },
  { src: "assets/images/cuadernos.webp", title: "Cuadernos Corporativos", tag: "Anillado Doble O" },
  { src: "assets/images/etiquetas.webp", title: "Stickers & Etiquetas", tag: "Vinilo Impermeable" },
  { src: "assets/images/menus y cartas personalizadas.webp", title: "Menús Gastronómicos", tag: "Antifluido Lavable" },
  { src: "assets/images/imanes nevera.webp", title: "Imanes Publicitarios", tag: "Alto Magnetismo" },
  { src: "assets/images/porta vasos.webp", title: "Portavasos Absorbentes", tag: "Beermat Importado" },
  { src: "assets/images/sellos.webp", title: "Sellos Automáticos", tag: "Grabado Láser" },
  { src: "assets/images/pocillos y llaveros personalizados.webp", title: "Pocillos & Mugs", tag: "Sublimación HD" },
  { src: "assets/images/llaveros personalizados para tu empresa o negocio.jpeg", title: "Llaveros Corporativos", tag: "Acrílico & Metal" },
  { src: "assets/images/volantes.jpeg", title: "Volantes & Flyers", tag: "Full Color Offset" },
  { src: "assets/images/taller-acabados.webp", title: "Empaques & Cajas Troqueladas", tag: "Packaging" },
  { src: "assets/images/todo para tu empresa negocio o emprendimiento.webp", title: "Agendas & Dotaciones", tag: "Empresarial" },
  { src: "assets/images/hero-showcase.jpg", title: "Muestras de Impresión", tag: "Taller Bogotá" }
];

const MATERIALS = [
  {
    id: "propalcote300",
    name: "Propalcote 300g Prémium",
    desc: "Calibre robusto ideal para tarjetas, portadas y empaques rígidos.",
    bgGradient: "linear-gradient(135deg, #161C28 0%, #090B10 100%)",
    category: "general"
  },
  {
    id: "propalcote150",
    name: "Propalcote 150g Comercial",
    desc: "Equilibrio perfecto de brillo y flexibilidad para volantes y plegables.",
    bgGradient: "linear-gradient(135deg, #1A2230 0%, #0D121A 100%)",
    category: "litografia"
  },
  {
    id: "quimico",
    name: "Papel Químico Autocopiante",
    desc: "Para talonarios de facturación, remisiones y pedidos de 2 o 3 partes sin papel carbón.",
    bgGradient: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
    category: "seguridad"
  },
  {
    id: "kraft",
    name: "Cartón Kraft Ecológico 280g",
    desc: "Fibras naturales reciclables con textura rústica y sofisticada.",
    bgGradient: "linear-gradient(135deg, #4A3728 0%, #2C1E14 100%)",
    category: "empaques"
  },
  {
    id: "vinilo",
    name: "Vinilo Adhesivo Impermeable",
    desc: "Película adhesiva ultra resistente al agua, aceite y congelación.",
    bgGradient: "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",
    category: "empaques"
  },
  {
    id: "maule",
    name: "Cartulina Maule Calibre 14",
    desc: "Reverso blanco/crema de alta rigidez para cajas farmacéuticas y cosméticas.",
    bgGradient: "linear-gradient(135deg, #1C2331 0%, #10141D 100%)",
    category: "empaques"
  },
  {
    id: "tapadura",
    name: "Tapa Dura Empastada 2mm",
    desc: "Cartón cartulina gris de 2mm forrado para agendas y libros de actas.",
    bgGradient: "linear-gradient(135deg, #1E1B2E 0%, #0F0E17 100%)",
    category: "corporativo"
  }
];

const TACTILE_LAB_DATA = {
  foil: {
    title: "Foil Stamping Metalizado Activo:",
    color: "text-amber-300",
    desc: "Película metálica espejada en oro, plata, cobre o tornasol aplicada mediante calor y presión. Aporta elegancia insuperable a tarjetas, cajas y agendas.",
    overlay: "linear-gradient(135deg, rgba(255, 222, 0, 0.25) 0%, transparent 60%)"
  },
  uv: {
    title: "Barniz UV 3D Sectorizado Activo:",
    color: "text-cyan-300",
    desc: "Capa de barniz brillante con alto relieve táctil aplicada selectivamente sobre logotipos o patrones sobre una base mate seda antirreflejo.",
    overlay: "linear-gradient(135deg, rgba(0, 240, 255, 0.28) 0%, transparent 60%)"
  },
  num: {
    title: "Foliado & Numeración Tipográfica Activo:",
    color: "text-pink-400",
    desc: "Sistema de numeración mecánica consecutiva con tinta de alta penetración para control estricto en facturas, minutas de seguridad y boletería.",
    overlay: "linear-gradient(135deg, rgba(255, 0, 122, 0.25) 0%, transparent 60%)"
  },
  troquel: {
    title: "Troquelado Digital de Alta Precisión Activo:",
    color: "text-emerald-400",
    desc: "Cuchillas milimétricas para cortes curvos personalizados, ventanas con acetato, pestañas de ensamble automático y siluetas adhesivas.",
    overlay: "linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, transparent 60%)"
  }
};

const FAQ_DATA = [
  {
    question: "¿Realizan envíos a otras ciudades de Colombia fuera de Bogotá?",
    answer: "Sí, despachamos diariamente desde nuestro taller y punto de atención en Bogotá (Cl. 71 #69k-10, B. La Estrada) hacia Medellín, Cali, Barranquilla, Bucaramanga y cualquier municipio del país a través de empresas transportadoras aliadas (Servientrega, Envía, Inter Rapidísimo) con número de guía asegurado."
  },
  {
    question: "¿Cómo funciona la impresión de facturas y talonarios empresariales?",
    answer: "Producimos talonarios físicos de facturación, contingencia, cuentas de cobro y remisiones en papel químico autocopiante con foliado consecutivo y tus datos corporativos. Ten en cuenta que somos un taller de impresión física; no ofrecemos software de facturación electrónica ni trámites tributarios ante la DIAN. Imprimimos tus documentos con las especificaciones y numeración que tu empresa nos indique."
  },
  {
    question: "¿Qué formato debo enviar si ya tengo mi diseño listo?",
    answer: "Recibimos archivos en formato PDF para imprenta (PDF/X-1a o PDF/X-4), Adobe Illustrator (.AI) o Photoshop (.PSD). Recomendamos que el modo de color sea CMYK, los textos estén convertidos a curvas o fuentes incrustadas, a 300 DPI de resolución y con 3 mm de sangría para corte."
  },
  {
    question: "¿Qué pasa si no tengo diseño o necesito hacer cambios a mi logotipo?",
    answer: "Contamos con departamento de diseño gráfico y pre-prensa en taller. Escríbenos por WhatsApp indicando que necesitas asesoría de diseño y uno de nuestros diseñadores te ayudará a crear el arte desde cero o diagramar tu proyecto."
  },
  {
    question: "¿Cuáles son los tiempos de entrega promedio?",
    answer: "Para productos exprés digitales (tarjetas, stickers, sellos) los despachos pueden tardar entre 24 y 48 horas hábiles. Para tirajes mayores de litografía offset, empaques troquelados o agendas con acabados de lujo, el tiempo habitual es de 3 a 5 días hábiles previa aprobación de muestra virtual."
  }
];

// =============================================================================
// TRAMA GRÁFICA - Lógica Interactiva Principal (Catálogo Comercial)
// Optimizado para Conversión, Experiencia de Usuario y Rendimiento
// =============================================================================




document.addEventListener('DOMContentLoaded', () => {

  // ---------------------------------------------------------------------------
  // 1. Sintetizador de Sonido Táctil Web Audio (Sutil retroalimentación sonora)
  // ---------------------------------------------------------------------------
  let audioCtx = null;

  function playClickTone(freq = 520) {
    if (!CONFIG.enableSoundFX) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.025, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch (err) {
      // Ignorar si el usuario aún no interactúa con el DOM
    }
  }

  // ---------------------------------------------------------------------------
  // 2. Resplandor Ambiental del Puntero (Desktop)
  // ---------------------------------------------------------------------------
  const cursorGlow = document.getElementById('cursorGlow');
  if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });
  }

  // ---------------------------------------------------------------------------
  // 3. Canvas Interactivo de Medios Tonos CMYK en el Hero
  // ---------------------------------------------------------------------------
  const canvas = document.getElementById('cmykCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    const colors = ['#00F0FF', '#FF007A', '#FFDE00', '#3B82F6'];
    let mouse = { x: -1000, y: -1000 };

    function resizeCanvas() {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    canvas.parentElement.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    canvas.parentElement.addEventListener('mouseleave', () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });

    const numParticles = window.innerWidth < 768 ? 20 : 40;
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2.8 + 1.2,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: colors[i % colors.length]
      });
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110 && dist > 0) {
          p.x += (dx / dist) * 1.8;
          p.y += (dy / dist) * 1.8;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.5;
        ctx.fill();
      }
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  // ---------------------------------------------------------------------------
  // 4. Efecto de Inclinación en Perspectiva 3D (Tilt)
  // ---------------------------------------------------------------------------
  function attach3DTilt(el, intensity = 10) {
    if (!el) return;
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
      const rotateY = ((x / rect.width) - 0.5) * intensity;
      const rotateX = ((y / rect.height) - 0.5) * -intensity;
      el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.012, 1.012, 1.012)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  document.querySelectorAll('.tilt-card').forEach(card => attach3DTilt(card, 6));

  // ---------------------------------------------------------------------------
  // 5. Menú Móvil Accesible
  // ---------------------------------------------------------------------------
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      playClickTone(500);
      const isHidden = mobileMenu.classList.toggle('hidden');
      mobileMenuToggle.setAttribute('aria-expanded', !isHidden);
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 6. Catálogo Comercial de Productos con Información Integral de Conversión
  // ---------------------------------------------------------------------------
  const productsGrid = document.getElementById('productsGrid');
  const filterPills = document.querySelectorAll('.filter-pill');
  const searchInput = document.getElementById('catalogSearch');

  function renderCatalogCards() {
    if (!productsGrid) return;

    productsGrid.innerHTML = PRODUCTS.map(prod => {
      const badgeClass = prod.badgeColor === 'cyan' 
        ? 'text-cyan-300 bg-cyan-400/15 border-cyan-400/40' 
        : prod.badgeColor === 'pink' 
          ? 'text-pink-300 bg-pink-500/15 border-pink-500/40'
          : prod.badgeColor === 'amber'
            ? 'text-amber-200 bg-amber-400/15 border-amber-400/40'
            : 'text-emerald-300 bg-emerald-400/15 border-emerald-400/40';

      // Mensaje de WhatsApp profesional, específico y con checklist de cotización
      const waMsg = encodeURIComponent(
        `*SOLICITUD DE COTIZACIÓN - TRAMA GRÁFICA*\n\n` +
        `Hola, me interesa cotizar el producto:\n` +
        `📌 *${prod.title}*\n` +
        `📦 *Base sugerida:* ${prod.unit}\n\n` +
        `Para mi proyecto requiero:\n` +
        `- Cantidad estimada: \n` +
        `- Medidas / Formato: \n` +
        `- Ciudad de entrega: Bogotá / Otra\n` +
        `- ¿Tengo diseño listo? Sí / No (requiero asesoría)\n\n` +
        `¿Me confirman valor exacto y tiempos de producción de taller? Muchas gracias.`
      );
      const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${waMsg}`;

      return `
        <article class="product-card tilt-card bg-[#12161F] border border-[#1F2633] rounded-2xl overflow-hidden flex flex-col justify-between group transition-all hover:border-cyan-400/50" 
                 data-category="${prod.category}" 
                 data-id="${prod.id}"
                 data-title="${prod.title.toLowerCase()}" 
                 data-search="${prod.searchTerms}">
          
          <!-- Imagen Real con Badge y Zoom -->
          <div class="relative h-48 overflow-hidden bg-[#0A0C10] border-b border-[#1F2633]">
            <img src="${prod.image}" 
                 alt="${prod.title} - Trama Gráfica Bogotá" 
                 class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                 loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-[#12161F] via-transparent to-transparent opacity-85"></div>
            
            <div class="absolute top-3 left-3 z-10 flex items-center gap-2">
              <span class="text-xl p-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 shadow drop-shadow-md select-none">${prod.icon}</span>
            </div>

            <div class="absolute top-3 right-3 z-10">
              <span class="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-md ${badgeClass}">
                ${prod.badge}
              </span>
            </div>

            <div class="absolute bottom-2.5 left-3 right-3 z-10">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0A0C10]/90 border border-[#1F2633] text-[10px] font-mono text-cyan-300 backdrop-blur-sm">
                <span>📦</span>
                <span>${prod.unit}</span>
              </span>
            </div>
          </div>

          <!-- Cuerpo de la Tarjeta -->
          <div class="p-5 flex-1 flex flex-col justify-between relative z-10 space-y-4">
            
            <div>
              <h3 class="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                ${prod.title}
              </h3>
              
              <p class="text-xs text-slate-300 mt-2 leading-relaxed">
                ${prod.desc}
              </p>
            </div>

            <!-- Botón de Acción Directa (WhatsApp) -->
            <div class="pt-3 border-t border-[#1F2633]">
              <a href="${waUrl}" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="w-full text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 py-3 rounded-xl text-xs font-bold font-mono transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20"
                 title="Cotizar ${prod.title} directamente por WhatsApp">
                <span class="w-2 h-2 rounded-full bg-slate-950 animate-pulse"></span>
                <span>Cotizar por WhatsApp</span>
                <span>→</span>
              </a>
            </div>

          </div>
        </article>
      `;
    }).join('');

    productsGrid.querySelectorAll('.tilt-card').forEach(card => attach3DTilt(card, 6));
  }

  // Filtrado reactivo de catálogo
  function filterCatalog() {
    const activePill = document.querySelector('.filter-pill.bg-cyan-400');
    const category = activePill ? activePill.dataset.category : 'all';
    const searchTerm = (searchInput ? searchInput.value : '').toLowerCase().trim();

    const cards = document.querySelectorAll('.product-card');
    let visibleCount = 0;

    cards.forEach(card => {
      const cardCat = card.dataset.category;
      const cardTitle = card.dataset.title || '';
      const cardSearch = card.dataset.search || '';

      const matchesCat = (category === 'all' || cardCat === category);
      const matchesSearch = (!searchTerm || cardTitle.includes(searchTerm) || cardSearch.includes(searchTerm));

      if (matchesCat && matchesSearch) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    const noResultsMsg = document.getElementById('noResultsMsg');
    if (noResultsMsg) {
      if (visibleCount === 0) {
        noResultsMsg.classList.remove('hidden');
      } else {
        noResultsMsg.classList.add('hidden');
      }
    }
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', function() {
      playClickTone(600);
      filterPills.forEach(p => {
        p.classList.remove('bg-cyan-400', 'text-slate-950', 'font-bold');
        p.classList.add('bg-[#12161F]', 'text-slate-400');
      });
      this.classList.remove('bg-[#12161F]', 'text-slate-400');
      this.classList.add('bg-cyan-400', 'text-slate-950', 'font-bold');
      filterCatalog();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', filterCatalog);
  }

  const resetCatalogSearchBtn = document.getElementById('resetCatalogSearchBtn');
  if (resetCatalogSearchBtn) {
    resetCatalogSearchBtn.addEventListener('click', () => {
      playClickTone(520);
      if (searchInput) searchInput.value = '';
      const allPill = document.querySelector('.filter-pill[data-category="all"]');
      if (allPill) allPill.click();
    });
  }
  // ---------------------------------------------------------------------------
  // 11. Reproductor de Video Interactivo & Selector de Videos Reales
  // ---------------------------------------------------------------------------
  const videoPlayer = document.getElementById('tallerVideoPlayer');
  const videoTitleDisplay = document.getElementById('videoTitleDisplay');
  const videoBadgeDisplay = document.getElementById('videoBadgeDisplay');
  const videoPlaylistContainer = document.getElementById('videoPlaylistContainer');

  function initVideoPlaylist() {
    if (!videoPlaylistContainer || !videoPlayer) return;

    videoPlaylistContainer.innerHTML = VIDEOS.map((vid, idx) => {
      const activeClass = idx === 0 
        ? 'border-cyan-400 bg-cyan-400/10 text-white' 
        : 'border-[#1F2633] bg-[#12161F] text-slate-300 hover:border-cyan-400/40';

      return `
        <button type="button" 
                class="video-select-btn w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between group ${activeClass}" 
                data-video="${vid.filename}" 
                data-title="${vid.title}" 
                data-badge="${vid.badge}">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-[#0A0C10] border border-[#1F2633] flex items-center justify-center text-xs text-cyan-400 group-hover:text-white">
              ▶
            </div>
            <div>
              <div class="font-display font-bold text-xs text-white">${vid.title}</div>
              <div class="text-[10px] text-slate-400 font-mono">${vid.subtitle}</div>
            </div>
          </div>
          <span class="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-black/40 text-slate-400 border border-white/5">
            ${vid.badge}
          </span>
        </button>
      `;
    }).join('');

    const videoButtons = videoPlaylistContainer.querySelectorAll('.video-select-btn');
    videoButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        playClickTone(620);
        videoButtons.forEach(b => {
          b.classList.remove('border-cyan-400', 'bg-cyan-400/10');
          b.classList.add('border-[#1F2633]', 'bg-[#12161F]');
        });
        this.classList.remove('border-[#1F2633]', 'bg-[#12161F]');
        this.classList.add('border-cyan-400', 'bg-cyan-400/10');

        const filename = this.dataset.video;
        const title = this.dataset.title;
        const badge = this.dataset.badge;

        videoPlayer.src = `assets/videos/${encodeURIComponent(filename)}`;
        videoPlayer.play().catch(() => {});

        if (videoTitleDisplay) videoTitleDisplay.textContent = title;
        if (videoBadgeDisplay) videoBadgeDisplay.textContent = badge;
        showToast(`Reproduciendo: ${title}`);
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 12. Galería Fotográfica de Trabajos Reales & Lightbox
  // ---------------------------------------------------------------------------
  const galleryGrid = document.getElementById('galleryGrid');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxClose = document.getElementById('lightboxClose');

  function initGallery() {
    if (!galleryGrid) return;

    galleryGrid.innerHTML = GALLERY_PHOTOS.map((photo) => {
      return `
        <div class="gallery-item tilt-card relative rounded-2xl overflow-hidden bg-[#12161F] border border-[#1F2633] group cursor-pointer aspect-square" 
             data-src="${photo.src}" 
             data-title="${photo.title}">
          <img src="${photo.src}" 
               alt="${photo.title} - Taller Trama Gráfica Bogotá" 
               class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
               loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
            <span class="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">${photo.tag}</span>
            <h4 class="font-display font-bold text-white text-xs sm:text-sm">${photo.title}</h4>
            <span class="text-[10px] font-mono text-slate-300 mt-1 flex items-center gap-1">
              <span>🔍 Ampliar foto</span>
            </span>
          </div>
        </div>
      `;
    }).join('');

    galleryGrid.querySelectorAll('.tilt-card').forEach(card => attach3DTilt(card, 6));

    galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', function() {
        playClickTone(660);
        const src = this.dataset.src;
        const title = this.dataset.title;
        if (lightboxModal && lightboxImg) {
          lightboxImg.src = src;
          if (lightboxTitle) lightboxTitle.textContent = title;
          lightboxModal.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    if (lightboxClose && lightboxModal) {
      lightboxClose.addEventListener('click', () => {
        lightboxModal.classList.add('hidden');
        document.body.style.overflow = '';
      });

      lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
          lightboxModal.classList.add('hidden');
          document.body.style.overflow = '';
        }
      });
    }
  }

  // ---------------------------------------------------------------------------
  // 13. Laboratorio Táctil de Acabados Interactivos
  // ---------------------------------------------------------------------------
  const labBtns = document.querySelectorAll('.lab-tab-btn');
  const labDesc = document.getElementById('labEffectDescription');
  const labOverlay = document.getElementById('labOverlayEffect');

  labBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      playClickTone(640);
      labBtns.forEach(b => {
        b.classList.remove('border-cyan-400', 'bg-cyan-400/10');
        b.classList.add('border-[#1F2633]');
      });
      this.classList.remove('border-[#1F2633]');
      this.classList.add('border-cyan-400', 'bg-cyan-400/10');

      const effectKey = this.dataset.effect;
      const data = TACTILE_LAB_DATA[effectKey];

      if (data && labDesc) {
        labDesc.innerHTML = `<strong class="${data.color}">${data.title}</strong> ${data.desc}`;
      }
      if (data && labOverlay) {
        labOverlay.style.background = data.overlay;
      }
    });
  });

  // ---------------------------------------------------------------------------
  // 14. Acordeón Accesible de Preguntas Frecuentes (FAQ)
  // ---------------------------------------------------------------------------
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      playClickTone(500);
      const content = this.nextElementSibling;
      const icon = this.querySelector('.faq-icon');
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

      document.querySelectorAll('.faq-toggle').forEach(otherToggle => {
        if (otherToggle !== this) {
          otherToggle.setAttribute('aria-expanded', 'false');
          if (otherToggle.nextElementSibling) {
            otherToggle.nextElementSibling.classList.add('hidden');
          }
          const otherIcon = otherToggle.querySelector('.faq-icon');
          if (otherIcon) otherIcon.textContent = '+';
        }
      });

      if (content) {
        content.classList.toggle('hidden');
        this.setAttribute('aria-expanded', !isExpanded);
        if (icon) {
          icon.textContent = isExpanded ? '+' : '−';
        }
      }
    });
  });

  // ---------------------------------------------------------------------------
  // 15. Sistema de Notificaciones Flotantes (Toast)
  // ---------------------------------------------------------------------------
  function showToast(msg) {
    const toast = document.getElementById('toastNotification');
    const toastMsg = document.getElementById('toastMessage');
    if (toast && toastMsg) {
      toastMsg.textContent = msg;
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 3000);
    }
  }

  // ---------------------------------------------------------------------------
  // 16. Inicialización al Cargar la Página
  // ---------------------------------------------------------------------------
  renderCatalogCards();
  initVideoPlaylist();
  initGallery();

});
