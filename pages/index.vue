<script setup lang="ts">
import { usePostsStore } from "~/store/tasksStore";

const store = usePostsStore();
const { isLoading } = storeToRefs(store);
const { fetchData } = store;
onMounted(() => {
  fetchData();
});
</script>
<template>
  <div
    class="flex justify-center items-center w-full h-[80vh]"
    v-if="isLoading"
  >
    <ProgressSpinner />
  </div>
  <div class="min-w-full" v-else>
    <Table />
    <div
      class="flex justify-between max-sm:flex-col max-sm:items-center max-sm:gap-y-4 mt-5"
    >
      <NewItemBtn />
      <Pagination />
    </div>
  </div>
</template>
