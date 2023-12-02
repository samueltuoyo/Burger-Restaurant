
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

// Add click event listener to each button with a unique ID
  document.getElementById('singleBurgerButton').addEventListener('click', function() {
    showBurgerAlert('Single');
  });

  document.getElementById('doubleBurgerButton').addEventListener('click', function() {
    showBurgerAlert('Double');
  });

  function showBurgerAlert(amount) {
    // Using SweetAlert2 to create a customized alert
    Swal.fire({
      title: 'Burger Alert!',
      html: `<p>Amount: ${amount}</p><img src="burger.jpg" alt="Burger Photo" style="max-width:100%;">`,
      confirmButtonText: 'Cool!',
      position: 'center',
      customClass: {
        container: 'my-swal', // Apply the custom style to the SweetAlert2 modal only
      },
    });
  }