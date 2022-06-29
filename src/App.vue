<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<script lang="ts">
import { store } from "./store";
import { defineComponent } from "vue";
import type { CharactersResponse } from "./api";
import { loadCharacters, charactersFirstPageUrl } from "./api";

const onCharactersResponse = (out: CharactersResponse) => {
  store.characters.push(...out.results);

  const nextPageUrl = out.info.next;

  if (null !== nextPageUrl) {
    loadCharacters(nextPageUrl, onCharactersResponse);
  }
};

export default defineComponent({
  mounted() {
    loadCharacters(charactersFirstPageUrl, onCharactersResponse);
  },
});
</script>

<template>
  <header>
    <img
      @click="$router.push('/')"
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
    />
  </header>

  <RouterView id="page" />
</template>

<style>
@import "@/assets/base.css";

/*noinspection CssUnusedSymbol*/
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

#page {
  width: 80%;
  margin: 0 auto;
  padding: 2rem;

  flex-grow: 1;

  font-weight: normal;
}

header {
  width: 100%;
  height: 100px;
  padding: 10px;
}

.logo {
  display: block;
  cursor: pointer;
  margin: auto 2rem;
  height: 80px;
}
</style>
