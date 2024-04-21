<template>
  <h1>Welcome To Our Forum</h1>
  <CategoryList :categories="categories" />
</template>

<script setup>
import sourceData from "@/data.json";
import CategoryList from "../components/CategoryList.vue";
import { reactive } from "vue";

const categories = reactive(sourceData.categories);
</script>
