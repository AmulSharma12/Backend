
# 📘 Node.js Notes

## 1️⃣ Node.js & V8 Engine

* **Node.js**: Runtime environment for running JavaScript outside browsers.
* **V8 Engine** (Google's JS Engine):
   * Written in **C++** to understand the javascript code.
   * Converts JS → Machine code using **JIT compiler**.
   * Can be embedded in C++ apps.
   * Repo: github.com/v8/v8

---

## 2️⃣ Modules in Node.js

### 🔹 CommonJS (CJS) – Default in Node.js

* Uses `require` for imports, `module.exports` for exports.
* **How it works**: Node wraps each file inside an **IIFE** → makes variables private.
* `module.exports = {}` → empty object (default).

**Exporting:**
```js
// single export
module.exports = myFunc;

// multiple exports
module.exports = { func1, func2 };

// another way
module.exports.key = value;
```

**Importing:**
```js
const myFunc = require("./file");
```

### 🔹 ESM (ECMAScript Modules)

* Standardized module system (from ES6/2015).
* Uses `import` / `export`.
* File extension: `.mjs` OR add `"type": "module"` in package.json.

**Example:**
```js
// export
export const add = (a, b) => a + b;

// import
import { add } from "./math.mjs";
```

---

## 3️⃣ CJS vs ESM

| **Feature** | **CommonJS (CJS)** | **ESM (ECMAScript Modules)** |
|-------------|-------------------|----------------------------|
| **Syntax** | `require`, `module.exports` | `import`, `export` |
| **File Ext** | `.js` (default) | `.mjs` OR `"type":"module"` |
| **Support** | Default in Node.js | ES6+ Standard (Browser + Node) |
| **Execution** | Synchronous | Asynchronous (better for modern apps) |

---

## 4️⃣ How Node Decides Module Type?

* **By default** → `.js` = **CJS**.
* If `"type": "module"` in package.json → `.js` = **ESM**.
* `.mjs` → Always ESM.
* `.cjs` → Always CJS.

---

## ✅ Quick Flow of Code Execution

1. You write JS.
2. Node.js gives it to **V8 engine**.
3. V8 parses & compiles to machine code.
4. If modules → Node decides CJS or ESM based on rules above.
```