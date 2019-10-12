'strict';

// ref: http://christianheilmann.com/2015/04/08/keeping-it-simple-coding-a-carousel/

let carousel = (function() {
  const box = document.querySelector('.carousel-box');
  const next = box.querySelector('.next');
  const prev = box.querySelector('.prev');
  const items = box.querySelectorAll('.content li');

  let counter = 0;
  const amount = items.length;
  let current = items[0];

  box.classList.add('active');

  function navigateTo(direction) {
    current.classList.remove('current');
    counter = counter + direction;

    if (direction === -1 && counter < 0) counter = amount - 1;
    if (direction === 1 && !items[counter]) counter = 0;

    current = items[counter];
    current.classList.add('current');
  }

  next.addEventListener('click', e => navigateTo(1));
  prev.addEventListener('click', e => navigateTo(-1));

  navigateTo(0);
})();

/*
// Testing:

function assert(condution, message) {
  return condution ? true : message;
}

let a = 2;

console.log(assert(a === 1, 'Disaster, a is not 1!'));

// Performance analysis:

const maxCount = 10000;

console.time('My Operation');

for (let i = 0; i < maxCount; i++) {
  document.querySelector('.main');
}

console.timeEnd('My Operation');

window.onclick = function(e) {
  console.log('onclick');
};

window.onclick = function(e) {
  console.log('onclick 2');
};

window.addEventListener('click', function() {
  console.log('click');
});
*/
