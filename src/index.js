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
// demo
import './components/demo/_demo.scss';

//form
//hamburger-menu

//icon
import './components/icons/_icons.scss';
// breadcrumbs
import './components/breadcrumbs/_breadcrumbs.scss';
// label
import './components/label/_label.scss';
// backToTopBtn
import './components/backToTopBtn/_backToTopBtn.scss';
import './components/backToTopBtn/backToTopBtn.js';
// blockquote
import './components/blockquote/_blockquote.scss';
// page
import './components/page/_page.scss';
import './components/page/page.js';
// grid
import './components/grid/_grid.scss';
// image-svg
import './components/img-svg/_img-svg.scss';
// image
import './components/img-raster/_img-raster.scss';
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
// code
import './components/code/_code.scss';
// hr
import './components/hr/_hr.scss';
// pagination
import './components/pagination/_pagination.scss';
