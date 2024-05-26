
function dropdown() {
  const dropBtns = document.querySelectorAll('.dropdown-block__btn');
  const dropContent = document.querySelectorAll('.dropdown');
  dropBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      let curBtn = e.currentTarget;
      let curContent = curBtn.closest('.dropdown-block__item').querySelector('.dropdown');
      curBtn.classList.toggle('dropdown-block__btn--active');
      curContent.classList.toggle('dropdown--active')
    });
  });
}
export default dropdown;
