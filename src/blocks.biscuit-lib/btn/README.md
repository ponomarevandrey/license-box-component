# How to use

```pug
  //- back to top button 
  button(type='button' class='btn btn_type_back-to-top' title='Go to top') Top
```

```pug
  //- <a> button
  //- enabled
  a(class='btn btn_theme_black btn_size_md' href='###') Text
  //- disabled
  a(class='btn btn_theme_black btn_size_md btn_disabled' href='###') Text
```

```pug
  //- <button> button
  //- enabled
  button(type='button' class='btn btn_theme_black btn_size_md') Text
  //- disabled
  button(class='btn btn_theme_black btn_size_md btn_disabled' disabled) Text
```

```pug
  //- <input> button
  //- enabled
  input(type='button' value='' class='btn btn_theme_black btn_size_md') Text 
  //- disabled
  input(type='button' value='' class='btn btn_theme_black btn_size_md btn_disabled' disabled) Text
```