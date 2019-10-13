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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_biscuit_lib_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _blocks_biscuit_lib_reset_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_reset_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_biscuit_lib_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _blocks_biscuit_lib_page_page_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_page_page_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_biscuit_lib_page_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _blocks_biscuit_lib_page_page_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_page_page_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blocks_biscuit_lib_text_text_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _blocks_biscuit_lib_text_text_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_text_text_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _blocks_biscuit_lib_heading_heading_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _blocks_biscuit_lib_heading_heading_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_heading_heading_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blocks_biscuit_lib_grid_auto_col_grid_auto_col_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _blocks_biscuit_lib_grid_auto_col_grid_auto_col_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_grid_auto_col_grid_auto_col_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _blocks_biscuit_lib_grid_gallery_grid_gallery_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _blocks_biscuit_lib_grid_gallery_grid_gallery_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_grid_gallery_grid_gallery_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _blocks_biscuit_lib_list_list_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var _blocks_biscuit_lib_list_list_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_list_list_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _blocks_biscuit_lib_btn_btn_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22);
/* harmony import */ var _blocks_biscuit_lib_btn_btn_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_btn_btn_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _blocks_biscuit_lib_btn_btn_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23);
/* harmony import */ var _blocks_biscuit_lib_btn_btn_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_btn_btn_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _blocks_biscuit_lib_link_link_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24);
/* harmony import */ var _blocks_biscuit_lib_link_link_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_link_link_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _blocks_biscuit_lib_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25);
/* harmony import */ var _blocks_biscuit_lib_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _blocks_biscuit_lib_comment_comment_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26);
/* harmony import */ var _blocks_biscuit_lib_comment_comment_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_comment_comment_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _blocks_biscuit_lib_grid_forms_grid_forms_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27);
/* harmony import */ var _blocks_biscuit_lib_grid_forms_grid_forms_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_grid_forms_grid_forms_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _blocks_biscuit_lib_img_svg_img_svg_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(28);
/* harmony import */ var _blocks_biscuit_lib_img_svg_img_svg_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_img_svg_img_svg_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _blocks_biscuit_lib_img_raster_img_raster_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(29);
/* harmony import */ var _blocks_biscuit_lib_img_raster_img_raster_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_img_raster_img_raster_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _blocks_biscuit_lib_tooltip_tooltip_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(30);
/* harmony import */ var _blocks_biscuit_lib_tooltip_tooltip_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_tooltip_tooltip_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _blocks_biscuit_lib_icons_icons_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(31);
/* harmony import */ var _blocks_biscuit_lib_icons_icons_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_icons_icons_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _blocks_biscuit_lib_breadcrumb_breadcrumb_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(34);
/* harmony import */ var _blocks_biscuit_lib_breadcrumb_breadcrumb_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_breadcrumb_breadcrumb_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _blocks_biscuit_lib_badge_badge_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(35);
/* harmony import */ var _blocks_biscuit_lib_badge_badge_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_badge_badge_scss__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _blocks_biscuit_lib_blockquote_blockquote_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(36);
/* harmony import */ var _blocks_biscuit_lib_blockquote_blockquote_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_blockquote_blockquote_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _blocks_biscuit_lib_code_code_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(37);
/* harmony import */ var _blocks_biscuit_lib_code_code_scss__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_code_code_scss__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _blocks_biscuit_lib_hr_hr_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(38);
/* harmony import */ var _blocks_biscuit_lib_hr_hr_scss__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_hr_hr_scss__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _blocks_biscuit_lib_label_label_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(39);
/* harmony import */ var _blocks_biscuit_lib_label_label_scss__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_label_label_scss__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _blocks_biscuit_lib_embed_embed_scss__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(40);
/* harmony import */ var _blocks_biscuit_lib_embed_embed_scss__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_embed_embed_scss__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _blocks_biscuit_lib_table_table_scss__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(41);
/* harmony import */ var _blocks_biscuit_lib_table_table_scss__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_table_table_scss__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _blocks_biscuit_lib_loader_loader_scss__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(42);
/* harmony import */ var _blocks_biscuit_lib_loader_loader_scss__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_loader_loader_scss__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _blocks_biscuit_lib_control_control_scss__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(43);
/* harmony import */ var _blocks_biscuit_lib_control_control_scss__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_control_control_scss__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _blocks_biscuit_lib_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(44);
/* harmony import */ var _blocks_biscuit_lib_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _blocks_biscuit_lib_nav_nav_scss__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(45);
/* harmony import */ var _blocks_biscuit_lib_nav_nav_scss__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_nav_nav_scss__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _blocks_biscuit_lib_nav_nav_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(46);
/* harmony import */ var _blocks_biscuit_lib_nav_nav_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_nav_nav_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _blocks_biscuit_lib_nav_fixed_nav_fixed_scss__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(47);
/* harmony import */ var _blocks_biscuit_lib_nav_fixed_nav_fixed_scss__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_nav_fixed_nav_fixed_scss__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _blocks_biscuit_lib_select_select_scss__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(48);
/* harmony import */ var _blocks_biscuit_lib_select_select_scss__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_select_select_scss__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _blocks_biscuit_lib_accordion_accordion_scss__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(49);
/* harmony import */ var _blocks_biscuit_lib_accordion_accordion_scss__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_accordion_accordion_scss__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _blocks_biscuit_lib_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(50);
/* harmony import */ var _blocks_biscuit_lib_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _blocks_grid_page_layout1_grid_page_layout1_scss__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(51);
/* harmony import */ var _blocks_grid_page_layout1_grid_page_layout1_scss__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_blocks_grid_page_layout1_grid_page_layout1_scss__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _blocks_grid_page_layout2_grid_page_layout2_scss__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(52);
/* harmony import */ var _blocks_grid_page_layout2_grid_page_layout2_scss__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_blocks_grid_page_layout2_grid_page_layout2_scss__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _blocks_main_main_scss__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(53);
/* harmony import */ var _blocks_main_main_scss__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_blocks_main_main_scss__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _blocks_header_header_scss__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(54);
/* harmony import */ var _blocks_header_header_scss__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_blocks_header_header_scss__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _blocks_footer_footer_scss__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(55);
/* harmony import */ var _blocks_footer_footer_scss__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_blocks_footer_footer_scss__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _blocks_fullscreen_bg_fullscreen_bg_scss__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(56);
/* harmony import */ var _blocks_fullscreen_bg_fullscreen_bg_scss__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_blocks_fullscreen_bg_fullscreen_bg_scss__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _blocks_img_slider_img_slider_scss__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(57);
/* harmony import */ var _blocks_img_slider_img_slider_scss__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_blocks_img_slider_img_slider_scss__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _blocks_img_slider_img_slider_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(58);
/* harmony import */ var _blocks_img_slider_img_slider_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_blocks_img_slider_img_slider_js__WEBPACK_IMPORTED_MODULE_42__);
/************
 * GRAPHICS *
 ************/
