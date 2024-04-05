import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  if (menuButton) {
    function openMenu(event) {
      menuList.classList.add('active');
      menuButton.classList.add('active');
      // console.log('clicou');
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove('active');
        menuButton.classList.remove('active');
        // console.log('removeu');
      });
    }

    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}
