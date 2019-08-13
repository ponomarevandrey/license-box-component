//-
  img(src='./../img/photo.jpg' class='image image_align_center' alt='Cat Sleeping In The Sun' )     
   
figure
  //- read anout picture tag: 
  //- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
  <picture> 
    <source
      type="image/jpg"
      media="(min-width: 1280px)"
      sizes="min-width: 0) calc(100vw - 40px), 
            (min-width: 480px) 90vw, 
            (min-width: 768px) 90vw,
            (min-width: 992px) 90vw,
            (min-width: 1200px) 90vw,
            (min-width: 1800px) 90vw, 100vw"
      //- for solving 'art direction' problem, you can provide different 
      //- images in srcset property below 
      //- (e.g. cropped in photoshop version of image for small screen,
      //- and full original size for big screen)
      srcset="image-landscape-200.jpg 200w,
          image-landscape-400.jpg 400w,
          image-landscape-800.jpg 800w,
          image-landscape-1200.jpg 1200w,
          image-landscape-1600.jpg 1600w,
          image-landscape-2000.jpg 2000w">
    <img
      //- 'src' is a fallback value for browsers which doesn't support
      //- 'sizes' and 'srcset' attributes
      src="image-portrait-400.jpg" 
      
      alt="what is on the image"
      title='The value of the title attribute is usually presented to the user as a tooltip, which appears shortly after the cursor stops moving over the image'

      //- the width of the image that would best fit the layout 
      //- under different media conditions:
      //- (the last value - 100vw - is default width,
      //- it applies when none of the media conditions match)
      //-
      //- sizes = [media querie] [display the image chosen 
      //- from 'srcset' at this size]
      sizes="(min-width: 0) calc(100vw - 40px), 
            (min-width: 480px) 90vw, 
            (min-width: 768px) 90vw,
            (min-width: 992px) 90vw,
            (min-width: 1200px) 90vw,
            (min-width: 1800px) 90vw, 100vw"
      
      //- provide the browser with variants of an image 
      //- to choose from for downloading (which one will it pick 
      //- depends on 'sizes' attribute above). 
      //-
      //- srcset = [image address] [image file original width]
      srcset="image-portrait-200.jpg 200w,
          image-portrait-400.jpg 400w,
          image-portrait-800.jpg 800w,
          image-portrait-1200.jpg 1200w,
          image-portrait-1600.jpg 1600w,
          image-portrait-2000.jpg 2000w">
  </picture>
  figcaption.
    Image description or any other text related to this image. Don't dublicate here 'alt' text!
