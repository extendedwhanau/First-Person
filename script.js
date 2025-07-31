const homeNav = document.getElementById('homeNav');
const infoNav = document.getElementById('infoNav');
const infoOverlay = document.getElementById('infoOverlay');

function setActiveNav(nav) {
  if (nav === 'home') {
    homeNav.classList.add('active');
    infoNav.classList.remove('active');
    infoOverlay.classList.remove('active');
  } else {
    homeNav.classList.remove('active');
    infoNav.classList.add('active');
    infoOverlay.classList.add('active');
  }
}

homeNav.addEventListener('click', () => setActiveNav('home'));
infoNav.addEventListener('click', () => setActiveNav('info'));

// Close overlay on click anywhere on mobile, or outside info-content on desktop
infoOverlay.addEventListener('click', (e) => {
  // On mobile (touch devices), close on any click
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    setActiveNav('home');
  } else {
    // On desktop, only close when clicking outside the content
    if (e.target === infoOverlay) setActiveNav('home');
  }
}); 