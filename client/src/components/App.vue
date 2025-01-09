<template>
    <nav class="navbar">
        <Button v-if="isAuthenticated" as="router-link" to="/main" class="first_link" rounded>Main</Button>
        <Button v-if="isAuthenticated" as="router-link" to="/stock" class="second_link" rounded>Stock</Button>
    </nav>
    
    <template v-if="isAuthenticated">
        <router-view :key="$route.path"/>
    </template>
    
    <template v-else>
        <Auth @authenticated="handleAuthentication" />
    </template>
</template>

<script lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import Auth from './Auth.vue';
import './App.css';

export default {
    name: 'App',
    components: {
        Button,
        Auth
    },
    setup() {
        const isAuthenticated = ref(false);
    
        const handleAuthentication = () => {
            isAuthenticated.value = true;  // Обновляем статус авторизации
        };

        return {
            isAuthenticated,
            handleAuthentication
        };
    }
}
</script>