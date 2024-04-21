<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <label for="thread_content">Content:</label>
      <textarea
        id="thread_content"
        class="form-input"
        name="content"
        rows="8"
        cols="140"
        v-model="newPostText"
      ></textarea>
    </div>

    <div class="btn-group">
      <button class="btn btn-blue" type="submit" name="Publish">Publish</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";

const newPostText = ref("");

const emits = defineEmits(["save"]);

function save() {
  const postId = "ggg" + Math.random();
  const post = {
    id: postId,
    text: newPostText.value,
    publishedAt: Math.floor(Date.now() / 1000),
    userId: "ALXhxjwgY9PinwNGHpfai6OWyDu2",
  };
  emits("save", { post });
  newPostText.value = "";
}
</script>
