<template>
  <h1 class="push-top">Welcome To Our Forum</h1>
  <CategoryList :categories="categories" />
</template>

<script setup>
import { storeToRefs } from "pinia";
import CategoryList from "../components/CategoryList.vue";
import { useCategoriesStore } from "../stores/CategoriesStore.js";
const { categories } = storeToRefs(useCategoriesStore());
</script>
