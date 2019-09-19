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
/* harmony import */ var _blocks_biscuit_lib_fullscreen_bg_fullscreen_bg_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var _blocks_biscuit_lib_fullscreen_bg_fullscreen_bg_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_fullscreen_bg_fullscreen_bg_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _blocks_biscuit_lib_list_list_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22);
/* harmony import */ var _blocks_biscuit_lib_list_list_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_list_list_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _blocks_biscuit_lib_btn_btn_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23);
/* harmony import */ var _blocks_biscuit_lib_btn_btn_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_btn_btn_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _blocks_biscuit_lib_btn_btn_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24);
/* harmony import */ var _blocks_biscuit_lib_btn_btn_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_btn_btn_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _blocks_biscuit_lib_link_link_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25);
/* harmony import */ var _blocks_biscuit_lib_link_link_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_link_link_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _blocks_biscuit_lib_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26);
/* harmony import */ var _blocks_biscuit_lib_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _blocks_biscuit_lib_comment_comment_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27);
/* harmony import */ var _blocks_biscuit_lib_comment_comment_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_comment_comment_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _blocks_biscuit_lib_grid_forms_grid_forms_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(28);
/* harmony import */ var _blocks_biscuit_lib_grid_forms_grid_forms_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_grid_forms_grid_forms_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _blocks_biscuit_lib_img_svg_img_svg_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(29);
/* harmony import */ var _blocks_biscuit_lib_img_svg_img_svg_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_img_svg_img_svg_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _blocks_biscuit_lib_img_raster_img_raster_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(30);
/* harmony import */ var _blocks_biscuit_lib_img_raster_img_raster_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_img_raster_img_raster_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _blocks_biscuit_lib_tooltip_tooltip_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(31);
/* harmony import */ var _blocks_biscuit_lib_tooltip_tooltip_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_tooltip_tooltip_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _blocks_biscuit_lib_icons_icons_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(32);
/* harmony import */ var _blocks_biscuit_lib_icons_icons_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_icons_icons_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _blocks_biscuit_lib_breadcrumb_breadcrumb_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(35);
/* harmony import */ var _blocks_biscuit_lib_breadcrumb_breadcrumb_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_breadcrumb_breadcrumb_scss__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _blocks_biscuit_lib_badge_badge_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(36);
/* harmony import */ var _blocks_biscuit_lib_badge_badge_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_badge_badge_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _blocks_biscuit_lib_blockquote_blockquote_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(37);
/* harmony import */ var _blocks_biscuit_lib_blockquote_blockquote_scss__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_blockquote_blockquote_scss__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _blocks_biscuit_lib_code_code_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(38);
/* harmony import */ var _blocks_biscuit_lib_code_code_scss__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_code_code_scss__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _blocks_biscuit_lib_hr_hr_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(39);
/* harmony import */ var _blocks_biscuit_lib_hr_hr_scss__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_hr_hr_scss__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _blocks_biscuit_lib_label_label_scss__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(40);
/* harmony import */ var _blocks_biscuit_lib_label_label_scss__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_label_label_scss__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _blocks_biscuit_lib_embed_embed_scss__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(41);
/* harmony import */ var _blocks_biscuit_lib_embed_embed_scss__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_embed_embed_scss__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _blocks_biscuit_lib_table_table_scss__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(42);
/* harmony import */ var _blocks_biscuit_lib_table_table_scss__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_table_table_scss__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _blocks_biscuit_lib_loader_loader_scss__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(43);
/* harmony import */ var _blocks_biscuit_lib_loader_loader_scss__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_loader_loader_scss__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _blocks_biscuit_lib_control_control_scss__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(44);
/* harmony import */ var _blocks_biscuit_lib_control_control_scss__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_control_control_scss__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _blocks_biscuit_lib_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(45);
/* harmony import */ var _blocks_biscuit_lib_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _blocks_biscuit_lib_nav_nav_scss__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(46);
/* harmony import */ var _blocks_biscuit_lib_nav_nav_scss__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_nav_nav_scss__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _blocks_biscuit_lib_nav_nav_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(47);
/* harmony import */ var _blocks_biscuit_lib_nav_nav_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_nav_nav_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _blocks_biscuit_lib_nav_fixed_nav_fixed_scss__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(48);
/* harmony import */ var _blocks_biscuit_lib_nav_fixed_nav_fixed_scss__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_nav_fixed_nav_fixed_scss__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _blocks_biscuit_lib_select_select_scss__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(49);
/* harmony import */ var _blocks_biscuit_lib_select_select_scss__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_select_select_scss__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _blocks_docs_promo_promo_scss__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(50);
/* harmony import */ var _blocks_docs_promo_promo_scss__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_blocks_docs_promo_promo_scss__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _blocks_new_proj_grid_page_layout1_grid_page_layout1_scss__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(51);
/* harmony import */ var _blocks_new_proj_grid_page_layout1_grid_page_layout1_scss__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_blocks_new_proj_grid_page_layout1_grid_page_layout1_scss__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _blocks_new_proj_grid_page_layout2_grid_page_layout2_scss__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(52);
/* harmony import */ var _blocks_new_proj_grid_page_layout2_grid_page_layout2_scss__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_blocks_new_proj_grid_page_layout2_grid_page_layout2_scss__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _blocks_new_proj_main_main_scss__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(53);
/* harmony import */ var _blocks_new_proj_main_main_scss__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_blocks_new_proj_main_main_scss__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _blocks_new_proj_header_header_scss__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(54);
/* harmony import */ var _blocks_new_proj_header_header_scss__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_blocks_new_proj_header_header_scss__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _blocks_new_proj_footer_footer_scss__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(55);
/* harmony import */ var _blocks_new_proj_footer_footer_scss__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_blocks_new_proj_footer_footer_scss__WEBPACK_IMPORTED_MODULE_39__);
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
// page


 // text

 // heading

 // grid-responsive-col

 // grid-gallery

 // fulscreen-bg


 // btn


 // link

 // pagination

 // comment

 // grid-forms

 // Child blocks
