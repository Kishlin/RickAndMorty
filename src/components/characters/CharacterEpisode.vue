<script lang="ts">
import { defineComponent } from "vue";

// noinspection ES6PreferShortImport
import { store } from "../../store";
import type { Episode } from "src/interfaces";

export default defineComponent({
  props: ["episodeId"],
  computed: {
    episode(): Episode | undefined {
      return store.episodeWithId(this.episodeId as number);
    },
  },
});
</script>

<template>
  <li v-if="undefined === episode">Loading...</li>
  <li v-else>{{ `${episode.episode} - ${episode.name}` }}</li>
</template>
