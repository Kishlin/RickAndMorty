<script lang="ts">
import { defineComponent } from "vue";

import type { CharacterShort } from "src/interfaces";
import CharacterCardSmall from "./characters/CharacterCardSmall.vue";
import CharacterStatusFilter from "../components/characters/CharacterStatusFilter.vue";
import PaginationNav from "./shared/PaginationNav.vue";
import SearchBar from "../components/shared/SearchBar.vue";

export default defineComponent({
  data() {
    return {
      filter: "",
      showDead: true,
      showAlive: true,
      showUnknown: true,
      shownPerPage: 20,
      requestedPage: 0,
    };
  },
  components: {
    CharacterStatusFilter,
    CharacterCardSmall,
    PaginationNav,
    SearchBar,
  },
  props: {
    characters: {
      required: true,
      type: Array as () => CharacterShort[],
    },
  },
  computed: {
    currentPage(): number {
      return Math.min(this.requestedPage, this.maxPage - 1);
    },
    maxPage(): number {
      return Math.ceil(this.filteredCharacters.length / this.shownPerPage);
    },
    charactersToDisplay(): CharacterShort[] {
      const startIndex = this.shownPerPage * this.currentPage;

      return this.filteredCharacters.slice(
        startIndex,
        startIndex + this.shownPerPage
      );
    },
    filteredCharacters() {
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
  methods: {
    moveToPage(page: number): void {
      this.requestedPage = Math.min(page, this.maxPage);
    },
  },
});
</script>

<template>
  <div>
    <SearchBar v-model="filter" placeholder="Search..." />
    <CharacterStatusFilter
      :dead="showDead"
      :alive="showAlive"
      :unknown="showUnknown"
      :toggle-dead="() => (this.showDead = !showDead)"
      :toggle-alive="() => (this.showAlive = !showAlive)"
      :toggle-unknown="() => (this.showUnknown = !showUnknown)"
    />
    <PaginationNav
      :pages="maxPage"
      :current-page="Math.min(currentPage, maxPage - 1)"
      :move-to-page="moveToPage"
    />
    <div class="characters">
      <CharacterCardSmall
        v-for="character in charactersToDisplay"
        :character="character"
        :key="character.id"
      />
    </div>
  </div>
</template>

<style scoped>
.characters {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}
</style>
