<template>
  <div class="post-list" v-for="post in posts" :key="post.id">
    <div class="post">
      <div class="user-info">
        <a href="#" class="user-name">{{ userById(post.userId).name }}</a>

        <a href="#">
          <img
            class="avatar-large"
            :src="userById(post.userId).avatar"
            alt=""
          />
        </a>

        <p class="desktop-only text-small">107 posts</p>
      </div>

      <div class="post-content">
        <div>
          <p>
            {{ post.text }}
          </p>
        </div>
      </div>

      <div class="post-date text-faded" :title="humanFrindly(post.publishedAt)">
        {{ diffForHuman(post.publishedAt) }}
      </div>
    </div>
  </div>
</template>

<script setup>
import sourceData from "@/data.json";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizeDate from "dayjs/plugin/localizedFormat";
import { reactive } from "vue";

dayjs.extend(relativeTime);
dayjs.extend(localizeDate);

defineProps({
  posts: {
    required: true,
    type: Array,
  },
});

const users = reactive(sourceData.users);

function userById(user) {
  return users.find((u) => u.id === user);
}

function diffForHuman(timestamp) {
  return dayjs.unix(timestamp).fromNow();
}

function humanFrindly(timestamp) {
  return dayjs.unix(timestamp).format("llll");
}
</script>
