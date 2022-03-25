import { createWebHashHistory, createRouter } from "vue-router";

function loadPage(page) {
    return () => import(`./pages/${page}.vue`)
}

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: loadPage('HomePage')
    },
    {
        path: '/aboutpage',
        name: 'AboutPage',
        component: loadPage('AboutPage')
    }


]

const router = createRouter({
    linkActiveClass: 'router-link-active',
    linkExactActiveClass: 'router-link-exact-active',
    history: createWebHashHistory(),
    routes,
})

export default router