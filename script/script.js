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
