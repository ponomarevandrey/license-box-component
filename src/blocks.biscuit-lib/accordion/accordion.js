'use strict';

let a = {
  drink: 'juice',
};

let b = {
  food: 'sausage',
};

b.__proto__ = a;
console.log(b.drink);

function Machine(params) {
  let privateProp = 'Machine';

  this._protectedProp = 'Machine protected prop';
}

Machine.prototype.greeting = function() {
  this.n = 'Hello, ' + this._protectedProp;
  // console.log('one');
};

function CoffeeMachine(params) {
  Machine.apply(this, arguments);

  this.string = this._protectedProp + '!!!';
}

CoffeeMachine.prototype = Object.create(Machine.prototype);
CoffeeMachine.prototype.constructor = CoffeeMachine;

CoffeeMachine.prototype.greeting = function() {
  Machine.prototype.greeting.apply(this, arguments);
  console.log(this.n + ' Extended');
  // console.log('two');
};

let m = new CoffeeMachine();

m.greeting();
console.log(CoffeeMachine.prototype.__proto__ === Machine.prototype);

/* -------------------------------------------------- */

class Model1 {
  constructor() {
    this.n = 25;
  }
}

class View1 {
  constructor() {}

  plus(a) {
    console.log(18 + a);
  }
}

class Controller1 {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.operation(this.model.n);
  }

  operation = num => {
    this.view.plus(num);
  };
}

/* ------------------------------------------------- */

class Model2 {
  constructor() {
    this.n = 25;
  }
}

class View2 {
  constructor() {
    this._smth = 3;
  }

  plus(a) {
    a(this._smth);
  }
}

class Controller2 {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // this.operation(this.model.n);
  }

  handleAoperation = num => {
    this.view.plus(num);
  };
}

/* ------------------------------------------------- */

let aaa = new Controller2(new Model2(), new View2());

class Test {
  constructor() {
    this._a = 5;
  }

  check() {
    return this;
  }

  check2 = () => {
    return this;
  };
}

let test = new Test();
console.log(test.check() === test.check2()); // true

// MVC

class Model {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  _commit(todos) {
    this.onTodoListChanged(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  addTodo(todoText) {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText,
      complete: false,
    };

    this.todos.push(todo);

    //this.onTodoListChanged(this.todos);
    this._commit(this.todos);
  }

  editTodo(id, updatedText) {
    this.todos = this.todos.map(todo => {
      return todo.id === id
        ? { id: todo.id, text: updatedText, complete: todo.complete }
        : todo;
    });

    //this.onTodoListChanged(this.todos);
    this._commit(this.todos);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);

    this._commit(this.todos);
  }

  toggleTodo(id) {
    //console.log(this.todos);
    this.todos = this.todos.map(todo => {
      return todo.id === id
        ? { id: todo.id, text: todo.text, complete: !todo.complete }
        : todo;
    });

    //this.onTodoListChanged(this.todos);
    this._commit(this.todos);
  }

  bindTodoListChanged(callback) {
    //Model.prototype.onTodoListChanged = callback; // works too
    this.onTodoListChanged = callback;
  }
}

// -

class View {
  constructor() {
    this.app = this.getElement('#root');

    this.title = this.createElement('h1');
    this.title.textContent = 'Todos';

    this.form = this.createElement('form');
    this.input = this.createElement('input');
    this.input.type = 'text';
    this.input.placeholder = 'Add todo';
    this.input.name = 'todo';

    this.submitButton = this.createElement('button');
    this.submitButton.textContent = 'Submit';

    this.todoList = this.createElement('ul', 'todo-list');

    this.form.append(this.input, this.submitButton);
    this.app.append(this.title, this.form, this.todoList);

    this._temporaryTodoText = '';
    this._initLocalListeners();
  }

  // update temporary state:
  _initLocalListeners() {
    this.todoList.addEventListener('input', eventObj => {
      if (eventObj.target.className === 'editable') {
        this._temporaryTodoText = eventObj.target.innerText;
      }
    });
  }

