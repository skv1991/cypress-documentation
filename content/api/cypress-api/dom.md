---
title: Cypress.dom
---

`Cypress.dom.method()` is a collection of DOM related helper methods.

<Alert type="warning">

There are actually dozens of methods attached to `Cypress.dom` that are not
documented below. These methods are used internally by Cypress in nearly every
single built in command.

We suggest
[reading through the source code here](https://github.com/cypress-io/cypress/blob/develop/packages/driver/src/dom/index.js)
to see all of the methods and what they do.

</Alert>

## Syntax

```javascript
Cypress.dom.isHidden(element)
```

## Examples

### Is attached

**Returns a boolean indicating whether an element is attached to the DOM.**

```javascript
cy.get('button').then(($el) => {
  Cypress.dom.isAttached($el) // true
})
```

### Is descendent

**Returns a boolean indicating whether an element is a descendent of another
element.**

```javascript
cy.get('div').then(($el) => {
  Cypress.dom.isDescendent($el.parent(), $el) // true
})
```

### Is detached

**Returns a boolean indicating whether an element is detached from the DOM.**

```javascript
cy.get('button').then(($el) => {
  Cypress.dom.isDetached($el) // false
})
```

### Is document

**Returns a boolean indicating whether a node is of document type.**

```javascript
cy.get('p').then(($el) => {
  Cypress.dom.isDocument($el) // false
})
```

### Is DOM

**Returns a boolean indicating whether an object is a DOM object.**

```javascript
cy.get('body').then(($el) => {
  Cypress.dom.isDom($el) // true
})
```

### Is element

**Returns a boolean indicating whether an object is a DOM element.**

```javascript
cy.get('p').then(($el) => {
  Cypress.dom.isElement($el) // true
})
```

### Is focusable

**Returns a boolean indicating whether an element can receive focus.**

Cypress internally uses this method _everywhere_ to figure out whether an
element is hidden,
[mostly for actionability](/guides/core-concepts/interacting-with-elements).

```javascript
cy.get('input').then(($el) => {
  Cypress.dom.isFocusable($el) // true
})
```

### Is focused

**Returns a boolean indicating whether an element currently has focus.**

```javascript
cy.get('button').then(($el) => {
  Cypress.dom.isFocused($el)
})
```

### Is hidden

**Returns a boolean indicating whether an element is hidden.**

Cypress internally uses this method _everywhere_ to figure out whether an
element is hidden,
[mostly for actionability](/guides/core-concepts/interacting-with-elements).

```javascript
cy.get('p').then(($el) => {
  Cypress.dom.isHidden($el) // false
})
```

### Is jQuery

**Returns a boolean indicating whether an object is a jQuery object.**

```javascript
cy.get('input').then(($el) => {
  Cypress.dom.isJquery($el)
})
```

### Is scrollable

**Returns a boolean indicating whether an element is scrollable.**

Cypress internally uses this method _everywhere_ to figure out whether an
element can be scrolled,
[mostly for actionability](/guides/core-concepts/interacting-with-elements).

```javascript
cy.get('body').then(($el) => {
  Cypress.dom.isScrollable($el) // true
})
```

### Is visible

**Returns a boolean indicating whether an element is visible.**

```javascript
cy.get('img').then(($el) => {
  Cypress.dom.isVisible($el) // true
})
```

**Tip:** if a Cypress test fails with "element is not visible" error, but you
are sure the element should be visible, you can debug the visibility check
yourself by stepping through the `Cypress.dom.isVisible` code, see
[Debug the Element Visibility Problems in Cypress](https://glebbahmutov.com/blog/debug-visibility/).

### Is window

**Returns a boolean indicating whether an object is a window object.**

```javascript
cy.get(window).then(($el) => {
  Cypress.dom.isWindow($el) // true
})
```

### Unwrap

**Returns an array of raw elements pulled out from a jQuery object.**

```javascript
cy.get('body').then(($el) => {
  Cypress.dom.unwrap($el)
})
```

### Wrap

**Returns a jQuery object obtained by wrapping an object in jQuery.**

```javascript
cy.get('p').then(($el) => {
  Cypress.dom.wrap($el)
})
```

## See also

- Read the blog post
  [Debug the Element Visibility Problems in Cypress](https://glebbahmutov.com/blog/debug-visibility/)
  to see how you can call these methods from the DevTools console to step
  through their logic.
