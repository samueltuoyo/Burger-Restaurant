
//variables
const header = document.getElementById('header');
const mobileNav = document.getElementById('mobilenav');


//scroll function
let previousScroll = window.scrollY;

window.addEventListener('scroll', () => {
  
const currentScroll = window.scrollY;

if(currentScroll > previousScroll){
  header.style.top = '-80px';
  mobileNav.style.bottom = 0;
  mainsec.style.padding = 0;
} else if (currentScroll < previousScroll) {header.style.top = 0;
 mobileNav.style.bottom = '-80px';
}

previousScroll = currentScroll;
})

