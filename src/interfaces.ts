export type CharacterStatus = "unknown" | "Alive" | "Dead";

export type CharacterGender = "Female" | "Male" | "Genderless" | "unknown";

export interface Location {
  name: string;
  type: string;
  dimension: string;
}

export interface Episode {
  name: string;
  episode: string;
}

export type LocationListAsObject = {
  [key: number]: Location;
};

export type EpisodeListAsObject = {
  [key: number]: Episode;
};

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
