const getBurgerButton = document.getElementById('burgerButton');
const getBurger = document.getElementById('burger');
const getBurgerNavbar = document.getElementById('navbarOfBurger');

// renvoi la distance en pixel entre mon élément et le haut de la page
const burgerNavbarPosition = getBurgerNavbar.offsetTop;

getBurgerButton.addEventListener('click', function() {
    getBurger.classList.toggle('open');
    getBurgerNavbar.classList.toggle('open');
})

window.addEventListener("scroll", function(){
    // si la valeur de la position verticale de la page est supérieur à la distance entre mon menu burger et le haut de la page je passe mon menu burger en sticky
    if(window.scrollY >= burgerNavbarPosition){
        getBurgerNavbar.classList.add('sticky');
    } else{
        getBurgerNavbar.classList.remove('sticky');
    }
})