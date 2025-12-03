function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  const expanded = icon.getAttribute('aria-expanded') === 'true';
  menu.classList.toggle('open');
  icon.classList.toggle('open');
  icon.setAttribute('aria-expanded', String(!expanded));
}

// Section reveal
(function revealOnScroll(){
  const els = Array.from(document.querySelectorAll('section, .details-card, .project-img, .contact-card'));
  els.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: .14 });
  els.forEach(el => io.observe(el));
})();

// Subtle parallax on profile image
(function parallaxProfile(){
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if(mq.matches) return;
  const pic = document.querySelector('#profile .section__pic-container img');
  if(!pic) return;
  window.addEventListener('mousemove', (e)=>{
    const x = (e.clientX / window.innerWidth - .5) * 6;
    const y = (e.clientY / window.innerHeight - .5) * 6;
    pic.style.transform = `translateZ(0) rotateX(${ -y }deg) rotateY(${ x }deg)`;
  });
})();
 