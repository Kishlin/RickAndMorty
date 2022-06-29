<script lang="ts">
import { defineComponent } from "vue";

import type { CharacterShort } from "src/interfaces";

export default defineComponent({
  props: {
    character: {
      required: true,
      type: Object as () => CharacterShort,
    },
  },
});
</script>

<template>
  <p>{{ character.name }}</p>
</template>
