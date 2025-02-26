<template>
    <div class="auth">
        <h2>Авторизация</h2>
        <input v-model="formData.username" placeholder="Имя пользователя" />
        <span v-if="errors.username" class="error">{{ errors.username }}</span> <!-- Ошибка для username -->
        <input type="password" v-model="formData.password" placeholder="Пароль" />
        <span v-if="errors.password" class="error">{{ errors.password }}</span> <!-- Ошибка для password -->
        <Button @click="login">Войти</Button>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import { loginSchema } from './../schema/schema'; // Импортируем схему валидации
import { z } from 'zod'; // Импортируем z из Zod

export default {
    name: 'Auth',
    components: {
        Button
    },
    setup(props, { emit }) {
        const formData = ref({
            username: '',
            password: ''
        });

        const errors = ref({
            username: '',
            password: ''
        });

        const login = async () => {
            // Сбрасываем ошибки перед валидацией
            errors.value = { username: '', password: '' };

            try {
                // Валидируем данные
                await loginSchema.parseAsync(formData.value);

                // Если валидация успешна, можно отправить данные на сервер
                emit('authenticated'); // Испускаем событие при успешной авторизации
            } catch (error) {
                if (error instanceof z.ZodError) {
                    // Обрабатываем ошибки валидации
                    error.errors.forEach((err) => {
                        const field = err.path[0]; // Поле с ошибкой (например, "username")
                        errors.value[field] = err.message; // Сохраняем сообщение об ошибке
                    });
                } else {
                    console.error('Ошибка:', error);
                }
            }
        };

        return {
            formData,
            errors,
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
