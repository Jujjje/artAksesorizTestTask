<script setup lang="ts">
import { usePostsStore } from "~/store/tasksStore";

const store = usePostsStore();
const { fetchData } = store;
const { data } = storeToRefs(store);
onMounted(() => {
  fetchData();
});
</script>
<template>
  <DataTable :value="data" stripedRows tableStyle="min-width: 50rem">
    <Column field="userId" header="userId"></Column>
    <Column field="id" sortable header="id"></Column>
    <Column field="title" header="title"></Column>
    <Column field="body" header="body"></Column>
  </DataTable>
</template>
