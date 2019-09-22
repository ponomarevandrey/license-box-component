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
/* harmony import */ var _blocks_biscuit_lib_accordeon_accordeon_scss__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(50);
/* harmony import */ var _blocks_biscuit_lib_accordeon_accordeon_scss__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_blocks_biscuit_lib_accordeon_accordeon_scss__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _blocks_docs_promo_promo_scss__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(51);
/* harmony import */ var _blocks_docs_promo_promo_scss__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_blocks_docs_promo_promo_scss__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _blocks_new_proj_grid_page_layout1_grid_page_layout1_scss__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(52);
/* harmony import */ var _blocks_new_proj_grid_page_layout1_grid_page_layout1_scss__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_blocks_new_proj_grid_page_layout1_grid_page_layout1_scss__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _blocks_new_proj_grid_page_layout2_grid_page_layout2_scss__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(53);
/* harmony import */ var _blocks_new_proj_grid_page_layout2_grid_page_layout2_scss__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_blocks_new_proj_grid_page_layout2_grid_page_layout2_scss__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _blocks_new_proj_main_main_scss__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(54);
/* harmony import */ var _blocks_new_proj_main_main_scss__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_blocks_new_proj_main_main_scss__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _blocks_new_proj_header_header_scss__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(55);
/* harmony import */ var _blocks_new_proj_header_header_scss__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_blocks_new_proj_header_header_scss__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _blocks_new_proj_footer_footer_scss__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(56);
/* harmony import */ var _blocks_new_proj_footer_footer_scss__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_blocks_new_proj_footer_footer_scss__WEBPACK_IMPORTED_MODULE_40__);
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

 // accordeon

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
}
/* else throw new Error('There is no ".backToTopBtn" class in your HTML document'); */

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

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbWcgc3luYyAoc3ZnfHBuZ3xqcGcpJCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX2xnLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX21kLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3NtLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3hsLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3h4bC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9hbmltYWxzX2xhbmRzY2FwZV94eHhsLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2Jpc2N1aXQtbG9nby1ibGFjay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9iaXNjdWl0LWxvZ28td2hpdGUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWcvYmlzY3VpdC1zeW1ib2wuc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWcvZnVsbHNjcmVlbi1pbWFnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9ob3ctaXQtd29ya3Muc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWcvbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9fcmVzZXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL3BhZ2UvX3BhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL3BhZ2UvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL3RleHQvX3RleHQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2hlYWRpbmcvX2hlYWRpbmcuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2dyaWQtYXV0by1jb2wvX2dyaWQtYXV0by1jb2wuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2dyaWQtZ2FsbGVyeS9fZ3JpZC1nYWxsZXJ5LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9mdWxsc2NyZWVuLWJnL19mdWxsc2NyZWVuLWJnLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9saXN0L19saXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9idG4vX2J0bi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmlzY3VpdC1saWIvYnRuL2J0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2xpbmsvX2xpbmsuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL3BhZ2luYXRpb24vX3BhZ2luYXRpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2NvbW1lbnQvX2NvbW1lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2dyaWQtZm9ybXMvX2dyaWQtZm9ybXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2ltZy1zdmcvX2ltZy1zdmcuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2ltZy1yYXN0ZXIvX2ltZy1yYXN0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL3Rvb2x0aXAvX3Rvb2x0aXAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2ljb25zL19pY29ucy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmlzY3VpdC1saWIvaWNvbnMgc3luYyAoc3ZnfHBuZ3xqcGcpJCIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2ljb25zL3Nwcml0ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9icmVhZGNydW1iL19icmVhZGNydW1iLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9iYWRnZS9fYmFkZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2Jsb2NrcXVvdGUvX2Jsb2NrcXVvdGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2NvZGUvX2NvZGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2hyL19oci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmlzY3VpdC1saWIvbGFiZWwvX2xhYmVsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9lbWJlZC9fZW1iZWQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL3RhYmxlL190YWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmlzY3VpdC1saWIvbG9hZGVyL19sb2FkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2NvbnRyb2wvX2NvbnRyb2wuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2Zvcm0tZ3JvdXAvX2Zvcm0tZ3JvdXAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL25hdi9fbmF2LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iaXNjdWl0LWxpYi9uYXYtZml4ZWQvX25hdi1maXhlZC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmlzY3VpdC1saWIvc2VsZWN0L19zZWxlY3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJpc2N1aXQtbGliL2FjY29yZGVvbi9fYWNjb3JkZW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5kb2NzL3Byb21vL19wcm9tby5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MubmV3LXByb2ovZ3JpZC1wYWdlLWxheW91dDEvX2dyaWQtcGFnZS1sYXlvdXQxLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5uZXctcHJvai9ncmlkLXBhZ2UtbGF5b3V0Mi9fZ3JpZC1wYWdlLWxheW91dDIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLm5ldy1wcm9qL21haW4vX21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLm5ldy1wcm9qL2hlYWRlci9faGVhZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5uZXctcHJvai9mb290ZXIvX2Zvb3Rlci5zY3NzIl0sIm5hbWVzIjpbInJlcXVpcmVGaWxlcyIsInIiLCJrZXlzIiwiZm9yRWFjaCIsInJlcXVpcmUiLCJwYWdlX19wcmVsb2FkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImJhY2tUb1RvcEJ0biIsInNjcm9sbFkiLCJib2R5Iiwic2Nyb2xsVG9wIiwic3R5bGUiLCJkaXNwbGF5Iiwic2Nyb2xsVG8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qs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QUNBLHVCOzs7Ozs7QUN0QkEsaUJBQWlCLHFCQUF1QixvQjs7Ozs7O0FDQXhDLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoic2NyaXB0cy4wNDQ1MWM5MDQzMDRkZjc1NDdlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyoqKioqKioqKioqKlxuICogR1JBUEhJQ1MgKlxuICoqKioqKioqKioqKi9cbmZ1bmN0aW9uIHJlcXVpcmVGaWxlcyhyKSB7XG4gIHIua2V5cygpLmZvckVhY2gocik7XG59XG4vLyByZXF1aXJlIGltYWdlc1xucmVxdWlyZUZpbGVzKHJlcXVpcmUuY29udGV4dCgnLi9pbWcvJywgdHJ1ZSwgLyhzdmd8cG5nfGpwZykkLykpO1xuXG4vKioqKioqKioqKioqKlxuICogQ1NTIFJFU0VUICpcbiAqKioqKioqKioqKioqL1xuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9fcmVzZXQuc2Nzcyc7XG5cbi8qKioqKioqKioqXG4gKiBCTE9DS1MgKlxuICoqKioqKioqKiovXG4vKiBUbyBjb250cm9sIHRoZSBDU1MgY2FzY2FkZSBhbmQgaW5oZXJpdGFuY2Ugd2hpbGUgaW1wb3J0aW5nIGJsb2NrcyBpbnRvIHRoZSBwcm9qZWN0LCBhbGwgYmxvY2tzIGRpdmlkZWQgaW50byB0d28gbWFpbiBncm91cHM6XG5cbiAgIDEuICoqUGFyZW50IGJsb2NrcyoqICh0aGVzZSBibG9ja3MgdXN1YWxseSwgYWx0aG91Z2ggaXQncyBub3Qgb2JsaWdhdG9yeSwgc2VydmUgYXMgcGFyZW50IGNvbnRhaW5lcnMgZm9yIFwiQ2hpbGQgYmxvY2tzXCIpXG4gICAyLiAqKkNoaWxkIGJsb2NrcyoqICh1c3VhbGx5LCB5b3UgZG9uJ3QgcHV0IGFueXRoaW5nIGluc2lkZSB0aGVzZSBibG9ja3MsIGV4Y2VwdCB0ZXh0LiBCZWluZyBpbXBvcnRlZCBsYXN0LCBydWxlcyBpbiB0aGVzZSBibG9ja3MgbWF5IG92ZXJyaWRlIHJ1bGVzIGRlY2xhcmVkIGVhcmxpZXIgaW4gXCJQYXJlbnQgYmxvY2tzXCIpXG5cbioqRG9uJ3QgY2hhbmdlIHRoZSBvcmRlciBvZiBibG9ja3MhKiogQWx0aG91Z2gsIGFsbCBibG9ja3MgYXJlIHNlbGYtc3VmZmljaWVudCBhbmQgZG9uJ3QgcmVseSBvbiBjYXNjYWRlIGFuZCBpbmhlcml0YW5jZSwgaW4gc29tZSByYXJlIGNhc2VzIHJlb3JkZXJpbmcgb2YgdGhlaXIgaW1wb3J0cyBtYXkgYnJlYWsgbWlub3IgZGV0YWlscyBsaWtlIGxpbmsgY29sb3Igb3IgZm9udC1zaXplLCBzbyB0byBiZSBzYWZlIHRyeSB0byBtYWludGFpbiB0aGUgY3VycmVudCBibG9ja3MnIG9yZGVyLiBJZiB5b3UgZG9uJ3QgbmVlZCBhIGJsb2NrIGluIHlvdXIgYnVuZGxlLCBjb21tZW50IGl0IG91dCwgZG9uJ3QgZGVsZXRlIGl0IGZyb20gdGhpcyBmaWxlLCB5b3UgbWlnaHQgbmVlZCBpdCBpbiB0aGUgZnV0dXJlICovXG5cbi8qKioqKioqKioqKioqKioqKiBSZWRlZmluaXRpb24gbGV2ZWwgJ2Jsb2Nrcy5iaXNjdWl0LWxpYicgKioqKioqKioqKioqKioqKioqKi9cblxuLy8gUGFyZW50IGJsb2Nrc1xuXG4vLyBwYWdlXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL3BhZ2UvX3BhZ2Uuc2Nzcyc7XG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL3BhZ2UvcGFnZS5qcyc7XG4vLyB0ZXh0XG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL3RleHQvX3RleHQuc2Nzcyc7XG4vLyBoZWFkaW5nXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2hlYWRpbmcvX2hlYWRpbmcuc2Nzcyc7XG4vLyBncmlkLXJlc3BvbnNpdmUtY29sXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2dyaWQtYXV0by1jb2wvX2dyaWQtYXV0by1jb2wuc2Nzcyc7XG4vLyBncmlkLWdhbGxlcnlcbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvZ3JpZC1nYWxsZXJ5L19ncmlkLWdhbGxlcnkuc2Nzcyc7XG4vLyBmdWxzY3JlZW4tYmdcbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvZnVsbHNjcmVlbi1iZy9fZnVsbHNjcmVlbi1iZy5zY3NzJztcbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvbGlzdC9fbGlzdC5zY3NzJztcbi8vIGJ0blxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9idG4vX2J0bi5zY3NzJztcbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvYnRuL2J0bi5qcyc7XG4vLyBsaW5rXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2xpbmsvX2xpbmsuc2Nzcyc7XG4vLyBwYWdpbmF0aW9uXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL3BhZ2luYXRpb24vX3BhZ2luYXRpb24uc2Nzcyc7XG4vLyBjb21tZW50XG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2NvbW1lbnQvX2NvbW1lbnQuc2Nzcyc7XG4vLyBncmlkLWZvcm1zXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2dyaWQtZm9ybXMvX2dyaWQtZm9ybXMuc2Nzcyc7XG5cbi8vIENoaWxkIGJsb2Nrc1xuXG4vLyBpbWFnZS1zdmdcbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvaW1nLXN2Zy9faW1nLXN2Zy5zY3NzJztcbi8vIGltYWdlLXJhc3RlclxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9pbWctcmFzdGVyL19pbWctcmFzdGVyLnNjc3MnO1xuLy8gdG9vbHRpcFxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi90b29sdGlwL190b29sdGlwLnNjc3MnO1xuLy8gaWNvblxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9pY29ucy9faWNvbnMuc2Nzcyc7XG5yZXF1aXJlRmlsZXMoXG4gIHJlcXVpcmUuY29udGV4dCgnLi9ibG9ja3MuYmlzY3VpdC1saWIvaWNvbnMvJywgdHJ1ZSwgLyhzdmd8cG5nfGpwZykkLylcbik7XG4vLyBicmVhZGNydW1ic1xuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9icmVhZGNydW1iL19icmVhZGNydW1iLnNjc3MnO1xuLy8gYmFkZ2VcbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvYmFkZ2UvX2JhZGdlLnNjc3MnO1xuLy8gYmxvY2txdW90ZVxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9ibG9ja3F1b3RlL19ibG9ja3F1b3RlLnNjc3MnO1xuLy8gY29kZVxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9jb2RlL19jb2RlLnNjc3MnO1xuLy8gaHJcbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvaHIvX2hyLnNjc3MnO1xuLy8gbGFiZWxcbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvbGFiZWwvX2xhYmVsLnNjc3MnO1xuLy8gbWVkaWEgY29udGVudFxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9lbWJlZC9fZW1iZWQuc2Nzcyc7XG4vLyB0YWJsZVxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi90YWJsZS9fdGFibGUuc2Nzcyc7XG4vLyBsb2FkZXJcbmltcG9ydCAnLi9ibG9ja3MuYmlzY3VpdC1saWIvbG9hZGVyL19sb2FkZXIuc2Nzcyc7XG4vLyBjb250cm9sXG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL2NvbnRyb2wvX2NvbnRyb2wuc2Nzcyc7XG4vLyByZXF1aXJlRmlsZXMocmVxdWlyZS5jb250ZXh0KCcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9jb250cm9sJywgdHJ1ZSwgLyhzdmd8cG5nfGpwZykkLykpO1xuLy8gZm9ybS1ncm91cFxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9mb3JtLWdyb3VwL19mb3JtLWdyb3VwLnNjc3MnO1xuLy8gbmF2XG5pbXBvcnQgJy4vYmxvY2tzLmJpc2N1aXQtbGliL25hdi9fbmF2LnNjc3MnO1xuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9uYXYvbmF2LmpzJztcbi8vIG5hdi1maXhlZFxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9uYXYtZml4ZWQvX25hdi1maXhlZC5zY3NzJztcbi8vIHNlbGVjdFxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9zZWxlY3QvX3NlbGVjdC5zY3NzJztcbi8vIGFjY29yZGVvblxuaW1wb3J0ICcuL2Jsb2Nrcy5iaXNjdWl0LWxpYi9hY2NvcmRlb24vX2FjY29yZGVvbi5zY3NzJztcblxuLy9oYW1idXJnZXItbWVudVxuXG4vKioqKioqKioqKioqKioqKioqKiogUmVkZWZpbml0aW9uIGxldmVsICdibG9ja3MuZG9jcycgKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIHByb21vXG5pbXBvcnQgJy4vYmxvY2tzLmRvY3MvcHJvbW8vX3Byb21vLnNjc3MnO1xuXG4vKioqKioqKioqKioqKioqKiogUmVkZWZpbml0aW9uIGxldmVsICdibG9ja3MubmV3LXByb2plY3QnICoqKioqKioqKioqKioqKioqKiovXG5cbi8vIGdyaWQtY2xhc3NpY1xuaW1wb3J0ICcuL2Jsb2Nrcy5uZXctcHJvai9ncmlkLXBhZ2UtbGF5b3V0MS9fZ3JpZC1wYWdlLWxheW91dDEuc2Nzcyc7XG4vLyBncmlkLTEyY29sXG5pbXBvcnQgJy4vYmxvY2tzLm5ldy1wcm9qL2dyaWQtcGFnZS1sYXlvdXQyL19ncmlkLXBhZ2UtbGF5b3V0Mi5zY3NzJztcbi8vIG1haW5cbmltcG9ydCAnLi9ibG9ja3MubmV3LXByb2ovbWFpbi9fbWFpbi5zY3NzJztcbi8vIGhlYWRlclxuaW1wb3J0ICcuL2Jsb2Nrcy5uZXctcHJvai9oZWFkZXIvX2hlYWRlci5zY3NzJztcbi8vIGZvb3RlclxuaW1wb3J0ICcuL2Jsb2Nrcy5uZXctcHJvai9mb290ZXIvX2Zvb3Rlci5zY3NzJztcbi8vIGxpc3RcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hbmltYWxzX2xhbmRzY2FwZV9sZy5qcGdcIjogMixcblx0XCIuL2FuaW1hbHNfbGFuZHNjYXBlX21kLmpwZ1wiOiAzLFxuXHRcIi4vYW5pbWFsc19sYW5kc2NhcGVfc20uanBnXCI6IDQsXG5cdFwiLi9hbmltYWxzX2xhbmRzY2FwZV94bC5qcGdcIjogNSxcblx0XCIuL2FuaW1hbHNfbGFuZHNjYXBlX3h4bC5qcGdcIjogNixcblx0XCIuL2FuaW1hbHNfbGFuZHNjYXBlX3h4eGwuanBnXCI6IDcsXG5cdFwiLi9iaXNjdWl0LWxvZ28tYmxhY2suc3ZnXCI6IDgsXG5cdFwiLi9iaXNjdWl0LWxvZ28td2hpdGUuc3ZnXCI6IDksXG5cdFwiLi9iaXNjdWl0LXN5bWJvbC5zdmdcIjogMTAsXG5cdFwiLi9mdWxsc2NyZWVuLWltYWdlLmpwZ1wiOiAxMSxcblx0XCIuL2hvdy1pdC13b3Jrcy5zdmdcIjogMTIsXG5cdFwiLi9sb2dvLnN2Z1wiOiAxM1xufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDE7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FuaW1hbHNfbGFuZHNjYXBlX2xnLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hbmltYWxzX2xhbmRzY2FwZV9tZC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYW5pbWFsc19sYW5kc2NhcGVfc20uanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3hsLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hbmltYWxzX2xhbmRzY2FwZV94eGwuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3h4eGwuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Jpc2N1aXQtbG9nby1ibGFjay5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYmlzY3VpdC1sb2dvLXdoaXRlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9iaXNjdWl0LXN5bWJvbC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZnVsbHNjcmVlbi1pbWFnZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvaG93LWl0LXdvcmtzLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9sb2dvLnN2Z1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0IHBhZ2VfX3ByZWxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fcHJlbG9hZCcpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgJ2xvYWQnLFxuICAoKSA9PiB7XG4gICAgcGFnZV9fcHJlbG9hZC5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlX19wcmVsb2FkJyk7XG4gIH0sXG4gIGZhbHNlXG4pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgYmFja1RvVG9wQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bl90eXBlX2JhY2stdG8tdG9wJyk7XG5cbmlmIChiYWNrVG9Ub3BCdG4pIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gNjAgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPj0gNjApIHtcbiAgICAgIGJhY2tUb1RvcEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9IGVsc2UgYmFja1RvVG9wQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIGJhY2tUb1RvcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7IC8vIGZvciBTYWZhcmlcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gIH0pO1xufSAvKiBlbHNlIHRocm93IG5ldyBFcnJvcignVGhlcmUgaXMgbm8gXCIuYmFja1RvVG9wQnRuXCIgY2xhc3MgaW4geW91ciBIVE1MIGRvY3VtZW50Jyk7ICovXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vc3ByaXRlLnN2Z1wiOiAzNFxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDMzOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9zcHJpdGUuc3ZnXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==