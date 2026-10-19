// =============================================================================
// TRAMA GRÁFICA - Catálogo de Productos, Materiales y Acabados (Con Fotos Reales)
// =============================================================================

export const CATEGORIES = [
  { id: "all", label: "Todos los Productos" },
  { id: "seguridad", label: "Seguridad & Formularios" },
  { id: "empaques", label: "Empaques & Cajas" },
  { id: "corporativo", label: "Papelería & Editorial" },
  { id: "merch", label: "Promocionales & Merch" },
  { id: "litografia", label: "Litografía General" }
];

export const PRODUCTS = [
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

export const VIDEOS = [
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

export const GALLERY_PHOTOS = [
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

export const MATERIALS = [
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

export const TACTILE_LAB_DATA = {
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

export const FAQ_DATA = [
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
