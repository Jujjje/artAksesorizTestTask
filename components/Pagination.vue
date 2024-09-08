<script setup lang="ts">
import { usePostsStore } from "~/store/tasksStore";

const store = usePostsStore();
const { fetchData } = store;
const { page, isLoading } = storeToRefs(store);
const first = ref(0);
watch(first, () => {
  page.value = first.value;
  fetchData();
});
</script>
<template>
  <Paginator
    v-if="!isLoading"
    v-model:first="first"
    :rows="1"
    :totalRecords="10"
    template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
  />
</template>
