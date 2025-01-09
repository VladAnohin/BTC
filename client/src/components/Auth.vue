<template>
    <div class="auth">
        <h2>Авторизация</h2>
        <input v-model="username" placeholder="Имя пользователя" />
        <input type="password" v-model="password" placeholder="Пароль" />
        <Button @click="login">Войти</Button>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';

export default {
    
    components: {
        Button
    },
    setup(props, { emit }) {
        const username = ref('');
        const password = ref('');

        const login = () => {
            // Здесь должна быть ваша логика авторизации.
            // Пример: если имя пользователя и пароль совпадают, выбрасываем событие authenticated
            if (username.value === 'admin' && password.value === 'password') {
                emit('authenticated');  // Испускаем событие при успешной авторизации
            } else {
                alert('Неверные данные для входа');  // Сообщение об ошибке
            }
        };

        return {
            username,
            password,
            login
        };
    }
}
</script>

<style scoped>
.auth {
    max-width: 300px;
    margin: auto;
    text-align: center;
}
</style>
