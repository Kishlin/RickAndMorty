<script lang="ts">
import { defineComponent } from "vue";

import type { CharacterShort } from "src/interfaces";
import CharacterCardSmall from "./characters/CharacterCardSmall.vue";
import PaginationNav from "./shared/PaginationNav.vue";

export default defineComponent({
  data() {
    return {
      currentPage: 0,
      shownPerPage: 20,
    };
  },
  components: {
    CharacterCardSmall,
    PaginationNav,
  },
  props: {
    characters: {
      required: true,
      type: Array as () => CharacterShort[],
    },
  },
  computed: {
    maxPage(): number {
      return Math.ceil(this.characters.length / this.shownPerPage);
    },
    charactersToDisplay(): CharacterShort[] {
      const startIndex = this.shownPerPage * this.currentPage;

      return this.characters.slice(startIndex, startIndex + this.shownPerPage);
    },
  },
  methods: {
    moveToPage(page: number): void {
      this.currentPage = Math.min(page, this.maxPage);
    },
  },
});
</script>

<template>
  <div>
    <PaginationNav
      :pages="maxPage"
      :current-page="currentPage"
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
