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
import './blocks.biscuit-lib/_reset.scss';

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
import './blocks.biscuit-lib/page/_page.scss';
import './blocks.biscuit-lib/page/page.js';
// text
import './blocks.biscuit-lib/text/_text.scss';
// heading
import './blocks.biscuit-lib/heading/_heading.scss';
// grid-responsive-col
import './blocks.biscuit-lib/grid-auto-col/_grid-auto-col.scss';
// grid-gallery
import './blocks.biscuit-lib/grid-gallery/_grid-gallery.scss';
// fulscreen-bg
import './blocks.biscuit-lib/fullscreen-bg/_fullscreen-bg.scss';
import './blocks.biscuit-lib/list/_list.scss';
// btn
import './blocks.biscuit-lib/btn/_btn.scss';
import './blocks.biscuit-lib/btn/btn.js';
// link
import './blocks.biscuit-lib/link/_link.scss';
// pagination
import './blocks.biscuit-lib/pagination/_pagination.scss';
// comment
import './blocks.biscuit-lib/comment/_comment.scss';
// grid-forms
import './blocks.biscuit-lib/grid-forms/_grid-forms.scss';

// Child blocks

// image-svg
import './blocks.biscuit-lib/img-svg/_img-svg.scss';
// image-raster
import './blocks.biscuit-lib/img-raster/_img-raster.scss';
// tooltip
import './blocks.biscuit-lib/tooltip/_tooltip.scss';
// icon
import './blocks.biscuit-lib/icons/_icons.scss';
requireFiles(
  require.context('./blocks.biscuit-lib/icons/', true, /(svg|png|jpg)$/)
);
// breadcrumbs
import './blocks.biscuit-lib/breadcrumb/_breadcrumb.scss';
// badge
import './blocks.biscuit-lib/badge/_badge.scss';
// blockquote
import './blocks.biscuit-lib/blockquote/_blockquote.scss';
// code
import './blocks.biscuit-lib/code/_code.scss';
// hr
import './blocks.biscuit-lib/hr/_hr.scss';
// label
import './blocks.biscuit-lib/label/_label.scss';
// media content
import './blocks.biscuit-lib/embed/_embed.scss';
// table
import './blocks.biscuit-lib/table/_table.scss';
// loader
import './blocks.biscuit-lib/loader/_loader.scss';
// control
import './blocks.biscuit-lib/control/_control.scss';
// requireFiles(require.context('./blocks.biscuit-lib/control', true, /(svg|png|jpg)$/));
// form-group
import './blocks.biscuit-lib/form-group/_form-group.scss';
// nav
import './blocks.biscuit-lib/nav/_nav.scss';
import './blocks.biscuit-lib/nav/nav.js';
// nav-fixed
import './blocks.biscuit-lib/nav-fixed/_nav-fixed.scss';
// select
import './blocks.biscuit-lib/select/_select.scss';
// accordeon
import './blocks.biscuit-lib/accordion/_accordion.scss';
import './blocks.biscuit-lib/accordion/accordion.js';
//hamburger-menu

/******************** Redefinition level 'blocks.docs' ***********************/

// promo
import './blocks.docs/promo/_promo.scss';

/***************** Redefinition level 'blocks.new-project' *******************/

// grid-classic
import './blocks.new-proj/grid-page-layout1/_grid-page-layout1.scss';
// grid-12col
import './blocks.new-proj/grid-page-layout2/_grid-page-layout2.scss';
// main
import './blocks.new-proj/main/_main.scss';
// header
import './blocks.new-proj/header/_header.scss';
// footer
import './blocks.new-proj/footer/_footer.scss';
// list
