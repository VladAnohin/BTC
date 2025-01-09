import { createRouter, createWebHistory } from 'vue-router';
import Stock from '../views/Stock.vue';
import App from '@/components/App.vue';
import Main from '@/components/Main.vue';
import Auth from '@/components/Auth.vue';
const routes = [
    {
        path: '/stock',
        name: 'Stock',
        component: Stock,
    },
    {
        path: '/',
        name: 'Auth',
        component: Auth
    },
    {
        path: '/main',
        name: 'Main',
        component: Main
    },
    {
        path: '/app',
        name: 'App',
        component: App
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
