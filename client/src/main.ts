import { createApp } from 'vue';
import App from './components/App.vue';
import router from './router/router';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(PrimeVue)
app.mount('#app');
