'use strict';

/* Accordion v2 */

class Accordion {
  constructor(single = false) {
    let headers = document.querySelectorAll('.accordion .accordion__header');

    if (headers.length > 0) {
      if (single) {
        headers.forEach(header =>
          header.addEventListener('click', this.singleOpen)
        );
      } else {
        headers.forEach(header => header.addEventListener('click', this.open));
      }
    }
  }

  /* fires when user clicks on a header and
     'init' invoked with default value 'false': init() */
  open() {
    let content = this.nextElementSibling;

    if (content.style.maxHeight) content.style.maxHeight = '';
    else content.style.maxHeight = `${content.scrollHeight}px`;

    this.classList.toggle('accordion__header_active');
  }

  /* fires when user clicks on a header and
     'init' invoked with 'true': init(true) */
  singleOpen() {
    // reset state of all panels:

    // 1) close all panels:
    let contents = this.parentElement.querySelectorAll('.accordion__content');

    if (contents.length > 0) {
      contents.forEach(content => (content.style.maxHeight = ''));
    }

    // 2) reset color of all panels:
    let headers = this.parentElement.querySelectorAll('.accordion__header');
    if (headers.length > 0) {
      headers.forEach(header => {
        if (header.classList.contains('accordion__header_active')) {
          header.classList.remove('accordion__header_active');
        }
      });
    }

    // open the current panel:

    // 1) get content under current header
    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = '';
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
    // 2) change opened header color:
    this.classList.toggle('accordion__header_active');
  }
}

window.addEventListener('load', function() {
  new Accordion(true);
});

/* ---------------------------------------------------------------- */

let accordion = {
  init(single = false) {
    let headers = document.querySelectorAll('.accordion .accordion__header');

    if (headers.length > 0) {
      if (single) {
        headers.forEach(header =>
          header.addEventListener('click', this.singleOpen)
        );
      } else {
        headers.forEach(header => header.addEventListener('click', this.open));
      }
    }
  },

  /* fires when user clicks on a header and
     'init' invoked with default value 'false': init() */
  open() {
    let content = this.nextElementSibling;

    if (content.style.maxHeight) content.style.maxHeight = '';
    else content.style.maxHeight = `${content.scrollHeight}px`;

    this.classList.toggle('accordion__header_active');
  },

  /* fires when user clicks on a header and
     'init' invoked with 'true': init(true) */
  singleOpen() {
    // reset state of all panels:

    // 1) close all panels:
    let contents = this.parentElement.querySelectorAll('.accordion__content');

    if (contents.length > 0) {
      contents.forEach(content => (content.style.maxHeight = ''));
    }

    // 2) reset color of all panels:
    let headers = this.parentElement.querySelectorAll('.accordion__header');
    if (headers.length > 0) {
      headers.forEach(header => {
        if (header.classList.contains('accordion__header_active')) {
          header.classList.remove('accordion__header_active');
        }
      });
    }

    // open the current panel:

    // 1) get content under current header
    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = '';
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
    // 2) change opened header color:
    this.classList.toggle('accordion__header_active');
  },
};
/*
window.addEventListener('load', function() {
  accordion.init();
});
*/

/* Accordion v1 */
/*
const accordionOne = document.querySelectorAll('.accordion__header');

for (let el of accordionOne) {
  el.addEventListener('click', openAcc, false);
}

function openAcc() {
  let accordion__content = this.nextElementSibling;

  accordion__content.style.maxHeight
    ? (accordion__content.style.maxHeight = '')
    : (accordion__content.style.maxHeight = `${accordion__content.scrollHeight}px`);

  this.classList.toggle('accordion__header_active');
}
*/

/*
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

// Inherit from Animal by specifying "extends Animal"
class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    super.stop();
    this.hide();
  }
}

let rabbit = new Rabbit("White Rabbit", 10);

console.log(rabbit.name)
console.log(rabbit.earLength);
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop();

console.log(Rabbit.__proto__ === Animal);
console.log(Rabbit.prototype.__proto__ === Animal.prototype)

//--------------------------

sayHello()// выдаст только 'Hello!'. Почему? Рассказу об этом и посвящён данный пример.
 
function sayHello () {
    var hello;
    
    function hello () {       // lexical environment: hello = function
        console.log('Hey!')
    }
    hello()
}




function TheatreSeats() {
  var seats = [];

  this.placePerson = function(person) {
    seats.push(person);
    console.log(seats);
  };
}

let t = new TheatreSeats();
t.placePerson('John');
t.placePerson('Bob');




let student = new Object();

student.fName = 'John';
student.lName = 'Smith';
student.id = 5;
student.markE = 76;
student.markM = 99;
student.markS = 87;
student.calculateAverage = function() {
  return (student.markE + student.markM + student.markS) / 3;
};

student.displayDetails = function() {
  document.write('Student ID: ' + student.id + '<br>');
  document.write('Name: ' + student.fName + ' ' + student.lName + '<br>');
  let avg = student.calculateAverage();
  document.write('Average marks: ' + avg);
}

student.displayDetails();

for (let prop in student) {
  document.write(prop + ' ' + student[prop] + '<br>');
}

*/
