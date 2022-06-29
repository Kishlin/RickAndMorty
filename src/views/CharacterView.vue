<script lang="ts">
import { defineComponent } from "vue";

import { store } from "../store";

import CharacterCardBig from "../components/characters/CharacterCardBig.vue";

export default defineComponent({
  components: {
    CharacterCardBig,
  },
  computed: {
    /**
     * Must be computed and not a property, to be updated as soon as the character is available in the store on loading.
     */
    character() {
      return store.characterWithId(+this.$route.params.id);
    },
  },
});
</script>

<template>
  <section>
    <div class="link">
      <router-link to="/characters" custom v-slot="{ navigate }">
        <span @click="navigate" @keypress.enter="navigate" role="link"
          >Back to characters</span
        >
      </router-link>
    </div>
    <p v-if="undefined === character">This character does not exist.</p>
    <CharacterCardBig v-else :character="character" />
  </section>
</template>

<style scoped>
span[role="link"] {
  background-color: var(--color-heading);
  border: var(--color-border) 3px solid;
  border-radius: 5px;

  color: var(--vt-c-indigo);

  padding: 5px 10px;

  cursor: pointer;
}

span[role="link"]:hover {
  border-color: var(--color-border-hover);
}

.link {
  text-align: right;
  margin-bottom: 20px;
}
</style>
