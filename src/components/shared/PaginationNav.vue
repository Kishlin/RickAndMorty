<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    pages: {
      required: true,
      type: Number,
    },
    currentPage: {
      required: true,
      type: Number,
    },
    moveToPage: {
      required: true,
      type: Function,
    },
  },
  computed: {
    pagesBefore(): number[] {
      return Array.from(
        { length: this.currentPage },
        (_, i) => i
      );
    },
    pagesAfter(): number[] {
      return Array.from(
        { length: this.pages - this.currentPage - 1 },
        (_, i) => i + this.currentPage + 1
      );
    },
  },
});
</script>

<template>
  <div class="pagination">
    <div class="pagination-left">
      <button v-for="i in pagesBefore" @click="() => moveToPage(i)" :key="i">
        {{ i + 1 }}
      </button>
    </div>
    <div class="pagination-center">
      <button id="current" disabled>{{ currentPage + 1 }}</button>
    </div>
    <div class="pagination-right">
      <button v-for="i in pagesAfter" @click="() => moveToPage(i)" :key="i">
        {{ i + 1 }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
}

.pagination-center {
  flex: 0 0 auto;
}

.pagination-left {
  justify-content: flex-end;
}

.pagination-left,
.pagination-right {
  display: flex;
  flex: 9 1 auto;
  flex-wrap: nowrap;
  overflow: hidden;
}
</style>
