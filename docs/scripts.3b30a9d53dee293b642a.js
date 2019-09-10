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
/* harmony import */ var _blocks_basic_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _blocks_basic_reset_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_reset_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_basic_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _blocks_basic_page_page_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_page_page_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_basic_page_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _blocks_basic_page_page_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_page_page_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blocks_basic_text_text_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _blocks_basic_text_text_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_text_text_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _blocks_basic_heading_heading_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _blocks_basic_heading_heading_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_heading_heading_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blocks_basic_grid_auto_col_grid_auto_col_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _blocks_basic_grid_auto_col_grid_auto_col_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_grid_auto_col_grid_auto_col_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _blocks_basic_grid_3_col_grid_3_col_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _blocks_basic_grid_3_col_grid_3_col_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_grid_3_col_grid_3_col_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _blocks_basic_grid_page_layout1_grid_page_layout1_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var _blocks_basic_grid_page_layout1_grid_page_layout1_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_grid_page_layout1_grid_page_layout1_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _blocks_basic_grid_page_layout2_grid_page_layout2_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22);
/* harmony import */ var _blocks_basic_grid_page_layout2_grid_page_layout2_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_grid_page_layout2_grid_page_layout2_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _blocks_basic_grid_gallery_grid_gallery_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23);
/* harmony import */ var _blocks_basic_grid_gallery_grid_gallery_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_grid_gallery_grid_gallery_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _blocks_basic_header_header_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24);
/* harmony import */ var _blocks_basic_header_header_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_header_header_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _blocks_basic_main_main_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25);
/* harmony import */ var _blocks_basic_main_main_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_main_main_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _blocks_basic_footer_footer_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26);
/* harmony import */ var _blocks_basic_footer_footer_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_footer_footer_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _blocks_basic_list_list_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27);
/* harmony import */ var _blocks_basic_list_list_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_list_list_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _blocks_basic_btn_btn_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(28);
/* harmony import */ var _blocks_basic_btn_btn_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_btn_btn_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _blocks_basic_btn_btn_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(29);
/* harmony import */ var _blocks_basic_btn_btn_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_btn_btn_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _blocks_basic_link_link_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(30);
/* harmony import */ var _blocks_basic_link_link_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_link_link_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _blocks_basic_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(31);
/* harmony import */ var _blocks_basic_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _blocks_basic_comment_comment_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(32);
/* harmony import */ var _blocks_basic_comment_comment_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_comment_comment_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _blocks_basic_form_grid_form_grid_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(33);
/* harmony import */ var _blocks_basic_form_grid_form_grid_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_form_grid_form_grid_scss__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _blocks_basic_img_svg_img_svg_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(34);
/* harmony import */ var _blocks_basic_img_svg_img_svg_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_img_svg_img_svg_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _blocks_basic_img_raster_img_raster_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(35);
/* harmony import */ var _blocks_basic_img_raster_img_raster_scss__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_img_raster_img_raster_scss__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _blocks_basic_tooltip_tooltip_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(36);
/* harmony import */ var _blocks_basic_tooltip_tooltip_scss__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_tooltip_tooltip_scss__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _blocks_basic_icons_icons_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(37);
/* harmony import */ var _blocks_basic_icons_icons_scss__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_icons_icons_scss__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _blocks_basic_breadcrumb_breadcrumb_scss__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(40);
/* harmony import */ var _blocks_basic_breadcrumb_breadcrumb_scss__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_breadcrumb_breadcrumb_scss__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _blocks_basic_badge_badge_scss__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(41);
/* harmony import */ var _blocks_basic_badge_badge_scss__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_badge_badge_scss__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _blocks_basic_blockquote_blockquote_scss__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(42);
/* harmony import */ var _blocks_basic_blockquote_blockquote_scss__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_blockquote_blockquote_scss__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _blocks_basic_code_code_scss__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(43);
/* harmony import */ var _blocks_basic_code_code_scss__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_code_code_scss__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _blocks_basic_hr_hr_scss__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(44);
/* harmony import */ var _blocks_basic_hr_hr_scss__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_hr_hr_scss__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _blocks_basic_embed_embed_scss__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(45);
/* harmony import */ var _blocks_basic_embed_embed_scss__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_embed_embed_scss__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _blocks_basic_table_table_scss__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(46);
/* harmony import */ var _blocks_basic_table_table_scss__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_table_table_scss__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _blocks_basic_loader_loader_scss__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(47);
/* harmony import */ var _blocks_basic_loader_loader_scss__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_loader_loader_scss__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _blocks_basic_control_control_scss__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(48);
/* harmony import */ var _blocks_basic_control_control_scss__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_control_control_scss__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _blocks_basic_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(49);
/* harmony import */ var _blocks_basic_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _blocks_basic_nav_nav_scss__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(50);
/* harmony import */ var _blocks_basic_nav_nav_scss__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_nav_nav_scss__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _blocks_basic_nav_nav_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(51);
/* harmony import */ var _blocks_basic_nav_nav_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_nav_nav_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _blocks_basic_nav_fixed_nav_fixed_scss__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(52);
/* harmony import */ var _blocks_basic_nav_fixed_nav_fixed_scss__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_blocks_basic_nav_fixed_nav_fixed_scss__WEBPACK_IMPORTED_MODULE_36__);
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
// Parent blocks
// page


 // text

 // heading

 // grid-responsive-col

 // grid-items-list.scss

 // grid-classic

 // grid-12col

 // grid-gallery

 // header

 // main

 // footer

 // list

 // btn


 // link

 // pagination

 // comment

 // form-grid

 // Child blocks
