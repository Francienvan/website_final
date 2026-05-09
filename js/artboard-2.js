// ============================================
// HOTSPOT CONFIGURATION
// Edit these values to adjust hotspot positions
// ============================================

const hotspotsConfig = {
  desktop: [
    {
      id: 'hotspot-01',
      name: 'Boek Een Naslagwerkje',
      type: 'video',
      url: 'https://www.youtube-nocookie.com/embed/t-OnJP_u2HI',
      x: 15,
      y: 26,
      dotSize: 75,
      dotImage: 'reddot-01.png',
      labelImage: 'images/Boek-naslagwerkje.png',
      labelX: 0,
      labelY: 40,
      labelScale: 0.6
    },
    {
      id: 'hotspot-02',
      name: 'Light Cone',
      type: 'external',
      url: 'https://lightcone.org/en/filmmaker-793-francien-van-everdingen',
      x: 37,
      y: 70,
      dotSize: 50,
      dotImage: 'reddot-02.png',
      labelImage: 'images/LightCone.png',
      labelX: -225,
      labelY: -160,
      labelScale: 0.65
    },
    {
      id: 'hotspot-03',
      name: 'Allerlei',
      type: 'external',
      url: 'https://artoffice.info/kunstenaar/francien-van-everdingen/',
      x: 33.7,
      y: 40.2,
      dotSize: 59,
      dotImage: 'reddot-03.png',
      labelImage: 'images/Allerlei.png',
      labelX: -220,
      labelY: 25,
      labelScale: 0.7
    },
    {
      id: 'hotspot-04',
      name: 'Stof',
      type: 'external',
      url: 'https://www.etsy.com/shop/hitchhikehijabi',
      x: 46,
      y: 53,
      dotSize: 59,
      dotImage: 'reddot-04.png',
      labelImage: 'images/Stof.png',
      labelX: 1,
      labelY: 45,
      labelScale: 0.5
    },
    {
      id: 'hotspot-05',
      name: 'Contact',
      type: 'image',
      url: 'images/contact-emailadres.png',
      x: 85,
      y: 25,
      dotSize: 95,
      dotImage: 'reddot-04.png',
      labelImage: 'images/Contact.png',
      labelX: -275,
      labelY: 5,
      labelScale: 0.9
    },
    {
      id: 'hotspot-06',
      name: 'Stichting Lezeren',
      type: 'external',
      url: 'http://www.lezeren.nl',
      x: 17,
      y: 56.8,
      dotSize: 125,
      dotImage: 'reddot-05.png',
      labelImage: 'images/StichtingLezeren.png',
      labelX: -115,
      labelY: 85,
      labelScale: 0.4
    },
    {
      id: 'hotspot-07',
      name: 'Nederlandse Les',
      type: 'external',
      url: 'https://preply.in/FRANCIEN6NL3194022810',
      x: 26,
      y: 80,
      dotSize: 60,
      dotImage: 'reddot-06.png',
      labelImage: 'images/Nederlandseles.png',
      labelX: -470,
      labelY: -165,
      labelScale: 1
    },
    {
      id: 'hotspot-08',
      name: 'Boek Letters',
      type: 'video',
      url: 'https://www.youtube-nocookie.com/embed/ELwjwDY3hUg',
      x: 57.5,
      y: 50,
      dotSize: 80,
      dotImage: 'reddot-08.png',
      labelImage: 'images/Boek-letters.png',
      labelX: -180,
      labelY: -185,
      labelScale: 0.6
    },
    {
      id: 'hotspot-09',
      name: 'Films',
      type: 'pdf',
      url: '/images/Filmografie-Francien-van-Everdingen.pdf',
      x: 69,
      y: 40,
      dotSize: 70,
      dotImage: 'reddot-09.png',
      labelImage: 'images/Films.png',
      labelX: -100,
      labelY: 75,
      labelScale: 1
    },
    {
      id: 'hotspot-10',
      name: 'CV',
      type: 'pdf',
      url: '/images/CV-Francien-van-Everdingen-website.pdf',
      x: 38.1,
      y: 36,
      dotSize: 120,
      dotImage: 'reddot-10.png',
      labelImage: 'images/CV.png',
      labelX: 62,
      labelY: -265,
      labelScale: 0.85
    },
    {
      id: 'hotspot-11',
      name: 'Exit',
      type: 'exit',
      url: '#',
      x: 83.1,
      y: 83.5,
      dotSize: 75,
      dotImage: 'reddot-10.png',
      labelImage: 'images/Exit.png',
      labelX: -225,
      labelY: -95,
      labelScale: 0.75
    }
  ],
  
  mobile: [
    {
      id: 'mob-hotspot-01',
      name: 'Films',
      type: 'pdf',
      url: '/images/Filmografie-Francien-van-Everdingen.pdf',
      x: 29,
      y: 2,
      dotSize: 44,
      dotImage: 'reddot-09.png',
      labelImage: 'images/Films.png',
      labelX: -24,
      labelY: 16,
      labelScale: 0.56
    },
    {
      id: 'mob-hotspot-02',
      name: 'Stichting Lezeren',
      type: 'external',
      url: 'http://www.lezeren.nl',
      x: 86,
      y: 7,
      dotSize: 62,
      dotImage: 'reddot-05.png',
      labelImage: 'images/StichtingLezeren.png',
      labelX: -96,
      labelY: -8,
      labelScale: 0.5
    },
    {
      id: 'mob-hotspot-03',
      name: 'Stof',
      type: 'external',
      url: 'https://www.etsy.com/shop/hitchhikehijabi',
      x: 49,
      y: 15,
      dotSize: 64,
      dotImage: 'reddot-04.png',
      labelImage: 'images/Stof.png',
      labelX: -18,
      labelY: -6,
      labelScale: 0.6
    },
    {
      id: 'mob-hotspot-04',
      name: 'Boek Een Naslagwerkje',
      type: 'video',
      url: 'https://www.youtube-nocookie.com/embed/t-OnJP_u2HI',
      x: 54,
      y: 33,
      dotSize: 70,
      dotImage: 'reddot-01.png',
      labelImage: 'images/Boek-naslagwerkje.png',
      labelX: -10,
      labelY: 10,
      labelScale: 0.62
    },
    {
      id: 'mob-hotspot-05',
      name: 'Light Cone',
      type: 'external',
      url: 'https://lightcone.org/en/filmmaker-793-francien-van-everdingen',
      x: 22,
      y: 53,
      dotSize: 38,
      dotImage: 'reddot-02.png',
      labelImage: 'images/LightCone-m.png',
      labelX: -6,
      labelY: -12,
      labelScale: 0.5
    },
    {
      id: 'mob-hotspot-06',
      name: 'Allerlei',
      type: 'external',
      url: 'https://artoffice.info/kunstenaar/francien-van-everdingen/',
      x: 69,
      y: 64,
      dotSize: 30,
      dotImage: 'reddot-03.png',
      labelImage: 'images/Allerlei.png',
      labelX: 40,
      labelY: -10,
      labelScale: 0.44
    },
    {
      id: 'mob-hotspot-07',
      name: 'Contact',
      type: 'image',
      url: 'images/contact-emailadres.png',
      x: 67,
      y: 74,
      dotSize: 28,
      dotImage: 'reddot-04.png',
      labelImage: 'images/Contact.png',
      labelX: -18,
      labelY: -10,
      labelScale: 0.54
    },
    {
      id: 'mob-hotspot-08',
      name: 'Nederlandse Les',
      type: 'external',
      url: 'https://preply.in/FRANCIEN6NL3194022810',
      x: 23,
      y: 88,
      dotSize: 30,
      dotImage: 'reddot-06.png',
      labelImage: 'images/Nederlandseles.png',
      labelX: -4,
      labelY: -10,
      labelScale: 0.58
    },
    {
      id: 'mob-hotspot-09',
      name: 'CV',
      type: 'pdf',
      url: '/images/CV-Francien-van-Everdingen-website.pdf',
      x: 31,
      y: 96,
      dotSize: 26,
      dotImage: 'reddot-10.png',
      labelImage: 'images/CV.png',
      labelX: -2,
      labelY: -12,
      labelScale: 0.5
    },
    {
      id: 'mob-hotspot-10',
      name: 'Boek Letters',
      type: 'video',
      url: 'https://www.youtube-nocookie.com/embed/ELwjwDY3hUg',
      x: 77,
      y: 109,
      dotSize: 34,
      dotImage: 'reddot-08.png',
      labelImage: 'images/Boek-letters.png',
      labelX: -16,
      labelY: -10,
      labelScale: 0.48
    },
    {
      id: 'mob-hotspot-11',
      name: 'Exit',
      type: 'exit',
      url: '#',
      x: 86,
      y: 132,
      dotSize: 34,
      dotImage: 'reddot-10.png',
      labelImage: 'images/Exit.png',
      labelX: -22,
      labelY: -10,
      labelScale: 0.5
    }
  ]
};

