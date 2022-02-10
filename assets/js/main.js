"use strict";
"use strict";
"use strict";

var cursor = document.querySelector('.cursor');
var a = document.querySelectorAll('a');
var img = document.querySelectorAll('.work__content-image');
var letter = document.querySelectorAll('.header__title span');
var keyboard = document.querySelectorAll('.key');

var cursorListener = function cursorListener(e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = "translate3d(calc(".concat(e.clientX, "px - 50%), calc(").concat(e.clientY, "px - 50%), 0)");
};

document.addEventListener('mousemove', cursorListener, false);
a.forEach(function (item) {
  item.addEventListener('mouseover', function () {
    cursor.classList.add('link');
    cursor.style.width = item.offsetWidth + 20 + 'px';
    cursor.style.height = item.offsetHeight + 10 + 'px';
  });
  item.addEventListener('mouseleave', function () {
    cursor.classList.remove('link');
    cursor.style.width = '';
    cursor.style.height = '';
  });
});
img.forEach(function (item) {
  item.addEventListener('mouseover', function () {
    cursor.classList.add('image');
  });
  item.addEventListener('mouseleave', function () {
    cursor.classList.remove('image');
  });
});
letter.forEach(function (item) {
  item.addEventListener('mouseover', function () {
    cursor.classList.add('letter');
    item.style.transform = "translate3d(0, -10px, 0)";
  });
  item.addEventListener('mouseleave', function () {
    cursor.classList.remove('letter');
    item.style.transform = "translate3d(0, 0, 0)";
  });
});
keyboard.forEach(function (item) {
  item.addEventListener('mouseover', function () {
    cursor.classList.add('keyboard');
  });
  item.addEventListener('mouseleave', function () {
    cursor.classList.remove('keyboard');
  });
});
"use strict";

$('.work__item').on('click', function () {
  if (!$('.work__content', this)[0].classList.contains('work__content--show')) {
    $('.work__content').toggleClass('work__content--show', false);
    $('.work__content', this)[0].classList.toggle('work__content--show', true);
  } else {
    $('.work__content', this)[0].classList.toggle('work__content--show', false);
  }
});
"use strict";

setInterval(function () {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  document.querySelector('.header__info-time-hour').innerText = hours;
  document.querySelector('.header__info-time-minutes').innerText = minutes;
}, 1000);