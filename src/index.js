/************
 * GRAPHICS *
 ************/
function requireAllFiles(r) {
  r.keys().forEach(r);
}
// require images
// eslint-disable-next-line no-undef
requireAllFiles(require.context('./img/', true, /(svg|png|jpg)$/));

/*************
 * CSS RESET *
 *************/
import './components/_reset.scss';

/**************
 * COMPONENTS *
 **************/
// demo
import './components/demo/_demo.scss';

//form
//hamburger-menu
//icon
// blockquote
import './components/blockquote/_blockquote.scss';
// page
import './components/page/_page.scss';
import './components/page/page.js';
// grid
import './components/grid/_grid.scss';
// image-svg
import './components/image-svg/_image-svg.scss';
// image
import './components/image-raster/_image-raster.scss';
// header
import './components/header/_header.scss';
// text
import './components/text/_text.scss';
// heading
import './components/heading/_heading.scss';
// list
import './components/list/_list.scss';
// button
import './components/button/_button.scss';
// link
import './components/link/_link.scss';
// code
import './components/code/_code.scss';
// hr
import './components/hr/_hr.scss';
