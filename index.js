
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
    showBurgerAlert('10$');
  });

  document.getElementById('doubleBurgerButton').addEventListener('click', function() {
    showBurgerAlert('12$');
  });

document.getElementById('3burgerButton').addEventListener('click', function() {
    showBurgerAlert('4$');
  });
document.getElementById('4burgerButton').addEventListener('click', function() {
    showBurgerAlert('5$');
  });



  function showBurgerAlert(amount) {
    // Using SweetAlert2 to create a customized alert
    Swal.fire({
      title: 'Burger!',
      html: `<p>Amount: ${amount}</p><img src="burger.jpg" alt="Burger Photo" style="max-width:100%;">`,
      confirmButtonText: 'Purchase!',
              position: 'center',

      customClass: {
        container: 'my-swal', // Apply the custom style to the SweetAlert2 modal only
      },
    });
  }