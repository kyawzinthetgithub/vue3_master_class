<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <div class="profile-card">
          <p class="text-center">
            <img
              :src="user.avatar"
              :alt="`${user.name} profile picture`"
              class="avatar-xlarge"
            />
          </p>
          <h1 class="title">{{ user.username }}</h1>
          <p class="text-lead">{{ user.name }}</p>
          <p class="text-justify">{{ user.bio || "No bio specified." }}</p>
          <span class="online">{{ user.username }} is online</span>
          <div class="stats">
            <span>{{ userPostCount }} posts</span>
            <span>{{ userThreadCount }} threads</span>
          </div>
          <hr />
          <p class="text-large text-center">
            <i class="fa fa-globe"></i>
            <a :href="user.website">{{ user.website }}</a>
          </p>
        </div>
        <p class="text-xsmall text-faded text-center">
          Member since june 2003, last visited 4 hours ago
        </p>
        <div class="text-center">
          <hr />
          <a href="edit-profile.html" class="btn-green btn-small"
            >Edit Profile</a
          >
        </div>
      </div>
      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead"> Joker's recent activity </span>
          <a href="#">See only started threads?</a>
        </div>
        <hr />
        <PostList :posts="userPost" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PostList from "@/components/PostList.vue";
import { useAuthUserStore } from "@/stores/AuthUserStore.js";
import { usePostsStore } from "../stores/PostsStore";
import { useThreadsStore } from "@/stores/ThreadsStore.js";
import { computed } from "vue";
const posts = usePostsStore().posts;
const threads = useThreadsStore().threads;
const user = useAuthUserStore().authUser;
const userPost = computed(() => {
  return posts.filter((post) => user.id === post.userId);
});
const userPostCount = computed(() => {
  return posts.filter((post) => user.id === post.userId).length;
});
const userThreadCount = computed(() => {
  return threads.filter((thread) => thread.userId === user.id).length;
});
</script>
