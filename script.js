const infoNav = document.getElementById('infoNav');
const infoOverlay = document.getElementById('infoOverlay');

function toggleInfo() {
  infoNav.classList.toggle('active');
  infoOverlay.classList.toggle('active');
}

infoNav.addEventListener('click', toggleInfo);

// Close overlay on click anywhere on mobile, or outside info-content on desktop
infoOverlay.addEventListener('click', (e) => {
  // On mobile (touch devices), close on any click
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    infoNav.classList.remove('active');
    infoOverlay.classList.remove('active');
  } else {
    // On desktop, only close when clicking outside the content
    if (e.target === infoOverlay) {
      infoNav.classList.remove('active');
      infoOverlay.classList.remove('active');
    }
  }
}); 