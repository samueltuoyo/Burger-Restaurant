const BurgerBtn = document.querySelectorAll('#burger-purchase-btn');
const header = document.getElementById('header');
const footer = document.getElementById('mobilenav');
let lastScrollTop = 0;
const amount = 10 + '$';
function showBurgerAlert() {
      Swal.fire({
      title: 'Burger!🥰',
      html: `<p>Amount: ${amount}</p><img src="img/hero-bg.jpg" alt="Burger Photo" style="max-width:100%;">`,
      confirmButtonText: 'Purchase!',
      position: 'center',
      customClass: {
        container: 'my-swal', 
      },
    });
  }

BurgerBtn.forEach((btn) => {
    btn.addEventListener('click', showBurgerAlert)
});





