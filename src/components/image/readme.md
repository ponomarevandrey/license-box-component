If you need advanced responsive image (handling art direction problem and/or providing different image extensions) add the following code inside `picture(class='image__wrapper')` element in `.pug` file:

```html
    //- 
      traditionally solves art direction problem (but most of the time the including of <img> tag with 'srcset' attribute is sufficient, that's why I hide this block; uncomment and use it if you need; also check out https://stackoverflow.com/questions/31848576/html-picture-or-srcset-for-responsive-images):
    //- 
      add more <source> tags if you need to provide alternative 
      image types (WEBP for example)  
    //-
      media="(min-width: 1280px)" means 320px on a 4x display 
      (the S7 Edge) would be 1280px

    source(
      type="image/jpg" 
      media="(min-width: 600px)" 
      srcset=`${urlLandscapeSM} ${widthSM}w, 
              ${urlLandscapeMD} ${widthMD}w, 
              ${urlLandscapeLG} ${widthLG}w, 
              ${urlLandscapeXL} ${widthXL}w, 
              ${urlLandscapeXXL} ${widthXXL}w, 
              ${urlLandscapeXXXL} ${widthXXXL}w`)
              
    source(
      type="image/jpg" 
      media="(min-width: 1200px)" 
      srcset=`${urlLandscapeSM} ${widthSM}w, 
              ${urlLandscapeMD} ${widthMD}w, 
              ${urlLandscapeLG} ${widthLG}w, 
              ${urlLandscapeXL} ${widthXL}w, 
              ${urlLandscapeXXL} ${widthXXL}w, 
              ${urlLandscapeXXXL} ${widthXXXL}w`)
              
    source(
      type="image/jpg" 
      media="(min-width: 1800px)" 
      srcset=`${urlLandscapeSM} ${widthSM}w, 
              ${urlLandscapeMD} ${widthMD}w, 
              ${urlLandscapeLG} ${widthLG}w, 
              ${urlLandscapeXL} ${widthXL}w, 
              ${urlLandscapeXXL} ${widthXXL}w, 
              ${urlLandscapeXXXL} ${widthXXXL}w`)
```
