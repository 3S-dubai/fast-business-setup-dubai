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

    const reason=document.getElementById('rideReason')?.value || 'General taxi booking';
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
      `Type of travel: ${reason}`,
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


const showBookingBtn=document.getElementById('showBookingBtn');
const showBookingBtnCard=document.getElementById('showBookingBtnCard');
const hideBookingBtn=document.getElementById('hideBookingBtn');
const bookingTeaser=document.getElementById('bookingTeaser');
const bookingFormBox=document.getElementById('bookingForm');

function showBookingForm(reason='General taxi booking'){
  const reasonField=document.getElementById('rideReason');
  const title=document.getElementById('bookingFormTitle');

  if(reasonField){
    reasonField.value=reason;
  }

  if(title){
    title.textContent=reason === 'General taxi booking' ? 'Fill ride details' : reason;
  }

  if(bookingFormBox){
    bookingFormBox.classList.add('show');
    bookingFormBox.setAttribute('aria-hidden','false');
  }

  if(bookingTeaser){
    bookingTeaser.classList.add('hide');
  }

  const formTarget=bookingFormBox || document.getElementById('booking');
  formTarget?.scrollIntoView({behavior:'smooth',block:'center'});
  setTimeout(()=>document.getElementById('rideDate')?.focus(),180);
}

function hideBookingForm(){
  if(bookingFormBox){
    bookingFormBox.classList.remove('show');
    bookingFormBox.setAttribute('aria-hidden','true');
  }
  if(bookingTeaser){
    bookingTeaser.classList.remove('hide');
  }
}

if(showBookingBtn){showBookingBtn.addEventListener('click',()=>showBookingForm('General taxi booking'));}
if(showBookingBtnCard){showBookingBtnCard.addEventListener('click',()=>showBookingForm('General taxi booking'));}
document.querySelectorAll('.open-booking').forEach(button=>{
  button.addEventListener('click',()=>showBookingForm(button.dataset.reason || 'General taxi booking'));
});
if(hideBookingBtn){hideBookingBtn.addEventListener('click',hideBookingForm);}


document.querySelectorAll('.service-action').forEach(button=>{
  button.addEventListener('click',(event)=>{
    event.stopPropagation();
    showBookingForm(button.dataset.reason || 'General taxi booking');
  });
});

document.querySelectorAll('.clickable-service').forEach(card=>{
  card.addEventListener('click',()=>showBookingForm(card.dataset.reason || 'General taxi booking'));
  card.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter' || event.key === ' '){
      event.preventDefault();
      showBookingForm(card.dataset.reason || 'General taxi booking');
    }
  });
});
