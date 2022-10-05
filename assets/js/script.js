//varaveis
const  banner = document.getElementById('banner');
const inputMenu = document.getElementById('menu-hamburguer');

//funcoes
function bannerSlide() {
  banner.classList.remove('banner-foto-4');
  banner.classList.add('banner-foto');
  setTimeout(() => {
    banner.classList.remove('banner-foto');
    banner.classList.add('banner-foto-1');
    setTimeout(() => {
      banner.classList.remove('banner-foto-1');
      banner.classList.add('banner-foto-2');
      setTimeout(() => {
        banner.classList.remove('banner-foto-2');
        banner.classList.add('banner-foto-3');
        setTimeout(() => {
          slideBack();
        }, 3000);
      }, 3000);
    }, 3000);
  }, 3000);
}
function slideBack() {
  banner.classList.remove('banner-foto-3');
  banner.classList.add('banner-foto-4');
  setTimeout(() => {
    bannerSlide();
  }, 3000);
}

//eventos
inputMenu.addEventListener('click', ()=>{
  const header = document.getElementById('header');
  const ul = document.querySelector('.menu-item');
  const nav = document.querySelector('.menu');
  header.classList.toggle('menu-mobile');
  if(header.classList.contains('menu-mobile')){
    ul.classList.add('ul-mobile');
    nav.classList.add('menu-mobile')
  }else{
    ul.classList.remove('ul-mobile');
    nav.classList.remove('menu-mobile')
  }
});