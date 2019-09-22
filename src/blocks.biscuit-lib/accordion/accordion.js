'use strict';

const accordion = document.querySelectorAll('.accordion__header');

for (let el of accordion) {
  el.addEventListener(
    'click',
    function(e) {
      let accordion__content = this.nextElementSibling;

      if (accordion__content.style.display === 'block') {
        accordion__content.style.display = 'none';
      } else {
        accordion__content.style.display = 'block';
      }
    },
    false
  );
}

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
