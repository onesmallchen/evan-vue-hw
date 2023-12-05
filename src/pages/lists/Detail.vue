<script setup>
import { getList } from "@/evan-list/storage"
import { useRoute } from "vue-router"
import { onBeforeMount, reactive } from "vue"

let list = reactive({})

const route = useRoute()
onBeforeMount(() => {
  const { params } = route
  list = getList(params.auo)
})
</script>

<template>
  <h1 class="text-3xl">{{ list.title }}</h1>
</template>
