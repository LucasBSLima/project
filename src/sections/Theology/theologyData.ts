// Sample theology data
export const doctrines = [
  {
    id: "trinity", 
    name: "The Holy Trinity",
    description: "One God in three divine Persons: Father, Son, and Holy Spirit.",
    scriptural: ["Genesis 1:26", "Matthew 28:19", "2 Corinthians 13:14"],
    councils: ["First Council of Nicaea (325)", "First Council of Constantinople (381)"],
    symbols: ["Triangle", "Trefoil", "Shield of the Trinity"],
    practice: "Sign of the Cross, Baptismal formula, Trinitarian doxologies in liturgy.",
    patristic: [
      { father: "St. Augustine", text: "The Trinity is one God, one nature, and three persons..." },
      { father: "St. Gregory of Nazianzus", text: "I cannot think of the one without quickly being surrounded by the splendor of the three..." }
    ],
    catechism: "CCC 232-267", 
    artwork: "Andrei Rublev's Trinity Icon"
  },
  {
    id: "incarnation", 
    name: "The Incarnation",
    description: "The Son of God assuming human nature in Jesus Christ.",
    scriptural: ["John 1:14", "Philippians 2:5-11", "Colossians 2:9"],
    councils: ["Council of Chalcedon (451)"],
    symbols: ["Manger", "Chi-Rho", "IHS monogram"],
    practice: "Christmas celebration, Adoration of Christ in the Eucharist, Angelus prayer.",
    patristic: [
      { father: "St. Athanasius", text: "The Word became flesh... that we might receive the adoption of sons..." },
      { father: "St. Leo the Great", text: "He who is true God is also true man..." }
    ],
    catechism: "CCC 461-478", 
    artwork: "Fra Angelico's Annunciation"
  },
  {
    id: "eucharist", 
    name: "The Eucharist",
    description: "The real presence of Christ's body and blood in the consecrated bread and wine.",
    scriptural: ["Matthew 26:26-28", "John 6:51-58", "1 Corinthians 11:23-26"],
    councils: ["Fourth Lateran Council (1215)", "Council of Trent (1545-1563)"],
    symbols: ["Bread and Wine", "Host and Chalice", "Wheat and Grapes"],
    practice: "Mass celebration, Eucharistic Adoration, Corpus Christi processions.",
    patristic: [
      { father: "St. Justin Martyr", text: "For we do not receive these things as common bread or common drink..." },
      { father: "St. Cyril of Jerusalem", text: "Since Christ himself has declared the bread to be his body..." }
    ],
    catechism: "CCC 1322-1419", 
    artwork: "The Last Supper by Leonardo da Vinci"
  },
  {
    id: "mariology", 
    name: "Mariology",
    description: "Doctrines concerning Mary, the Mother of God (Theotokos).",
    scriptural: ["Luke 1:28, 42-48", "John 19:26-27", "Revelation 12"],
    councils: ["Council of Ephesus (431)", "Vatican II (1962-1965)"],
    symbols: ["Fleur-de-lis", "Star of the Sea", "Blue Mantle"],
    practice: "Rosary, Marian feast days, Consecration to Mary.",
    patristic: [
      { father: "St. Irenaeus", text: "The knot of Eve's disobedience was untied by Mary's obedience..." },
      { father: "St. Cyril of Alexandria", text: "If anyone does not confess that Emmanuel is truly God..." }
    ],
    catechism: "CCC 484-511, 963-975", 
    artwork: "The Immaculate Conception by Murillo"
  }
];

// Positions for the nodes in the TheologyTree visualization
export const nodePositions = {
  god: { x: "50%", y: "50%" },
  trinity: { x: "50%", y: "15%" },
  incarnation: { x: "18%", y: "50%" },
  eucharist: { x: "82%", y: "50%" },
  mariology: { x: "50%", y: "85%" },
};