function requireFiles(r) {
  r.keys().forEach(r);
} // require images


requireFiles(__webpack_require__(1));
/*************
 * CSS RESET *
 *************/


/**********
 * BLOCKS *
 **********/

/* To control the CSS cascade and inheritance while importing blocks into the project, all blocks divided into two main groups:

   1. **Parent blocks** (these blocks usually, although it's not obligatory, serve as parent containers for "Child blocks")
   2. **Child blocks** (usually, you don't put anything inside these blocks, except text. Being imported last, rules in these blocks may override rules declared earlier in "Parent blocks")

**Don't change the order of blocks!** Although, all blocks are self-sufficient and don't rely on cascade and inheritance, in some rare cases reordering of their imports may break minor details like link color or font-size, so to be safe try to maintain the current blocks' order. If you don't need a block in your bundle, comment it out, don't delete it from this file, you might need it in the future */

/***************** Redefinition level 'blocks.biscuit-lib' *******************/
// Parent blocks













 // Child blocks





requireFiles(__webpack_require__(32));









 // delete this : requireFiles(require.context('.blocks.biscuit-libb/control', true, /(svg|png|jpg)$/));








/***************** Redefinition level 'blocks' *******************/
// Project-specific blocks










/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./animals_landscape_lg.jpg": 2,
	"./animals_landscape_md.jpg": 3,
	"./animals_landscape_sm.jpg": 4,
	"./animals_landscape_xl.jpg": 5,
	"./animals_landscape_xxl.jpg": 6,
	"./animals_landscape_xxxl.jpg": 7,
	"./biscuit-logo-black.svg": 8,
	"./biscuit-logo-white.svg": 9,
	"./biscuit-symbol.svg": 10,
	"./fullscreen-image.jpg": 11,
	"./how-it-works.svg": 12,
	"./logo.svg": 13
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/animals_landscape_lg.jpg";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/animals_landscape_md.jpg";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/animals_landscape_sm.jpg";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/animals_landscape_xl.jpg";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/animals_landscape_xxl.jpg";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/animals_landscape_xxxl.jpg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/biscuit-logo-black.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/biscuit-logo-white.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/biscuit-symbol.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fullscreen-image.jpg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/how-it-works.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var page__preload = document.querySelector('.page__preload');
window.addEventListener('load', function () {
  page__preload.classList.remove('page__preload');
}, false);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

var backToTopBtn = document.querySelector('.btn_type_back-to-top');

