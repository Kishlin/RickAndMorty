<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    placeholder: {
      type: String,
    },
    modelValue: {
      required: true,
      type: String,
    },
  },
  computed: {
    inputVal: {
      get() {
        return this.modelValue;
      },
      set(val: string) {
        this.$emit("update:modelValue", val);
      },
    },
  },
});
</script>

<template>
  <input type="text" v-model="inputVal" :placeholder="placeholder" />
</template>
