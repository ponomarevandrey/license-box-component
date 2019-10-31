'use strict';

const jsonbinAPIkey =
  '$2b$10$66Zqkjp6s2XFRpL/.wqS0.4k7CxUK4N3WOPsjdVODrN4088K2EL.e';
const jsonURL = 'https://api.jsonbin.io/b/5db8ac21511885752b0041e9';

const box = document.querySelector('.box');

function renderPlans(response) {
  const box__licensePlans = document.querySelector('.box__license-plans');

  function renderPlan(plan, index) {
    const box__licensePlan = document.createElement('div');
    box__licensePlan.classList.add('box__license-plan');

    // create radio button:
    const box__licensePlanName = document.createElement('span');
    box__licensePlanName.classList.add('box__license-plan-name', 'control');
    const control__systemControl = document.createElement('input');
    const id = `rb${index}`;
    control__systemControl.id = id;
    control__systemControl.type = 'radio';
    control__systemControl.value = plan.name;
    control__systemControl.name = 'license-plan';
    if (index === response.licenseplan.length - 1) {
      control__systemControl.checked = 'checked';
      box__licensePlan.classList.add('box__license-plan_active');
    }

    control__systemControl.classList.add('control__system-control');

    const control__label = document.createElement('label');
    control__label.classList.add('control__label', 'control__label_radio');
    control__label.setAttribute('for', id);
    control__label.textContent = plan.name;
    box__licensePlanName.append(control__systemControl, control__label);
    //-

    const box__licensePlanPrice = document.createElement('span');
    box__licensePlanPrice.classList.add('box__license-plan-price');
    box__licensePlanPrice.textContent = `${plan.price} per kicense`;

    box__licensePlan.append(box__licensePlanName, box__licensePlanPrice);
    box__licensePlans.appendChild(box__licensePlan);
    /*
     - loop through all box__license-plans and remove class .box__license-plan_active from all of them

     - add class active to current node

      box__licensePlan.addEventListener('click', function() {

      if (this.querySelector('input[type="radio"]:checked)) {

      }

      if (this.checked) {
        this.classList.remove('box__license-plan_active');
        this.checked = false;
      } else {
        this.classList.add('box__license-plan_active');
        this.checked = true;
      }
    });
  */
  }

  box__licensePlans.addEventListener('click', function(e) {
    Array.from(document.querySelectorAll('.box__license-plan')).forEach(
      licensePlan => {
        if (true /*elerment doesnt have 'checked radio*/) {
          // remove class 'box_license-plan_active'
        } else {
          // add class .box__license-plan_active
        }
      }
    );
  });

  response.licenseplan.forEach(renderPlan);
}

fetch(jsonURL, {
  method: 'GET',
  headers: { 'secret-key': jsonbinAPIkey },
})
  .then(response => response.json())
  .then(response => {
    renderPlans(response);
  })
  .catch(err => {
    throw new Error(err);
  });
