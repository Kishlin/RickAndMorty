<script lang="ts">
import { defineComponent } from "vue";

import { store } from "../store";

import TheCharacterList from "../components/TheCharacterList.vue";

export default defineComponent({
  components: {
    TheCharacterList,
  },
  data() {
    return {
      characters: store.characters,
    };
  },
});
</script>

<template>
  <section>
    <p>Characters: {{ Object.keys(characters).length }}</p>
    <TheCharacterList :characters="characters" />
  </section>
</template>
