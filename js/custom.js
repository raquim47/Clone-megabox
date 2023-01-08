// 배너 이미지 슬라이드
const mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: {
    delay: 5000
  }
});

// 영화차트 이미지 슬라이드
const mySwiper2 = new Swiper('.swiper-container2', {
  slidesPerView: 4,
  spaceBetween: 24,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // autoplay: {
  //   delay: 3000,
  // },

  breakpoints: {
    600: {
      slidesPerView: 1.4,
      spaceBetween: 24
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});

// 무비 차트 텝 메뉴
const chartTab = $('.m-chart__tab li');
const slideWrap = $('.chart-slide__wrap');

slideWrap.hide().eq(0).show();

chartTab.click(function (e) {
  e.preventDefault();
  const target = $(this);
  const index = target.index();
  chartTab.removeClass('active');
  target.addClass('active');
  slideWrap.css('display', 'none');
  slideWrap.eq(index).css('display', 'block');
});

// 공지사항 탭 메뉴

const tabMenu = $('.notice');

$('.notice__sub').hide();
$('.notice__item.active > .notice__sub').show();

function tabList(e) {
  e.preventDefault();
  const target = $(this);
  target.next().show().parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();
}

$('.notice__item > a').click(tabList).focus(tabList);