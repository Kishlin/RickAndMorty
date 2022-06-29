<script lang="ts">
import { defineComponent } from "vue";

import type { CharacterShort } from "src/interfaces";
import CharacterCardSmall from "./CharacterCardSmall.vue";
import PaginationNav from "../shared/PaginationNav.vue";

export default defineComponent({
  data() {
    return {
      shownPerPage: 20,
      requestedPage: 0,
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
    currentPage(): number {
      return Math.min(this.requestedPage, this.maxPage - 1);
    },
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
      this.requestedPage = Math.min(page, this.maxPage);
    },
  },
});
</script>

<template>
  <section>
    <PaginationNav
      v-if="1 !== maxPage"
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
  </section>
</template>

<style scoped>
.characters {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}
</style>
