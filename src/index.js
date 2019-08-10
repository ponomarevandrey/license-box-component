/*************
 * CSS RESET *
 *************/
import './_reset.scss';

/**********
 * BLOCKS *
 **********/

// Redefinition Level: blocks.common

// html
import './blocks.common/html/_html.scss';
import './blocks.common/html/html.js';
// main
import './blocks.common/main/_main.scss';
// section
import './blocks.common/section/section.js';
// paragraph
import './blocks.common/text/_text.scss';
// demo
import './blocks.common/demo/_demo.scss';
// heading
import './blocks.common/heading/_heading.scss';
// list
import './blocks.common/list/_list.scss';
// link
import './blocks.common/link/_link.scss';
// code
import './blocks.common/code/_code.scss';
// image
import './blocks.common/image/_image.scss';
// pre
import './blocks.common/pre/_pre.scss';
// footer
import './blocks.common/footer/_footer.scss';

// Redefinition Level: blocks.touch

// header
// import './blocks.demo/header/_header.scss';

/************
 * GRAPHICS *
 ************/

function requireAllFiles(r) {
  r.keys().forEach(r);
}

// require all images
requireAllFiles(require.context('./img/', true, /(svg|png|jpg)$/));
