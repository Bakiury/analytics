import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '',
        redirect: { path: '' },
    },
    { path: '/:pathMatch(.*)*', redirect: { path: '' } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;
