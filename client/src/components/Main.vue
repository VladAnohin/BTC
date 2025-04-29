<template>
    <div class="calculator-container">
      <!-- Группа ввода чисел -->
      <div class="input-group">
        <InputText 
          v-model.number="number1" 
          type="number" 
          placeholder="Enter first number" 
          class="number-input"
        />
        <InputText 
          v-model.number="number2" 
          type="number" 
          placeholder="Enter second number" 
          class="number-input"
        />
        <Button 
          icon="pi pi-plus" 
          label="Sum" 
          @click="calculateSum" 
          class="calculate-button"
        />
      </div>
  
      <!-- Блок результата -->
      <Textarea 
        :modelValue="result" 
        placeholder="Result will appear here" 
        readonly
        class="result-display"
      />
  
      <!-- Таблица продуктов -->
      <DataTable 
        :value="products" 
        class="products-table"
      >
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import Button from 'primevue/button';
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import InputText from 'primevue/inputtext';
  import Textarea from 'primevue/textarea';
  import 'primeicons/primeicons.css';
  
  // Типизированные данные
  interface Product {
    code: number;
    name: string;
    category: string;
    quantity: number;
  }
  
  // Реактивные переменные
  const number1 = ref<number>(0);
  const number2 = ref<number>(0);
  const result = ref<string>('0');
  const products = ref<Product[]>([
    { code: 1, name: 'Human', category: 'Mom', quantity: 1 },
    { code: 2, name: 'Human', category: 'Sister', quantity: 1 },
    { code: 3, name: 'Human', category: 'Vlad', quantity: 1 }
  ]);
  
  // Логика вычисления
  const calculateSum = () => {
    result.value = String(number1.value + number2.value);
  };
  </script>
  
  <style scoped>
  .calculator-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
  }
  
  .input-group {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .number-input {
    flex: 1;
  }
  
  .calculate-button {
    min-width: 100px;
  }
  
  .result-display {
    width: 100%;
    margin-bottom: 1.5rem;
    background-color: #f8f9fa;
  }
  
  .products-table {
    margin-top: 1.5rem;
  }
  </style>