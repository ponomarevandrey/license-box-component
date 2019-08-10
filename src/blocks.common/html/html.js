/*
 * fix Google Chrome bug: prevent firing css transition on page loading
 * the bug happens whenever you don’t have any script tags on the page
 */
const html__preload = document.querySelector('.html__preload');

window.addEventListener(
  'load',
  () => {
    html__preload.classList.remove('html__preload');
  },
  false
);
