const header=document.querySelector('.site-header');
const menu=document.querySelector('.menu-btn');
const links=document.querySelector('.nav-links');
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>30));
menu?.addEventListener('click',()=>links?.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links?.classList.remove('open')));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const form=document.querySelector('#contactForm');
if(form){form.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(form);
  const subject=encodeURIComponent(data.get('subject')||'Website inquiry');
  const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
  window.location.href=`mailto:info@yosroyalty.com?subject=${subject}&body=${body}`;
});}
