<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div v-for="(thread, id) in threads" :key="id" class="thread">
        <div>
          <p>
            <router-link :to="{ name: 'thread', params: { id: thread.id } }">{{
              thread.title
            }}</router-link>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{ userById(thread.userId).name }}</a
            >, {{ thread.publishedAt }}.
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">
            {{ thread.posts.length }}
            {{ thread.posts.length > 1 ? "replies" : "reply" }}
          </p>

          <img
            class="avatar-medium"
            :src="userById(thread.userId).avatar"
            alt=""
          />

          <div>
            <p class="text-xsmall">
              <a href="#">{{ userById(thread.userId).name }}</a>
            </p>
            <p class="text-xsmall text-faded">
              {{ thread.publishedAt }} hours ago
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import sourceData from "@/data.json";
import { reactive, defineProps } from "vue";

const props = defineProps({
  threads: {
    type: Array,
    required: true,
  },
});

const posts = reactive(sourceData.posts);
const users = reactive(sourceData.users);

function postById(post) {
  return posts.find((p) => p.id === post);
}
function userById(user) {
  return users.find((u) => u.id === user);
}
</script>
