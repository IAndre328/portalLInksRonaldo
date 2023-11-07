let tamanhoTela = window.screen.availWidth;

function newNavbar(){
   let oldUL = document.querySelector(".navbar nav").innerHTML;
   let oldNav = document.querySelector("nav");
    oldNav.innerHTML = '';
    console.log(oldUL)
}

if (tamanhoTela < 850) newNavbar();