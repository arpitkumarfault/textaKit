// lib/spell.ts
import nspell from "nspell";

// Import the raw dictionary files directly
const enAff = require("dictionary-en/index.aff");
const enDic = require("dictionary-en/index.dic");

let spellChecker: any = null;

export function getSpellChecker() {
  if (!spellChecker) {
    // Initialize nspell with the dictionary buffers
    spellChecker = nspell({
      aff: enAff,
      dic: enDic,
    });
  }
  return spellChecker;
}

export function checkText(text: string) {
  const spell = getSpellChecker();
  
  // Extract words from text
  const words = text.match(/\b[\w']+\b/g) || [];
  const unique = Array.from(new Set(words));
  const errors: { word: string; suggestions: string[] }[] = [];

  unique.forEach((w) => {
    // Skip numbers and single characters
    if (w.length <= 1 || /^\d+$/.test(w)) return;
    
    if (!spell.correct(w)) {
      errors.push({
        word: w,
        suggestions: spell.suggest(w).slice(0, 5),
      });
    }
  });

  return errors;
}
