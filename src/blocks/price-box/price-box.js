'use strict';

const jsonbinAPIkey =
  '$2b$10$66Zqkjp6s2XFRpL/.wqS0.4k7CxUK4N3WOPsjdVODrN4088K2EL.e';
const jsonURL = 'https://api.jsonbin.io/b/5db8ac21511885752b0041e9/2';

const box = document.querySelector('.box');
const defaultPricePlan = 3;
const defaultSelectBoxOption = 2;

//-

function renderBox(response) {
  const box__licensePlans = document.querySelector('.box__license-plans');

  function renderPlan(plan, index, selectedByDefault = 1) {
    const id = `rb${index}`;

    const control = document.createElement('label');
    control.classList.add('control', 'box__license-plan');
    control.setAttribute('for', id);

    // create custom radio button (inactive)
    const control__customControl = document.createElement('div');
    control__customControl.classList.add('control__custom-control');
    // create custom radio buttob (active)
    const control__customControl_active = document.createElement('div');
    control__customControl_active.classList.add(
      'control__custom-control_active'
    );

    const box__licensePlanName = document.createElement('span');
    box__licensePlanName.classList.add(
      'box__heading',
      'control__license-plan-name'
    );
    box__licensePlanName.textContent = plan.name;

    const control__systemControl = document.createElement('input');
    control__systemControl.id = id;
    control__systemControl.type = 'radio';
    control__systemControl.value = plan.name;
    control__systemControl.name = 'license-plan';
    // set price plan selected by default:
    if (index === selectedByDefault - 1) {
      control__systemControl.checked = 'checked';
      control.classList.add('box__license-plan_active');
    }
    control__systemControl.classList.add('control__system-control');

    const box__licensePlanPrice = document.createElement('span');
    box__licensePlanPrice.classList.add('box__license-plan-price');
    box__licensePlanPrice.textContent = `${plan.price} per kicense`;

    control.append(
      control__customControl,
      control__systemControl,
      control__customControl_active,
      box__licensePlanName,
      box__licensePlanPrice
    );
    box__licensePlans.appendChild(control);
  }

  //-

  function selectPricePlan(e) {
    // reset classes on all license plans:
    Array.from(document.querySelectorAll('.box__license-plan')).forEach(
      box__licensePlan => {
        if (box__licensePlan.classList.contains('box__license-plan_active')) {
          box__licensePlan.classList.remove('box__license-plan_active');
          box__licensePlan
            .querySelector('input')
            .setAttribute('checked', false);
        }
      }
    );

    // get currently selected license plan:
    const [currentlySelectedPriceplan] = Array.from(this.children).filter(
      node => {
        const currentlySelectedRadioBtn = document.querySelector(
          'input[type="radio"]:checked'
        );
        if (node.contains(currentlySelectedRadioBtn)) return node;
      }
    );

    // add style to currently selected license plan:
    currentlySelectedPriceplan.classList.add('box__license-plan_active');
    currentlySelectedPriceplan
      .querySelector('input')
      .setAttribute('checked', true);
  }

  //-

  function renderSelectBox(numberOfLicenses, selectedByDefault = 1) {
    const box__numberOfLicenses = document.querySelector(
      '.box__number-of-licenses'
    );

    const select = document.createElement('select');
    select.classList.add('box__selectbox');
    select.id = 'number-of-licenses';
    select.name = 'number-of-licenses';

    numberOfLicenses.forEach((number, index) => {
      const option = document.createElement('option');
      option.value = number;
      option.textContent = number;

      // set default select box value:
      if (index === selectedByDefault - 1) {
        option.setAttribute('selected', true);
      }

      select.appendChild(option);
    });

    box__numberOfLicenses.appendChild(select);

    return select;
  }

  //-

  function renderTotal() {
    const box__totalSum = document.querySelector('.box__total-sum');
    const box__totalCurrency = document.querySelector('.box__total-currency');
    const box__tip = document.querySelector('.box__tip');

    const currentSelectBoxValue = Number(
      selectBox.options[selectBox.selectedIndex].value
    );

    const selectedPricePlan = document.querySelector(
      '.box__license-plans input[type="radio"]:checked'
    );

    const currentPrice = (() => {
      const [{ price }] = response.licensePlan.filter(
        plan => plan.name === selectedPricePlan.value
      );
      return Number(price.match(/\d+/)[0]);
    })();

    box__totalCurrency.textContent = 'US';
    box__totalSum.textContent = ` $${currentPrice * currentSelectBoxValue}`;

    box__tip.textContent = `Selected: ${selectedPricePlan.value.match(/\#.+/)}`;
  }

  //-

  // render all license plans:
  response.licensePlan.forEach((plan, index) => {
    // third arguments is the number of price plan selected by default:
    renderPlan(plan, index, defaultPricePlan);
  });
  // when user selects a price plan, evend handler updates the style of
  // currently selected price plan and resets styles on all other plans:
  box__licensePlans.addEventListener('change', selectPricePlan);
  // build select box based on the data from JSON file and return it:
  // (the second argument is the option selected by default)
  const selectBox = renderSelectBox(
    response.numberOfLicenses,
    defaultSelectBoxOption
  );

  // if user changes price plan on selec box value, update 'box__total' div;
  //
  // the overall logic is the following: each time we change select box value
  // or select another price plan, the 'renderTotal' event handler fires.
  //
  // The handler gets the:
  // a) currently selected price plan and it's price value
  // b) currently selected select box option
  // c) does the math
  // d) updates 'total' node displaying new sum
  box__licensePlans.addEventListener('change', renderTotal);
  selectBox.addEventListener('change', renderTotal);

  // create synthetic event, to initialize price box with default values:
  let init = new Event('change');
  box__licensePlans.dispatchEvent(init);
}

//-

fetch(jsonURL, {
  method: 'GET',
  headers: { 'secret-key': jsonbinAPIkey },
})
  .then(response => response.json())
  .then(response => {
    renderBox(response);
  })
  .catch(err => {
    throw new Error(err);
  });
