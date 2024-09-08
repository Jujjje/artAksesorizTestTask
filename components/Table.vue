<script setup lang="ts">
import { usePostsStore } from "~/store/tasksStore";
const store = usePostsStore();
const { data, isLoading } = storeToRefs(store);
</script>
<template>
  <div
    class="flex justify-center items-center w-full h-[80vh]"
    v-if="isLoading"
  >
    <ProgressSpinner />
  </div>
  <div class="flex justify-center items-center w-full" v-else>
    <DataTable :value="data" stripedRows tableStyle="min-width: 50rem">
      <Column field="userId" header="userId"></Column>
      <Column field="id" sortable header="id"></Column>
      <Column field="title" header="title"></Column>
      <Column field="body" header="body"></Column>
    </DataTable>
  </div>
</template>
