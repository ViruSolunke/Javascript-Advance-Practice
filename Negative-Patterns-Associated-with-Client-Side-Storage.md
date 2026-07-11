The main point of this entire paragraph is that **Client-Side Storage is useful, but if it is used incorrectly, it can create privacy and security problems.**

## 1. Excessive Tracking with Cookies 🍪

Websites can use cookies to track your activities.

Example:

```javascript
document.cookie = "userID=123";
```

Now the website can know:

* What you searched for.
* What you bought.
* Which pages you visited.

If many websites share this information, they can build a detailed profile of your online behavior.

**Problem:** Privacy issue.

---

## 2. Browser Fingerprinting 🕵️

A website can collect information about your browser, such as:

* Browser name
* Screen size
* Operating system
* Installed fonts and plugins

Example:

```javascript
let fingerprint =
  navigator.userAgent +
  screen.width +
  screen.height;
```

By combining this information, a website can uniquely identify you, **even without cookies**.

**Problem:** Users can be tracked secretly.

---

## 3. Storing Sensitive Data in localStorage 🔓

Bad example:

```javascript
localStorage.setItem(
  'userPassword',
  'someonesPasswordHere'
);
```

`localStorage` is not encrypted.

If the website suffers an **XSS (Cross-Site Scripting) attack**, an attacker may be able to steal the password.

**Problem:** Security risk.

---

# Interview Points 📌

### Negative patterns associated with client-side storage:

1. **Tracking users with cookies** → Privacy issue.
2. **Browser fingerprinting** → Secret identification and tracking.
3. **Storing sensitive data in localStorage** → Security issue.

---

# Easy One-Line Summary

```text
Client-side storage is useful,
but never use it to:
❌ Track users excessively
❌ Fingerprint users secretly
❌ Store passwords or sensitive data
```

### Good Practices ✅

* **Cookies:** Use them for login sessions and user preferences.
* **localStorage:** Use it only for non-sensitive settings such as theme or language preferences.
* **Passwords, tokens, and personal data:** Store them securely on the server or use secure mechanisms such as **HttpOnly cookies** when appropriate.
