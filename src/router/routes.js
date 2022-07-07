import HelloWorld from "@/pages/HelloWorld";
import Computed from "@/pages/Computed";
import Directives from "@/pages/Directives";
import Parent from "@/pages/Parent";
import Formulaires from "@/pages/Formulaires";
import FormBuilder from "@/pages/FormBuilder";
//import Lifecyle from "@/pages/Lifecyle";
import Requests from "@/pages/Requests";
import NotFound from "@/pages/NotFound";
import AboutRouter from "@/pages/AboutRouter";
import View1 from "@/pages/router-views/View1";
import View2 from "@/pages/router-views/View2";
import Secret from "@/pages/Secret";
import guard1 from "@/guards/guard1";
import guard2 from "@/guards/guard2";

const routes = [
    {path: '/presentation', name: 'pres', component: HelloWorld, beforeEnter: [guard1, guard2]},
    {path: '/directives', name: 'directives', component: Directives},
    {path: '/computed', name: 'computed', component: Computed},
    {path: '/parent', name: 'parent', component: Parent},
    {path: '/forms', name: 'form', component: Formulaires},
    {path: '/fb', name: 'fb', component: FormBuilder},
    {path: '/lifecycle', name: 'life', component: () => import(/* webpackChunkName: "lifecycle" */ '../pages/Lifecyle.vue')},
    {path: '/requests', name: 'req', component: Requests, meta: {mustBeAdmin: true} },
    {
        path: '/router/:title/:id?',
       // props: {id : 'nope'},
        props: (route) => ({id: route.params.id || 'nope'}),
        strict: true,
        name: 'router',
        component: AboutRouter,
        children: [
            {
                path: 'view1',
                name: 'v1',
                component: View1,
               // props: (route) => ({})
            },
            {path: 'view2', name : 'v2', component: View2},
        ]
    },
    {
        path: '/secret',
        name: 'secret',
        component: Secret,
        beforeEnter: (to, from) => {
            console.log(`Moving from ${from.name} to ${to.name}`);
            if(!localStorage.getItem('token')) {
                console.log('redirection')// SI je récupère le token, je suis connectée, je poursuis la navigation
                return {name: 'router', params: {title: 'Nope : redirection'}}
            }
        }
    },
    {path: '/', redirect: '/presentation'},
    {path: '/:pathMatch(.*)*', component: NotFound}
]

export default routes;



