<script lang="ts">
import { defineComponent } from "vue";

import { store } from "../store";

import TheCharacterDetails from "../components/TheCharacterDetails.vue";

export default defineComponent({
  components: {
    TheCharacterDetails,
  },
  computed: {
    /**
     * Must be computed and not a property, to be updated as soon as the character is available in the store on loading.
     */
    character() {
      return store.characterWithId(+this.$route.params.id);
    },
  },
});
</script>

<template>
  <TheCharacterDetails :character="character" />
</template>
