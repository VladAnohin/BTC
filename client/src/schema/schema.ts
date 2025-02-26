import { z } from 'zod';

export const loginSchema = z.object({
    username: z.string().min(1, "Логин обязателен."),
    password: z.string().min(6, "Пароль должен содержать минимум 6 символов.")
});
