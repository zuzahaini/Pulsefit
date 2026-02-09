// Basic interactions: nav toggle, year, scroll reveal
document.addEventListener('DOMContentLoaded', ()=>{
  // Year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav toggle for mobile
n  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle && navToggle.addEventListener('click', ()=>{
    mainNav.classList.toggle('show');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'});
        // close nav on mobile
        if(mainNav.classList.contains('show')) mainNav.classList.remove('show');
      }
    })
  });

  // Reveal on scroll for elements with .fade-up
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.12});

  document.querySelectorAll('.fade-up').forEach(el=>observer.observe(el));

  // Subtle animation: scale dumbbell plates on hover (desktop)
  const db = document.querySelector('.dumbbell');
  if(db){
    db.addEventListener('mouseenter', ()=>{
      db.querySelectorAll('.plate').forEach((p,i)=>p.style.transform = `scale(${1 + (i?0.06:0.04)})`);
    });
    db.addEventListener('mouseleave', ()=>{
      db.querySelectorAll('.plate').forEach((p)=>p.style.transform = 'scale(1)');
    });
  }
});