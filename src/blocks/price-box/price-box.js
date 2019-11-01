'use strict';

/* Assignment 1 */

(function() {
  // JSON file hosted on https://jsonbin.io/

  const config = {
    jsonURL: 'https://api.jsonbin.io/b/5db8ac21511885752b0041e9/2',
    jsonbinAPIkey:
      '$2b$10$66Zqkjp6s2XFRpL/.wqS0.4k7CxUK4N3WOPsjdVODrN4088K2EL.e',
    defaultPricePlan: 3,
    defaultSelectBoxOption: 2,
  };

  //-

  function renderBox(response) {
    const box__licensePlans = document.querySelector('.box__license-plans');

    function renderPlan(plan, index, selectedByDefault = 1) {
      const id = `rb${index}`;

      const control = document.createElement('label');
      control.classList.add('control', 'box__license-plan');
      control.setAttribute('for', id);

      /* create custom radio button (inactive) */
      const control__customControl = document.createElement('div');
      control__customControl.classList.add('control__custom-control');
      /* create custom radio button (active) */
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
      /* set price plan selected by default: */
      if (index === selectedByDefault - 1) {
        control__systemControl.checked = 'checked';
        control.classList.add('box__license-plan_active');
      }
      control__systemControl.classList.add('control__system-control');

      const box__licensePlanPrice = document.createElement('span');
      box__licensePlanPrice.classList.add('box__license-plan-price');
      box__licensePlanPrice.textContent = `${plan.price} per license`;

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

    function handleSelectPricePlan() {
      const selectedRadioBtn = document.querySelector(
        'input[type="radio"]:checked'
      );

      /* reset classes on all license plans: */
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

      const [selectedPriceplan] = Array.from(this.children).filter(
        box__licensePlan => box__licensePlan.contains(selectedRadioBtn)
      );
      selectedPriceplan.classList.add('box__license-plan_active');
      selectedPriceplan.querySelector('input').setAttribute('checked', true);
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

      const selectBoxValue = Number(
        selectBox.options[selectBox.selectedIndex].value
      );

      const selectedPricePlan = document.querySelector(
        '.box__license-plans input[type="radio"]:checked'
      );

      const currentPrice = (() => {
        const [{ price }] = response.licensePlan.filter(
          licensePlan => licensePlan.name === selectedPricePlan.value
        );
        return Number(price.match(/\d+/)[0]);
      })();

      box__totalCurrency.textContent = 'US';
      box__totalSum.textContent = ` $${currentPrice * selectBoxValue}`;

      box__tip.textContent = `Selected: ${selectedPricePlan.value.match(
        /#.+/
      )}`;

      const box__btn = document.querySelector('.box__btn');
      box__btn.setAttribute(
        'href',
        `http://google.com/name=${selectedPricePlan.name}&value=${selectedPricePlan.value}`
      );
    }

    //-

    /* render all license plans: */
    response.licensePlan.forEach((licensePlan, index) => {
      renderPlan(licensePlan, index, config.defaultPricePlan);
    });

    /* build select box based on the data from JSON file and return it:  */
    const selectBox = renderSelectBox(
      response.numberOfLicenses,
      config.defaultSelectBoxOption
    );

    box__licensePlans.addEventListener('change', handleSelectPricePlan);
    /* if user changes price plan or select box value, update 'box__total' div;
       the overall logic is the following: each time we change select box value
       or select another price plan, the 'renderTotal' handler fires. Then, the handler:
       a) gets currently selected price plan and it's price value
       b) gets currently selected select box option
       c) does the math
       d) updates 'total' node displaying new sum */
    box__licensePlans.addEventListener('change', renderTotal);
    selectBox.addEventListener('change', renderTotal);

    /* initialize price box with default values: */
    let init = new Event('change');
    box__licensePlans.dispatchEvent(init);
  }

  //-

  fetch(config.jsonURL, {
    method: 'GET',
    headers: { 'secret-key': config.jsonbinAPIkey },
  })
    .then(response => response.json())
    .then(response => {
      renderBox(response);
    })
    .catch(err => {
      throw new Error(err);
    });
})();

/* Assignment 2 */

// https://stackoverflow.com/questions/3814442/drawing-a-circle-on-the-canvas-using-mouse-events
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage
//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

(function() {
  const canvas = document.querySelector('.canvas');
  const ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.stroke();

  canvas.addEventListener('mousemove', handleCanvas);

  function handleCanvas() {
    console.log('on');
  }
})();

// ... not finished
