# 🔍 Regular Expressions Practice Assignment

**Objective:** Practice using regular expressions to match specific patterns in text using [RegExr.com](https://regexr.com).

Use this sample sentence throughout the activity:

> _Save and Share your expression or edit mode at gskinner.com in 2024 with "Tools", "Replace", and Explore features._

---

## 🧠 Demonstration Examples (With Explanation & Student Challenge)

---

### 🎯 Concept: Exact Word Match  
**Target Match:** `expression`  
**Regex Pattern:**  
    expression  
✏️ **Now You Try It:** Match the word `mode`  
✅ Solution:  
    mode

---

### 🎯 Concept: Capitalized Words  
**Target Match:** Words like `Save`, `Share`, `Explore`  
**Regex Pattern:**  
    \b[A-Z][a-z]+\b  
✏️ **Now You Try It:** Match `Replace`, `Tools`  
✅ Solution:  
    \b[A-Z][a-z]+\b

---

### 🎯 Concept: Domain Name  
**Target Match:** `gskinner.com`  
**Regex Pattern:**  
    \w+\.com  
✏️ **Now You Try It:** Match `example.net` (if added)  
✅ Solution:  
    \w+\.net

---

### 🎯 Concept: Alternation (OR)  
**Target Match:** `Save` or `Share`  
**Regex Pattern:**  
    Save|Share  
✏️ **Now You Try It:** Match `Tools` or `Replace`  
✅ Solution:  
    Tools|Replace

---

### 🎯 Concept: Digits (Numbers)  
**Target Match:** `2024`  
**Regex Pattern:**  
    \d+  
✏️ **Now You Try It:** Match 4-digit numbers only  
✅ Solution:  
    \b\d{4}\b

---

### 🎯 Concept: 3-Letter Words  
**Target Match:** `and`, `the` (if added)  
**Regex Pattern:**  
    \b\w{3}\b  
✏️ **Now You Try It:** Match 2-letter words  
✅ Solution:  
    \b\w{2}\b

---

### 🎯 Concept: Match Lines That Contain a Word  
**Target Match:** Any line with the word `mode`  
**Regex Pattern:**  
    ^.*mode.*$  
✏️ **Now You Try It:** Match any line with `Share`  
✅ Solution:  
    ^.*Share.*$

---

### 🎯 Concept: Case-Insensitive Match  
**Target Match:** Any version of `save` (e.g., Save, SAVE)  
**Regex Pattern:**  
    save  
*Use the “i” flag*  
✏️ **Now You Try It:** Match `tools`, `TOOLS`, `Tools`  
✅ Solution:  
    tools  (with `i` flag enabled)

---

### 🎯 Concept: Quoted Text  
**Target Match:** `"Tools"`, `"Replace"`  
**Regex Pattern:**  
    \"[^\"]+\"  
✏️ **Now You Try It:** Match `"Save"` and `"Share"`  
✅ Solution:  
    \"[^\"]+\"

---

### 🎯 Concept: Lowercase Words (4+ Letters)  
**Target Match:** `your`, `expression`, `features`  
**Regex Pattern:**  
    \b[a-z]{4,}\b  
✏️ **Now You Try It:** Match 6+ letter lowercase words  
✅ Solution:  
    \b[a-z]{6,}\b

---
