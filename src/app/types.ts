export interface SpellingBeeGeneratorSettings {
  dictionary: string;
  target: string;
  storage: string;
}

export interface SpellingBeeGameSettings {
  letters: string[];
  bound: number;
}

export interface SpellingBeeNYTGameSettings extends SpellingBeeGameSettings {
  minimum: number;
  points: number;
  pivot: string;
}