// image-svg

 // image-raster

 // tooltip

 // icon


requireFiles(__webpack_require__(33)); // breadcrumbs

 // badge

 // blockquote

 // code

 // hr

 // label

 // media content

 // table

 // loader

 // control

 // requireFiles(require.context('./blocks.biscuit-lib/control', true, /(svg|png|jpg)$/));
// form-group

 // nav


 // nav-fixed

 // select

 //hamburger-menu

/******************** Redefinition level 'blocks.docs' ***********************/
// promo


/***************** Redefinition level 'blocks.new-project' *******************/
// grid-classic

 // grid-12col

 // main

 // header

 // footer

 // list

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
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 24 */
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
} else throw new Error('There is no ".backToTopBtn" class in your HTML document');

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

// extracted by mini-css-extract-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sprite.svg": 34
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
webpackContext.id = 33;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sprite.svg";

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
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports) {



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

// extracted by mini-css-extract-plugin

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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbWcgc3luYyAoc3ZnfHBuZ3xqcGcpJCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX2xnLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX21kLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3NtLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3hsLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3h4bC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9hbmltYWxzX2xhbmRzY2FwZV94eHhsLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2Jpc2N1aXQtbG9nby1ibGFjay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9iaXNjdWl0LWxvZ28td2hpdGUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWcvYmlzY3VpdC1zeW1ib2wuc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWcvZnVsbHNjcmVlbi1pbWFnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9ob3ctaXQtd29ya3Muc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWcvbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9fcmVzZXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL3BhZ2UvX3BhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL3BhZ2UvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL3RleHQvX3RleHQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2hlYWRpbmcvX2hlYWRpbmcuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2dyaWQtYXV0by1jb2wvX2dyaWQtYXV0by1jb2wuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2dyaWQtZ2FsbGVyeS9fZ3JpZC1nYWxsZXJ5LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9mdWxsc2NyZWVuLWJnL19mdWxsc2NyZWVuLWJnLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9saXN0L19saXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9idG4vX2J0bi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmlzY3VpdC1saWIvYnRuL2J0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2xpbmsvX2xpbmsuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL3BhZ2luYXRpb24vX3BhZ2luYXRpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2NvbW1lbnQvX2NvbW1lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2dyaWQtZm9ybXMvX2dyaWQtZm9ybXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2ltZy1zdmcvX2ltZy1zdmcuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2ltZy1yYXN0ZXIvX2ltZy1yYXN0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL3Rvb2x0aXAvX3Rvb2x0aXAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2ljb25zL19pY29ucy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmlzY3VpdC1saWIvaWNvbnMgc3luYyAoc3ZnfHBuZ3xqcGcpJCIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2ljb25zL3Nwcml0ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9icmVhZGNydW1iL19icmVhZGNydW1iLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9iYWRnZS9fYmFkZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2Jsb2NrcXVvdGUvX2Jsb2NrcXVvdGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2NvZGUvX2NvZGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2hyL19oci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmlzY3VpdC1saWIvbGFiZWwvX2xhYmVsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9lbWJlZC9fZW1iZWQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL3RhYmxlL190YWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmlzY3VpdC1saWIvbG9hZGVyL19sb2FkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2NvbnRyb2wvX2NvbnRyb2wuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2Zvcm0tZ3JvdXAvX2Zvcm0tZ3JvdXAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL25hdi9fbmF2LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9uYXYtZml4ZWQvX25hdi1maXhlZC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmlzY3VpdC1saWIvc2VsZWN0L19zZWxlY3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmRvY3MvcHJvbW8vX3Byb21vLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5uZXctcHJvai9ncmlkLXBhZ2UtbGF5b3V0MS9fZ3JpZC1wYWdlLWxheW91dDEuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLm5ldy1wcm9qL2dyaWQtcGFnZS1sYXlvdXQyL19ncmlkLXBhZ2UtbGF5b3V0Mi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MubmV3LXByb2ovbWFpbi9fbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MubmV3LXByb2ovaGVhZGVyL19oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLm5ldy1wcm9qL2Zvb3Rlci9fZm9vdGVyLnNjc3MiXSwibmFtZXMiOlsicmVxdWlyZUZpbGVzIiwiciIsImtleXMiLCJmb3JFYWNoIiwicmVxdWlyZSIsInBhZ2VfX3ByZWxvYWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYmFja1RvVG9wQnRuIiwic2Nyb2xsWSIsImJvZHkiLCJzY3JvbGxUb3AiLCJzdHlsZSIsImRpc3BsYXkiLCJzY3JvbGxUbyIsIkVycm9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNB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Ozs7O0FDQXhDLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1QyIsImZpbGUiOiJzY3JpcHRzLmNhYjc1ZTJkNjY4YjhjODgyMTllLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKioqKioqKioqKioqXG4gKiBHUkFQSElDUyAqXG4gKioqKioqKioqKioqL1xuZnVuY3Rpb24gcmVxdWlyZUZpbGVzKHIpIHtcbiAgci5rZXlzKCkuZm9yRWFjaChyKTtcbn1cbi8vIHJlcXVpcmUgaW1hZ2VzXG5yZXF1aXJlRmlsZXMocmVxdWlyZS5jb250ZXh0KCcuL2ltZy8nLCB0cnVlLCAvKHN2Z3xwbmd8anBnKSQvKSk7XG5cbi8qKioqKioqKioqKioqXG4gKiBDU1MgUkVTRVQgKlxuICoqKioqKioqKioqKiovXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL19yZXNldC5zY3NzJztcblxuLyoqKioqKioqKipcbiAqIEJMT0NLUyAqXG4gKioqKioqKioqKi9cbi8qIFRvIGNvbnRyb2wgdGhlIENTUyBjYXNjYWRlIGFuZCBpbmhlcml0YW5jZSB3aGlsZSBpbXBvcnRpbmcgYmxvY2tzIGludG8gdGhlIHByb2plY3QsIGFsbCBibG9ja3MgZGl2aWRlZCBpbnRvIHR3byBtYWluIGdyb3VwczpcblxuICAgMS4gKipQYXJlbnQgYmxvY2tzKiogKHRoZXNlIGJsb2NrcyB1c3VhbGx5LCBhbHRob3VnaCBpdCdzIG5vdCBvYmxpZ2F0b3J5LCBzZXJ2ZSBhcyBwYXJlbnQgY29udGFpbmVycyBmb3IgXCJDaGlsZCBibG9ja3NcIilcbiAgIDIuICoqQ2hpbGQgYmxvY2tzKiogKHVzdWFsbHksIHlvdSBkb24ndCBwdXQgYW55dGhpbmcgaW5zaWRlIHRoZXNlIGJsb2NrcywgZXhjZXB0IHRleHQuIEJlaW5nIGltcG9ydGVkIGxhc3QsIHJ1bGVzIGluIHRoZXNlIGJsb2NrcyBtYXkgb3ZlcnJpZGUgcnVsZXMgZGVjbGFyZWQgZWFybGllciBpbiBcIlBhcmVudCBibG9ja3NcIilcblxuKipEb24ndCBjaGFuZ2UgdGhlIG9yZGVyIG9mIGJsb2NrcyEqKiBBbHRob3VnaCwgYWxsIGJsb2NrcyBhcmUgc2VsZi1zdWZmaWNpZW50IGFuZCBkb24ndCByZWx5IG9uIGNhc2NhZGUgYW5kIGluaGVyaXRhbmNlLCBpbiBzb21lIHJhcmUgY2FzZXMgcmVvcmRlcmluZyBvZiB0aGVpciBpbXBvcnRzIG1heSBicmVhayBtaW5vciBkZXRhaWxzIGxpa2UgbGluayBjb2xvciBvciBmb250LXNpemUsIHNvIHRvIGJlIHNhZmUgdHJ5IHRvIG1haW50YWluIHRoZSBjdXJyZW50IGJsb2Nrcycgb3JkZXIuIElmIHlvdSBkb24ndCBuZWVkIGEgYmxvY2sgaW4geW91ciBidW5kbGUsIGNvbW1lbnQgaXQgb3V0LCBkb24ndCBkZWxldGUgaXQgZnJvbSB0aGlzIGZpbGUsIHlvdSBtaWdodCBuZWVkIGl0IGluIHRoZSBmdXR1cmUgKi9cblxuLyoqKioqKioqKioqKioqKioqIFJlZGVmaW5pdGlvbiBsZXZlbCAnYmxvY2tzLmJpc2N1aXQtbGliJyAqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBQYXJlbnQgYmxvY2tzXG5cbi8vIHBhZ2VcbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvcGFnZS9fcGFnZS5zY3NzJztcbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvcGFnZS9wYWdlLmpzJztcbi8vIHRleHRcbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvdGV4dC9fdGV4dC5zY3NzJztcbi8vIGhlYWRpbmdcbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvaGVhZGluZy9faGVhZGluZy5zY3NzJztcbi8vIGdyaWQtcmVzcG9uc2l2ZS1jb2xcbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvZ3JpZC1hdXRvLWNvbC9fZ3JpZC1hdXRvLWNvbC5zY3NzJztcbi8vIGdyaWQtZ2FsbGVyeVxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9ncmlkLWdhbGxlcnkvX2dyaWQtZ2FsbGVyeS5zY3NzJztcbi8vIGZ1bHNjcmVlbi1iZ1xuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9mdWxsc2NyZWVuLWJnL19mdWxsc2NyZWVuLWJnLnNjc3MnO1xuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9saXN0L19saXN0LnNjc3MnO1xuLy8gYnRuXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2J0bi9fYnRuLnNjc3MnO1xuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9idG4vYnRuLmpzJztcbi8vIGxpbmtcbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvbGluay9fbGluay5zY3NzJztcbi8vIHBhZ2luYXRpb25cbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvcGFnaW5hdGlvbi9fcGFnaW5hdGlvbi5zY3NzJztcbi8vIGNvbW1lbnRcbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvY29tbWVudC9fY29tbWVudC5zY3NzJztcbi8vIGdyaWQtZm9ybXNcbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvZ3JpZC1mb3Jtcy9fZ3JpZC1mb3Jtcy5zY3NzJztcblxuLy8gQ2hpbGQgYmxvY2tzXG5cbi8vIGltYWdlLXN2Z1xuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9pbWctc3ZnL19pbWctc3ZnLnNjc3MnO1xuLy8gaW1hZ2UtcmFzdGVyXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2ltZy1yYXN0ZXIvX2ltZy1yYXN0ZXIuc2Nzcyc7XG4vLyB0b29sdGlwXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL3Rvb2x0aXAvX3Rvb2x0aXAuc2Nzcyc7XG4vLyBpY29uXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2ljb25zL19pY29ucy5zY3NzJztcbnJlcXVpcmVGaWxlcyhcbiAgcmVxdWlyZS5jb250ZXh0KCcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9pY29ucy8nLCB0cnVlLCAvKHN2Z3xwbmd8anBnKSQvKVxuKTtcbi8vIGJyZWFkY3J1bWJzXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2JyZWFkY3J1bWIvX2JyZWFkY3J1bWIuc2Nzcyc7XG4vLyBiYWRnZVxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9iYWRnZS9fYmFkZ2Uuc2Nzcyc7XG4vLyBibG9ja3F1b3RlXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2Jsb2NrcXVvdGUvX2Jsb2NrcXVvdGUuc2Nzcyc7XG4vLyBjb2RlXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2NvZGUvX2NvZGUuc2Nzcyc7XG4vLyBoclxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9oci9faHIuc2Nzcyc7XG4vLyBsYWJlbFxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9sYWJlbC9fbGFiZWwuc2Nzcyc7XG4vLyBtZWRpYSBjb250ZW50XG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2VtYmVkL19lbWJlZC5zY3NzJztcbi8vIHRhYmxlXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL3RhYmxlL190YWJsZS5zY3NzJztcbi8vIGxvYWRlclxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9sb2FkZXIvX2xvYWRlci5zY3NzJztcbi8vIGNvbnRyb2xcbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvY29udHJvbC9fY29udHJvbC5zY3NzJztcbi8vIHJlcXVpcmVGaWxlcyhyZXF1aXJlLmNvbnRleHQoJy4vYmxvY2tzLmJpc2N1aXQtbGliL2NvbnRyb2wnLCB0cnVlLCAvKHN2Z3xwbmd8anBnKSQvKSk7XG4vLyBmb3JtLWdyb3VwXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2Zvcm0tZ3JvdXAvX2Zvcm0tZ3JvdXAuc2Nzcyc7XG4vLyBuYXZcbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvbmF2L19uYXYuc2Nzcyc7XG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL25hdi9uYXYuanMnO1xuLy8gbmF2LWZpeGVkXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL25hdi1maXhlZC9fbmF2LWZpeGVkLnNjc3MnO1xuLy8gc2VsZWN0XG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL3NlbGVjdC9fc2VsZWN0LnNjc3MnO1xuLy9oYW1idXJnZXItbWVudVxuXG4vKioqKioqKioqKioqKioqKioqKiogUmVkZWZpbml0aW9uIGxldmVsICdibG9ja3MuZG9jcycgKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIHByb21vXG5pbXBvcnQgJy4vYmxvY2tzLmRvY3MvcHJvbW8vX3Byb21vLnNjc3MnO1xuXG4vKioqKioqKioqKioqKioqKiogUmVkZWZpbml0aW9uIGxldmVsICdibG9ja3MubmV3LXByb2plY3QnICoqKioqKioqKioqKioqKioqKiovXG5cbi8vIGdyaWQtY2xhc3NpY1xuaW1wb3J0ICcuL2Jsb2Nrcy5uZXctcHJvai9ncmlkLXBhZ2UtbGF5b3V0MS9fZ3JpZC1wYWdlLWxheW91dDEuc2Nzcyc7XG4vLyBncmlkLTEyY29sXG5pbXBvcnQgJy4vYmxvY2tzLm5ldy1wcm9qL2dyaWQtcGFnZS1sYXlvdXQyL19ncmlkLXBhZ2UtbGF5b3V0Mi5zY3NzJztcbi8vIG1haW5cbmltcG9ydCAnLi9ibG9ja3MubmV3LXByb2ovbWFpbi9fbWFpbi5zY3NzJztcbi8vIGhlYWRlclxuaW1wb3J0ICcuL2Jsb2Nrcy5uZXctcHJvai9oZWFkZXIvX2hlYWRlci5zY3NzJztcbi8vIGZvb3RlclxuaW1wb3J0ICcuL2Jsb2Nrcy5uZXctcHJvai9mb290ZXIvX2Zvb3Rlci5zY3NzJztcbi8vIGxpc3RcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hbmltYWxzX2xhbmRzY2FwZV9sZy5qcGdcIjogMixcblx0XCIuL2FuaW1hbHNfbGFuZHNjYXBlX21kLmpwZ1wiOiAzLFxuXHRcIi4vYW5pbWFsc19sYW5kc2NhcGVfc20uanBnXCI6IDQsXG5cdFwiLi9hbmltYWxzX2xhbmRzY2FwZV94bC5qcGdcIjogNSxcblx0XCIuL2FuaW1hbHNfbGFuZHNjYXBlX3h4bC5qcGdcIjogNixcblx0XCIuL2FuaW1hbHNfbGFuZHNjYXBlX3h4eGwuanBnXCI6IDcsXG5cdFwiLi9iaXNjdWl0LWxvZ28tYmxhY2suc3ZnXCI6IDgsXG5cdFwiLi9iaXNjdWl0LWxvZ28td2hpdGUuc3ZnXCI6IDksXG5cdFwiLi9iaXNjdWl0LXN5bWJvbC5zdmdcIjogMTAsXG5cdFwiLi9mdWxsc2NyZWVuLWltYWdlLmpwZ1wiOiAxMSxcblx0XCIuL2hvdy1pdC13b3Jrcy5zdmdcIjogMTIsXG5cdFwiLi9sb2dvLnN2Z1wiOiAxM1xufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDE7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FuaW1hbHNfbGFuZHNjYXBlX2xnLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hbmltYWxzX2xhbmRzY2FwZV9tZC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYW5pbWFsc19sYW5kc2NhcGVfc20uanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3hsLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hbmltYWxzX2xhbmRzY2FwZV94eGwuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3h4eGwuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Jpc2N1aXQtbG9nby1ibGFjay5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYmlzY3VpdC1sb2dvLXdoaXRlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9iaXNjdWl0LXN5bWJvbC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZnVsbHNjcmVlbi1pbWFnZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvaG93LWl0LXdvcmtzLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9sb2dvLnN2Z1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0IHBhZ2VfX3ByZWxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fcHJlbG9hZCcpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgJ2xvYWQnLFxuICAoKSA9PiB7XG4gICAgcGFnZV9fcHJlbG9hZC5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlX19wcmVsb2FkJyk7XG4gIH0sXG4gIGZhbHNlXG4pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgYmFja1RvVG9wQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bl90eXBlX2JhY2stdG8tdG9wJyk7XG5cbmlmIChiYWNrVG9Ub3BCdG4pIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gNjAgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPj0gNjApIHtcbiAgICAgIGJhY2tUb1RvcEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9IGVsc2UgYmFja1RvVG9wQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIGJhY2tUb1RvcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7IC8vIGZvciBTYWZhcmlcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gIH0pO1xufSBlbHNlXG4gIHRocm93IG5ldyBFcnJvcignVGhlcmUgaXMgbm8gXCIuYmFja1RvVG9wQnRuXCIgY2xhc3MgaW4geW91ciBIVE1MIGRvY3VtZW50Jyk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vc3ByaXRlLnN2Z1wiOiAzNFxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDMzOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9zcHJpdGUuc3ZnXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==