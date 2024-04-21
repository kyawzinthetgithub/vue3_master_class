<template>
  <div :title="humanFrindly()">
    {{ diffForHuman() }}
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizeDate from "dayjs/plugin/localizedFormat";

dayjs.extend(relativeTime);
dayjs.extend(localizeDate);

const props = defineProps({
  timestamp: {
    required: true,
    type: Number,
  },
});

function diffForHuman() {
  return dayjs.unix(props.timestamp).fromNow();
}

function humanFrindly() {
  return dayjs.unix(props.timestamp).format("llll");
}
</script>
