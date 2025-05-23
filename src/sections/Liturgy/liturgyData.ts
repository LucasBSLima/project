// Data for liturgical seasons
export const liturgicalSeasons = {
  advent: { 
    name: "Advent", 
    color: "#8b5cf6", 
    lightColor: "#c4b5fd", 
    themes: "Preparation, Hope, Waiting", 
    scripture: "Isaiah, John the Baptist", 
    practices: "Advent Wreath, O Antiphons" 
  },
  christmas: { 
    name: "Christmas", 
    color: "#facc15", 
    lightColor: "#fde68a", 
    themes: "Incarnation, Emmanuel", 
    scripture: "Infancy Narratives (Lk, Mt)", 
    practices: "Nativity Scene, Carols" 
  },
  ordinary1: { 
    name: "Ordinary Time I", 
    color: "#22c55e", 
    lightColor: "#86efac", 
    themes: "Public Ministry, Discipleship", 
    scripture: "Gospels (Synoptics)", 
    practices: "Growth in Faith" 
  },
  lent: { 
    name: "Lent", 
    color: "#a855f7", 
    lightColor: "#d8b4fe", 
    themes: "Penance, Conversion, Almsgiving", 
    scripture: "Desert Temptations, Transfiguration", 
    practices: "Fasting, Stations of the Cross" 
  },
  triduum: { 
    name: "Triduum", 
    color: "#dc2626", 
    lightColor: "#fca5a5", 
    themes: "Passion, Death, Burial", 
    scripture: "Last Supper, Passion Narratives", 
    practices: "Holy Thursday Mass, Good Friday Liturgy" 
  },
  easter: { 
    name: "Easter", 
    color: "#f59e0b", 
    lightColor: "#fcd34d", 
    themes: "Resurrection, New Life, Joy", 
    scripture: "Resurrection Appearances, Acts", 
    practices: "Alleluia, Easter Candle, Baptisms" 
  },
  ordinary2: { 
    name: "Ordinary Time II", 
    color: "#16a34a", 
    lightColor: "#4ade80", 
    themes: "Life of the Church, Mission", 
    scripture: "Gospels (Synoptics), Epistles", 
    practices: "Living the Faith" 
  }
};

// Define angles for seasons in the calendar wheel (approximate)
export const seasonAngles = {
  advent: { start: 0, end: 45 },
  christmas: { start: 45, end: 75 },
  ordinary1: { start: 75, end: 115 },
  lent: { start: 115, end: 165 },
  triduum: { start: 165, end: 175 }, // Short segment
  easter: { start: 175, end: 245 },
  ordinary2: { start: 245, end: 360 }
};

// Data for architectural elements
export const architecturalElements = {
  narthex: { 
    title: "Narthex/Vestibule", 
    description: "The entrance area or lobby, separating the secular world from the sacred space.", 
    theological: "Symbolizes preparation and transition into the presence of God." 
  },
  nave: { 
    title: "Nave", 
    description: "The main body of the church where the congregation gathers.", 
    theological: "Represents the 'Ship (Navis) of the Church' carrying the faithful, the Church Militant on earth." 
  },
  sanctuary: { 
    title: "Sanctuary/Chancel", 
    description: "The elevated sacred space containing the altar, ambo, and presider's chair.", 
    theological: "Represents Heaven, the Holy of Holies, the realm of the sacred mysteries." 
  },
  altar: { 
    title: "Altar", 
    description: "The table upon which the Eucharistic sacrifice is offered.", 
    theological: "Symbolizes Christ Himself, the sacrificial victim and the table of the Lord's Supper." 
  },
  ambo: { 
    title: "Ambo/Lectern", 
    description: "The stand from which the Scriptures are proclaimed.", 
    theological: "Represents the empty tomb from which the Resurrection is announced, the mountain of teaching." 
  },
  baptistery: { 
    title: "Baptistery/Font", 
    description: "The area (often near the entrance) with the font for Baptism.", 
    theological: "Symbolizes the womb of the Church, entry into new life in Christ through water and Spirit." 
  },
  tabernacle: { 
    title: "Tabernacle", 
    description: "The fixed, secure container housing the reserved Blessed Sacrament (consecrated hosts).", 
    theological: "Represents God's dwelling place among His people, echoing the Ark of the Covenant." 
  },
  transept: { 
    title: "Transept", 
    description: "The arms of the church building, giving it a cross shape.", 
    theological: "Forms the shape of the cross, reminding of Christ's sacrifice." 
  },
  apse: { 
    title: "Apse", 
    description: "A semicircular recess, often behind the altar, sometimes housing the tabernacle or bishop's chair.", 
    theological: "Can symbolize the heavens or the head of Christ on the cross (in cruciform churches)." 
  }
};

