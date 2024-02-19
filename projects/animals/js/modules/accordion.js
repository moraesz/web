export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt',
  );
  if (accordionList.length) {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');
    accordionList.forEach((item) => {
      item.addEventListener('click', () => {
        item.classList.toggle('ativo');
        item.nextElementSibling.classList.toggle('ativo');
      });
    });
  }
}
