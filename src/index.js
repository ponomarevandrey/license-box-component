/************
 * GRAPHICS *
 ************/
function requireAllFiles(r) {
  r.keys().forEach(r);
}
// require images
requireAllFiles(require.context('./img/', true, /(svg|png|jpg)$/));

/*************
 * CSS RESET *
 *************/
import './components/_reset.scss';

/**************
 * COMPONENTS *
 **************/
// page
import './components/page/_page.scss';
import './components/page/page.js';

//image
// grid
import './components/grid/_grid.scss';
//form
//hamburger-menu
//icon

// text
import './components/text/_text.scss';
// demo
import './components/demo/_demo.scss';
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
// image
import './components/image/_image.scss';
requireAllFiles(require.context('./components/image/', true, /(svg|png|jpg)$/));
// hr
import './components/hr/_hr.scss';