// Define Rosary Mysteries
export const mysteries = {
  joyful: [
    { name: "The Annunciation", fruit: "Humility" },
    { name: "The Visitation", fruit: "Love of Neighbor" },
    { name: "The Nativity", fruit: "Poverty of Spirit" },
    { name: "The Presentation", fruit: "Obedience" },
    { name: "Finding Jesus in the Temple", fruit: "Joy in Finding Jesus" }
  ],
  sorrowful: [
    { name: "The Agony in the Garden", fruit: "Sorrow for Sin" },
    { name: "The Scourging at the Pillar", fruit: "Purity" },
    { name: "The Crowning with Thorns", fruit: "Courage" },
    { name: "The Carrying of the Cross", fruit: "Patience" },
    { name: "The Crucifixion", fruit: "Perseverance" }
  ],
  glorious: [
    { name: "The Resurrection", fruit: "Faith" },
    { name: "The Ascension", fruit: "Hope" },
    { name: "The Descent of the Holy Spirit", fruit: "Love of God" },
    { name: "The Assumption", fruit: "Grace of a Happy Death" },
    { name: "The Coronation of Mary", fruit: "Trust in Mary's Intercession" }
  ],
  luminous: [
    { name: "The Baptism in the Jordan", fruit: "Openness to the Holy Spirit" },
    { name: "The Wedding at Cana", fruit: "To Jesus through Mary" },
    { name: "Proclamation of the Kingdom", fruit: "Repentance and Trust in God" },
    { name: "The Transfiguration", fruit: "Desire for Holiness" },
    { name: "The Institution of the Eucharist", fruit: "Adoration" }
  ]
};

// Data for the Seven Sacraments
export const sacraments = {
  initiation: [
    { 
      id: "baptism", 
      name: "Baptism", 
      symbol: "💧", 
      matter: "Water", 
      form: "Trinitarian Formula", 
      minister: "Bishop, Priest, Deacon (ordinary)", 
      effect: "Removes Original Sin, incorporates into Christ & Church", 
      scripture: "Mt 28:19, Acts 2:38" 
    },
    { 
      id: "confirmation", 
      name: "Confirmation", 
      symbol: "🕊️", 
      matter: "Sacred Chrism (Oil)", 
      form: "'Be sealed with the Gift of the Holy Spirit'", 
      minister: "Bishop (ordinary)", 
      effect: "Strengthens with Holy Spirit, completes Baptismal grace", 
      scripture: "Acts 8:14-17, Acts 19:5-6" 
    },
    { 
      id: "eucharist", 
      name: "Eucharist", 
      symbol: "🍞🍷", 
      matter: "Wheat Bread & Grape Wine", 
      form: "Words of Institution", 
      minister: "Priest (validly ordained)", 
      effect: "Real Presence of Christ, spiritual nourishment, unity", 
      scripture: "Lk 22:19-20, Jn 6, 1 Cor 11:23-26" 
    }
  ],
  healing: [
    { 
      id: "reconciliation", 
      name: "Penance & Reconciliation", 
      symbol: "🔑", 
      matter: "Contrition, Confession, Satisfaction", 
      form: "Words of Absolution", 
      minister: "Priest", 
      effect: "Forgiveness of sins committed after Baptism", 
      scripture: "Jn 20:22-23, Jas 5:16" 
    },
    { 
      id: "anointing", 
      name: "Anointing of the Sick", 
      symbol: "🌿", 
      matter: "Oil of the Sick", 
      form: "Prayer of Anointing", 
      minister: "Priest", 
      effect: "Spiritual healing, sometimes physical; forgiveness of sins", 
      scripture: "Jas 5:14-15, Mk 6:13" 
    }
  ],
  service: [
    { 
      id: "holyOrders", 
      name: "Holy Orders", 
      symbol: "✝️", 
      matter: "Laying on of Hands", 
      form: "Consecratory Prayer", 
      minister: "Bishop", 
      effect: "Confers ordained ministry (Deacon, Priest, Bishop)", 
      scripture: "Acts 6:6, 1 Tim 4:14, 2 Tim 1:6" 
    },
    { 
      id: "matrimony", 
      name: "Matrimony", 
      symbol: "💍", 
      matter: "Mutual Consent of Spouses", 
      form: "Exchange of Vows", 
      minister: "Spouses themselves (priest/deacon witnesses)", 
      effect: "Unites man & woman in lifelong covenant, mirrors Christ & Church", 
      scripture: "Gen 2:24, Eph 5:25-32, Mk 10:9" 
    }
  ]
};