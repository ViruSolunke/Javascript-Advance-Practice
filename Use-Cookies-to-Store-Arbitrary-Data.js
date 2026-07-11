/*
===========================================================
      HOW TO STORE ARBITRARY DATA IN COOKIES (NOTES)
===========================================================

Cookies usually store simple key-value pairs.

Example:
document.cookie = "username=John";

This creates a cookie:

username=John

-----------------------------------------------------------
STORING AN OBJECT IN A COOKIE
-----------------------------------------------------------

Sometimes we need to store complex data like objects.

Example object:

{
  name: "John Doe",
  age: 30,
  role: "admin"
}

Cookies can only store STRINGS, not objects.

So, we convert the object into a JSON string using:

JSON.stringify(object)

Object
   ↓
JSON.stringify()
   ↓
String stored in cookie

When reading the cookie:

String from cookie
   ↓
JSON.parse()
   ↓
Object

-----------------------------------------------------------
COOKIES AND HTTP HEADERS
-----------------------------------------------------------

Normally, the server creates cookies using:

Set-Cookie: username=John; expires=Thu, 31 Dec 2026; path=/

Flow:

Server ---> Browser ---> Cookie Stored

JavaScript can also create cookies:

document.cookie = "username=John; path=/";

Flow:

JavaScript ---> Browser ---> Cookie Stored

-----------------------------------------------------------
REAL-WORLD EXAMPLE
-----------------------------------------------------------

User preferences:

Theme      : Dark
Language   : English
Font Size  : Large

These settings can be stored in a cookie so that the
website remembers them when the user visits again.

-----------------------------------------------------------
WHY NOT STORE TOO MUCH DATA IN COOKIES?
-----------------------------------------------------------

1. Cookie size limit is approximately 4 KB.
2. Cookies are sent with EVERY HTTP request.

Browser ---> Server
          + Cookies

Large cookies cause:
❌ More network traffic
❌ Slower website performance

Good use cases:
✅ User preferences
✅ Session IDs
✅ Language settings
✅ Theme settings

Avoid storing:
❌ Large files
❌ Images
❌ Large arrays or objects
❌ Passwords or sensitive information

-----------------------------------------------------------
EASY ANALOGY
-----------------------------------------------------------

Think of a cookie as a small sticky note.

You can write:

Name     : John
Theme    : Dark
Language : English

But you cannot write an entire book on that sticky note.

-----------------------------------------------------------
INTERVIEW DEFINITION
-----------------------------------------------------------

Cookies can store arbitrary data by converting JavaScript
objects or arrays into JSON strings using JSON.stringify().

Since cookies only store strings, the data must be converted
back into objects using JSON.parse().

Cookies are usually set through HTTP Set-Cookie headers but
can also be created directly with JavaScript.

Because cookies have a size limit of about 4 KB and are sent
with every HTTP request, they should only be used to store
small amounts of data.
===========================================================
*/


// =========================================================
// 1. SIMPLE COOKIE
// =========================================================

document.cookie = "username=John";


// =========================================================
// 2. STORING AN OBJECT IN A COOKIE
// =========================================================

const userData = {
  name: "John Doe",
  age: 30,
  role: "admin"
};

// Convert object into JSON string and store it
document.cookie =
  "userInfo=" + JSON.stringify(userData) + "; path=/";


// =========================================================
// 3. CONVERTING OBJECT TO STRING
// =========================================================

const jsonString = JSON.stringify(userData);

console.log(jsonString);

// Output:
// {"name":"John Doe","age":30,"role":"admin"}


// =========================================================
// 4. CONVERTING STRING BACK TO OBJECT
// =========================================================

const data =
  '{"name":"John Doe","age":30,"role":"admin"}';

const user = JSON.parse(data);

console.log(user.name); // John Doe
console.log(user.age);  // 30
console.log(user.role); // admin


// =========================================================
// 5. REAL-WORLD EXAMPLE
// =========================================================

const settings = {
  theme: "dark",
  language: "en",
  fontSize: "large"
};

// Store user settings in a cookie
document.cookie =
  "settings=" + JSON.stringify(settings) + "; path=/";

console.log("Settings saved successfully!");


// =========================================================
// 6. READING A COOKIE (Simple Example)
// =========================================================

console.log(document.cookie);