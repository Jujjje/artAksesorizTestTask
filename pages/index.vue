<script setup lang="ts">
import { usePostsStore } from "~/store/tasksStore";

const store = usePostsStore();
const { fetchData } = store;
onMounted(() => {
  fetchData();
});
</script>
<template>
  <div class="min-w-full">
    <Table />
    <div
      class="flex justify-between max-sm:flex-col max-sm:items-center max-sm:gap-y-4 mt-5"
    >
      <NewItemBtn />
      <Pagination />
    </div>
  </div>
</template>
