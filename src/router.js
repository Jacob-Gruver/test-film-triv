import { createWebHashHistory, createRouter } from "vue-router";

import HomePage from './pages/HomePage.vue'

import AboutPage from './pages/AboutPage.vue'

// function loadPage(page) {
//     return () => import(`./pages/${page}.vue`)
// }

const routes = [
    {
        path: '/homepage',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/aboutpage',
        name: 'AboutPage',
        component: AboutPage
    }


]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router