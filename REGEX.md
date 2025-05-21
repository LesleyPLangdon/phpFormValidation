🔍 RegExr Demonstration Examples
Use these examples in RegExr.com to demonstrate key regex concepts. Each includes a short activity for students to try.

✳️ 1. Exact Match
Match: RegExr

RegExr
Now You Try It:
Match the word Tests exactly.

✳️ 2. Escaping Special Characters
Match: gskinner.com

gskinner\.com
Now You Try It:
Match .mode including the dot.

✳️ 3. Alternation (OR)
Match: PCRE or JavaScript

PCRE|JavaScript
Now You Try It:
Match either Save or Share.

✳️ 4. Character Classes + Quantifiers
Match: gskinner

[a-z]+
Now You Try It:
Match any lowercase word.

✳️ 5. Capitalized Words
Match: Save, Share, Validate

\b[A-Z][a-z]+\b
Now You Try It:
Match capitalized words that are 5 or more letters.

✳️ 6. Escaping Ampersand (&)
Match: Save & Share

Save \& Share
Now You Try It:
Match Explore & Replace

✳️ 7. Word Boundaries + Literal Match
Match: .com and My

\.com|\bMy\b
Now You Try It:
Match the whole word Help and any .net (if added).

✳️ 8. Words Ending in "ed"
Match: created, supported

\b\w+ed\b
Now You Try It:
Match any word ending in ing.

✳️ 9. Digits (if added manually)
Match: 123, 2024 (add to text)

\d+
Now You Try It:
Match only 4-digit numbers.

✳️ 10. Optional Suffix (Plural)
Match: Pattern / Patterns

\b[A-Za-z]+s?\b
Now You Try It:
Match “Result” and “Results”.

🧠 Student Practice Challenges (with Solutions)
Use these to reinforce key regex skills. Students can try each on RegExr.com while you guide or display hints.

🧩 1. Exact Word Match
Match: expression

expression
Now You Try It:
Match the word mode
mode

🧩 2. Capitalized Words
Match: Words beginning with capital letters

\b[A-Z][a-z]+\b
Now You Try It:
Match Explore, Tools, and Replace
\b[A-Z][a-z]+\b

🧩 3. Domain Match
Match: Words ending in .com

\w+\.com
Now You Try It:
Match gskinner.info (if added)
\w+\.info

🧩 4. Alternation (OR)
Match: Save or Share

Save|Share
Now You Try It:
Match Create or Edit (if added)
Create|Edit

🧩 5. Digits
Match: Numbers like 123, 2024 (add to text)

\d+
Now You Try It:
Match only 4-digit numbers
\b\d{4}\b

🧩 6. 3-Letter Words
Match: Any 3-letter word

\b\w{3}\b
Now You Try It:
Match 2-letter words
\b\w{2}\b

🧩 7. Lines Containing a Word
Match: Any line containing mode

^.*mode.*$
Now You Try It:
Match lines containing Share
^.*Share.*$

🧩 8. Case-Insensitive Word Match
Match: all variations of you (e.g., You, YOU)

you with the i (ignore case) flag enabled
Now You Try It:
Match all versions of save
save with i flag on

🧩 9. Quoted Text
Match: Any text in quotes, like "Details"

\"[^\"]+\"
Now You Try It:
Match "Share" and "Tools"
\"[^\"]+\"

🧩 10. Lowercase Words 4+ Letters
Match: Lowercase words with 4 or more letters

\b[a-z]{4,}\b
Now You Try It:
Match lowercase words with 6 or more letters
\b[a-z]{6,}\b