// ============================================
// DECORATIVE DOTS (non-interactive)
// ============================================

const decorativeDots = {
  desktop: [
    { x: 43, y: 9, size: 60, dotImage: 'reddot-11.png' },
    { x: 59.8, y: 72.7, size: 50, dotImage: 'reddot-15.png' },
    { x: 57, y: 29.5, size: 70, dotImage: 'reddot-16.png' },
    { x: 77.1, y: 63, size: 60, dotImage: 'reddot-17.png' },
    { x: 96.2, y: 41, size: 54, dotImage: 'reddot-18.png' },
    { x: 56.5, y: 20, size: 59, dotImage: 'reddot-19.png' },
    { x: 48, y: 85, size: 55, dotImage: 'reddot-20.png' },
    { x: 72, y: 14, size: 80, dotImage: 'reddot-21.png' },
    { x: 4.5, y: 86, size: 59, dotImage: 'reddot-22.png' },
    { x: 37.5, y: 64, size: 59, dotImage: 'reddot-23.png' }
  ],
  mobile: [
    { x: 28, y: 40, size: 28, dotImage: 'reddot-08.png' },
    { x: 56, y: 86, size: 24, dotImage: 'reddot-11.png' }
  ]
};

// ============================================
// APPLICATION LOGIC
// ============================================

