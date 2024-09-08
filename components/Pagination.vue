<script setup lang="ts">
import { usePostsStore } from "~/store/tasksStore";

const store = usePostsStore();
const { fetchData } = store;
const { page, isLoading } = storeToRefs(store);
const first = ref(0);
watch(first, () => {
  isLoading.value = true;
  page.value = first.value;
  fetchData();
});
</script>
<template>
  <Paginator
    v-model:first="first"
    :rows="1"
    :totalRecords="10"
    template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
  />
</template>
