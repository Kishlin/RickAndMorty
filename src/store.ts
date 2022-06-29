import { reactive } from "vue";

import { fetchLocation, fetchEpisode } from "./api";
import type { APILocationResponse, APIEpisodeResponse } from "./api";

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

const fillLocationOnResponse = (data: APILocationResponse) => {
  if (undefined === data.error) {
    const { id, name, type, dimension } = data;

    store.locations = {
      [id]: { name, type, dimension },
      ...store.locations,
    };
  }
};

const fillEpisodeOnResponse = (data: APIEpisodeResponse) => {
  if (undefined === data.error) {
    const { id, name, episode } = data;

    store.episodes = {
      [id]: { name, episode },
      ...store.episodes,
    };
  }
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
      fetchLocation(id, fillLocationOnResponse);
    }

    return store.locations[id];
  },
  episodeWithId: (id: number) => {
    if (undefined === store.episodes[id]) {
      fetchEpisode(id, fillEpisodeOnResponse);
    }

    return store.episodes[id];
  },
});
