const backToTopBtn = document.querySelector('.backToTopBtn');

if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY >= 60 || document.body.scrollTop >= 60) {
      backToTopBtn.style.display = 'block';
    } else backToTopBtn.style.display = 'none';
  });

  backToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0; // for Safari
    //window.scrollY = 0;
    window.scrollTo(0, 0);
    console.log('fd');
  });
} else
  throw new Error('There is no ".backToTopBtn" class in your HTML document');
