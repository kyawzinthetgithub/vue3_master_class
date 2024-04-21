<template>
  <ForumList
    v-for="category in categories"
    :key="category.id"
    :forums="getForumsForCategory(category)"
    :title="category.name"
    :categoryId="category.id"
  />
</template>

<script setup>
import sourceData from "@/data.json";
import ForumList from "@/components/ForumList.vue";
const props = defineProps({
  categories: {
    required: true,
    type: Array,
  },
});

function getForumsForCategory(category) {
  return sourceData.forums.filter((forum) => forum.categoryId === category.id);
}
</script>
