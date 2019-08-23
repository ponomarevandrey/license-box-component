/* eslint-disable no-undef */

/************
 * GRAPHICS *
 ************/
function requireAllFiles(r) {
  r.keys().forEach(r);
}
// require images
// eslint-disable-next-line no-undef
requireAllFiles(require.context('./img/', true, /(svg|png|jpg)$/));
requireAllFiles(require.context('./components/', true, /(svg|png|jpg)$/));

/*************
 * CSS RESET *
 *************/
import './components/_reset.scss';

/**************
 * COMPONENTS *
 **************/
/* The order of components is from biggest to smallest. 

Don't change their s precedence cause some of components rely on cascade so reordering may break the trules. For now, the only component that is really depends on cascade is 'tooltip'  -line-height property of 'tooltip' reassigns line-height propery of 'text' block */

// demo
import './components/demo/_demo.scss';

// 'Global' blocks:
// (blocks often serving as a parent container for other blocks)
// page
import './components/page/_page.scss';
import './components/page/page.js';
// grid
import './components/grid/_grid.scss';
// header
import './components/header/_header.scss';
// text
import './components/text/_text.scss';
// heading
import './components/heading/_heading.scss';
// list
import './components/list/_list.scss';
// btn
import './components/btn/_btn.scss';
// link
import './components/link/_link.scss';
// pagination
import './components/pagination/_pagination.scss';

// Small blocks:
// (usually, you don't put anything inside these blocks, except text)
// image-svg
import './components/img-svg/_img-svg.scss';
// image
import './components/img-raster/_img-raster.scss';
// tooltip
import './components/tooltip/_tooltip.scss';
// icon
import './components/icons/_icons.scss';
// breadcrumbs
import './components/breadcrumbs/_breadcrumbs.scss';
// label
import './components/label/_label.scss';
// backToTopBtn
import './components/back-to-top-btn/_back-to-top-btn.scss';
import './components/back-to-top-btn/back-to-top-btn.js';
// blockquote
import './components/blockquote/_blockquote.scss';
// code
import './components/code/_code.scss';
// hr
import './components/hr/_hr.scss';
// media content
import './components/media-content/_media-content.scss';
// table
import './components/table/_table.scss';
// loader
import './components/loader/_loader.scss';
// toggle switch
import './components/toggle-switch/_toggle-switch.scss';
// checkbox
import './components/checkbox/_checkbox.scss';
// radio-btn
import './components/radio-btn/_radio-btn.scss';
//form
//hamburger-menu
