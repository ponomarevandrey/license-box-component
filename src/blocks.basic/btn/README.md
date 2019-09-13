# How to use

- `<a>` button
```pug
+btn(
  { 
    tag: 'a', 
    text: 'a href Button', 
    url: '###', 
    state: 'enabled' 
  },
  'btn btn_theme_black btn_size_md'
)

+btn(
  { 
    tag: 'a', 
    text: 'a href Button disabled', 
    url: '###', 
    state: 'disabled' 
  },
  'btn btn_theme_black btn_size_md')
```

- `<button>` button
```pug
+btn(
  { 
    tag: 'button', 
    text: 'button Button', 
    url: '###', 
    state: 'enabled' 
  },
  'btn btn_theme_black btn_size_md'
)

+btn(
  { 
    tag: 'button', 
    text: 'button Button disabled', 
    url: '###', 
    state: 'disabled' 
  },
  'btn btn_theme_black btn_size_md'
)
```

- `<input>`button
```pug
+btn(
  { 
    tag: 'input', 
    text: 'input Button', 
    url: '###', 
    state: 'enabled' 
  },
  'btn btn_theme_black btn_size_md'
)

+btn(
  { 
    tag: 'input', 
    text: 'input Button', 
    url: '###',  
    url: 'disabled' 
  },
  'btn btn_theme_black btn_size_md'
)
```