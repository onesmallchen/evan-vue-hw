import "./assets/main.css"
import { createApp } from "vue"
import Layout from "@/Layout.vue"
import { createRouter, createWebHashHistory } from "vue-router"

import HomePage from "@/pages/Home.vue"
import ListDetailPage from "@/pages/lists/Detail.vue"

const routes = [
  { path: "/", component: HomePage },
  { path: "/lists/:auo", name: "detail", component: ListDetailPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(Layout).use(router).mount("#app")
