import type { AxiosError } from "axios";
import axios from "axios";

export interface ITask {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface INewTask {
  userId: number;
  title: string;
  body: string;
}
export const usePostsStore = defineStore("post", () => {
  let isLoading = ref<boolean>(true);
  let data = ref<ITask[] | null>(null);
  let error = ref<AxiosError | null>(null);
  let page = ref<number>(0);
  let order = ref<"asc" | "desc">("asc");
  async function fetchData(): Promise<void> {
    const url = `https://jsonplaceholder.typicode.com/posts?_page=${
      page.value + 1
    }&_per_page=10_sort=id&_order=${order.value}`;
    await axios
      .get(url)
      .then((response) => {
        data.value = data.value = response.data;
      })
      .catch((e: AxiosError) => {
        error.value = e;
      })
      .finally(() => {
        isLoading.value = false;
      });
  }

  async function setNewPost(newPost: INewTask): Promise<void> {
    console.log(1);

    const url = `https://jsonplaceholder.typicode.com/posts`;
    await axios.post(url, newPost).catch((e: AxiosError) => {
      error.value = e;
    });
  }
  return { isLoading, data, error, fetchData, page, setNewPost };
});
