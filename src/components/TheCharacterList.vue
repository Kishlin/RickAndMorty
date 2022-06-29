<script lang="ts">
import { defineComponent } from "vue";

import type { CharacterShort } from "src/interfaces";
import CharacterStatusFilter from "../components/characters/CharacterStatusFilter.vue";
import SearchBar from "../components/shared/SearchBar.vue";
import PaginatedCharactersList from "../components/characters/PaginatedCharactersList.vue";

export default defineComponent({
  data() {
    return {
      filter: "",
      showDead: true,
      showAlive: true,
      showUnknown: true,
    };
  },
  components: {
    CharacterStatusFilter,
    SearchBar,
    PaginatedCharactersList,
  },
  props: {
    characters: {
      required: true,
      type: Array as () => CharacterShort[],
    },
  },
  computed: {
    filteredCharacters(): CharacterShort[] {
      return this.characters.filter(
        (character) =>
          character.name
            .toLocaleLowerCase()
            .includes(this.filter.toLocaleLowerCase()) &&
          (("Alive" === character.status && this.showAlive) ||
            ("Dead" === character.status && this.showDead) ||
            ("unknown" === character.status && this.showUnknown))
      );
    },
  },
});
</script>

<template>
  <div>
    <section>
      <SearchBar v-model="filter" placeholder="Search..." />
      <CharacterStatusFilter
        :dead="showDead"
        :alive="showAlive"
        :unknown="showUnknown"
        @toggleDead="() => (this.showDead = !showDead)"
        @toggleAlive="() => (this.showAlive = !showAlive)"
        @toggleUnknown="() => (this.showUnknown = !showUnknown)"
      />
    </section>
    <section v-if="0 === filteredCharacters.length">
      <p class="message">
        No character to display. Try to play with the filters.
      </p>
    </section>
    <PaginatedCharactersList v-else :characters="filteredCharacters" />
  </div>
</template>

<style scoped>
.message {
  margin-top: 10px;
  text-align: center;
}
</style>
