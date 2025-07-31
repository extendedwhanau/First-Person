const infoNav = document.getElementById('infoNav');
const infoOverlay = document.getElementById('infoOverlay');
const desktopVideo = document.getElementById('desktopVideo');
const mobileVideo = document.getElementById('mobileVideo');

// Ensure videos play immediately
function playVideos() {
  desktopVideo.play().catch(e => console.log('Desktop video autoplay failed:', e));
  mobileVideo.play().catch(e => console.log('Mobile video autoplay failed:', e));
}

// Play videos on page load
document.addEventListener('DOMContentLoaded', playVideos);

// Also try to play on user interaction
document.addEventListener('click', function() {
  playVideos();
}, { once: true });

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