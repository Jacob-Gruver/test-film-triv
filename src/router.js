import { createWebHashHistory, createRouter } from "vue-router";

// function loadPage(page) {
//     return () => import(`./pages/${page}.vue`)
// }

const routes = [

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router