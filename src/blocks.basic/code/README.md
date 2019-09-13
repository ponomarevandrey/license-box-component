# How to use

- inline code:

```pug
Lorem Ipsum #[+code( `console.log( a ) !!!;`, 'code code_display_inline text text_size_sm code_theme_gray' ) ] Lorem Ipsum
```

- block code:
```pug
+code( 
`window.addEventListener( 'load', => {
  console.log('Ready');
})}`,
        
'code code_display_block text text_size_sm code_theme_gray')
```