// Initialize PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// DOM Elements
const mediaModal = document.getElementById('mediaModal');
const videoContainer = document.getElementById('videoContainer');
const youtubeVideo = document.getElementById('youtubeVideo');
const pdfContainer = document.getElementById('pdfContainer');
const imageContainer = document.getElementById('imageContainer');
const modalImage = document.getElementById('modalImage');

// Helper function to create a hotspot element
function createHotspot(config, isDesktop) {
  const link = document.createElement('a');
  link.className = 'hotspot';
  link.id = config.id;
  
  // Set position
  link.style.left = config.x + '%';
  link.style.top = config.y + '%';
  
  // Create dot element
  const dot = document.createElement('div');
  dot.className = 'hotspot__dot';
  dot.style.backgroundImage = `url('images/${config.dotImage}')`;
  
  // Create label element
  const label = document.createElement('div');
  label.className = 'hotspot__label';
  const labelImg = document.createElement('img');
  labelImg.src = config.labelImage;
  labelImg.alt = config.name;
  label.appendChild(labelImg);
  
  // Position label relative to dot center
  label.style.left = config.labelX + 'px';
  label.style.top = config.labelY + 'px';
  label.style.transform = `scale(${config.labelScale})`;
  
  link.appendChild(dot);
  link.appendChild(label);
  
  // Set up interaction based on type
  if (config.type === 'external') {
    link.href = config.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else if (config.type === 'exit') {
    link.href = '#';
    link.onclick = function(e) {
      e.preventDefault();
      closeTab();
      return false;
    };
  } else {
    link.href = '#';
    link.setAttribute('data-bs-toggle', 'modal');
    link.setAttribute('data-bs-target', '#mediaModal');
    link.setAttribute('data-type', config.type);
    link.setAttribute('data-src', config.url);
    link.setAttribute('data-name', config.name);
  }
  
  return link;
}

function createDecorativeDot(config) {
  const dot = document.createElement('span');
  dot.className = 'hotspot hotspot--decor';
  dot.style.position = 'absolute';
  dot.style.left = config.x + '%';
  dot.style.top = config.y + '%';
  dot.style.width = config.size + 'px';
  dot.style.height = config.size + 'px';
  dot.style.marginLeft = -(config.size / 2) + 'px';
  dot.style.marginTop = -(config.size / 2) + 'px';
  dot.style.backgroundImage = `url('images/${config.dotImage}')`;
  dot.style.backgroundSize = 'contain';
  dot.style.backgroundRepeat = 'no-repeat';
  dot.style.backgroundPosition = 'center';
  dot.style.pointerEvents = 'none';
  dot.style.zIndex = '1';
  return dot;
}

// Set dot size for interactive hotspots
function setDotSize(hotspot, size) {
  const dot = hotspot.querySelector('.hotspot__dot');
  if (dot) {
    dot.style.width = size + 'px';
    dot.style.height = size + 'px';
    dot.style.marginLeft = -(size / 2) + 'px';
    dot.style.marginTop = -(size / 2) + 'px';
  }
}

// Render hotspots for an artboard
function renderArtboard(artboardType) {
  const artboard = document.querySelector(`.artboard--${artboardType}`);
  if (!artboard) return;
  
  const container = artboard.querySelector('.hotspots-container');
  if (!container) return;
  
  // Clear existing hotspots
  container.innerHTML = '';
  
  // Add interactive hotspots
  const hotspots = hotspotsConfig[artboardType];
  if (hotspots) {
    hotspots.forEach(config => {
      const hotspot = createHotspot(config, artboardType === 'desktop');
      setDotSize(hotspot, config.dotSize);
      container.appendChild(hotspot);
    });
  }
  
  // Add decorative dots
  const decorDots = decorativeDots[artboardType];
  if (decorDots) {
    decorDots.forEach(config => {
      const decorDot = createDecorativeDot(config);
      container.appendChild(decorDot);
    });
  }
}

// PDF rendering function
async function renderPDF(url) {
  try {
    pdfContainer.innerHTML = '<div class="text-center p-4 text-white">Loading PDF...</div>';
    
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const arrayBuffer = await response.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    
    pdfContainer.innerHTML = '';
    
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      canvas.style.width = '100%';
      canvas.style.height = 'auto';
      
      await page.render({ canvasContext: context, viewport }).promise;
      pdfContainer.appendChild(canvas);
    }
  } catch (error) {
    console.error('Error loading PDF:', error);
    pdfContainer.innerHTML = '<div class="alert alert-danger m-3">Error loading PDF. Please try again later.</div>';
  }
}

