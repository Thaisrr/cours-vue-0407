import HelloWorld from "@/pages/HelloWorld";
import Computed from "@/pages/Computed";
import Directives from "@/pages/Directives";
import Parent from "@/pages/Parent";
import Formulaires from "@/pages/Formulaires";
import FormBuilder from "@/pages/FormBuilder";

const routes = [
    {path: '/presentation', name: 'pres', component: HelloWorld},
    {path: '/directives', name: 'directives', component: Directives},
    {path: '/computed', name: 'computed', component: Computed},
    {path: '/parent', name: 'parent', component: Parent},
    {path: '/forms', name: 'form', component: Formulaires},
    {path: '/fb', name: 'fb', component: FormBuilder}
]

export default routes;