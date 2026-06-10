### `querySelectorAll()` in Simple Words

**Purpose:**
`querySelectorAll()` is used to **find and select multiple HTML elements** from a webpage using a CSS selector.

### Syntax

```javascript
document.querySelectorAll("selector");
```

Think of it like:

> "Hey browser, give me **all elements** that match this selector."

---

## Example 1: Select All `<li>` Items

### HTML

```html
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>
```

### JavaScript

```javascript
const items = document.querySelectorAll("li");

console.log(items);
```

### Result

```text
NodeList(3)
```

It found **3 list items**.

---

## Example 2: Access Individual Elements

```javascript
const items = document.querySelectorAll("li");

console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
```

### Output

```html
<li>Apple</li>
<li>Banana</li>
<li>Mango</li>
```

Remember:

| Index | Value  |
| ----- | ------ |
| 0     | Apple  |
| 1     | Banana |
| 2     | Mango  |

---

## Example 3: Select by Class

### HTML

```html
<p class="fruit">Apple</p>
<p class="fruit">Banana</p>
<p class="fruit">Mango</p>
```

### JavaScript

```javascript
const fruits = document.querySelectorAll(".fruit");

console.log(fruits.length);
```

### Output

```text
3
```

The `.` means **class selector**.

---

## Example 4: Loop Through All Elements

```javascript
const fruits = document.querySelectorAll(".fruit");

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].textContent);
}
```

### Output

```text
Apple
Banana
Mango
```

---

## What Does It Return?

It returns a **NodeList** (a collection of elements).

Example:

```javascript
const items = document.querySelectorAll("li");
```

Result:

```javascript
NodeList(3)
```

---

## What If No Element Matches?

```javascript
const items = document.querySelectorAll(".xyz");
console.log(items);
```

### Output

```javascript
NodeList []
```

No error occurs.

It simply returns an **empty NodeList**.

---

## Easy Difference

| Method               | Returns                     |
| -------------------- | --------------------------- |
| `querySelector()`    | First matching element only |
| `querySelectorAll()` | All matching elements       |

### Example

```javascript
document.querySelector("li");
```

Returns:

```html
<li>Apple</li>
```

```javascript
document.querySelectorAll("li");
```

Returns:

```javascript
NodeList(3)
```

---

### Real-Life Analogy

Imagine a classroom:

```html
<div class="student">Rahul</div>
<div class="student">Virendra</div>
<div class="student">Amit</div>
```

```javascript
const students = document.querySelectorAll(".student");
```

This means:

> "Find **all students** in the classroom."

Result:

```javascript
[
  Rahul,
  Virendra,
  Amit
]
```

---

### Exam/Interview Answer (1 Line)

**`querySelectorAll()` is a JavaScript DOM method that selects all elements matching a specified CSS selector and returns them as a NodeList.** ✅