// Modal event handlers
if (mediaModal) {
  mediaModal.addEventListener('show.bs.modal', async (event) => {
    const button = event.relatedTarget;
    const type = button?.getAttribute('data-type');
    const src = button?.getAttribute('data-src');
    
    // Hide all containers
    videoContainer.classList.add('d-none');
    pdfContainer.classList.add('d-none');
    imageContainer.classList.add('d-none');
    pdfContainer.innerHTML = '';
    
    // Handle video
    if (type === 'video' && src) {
      videoContainer.classList.remove('d-none');
      const separator = src.includes('?') ? '&' : '?';
      youtubeVideo.src = src + separator + 'autoplay=1&rel=0';
    }
    // Handle PDF
    else if (type === 'pdf' && src) {
      pdfContainer.classList.remove('d-none');
      await renderPDF(src);
    }
    // Handle image
    else if (type === 'image' && src) {
      imageContainer.classList.remove('d-none');
      modalImage.src = src;
    }
  });
  
  mediaModal.addEventListener('hidden.bs.modal', () => {
    // Clean up
    youtubeVideo.src = '';
    pdfContainer.innerHTML = '';
    modalImage.src = '';
  });
}

// Exit function
function closeTab() {
  if (window.close) {
    window.close();
  }
  setTimeout(() => {
    window.location.href = 'about:blank';
  }, 100);
}

// Determine which artboard to show based on screen size
function setActiveArtboard() {
  const isMobile = window.innerWidth <= 767 || window.matchMedia('(orientation: portrait)').matches;
  const desktopArtboard = document.querySelector('.artboard--desktop');
  const mobileArtboard = document.querySelector('.artboard--mobile');
  
  if (desktopArtboard && mobileArtboard) {
    if (isMobile) {
      desktopArtboard.classList.remove('active');
      mobileArtboard.classList.add('active');
    } else {
      desktopArtboard.classList.add('active');
      mobileArtboard.classList.remove('active');
    }
  }
}

// Initialize on page load
function init() {
  renderArtboard('desktop');
  renderArtboard('mobile');
  setActiveArtboard();
  
  // Listen for resize and orientation changes
  window.addEventListener('resize', setActiveArtboard);
  window.addEventListener('orientationchange', setActiveArtboard);
}

// Start the application
document.addEventListener('DOMContentLoaded', init);

// Make closeTab available globally
window.closeTab = closeTab;
