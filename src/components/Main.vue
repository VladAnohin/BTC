<template>
    <div class="chat-notification">
        <input v-model.number="number1" type="number" placeholder="Enter your first number" class="rounded-sm first bg-gray-300 m-1">
        <input v-model.number="number2" type="number" placeholder="Enter your second number" class="rounded-sm second m-1 bg-gray-300">
        <Button icon='pi pi-plus' type="button" @click="sum"  label="Sum"  raised />
        <p class="bg-gray-100 w-10 m-1 rounded-sm">{{ result }}</p>
    </div>
</template>

    <script lang="ts">
     import Button from 'primevue/button/';
     import 'primeicons/primeicons.css'
    export default {
        data() {
            return {
                number1: 0,
                number2: 0,
                result: 0,
            };
        },
        methods: {
            sum() {
                this.result = this.number1 + this.number2;
            },
        },
        components: {
            Button
        }
    }
    </script>