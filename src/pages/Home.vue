<template>
  <h1>Welcome To Our Forum</h1>
  <thread-list :threads="threads" />
</template>

<script setup>
import threadList from "@/components/ThreadList.vue";
import sourceData from "@/data.json";
import { ref } from "vue";

const threads = ref(sourceData.threads);
</script>
