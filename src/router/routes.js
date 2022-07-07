import HelloWorld from "@/pages/HelloWorld";
import Computed from "@/pages/Computed";
import Directives from "@/pages/Directives";
import Parent from "@/pages/Parent";
import Formulaires from "@/pages/Formulaires";
import FormBuilder from "@/pages/FormBuilder";
import Lifecyle from "@/pages/Lifecyle";
import Requests from "@/pages/Requests";

const routes = [
    {path: '/presentation', name: 'pres', component: HelloWorld},
    {path: '/directives', name: 'directives', component: Directives},
    {path: '/computed', name: 'computed', component: Computed},
    {path: '/parent', name: 'parent', component: Parent},
    {path: '/forms', name: 'form', component: Formulaires},
    {path: '/fb', name: 'fb', component: FormBuilder},
    {path: '/lifecycle', name: 'life', component: Lifecyle},
    {path: '/requests', name: 'req', component: Requests}
]

export default routes;