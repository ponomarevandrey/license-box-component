/* eslint-disable no-undef */

/************
 * GRAPHICS *
 ************/
function requireFiles(r) {
  r.keys().forEach(r);
}
// require images
// eslint-disable-next-line no-undef
requireFiles(require.context('./img/', true, /(svg|png|jpg)$/));

/*************
 * CSS RESET *
 *************/
import './blocks.basic/_reset.scss';

/**************
 * COMPONENTS *
 **************/
/* The order of components is from biggest to smallest.

Don't change their precedence cause some of components rely on cascade so reordering may break he trules. For now, the only component that is really depends on cascade is 'tooltip'  -line-height property of 'tooltip' reassigns line-height propery of 'text' block 

If you don't need a component, don't delete it from this file, just comment it out' */

// 'Global' blocks:
// (blocks often serving as a parent container for other blocks)
// page
import './blocks.basic/page/_page.scss';
import './blocks.basic/page/page.js';
// grid-responsive-col
import './blocks.basic/grid-auto-col/_grid-auto-col.scss';
// grid-items-list.scss
import './blocks.basic/grid-3-col/_grid-3-col.scss';
// grid-classic
import './blocks.basic/grid-page-layout1/_grid-page-layout1.scss';
// grid-12col
import './blocks.basic/grid-page-layout2/_grid-page-layout2.scss';
// grid-gallery
import './blocks.basic/grid-gallery/_grid-gallery.scss';
// header
import './blocks.basic/header/_header.scss';
// main
import './blocks.basic/main/_main.scss';
// footer
import './blocks.basic/footer/_footer.scss';
// text
import './blocks.basic/text/_text.scss';
// heading
import './blocks.basic/heading/_heading.scss';
// list
import './blocks.basic/list/_list.scss';
// btn
import './blocks.basic/btn/_btn.scss';
// link
import './blocks.basic/link/_link.scss';
// pagination
import './blocks.basic/pagination/_pagination.scss';
// comment
import './blocks.basic/comment/_comment.scss';
// control
import './blocks.basic/control/_control.scss';
requireFiles(require.context('./blocks.basic/control', true, /(svg|png|jpg)$/));
// form-group
import './blocks.basic/form-group/_form-group.scss';

// Small blocks:
// (usually, you don't put anything inside these blocks, except text)
// image-svg
import './blocks.basic/img-svg/_img-svg.scss';
// image-raster
import './blocks.basic/img-raster/_img-raster.scss';
// tooltip
import './blocks.basic/tooltip/_tooltip.scss';
// icon
import './blocks.basic/icons/_icons.scss';
requireFiles(require.context('./blocks.basic/icons/', true, /(svg|png|jpg)$/));
// breadcrumbs
import './blocks.basic/breadcrumb/_breadcrumb.scss';
// badge
import './blocks.basic/badge/_badge.scss';
// backToTopBtn
import './blocks.basic/back-to-top-btn/_back-to-top-btn.scss';
import './blocks.basic/back-to-top-btn/back-to-top-btn.js';
// blockquote
import './blocks.basic/blockquote/_blockquote.scss';
// code
import './blocks.basic/code/_code.scss';
// hr
import './blocks.basic/hr/_hr.scss';
// media content
import './blocks.basic/embed/_embed.scss';
// table
import './blocks.basic/table/_table.scss';
// loader
import './blocks.basic/loader/_loader.scss';
// nav
import './blocks.basic/nav/_nav.scss';
import './blocks.basic/nav/nav.js';
// nav-foxed
import './blocks.basic/nav-fixed/_nav-fixed.scss';
//hamburger-menu
