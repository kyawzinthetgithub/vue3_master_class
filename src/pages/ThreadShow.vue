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
import { usePostsStore } from "../stores/PostsStore";
import { useThreadsStore } from "../stores/ThreadsStore";
import { computed, onMounted } from "vue";

const threads = useThreadsStore().threads;
const posts = usePostsStore().posts;

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

// function addPost(eventData) {
//   const post = {
//     ...eventData.post,
//     threadId: props.id,
//   };
//   posts.push(post);
// }

function addPost(eventData) {
  const post = {
    ...eventData.post,
    threadId: props.id,
  };
  usePostsStore().createPost(post);
}
</script>
