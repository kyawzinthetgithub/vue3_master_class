<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <PostList :posts="threadPost"></PostList>
    <form-editor @save="addPost" />
  </div>
</template>

<script setup>
import PostList from "@/components/PostList.vue";
import FormEditor from "@/components/FormEditor.vue";
import sourceData from "@/data.json";
import { reactive, computed } from "vue";

const threads = reactive(sourceData.threads);
const posts = reactive(sourceData.posts);

const props = defineProps({
  id: {
    required: true,
    type: String,
  },
});

const thread = computed(() => {
  return threads.find((thread) => thread.id === props.id);
});

const threadPost = computed(() => {
  return posts.filter((post) => post.threadId === props.id);
});

function addPost(eventData) {
  const post = {
    ...eventData.post,
    threadId: props.id,
  };
  posts.push(post);
  // thread.posts.push(post.id);
}
</script>
