<template>
  <h1>Welcome To Our Forum</h1>
  <CategoryList :categories="categories" />
</template>

<script setup>
import CategoryList from "../components/CategoryList.vue";
import { onMounted, reactive } from "vue";
import { useSourceDataStore } from "../store/SourceDataStore";
const sourceData = useSourceDataStore();

onMounted(() => {
  console.log(sourceData[0]);
});

const categories = reactive(sourceData.categories);
</script>
