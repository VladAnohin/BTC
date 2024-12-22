<template>
    <div>
       <h1>Курс BTC</h1>
       <p v-if="price">Цена BTC: ${{  price  }}</p>
       <p v-else>Загрузка...</p>
    </div>

</template>

<script lang='ts'>
import axios from 'axios';

export default {
  data() {
    return {
      price: null,
    };
  },
  mounted() {
    this.fetchPrice();
  },
  methods: {
    fetchPrice() {
      const apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
      
      axios.get(apiUrl)
        .then(response => {
          this.price = response.data.bitcoin.usd;
        })
        .catch(error => {
          console.error('Ошибка при получении данных:', error);
        });
    },
  },
};
</script>

<style>

</style>
