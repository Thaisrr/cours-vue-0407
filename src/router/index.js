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
});


router.beforeEach((to) => {
    const authorized_routes = ['login', 'home'];
    if(!authorized_routes.includes(to.name)) {
        // Alors, vérification du login
        console.log('Route non autorisée')
        // return '/login'   // pour rediriger vers login, ou une 401
    }

    if(to.meta.mustBeAdmin && !localStorage.getItem('token')) {
        return {name: 'router', params: {title : 'Mauvais Rôle !'}}
    }

})



export default router;