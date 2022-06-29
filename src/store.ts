import { reactive } from "vue";

import type {
  CharacterShort,
  Episode,
  EpisodeListAsObject,
  Location,
  LocationListAsObject,
} from "src/interfaces";

declare type appStore = {
  characters: CharacterShort[];
  episodes: EpisodeListAsObject;
  locations: LocationListAsObject;
  episodeWithId: (id: number) => Episode | undefined;
  locationWithId: (id: number) => Location | undefined;
  characterWithId: (id: number) => CharacterShort | undefined;
};

const fetchLocation = (id: number) => {
  fetch(`https://rickandmortyapi.com/api/location/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (undefined === data.error) {
        const { name, type, dimension } = data;

        store.locations = {
          [id]: { name, type, dimension },
          ...store.locations,
        };
      }
    });
};

const fetchEpisode = (id: number) => {
  fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (undefined === data.error) {
        const { name, episode } = data;

        store.episodes = {
          [id]: { name, episode },
          ...store.episodes,
        };
      }
    });
};

export const store: appStore = reactive({
  episodes: {},
  locations: {},
  characters: [],
  characterWithId: (id: number) => {
    return store.characters.find((character: CharacterShort) => {
      return id === character.id;
    });
  },
  locationWithId: (id: number) => {
    if (undefined === store.locations[id]) {
      fetchLocation(id);
    }

    return store.locations[id];
  },
  episodeWithId: (id: number) => {
    if (undefined === store.episodes[id]) {
      fetchEpisode(id);
    }

    return store.episodes[id];
  },
});
