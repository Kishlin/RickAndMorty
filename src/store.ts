import { reactive } from "vue";

import type { CharacterShortListAsObject } from "src/interfaces";

declare type appStore = {
  characters: CharacterShortListAsObject;
};

export const store: appStore = reactive({
  characters: {},
});