if (backToTopBtn) {
  window.addEventListener('scroll', function () {
    if (window.scrollY >= 60 || document.body.scrollTop >= 60) {
      backToTopBtn.style.display = 'block';
    } else backToTopBtn.style.display = 'none';
  });
  backToTopBtn.addEventListener('click', function () {
    document.body.scrollTop = 0; // for Safari

    window.scrollTo(0, 0);
  });
}
/* else throw new Error('There is no ".backToTopBtn" class in your HTML document'); */

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sprite.svg": 33
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 32;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sprite.svg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports) {



/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* Accordion v2 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Accordion =
/*#__PURE__*/
function () {
  function Accordion() {
    var _this = this;

    var single = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, Accordion);

    var headers = document.querySelectorAll('.accordion .accordion__header');

    if (headers.length > 0) {
      if (single) {
        headers.forEach(function (header) {
          header.addEventListener('click', _this.singleOpen);
          header.addEventListener('focus', _this.singleOpen);
        });
      } else {
        headers.forEach(function (header) {
          header.addEventListener('click', _this.open);
          header.addEventListener('keyup', _this.open);
        });
      }
    }
  }
  /* fires when user clicks on a header and
     'init' invoked with default value 'false': init() */


  _createClass(Accordion, [{
    key: "open",
    value: function open(eventObj) {
      // if we press 'Enter' or if we click:
      if (eventObj.keyCode === 13 || eventObj.type === 'click') {
        var content = this.nextElementSibling;
        if (content.style.maxHeight) content.style.maxHeight = '';else content.style.maxHeight = "".concat(content.scrollHeight, "px");
        this.classList.toggle('accordion__header_active');
      }
    }
    /* fires when user clicks on a header and
       'init' invoked with 'true': init(true) */

  }, {
    key: "singleOpen",
    value: function singleOpen() {
      // reset state of all panels:
      // 1) close all panels:
      var contents = this.parentElement.querySelectorAll('.accordion__content');

      if (contents.length > 0) {
        contents.forEach(function (content) {
          return content.style.maxHeight = '';
        });
      } // 2) reset color of all panels:


      var headers = this.parentElement.querySelectorAll('.accordion__header');

      if (headers.length > 0) {
        headers.forEach(function (header) {
          if (header.classList.contains('accordion__header_active')) {
            header.classList.remove('accordion__header_active');
          }
        });
      } // open the current panel:
      // 1) get content under current header


      var content = this.nextElementSibling;
      if (content.style.maxHeight) content.style.maxHeight = '';else content.style.maxHeight = "".concat(content.scrollHeight, "px"); // 2) change opened header color:

      this.classList.toggle('accordion__header_active');
    }
  }]);

  return Accordion;
}();

