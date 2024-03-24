let questions = [
      {
        numb: 1,
        question: "What is the capital of France?",
        answer: "A. Paris",
        options: [
          "A. Paris",
          "B. Rome",
          "C. Madrid",
          "D. Berlin"
        ]
      },
      {
        numb: 2,
        question: "What is the chemical symbol for water?",
        answer: "C. H2O",
        options: [
          "A. CO2",
          "B. NaCl",
          "C. H2O",
          "D. O2"
        ]
      },
      {
        numb: 3,
        question: "Who wrote 'To Kill a Mockingbird'?",
        answer: "B. Harper Lee",
        options: [
          "A. Mark Twain",
          "B. Harper Lee",
          "C. J.K. Rowling",
          "D. Ernest Hemingway"
        ]
      },
      {
        numb: 4,
        question: "What is the tallest mountain in the world?",
        answer: "A. Mount Everest",
        options: [
          "A. Mount Everest",
          "B. K2",
          "C. Kangchenjunga",
          "D. Lhotse"
        ]
      },
      {
        numb: 5,
        question: "What is the powerhouse of the cell?",
        answer: "D. Mitochondria",
        options: [
          "A. Nucleus",
          "B. Cell Membrane",
          "C. Ribosome",
          "D. Mitochondria"
        ]
      },
      {
        numb: 6,
        question: "What is the square root of 64?",
        answer: "B. 8",
        options: [
          "A. 6",
          "B. 8",
          "C. 10",
          "D. 12"
        ]
      },
      {
        numb: 7,
        question: "Who discovered gravity?",
        answer: "A. Isaac Newton",
        options: [
          "A. Isaac Newton",
          "B. Albert Einstein",
          "C. Galileo Galilei",
          "D. Nicolaus Copernicus"
        ]
      },
      {
        numb: 8,
        question: "What is the chemical symbol for gold?",
        answer: "C. Au",
        options: [
          "A. Ag",
          "B. Fe",
          "C. Au",
          "D. Cu"
        ]
      },
      {
        numb: 9,
        question: "What is the largest organ in the human body?",
        answer: "B. Skin",
        options: [
          "A. Liver",
          "B. Skin",
          "C. Heart",
          "D. Brain"
        ]
      },
      {
        numb: 10,
        question: "Who painted the Mona Lisa?",
        answer: "C. Leonardo da Vinci",
        options: [
          "A. Pablo Picasso",
          "B. Vincent van Gogh",
          "C. Leonardo da Vinci",
          "D. Michelangelo"
        ]
      },
      {
        numb: 11,
        question: "What is the capital of Japan?",
        answer: "D. Tokyo",
        options: [
          "A. Kyoto",
          "B. Osaka",
          "C. Nagoya",
          "D. Tokyo"
        ]
      },
      {
        numb: 12,
        question: "What is the formula for the area of a circle?",
        answer: "B. πr²",
        options: [
          "A. πr",
          "B. πr²",
          "C. 2πr",
          "D. 2πr²"
        ]
      },
      {
        numb: 13,
        question: "Who wrote 'Romeo and Juliet'?",
        answer: "A. William Shakespeare",
        options: [
          "A. William Shakespeare",
          "B. Charles Dickens",
          "C. Jane Austen",
          "D. F. Scott Fitzgerald"
        ]
      },
      {
        numb: 14,
        question: "What is the capital of Australia?",
        answer: "B. Canberra",
        options: [
          "A. Sydney",
          "B. Canberra",
          "C. Melbourne",
          "D. Perth"
        ]
      },
      {
        numb: 15,
        question: "What is the chemical symbol for iron?",
        answer: "A. Fe",
        options: [
          "A. Fe",
          "B. Ir",
          "C. In",
          "D. Au"
        ]
      },
      {
        numb: 16,
        question: "What is the largest planet in our solar system?",
        answer: "A. Jupiter",
        options: [
          "A. Jupiter",
          "B. Saturn",
          "C. Uranus",
          "D. Neptune"
        ]
      },
      {
        numb: 17,
        question: "Who wrote '1984'?",
        answer: "C. George Orwell",
        options: [
          "A. Aldous Huxley",
          "B. J.R.R. Tolkien",
          "C. George Orwell",
          "D. H.G. Wells"
        ]
      },
      {
        numb: 18,
        question: "What is the chemical symbol for sodium?",
        answer: "B. Na",
        options: [
          "A. So",
          "B. Na",
          "C. Sa",
          "D. Sn"
        ]
      },
      {
        numb: 19,
        question: "What is the capital of Brazil?",
        answer: "C. Brasília",
        options: [
          "A. Rio de Janeiro",
          "B. São Paulo",
          "C. Brasília",
          "D. Salvador"
        ]
      },
      {
        numb: 20,
        question: "What is the chemical symbol for helium?",
        answer: "D. He",
        options: [
          "A. H",
          "B. Hee",
          "C. Hel",
          "D. He"
        ]
      },
      {
        numb: 21,
        question: "What is the largest ocean in the world?",
        answer: "A. Pacific Ocean",
        options: [
          "A. Pacific Ocean",
          "B. Atlantic Ocean",
          "C. Indian Ocean",
          "D. Arctic Ocean"
        ]
      },
      {
        numb: 22,
        question: "Who developed the theory of relativity?",
        answer: "B. Albert Einstein",
        options: [
          "A. Isaac Newton",
          "B. Albert Einstein",
          "C. Galileo Galilei",
          "D. Stephen Hawking"
        ]
      },
      {
        numb: 23,
        question: "What is the chemical symbol for silver?",
        answer: "A. Ag",
        options: [
          "A. Ag",
          "B. Si",
          "C. Sv",
          "D. S"
        ]
      },
      {
        numb: 24,
        question: "What is the capital of Russia?",
        answer: "B. Moscow",
        options: [
          "A. Saint Petersburg",
          "B. Moscow",
          "C. Novosibirsk",
          "D. Yekaterinburg"
        ]
      },
      {
        numb: 25,
        question: "Who wrote 'The Great Gatsby'?",
        answer: "D. F. Scott Fitzgerald",
        options: [
          "A. Ernest Hemingway",
          "B. Fyodor Dostoevsky",
          "C. George Orwell",
          "D. F. Scott Fitzgerald"
        ]
      },
      {
        numb: 26,
        question: "What is the chemical symbol for carbon?",
        answer: "B. C",
        options: [
          "A. Cr",
          "B. C",
          "C. Co",
          "D. Ca"
        ]
      },
      {
        numb: 27,
        question: "What is the tallest mammal in the world?",
        answer: "A. Giraffe",
        options: [
          "A. Giraffe",
          "B. Elephant",
          "C. Blue Whale",
          "D. Moose"
        ]
      },
      {
        numb: 28,
        question: "What is the chemical symbol for potassium?",
        answer: "C. K",
        options: [
          "A. Ka",
          "B. Pt",
          "C. K",
          "D. Ko"
        ]
      },
      {
        numb: 29,
        question: "What is the capital of Canada?",
        answer: "D. Ottawa",
        options: [
          "A. Toronto",
          "B. Vancouver",
          "C. Montreal",
          "D. Ottawa"
        ]
      },
      {
        numb: 30,
        question: "What is the chemical symbol for nitrogen?",
        answer: "C. N",
        options: [
          "A. Ni",
          "B. Ng",
          "C. N",
          "D. Ne"
        ]
      },
      {
        numb: 31,
        question: "Who painted 'Starry Night'?",
        answer: "B. Vincent van Gogh",
        options: [
          "A. Leonardo da Vinci",
          "B. Vincent van Gogh",
          "C. Pablo Picasso",
          "D. Claude Monet"
        ]
      },
      {
        numb: 32,
        question: "What is the capital of South Korea?",
        answer: "C. Seoul",
        options: [
          "A. Busan",
          "B. Incheon",
          "C. Seoul",
          "D. Daegu"
        ]
      },
      {
        numb: 33,
        question: "What is the chemical symbol for calcium?",
        answer: "D. Ca",
        options: [
          "A. Cl",
          "B. Ce",
          "C. Cm",
          "D. Ca"
        ]
      },
      {
        numb: 34,
        question: "What is the chemical symbol for lead?",
        answer: "B. Pb",
        options: [
          "A. L",
          "B. Pb",
          "C. Pd",
          "D. Pt"
        ]
      },
      {
        numb: 35,
        question: "Who wrote 'Pride and Prejudice'?",
        answer: "A. Jane Austen",
        options: [
          "A. Jane Austen",
          "B. Emily Brontë",
          "C. Charlotte Brontë",
          "D. Virginia Woolf"
        ]
      },
      {
        numb: 36,
        question: "What is the capital of Germany?",
        answer: "A. Berlin",
        options: [
          "A. Berlin",
          "B. Munich",
          "C. Frankfurt",
          "D. Hamburg"
        ]
      },
      {
        numb: 37,
        question: "What is the chemical symbol for oxygen?",
        answer: "D. O",
        options: [
          "A. Oy",
          "B. Om",
          "C. Ox",
          "D. O"
        ]
      },
      {
        numb: 38,
        question: "What is the smallest country in the world?",
        answer: "C. Vatican City",
        options: [
          "A. Monaco",
          "B. San Marino",
          "C. Vatican City",
          "D. Nauru"
        ]
      },
      {
        numb: 39,
        question: "What is the chemical symbol for mercury?",
        answer: "A. Hg",
        options: [
          "A. Hg",
          "B. Me",
          "C. Mg",
          "D. Hr"
        ]
      },
      {
        numb: 40,
        question: "Who wrote 'Hamlet'?",
        answer: "A. William Shakespeare",
        options: [
          "A. William Shakespeare",
          "B. Charles Dickens",
          "C. F. Scott Fitzgerald",
          "D. Mark Twain"
        ]
      },
      {
        numb: 41,
        question: "What is the capital of China?",
        answer: "B. Beijing",
        options: [
          "A. Shanghai",
          "B. Beijing",
          "C. Guangzhou",
          "D. Shenzhen"
        ]
      },
      {
        numb: 42,
        question: "What is the chemical symbol for silver?",
        answer: "A. Ag",
        options: [
          "A. Ag",
          "B. Si",
          "C. Sv",
          "D. S"
        ]
      },
      {
        numb: 43,
        question: "Who discovered penicillin?",
        answer: "C. Alexander Fleming",
        options: [
          "A. Albert Einstein",
          "B. Isaac Newton",
          "C. Alexander Fleming",
          "D. Marie Curie"
        ]
      },
      {
        numb: 44,
        question: "What is the chemical symbol for sodium?",
        answer: "B. Na",
        options: [
          "A. So",
          "B. Na",
          "C. Sa",
          "D. Sn"
        ]
      },
      {
        numb: 45,
        question: "What is the capital of India?",
        answer: "C. New Delhi",
        options: [
          "A. Mumbai",
          "B. Bangalore",
          "C. New Delhi",
          "D. Kolkata"
        ]
      },
      {
        numb: 46,
        question: "What is the chemical symbol for tungsten?",
        answer: "D. W",
        options: [
          "A. Tg",
          "B. Tu",
          "C. Ts",
          "D. W"
        ]
      },
      {
        numb: 47,
        question: "Who wrote 'The Catcher in the Rye'?",
        answer: "A. J.D. Salinger",
        options: [
          "A. J.D. Salinger",
          "B. Ernest Hemingway",
          "C. F. Scott Fitzgerald",
          "D. Harper Lee"
        ]
      },
      {
        numb: 48,
        question: "What is the chemical symbol for zinc?",
        answer: "C. Zn",
        options: [
          "A. Zc",
          "B. Zm",
          "C. Zn",
          "D. Zk"
        ]
      },
      {
        numb: 49,
        question: "What is the largest desert in the world?",
        answer: "B. Sahara Desert",
        options: [
          "A. Arabian Desert",
          "B. Sahara Desert",
          "C. Gobi Desert",
          "D. Kalahari Desert"
        ]
      },
      {
        numb: 50,
        question: "What is the chemical symbol for chlorine?",
        answer: "A. Cl",
        options: [
          "A. Cl",
          "B. Ch",
          "C. Ce",
          "D. Cn"
        ]
      }
    ];

  
  