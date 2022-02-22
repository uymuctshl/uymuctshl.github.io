"use strict";
"use strict";
// var cursor = document.querySelector('.cursor');
// var a = document.querySelectorAll('a');
// var img = document.querySelectorAll('.work__content-image');
// var letter = document.querySelectorAll('.header__title span');
// var keyboard = document.querySelector('.main__picture');
// var cursorListener = function (e) {
//     var x = e.clientX;
//     var y = e.clientY;
//     cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
// };
// document.addEventListener('mousemove', cursorListener, false);
// a.forEach(item => {
//   item.addEventListener('mouseover', () => {
//     cursor.classList.add('link');
//     cursor.style.width = item.offsetWidth + 20 + 'px';
//     cursor.style.height = item.offsetHeight + 10 + 'px';
//   });
//   item.addEventListener('mouseleave', () => {
//     cursor.classList.remove('link');
//     cursor.style.width = '';
//     cursor.style.height = '';
//   });
// })
// img.forEach(item => {
//     item.addEventListener('mouseover', () => {
//       cursor.classList.add('image');
//     });
//     item.addEventListener('mouseleave', () => {
//       cursor.classList.remove('image');
//     });
// })
// letter.forEach(item => {
//     item.addEventListener('mouseover', () => {
//       cursor.classList.add('letter');
//       item.style.transform = `translate3d(0, -10px, 0)`
//     });
//     item.addEventListener('mouseleave', () => {
//       cursor.classList.remove('letter');
//       item.style.transform = `translate3d(0, 0, 0)`
//     });
// })
// keyboard.addEventListener('mouseover', () => {
//     cursor.classList.add('keyboard');
// });
// keyboard.addEventListener('mouseleave', () => {
//   cursor.classList.remove('keyboard');
// });
"use strict";
"use strict";

$('.work__item').on('click', function () {
  if (!$('.work__content', this)[0].classList.contains('work__content--show')) {
    $('.work__content').toggleClass('work__content--show', false);
    $('.work__content', this)[0].classList.toggle('work__content--show', true);
    $('.work__content-image video', this)[0].play();
  } else {
    $('.work__content', this)[0].classList.toggle('work__content--show', false);
    $('.work__content-image video', this)[0].pause();
  }
});
"use strict";

setInterval(function () {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  document.querySelector('.header__info-time-hour').innerText = hours;
  document.querySelector('.header__info-time-minutes').innerText = minutes;
}, 1000);