# How to use

```pug
+text('text text_display_block text_size_xl').
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the #[+text('text text_display_inline text_color_success') 1500s], when an unknown printer took a galley of type and scrambled it to make a type specimen book.

+text('text text_display_block text_color_danger text_line-height_sm').
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

  #[+text('text text_display_inline text_style_italic') Text]
  #[+text('text text_display_inline text_style_bold') Text]
```
