'use strict';

const jsonbinAPIkey =
  '$2b$10$66Zqkjp6s2XFRpL/.wqS0.4k7CxUK4N3WOPsjdVODrN4088K2EL.e';
const jsonURL = 'https://api.jsonbin.io/b/5db8ac21511885752b0041e9/2';

const box = document.querySelector('.box');

//-

// each time we change select box value or select another price plan (two event listeners) - the event fires:
// - the event gets a) the currently selected price plan and it's price
//                  b) the currently selected select box value
//                  c) does the math
//                  d) updates 'total'

//-

function renderBox(response) {
  const box__licensePlans = document.querySelector('.box__license-plans');

  function renderPlan(plan, index) {
    const id = `rb${index}`;

    const control = document.createElement('label');
    control.classList.add('control', 'box__license-plan');
    control.setAttribute('for', id);

    const control__customControl = document.createElement('div');
    control__customControl.classList.add('control__custom-control');

    const control__customControl_active = document.createElement('div');
    control__customControl_active.classList.add(
      'control__custom-control_active'
    );

    const box__licensePlanName = document.createElement('span');
    box__licensePlanName.classList.add(
      'box__license-plan-name',
      'control__license-plan-name'
    );
    box__licensePlanName.textContent = plan.name;

    const control__systemControl = document.createElement('input');
    control__systemControl.id = id;
    control__systemControl.type = 'radio';
    control__systemControl.value = plan.name;
    control__systemControl.name = 'license-plan';
    if (index === response.licensePlan.length - 1) {
      control__systemControl.checked = 'checked';
      control.classList.add('box__license-plan_active');
    }
    control__systemControl.classList.add('control__system-control');

    const box__licensePlanPrice = document.createElement('span');
    box__licensePlanPrice.classList.add('box__license-plan-price');
    box__licensePlanPrice.textContent = `${plan.price} per kicense`;

    control.appendChild(control__customControl);
    control.appendChild(control__systemControl);
    control.appendChild(control__customControl_active);
    control.appendChild(box__licensePlanName);
    control.appendChild(box__licensePlanPrice);

    box__licensePlans.appendChild(control);
  }

  //-

  function selectPricePlan(e) {
    console.log('jg');
    Array.from(document.querySelectorAll('.box__license-plan')).forEach(
      box__licensePlan => {
        if (
          box__licensePlan.classList.contains(
            'box__license-plan_active'
          ) /*&&
          box__licensePlan.getAttribute('checked') === true*/
        ) {
          box__licensePlan.classList.remove('box__license-plan_active');
          box__licensePlan
            .querySelector('input')
            .setAttribute('checked', false);
        }
      }
    );

    const [currentlySelectedPriceplan] = Array.from(this.children).filter(
      node => {
        const currentlySelectedRadioBtn = document.querySelector(
          'input[type="radio"]:checked'
        );
        if (node.contains(currentlySelectedRadioBtn)) return node;
      }
    );

    //const currentlySelectedPriceplan = e.target.closest('.box__license-plan');
    currentlySelectedPriceplan.classList.add('box__license-plan_active');
    //currentlySelectedPriceplan.classList.add('control__custom-control_active');
    currentlySelectedPriceplan
      .querySelector('input')
      .setAttribute('checked', true);
  }

  //-

  function renderSelectBox(numberOfLicenses) {
    const box__numberOfLicenses = document.querySelector(
      '.box__number-of-licenses'
    );

    const select = document.createElement('select');
    select.classList.add('.box__selectbox');
    select.id = 'number-of-licenses';
    select.name = 'number-of-licenses';

    numberOfLicenses.forEach(number => {
      const option = document.createElement('option');
      option.value = number;
      option.textContent = number;
      select.appendChild(option);
    });

    box__numberOfLicenses.appendChild(select);

    select.addEventListener('change', handleSelectBox);

    function handleSelectBox(e) {
      const num = Number(this.options[this.selectedIndex].value);
      // const total = num *

      const selectedPricePlan = document.querySelector(
        'input[type="radio"]:checked'
      ).value;
      response.licensePlan.forEach((plan, index) => {
        if (plan.name === selectedPricePlan) {
          const planPrice = Number(
            response.licensePlan[index].price.match(/\d+/)[0]
          );
          const total = num * planPrice;
          console.log(total);
        }
      });
    }
  }

  response.licensePlan.forEach(renderPlan);
  box__licensePlans.addEventListener('change', selectPricePlan);

  renderSelectBox(response.numberOfLicenses);
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
