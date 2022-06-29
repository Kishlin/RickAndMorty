import type { CharacterShort } from "src/interfaces";

export type CharactersResponse = {
  info: {
    next: string | null;
  };
  results: CharacterShort[];
};

export const charactersFirstPageUrl =
  "https://rickandmortyapi.com/api/character/";

export const loadCharacters = (
  url: string,
  onResponse: (out: CharactersResponse) => void
) => {
  fetch(url)
    .then((response) => response.json())
    .then(onResponse);
};
