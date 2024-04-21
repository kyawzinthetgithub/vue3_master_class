<template>
  <h1>{{ category.name }}</h1>
  <FroumList :title="category.name" :forums="getForumsForCategory(category)" />
</template>

<script setup>
import FroumList from "@/components/ForumList.vue";
import sourceData from "@/data.json";
import { computed } from "vue";

const props = defineProps({
  id: {
    required: true,
    type: String,
  },
});

const category = computed(() => {
  return sourceData.categories.find((category) => category.id === props.id);
});

function getForumsForCategory(category) {
  return sourceData.forums.filter((forum) => forum.categoryId === category.id);
}
</script>
