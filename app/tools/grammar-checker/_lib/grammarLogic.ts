export interface GrammarIssue {
  type: "Grammar" | "Spelling" | "Punctuation" | "Style";
  message: string;
  start: number;
  end: number;
  context: string;
  suggestions: string[];
}

export function checkGrammar(text: string): GrammarIssue[] {
  const issues: GrammarIssue[] = [];

  // ==========================================
  // 1. SPELLING ERRORS (50+ common mistakes)
  // ==========================================
  const spellingErrors = [
    { wrong: /\bteh\b/gi, correct: "the" },
    { wrong: /\brecieve\b/gi, correct: "receive" },
    { wrong: /\boccured\b/gi, correct: "occurred" },
    { wrong: /\bseperate\b/gi, correct: "separate" },
    { wrong: /\bdefinately\b/gi, correct: "definitely" },
    { wrong: /\bwierd\b/gi, correct: "weird" },
    { wrong: /\baccommodate\b/gi, correct: "accommodate" },
    { wrong: /\bbelive\b/gi, correct: "believe" },
    { wrong: /\bcalendar\b/gi, correct: "calendar" },
    { wrong: /\bcareer\b/gi, correct: "career" },
    { wrong: /\bconscience\b/gi, correct: "conscience" },
    { wrong: /\bembarrass\b/gi, correct: "embarrass" },
    { wrong: /\benvironment\b/gi, correct: "environment" },
    { wrong: /\bexistence\b/gi, correct: "existence" },
    { wrong: /\bforeign\b/gi, correct: "foreign" },
    { wrong: /\bgovernment\b/gi, correct: "government" },
    { wrong: /\bharrass\b/gi, correct: "harass" },
    { wrong: /\bindependance\b/gi, correct: "independence" },
    { wrong: /\bjudgement\b/gi, correct: "judgment" },
    { wrong: /\blicense\b/gi, correct: "license" },
    { wrong: /\bmaintenance\b/gi, correct: "maintenance" },
    { wrong: /\bnecessary\b/gi, correct: "necessary" },
    { wrong: /\boccasion\b/gi, correct: "occasion" },
    { wrong: /\bpersistence\b/gi, correct: "persistence" },
    { wrong: /\bprivilege\b/gi, correct: "privilege" },
    { wrong: /\brefered\b/gi, correct: "referred" },
    { wrong: /\brhythm\b/gi, correct: "rhythm" },
    { wrong: /\bthier\b/gi, correct: "their" },
    { wrong: /\buntil\b/gi, correct: "until" },
    { wrong: /\bvacuum\b/gi, correct: "vacuum" },
    { wrong: /\bweather\b/gi, correct: "weather" },
    { wrong: /\bacommodate\b/gi, correct: "accommodate" },
    { wrong: /\baquire\b/gi, correct: "acquire" },
    { wrong: /\bconsensus\b/gi, correct: "consensus" },
    { wrong: /\bexperiance\b/gi, correct: "experience" },
    { wrong: /\bfamiliar\b/gi, correct: "familiar" },
    { wrong: /\bpublicly\b/gi, correct: "publicly" },
    { wrong: /\btommorow\b/gi, correct: "tomorrow" },
    { wrong: /\boccurence\b/gi, correct: "occurrence" },
    { wrong: /\bnoticable\b/gi, correct: "noticeable" },
    { wrong: /\bapearance\b/gi, correct: "appearance" },
  ];

  spellingErrors.forEach(({ wrong, correct }) => {
    let match;
    while ((match = wrong.exec(text)) !== null) {
      issues.push({
        type: "Spelling",
        message: `"${match[0]}" is misspelled`,
        start: match.index,
        end: match.index + match[0].length,
        context: getContext(text, match.index, 30),
        suggestions: [correct],
      });
    }
  });

  // ==========================================
  // 2. COMMON GRAMMAR MISTAKES
  // ==========================================

  // Their/There/They're
  const theirThereRegex = /\b(their|there|they're)\b/gi;
  let match;
  while ((match = theirThereRegex.exec(text)) !== null) {
    const word = match[1].toLowerCase();
    const context = text.substring(Math.max(0, match.index - 20), Math.min(text.length, match.index + 50));

    // Check for common misuses
    if (word === "their" && /their (going|coming|doing)/i.test(context)) {
      issues.push({
        type: "Grammar",
        message: 'Did you mean "they\'re" (they are)?',
        start: match.index,
        end: match.index + match[0].length,
        context: getContext(text, match.index, 30),
        suggestions: ["they're"],
      });
    }
  }

  // Your/You're
  const yourRegex = /\byour\s+(going|coming|doing|not|very)/gi;
  while ((match = yourRegex.exec(text)) !== null) {
    issues.push({
      type: "Grammar",
      message: 'Did you mean "you\'re" (you are)?',
      start: match.index,
      end: match.index + 4,
      context: getContext(text, match.index, 30),
      suggestions: ["you're"],
    });
  }

  // Its/It's
  const itsRegex = /\bits\s+(going|not|very|been|a)/gi;
  while ((match = itsRegex.exec(text)) !== null) {
    issues.push({
      type: "Grammar",
      message: 'Did you mean "it\'s" (it is)?',
      start: match.index,
      end: match.index + 3,
      context: getContext(text, match.index, 30),
      suggestions: ["it's"],
    });
  }

  // Then/Than confusion
  const thenThanRegex = /\b(better|worse|more|less|rather)\s+then\b/gi;
  while ((match = thenThanRegex.exec(text)) !== null) {
    const thenIndex = text.indexOf("then", match.index);
    issues.push({
      type: "Grammar",
      message: 'Use "than" for comparisons',
      start: thenIndex,
      end: thenIndex + 4,
      context: getContext(text, thenIndex, 30),
      suggestions: ["than"],
    });
  }

  // Affect/Effect
  const affectEffectRegex = /\b(the|an|this|that)\s+affect\b/gi;
  while ((match = affectEffectRegex.exec(text)) !== null) {
    const affectIndex = text.indexOf("affect", match.index);
    issues.push({
      type: "Grammar",
      message: 'Use "effect" as a noun',
      start: affectIndex,
      end: affectIndex + 6,
      context: getContext(text, affectIndex, 30),
      suggestions: ["effect"],
    });
  }

  // ==========================================
  // 3. PUNCTUATION ERRORS
  // ==========================================

  // Missing space after punctuation
  const noSpaceRegex = /[.,!?;:]([A-Za-z])/g;
  while ((match = noSpaceRegex.exec(text)) !== null) {
    issues.push({
      type: "Punctuation",
      message: "Missing space after punctuation",
      start: match.index,
      end: match.index + 2,
      context: getContext(text, match.index, 20),
      suggestions: [match[0][0] + " " + match[1]],
    });
  }

  // Multiple punctuation
  const multiPunctRegex = /[!?]{2,}/g;
  while ((match = multiPunctRegex.exec(text)) !== null) {
    issues.push({
      type: "Punctuation",
      message: "Avoid multiple punctuation marks",
      start: match.index,
      end: match.index + match[0].length,
      context: getContext(text, match.index, 20),
      suggestions: ["!", "?"],
    });
  }

  // Space before punctuation
  const spaceBeforeRegex = /\s+([.,!?;:])/g;
  while ((match = spaceBeforeRegex.exec(text)) !== null) {
    issues.push({
      type: "Punctuation",
      message: "Remove space before punctuation",
      start: match.index,
      end: match.index + match[0].length,
      context: getContext(text, match.index, 20),
      suggestions: [match[1]],
    });
  }

  // Missing apostrophes in contractions
  const contractions = [
    { wrong: /\bdont\b/gi, correct: "don't" },
    { wrong: /\bcant\b/gi, correct: "can't" },
    { wrong: /\bwont\b/gi, correct: "won't" },
    { wrong: /\bdidnt\b/gi, correct: "didn't" },
    { wrong: /\bisnt\b/gi, correct: "isn't" },
    { wrong: /\barent\b/gi, correct: "aren't" },
    { wrong: /\bwasnt\b/gi, correct: "wasn't" },
    { wrong: /\bwerent\b/gi, correct: "weren't" },
    { wrong: /\bhasnt\b/gi, correct: "hasn't" },
    { wrong: /\bhavent\b/gi, correct: "haven't" },
    { wrong: /\bwouldnt\b/gi, correct: "wouldn't" },
    { wrong: /\bcouldnt\b/gi, correct: "couldn't" },
    { wrong: /\bshouldnt\b/gi, correct: "shouldn't" },
  ];

  contractions.forEach(({ wrong, correct }) => {
    let match;
    while ((match = wrong.exec(text)) !== null) {
      issues.push({
        type: "Punctuation",
        message: `Missing apostrophe in "${match[0]}"`,
        start: match.index,
        end: match.index + match[0].length,
        context: getContext(text, match.index, 30),
        suggestions: [correct],
      });
    }
  });

  // ==========================================
  // 4. STYLE IMPROVEMENTS
  // ==========================================

  // Double spaces
  const doubleSpaceRegex = /\s{2,}/g;
  while ((match = doubleSpaceRegex.exec(text)) !== null) {
    issues.push({
      type: "Style",
      message: "Multiple consecutive spaces found",
      start: match.index,
      end: match.index + match[0].length,
      context: getContext(text, match.index, 20),
      suggestions: [" "],
    });
  }

  // Repeated words
  const repeatedWordRegex = /\b(\w+)\s+\1\b/gi;
  while ((match = repeatedWordRegex.exec(text)) !== null) {
    issues.push({
      type: "Style",
      message: `Repeated word: "${match[1]}"`,
      start: match.index,
      end: match.index + match[0].length,
      context: getContext(text, match.index, 30),
      suggestions: [match[1]],
    });
  }

  // Sentence starting with lowercase
  const sentenceRegex = /(?:^|[.!?]\s+)([a-z])/g;
  while ((match = sentenceRegex.exec(text)) !== null) {
    const charIndex = match.index + match[0].indexOf(match[1]);
    issues.push({
      type: "Grammar",
      message: "Sentence should start with a capital letter",
      start: charIndex,
      end: charIndex + 1,
      context: getContext(text, charIndex, 30),
      suggestions: [match[1].toUpperCase()],
    });
  }

  // Missing punctuation at end of sentence
  const noPunctRegex = /[a-zA-Z]\s*$/;
  if (noPunctRegex.test(text) && text.length > 10) {
    const lastChar = text.trimEnd().length - 1;
    issues.push({
      type: "Punctuation",
      message: "Sentence should end with punctuation",
      start: lastChar,
      end: lastChar + 1,
      context: getContext(text, lastChar, 30),
      suggestions: [text[lastChar] + "."],
    });
  }

  // Passive voice detection (basic)
  const passiveRegex = /\b(was|were|is|are|been|being)\s+(being\s+)?(\w+ed)\b/gi;
  while ((match = passiveRegex.exec(text)) !== null) {
    issues.push({
      type: "Style",
      message: "Consider using active voice instead of passive",
      start: match.index,
      end: match.index + match[0].length,
      context: getContext(text, match.index, 40),
      suggestions: [],
    });
  }

  // Very + adjective (weak writing)
  const veryRegex = /\bvery\s+(\w+)/gi;
  while ((match = veryRegex.exec(text)) !== null) {
    const strongerWords: { [key: string]: string } = {
      good: "excellent",
      bad: "terrible",
      big: "huge",
      small: "tiny",
      happy: "delighted",
      sad: "devastated",
      tired: "exhausted",
      angry: "furious",
      scared: "terrified",
      hungry: "starving",
    };

    const adj = match[1].toLowerCase();
    if (strongerWords[adj]) {
      issues.push({
        type: "Style",
        message: `Consider using "${strongerWords[adj]}" instead of "very ${adj}"`,
        start: match.index,
        end: match.index + match[0].length,
        context: getContext(text, match.index, 30),
        suggestions: [strongerWords[adj]],
      });
    }
  }

  return issues;
}

function getContext(text: string, position: number, length: number): string {
  const start = Math.max(0, position - length);
  const end = Math.min(text.length, position + length);
  return text.substring(start, end);
}

// ==========================================
// BONUS: Helper function to get issue severity
// ==========================================
export function getIssueSeverity(issue: GrammarIssue): "high" | "medium" | "low" {
  if (issue.type === "Grammar" || issue.type === "Spelling") return "high";
  if (issue.type === "Punctuation") return "medium";
  return "low";
}

// ==========================================
// BONUS: Get statistics
// ==========================================
export function getTextStatistics(text: string) {
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim()).length;
  const paragraphs = text.split(/\n\n+/).filter((p) => p.trim()).length;
  const readingTime = Math.ceil(words / 200); // 200 words per minute

  return {
    words,
    characters,
    charactersNoSpaces,
    sentences,
    paragraphs,
    readingTime,
    averageWordLength: words > 0 ? (charactersNoSpaces / words).toFixed(1) : 0,
    averageSentenceLength: sentences > 0 ? (words / sentences).toFixed(1) : 0,
  };
}