// Bible Structure Data
export const bibleStructure = {
  oldTestament: {
    torah: ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"],
    historical: ["Joshua", "Judges", "Ruth", "1 Samuel", /* ... shortened */ "Esther"],
    wisdom: ["Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Songs"],
    prophets: {
      major: ["Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel"],
      minor: ["Hosea", "Joel", /* ... shortened */ "Malachi"]
    }
  },
  newTestament: {
    gospels: ["Matthew", "Mark", "Luke", "John"],
    historical: ["Acts"],
    paulineEpistles: ["Romans", "1 Corinthians", /* ... shortened */ "Philemon"],
    generalEpistles: ["Hebrews", "James", /* ... shortened */ "Jude"],
    apocalyptic: ["Revelation"]
  }
};

// Book Information Data
export const bookInfo = {
  "Genesis": {
    author: "Moses (Traditional)", 
    date: "~1440-1400 BC",
    structure: "50 chapters: Creation, Fall, Flood, Patriarchs (Abraham, Isaac, Jacob, Joseph)",
    themes: ["Creation", "Covenant", "Fall", "Redemption", "Election", "Promise"],
    commentary: "Genesis establishes the foundational themes of the Bible: creation, fall, and God's redemptive plan through covenant relationship.",
    theologicalSignificance: "Establishes original sin doctrine, covenant theology, and prefigures Christ through types like Melchizedek.",
    literaryFeatures: "Uses chiastic structures, genealogies as narrative framework, and establishes motifs that recur throughout scripture.",
    keyScenes: [
      { title: "Creation", reference: "Genesis 1-2", summary: "God creates the heavens and earth in six days...", theological: "Establishes God as creator..." },
      { title: "Fall of Humanity", reference: "Genesis 3", summary: "Adam and Eve disobey God...", theological: "Origin of sin and death..." },
      { title: "Abrahamic Covenant", reference: "Genesis 12, 15, 17", summary: "God calls Abraham...", theological: "Establishes covenant theology..." }
    ],
    typology: [
      { type: "Adam as type of Christ", explanation: "As the 'first Adam' brought sin..." },
      { type: "Noah's Ark as type of Baptism", explanation: "Salvation through water prefigures baptism..." },
      { type: "Melchizedek as type of Christ's priesthood", explanation: "His unique priesthood prefigures Christ's..." }
    ]
  },
  "John": {
    author: "John the Apostle", 
    date: "~90-100 AD",
    structure: "21 chapters: Prologue (1:1-18), Book of Signs (1:19-12:50), Book of Glory (13:1-20:31), Epilogue (21)",
    themes: ["Divinity of Christ", "Light & Darkness", "Life", "Truth", "Witness", "Belief"],
    commentary: "John's Gospel uniquely emphasizes Christ's divine nature, using the 'I Am' statements that echo Exodus 3:14.",
    theologicalSignificance: "Critical for Trinitarian and Christological doctrines, especially at the Council of Nicaea.",
    literaryFeatures: "Uses recurring symbols, inclusio, and dualism (light/dark, above/below) as literary devices.",
    keyScenes: [
      { title: "The Word Becomes Flesh", reference: "John 1:1-18", summary: "The eternal Word (Logos)... becomes incarnate...", theological: "Affirms Christ's pre-existence..." },
      { title: "Wedding at Cana", reference: "John 2:1-11", summary: "Jesus performs his first miracle...", theological: "Reveals Christ's glory..." },
      { title: "Crucifixion and Resurrection", reference: "John 19-20", summary: "Jesus is crucified, dies, is buried, and rises...", theological: "John emphasizes Jesus laid down his life willingly..." }
    ],
    iAmStatements: [
      { statement: "I am the bread of life", reference: "John 6:35, 48, 51" },
      { statement: "I am the light of the world", reference: "John 8:12, 9:5" },
      { statement: "I am the door of the sheep", reference: "John 10:7, 9" },
      { statement: "I am the good shepherd", reference: "John 10:11, 14" },
      { statement: "I am the resurrection and the life", reference: "John 11:25" },
      { statement: "I am the way, the truth, and the life", reference: "John 14:6" },
      { statement: "I am the true vine", reference: "John 15:1, 5" }
    ]
  },
  "Revelation": {
    author: "John (traditionally identified with the Apostle)", 
    date: "~95 AD",
    structure: "22 chapters: Letters to the Seven Churches (1-3), Heavenly Vision (4-5), Seven Seals, Trumpets, and Bowls (6-16), Fall of Babylon and Final Judgment (17-20), New Heaven and New Earth (21-22)",
    themes: ["Christ's Victory", "Persecution", "Judgment", "Worship", "New Creation"],
    commentary: "Apocalyptic literature using symbolic imagery to reveal spiritual realities and the ultimate triumph of God.",
    theologicalSignificance: "Completes the biblical narrative arc from creation to new creation, emphasizing Christ's ultimate victory.",
    literaryFeatures: "Rich symbolism, numerology, and intertextual references to Old Testament prophetic literature.",
    symbolism: [
      { symbol: "Seven Churches", meaning: "Represent actual churches but also symbolic of the Church universal" },
      { symbol: "Lamb who was slain", meaning: "Christ in his sacrificial and victorious roles" },
      { symbol: "Babylon the Great", meaning: "Symbolizes worldly systems opposed to God" },
      { symbol: "144,000 sealed", meaning: "The complete number of God's people" }
    ],
    interpretiveTraditions: [
      { approach: "Preterist", explanation: "Views most prophecies as fulfilled in the early centuries" },
      { approach: "Historicist", explanation: "Interprets Revelation as a prophetic overview of Church history" },
      { approach: "Futurist", explanation: "Places most prophecies in the end times" },
      { approach: "Idealist/Spiritual", explanation: "Views Revelation as symbolic representation of ongoing spiritual conflict" }
    ]
  }
};