
(function () {

  const scrollController = {

    disableScroll() {
      scrollController.scrollPosition = window.scrollY;
      document.body.classList.add("fixscroll");

      console.log(document.body.style.paddingRight);
      document
        .querySelector(":root")
        .style.setProperty("--top", `-${scrollController.scrollPosition}px`);
    },
    enableScroll() {
      document.body.classList.remove("fixscroll");
      window.scroll({ top: scrollController.scrollPosition });

    }
  };


  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('.nav__item');
  const overlay = document?.querySelector('[data-menu-overlay]');
  const headerHeight = document.querySelector('.header').offsetHeight;
  document.querySelector(':root').style.setProperty('--header-top', `${headerHeight}px`);



  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('nav--active');
    overlay?.classList.toggle('overlay--active');
    if (menu?.classList.contains('nav--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      scrollController.disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      scrollController.enableScroll();
    }

  });

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('nav--active');
    overlay?.classList.remove('overlay--active');
    scrollController.enableScroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('nav--active');
      overlay?.classList.remove('overlay--active');
      scrollController.enableScroll();
    });
  });

})();



