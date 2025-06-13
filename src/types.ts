export interface BookInfo {
  author: string;
  date: string;
  structure: string;
  themes: string[];
  commentary: string;
  theologicalSignificance: string;
  literaryFeatures: string;
  keyScenes?: {
    title: string;
    reference: string;
    summary: string;
    theological: string;
  }[];
  typology?: {
    type: string;
    explanation: string;
  }[];
  iAmStatements?: {
    statement: string;
    reference: string;
  }[];
  symbolism?: {
    symbol: string;
    meaning: string;
  }[];
  interpretiveTraditions?: {
    approach: string;
    explanation: string;
  }[];
}

export interface CulturalItem {
  id: string;
  title: string;
  artist: string;
  year: string;
  medium: string;
  description: string;
  theologicalThemes: string[];
  imageUrl: string;
  details: string;
}

export interface Doctrine {
  id: string;
  name: string;
  description: string;
  scriptural: string[];
  councils: string[];
  symbols: string[];
  practice: string;
  patristic: {
    father: string;
    text: string;
  }[];
  catechism: string;
  artwork: string;
}
