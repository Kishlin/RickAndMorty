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
  <div @click="$router.push(`/character/${character.id}`)">
    <img :alt="character.name" :src="character.image" />
    <p>{{ character.name }}</p>
  </div>
</template>

<style scoped>
div {
  margin: 5px;
  cursor: pointer;
}

div,
img {
  width: 150px;
}

p {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
