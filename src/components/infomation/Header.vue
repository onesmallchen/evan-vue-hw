<script setup>
import { defineProps, computed } from "vue"

const props = defineProps({
  lists: {
    type: Array,
    required: true,
    default: [],
  },
})

const listCount = computed(() => {
  return props.lists.filter((list) => list.title.length > 2).length
})
</script>

<template>
  <h2 class="text-2xl" v-if="lists.length == 0">目前無任何待辦事項</h2>
  <h2 class="text-2xl" v-else>目前共有 {{ listCount }} 個待辦事項</h2>
</template>
