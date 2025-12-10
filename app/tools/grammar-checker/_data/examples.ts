export interface GrammarExample {
  title: string;
  text: string;
  category: "common-mistakes" | "academic" | "business" | "casual";
}

export const grammarExamples: GrammarExample[] = [
  {
    title: "Common Spelling Mistakes",
    text: "I recieved your email yesterday. The occurence of teh error was unusual. We need to seperate the issues and adress them individualy.",
    category: "common-mistakes",
  },
  {
    title: "Subject-Verb Agreement",
    text: "The team are working hard. Each of the students have completed their homework. Neither John nor his friends was ready.",
    category: "common-mistakes",
  },
  {
    title: "Academic Writing Sample",
    text: "This research demonstrates that climate change have significant impacts on biodiversity. The data shows clear trends over the past decade. Further study are needed to understand the full implications.",
    category: "academic",
  },
  {
    title: "Business Email",
    text: "Dear Sir/Madam, I am writing to enquire about you're services. We would like to recieve more informations about your products. Please send me the catologue at your earliest convienence.",
    category: "business",
  },
  {
    title: "Punctuation Issues",
    text: "Hello how are you today. Its a beautiful day isnt it! I think we should go their tomorrow, dont you. Lets meet at 3 oclock.",
    category: "casual",
  },
  {
    title: "Mixed Errors",
    text: "Their are many reasons why grammer is important. First of all it effects how people percieve you. Second, good grammer makes your writing more clear. Finally it shows profesionalism.",
    category: "common-mistakes",
  },
];

export const getExamplesByCategory = (
  category: GrammarExample["category"]
): GrammarExample[] => {
  return grammarExamples.filter((example) => example.category === category);
};

export const getRandomExample = (): GrammarExample => {
  return grammarExamples[Math.floor(Math.random() * grammarExamples.length)];
};

// Common grammar rules for reference
export const grammarRules = {
  commonMistakes: [
    {
      rule: "Their vs. There vs. They're",
      explanation:
        "Their = possessive, There = location, They're = they are",
      examples: [
        "Their car is red.",
        "Put it over there.",
        "They're going home.",
      ],
    },
    {
      rule: "Your vs. You're",
      explanation: "Your = possessive, You're = you are",
      examples: ["Your book is here.", "You're very kind."],
    },
    {
      rule: "Its vs. It's",
      explanation: "Its = possessive, It's = it is",
      examples: ["The dog wagged its tail.", "It's a sunny day."],
    },
    {
      rule: "Affect vs. Effect",
      explanation:
        "Affect = verb (to influence), Effect = noun (result)",
      examples: [
        "The weather affects my mood.",
        "The effect was immediate.",
      ],
    },
  ],
  punctuationRules: [
    {
      rule: "Apostrophes",
      explanation: "Used for possession and contractions, not for plurals",
      examples: ["John's book", "It's raining", "NOT: Apple's for sale"],
    },
    {
      rule: "Commas in Lists",
      explanation: "Use commas to separate items in a list",
      examples: ["I bought apples, oranges, and bananas."],
    },
  ],
};

// Tips for better grammar
export const grammarTips = [
  "Read your text out loud to catch errors",
  "Take breaks before proofreading",
  "Use our grammar checker as a first step, then review manually",
  "Learn one grammar rule at a time",
  "Keep a list of your common mistakes",
  "Read well-written content regularly",
  "Practice writing daily",
  "Don't rely solely on automated tools",
];