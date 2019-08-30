**`.grid-items-list` overflow fix (`grid-template-columns` property)**

Take a look at the example:

```css
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
```

Although the minimum width of `.grid-items-list` is `320px` (as declared in `minmax()` function), left and right paddings defined on parent container/component (`.demo__main` `padding-left: 4rem;`, `padding-right: 4em;`) are adding extra width. As a result, `.grid-items-list` width will be the sum of `320px` + `4rem` + `4rem`. `.grid-items-list` will overflow. In order to define more or less optimal minimal width for the grid item `.grid-items-list` and prevent overflowing, we need to substract left and right paddings from the basic image width (`320px` in our case): `calc(320px - 8rem)`.

So, the result will be the following:

```css
grid-template-columns: repeat(auto-fit, minmax(calc(320px-8rem), 1fr)); 
```  
  
If you use this grid component and you don't have any left/right-paddings in parent containers, remove `calc()` function and leave only `minmax(320px, 1fr)`

