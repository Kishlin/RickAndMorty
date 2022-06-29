import { reactive } from "vue";

import type { CharacterShort } from "src/interfaces";

declare type appStore = {
  characters: CharacterShort[];
};

export const store: appStore = reactive({
  characters: [],
});
