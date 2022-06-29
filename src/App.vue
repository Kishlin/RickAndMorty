<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<script lang="ts">
import { store } from "./store";
import { defineComponent } from "vue";

const loadCharacters = (url: string) => {
  fetch(url)
    .then((response) => response.json())
    .then((out) => {
      store.characters.push(...out.results);

      const nextPageUrl = out.info.next;

      if (null !== nextPageUrl) {
        loadCharacters(nextPageUrl);
      }
    });
};

const firstPageUrl = "https://rickandmortyapi.com/api/character/";

export default defineComponent({
  mounted() {
    loadCharacters(firstPageUrl);
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
