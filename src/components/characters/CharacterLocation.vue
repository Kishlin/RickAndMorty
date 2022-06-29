<script lang="ts">
import { defineComponent } from "vue";

// noinspection ES6PreferShortImport
import { store } from "../../store";
import type { Location } from "src/interfaces";

export default defineComponent({
  props: ["locationId"],
  computed: {
    location(): Location | undefined {
      return store.locationWithId(this.locationId as number);
    },
  },
});
</script>

<template>
  <span v-if="undefined === location">Loading...</span>
  <span v-else>
    {{ `${location.name} (${location.type}) (${location.dimension})` }}
  </span>
</template>
