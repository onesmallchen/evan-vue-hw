<script setup>
import { ref, defineEmits } from "vue"

const listName = ref("")

const emits = defineEmits(["add-list"])

const addList = () => {
  emits("add-list", listName.value)
  listName.value = ""
}
</script>

<template>
  <div class="flex items-center gap-2 mt-4">
    <input
      v-model.trim="listName"
      @keydown.enter="addList"
      type="text"
      class="w-full input input-bordered"
    />
    <button
      @click="addList"
      class="btn btn-primary"
      style="background-color: #aee1f2; color: white; border: none"
    >
      新增
    </button>
  </div>
</template>