// image-svg

 // image-raster

 // tooltip

 // icon


requireFiles(__webpack_require__(38)); // breadcrumbs

 // badge

 // blockquote

 // code

 // hr

 // media content

 // table

 // loader

 // control

 // requireFiles(require.context('./blocks.basic/control', true, /(svg|png|jpg)$/));
// form-group

 // nav


 // nav-foxed

 //hamburger-menu

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

// extracted by mini-css-extract-plugin

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

var map = {
	"./sprite.svg": 39
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
webpackContext.id = 38;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sprite.svg";

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

// extracted by mini-css-extract-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports) {



/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbWcgc3luYyAoc3ZnfHBuZ3xqcGcpJCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX2xnLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX21kLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3NtLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3hsLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3h4bC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9hbmltYWxzX2xhbmRzY2FwZV94eHhsLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2Jpc2N1aXQtbG9nby1ibGFjay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9iaXNjdWl0LWxvZ28td2hpdGUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWcvYmlzY3VpdC1zeW1ib2wuc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWcvZnVsbHNjcmVlbi1pbWFnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9ob3ctaXQtd29ya3Muc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWcvbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iYXNpYy9fcmVzZXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJhc2ljL3BhZ2UvX3BhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJhc2ljL3BhZ2UvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJhc2ljL3RleHQvX3RleHQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJhc2ljL2hlYWRpbmcvX2hlYWRpbmcuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJhc2ljL2dyaWQtYXV0by1jb2wvX2dyaWQtYXV0by1jb2wuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJhc2ljL2dyaWQtMy1jb2wvX2dyaWQtMy1jb2wuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJhc2ljL2dyaWQtcGFnZS1sYXlvdXQxL19ncmlkLXBhZ2UtbGF5b3V0MS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmFzaWMvZ3JpZC1wYWdlLWxheW91dDIvX2dyaWQtcGFnZS1sYXlvdXQyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iYXNpYy9ncmlkLWdhbGxlcnkvX2dyaWQtZ2FsbGVyeS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmFzaWMvaGVhZGVyL19oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJhc2ljL21haW4vX21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJhc2ljL2Zvb3Rlci9fZm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iYXNpYy9saXN0L19saXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iYXNpYy9idG4vX2J0bi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmFzaWMvYnRuL2J0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJhc2ljL2xpbmsvX2xpbmsuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJhc2ljL3BhZ2luYXRpb24vX3BhZ2luYXRpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJhc2ljL2NvbW1lbnQvX2NvbW1lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJhc2ljL2Zvcm0tZ3JpZC9fZm9ybS1ncmlkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iYXNpYy9pbWctc3ZnL19pbWctc3ZnLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iYXNpYy9pbWctcmFzdGVyL19pbWctcmFzdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iYXNpYy90b29sdGlwL190b29sdGlwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iYXNpYy9pY29ucy9faWNvbnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJhc2ljL2ljb25zIHN5bmMgKHN2Z3xwbmd8anBnKSQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iYXNpYy9pY29ucy9zcHJpdGUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmFzaWMvYnJlYWRjcnVtYi9fYnJlYWRjcnVtYi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmFzaWMvYmFkZ2UvX2JhZGdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iYXNpYy9ibG9ja3F1b3RlL19ibG9ja3F1b3RlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iYXNpYy9jb2RlL19jb2RlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iYXNpYy9oci9faHIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJhc2ljL2VtYmVkL19lbWJlZC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmFzaWMvdGFibGUvX3RhYmxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy5iYXNpYy9sb2FkZXIvX2xvYWRlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmFzaWMvY29udHJvbC9fY29udHJvbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmFzaWMvZm9ybS1ncm91cC9fZm9ybS1ncm91cC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MuYmFzaWMvbmF2L19uYXYuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLmJhc2ljL25hdi1maXhlZC9fbmF2LWZpeGVkLnNjc3MiXSwibmFtZXMiOlsicmVxdWlyZUZpbGVzIiwiciIsImtleXMiLCJmb3JFYWNoIiwicmVxdWlyZSIsInBhZ2VfX3ByZWxvYWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYmFja1RvVG9wQnRuIiwic2Nyb2xsWSIsImJvZHkiLCJzY3JvbGxUb3AiLCJzdHlsZSIsImRpc3BsYXkiLCJzY3JvbGxUbyIsIkVycm9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFZLENBQUNJLEtBQWIsQ0FBbUJDLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ1IsR0FKRDtBQU1BTCxjQUFZLENBQUNILGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQU07QUFDM0NILFlBQVEsQ0FBQ1EsSUFBVCxDQUFjQyxTQUFkLEdBQTBCLENBQTFCLENBRDJDLENBQ2Q7O0FBQzdCUCxVQUFNLENBQUNVLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDRCxHQUhEO0FBSUQsQ0FYRCxNQVlFLE1BQU0sSUFBSUMsS0FBSixDQUFVLHlEQUFWLENBQU4sQzs7Ozs7O0FDZEYsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Qjs7Ozs7O0FDdEJBLGlCQUFpQixxQkFBdUIsb0I7Ozs7OztBQ0F4Qyx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6InNjcmlwdHMuM2IzMGE5ZDUzZGVlMjkzYjY0MmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKioqKioqKioqKipcbiAqIEdSQVBISUNTICpcbiAqKioqKioqKioqKiovXG5mdW5jdGlvbiByZXF1aXJlRmlsZXMocikge1xuICByLmtleXMoKS5mb3JFYWNoKHIpO1xufVxuLy8gcmVxdWlyZSBpbWFnZXNcbnJlcXVpcmVGaWxlcyhyZXF1aXJlLmNvbnRleHQoJy4vaW1nLycsIHRydWUsIC8oc3ZnfHBuZ3xqcGcpJC8pKTtcblxuLyoqKioqKioqKioqKipcbiAqIENTUyBSRVNFVCAqXG4gKioqKioqKioqKioqKi9cbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvX3Jlc2V0LnNjc3MnO1xuXG4vKioqKioqKioqKlxuICogQkxPQ0tTICpcbiAqKioqKioqKioqL1xuLyogVG8gY29udHJvbCB0aGUgQ1NTIGNhc2NhZGUgYW5kIGluaGVyaXRhbmNlIHdoaWxlIGltcG9ydGluZyBibG9ja3MgaW50byB0aGUgcHJvamVjdCwgYWxsIGJsb2NrcyBkaXZpZGVkIGludG8gdHdvIG1haW4gZ3JvdXBzOlxuXG4gICAxLiAqKlBhcmVudCBibG9ja3MqKiAodGhlc2UgYmxvY2tzIHVzdWFsbHksIGFsdGhvdWdoIGl0J3Mgbm90IG9ibGlnYXRvcnksIHNlcnZlIGFzIHBhcmVudCBjb250YWluZXJzIGZvciBcIkNoaWxkIGJsb2Nrc1wiKVxuICAgMi4gKipDaGlsZCBibG9ja3MqKiAodXN1YWxseSwgeW91IGRvbid0IHB1dCBhbnl0aGluZyBpbnNpZGUgdGhlc2UgYmxvY2tzLCBleGNlcHQgdGV4dC4gQmVpbmcgaW1wb3J0ZWQgbGFzdCwgcnVsZXMgaW4gdGhlc2UgYmxvY2tzIG1heSBvdmVycmlkZSBydWxlcyBkZWNsYXJlZCBlYXJsaWVyIGluIFwiUGFyZW50IGJsb2Nrc1wiKVxuXG4qKkRvbid0IGNoYW5nZSB0aGUgb3JkZXIgb2YgYmxvY2tzISoqIEFsdGhvdWdoLCBhbGwgYmxvY2tzIGFyZSBzZWxmLXN1ZmZpY2llbnQgYW5kIGRvbid0IHJlbHkgb24gY2FzY2FkZSBhbmQgaW5oZXJpdGFuY2UsIGluIHNvbWUgcmFyZSBjYXNlcyByZW9yZGVyaW5nIG9mIHRoZWlyIGltcG9ydHMgbWF5IGJyZWFrIG1pbm9yIGRldGFpbHMgbGlrZSBsaW5rIGNvbG9yIG9yIGZvbnQtc2l6ZSwgc28gdG8gYmUgc2FmZSB0cnkgdG8gbWFpbnRhaW4gdGhlIGN1cnJlbnQgYmxvY2tzJyBvcmRlci4gSWYgeW91IGRvbid0IG5lZWQgYSBibG9jayBpbiB5b3VyIGJ1bmRsZSwgY29tbWVudCBpdCBvdXQsIGRvbid0IGRlbGV0ZSBpdCBmcm9tIHRoaXMgZmlsZSwgeW91IG1pZ2h0IG5lZWQgaXQgaW4gdGhlIGZ1dHVyZSAqL1xuXG4vLyBQYXJlbnQgYmxvY2tzXG5cbi8vIHBhZ2VcbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvcGFnZS9fcGFnZS5zY3NzJztcbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvcGFnZS9wYWdlLmpzJztcbi8vIHRleHRcbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvdGV4dC9fdGV4dC5zY3NzJztcbi8vIGhlYWRpbmdcbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvaGVhZGluZy9faGVhZGluZy5zY3NzJztcbi8vIGdyaWQtcmVzcG9uc2l2ZS1jb2xcbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvZ3JpZC1hdXRvLWNvbC9fZ3JpZC1hdXRvLWNvbC5zY3NzJztcbi8vIGdyaWQtaXRlbXMtbGlzdC5zY3NzXG5pbXBvcnQgJy4vYmxvY2tzLmJhc2ljL2dyaWQtMy1jb2wvX2dyaWQtMy1jb2wuc2Nzcyc7XG4vLyBncmlkLWNsYXNzaWNcbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvZ3JpZC1wYWdlLWxheW91dDEvX2dyaWQtcGFnZS1sYXlvdXQxLnNjc3MnO1xuLy8gZ3JpZC0xMmNvbFxuaW1wb3J0ICcuL2Jsb2Nrcy5iYXNpYy9ncmlkLXBhZ2UtbGF5b3V0Mi9fZ3JpZC1wYWdlLWxheW91dDIuc2Nzcyc7XG4vLyBncmlkLWdhbGxlcnlcbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvZ3JpZC1nYWxsZXJ5L19ncmlkLWdhbGxlcnkuc2Nzcyc7XG4vLyBoZWFkZXJcbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvaGVhZGVyL19oZWFkZXIuc2Nzcyc7XG4vLyBtYWluXG5pbXBvcnQgJy4vYmxvY2tzLmJhc2ljL21haW4vX21haW4uc2Nzcyc7XG4vLyBmb290ZXJcbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvZm9vdGVyL19mb290ZXIuc2Nzcyc7XG4vLyBsaXN0XG5pbXBvcnQgJy4vYmxvY2tzLmJhc2ljL2xpc3QvX2xpc3Quc2Nzcyc7XG4vLyBidG5cbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvYnRuL19idG4uc2Nzcyc7XG5pbXBvcnQgJy4vYmxvY2tzLmJhc2ljL2J0bi9idG4uanMnO1xuLy8gbGlua1xuaW1wb3J0ICcuL2Jsb2Nrcy5iYXNpYy9saW5rL19saW5rLnNjc3MnO1xuLy8gcGFnaW5hdGlvblxuaW1wb3J0ICcuL2Jsb2Nrcy5iYXNpYy9wYWdpbmF0aW9uL19wYWdpbmF0aW9uLnNjc3MnO1xuLy8gY29tbWVudFxuaW1wb3J0ICcuL2Jsb2Nrcy5iYXNpYy9jb21tZW50L19jb21tZW50LnNjc3MnO1xuLy8gZm9ybS1ncmlkXG5pbXBvcnQgJy4vYmxvY2tzLmJhc2ljL2Zvcm0tZ3JpZC9fZm9ybS1ncmlkLnNjc3MnO1xuXG4vLyBDaGlsZCBibG9ja3NcblxuLy8gaW1hZ2Utc3ZnXG5pbXBvcnQgJy4vYmxvY2tzLmJhc2ljL2ltZy1zdmcvX2ltZy1zdmcuc2Nzcyc7XG4vLyBpbWFnZS1yYXN0ZXJcbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvaW1nLXJhc3Rlci9faW1nLXJhc3Rlci5zY3NzJztcbi8vIHRvb2x0aXBcbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvdG9vbHRpcC9fdG9vbHRpcC5zY3NzJztcbi8vIGljb25cbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvaWNvbnMvX2ljb25zLnNjc3MnO1xucmVxdWlyZUZpbGVzKHJlcXVpcmUuY29udGV4dCgnLi9ibG9ja3MuYmFzaWMvaWNvbnMvJywgdHJ1ZSwgLyhzdmd8cG5nfGpwZykkLykpO1xuLy8gYnJlYWRjcnVtYnNcbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvYnJlYWRjcnVtYi9fYnJlYWRjcnVtYi5zY3NzJztcbi8vIGJhZGdlXG5pbXBvcnQgJy4vYmxvY2tzLmJhc2ljL2JhZGdlL19iYWRnZS5zY3NzJztcbi8vIGJsb2NrcXVvdGVcbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvYmxvY2txdW90ZS9fYmxvY2txdW90ZS5zY3NzJztcbi8vIGNvZGVcbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvY29kZS9fY29kZS5zY3NzJztcbi8vIGhyXG5pbXBvcnQgJy4vYmxvY2tzLmJhc2ljL2hyL19oci5zY3NzJztcbi8vIG1lZGlhIGNvbnRlbnRcbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvZW1iZWQvX2VtYmVkLnNjc3MnO1xuLy8gdGFibGVcbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvdGFibGUvX3RhYmxlLnNjc3MnO1xuLy8gbG9hZGVyXG5pbXBvcnQgJy4vYmxvY2tzLmJhc2ljL2xvYWRlci9fbG9hZGVyLnNjc3MnO1xuLy8gY29udHJvbFxuaW1wb3J0ICcuL2Jsb2Nrcy5iYXNpYy9jb250cm9sL19jb250cm9sLnNjc3MnO1xuLy8gcmVxdWlyZUZpbGVzKHJlcXVpcmUuY29udGV4dCgnLi9ibG9ja3MuYmFzaWMvY29udHJvbCcsIHRydWUsIC8oc3ZnfHBuZ3xqcGcpJC8pKTtcbi8vIGZvcm0tZ3JvdXBcbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvZm9ybS1ncm91cC9fZm9ybS1ncm91cC5zY3NzJztcbi8vIG5hdlxuaW1wb3J0ICcuL2Jsb2Nrcy5iYXNpYy9uYXYvX25hdi5zY3NzJztcbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvbmF2L25hdi5qcyc7XG4vLyBuYXYtZm94ZWRcbmltcG9ydCAnLi9ibG9ja3MuYmFzaWMvbmF2LWZpeGVkL19uYXYtZml4ZWQuc2Nzcyc7XG4vL2hhbWJ1cmdlci1tZW51XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYW5pbWFsc19sYW5kc2NhcGVfbGcuanBnXCI6IDIsXG5cdFwiLi9hbmltYWxzX2xhbmRzY2FwZV9tZC5qcGdcIjogMyxcblx0XCIuL2FuaW1hbHNfbGFuZHNjYXBlX3NtLmpwZ1wiOiA0LFxuXHRcIi4vYW5pbWFsc19sYW5kc2NhcGVfeGwuanBnXCI6IDUsXG5cdFwiLi9hbmltYWxzX2xhbmRzY2FwZV94eGwuanBnXCI6IDYsXG5cdFwiLi9hbmltYWxzX2xhbmRzY2FwZV94eHhsLmpwZ1wiOiA3LFxuXHRcIi4vYmlzY3VpdC1sb2dvLWJsYWNrLnN2Z1wiOiA4LFxuXHRcIi4vYmlzY3VpdC1sb2dvLXdoaXRlLnN2Z1wiOiA5LFxuXHRcIi4vYmlzY3VpdC1zeW1ib2wuc3ZnXCI6IDEwLFxuXHRcIi4vZnVsbHNjcmVlbi1pbWFnZS5qcGdcIjogMTEsXG5cdFwiLi9ob3ctaXQtd29ya3Muc3ZnXCI6IDEyLFxuXHRcIi4vbG9nby5zdmdcIjogMTNcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hbmltYWxzX2xhbmRzY2FwZV9sZy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYW5pbWFsc19sYW5kc2NhcGVfbWQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3NtLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hbmltYWxzX2xhbmRzY2FwZV94bC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYW5pbWFsc19sYW5kc2NhcGVfeHhsLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hbmltYWxzX2xhbmRzY2FwZV94eHhsLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9iaXNjdWl0LWxvZ28tYmxhY2suc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Jpc2N1aXQtbG9nby13aGl0ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYmlzY3VpdC1zeW1ib2wuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Z1bGxzY3JlZW4taW1hZ2UuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2hvdy1pdC13b3Jrcy5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbG9nby5zdmdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCBwYWdlX19wcmVsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfX3ByZWxvYWQnKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICdsb2FkJyxcbiAgKCkgPT4ge1xuICAgIHBhZ2VfX3ByZWxvYWQuY2xhc3NMaXN0LnJlbW92ZSgncGFnZV9fcHJlbG9hZCcpO1xuICB9LFxuICBmYWxzZVxuKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0IGJhY2tUb1RvcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fdHlwZV9iYWNrLXRvLXRvcCcpO1xuXG5pZiAoYmFja1RvVG9wQnRuKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID49IDYwIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID49IDYwKSB7XG4gICAgICBiYWNrVG9Ub3BCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIGJhY2tUb1RvcEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcblxuICBiYWNrVG9Ub3BCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwOyAvLyBmb3IgU2FmYXJpXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICB9KTtcbn0gZWxzZVxuICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGlzIG5vIFwiLmJhY2tUb1RvcEJ0blwiIGNsYXNzIGluIHlvdXIgSFRNTCBkb2N1bWVudCcpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIG1hcCA9IHtcblx0XCIuL3Nwcml0ZS5zdmdcIjogMzlcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAzODsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvc3ByaXRlLnN2Z1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=