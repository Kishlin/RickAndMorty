<script lang="ts">
import { defineComponent } from "vue";

import CharacterCardBig from "./characters/CharacterCardBig.vue";

export default defineComponent({
  components: {
    CharacterCardBig,
  },
  props: ["character"],
});
</script>

<template>
  <section>
    <div class="link">
      <router-link to="/characters" custom v-slot="{ navigate }">
        <button @click="navigate" @keypress.enter="navigate" role="link">
          Back to characters
        </button>
      </router-link>
    </div>
    <p v-if="undefined === character">This character does not exist.</p>
    <CharacterCardBig v-else :character="character" />
  </section>
</template>

<style scoped>
button[role="link"] {
  padding: 5px 10px;

  cursor: pointer;
}

.link {
  text-align: right;
  margin-bottom: 20px;
}
</style>
