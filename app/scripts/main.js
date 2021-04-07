// Scrollspy
$(document).ready(function () {
  $('.header-menu-item').click(function (e) { 
    e.preventDefault();
    let part = $(this).children('.header-menu-link').attr('href');
    let pos = $(part).offset().top;
    $('html, body').animate({scrollTop: pos}, 1400, 'easeOutCubic');
  });
});

// Toggle header menu
const headerToggle = document.querySelector('.header-toggle');
const menuHeader = document.querySelector('.header-menu');
const activeClass = "is-active";

headerToggle.addEventListener('click', () => {
  menuHeader.classList.add(activeClass);
})

window.addEventListener('click', (e) => {
  if (!menuHeader.contains(e.target) && !e.target.matches('.header-toggle')) {
    menuHeader.classList.remove(activeClass);
  }
})

// Collapse menu
const wedoItems = Array.from(document.querySelectorAll('.wedo-item'));
wedoItems.forEach(e => {
  e.addEventListener('click', () => {
    if (e.classList.contains('is-active') ) {
      e.classList.remove('is-active')
    } else {
      e.classList.add('is-active')
    }
  })
})

// Slick slider 
$(document).ready(function () {
  $('.quote-container').slick({
    prevArrow: '<div class="slick-prev"><i class="fal fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fal fa-angle-right" aria-hidden="true"></i></div>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false
        }
      },
    ]
  });
});
