export type CharacterStatus = "unknown" | "Alive" | "Dead";

export type CharacterGender = "Female" | "Male" | "Genderless" | "unknown";

export interface CharacterOrigin {
  name: string;
  url: string;
}

export interface CharacterLocation {
  name: string;
  url: string;
}

export interface CharacterShort {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: CharacterOrigin;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type CharacterShortListAsObject = {
  [key: number]: CharacterShort;
};
