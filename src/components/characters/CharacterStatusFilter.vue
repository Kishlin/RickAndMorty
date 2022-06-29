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
  },
});
</script>

<template>
  <div>
    <input
      type="checkbox"
      :checked="alive"
      id="checkbox-alive"
      @change="$emit('toggleAlive')"
    />
    <label for="checkbox-alive">Alive</label>

    <input
      type="checkbox"
      :checked="dead"
      id="checkbox-dead"
      @change="$emit('toggleDead')"
    />
    <label for="checkbox-dead">Dead</label>

    <input
      type="checkbox"
      :checked="unknown"
      id="checkbox-unknown"
      @change="$emit('toggleUnknown')"
    />
    <label for="checkbox-unknown">Unknown</label>
  </div>
</template>

<style scoped>
div {
  margin: 10px 0 5px;
  line-height: 15px;
}

input[type="checkbox"] {
  margin: 0 0.4em;
}
</style>