window.addEventListener('load', function () {
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

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports) {

'strict';

var node = document.querySelector('.main');
console.log(node); // ref: http://christianheilmann.com/2015/04/08/keeping-it-simple-coding-a-carousel/

var carousel = function () {
  var box = document.querySelector('.carousel-box');
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');
  var items = box.querySelectorAll('.content li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  box.classList.add('active');

  function navigateTo(direction) {
    current.classList.remove('current');
    counter = counter + direction;
    if (direction === -1 && counter < 0) counter = amount - 1;
    if (direction === 1 && !items[counter]) counter = 0;
    current = items[counter];
    current.classList.add('current');
  }

  next.addEventListener('click', function (e) {
    return navigateTo(1);
  });
  prev.addEventListener('click', function (e) {
    return navigateTo(-1);
  });
  navigateTo(0);
}();
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbWcgc3luYyAoc3ZnfHBuZ3xqcGcpJCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX2xnLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX21kLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3NtLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3hsLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3h4bC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9hbmltYWxzX2xhbmRzY2FwZV94eHhsLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2Jpc2N1aXQtbG9nby1ibGFjay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9iaXNjdWl0LWxvZ28td2hpdGUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWcvYmlzY3VpdC1zeW1ib2wuc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWcvZnVsbHNjcmVlbi1pbWFnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9ob3ctaXQtd29ya3Muc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWcvbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9fcmVzZXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL3BhZ2UvX3BhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL3BhZ2UvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL3RleHQvX3RleHQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2hlYWRpbmcvX2hlYWRpbmcuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2dyaWQtYXV0by1jb2wvX2dyaWQtYXV0by1jb2wuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2dyaWQtZ2FsbGVyeS9fZ3JpZC1nYWxsZXJ5LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9saXN0L19saXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9idG4vX2J0bi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmlzY3VpdC1saWIvYnRuL2J0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2xpbmsvX2xpbmsuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL3BhZ2luYXRpb24vX3BhZ2luYXRpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2NvbW1lbnQvX2NvbW1lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2dyaWQtZm9ybXMvX2dyaWQtZm9ybXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2ltZy1zdmcvX2ltZy1zdmcuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2ltZy1yYXN0ZXIvX2ltZy1yYXN0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL3Rvb2x0aXAvX3Rvb2x0aXAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2ljb25zL19pY29ucy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmlzY3VpdC1saWIvaWNvbnMgc3luYyAoc3ZnfHBuZ3xqcGcpJCIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2ljb25zL3Nwcml0ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9icmVhZGNydW1iL19icmVhZGNydW1iLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9iYWRnZS9fYmFkZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2Jsb2NrcXVvdGUvX2Jsb2NrcXVvdGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2NvZGUvX2NvZGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2hyL19oci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmlzY3VpdC1saWIvbGFiZWwvX2xhYmVsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9lbWJlZC9fZW1iZWQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL3RhYmxlL190YWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmlzY3VpdC1saWIvbG9hZGVyL19sb2FkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2NvbnRyb2wvX2NvbnRyb2wuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2Zvcm0tZ3JvdXAvX2Zvcm0tZ3JvdXAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL25hdi9fbmF2LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9uYXYtZml4ZWQvX25hdi1maXhlZC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmlzY3VpdC1saWIvc2VsZWN0L19zZWxlY3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2FjY29yZGlvbi9fYWNjb3JkaW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9hY2NvcmRpb24vYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZ3JpZC1wYWdlLWxheW91dDEvX2dyaWQtcGFnZS1sYXlvdXQxLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ncmlkLXBhZ2UtbGF5b3V0Mi9fZ3JpZC1wYWdlLWxheW91dDIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21haW4vX21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hlYWRlci9faGVhZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9mb290ZXIvX2Zvb3Rlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZnVsbHNjcmVlbi1iZy9fZnVsbHNjcmVlbi1iZy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW1nLXNsaWRlci9faW1nLXNsaWRlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW1nLXNsaWRlci9pbWctc2xpZGVyLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVGaWxlcyIsInIiLCJrZXlzIiwiZm9yRWFjaCIsInJlcXVpcmUiLCJwYWdlX19wcmVsb2FkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImJhY2tUb1RvcEJ0biIsInNjcm9sbFkiLCJib2R5Iiwic2Nyb2xsVG9wIiwic3R5bGUiLCJkaXNwbGF5Iiwic2Nyb2xsVG8iLCJBY2NvcmRpb24iLCJzaW5nbGUiLCJoZWFkZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImhlYWRlciIsInNpbmdsZU9wZW4iLCJvcGVuIiwiZXZlbnRPYmoiLCJrZXlDb2RlIiwidHlwZSIsImNvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJtYXhIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0b2dnbGUiLCJjb250ZW50cyIsInBhcmVudEVsZW1lbnQiLCJjb250YWlucyIsIm5vZGUiLCJjb25zb2xlIiwibG9nIiwiY2Fyb3VzZWwiLCJib3giLCJuZXh0IiwicHJldiIsIml0ZW1zIiwiY291bnRlciIsImFtb3VudCIsImN1cnJlbnQiLCJhZGQiLCJuYXZpZ2F0ZVRvIiwiZGlyZWN0aW9uIiwiZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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Q0FBQztBQUFBLFdBQUlGLFVBQVUsQ0FBQyxDQUFELENBQWQ7QUFBQSxHQUFoQztBQUNBTixNQUFJLENBQUNuQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFBMkMsQ0FBQztBQUFBLFdBQUlGLFVBQVUsQ0FBQyxDQUFDLENBQUYsQ0FBZDtBQUFBLEdBQWhDO0FBRUFBLFlBQVUsQ0FBQyxDQUFELENBQVY7QUFDRCxDQTNCYyxFQUFmO0FBNkJBIiwiZmlsZSI6InNjcmlwdHMuYmNhNGUxMjdiNTBhYjllMTg5ZGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKioqKioqKioqKipcbiAqIEdSQVBISUNTICpcbiAqKioqKioqKioqKiovXG5mdW5jdGlvbiByZXF1aXJlRmlsZXMocikge1xuICByLmtleXMoKS5mb3JFYWNoKHIpO1xufVxuLy8gcmVxdWlyZSBpbWFnZXNcbnJlcXVpcmVGaWxlcyhyZXF1aXJlLmNvbnRleHQoJy4vaW1nLycsIHRydWUsIC8oc3ZnfHBuZ3xqcGcpJC8pKTtcblxuLyoqKioqKioqKioqKipcbiAqIENTUyBSRVNFVCAqXG4gKioqKioqKioqKioqKi9cbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvX3Jlc2V0LnNjc3MnO1xuXG4vKioqKioqKioqKlxuICogQkxPQ0tTICpcbiAqKioqKioqKioqL1xuLyogVG8gY29udHJvbCB0aGUgQ1NTIGNhc2NhZGUgYW5kIGluaGVyaXRhbmNlIHdoaWxlIGltcG9ydGluZyBibG9ja3MgaW50byB0aGUgcHJvamVjdCwgYWxsIGJsb2NrcyBkaXZpZGVkIGludG8gdHdvIG1haW4gZ3JvdXBzOlxuXG4gICAxLiAqKlBhcmVudCBibG9ja3MqKiAodGhlc2UgYmxvY2tzIHVzdWFsbHksIGFsdGhvdWdoIGl0J3Mgbm90IG9ibGlnYXRvcnksIHNlcnZlIGFzIHBhcmVudCBjb250YWluZXJzIGZvciBcIkNoaWxkIGJsb2Nrc1wiKVxuICAgMi4gKipDaGlsZCBibG9ja3MqKiAodXN1YWxseSwgeW91IGRvbid0IHB1dCBhbnl0aGluZyBpbnNpZGUgdGhlc2UgYmxvY2tzLCBleGNlcHQgdGV4dC4gQmVpbmcgaW1wb3J0ZWQgbGFzdCwgcnVsZXMgaW4gdGhlc2UgYmxvY2tzIG1heSBvdmVycmlkZSBydWxlcyBkZWNsYXJlZCBlYXJsaWVyIGluIFwiUGFyZW50IGJsb2Nrc1wiKVxuXG4qKkRvbid0IGNoYW5nZSB0aGUgb3JkZXIgb2YgYmxvY2tzISoqIEFsdGhvdWdoLCBhbGwgYmxvY2tzIGFyZSBzZWxmLXN1ZmZpY2llbnQgYW5kIGRvbid0IHJlbHkgb24gY2FzY2FkZSBhbmQgaW5oZXJpdGFuY2UsIGluIHNvbWUgcmFyZSBjYXNlcyByZW9yZGVyaW5nIG9mIHRoZWlyIGltcG9ydHMgbWF5IGJyZWFrIG1pbm9yIGRldGFpbHMgbGlrZSBsaW5rIGNvbG9yIG9yIGZvbnQtc2l6ZSwgc28gdG8gYmUgc2FmZSB0cnkgdG8gbWFpbnRhaW4gdGhlIGN1cnJlbnQgYmxvY2tzJyBvcmRlci4gSWYgeW91IGRvbid0IG5lZWQgYSBibG9jayBpbiB5b3VyIGJ1bmRsZSwgY29tbWVudCBpdCBvdXQsIGRvbid0IGRlbGV0ZSBpdCBmcm9tIHRoaXMgZmlsZSwgeW91IG1pZ2h0IG5lZWQgaXQgaW4gdGhlIGZ1dHVyZSAqL1xuXG4vKioqKioqKioqKioqKioqKiogUmVkZWZpbml0aW9uIGxldmVsICdibG9ja3MuYmlzY3VpdC1saWInICoqKioqKioqKioqKioqKioqKiovXG5cbi8vIFBhcmVudCBibG9ja3NcblxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9wYWdlL19wYWdlLnNjc3MnO1xuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9wYWdlL3BhZ2UuanMnO1xuXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL3RleHQvX3RleHQuc2Nzcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvaGVhZGluZy9faGVhZGluZy5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9ncmlkLWF1dG8tY29sL19ncmlkLWF1dG8tY29sLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2dyaWQtZ2FsbGVyeS9fZ3JpZC1nYWxsZXJ5LnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2xpc3QvX2xpc3Quc2Nzcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvYnRuL19idG4uc2Nzcyc7XG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2J0bi9idG4uanMnO1xuXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2xpbmsvX2xpbmsuc2Nzcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvcGFnaW5hdGlvbi9fcGFnaW5hdGlvbi5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9jb21tZW50L19jb21tZW50LnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2dyaWQtZm9ybXMvX2dyaWQtZm9ybXMuc2Nzcyc7XG5cbi8vIENoaWxkIGJsb2Nrc1xuXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2ltZy1zdmcvX2ltZy1zdmcuc2Nzcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvaW1nLXJhc3Rlci9faW1nLXJhc3Rlci5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi90b29sdGlwL190b29sdGlwLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2ljb25zL19pY29ucy5zY3NzJztcbnJlcXVpcmVGaWxlcyhcbiAgcmVxdWlyZS5jb250ZXh0KCcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9pY29ucy8nLCB0cnVlLCAvKHN2Z3xwbmd8anBnKSQvKVxuKTtcblxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9icmVhZGNydW1iL19icmVhZGNydW1iLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2JhZGdlL19iYWRnZS5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9ibG9ja3F1b3RlL19ibG9ja3F1b3RlLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2NvZGUvX2NvZGUuc2Nzcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvaHIvX2hyLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2xhYmVsL19sYWJlbC5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9lbWJlZC9fZW1iZWQuc2Nzcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvdGFibGUvX3RhYmxlLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2xvYWRlci9fbG9hZGVyLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2NvbnRyb2wvX2NvbnRyb2wuc2Nzcyc7XG4vLyBkZWxldGUgdGhpcyA6IHJlcXVpcmVGaWxlcyhyZXF1aXJlLmNvbnRleHQoJy5ibG9ja3MuYmlzY3VpdC1saWJiL2NvbnRyb2wnLCB0cnVlLCAvKHN2Z3xwbmd8anBnKSQvKSk7XG5cbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvZm9ybS1ncm91cC9fZm9ybS1ncm91cC5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9uYXYvX25hdi5zY3NzJztcbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvbmF2L25hdi5qcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvbmF2LWZpeGVkL19uYXYtZml4ZWQuc2Nzcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvc2VsZWN0L19zZWxlY3Quc2Nzcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvYWNjb3JkaW9uL19hY2NvcmRpb24uc2Nzcyc7XG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2FjY29yZGlvbi9hY2NvcmRpb24uanMnO1xuXG4vKioqKioqKioqKioqKioqKiogUmVkZWZpbml0aW9uIGxldmVsICdibG9ja3MnICoqKioqKioqKioqKioqKioqKiovXG5cbi8vIFByb2plY3Qtc3BlY2lmaWMgYmxvY2tzXG5cbmltcG9ydCAnLi9ibG9ja3MvZ3JpZC1wYWdlLWxheW91dDEvX2dyaWQtcGFnZS1sYXlvdXQxLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL2dyaWQtcGFnZS1sYXlvdXQyL19ncmlkLXBhZ2UtbGF5b3V0Mi5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy9tYWluL19tYWluLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL2hlYWRlci9faGVhZGVyLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL2Zvb3Rlci9fZm9vdGVyLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL2Z1bGxzY3JlZW4tYmcvX2Z1bGxzY3JlZW4tYmcuc2Nzcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MvaW1nLXNsaWRlci9faW1nLXNsaWRlci5zY3NzJztcbmltcG9ydCAnLi9ibG9ja3MvaW1nLXNsaWRlci9pbWctc2xpZGVyLmpzJztcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hbmltYWxzX2xhbmRzY2FwZV9sZy5qcGdcIjogMixcblx0XCIuL2FuaW1hbHNfbGFuZHNjYXBlX21kLmpwZ1wiOiAzLFxuXHRcIi4vYW5pbWFsc19sYW5kc2NhcGVfc20uanBnXCI6IDQsXG5cdFwiLi9hbmltYWxzX2xhbmRzY2FwZV94bC5qcGdcIjogNSxcblx0XCIuL2FuaW1hbHNfbGFuZHNjYXBlX3h4bC5qcGdcIjogNixcblx0XCIuL2FuaW1hbHNfbGFuZHNjYXBlX3h4eGwuanBnXCI6IDcsXG5cdFwiLi9iaXNjdWl0LWxvZ28tYmxhY2suc3ZnXCI6IDgsXG5cdFwiLi9iaXNjdWl0LWxvZ28td2hpdGUuc3ZnXCI6IDksXG5cdFwiLi9iaXNjdWl0LXN5bWJvbC5zdmdcIjogMTAsXG5cdFwiLi9mdWxsc2NyZWVuLWltYWdlLmpwZ1wiOiAxMSxcblx0XCIuL2hvdy1pdC13b3Jrcy5zdmdcIjogMTIsXG5cdFwiLi9sb2dvLnN2Z1wiOiAxM1xufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDE7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FuaW1hbHNfbGFuZHNjYXBlX2xnLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hbmltYWxzX2xhbmRzY2FwZV9tZC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYW5pbWFsc19sYW5kc2NhcGVfc20uanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3hsLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hbmltYWxzX2xhbmRzY2FwZV94eGwuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3h4eGwuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Jpc2N1aXQtbG9nby1ibGFjay5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYmlzY3VpdC1sb2dvLXdoaXRlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9iaXNjdWl0LXN5bWJvbC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZnVsbHNjcmVlbi1pbWFnZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvaG93LWl0LXdvcmtzLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9sb2dvLnN2Z1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0IHBhZ2VfX3ByZWxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fcHJlbG9hZCcpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgJ2xvYWQnLFxuICAoKSA9PiB7XG4gICAgcGFnZV9fcHJlbG9hZC5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlX19wcmVsb2FkJyk7XG4gIH0sXG4gIGZhbHNlXG4pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgYmFja1RvVG9wQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bl90eXBlX2JhY2stdG8tdG9wJyk7XG5cbmlmIChiYWNrVG9Ub3BCdG4pIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gNjAgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPj0gNjApIHtcbiAgICAgIGJhY2tUb1RvcEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9IGVsc2UgYmFja1RvVG9wQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIGJhY2tUb1RvcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7IC8vIGZvciBTYWZhcmlcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gIH0pO1xufSAvKiBlbHNlIHRocm93IG5ldyBFcnJvcignVGhlcmUgaXMgbm8gXCIuYmFja1RvVG9wQnRuXCIgY2xhc3MgaW4geW91ciBIVE1MIGRvY3VtZW50Jyk7ICovXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vc3ByaXRlLnN2Z1wiOiAzM1xufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDMyOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9zcHJpdGUuc3ZnXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiJ3VzZSBzdHJpY3QnO1xuLyogQWNjb3JkaW9uIHYyICovXG5cbmNsYXNzIEFjY29yZGlvbiB7XG4gIGNvbnN0cnVjdG9yKHNpbmdsZSA9IGZhbHNlKSB7XG4gICAgbGV0IGhlYWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uIC5hY2NvcmRpb25fX2hlYWRlcicpO1xuXG4gICAgaWYgKGhlYWRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHNpbmdsZSkge1xuICAgICAgICBoZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNpbmdsZU9wZW4pO1xuICAgICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuc2luZ2xlT3Blbik7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuKTtcbiAgICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9wZW4pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiBmaXJlcyB3aGVuIHVzZXIgY2xpY2tzIG9uIGEgaGVhZGVyIGFuZFxuICAgICAnaW5pdCcgaW52b2tlZCB3aXRoIGRlZmF1bHQgdmFsdWUgJ2ZhbHNlJzogaW5pdCgpICovXG4gIG9wZW4oZXZlbnRPYmopIHtcbiAgICAvLyBpZiB3ZSBwcmVzcyAnRW50ZXInIG9yIGlmIHdlIGNsaWNrOlxuICAgIGlmIChldmVudE9iai5rZXlDb2RlID09PSAxMyB8fCBldmVudE9iai50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICBsZXQgY29udGVudCA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICBpZiAoY29udGVudC5zdHlsZS5tYXhIZWlnaHQpIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XG4gICAgICBlbHNlIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7Y29udGVudC5zY3JvbGxIZWlnaHR9cHhgO1xuXG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2FjY29yZGlvbl9faGVhZGVyX2FjdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qIGZpcmVzIHdoZW4gdXNlciBjbGlja3Mgb24gYSBoZWFkZXIgYW5kXG4gICAgICdpbml0JyBpbnZva2VkIHdpdGggJ3RydWUnOiBpbml0KHRydWUpICovXG4gIHNpbmdsZU9wZW4oKSB7XG4gICAgLy8gcmVzZXQgc3RhdGUgb2YgYWxsIHBhbmVsczpcblxuICAgIC8vIDEpIGNsb3NlIGFsbCBwYW5lbHM6XG4gICAgbGV0IGNvbnRlbnRzID0gdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2NvbnRlbnQnKTtcblxuICAgIGlmIChjb250ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb250ZW50cy5mb3JFYWNoKGNvbnRlbnQgPT4gKGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gJycpKTtcbiAgICB9XG5cbiAgICAvLyAyKSByZXNldCBjb2xvciBvZiBhbGwgcGFuZWxzOlxuICAgIGxldCBoZWFkZXJzID0gdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2hlYWRlcicpO1xuICAgIGlmIChoZWFkZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICBpZiAoaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uX19oZWFkZXJfYWN0aXZlJykpIHtcbiAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uX19oZWFkZXJfYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIG9wZW4gdGhlIGN1cnJlbnQgcGFuZWw6XG5cbiAgICAvLyAxKSBnZXQgY29udGVudCB1bmRlciBjdXJyZW50IGhlYWRlclxuICAgIGxldCBjb250ZW50ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICBpZiAoY29udGVudC5zdHlsZS5tYXhIZWlnaHQpIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XG4gICAgZWxzZSBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGAke2NvbnRlbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcblxuICAgIC8vIDIpIGNoYW5nZSBvcGVuZWQgaGVhZGVyIGNvbG9yOlxuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYWNjb3JkaW9uX19oZWFkZXJfYWN0aXZlJyk7XG4gIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgbmV3IEFjY29yZGlvbih0cnVlKTtcbn0pO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qXG5jbGFzcyBBbmltYWwge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuICBydW4oc3BlZWQpIHtcbiAgICB0aGlzLnNwZWVkICs9IHNwZWVkO1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gcnVucyB3aXRoIHNwZWVkICR7dGhpcy5zcGVlZH0uYCk7XG4gIH1cbiAgc3RvcCgpIHtcbiAgICB0aGlzLnNwZWVkID0gMDtcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IHN0YW5kcyBzdGlsbC5gKTtcbiAgfVxufVxuXG4vLyBJbmhlcml0IGZyb20gQW5pbWFsIGJ5IHNwZWNpZnlpbmcgXCJleHRlbmRzIEFuaW1hbFwiXG5jbGFzcyBSYWJiaXQgZXh0ZW5kcyBBbmltYWwge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlYXJMZW5ndGgpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgICB0aGlzLmVhckxlbmd0aCA9IGVhckxlbmd0aDtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBoaWRlcyFgKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgc3VwZXIuc3RvcCgpO1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG59XG5cbmxldCByYWJiaXQgPSBuZXcgUmFiYml0KFwiV2hpdGUgUmFiYml0XCIsIDEwKTtcblxuY29uc29sZS5sb2cocmFiYml0Lm5hbWUpXG5jb25zb2xlLmxvZyhyYWJiaXQuZWFyTGVuZ3RoKTtcbnJhYmJpdC5ydW4oNSk7IC8vIFdoaXRlIFJhYmJpdCBydW5zIHdpdGggc3BlZWQgNS5cbnJhYmJpdC5zdG9wKCk7XG5cbmNvbnNvbGUubG9nKFJhYmJpdC5fX3Byb3RvX18gPT09IEFuaW1hbCk7XG5jb25zb2xlLmxvZyhSYWJiaXQucHJvdG90eXBlLl9fcHJvdG9fXyA9PT0gQW5pbWFsLnByb3RvdHlwZSlcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5zYXlIZWxsbygpLy8g0LLRi9C00LDRgdGCINGC0L7Qu9GM0LrQviAnSGVsbG8hJy4g0J/QvtGH0LXQvNGDPyDQoNCw0YHRgdC60LDQt9GDINC+0LEg0Y3RgtC+0Lwg0Lgg0L/QvtGB0LLRj9GJ0ZHQvSDQtNCw0L3QvdGL0Lkg0L/RgNC40LzQtdGALlxuIFxuZnVuY3Rpb24gc2F5SGVsbG8gKCkge1xuICAgIHZhciBoZWxsbztcbiAgICBcbiAgICBmdW5jdGlvbiBoZWxsbyAoKSB7ICAgICAgIC8vIGxleGljYWwgZW52aXJvbm1lbnQ6IGhlbGxvID0gZnVuY3Rpb25cbiAgICAgICAgY29uc29sZS5sb2coJ0hleSEnKVxuICAgIH1cbiAgICBoZWxsbygpXG59XG5cblxuXG5cbmZ1bmN0aW9uIFRoZWF0cmVTZWF0cygpIHtcbiAgdmFyIHNlYXRzID0gW107XG5cbiAgdGhpcy5wbGFjZVBlcnNvbiA9IGZ1bmN0aW9uKHBlcnNvbikge1xuICAgIHNlYXRzLnB1c2gocGVyc29uKTtcbiAgICBjb25zb2xlLmxvZyhzZWF0cyk7XG4gIH07XG59XG5cbmxldCB0ID0gbmV3IFRoZWF0cmVTZWF0cygpO1xudC5wbGFjZVBlcnNvbignSm9obicpO1xudC5wbGFjZVBlcnNvbignQm9iJyk7XG5cblxuXG5cbmxldCBzdHVkZW50ID0gbmV3IE9iamVjdCgpO1xuXG5zdHVkZW50LmZOYW1lID0gJ0pvaG4nO1xuc3R1ZGVudC5sTmFtZSA9ICdTbWl0aCc7XG5zdHVkZW50LmlkID0gNTtcbnN0dWRlbnQubWFya0UgPSA3NjtcbnN0dWRlbnQubWFya00gPSA5OTtcbnN0dWRlbnQubWFya1MgPSA4NztcbnN0dWRlbnQuY2FsY3VsYXRlQXZlcmFnZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gKHN0dWRlbnQubWFya0UgKyBzdHVkZW50Lm1hcmtNICsgc3R1ZGVudC5tYXJrUykgLyAzO1xufTtcblxuc3R1ZGVudC5kaXNwbGF5RGV0YWlscyA9IGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC53cml0ZSgnU3R1ZGVudCBJRDogJyArIHN0dWRlbnQuaWQgKyAnPGJyPicpO1xuICBkb2N1bWVudC53cml0ZSgnTmFtZTogJyArIHN0dWRlbnQuZk5hbWUgKyAnICcgKyBzdHVkZW50LmxOYW1lICsgJzxicj4nKTtcbiAgbGV0IGF2ZyA9IHN0dWRlbnQuY2FsY3VsYXRlQXZlcmFnZSgpO1xuICBkb2N1bWVudC53cml0ZSgnQXZlcmFnZSBtYXJrczogJyArIGF2Zyk7XG59XG5cbnN0dWRlbnQuZGlzcGxheURldGFpbHMoKTtcblxuZm9yIChsZXQgcHJvcCBpbiBzdHVkZW50KSB7XG4gIGRvY3VtZW50LndyaXRlKHByb3AgKyAnICcgKyBzdHVkZW50W3Byb3BdICsgJzxicj4nKTtcbn1cblxuKi9cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIidzdHJpY3QnO1xuXG5sZXQgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5jb25zb2xlLmxvZyhub2RlKTtcblxuLy8gcmVmOiBodHRwOi8vY2hyaXN0aWFuaGVpbG1hbm4uY29tLzIwMTUvMDQvMDgva2VlcGluZy1pdC1zaW1wbGUtY29kaW5nLWEtY2Fyb3VzZWwvXG5cbmxldCBjYXJvdXNlbCA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLWJveCcpO1xuICBjb25zdCBuZXh0ID0gYm94LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0Jyk7XG4gIGNvbnN0IHByZXYgPSBib3gucXVlcnlTZWxlY3RvcignLnByZXYnKTtcbiAgY29uc3QgaXRlbXMgPSBib3gucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnQgbGknKTtcblxuICBsZXQgY291bnRlciA9IDA7XG4gIGNvbnN0IGFtb3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgbGV0IGN1cnJlbnQgPSBpdGVtc1swXTtcblxuICBib3guY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgZnVuY3Rpb24gbmF2aWdhdGVUbyhkaXJlY3Rpb24pIHtcbiAgICBjdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICBjb3VudGVyID0gY291bnRlciArIGRpcmVjdGlvbjtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IC0xICYmIGNvdW50ZXIgPCAwKSBjb3VudGVyID0gYW1vdW50IC0gMTtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAxICYmICFpdGVtc1tjb3VudGVyXSkgY291bnRlciA9IDA7XG5cbiAgICBjdXJyZW50ID0gaXRlbXNbY291bnRlcl07XG4gICAgY3VycmVudC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gIH1cblxuICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBuYXZpZ2F0ZVRvKDEpKTtcbiAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gbmF2aWdhdGVUbygtMSkpO1xuXG4gIG5hdmlnYXRlVG8oMCk7XG59KSgpO1xuXG4vKlxuLy8gVGVzdGluZzpcblxuZnVuY3Rpb24gYXNzZXJ0KGNvbmR1dGlvbiwgbWVzc2FnZSkge1xuICByZXR1cm4gY29uZHV0aW9uID8gdHJ1ZSA6IG1lc3NhZ2U7XG59XG5cbmxldCBhID0gMjtcblxuY29uc29sZS5sb2coYXNzZXJ0KGEgPT09IDEsICdEaXNhc3RlciwgYSBpcyBub3QgMSEnKSk7XG5cbi8vIFBlcmZvcm1hbmNlIGFuYWx5c2lzOlxuXG5jb25zdCBtYXhDb3VudCA9IDEwMDAwO1xuXG5jb25zb2xlLnRpbWUoJ015IE9wZXJhdGlvbicpO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IG1heENvdW50OyBpKyspIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbn1cblxuY29uc29sZS50aW1lRW5kKCdNeSBPcGVyYXRpb24nKTtcblxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gIGNvbnNvbGUubG9nKCdvbmNsaWNrJyk7XG59O1xuXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgY29uc29sZS5sb2coJ29uY2xpY2sgMicpO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCdjbGljaycpO1xufSk7XG4qL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==