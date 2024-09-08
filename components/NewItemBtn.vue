<script setup lang="ts">
import { usePostsStore } from "~/store/tasksStore";

const visible = ref(false);
const newUserId = ref();
const newTitle = ref();
const newBody = ref();
const store = usePostsStore();
const { setNewPost } = store;

function handleOnUploadPost() {
  visible.value = false;
  setNewPost({
    userId: newUserId.value,
    title: newTitle.value,
    body: newBody.value,
  });
}
</script>
<template>
  <button
    class="w-[200px] h-[40px] rounded-[10px] bg-[#202020] text-white"
    @click="visible = true"
  >
    Добавить новый элемент
  </button>

  <Dialog
    v-model:visible="visible"
    modal
    header="Create new post"
    :style="{ width: '25rem' }"
  >
    <span class="text-surface-500 dark:text-surface-400 block mb-8"
      >Enter new post</span
    >
    <div class="flex items-center gap-4 mb-4">
      <label for="username" class="font-semibold w-24">userID</label>
      <InputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-8">
      <label for="email" class="font-semibold w-24">Title</label>
      <InputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-8">
      <label for="email" class="font-semibold w-24">Body</label>
      <InputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-end gap-2">
      <Button
        type="button"
        label="Cancel"
        severity="secondary"
        @click="visible = false"
      ></Button>
      <Button type="button" label="Save" @click="handleOnUploadPost()"></Button>
    </div>
  </Dialog>
</template>
