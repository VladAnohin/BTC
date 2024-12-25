<template>
    <nav class="navbar">
        <Button as="router-link" to="/main" class="first_link bg-purple-200" rounded>Main</Button>
        <Button as="router-link" to="/stock" class="second_link bg-purple-200" rounded>Stock</Button>
    </nav>
    <router-view :key="$route.path"/>
</template>

<script lang="ts">
import Button from 'primevue/button'
import './App.css';
export default {
    name: 'App',
    components: {
        Button
    }
}
</script>


<style scoped>

</style>
