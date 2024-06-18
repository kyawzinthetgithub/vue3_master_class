import { defineStore } from "pinia";
import sourceData from "@/data.json";
import { usePostsStore } from "@/stores/PostsStore.js";
import { useThreadsStore } from "@/stores/ThreadsStore.js";

export const useAuthUserStore = defineStore("AuthUserStore", {
  state: () => {
    return {
      sourceData: { ...sourceData },
      users: sourceData.users,
      authId: "VXjpr2WHa8Ux4Bnggym8QFLdv5C3",
    };
  },
  getters: {
    authUser: (state) => {
      const user = state.sourceData.users.find(
        (user) => user.id === state.authId
      );
      if (!user) return null;
      const postsStore = usePostsStore();
      const posts = postsStore.posts;
      const threadsStore = useThreadsStore();
      const threads = threadsStore.threads;
      return {
        ...user,
        get posts() {
          return posts.filter((post) => post.userId === user.id);
        },
        get userPostsCount() {
          return this.posts.length;
        },
        get threads() {
          return threads.filter((post) => post.userId === user.id);
        },
        get userThreadsCount() {
          return this.threads.length;
        },
      };
    },
  },
  actions: {
    setUser(newuser) {
      const userIndex = this.users.findIndex((user) => user.id === newuser.id);
      this.users[userIndex] = newuser;
    },
  },
});
