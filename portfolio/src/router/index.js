import App from "@/App.vue"
import {createWebHistory, createRouter} from "vue-router"
import FormPage from "@/pages/FormPage.vue"
import ProjectsPage from "@/pages/ProjectsPage.vue"
import HomePage from "@/pages/HomePage.vue"

const routes = [
    {path:"/home", component: HomePage},
    {path: "/form", component: FormPage},
    {path: "/projects", component: ProjectsPage},
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;