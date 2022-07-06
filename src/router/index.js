import {createRouter,  createWebHistory} from "vue-router";
import routes from "@/router/routes";
const router = createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
    },
})

export default router;