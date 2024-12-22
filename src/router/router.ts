import { createRouter, createWebHistory } from 'vue-router';
import Stock from './../views/Stock.vue';
import App from '@/components/App.vue';
import Main from '@/components/Main.vue';
const routes = [
    {
        path: '/stock',
        name: 'Stock',
        component: Stock,
    },
    {
        path: '/',
        name: 'App',
        component: App
    },
    {
        path: '/main',
        name: 'Main',
        component: Main
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
