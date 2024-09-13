import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages'; // Import the auto-generated routes

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
