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
    <TheCharacterList :characters="characters" />
  </section>
</template>
