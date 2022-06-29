import { reactive } from "vue";

import type { CharacterShort } from "src/interfaces";

declare type appStore = {
  characters: CharacterShort[];
  characterWithId: (id: number) => CharacterShort|undefined;
};

export const store: appStore = reactive({
  characters: [],
  characterWithId: (id: number) => {
    return store.characters.find((character: CharacterShort) => {
      return id === character.id;
    });
  },
});
