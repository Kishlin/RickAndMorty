<script lang="ts">
import { defineComponent } from "vue";

import type { CharacterShortListAsObject } from "src/interfaces";
import CharacterCardSmall from "./characters/CharacterCardSmall.vue";

export default defineComponent({
  data() {
    return {
      notAChar: { id: 3, name: "Albert" },
    };
  },
  components: {
    CharacterCardSmall,
  },
  props: {
    characters: {
      required: true,
      type: Object as () => CharacterShortListAsObject,
    },
  },
});
</script>

<template>
  <div class="container">
    <CharacterCardSmall
      v-for="key in Object.keys(characters)"
      :character="characters[key]"
      :key="key"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
