# 🚀 Node.js: Async & Concurrency

## 🔹 JavaScript & Node.js
- **JavaScript** → Synchronous, single-threaded language.  
- **Node.js** → JavaScript runtime with **asynchronous, non-blocking I/O** (via event loop).  

---

## 🔹 OS Concepts

### Process vs Thread
- **Process** → Independent program, can have multiple threads.  
- **Thread** → Smallest unit of execution inside a process.  

### Concurrency vs Parallelism
- **Concurrency** → Tasks make progress together by **context switching** (illusion of multitasking).  
- **Parallelism** → Tasks run **at the same time** (requires multiple CPU cores).  

### CPU Execution
- **Single-core CPU** → Only one task at a time, uses context switching for concurrency.  
- **Multi-core CPU** → Can run multiple tasks in **parallel**, extra tasks still use concurrency.  

---

## 🔹 Example: Pizza Shop 🍕🥤🍔
Orders:  
- Pizza → 10 min  
- Coke → 2 min  
- Burger → 5 min  

**Synchronous** → Total = 17 min (one after another).  
**Asynchronous** → Tasks overlap, served faster (like Node.js).  

---

## ✅ Key Takeaways

| Concept      | Description                                  |
|--------------|----------------------------------------------|
| **JS**       | Sync + Single-threaded                      |
| **Event Loop** | Enables async, non-blocking execution       |
| **Node.js**  | Efficiently handles many requests without blocking |

---

## 🎯 Quick Revision Points
- JavaScript = **Synchronous** by nature.  
- Node.js = Makes JS **asynchronous** via event loop.  
- **Concurrency** = Context switching (feels parallel).  
- **Parallelism** = Actually running at same time.  
- **Event Loop** = The magic behind Node.js performance.  


