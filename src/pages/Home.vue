<script setup>
import { v4 as uuid } from "uuid"
import { getLists, saveLists } from "@/evan-list/storage"
import { reactive, onBeforeMount } from "vue"
import Header from "@/components/infomation/Header.vue"
import ListItem from "@/components/lists/Item.vue"
import AddListForm from "@/components/forms/AddList.vue"

const title = "Evan's TODO List"
const lists = reactive([])

const removeList = (id) => {
  if (id) {
    const listIndex = lists.findIndex((list) => list.id == id)

    if (listIndex >= 0) {
      lists.splice(listIndex, 1)
      saveLists(lists)
    }
  }
}

const addList = (listName) => {
  if (listName != "") {
    const list = {
      id: uuid(),
      title: listName,
    }

    lists.unshift(list)

    // save
    saveLists(lists)
  }
}

onBeforeMount(() => {
  const data = getLists()
  if (data) {
    lists.push(...data)
  }
})
</script>

<template>
  <h1 class="title">{{ title }}</h1>

  <AddListForm @add-list="addList" />

  <div class="divider"></div>
  <div>
    <Header :lists="lists" />
    <ul>
      <ListItem @remove-list="removeList" v-for="list in lists" :list="list" />
    </ul>
  </div>
</template>

<style scoped>
.title {
  @apply text-slate-800 text-5xl;
}
</style>
