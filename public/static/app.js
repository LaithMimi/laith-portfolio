// Laith Mimi Portfolio - Frontend JavaScript
// Additional interactive features and enhancements

document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio loaded successfully');
  
  // Initialize any additional features here
  initParallax();
  initCursorEffect();
});

// Subtle parallax effect on hero section
function initParallax() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.3;
    hero.style.transform = `translate3d(0, ${rate}px, 0)`;
  });
}

// Custom cursor effect for desktop
function initCursorEffect() {
  if (window.innerWidth < 768) return;
  
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(99, 102, 241, 0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease, border-color 0.3s ease;
    transform: translate(-50%, -50%);
  `;
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  
  // Expand cursor on interactive elements
  document.querySelectorAll('a, button, .card-hover, .skill-pill').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursor.style.borderColor = 'rgba(139, 92, 246, 0.8)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.borderColor = 'rgba(99, 102, 241, 0.5)';
    });
  });
}

// Typing effect for hero (optional enhancement)
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}
