/*
===========================================================
                 INDEXEDDB NOTES 📦
===========================================================

What is IndexedDB?

IndexedDB is a database inside your browser.

It allows websites to store large amounts of structured data:

✅ JavaScript Objects
✅ Arrays
✅ Files
✅ Images
✅ User Data
✅ Offline Data

Think of IndexedDB as a mini database (like MySQL)
that lives inside the browser.

===========================================================
WHY DO WE NEED INDEXEDDB?
===========================================================

Suppose you're building:

📝 Notes App
✅ To-Do App
🛒 Offline Shopping App
💬 Chat Application

These applications need to store a lot of data on the
user's device.

localStorage is not suitable because:

❌ It only stores strings.
❌ It has limited storage.
❌ It is synchronous.

Therefore, we use IndexedDB.

===========================================================
REAL-LIFE EXAMPLE 🏠
===========================================================

Browser Storage

localStorage
↓
One Small Notebook

You can only write text in it.

IndexedDB
↓
A Complete Library

You can store:

✅ Objects
✅ Files
✅ Thousands of Records
✅ Complex Data

===========================================================
HOW INDEXEDDB WORKS
===========================================================

Step 1 → Open a Database
Step 2 → Create an Object Store (Table)
Step 3 → Add Data
Step 4 → Read Data
Step 5 → Update/Delete Data

===========================================================
STEP 1 : OPEN A DATABASE
===========================================================

Equivalent SQL:

CREATE DATABASE SampleDB;

*/

// Open (or create) a database named "Sample DB"
let request = indexedDB.open("Sample DB", 1);



/*
===========================================================
STEP 2 : CREATE AN OBJECT STORE
===========================================================

Object Store = Table in SQL

SQL Table:

id     name      email
------------------------
1      John      john@gmail.com
2      Mike      mike@gmail.com

IndexedDB:

Database
   ↓
customers (Object Store)

keyPath: "id"

means:

"id" is the Primary Key.

Exactly like:

PRIMARY KEY(id)

===========================================================
*/

// This event runs only when database is created
// for the first time or version changes.

request.onupgradeneeded = function (event) {
  let db = event.target.result;

  // Create Object Store
  let objectStore = db.createObjectStore("customers", {
    keyPath: "id"
  });

  console.log("Object Store Created!");
};



/*
===========================================================
STEP 3 : ADD DATA
===========================================================

Equivalent SQL:

INSERT INTO customers
VALUES (1, 'John Doe', 'john@example.com');

After adding:

id     name        email
---------------------------------
1      John Doe    john@example.com

===========================================================
*/

request.onsuccess = function (event) {
  let db = event.target.result;

  // Start transaction
  let transaction = db.transaction(
    ["customers"],
    "readwrite"
  );

  let objectStore =
    transaction.objectStore("customers");

  // Add customer
  objectStore.add({
    id: 1,
    name: "John Doe",
    email: "john@example.com"
  });

  console.log("Customer Added!");
};



/*
===========================================================
STEP 4 : GET DATA
===========================================================

Equivalent SQL:

SELECT *
FROM customers
WHERE id = 1;

Output:

{
  id: 1,
  name: "John Doe",
  email: "john@example.com"
}

===========================================================
*/

request.onsuccess = function (event) {
  let db = event.target.result;

  let transaction = db.transaction(
    ["customers"],
    "readonly"
  );

  let objectStore =
    transaction.objectStore("customers");

  let customer = objectStore.get(1);

  customer.onsuccess = function () {
    console.log(customer.result);
  };
};



/*
===========================================================
WHAT IS A TRANSACTION?
===========================================================

Before reading or writing data, we start a transaction.

Example:

db.transaction(["customers"], "readwrite");

Think of a transaction as:

👉 Permission to work with the database.

Transactions allow you to:

✅ Read Data
✅ Add Data
✅ Update Data
✅ Delete Data

===========================================================
EXAMPLE
===========================================================
*/

let transaction =
  db.transaction(["customers"], "readwrite");



/*
===========================================================
WHY IS INDEXEDDB ASYNCHRONOUS?
===========================================================

Suppose you have:

100,000 records.

If the browser waits for the database operation to
finish, the website may freeze.

IndexedDB works in the background.

Website Keeps Running
          +
Database Works Separately

This keeps the application fast and responsive.

===========================================================
REAL-WORLD EXAMPLE
===========================================================

Notes App

User creates:

📝 Note 1
📝 Note 2
📝 Note 3

Internet goes away ❌

Notes still exist because they are stored in
IndexedDB.

When internet comes back:

IndexedDB
      ↓
     Server

The app synchronizes the data.

This is how many PWA (Progressive Web Apps)
work offline.

===========================================================
localStorage vs IndexedDB
===========================================================

Feature                 localStorage     IndexedDB
----------------------------------------------------
Stores Strings              ✅              ✅
Stores Objects              ❌              ✅
Stores Files                ❌              ✅
Large Storage               ❌              ✅
Database Structure          ❌              ✅
Asynchronous                ❌              ✅
Good for Large Apps         ❌              ✅

===========================================================
EASY ANALOGY 🏠
===========================================================

localStorage
↓
Small Notebook

Store:

Theme = Dark
Language = English

-----------------------------------------------------------

IndexedDB
↓
Complete Library

Store:

Customers
Orders
Messages
Notes
Files
Images

===========================================================
INTERVIEW DEFINITION 📌
===========================================================

IndexedDB is a browser-based, asynchronous NoSQL
database that allows web applications to store large
amounts of structured data, JavaScript objects, and
files on the client side.

===========================================================
REMEMBER THIS
===========================================================

Cookies      → Small User Information
localStorage → Small Text Data
IndexedDB    → Large Structured Database
               Inside the Browser

===========================================================
*/