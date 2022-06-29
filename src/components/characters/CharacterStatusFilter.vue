<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    alive: {
      required: true,
      type: Boolean,
    },
    dead: {
      required: true,
      type: Boolean,
    },
    unknown: {
      required: true,
      type: Boolean,
    },
    toggleAlive: {
      required: true,
      types: Function,
    },
    toggleDead: {
      required: true,
      types: Function,
    },
    toggleUnknown: {
      required: true,
      types: Function,
    },
  },
});
</script>

<template>
  <div>
    <input
      type="checkbox"
      :checked="alive"
      id="checkbox-alive"
      @change="toggleAlive"
    />
    <label for="checkbox-alive">Alive</label>

    <input
      type="checkbox"
      :checked="dead"
      id="checkbox-dead"
      @change="toggleDead"
    />
    <label for="checkbox-dead">Dead</label>

    <input
      type="checkbox"
      :checked="unknown"
      id="checkbox-unknown"
      @change="toggleUnknown"
    />
    <label for="checkbox-unknown">Unknown</label>
  </div>
</template>
