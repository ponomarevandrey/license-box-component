/************
 * GRAPHICS *
 ************/
function requireFiles(r) {
  r.keys().forEach(r);
}
// require images
requireFiles(require.context('./img/', true, /(svg|png|jpg)$/));

/*************
 * CSS RESET *
 *************/
import './../node_modules/biscuit-blocks-lib/_reset.scss';

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
//import './../node_modules/biscuit-blocks-lib/page/_page.scss';
//import './../node_modules/biscuit-blocks-lib/page/page.js';
// text
import './../node_modules/biscuit-blocks-lib/text/_text.scss';
// heading
import './../node_modules/biscuit-blocks-lib/heading/_heading.scss';
// grid-responsive-col
import './../node_modules/biscuit-blocks-lib/grid-auto-col/_grid-auto-col.scss';
// grid-gallery
import './../node_modules/biscuit-blocks-lib/grid-gallery/_grid-gallery.scss';
// list
import './../node_modules/biscuit-blocks-lib/list/_list.scss';
// btn
import './../node_modules/biscuit-blocks-lib/btn/_btn.scss';
import './../node_modules/biscuit-blocks-lib/btn/btn.js';
// link
import './../node_modules/biscuit-blocks-lib/link/_link.scss';
// pagination
import './../node_modules/biscuit-blocks-lib/pagination/_pagination.scss';
// comment
import './../node_modules/biscuit-blocks-lib/comment/_comment.scss';
// grid-forms
import './../node_modules/biscuit-blocks-lib/grid-forms/_grid-forms.scss';

// Child blocks

// image-svg
// import './../node_modules/biscuit-blocks-lib/img-svg/_img-svg.scss';
// image-raster
import './../node_modules/biscuit-blocks-lib/img-raster/_img-raster.scss';
// tooltip
import './../node_modules/biscuit-blocks-lib/tooltip/_tooltip.scss';
// icon
import './../node_modules/biscuit-blocks-lib/icons/_icons.scss';
requireFiles(
  require.context(
    './../node_modules/biscuit-blocks-lib/icons/',
    true,
    /(svg|png|jpg)$/
  )
);
// breadcrumbs
import './../node_modules/biscuit-blocks-lib/breadcrumb/_breadcrumb.scss';
// badge
import './../node_modules/biscuit-blocks-lib/badge/_badge.scss';
// blockquote
import './../node_modules/biscuit-blocks-lib/blockquote/_blockquote.scss';
// code
import './../node_modules/biscuit-blocks-lib/code/_code.scss';
// hr
import './../node_modules/biscuit-blocks-lib/hr/_hr.scss';
// label
import './../node_modules/biscuit-blocks-lib/label/_label.scss';
// media content
import './../node_modules/biscuit-blocks-lib/embed/_embed.scss';
// table
import './../node_modules/biscuit-blocks-lib/table/_table.scss';
// loader
import './../node_modules/biscuit-blocks-lib/loader/_loader.scss';
// control
import './../node_modules/biscuit-blocks-lib/control/_control.scss';
// delete this : requireFiles(require.context('./../node_modules/biscuit-blocks-lib/control', true, /(svg|png|jpg)$/));
// form-group
import './../node_modules/biscuit-blocks-lib/form-group/_form-group.scss';
// nav
import './../node_modules/biscuit-blocks-lib/nav/_nav.scss';
import './../node_modules/biscuit-blocks-lib/nav/nav.js';
// nav-fixed
import './../node_modules/biscuit-blocks-lib/nav-fixed/_nav-fixed.scss';
// select
import './../node_modules/biscuit-blocks-lib/select/_select.scss';
// accordeon
import './../node_modules/biscuit-blocks-lib/accordion/_accordion.scss';
import './../node_modules/biscuit-blocks-lib/accordion/accordion.js';
//hamburger-menu

/***************** Redefinition level 'blocks' *******************/

// Project-specific blocks

// grid-classic
import './blocks/grid-page-layout1/_grid-page-layout1.scss';
// grid-12col
import './blocks/grid-page-layout2/_grid-page-layout2.scss';
// main
import './blocks/main/_main.scss';
// header
import './blocks/header/_header.scss';
// footer
import './blocks/footer/_footer.scss';
// fulscreen-bg
import './blocks/fullscreen-bg/_fullscreen-bg.scss';

import './blocks/img-slider/_img-slider.scss';
import './blocks/img-slider/img-slider.js';
