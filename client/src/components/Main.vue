<template>
    <div class="chat-notification">
        <InputText v-model.number="number1" type="number" placeholder="Enter your first number" class="rounded-sm first bg-gray-300 m-1" />
        <InputText v-model.number="number2" type="number" placeholder="Enter your second number" class="rounded-sm second m-1 bg-gray-300" />
        <Button icon='pi pi-plus' type="button" @click="sum"  label="Sum"  raised />
        <br>
        <Textarea v-model.number="result" size="small" disabled />
        <DataTable :value="products">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

    <script lang="ts">
     import Button from 'primevue/button/';
     import DataTable from 'primevue/datatable';
     import Column from 'primevue/column';
     import 'primeicons/primeicons.css'
     import InputText from 'primevue/inputtext'
     import Textarea from 'primevue/textarea';
    export default {
        data() {
            return {
                number1: 0,
                number2: 0,
                result: 0,
                products: [
                    {code: 1, name: 'Human', category: 'Mom', quantity: 1},
                    {code: 2, name: 'Human', category: 'Sister', quantity: 1},
                    {code: 3, name: 'Human', category: 'Vlad', quantity: 1},
                 
                ]
            };
        },
        methods: {
            sum() {
                this.result = this.number1 + this.number2;
            },
        },
        components: {
            Button,
            DataTable,
            Column,
            InputText,
            Textarea, 
        },
    }
    </script>