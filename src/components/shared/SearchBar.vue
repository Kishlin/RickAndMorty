<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    placeholder: {
      type: String,
    },
    filter: {
      required: true,
      type: String,
    },
    updateFilter: {
      required: true,
      type: Function,
    },
  },
});
</script>

<template>
  <input
    type="text"
    :value="filter"
    :placeholder="placeholder"
    @change="(e) => updateFilter(e.target.value)"
  />
</template>
