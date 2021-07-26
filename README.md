# Interactive Formula

The `InteractiveFormula` is designed to provide users with hints of additional context, in places where a mathematical equation can become too complex.

![Interactive formula demo](https://github.com/qiskit-community/interactive-formula/raw/main/demo/assets/interactive_formula.gif "Interactive formula demo")




## How it works
#### User experience
As users are viewing a complex math formula, they have the ability to identify an annotated component by seeing the _highlighted_ portion. Hovering over this portion of the formula will reveal the `Tooltip`.


#### Technical needs
The `InteractiveFormula` component uses basic HTML, CSS, JavaScript, and [MathJax](https://www.mathjax.org/) - a JavaScript library and display engine, built for mathematics in browsers. Each interactive _block_ will need two things: an specific identifier, and an object of metadata.

**Identifier** 

| key            | type                         | description                                                                                              |
| ---------------|----------------------------- | -------------------------------------------------------------------------------------------------------- |
| `cssId`          | `string`                     | This is part of the MathJax [html extension](https://docs.mathjax.org/en/latest/input/tex/extensions/html.html), gets attached to the part of the equation you want to highlight.                                                                  |

**Metadata**

| key            | type                         | description                                                                                              |
| ---------------|----------------------------- | -------------------------------------------------------------------------------------------------------- |
| `say`          | `string`                     | How to say the highlighted math portion                                                                  |
| `meaning`      | `string`                     | A short description for the highligted math portion                                                      |
| `type`         | `string`                     | Type of math notation (e.g., `"Universal notation"` vs `"Local variable"`)                               |

