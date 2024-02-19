export default function initScrollAnimation() {
  const sections = document.querySelectorAll('[tab-anime="scroll"]');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.7;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        // console.log(sectionTop);
        if (sectionTop < 0) {
          section.classList.add('ativo');
        }
      });
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
