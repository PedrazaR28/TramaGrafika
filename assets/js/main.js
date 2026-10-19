// =============================================================================
// TRAMA GRÁFICA - Lógica Interactiva Principal (Catálogo Comercial)
// Optimizado para Conversión, Experiencia de Usuario y Rendimiento
// =============================================================================

import { CONFIG } from './config.js';
import { PRODUCTS, CATEGORIES, MATERIALS, TACTILE_LAB_DATA, FAQ_DATA, VIDEOS, GALLERY_PHOTOS } from './products-data.js';

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
