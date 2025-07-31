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

// Optional: Close overlay on click outside info-content
infoOverlay.addEventListener('click', (e) => {
  if (e.target === infoOverlay) setActiveNav('home');
}); 