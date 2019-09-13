`img-svg` component can be implemented in one of three ways:

- `<img src='...'>` tag
```pug
+img-svg('img', './../img/logo.svg', 'Logoipsum logo', 'Logoipsum')
```

- `<div>` tag with css `background-image`. If you need more then one `img-svg`, implement new instances of `img-svg` right in the SASS file, as block modifiers (`img-svg_bg1`, `img-svg_bg2`, ...) and use `classList` parameter of mixin to add new modifiers
```pug
+img-svg('div')
```

- and if you need interactivity, use SVG with the help of `<object>` tag
```pug
+img-svg('object', './../img/logo.svg')
```