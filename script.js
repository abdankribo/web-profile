const menu=document.getElementById('menu'),nav=document.getElementById('nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h>0?(scrollY/h)*100:0)+'%';});
const sections=[...document.querySelectorAll('main section[id]')],links=[...document.querySelectorAll('.nav-links a')];
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');const l=links.find(a=>a.getAttribute('href')==='#'+e.target.id);if(l){links.forEach(x=>x.classList.remove('active'));l.classList.add('active');}}}),{threshold:.14});
sections.forEach(s=>observer.observe(s));document.querySelectorAll('.hero-copy,.hero-photo').forEach(x=>observer.observe(x));
document.getElementById('contactForm')?.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value,email=document.getElementById('email').value,subject=document.getElementById('subject').value,message=document.getElementById('message').value;if(name&&email&&subject&&message)window.location.href='mailto:abdankribo@gmail.com?cc='+encodeURIComponent(email)+'&subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(message);});
