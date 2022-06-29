<script lang="ts">
import { defineComponent } from "vue";

import type { CharacterShort } from "src/interfaces";
import CharacterCardSmall from "./characters/CharacterCardSmall.vue";
import PaginationNav from "./shared/PaginationNav.vue";
import SearchBar from "../components/shared/SearchBar.vue";

export default defineComponent({
  data() {
    return {
      filter: "",
      currentPage: 0,
      shownPerPage: 20,
      filteredCharacters: this.characters,
    };
  },
  components: {
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
  },
  methods: {
    moveToPage(page: number): void {
      this.currentPage = Math.min(page, this.maxPage);
    },
    updateFilter(newFilter: string) {
      this.filteredCharacters = this.characters.filter((character) =>
        character.name
          .toLocaleLowerCase()
          .includes(newFilter.toLocaleLowerCase())
      );

      this.filter = newFilter;
      this.currentPage = 0;
    },
  },
});
</script>

<template>
  <div>
    <SearchBar
      :filter="filter"
      placeholder="Search..."
      :update-filter="updateFilter"
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
