const nav=document.getElementById('siteNav');
const menuBtn=document.getElementById('menuBtn');
const mobileNav=document.getElementById('mobileNav');
const year=document.getElementById('year');

window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>24));

if(menuBtn&&mobileNav){
  menuBtn.addEventListener('click',()=>{
    const isOpen=mobileNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',String(isOpen));
  });

  mobileNav.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click',()=>{
      mobileNav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded','false');
    });
  });
}

if(year){year.textContent=new Date().getFullYear();}


const bookingForm=document.getElementById('bookingForm');
if(bookingForm){
  bookingForm.addEventListener('submit',(event)=>{
    event.preventDefault();

    const date=document.getElementById('rideDate')?.value || '';
    const to=document.getElementById('rideTo')?.value.trim() || '';
    const toMap=document.getElementById('rideToMap')?.value.trim() || '';
    const from=document.getElementById('rideFrom')?.value.trim() || '';
    const fromMap=document.getElementById('rideFromMap')?.value.trim() || '';
    const people=document.getElementById('ridePeople')?.value || '';
    const info=document.getElementById('rideInfo')?.value.trim() || '';

    const message=[
      'Hello UAE Safe Travel, I need a taxi service in Dubai.',
      '',
      `Date: ${date || '-'}`,
      `To: ${to || '-'}`,
      `To map link: ${toMap || '-'}`,
      `From: ${from || '-'}`,
      `From map link: ${fromMap || '-'}`,
      `Number of people: ${people || '-'}`,
      `Additional info: ${info || '-'}`,
      '',
      'Please share availability and price.'
    ].join('\n');

    window.open(`https://wa.me/971507182868?text=${encodeURIComponent(message)}`,'_blank','noopener');
  });
}