  // send the completed value to the model:
  bindEditTodo(handler) {
    this.todoList.addEventListener('focusout', eventObj => {
      if (this._temporaryTodoText) {
        const id = parseInt(eventObj.target.parentElement.id);

        handler(id, this._temporaryTodoText);
        this._temporaryTodoText = '';
      }
    });
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);

    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  displayTodos(todos) {
    console.log(todos);

    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    if (todos.length === 0) {
      const p = this.createElement('p');
      p.textContent = 'Nothing to do! Add a task?';
      this.todoList.append(p);
    } else {
      todos.forEach(todo => {
        const li = this.createElement('li');
        li.id = todo.id;

        const checkbox = this.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.complete;

        const span = this.createElement('span');
        span.contentEditable = true;
        span.classList.add('editable');

        if (todo.complete) {
          const strike = this.createElement('s');
          strike.textContent = todo.text;
          span.append(strike);
        } else span.textContent = todo.text;

        const deleteButton = this.createElement('button', 'delete');
        deleteButton.textContent = 'Delete';
        li.append(checkbox, span, deleteButton);

        this.todoList.append(li);
      });
    }
  }

  get _todoText() {
    return this.input.value;
  }

  _resetInput() {
    this.input.value = '';
  }

  // pass data from view to model:
  bindAddTodo(handler) {
    this.form.addEventListener('submit', eventObj => {
      eventObj.preventDefault();

      if (this._todoText) {
        handler(this._todoText);
        this._resetInput();
      }
    });
  }

  bindDeleteTodo(handler) {
    this.todoList.addEventListener('click', eventObj => {
      if (eventObj.target.className === 'delete') {
        const id = parseInt(eventObj.target.parentElement.id);

        handler(id);
      }
    });
  }

  bindToggleTodo(handler) {
    this.todoList.addEventListener('change', eventObj => {
      if (eventObj.target.type === 'checkbox') {
        const id = parseInt(eventObj.target.parentElement.id);

        handler(id);
      }
    });
  }
}

// -

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.onTodoListChanged(this.model.todos);

    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);
    this.view.bindEditTodo(this.handleEditTodo);

    // pass the method 'onTodoListChanged' from Controller to Model
    this.model.bindTodoListChanged(this.onTodoListChanged);
  }

  // what is the value of 'this' here, ouside methods and constructor?
  // for now, as i see, the value of this in arrow function is the same as
  // value of this in any regular function declaration

  // handlers:

  onTodoListChanged = todos => {
    this.view.displayTodos(todos);
  };

  handleAddTodo = todoText => {
    this.model.addTodo(todoText);
  };

  handleEditTodo = (id, todoText) => {
    this.model.editTodo(id, todoText);
  };

  handleDeleteTodo = id => {
    this.model.deleteTodo(id);
  };

  handleToggleTodo = id => {
    this.model.toggleTodo(id);
  };
}

const app = new Controller(new Model(), new View());

/* --------------------------------------------------------------------- */

/* Accordion v2 */

class Accordion {
  constructor(single = false) {
    let headers = document.querySelectorAll('.accordion .accordion__header');

    if (headers.length > 0) {
      if (single) {
        headers.forEach(header => {
          header.addEventListener('click', this.singleOpen);
          header.addEventListener('focus', this.singleOpen);
        });
      } else {
        headers.forEach(header => {
          header.addEventListener('click', this.open);
          header.addEventListener('keyup', this.open);
        });
      }
    }
  }

  /* fires when user clicks on a header and
     'init' invoked with default value 'false': init() */
  open(eventObj) {
    // if we press 'Enter' or if we click:
    if (eventObj.keyCode === 13 || eventObj.type === 'click') {
      let content = this.nextElementSibling;

      if (content.style.maxHeight) content.style.maxHeight = '';
      else content.style.maxHeight = `${content.scrollHeight}px`;

      this.classList.toggle('accordion__header_active');
    }
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

    if (content.style.maxHeight) content.style.maxHeight = '';
    else content.style.maxHeight = `${content.scrollHeight}px`;

    // 2) change opened header color:
    this.classList.toggle('accordion__header_active');
  }
}

window.addEventListener('load', function() {
  new Accordion(true);
});

/* ---------------------------------------------------------------- */

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
