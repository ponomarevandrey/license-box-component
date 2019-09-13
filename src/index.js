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
import './blocks.basic/_reset.scss';

/**********
 * BLOCKS *
 **********/
/* To control the CSS cascade and inheritance while importing blocks into the project, all blocks divided into two main groups:

   1. **Parent blocks** (these blocks usually, although it's not obligatory, serve as parent containers for "Child blocks")
   2. **Child blocks** (usually, you don't put anything inside these blocks, except text. Being imported last, rules in these blocks may override rules declared earlier in "Parent blocks")

**Don't change the order of blocks!** Although, all blocks are self-sufficient and don't rely on cascade and inheritance, in some rare cases reordering of their imports may break minor details like link color or font-size, so to be safe try to maintain the current blocks' order. If you don't need a block in your bundle, comment it out, don't delete it from this file, you might need it in the future */

// Parent blocks

// page
import './blocks.basic/page/_page.scss';
import './blocks.basic/page/page.js';
// text
import './blocks.basic/text/_text.scss';
// heading
import './blocks.basic/heading/_heading.scss';
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
// list
import './blocks.basic/list/_list.scss';
// btn
import './blocks.basic/btn/_btn.scss';
import './blocks.basic/btn/btn.js';
// link
import './blocks.basic/link/_link.scss';
// pagination
import './blocks.basic/pagination/_pagination.scss';
// comment
import './blocks.basic/comment/_comment.scss';
// form-grid
import './blocks.basic/form-grid/_form-grid.scss';

// Child blocks

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
// blockquote
import './blocks.basic/blockquote/_blockquote.scss';
// code
import './blocks.basic/code/_code.scss';
// hr
import './blocks.basic/hr/_hr.scss';
// label
import './blocks.basic/label/_label.scss';
// media content
import './blocks.basic/embed/_embed.scss';
// table
import './blocks.basic/table/_table.scss';
// loader
import './blocks.basic/loader/_loader.scss';
// control
import './blocks.basic/control/_control.scss';
// requireFiles(require.context('./blocks.basic/control', true, /(svg|png|jpg)$/));
// form-group
import './blocks.basic/form-group/_form-group.scss';
// nav
import './blocks.basic/nav/_nav.scss';
import './blocks.basic/nav/nav.js';
// nav-foxed
import './blocks.basic/nav-fixed/_nav-fixed.scss';
//hamburger-menu
