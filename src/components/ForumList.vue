<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <router-link
          v-if="categoryId"
          :to="{ name: 'Category', params: { id: categoryId } }"
          >{{ title }}</router-link
        >
        <span v-else>{{ title }}</span>
      </h2>

      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <div class="forum-details">
          <router-link
            :to="{ name: 'Froum', params: { id: forum.id } }"
            class="text-xlarge"
            >{{ forum.name }}</router-link
          >
          <p>{{ forum.description }}</p>
        </div>

        <div class="threads-count">
          <p>
            <span class="count">{{ forum.threads?.length }}</span>
            {{ forumThreadCount(forum) }}
          </p>
        </div>

        <div class="last-thread"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  forums: {
    required: true,
    type: Array,
  },
  title: {
    type: String,
    default: "Forums",
  },
  categoryId: {
    required: false,
    type: String,
  },
});

function forumThreadCount(forum) {
  if (forum.threads?.length) {
    return forum.threads.length > 1 ? "threads" : "thread";
  } else {
    return "There is no thread";
  }
}
</script>
