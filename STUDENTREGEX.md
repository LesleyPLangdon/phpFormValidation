# 🧪 Regular Expressions Student Challenges

Use the same sentence for all of these:

> _Save and Share your expression or edit mode at gskinner.com in 2024 with "Tools", "Replace", and Explore features._

Try to write your own regex pattern for each challenge below. Then check your answer on [RegExr.com](https://regexr.com).

---

### 💡 Challenge 1: Match a 4-letter word  
✏️ **Now You Try It:** Match the word `Save`  
✅ **Solution:**  
    \b\w{4}\b

---

### 💡 Challenge 2: Match any word that starts with “s”  
✏️ **Now You Try It:** Match `Save`, `Share`  
✅ **Solution:**  
    \bs\w*\b

---

### 💡 Challenge 3: Match the domain only  
✏️ **Now You Try It:** Match `gskinner.com`  
✅ **Solution:**  
    \b\w+\.com\b

---

### 💡 Challenge 4: Match any capitalized word longer than 5 letters  
✏️ **Now You Try It:** Match `Explore`, `Replace`  
✅ **Solution:**  
    \b[A-Z][a-z]{5,}\b

---

### 💡 Challenge 5: Match quoted tools  
✏️ **Now You Try It:** Match `"Tools"`, `"Replace"`  
✅ **Solution:**  
    \"[A-Za-z]+?\"

---

### 💡 Challenge 6: Match “at gskinner.com” as a phrase  
✏️ **Now You Try It:** Match the entire phrase  
✅ **Solution:**  
    at gskinner\.com

---

### 💡 Challenge 7: Match any 2-digit or 4-digit number  
✏️ **Now You Try It:** Match `2024`  
✅ **Solution:**  
    \b\d{2,4}\b

---

### 💡 Challenge 8: Match any word that ends with "e"  
✏️ **Now You Try It:** Match `Save`, `Share`, `Replace`  
✅ **Solution:**  
    \b\w*e\b

---

### 💡 Challenge 9: Match any word that includes "res"  
✏️ **Now You Try It:** Match `expression`, `features`  
✅ **Solution:**  
    \b\w*res\w*\b

---

### 💡 Challenge 10: Match anything that is NOT a word  
✏️ **Now You Try It:** Match punctuation and spaces  
✅ **Solution:**  
    \W+

---
