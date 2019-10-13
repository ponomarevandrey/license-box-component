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

import './blocks.biscuit-lib/page/_page.scss';
import './blocks.biscuit-lib/page/page.js';

import './blocks.biscuit-lib/text/_text.scss';

import './blocks.biscuit-lib/heading/_heading.scss';

import './blocks.biscuit-lib/grid-auto-col/_grid-auto-col.scss';

import './blocks.biscuit-lib/grid-gallery/_grid-gallery.scss';

import './blocks.biscuit-lib/list/_list.scss';

import './blocks.biscuit-lib/btn/_btn.scss';
import './blocks.biscuit-lib/btn/btn.js';

import './blocks.biscuit-lib/link/_link.scss';

import './blocks.biscuit-lib/pagination/_pagination.scss';

import './blocks.biscuit-lib/comment/_comment.scss';

import './blocks.biscuit-lib/grid-forms/_grid-forms.scss';

// Child blocks

import './blocks.biscuit-lib/img-svg/_img-svg.scss';

import './blocks.biscuit-lib/img-raster/_img-raster.scss';

import './blocks.biscuit-lib/tooltip/_tooltip.scss';

import './blocks.biscuit-lib/icons/_icons.scss';
requireFiles(
  require.context('./blocks.biscuit-lib/icons/', true, /(svg|png|jpg)$/)
);

import './blocks.biscuit-lib/breadcrumb/_breadcrumb.scss';

import './blocks.biscuit-lib/badge/_badge.scss';

import './blocks.biscuit-lib/blockquote/_blockquote.scss';

import './blocks.biscuit-lib/code/_code.scss';

import './blocks.biscuit-lib/hr/_hr.scss';

import './blocks.biscuit-lib/label/_label.scss';

import './blocks.biscuit-lib/embed/_embed.scss';

import './blocks.biscuit-lib/table/_table.scss';

import './blocks.biscuit-lib/loader/_loader.scss';

import './blocks.biscuit-lib/control/_control.scss';
// delete this : requireFiles(require.context('.blocks.biscuit-libb/control', true, /(svg|png|jpg)$/));

import './blocks.biscuit-lib/form-group/_form-group.scss';

import './blocks.biscuit-lib/nav/_nav.scss';
import './blocks.biscuit-lib/nav/nav.js';

import './blocks.biscuit-lib/nav-fixed/_nav-fixed.scss';

import './blocks.biscuit-lib/select/_select.scss';

import './blocks.biscuit-lib/accordion/_accordion.scss';
import './blocks.biscuit-lib/accordion/accordion.js';

/***************** Redefinition level 'blocks' *******************/

// Project-specific blocks

import './blocks/grid-page-layout1/_grid-page-layout1.scss';

import './blocks/grid-page-layout2/_grid-page-layout2.scss';

import './blocks/main/_main.scss';

import './blocks/header/_header.scss';

import './blocks/footer/_footer.scss';

import './blocks/fullscreen-bg/_fullscreen-bg.scss';

import './blocks/img-slider/_img-slider.scss';
import './blocks/img-slider/img-slider.js';
