window.onload = function () {
  // 메뉴
  let navList = document.querySelector('.nav > ul');
  let subMenus = document.querySelectorAll('.nav > ul > li > ul');

  subMenus.forEach(function (submenu) {
    submenu.style.display = 'block';
    submenu.style.height = '0';
    submenu.style.overflow = 'hidden';
    submenu.style.transition = 'all 600ms';
  });

  navList.addEventListener('mouseover', () => {
    navList.querySelectorAll('.submenu').forEach((sub) => {
      sub.style.height = '280px';
    });
    document.getElementById('nav').classList.add('on');
  });

  navList.addEventListener('mouseout', () => {
    navList.querySelectorAll('.submenu').forEach((sub) => {
      sub.style.height = '0px';
    });
    document.getElementById('nav').classList.remove('on');
  });

  //tab menu
  const tabBtn = document.querySelectorAll('.tab-btn > ul > li > a');
  const tabCont = document.querySelectorAll('.tab-cont > div');

  tabCont.forEach((el) => (el.style.display = 'none'));
  tabCont[0].style.display = 'block';

  tabBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      tabBtn.forEach((btn) => btn.classList.remove('active'));
      btn.classList.add('active');

      tabCont.forEach((cont) => (cont.style.display = 'none'));
      tabCont[index].style.display = 'block';
    });
  });

  // special tab menu
  const stabBtn = document.querySelectorAll('.stab-btn > ul > li');
  const stabCont = document.querySelectorAll('.stab-cont > div');

  stabCont.forEach((el) => (el.style.display = 'none'));
  stabCont[0].style.display = 'block';

  stabBtn.forEach((sbtn, sindex) => {
    sbtn.addEventListener('click', () => {
      stabBtn.forEach((sbtn) => sbtn.classList.remove('sactive'));
      sbtn.classList.add('sactive');

      stabCont.forEach((scont) => (scont.style.display = 'none'));
      stabCont[sindex].style.display = 'block';
    });
  });

  // 슬라이드
  var swiper = new Swiper('.mySwiper', {
    cssMode: true,
    autoplay: {
      delay: 3000,
    },
    autoHeight: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: false,
    keyboard: false,
  });
};
