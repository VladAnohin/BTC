import { z } from 'zod';

const loginSchema = z.object({
    username: z.string().min(1, "Логин обязателен."),
    password: z.string().min(6, "Пароль должен содержать минимум 6 символов.")
});


const form = document.querySelector('form') as HTMLFormElement;

form.addEventListener('submit', async function(e: Event){
    e.preventDefault();
    const formData = new FormData(form);
    const data: {username: string, password: string} = {
        username: formData.get('username') as string,
        password: formData.get('password') as string,
    };
    try {
        await loginSchema.parseAsync(data);
    }
    catch (error) {
       if (error instanceof z.ZodError) { 
        alert(error.errors.map(err => err.message).join('\n'))
       } else {
        console.error("Ошибка:", error);
       }
    }
})