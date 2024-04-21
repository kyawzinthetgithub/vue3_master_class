import ThreadList from '../components/ThreadList.vue';
<template>
  <div class="col-full push-top">
    <ul class="breadcrumbs">
      <li>
        <a href="/index.html"><i class="fa fa-home fa-btn"></i>Home</a>
      </li>
      <li><a href="/category.html">Discussions</a></li>
      <li class="active"><a href="#">Cooking</a></li>
    </ul>

    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <div class="col-full push-top">
    <div class="thread-list">
      <ThreadList :threads="threads" />
    </div>
  </div>
</template>

<script setup>
import sourceData from "@/data.json";
import ThreadList from "@/components/ThreadList.vue";
import { computed } from "vue";

const props = defineProps({
  id: {
    require: true,
    type: String,
  },
});

const forum = computed(() => {
  return sourceData.forums.find((forum) => forum.id === props.id);
});

const threads = computed(() => {
  return sourceData.threads.filter((thread) => thread.forumId === props.id);
});
</script>
