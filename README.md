# Monotop

[Deployed website](https://monotop.hu/)

## Technologies

### Angular

* Angular 16
* OnPush change detection
* Progressive Web App
* Karma / Jasmine unit test
* ng-bootstrap
* regular Angular
  * components
  * data binding, events, async pipe
  * `ng-template`, `ng-content`
  * directives like `*ngIf` and `*ngFor`
  * services
  * RxJS `Observable`s, operators like `filter`, `map`, etc.
  * routing, `routerLink` and `RouterLinkActive`

### TypeScript

* everything typed, strict mode
* get and set properties
* operators like `...`, `??` and `?.`
* type narrowing

### SCSS

* responsive design, media queries
* customized Bootstrap 5
* SASS variables, mixins, nesting, `&`
* Flexbox, Grid
* Google Fonts
* modern properties like `margin-inline-start`, `position: sticky`
* CSS animation
* pseudo-classes like `:hover`, `:active`, `:after`

### HTML

* semantic HTML tags like `main`, `nav`, `footer`, `address`, etc.
* modern image formats like AVIF and WEBP with JPG fallback
* responsive images (loading different images based on size)
* embedded Google Map
* accessibility
  * "skip to main content" link
  * aria attributes like `aria-label`, `aria-expanded`, etc.
  * correct usage of image attributes like `alt`, `width`, and `height`
  * tested with DevTools and screen readers
* `mailto` and `tel` in `href`
* lazy loading

### CI pipeline

* GitHub Actions
* runs static analysis tools
* runs unit tests
* builds the code
* pull requests are only mergeable if successful

### CD pipeline

* GitHub Actions
* deploys to GitHub Pages

### Static analysis tools

* ESLint
* Prettier
* Stylelint

### Formatting

* Prettier
* EditorConfig
* ordering imports
* Husky pre-commit hook
