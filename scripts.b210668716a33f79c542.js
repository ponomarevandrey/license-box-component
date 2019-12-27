/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var biscuit_components_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var biscuit_components_reset_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(biscuit_components_reset_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var biscuit_components_text_text_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var biscuit_components_text_text_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(biscuit_components_text_text_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var biscuit_components_btn_btn_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var biscuit_components_btn_btn_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(biscuit_components_btn_btn_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var biscuit_components_btn_btn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var biscuit_components_btn_btn_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(biscuit_components_btn_btn_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var biscuit_components_grid_forms_grid_forms_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var biscuit_components_grid_forms_grid_forms_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(biscuit_components_grid_forms_grid_forms_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var biscuit_components_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var biscuit_components_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(biscuit_components_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var biscuit_components_heading_heading_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var biscuit_components_heading_heading_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(biscuit_components_heading_heading_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _blocks_page_page_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var _blocks_page_page_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_blocks_page_page_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _blocks_page_page_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
/* harmony import */ var _blocks_page_page_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_blocks_page_page_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _blocks_main_main_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var _blocks_main_main_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_blocks_main_main_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _blocks_header_header_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12);
/* harmony import */ var _blocks_header_header_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_blocks_header_header_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _blocks_footer_footer_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13);
/* harmony import */ var _blocks_footer_footer_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_blocks_footer_footer_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _blocks_btn_btn_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(0);
/* harmony import */ var _blocks_btn_btn_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_blocks_btn_btn_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _blocks_price_box_price_box_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14);
/* harmony import */ var _blocks_price_box_price_box_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_blocks_price_box_price_box_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _blocks_price_box_price_box_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15);
/* harmony import */ var _blocks_price_box_price_box_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_blocks_price_box_price_box_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _blocks_control_control_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16);
/* harmony import */ var _blocks_control_control_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_blocks_control_control_scss__WEBPACK_IMPORTED_MODULE_15__);
/*************
 * CSS RESET *
 *************/

/**********
 * BLOCKS *
 **********/

/***************** Redefinition level 'blocks.biscuit-lib' *******************/







/***************** Redefinition level 'blocks' *******************/
// Project-specific blocks












/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

const backToTopBtn = document.querySelector('.btn_type_back-to-top');

if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 60 || document.body.scrollTop >= 60) {
      backToTopBtn.style.display = 'block';
    } else backToTopBtn.style.display = 'none';
  });

  backToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0; // for Safari
    window.scrollTo(0, 0);
  });
} /* else throw new Error('There is no ".backToTopBtn" class in your HTML document'); */


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var page__preload = document.querySelector(".page__preload");
window.addEventListener("load", function () {
  page__preload.classList.remove("page__preload");
}, false);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(function () {
  // JSON file hosted on https://jsonbin.io/
  var config = {
    jsonURL: "https://api.jsonbin.io/b/5db8ac21511885752b0041e9/2",
    jsonbinAPIkey: "$2b$10$66Zqkjp6s2XFRpL/.wqS0.4k7CxUK4N3WOPsjdVODrN4088K2EL.e",
    defaultPricePlan: 3,
    defaultSelectBoxOption: 2
  }; //-

  function renderBox(response) {
    var box__licensePlans = document.querySelector(".box__license-plans");

    function renderPlan(plan, index) {
      var selectedByDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var id = "rb".concat(index);
      var control = document.createElement("label");
      control.classList.add("control", "box__license-plan");
      control.setAttribute("for", id);
      /* create custom radio button (inactive) */

      var control__customControl = document.createElement("div");
      control__customControl.classList.add("control__custom-control");
      /* create custom radio button (active) */

      var control__customControl_active = document.createElement("div");
      control__customControl_active.classList.add("control__custom-control_active");
      var box__licensePlanName = document.createElement("span");
      box__licensePlanName.classList.add("box__heading", "control__license-plan-name");
      box__licensePlanName.textContent = plan.name;
      var control__systemControl = document.createElement("input");
      control__systemControl.id = id;
      control__systemControl.type = "radio";
      control__systemControl.value = plan.name;
      control__systemControl.name = "license-plan";
      /* set price plan selected by default: */

      if (index === selectedByDefault - 1) {
        control__systemControl.checked = "checked";
        control.classList.add("box__license-plan_active");
      }

      control__systemControl.classList.add("control__system-control");
      var box__licensePlanPrice = document.createElement("span");
      box__licensePlanPrice.classList.add("box__license-plan-price");
      box__licensePlanPrice.textContent = "".concat(plan.price, " per license");
      control.append(control__customControl, control__systemControl, control__customControl_active, box__licensePlanName, box__licensePlanPrice);
      box__licensePlans.appendChild(control);
    } //-


    function handleSelectPricePlan() {
      var selectedRadioBtn = document.querySelector('input[type="radio"]:checked');
      /* reset classes on all license plans: */

      Array.from(document.querySelectorAll(".box__license-plan")).forEach(function (box__licensePlan) {
        if (box__licensePlan.classList.contains("box__license-plan_active")) {
          box__licensePlan.classList.remove("box__license-plan_active");
          box__licensePlan.querySelector("input").setAttribute("checked", false);
        }
      });

      var _Array$from$filter = Array.from(this.children).filter(function (box__licensePlan) {
        return box__licensePlan.contains(selectedRadioBtn);
      }),
          _Array$from$filter2 = _slicedToArray(_Array$from$filter, 1),
          selectedPriceplan = _Array$from$filter2[0];

      selectedPriceplan.classList.add("box__license-plan_active");
      selectedPriceplan.querySelector("input").setAttribute("checked", true);
    } //-


    function renderSelectBox(numberOfLicenses) {
      var selectedByDefault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var box__numberOfLicenses = document.querySelector(".box__number-of-licenses");
      var select = document.createElement("select");
      select.classList.add("box__selectbox");
      select.id = "number-of-licenses";
      select.name = "number-of-licenses";
      numberOfLicenses.forEach(function (number, index) {
        var option = document.createElement("option");
        option.value = number;
        option.textContent = number;

        if (index === selectedByDefault - 1) {
          option.setAttribute("selected", true);
        }

        select.appendChild(option);
      });
      box__numberOfLicenses.appendChild(select);
      return select;
    } //-


    function renderTotal() {
      var box__totalSum = document.querySelector(".box__total-sum");
      var box__totalCurrency = document.querySelector(".box__total-currency");
      var box__tip = document.querySelector(".box__tip");
      var selectBoxValue = Number(selectBox.options[selectBox.selectedIndex].value);
      var selectedPricePlan = document.querySelector('.box__license-plans input[type="radio"]:checked');

      var currentPrice = function () {
        var _response$licensePlan = response.licensePlan.filter(function (licensePlan) {
          return licensePlan.name === selectedPricePlan.value;
        }),
            _response$licensePlan2 = _slicedToArray(_response$licensePlan, 1),
            price = _response$licensePlan2[0].price;

        return Number(price.match(/\d+/)[0]);
      }();

      box__totalCurrency.textContent = "US";
      box__totalSum.textContent = " $".concat(currentPrice * selectBoxValue);
      box__tip.textContent = "Selected: ".concat(selectedPricePlan.value.match(/#.+/));
      var box__btn = document.querySelector(".box__btn");
      box__btn.setAttribute("href", "http://google.com/name=".concat(selectedPricePlan.name, "&value=").concat(selectedPricePlan.value));
    } //-

    /* render all license plans: */


    response.licensePlan.forEach(function (licensePlan, index) {
      renderPlan(licensePlan, index, config.defaultPricePlan);
    });
    /* build select box based on the data from JSON file and return it:  */

    var selectBox = renderSelectBox(response.numberOfLicenses, config.defaultSelectBoxOption);
    box__licensePlans.addEventListener("change", handleSelectPricePlan);
    /* if user changes price plan or select box value, update 'box__total' div;
       the overall logic is the following: each time we change select box value
       or select another price plan, the 'renderTotal' handler fires. Then, the handler:
       a) gets currently selected price plan and it's price value
       b) gets currently selected select box option
       c) does the math
       d) updates 'total' node displaying new sum */

    box__licensePlans.addEventListener("change", renderTotal);
    selectBox.addEventListener("change", renderTotal);
    /* initialize price box with default values: */

    var init = new Event("change");
    box__licensePlans.dispatchEvent(init);
  } //-


  fetch(config.jsonURL, {
    method: "GET",
    headers: {
      "secret-key": config.jsonbinAPIkey
    }
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    renderBox(response);
  }).catch(function (err) {
    throw new Error(err);
  });
})();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9idG4vX2J0bi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmlzY3VpdC1jb21wb25lbnRzL19yZXNldC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iaXNjdWl0LWNvbXBvbmVudHMvdGV4dC9fdGV4dC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iaXNjdWl0LWNvbXBvbmVudHMvYnRuL19idG4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmlzY3VpdC1jb21wb25lbnRzL2J0bi9idG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jpc2N1aXQtY29tcG9uZW50cy9ncmlkLWZvcm1zL19ncmlkLWZvcm1zLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jpc2N1aXQtY29tcG9uZW50cy9mb3JtLWdyb3VwL19mb3JtLWdyb3VwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jpc2N1aXQtY29tcG9uZW50cy9oZWFkaW5nL19oZWFkaW5nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9wYWdlL19wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9wYWdlL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tYWluL19tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZWFkZXIvX2hlYWRlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZm9vdGVyL19mb290ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3ByaWNlLWJveC9wcmljZS1ib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9wcmljZS1ib3gvX3ByaWNlLWJveC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY29udHJvbC9fY29udHJvbC5zY3NzIl0sIm5hbWVzIjpbInBhZ2VfX3ByZWxvYWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY29uZmlnIiwianNvblVSTCIsImpzb25iaW5BUElrZXkiLCJkZWZhdWx0UHJpY2VQbGFuIiwiZGVmYXVsdFNlbGVjdEJveE9wdGlvbiIsInJlbmRlckJveCIsInJlc3BvbnNlIiwiYm94X19saWNlbnNlUGxhbnMiLCJyZW5kZXJQbGFuIiwicGxhbiIsImluZGV4Iiwic2VsZWN0ZWRCeURlZmF1bHQiLCJpZCIsImNvbnRyb2wiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwic2V0QXR0cmlidXRlIiwiY29udHJvbF9fY3VzdG9tQ29udHJvbCIsImNvbnRyb2xfX2N1c3RvbUNvbnRyb2xfYWN0aXZlIiwiYm94X19saWNlbnNlUGxhbk5hbWUiLCJ0ZXh0Q29udGVudCIsIm5hbWUiLCJjb250cm9sX19zeXN0ZW1Db250cm9sIiwidHlwZSIsInZhbHVlIiwiY2hlY2tlZCIsImJveF9fbGljZW5zZVBsYW5QcmljZSIsInByaWNlIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVTZWxlY3RQcmljZVBsYW4iLCJzZWxlY3RlZFJhZGlvQnRuIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJib3hfX2xpY2Vuc2VQbGFuIiwiY29udGFpbnMiLCJjaGlsZHJlbiIsImZpbHRlciIsInNlbGVjdGVkUHJpY2VwbGFuIiwicmVuZGVyU2VsZWN0Qm94IiwibnVtYmVyT2ZMaWNlbnNlcyIsImJveF9fbnVtYmVyT2ZMaWNlbnNlcyIsInNlbGVjdCIsIm51bWJlciIsIm9wdGlvbiIsInJlbmRlclRvdGFsIiwiYm94X190b3RhbFN1bSIsImJveF9fdG90YWxDdXJyZW5jeSIsImJveF9fdGlwIiwic2VsZWN0Qm94VmFsdWUiLCJOdW1iZXIiLCJzZWxlY3RCb3giLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInNlbGVjdGVkUHJpY2VQbGFuIiwiY3VycmVudFByaWNlIiwibGljZW5zZVBsYW4iLCJtYXRjaCIsImJveF9fYnRuIiwiaW5pdCIsIkV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJFcnJvciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7OztBQ2xGQSx1Qzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFHQTtB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YUFBUyxDQUFDQyxRQUFELENBQVQ7QUFDRCxHQVBILEVBUUcrRCxLQVJILENBUVMsVUFBQUMsR0FBRyxFQUFJO0FBQ1osVUFBTSxJQUFJQyxLQUFKLENBQVVELEdBQVYsQ0FBTjtBQUNELEdBVkg7QUFXRCxDQXRNRCxJOzs7Ozs7QUNGQSx1Qzs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoic2NyaXB0cy5iMjEwNjY4NzE2YTMzZjc5YzU0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqKioqKioqKioqKipcbiAqIENTUyBSRVNFVCAqXG4gKioqKioqKioqKioqKi9cbmltcG9ydCBcImJpc2N1aXQtY29tcG9uZW50cy9fcmVzZXQuc2Nzc1wiO1xuXG4vKioqKioqKioqKlxuICogQkxPQ0tTICpcbiAqKioqKioqKioqL1xuXG4vKioqKioqKioqKioqKioqKiogUmVkZWZpbml0aW9uIGxldmVsICdibG9ja3MuYmlzY3VpdC1saWInICoqKioqKioqKioqKioqKioqKiovXG5cbmltcG9ydCBcImJpc2N1aXQtY29tcG9uZW50cy90ZXh0L190ZXh0LnNjc3NcIjtcblxuaW1wb3J0IFwiYmlzY3VpdC1jb21wb25lbnRzL2J0bi9fYnRuLnNjc3NcIjtcbmltcG9ydCBcImJpc2N1aXQtY29tcG9uZW50cy9idG4vYnRuLmpzXCI7XG5cbmltcG9ydCBcImJpc2N1aXQtY29tcG9uZW50cy9ncmlkLWZvcm1zL19ncmlkLWZvcm1zLnNjc3NcIjtcblxuaW1wb3J0IFwiYmlzY3VpdC1jb21wb25lbnRzL2Zvcm0tZ3JvdXAvX2Zvcm0tZ3JvdXAuc2Nzc1wiO1xuXG5pbXBvcnQgXCJiaXNjdWl0LWNvbXBvbmVudHMvaGVhZGluZy9faGVhZGluZy5zY3NzXCI7XG5cbi8qKioqKioqKioqKioqKioqKiBSZWRlZmluaXRpb24gbGV2ZWwgJ2Jsb2NrcycgKioqKioqKioqKioqKioqKioqKi9cblxuLy8gUHJvamVjdC1zcGVjaWZpYyBibG9ja3NcblxuaW1wb3J0IFwiLi9ibG9ja3MvcGFnZS9fcGFnZS5zY3NzXCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9wYWdlL3BhZ2UuanNcIjtcblxuaW1wb3J0IFwiLi9ibG9ja3MvbWFpbi9fbWFpbi5zY3NzXCI7XG5cbmltcG9ydCBcIi4vYmxvY2tzL2hlYWRlci9faGVhZGVyLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9ibG9ja3MvZm9vdGVyL19mb290ZXIuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL2Jsb2Nrcy9idG4vX2J0bi5zY3NzXCI7XG5cbmltcG9ydCBcIi4vYmxvY2tzL3ByaWNlLWJveC9wcmljZS1ib3guanNcIjtcbmltcG9ydCBcIi4vYmxvY2tzL3ByaWNlLWJveC9fcHJpY2UtYm94LnNjc3NcIjtcblxuaW1wb3J0IFwiLi9ibG9ja3MvYnRuL19idG4uc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL2Jsb2Nrcy9jb250cm9sL19jb250cm9sLnNjc3NcIjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0IGJhY2tUb1RvcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fdHlwZV9iYWNrLXRvLXRvcCcpO1xuXG5pZiAoYmFja1RvVG9wQnRuKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID49IDYwIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID49IDYwKSB7XG4gICAgICBiYWNrVG9Ub3BCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIGJhY2tUb1RvcEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcblxuICBiYWNrVG9Ub3BCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwOyAvLyBmb3IgU2FmYXJpXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICB9KTtcbn0gLyogZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGlzIG5vIFwiLmJhY2tUb1RvcEJ0blwiIGNsYXNzIGluIHlvdXIgSFRNTCBkb2N1bWVudCcpOyAqL1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgcGFnZV9fcHJlbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZV9fcHJlbG9hZFwiKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gIFwibG9hZFwiLFxuICAoKSA9PiB7XG4gICAgcGFnZV9fcHJlbG9hZC5jbGFzc0xpc3QucmVtb3ZlKFwicGFnZV9fcHJlbG9hZFwiKTtcbiAgfSxcbiAgZmFsc2Vcbik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJcInVzZSBzdHJpY3RcIjtcblxuKGZ1bmN0aW9uKCkge1xuICAvLyBKU09OIGZpbGUgaG9zdGVkIG9uIGh0dHBzOi8vanNvbmJpbi5pby9cblxuICBjb25zdCBjb25maWcgPSB7XG4gICAganNvblVSTDogXCJodHRwczovL2FwaS5qc29uYmluLmlvL2IvNWRiOGFjMjE1MTE4ODU3NTJiMDA0MWU5LzJcIixcbiAgICBqc29uYmluQVBJa2V5OlxuICAgICAgXCIkMmIkMTAkNjZacWtqcDZzMlhGUnBMLy53cVMwLjRrN0N4VUs0TjNXT1BzamRWT0RyTjQwODhLMkVMLmVcIixcbiAgICBkZWZhdWx0UHJpY2VQbGFuOiAzLFxuICAgIGRlZmF1bHRTZWxlY3RCb3hPcHRpb246IDIsXG4gIH07XG5cbiAgLy8tXG5cbiAgZnVuY3Rpb24gcmVuZGVyQm94KHJlc3BvbnNlKSB7XG4gICAgY29uc3QgYm94X19saWNlbnNlUGxhbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJveF9fbGljZW5zZS1wbGFuc1wiKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclBsYW4ocGxhbiwgaW5kZXgsIHNlbGVjdGVkQnlEZWZhdWx0ID0gMSkge1xuICAgICAgY29uc3QgaWQgPSBgcmIke2luZGV4fWA7XG5cbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBjb250cm9sLmNsYXNzTGlzdC5hZGQoXCJjb250cm9sXCIsIFwiYm94X19saWNlbnNlLXBsYW5cIik7XG4gICAgICBjb250cm9sLnNldEF0dHJpYnV0ZShcImZvclwiLCBpZCk7XG5cbiAgICAgIC8qIGNyZWF0ZSBjdXN0b20gcmFkaW8gYnV0dG9uIChpbmFjdGl2ZSkgKi9cbiAgICAgIGNvbnN0IGNvbnRyb2xfX2N1c3RvbUNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29udHJvbF9fY3VzdG9tQ29udHJvbC5jbGFzc0xpc3QuYWRkKFwiY29udHJvbF9fY3VzdG9tLWNvbnRyb2xcIik7XG4gICAgICAvKiBjcmVhdGUgY3VzdG9tIHJhZGlvIGJ1dHRvbiAoYWN0aXZlKSAqL1xuICAgICAgY29uc3QgY29udHJvbF9fY3VzdG9tQ29udHJvbF9hY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29udHJvbF9fY3VzdG9tQ29udHJvbF9hY3RpdmUuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgXCJjb250cm9sX19jdXN0b20tY29udHJvbF9hY3RpdmVcIlxuICAgICAgKTtcblxuICAgICAgY29uc3QgYm94X19saWNlbnNlUGxhbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGJveF9fbGljZW5zZVBsYW5OYW1lLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIFwiYm94X19oZWFkaW5nXCIsXG4gICAgICAgIFwiY29udHJvbF9fbGljZW5zZS1wbGFuLW5hbWVcIlxuICAgICAgKTtcbiAgICAgIGJveF9fbGljZW5zZVBsYW5OYW1lLnRleHRDb250ZW50ID0gcGxhbi5uYW1lO1xuXG4gICAgICBjb25zdCBjb250cm9sX19zeXN0ZW1Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY29udHJvbF9fc3lzdGVtQ29udHJvbC5pZCA9IGlkO1xuICAgICAgY29udHJvbF9fc3lzdGVtQ29udHJvbC50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgY29udHJvbF9fc3lzdGVtQ29udHJvbC52YWx1ZSA9IHBsYW4ubmFtZTtcbiAgICAgIGNvbnRyb2xfX3N5c3RlbUNvbnRyb2wubmFtZSA9IFwibGljZW5zZS1wbGFuXCI7XG4gICAgICAvKiBzZXQgcHJpY2UgcGxhbiBzZWxlY3RlZCBieSBkZWZhdWx0OiAqL1xuICAgICAgaWYgKGluZGV4ID09PSBzZWxlY3RlZEJ5RGVmYXVsdCAtIDEpIHtcbiAgICAgICAgY29udHJvbF9fc3lzdGVtQ29udHJvbC5jaGVja2VkID0gXCJjaGVja2VkXCI7XG4gICAgICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZChcImJveF9fbGljZW5zZS1wbGFuX2FjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRyb2xfX3N5c3RlbUNvbnRyb2wuY2xhc3NMaXN0LmFkZChcImNvbnRyb2xfX3N5c3RlbS1jb250cm9sXCIpO1xuXG4gICAgICBjb25zdCBib3hfX2xpY2Vuc2VQbGFuUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGJveF9fbGljZW5zZVBsYW5QcmljZS5jbGFzc0xpc3QuYWRkKFwiYm94X19saWNlbnNlLXBsYW4tcHJpY2VcIik7XG4gICAgICBib3hfX2xpY2Vuc2VQbGFuUHJpY2UudGV4dENvbnRlbnQgPSBgJHtwbGFuLnByaWNlfSBwZXIgbGljZW5zZWA7XG5cbiAgICAgIGNvbnRyb2wuYXBwZW5kKFxuICAgICAgICBjb250cm9sX19jdXN0b21Db250cm9sLFxuICAgICAgICBjb250cm9sX19zeXN0ZW1Db250cm9sLFxuICAgICAgICBjb250cm9sX19jdXN0b21Db250cm9sX2FjdGl2ZSxcbiAgICAgICAgYm94X19saWNlbnNlUGxhbk5hbWUsXG4gICAgICAgIGJveF9fbGljZW5zZVBsYW5QcmljZVxuICAgICAgKTtcbiAgICAgIGJveF9fbGljZW5zZVBsYW5zLmFwcGVuZENoaWxkKGNvbnRyb2wpO1xuICAgIH1cblxuICAgIC8vLVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0UHJpY2VQbGFuKCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRSYWRpb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCdcbiAgICAgICk7XG5cbiAgICAgIC8qIHJlc2V0IGNsYXNzZXMgb24gYWxsIGxpY2Vuc2UgcGxhbnM6ICovXG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm94X19saWNlbnNlLXBsYW5cIikpLmZvckVhY2goXG4gICAgICAgIGJveF9fbGljZW5zZVBsYW4gPT4ge1xuICAgICAgICAgIGlmIChib3hfX2xpY2Vuc2VQbGFuLmNsYXNzTGlzdC5jb250YWlucyhcImJveF9fbGljZW5zZS1wbGFuX2FjdGl2ZVwiKSkge1xuICAgICAgICAgICAgYm94X19saWNlbnNlUGxhbi5jbGFzc0xpc3QucmVtb3ZlKFwiYm94X19saWNlbnNlLXBsYW5fYWN0aXZlXCIpO1xuICAgICAgICAgICAgYm94X19saWNlbnNlUGxhblxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG4gICAgICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IFtzZWxlY3RlZFByaWNlcGxhbl0gPSBBcnJheS5mcm9tKHRoaXMuY2hpbGRyZW4pLmZpbHRlcihcbiAgICAgICAgYm94X19saWNlbnNlUGxhbiA9PiBib3hfX2xpY2Vuc2VQbGFuLmNvbnRhaW5zKHNlbGVjdGVkUmFkaW9CdG4pXG4gICAgICApO1xuICAgICAgc2VsZWN0ZWRQcmljZXBsYW4uY2xhc3NMaXN0LmFkZChcImJveF9fbGljZW5zZS1wbGFuX2FjdGl2ZVwiKTtcbiAgICAgIHNlbGVjdGVkUHJpY2VwbGFuLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIHRydWUpO1xuICAgIH1cblxuICAgIC8vLVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyU2VsZWN0Qm94KG51bWJlck9mTGljZW5zZXMsIHNlbGVjdGVkQnlEZWZhdWx0ID0gMSkge1xuICAgICAgY29uc3QgYm94X19udW1iZXJPZkxpY2Vuc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIuYm94X19udW1iZXItb2YtbGljZW5zZXNcIlxuICAgICAgKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKFwiYm94X19zZWxlY3Rib3hcIik7XG4gICAgICBzZWxlY3QuaWQgPSBcIm51bWJlci1vZi1saWNlbnNlc1wiO1xuICAgICAgc2VsZWN0Lm5hbWUgPSBcIm51bWJlci1vZi1saWNlbnNlc1wiO1xuXG4gICAgICBudW1iZXJPZkxpY2Vuc2VzLmZvckVhY2goKG51bWJlciwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gbnVtYmVyO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBudW1iZXI7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSBzZWxlY3RlZEJ5RGVmYXVsdCAtIDEpIHtcbiAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH0pO1xuXG4gICAgICBib3hfX251bWJlck9mTGljZW5zZXMuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcblxuICAgICAgcmV0dXJuIHNlbGVjdDtcbiAgICB9XG5cbiAgICAvLy1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclRvdGFsKCkge1xuICAgICAgY29uc3QgYm94X190b3RhbFN1bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm94X190b3RhbC1zdW1cIik7XG4gICAgICBjb25zdCBib3hfX3RvdGFsQ3VycmVuY3kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJveF9fdG90YWwtY3VycmVuY3lcIik7XG4gICAgICBjb25zdCBib3hfX3RpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm94X190aXBcIik7XG5cbiAgICAgIGNvbnN0IHNlbGVjdEJveFZhbHVlID0gTnVtYmVyKFxuICAgICAgICBzZWxlY3RCb3gub3B0aW9uc1tzZWxlY3RCb3guc2VsZWN0ZWRJbmRleF0udmFsdWVcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkUHJpY2VQbGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJy5ib3hfX2xpY2Vuc2UtcGxhbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnXG4gICAgICApO1xuXG4gICAgICBjb25zdCBjdXJyZW50UHJpY2UgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBbeyBwcmljZSB9XSA9IHJlc3BvbnNlLmxpY2Vuc2VQbGFuLmZpbHRlcihcbiAgICAgICAgICBsaWNlbnNlUGxhbiA9PiBsaWNlbnNlUGxhbi5uYW1lID09PSBzZWxlY3RlZFByaWNlUGxhbi52YWx1ZVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gTnVtYmVyKHByaWNlLm1hdGNoKC9cXGQrLylbMF0pO1xuICAgICAgfSkoKTtcblxuICAgICAgYm94X190b3RhbEN1cnJlbmN5LnRleHRDb250ZW50ID0gXCJVU1wiO1xuICAgICAgYm94X190b3RhbFN1bS50ZXh0Q29udGVudCA9IGAgJCR7Y3VycmVudFByaWNlICogc2VsZWN0Qm94VmFsdWV9YDtcblxuICAgICAgYm94X190aXAudGV4dENvbnRlbnQgPSBgU2VsZWN0ZWQ6ICR7c2VsZWN0ZWRQcmljZVBsYW4udmFsdWUubWF0Y2goXG4gICAgICAgIC8jLisvXG4gICAgICApfWA7XG5cbiAgICAgIGNvbnN0IGJveF9fYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3hfX2J0blwiKTtcbiAgICAgIGJveF9fYnRuLnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJocmVmXCIsXG4gICAgICAgIGBodHRwOi8vZ29vZ2xlLmNvbS9uYW1lPSR7c2VsZWN0ZWRQcmljZVBsYW4ubmFtZX0mdmFsdWU9JHtzZWxlY3RlZFByaWNlUGxhbi52YWx1ZX1gXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vLVxuXG4gICAgLyogcmVuZGVyIGFsbCBsaWNlbnNlIHBsYW5zOiAqL1xuICAgIHJlc3BvbnNlLmxpY2Vuc2VQbGFuLmZvckVhY2goKGxpY2Vuc2VQbGFuLCBpbmRleCkgPT4ge1xuICAgICAgcmVuZGVyUGxhbihsaWNlbnNlUGxhbiwgaW5kZXgsIGNvbmZpZy5kZWZhdWx0UHJpY2VQbGFuKTtcbiAgICB9KTtcblxuICAgIC8qIGJ1aWxkIHNlbGVjdCBib3ggYmFzZWQgb24gdGhlIGRhdGEgZnJvbSBKU09OIGZpbGUgYW5kIHJldHVybiBpdDogICovXG4gICAgY29uc3Qgc2VsZWN0Qm94ID0gcmVuZGVyU2VsZWN0Qm94KFxuICAgICAgcmVzcG9uc2UubnVtYmVyT2ZMaWNlbnNlcyxcbiAgICAgIGNvbmZpZy5kZWZhdWx0U2VsZWN0Qm94T3B0aW9uXG4gICAgKTtcblxuICAgIGJveF9fbGljZW5zZVBsYW5zLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlU2VsZWN0UHJpY2VQbGFuKTtcbiAgICAvKiBpZiB1c2VyIGNoYW5nZXMgcHJpY2UgcGxhbiBvciBzZWxlY3QgYm94IHZhbHVlLCB1cGRhdGUgJ2JveF9fdG90YWwnIGRpdjtcbiAgICAgICB0aGUgb3ZlcmFsbCBsb2dpYyBpcyB0aGUgZm9sbG93aW5nOiBlYWNoIHRpbWUgd2UgY2hhbmdlIHNlbGVjdCBib3ggdmFsdWVcbiAgICAgICBvciBzZWxlY3QgYW5vdGhlciBwcmljZSBwbGFuLCB0aGUgJ3JlbmRlclRvdGFsJyBoYW5kbGVyIGZpcmVzLiBUaGVuLCB0aGUgaGFuZGxlcjpcbiAgICAgICBhKSBnZXRzIGN1cnJlbnRseSBzZWxlY3RlZCBwcmljZSBwbGFuIGFuZCBpdCdzIHByaWNlIHZhbHVlXG4gICAgICAgYikgZ2V0cyBjdXJyZW50bHkgc2VsZWN0ZWQgc2VsZWN0IGJveCBvcHRpb25cbiAgICAgICBjKSBkb2VzIHRoZSBtYXRoXG4gICAgICAgZCkgdXBkYXRlcyAndG90YWwnIG5vZGUgZGlzcGxheWluZyBuZXcgc3VtICovXG4gICAgYm94X19saWNlbnNlUGxhbnMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCByZW5kZXJUb3RhbCk7XG4gICAgc2VsZWN0Qm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgcmVuZGVyVG90YWwpO1xuXG4gICAgLyogaW5pdGlhbGl6ZSBwcmljZSBib3ggd2l0aCBkZWZhdWx0IHZhbHVlczogKi9cbiAgICBsZXQgaW5pdCA9IG5ldyBFdmVudChcImNoYW5nZVwiKTtcbiAgICBib3hfX2xpY2Vuc2VQbGFucy5kaXNwYXRjaEV2ZW50KGluaXQpO1xuICB9XG5cbiAgLy8tXG5cbiAgZmV0Y2goY29uZmlnLmpzb25VUkwsIHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgaGVhZGVyczogeyBcInNlY3JldC1rZXlcIjogY29uZmlnLmpzb25iaW5BUElrZXkgfSxcbiAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmVuZGVyQm94KHJlc3BvbnNlKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgfSk7XG59KSgpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==