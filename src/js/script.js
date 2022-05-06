const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
})

close.addEventListener('click', () => {
    menu.classList.remove('active');
})

// Dynamic percentage change

const counters = document.querySelectorAll('.skills__progress-counter'),
      lines = document.querySelectorAll('.skills__progress-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});