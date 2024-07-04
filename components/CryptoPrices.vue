<script setup>
/* Example in Node.js */
// import axios from 'axios';

// const {data: cryptos} = await useFetch('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
// headers: {'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'}});
</script>

<template>
  <div class="Chart">
    <h1>Crypto Prices</h1>
    <h1>{{ cryptos.data }}</h1>
    <div v-for="crypto in cryptos.data" :key="crypto.data">
      <p>{{ crypto.name }}: {{ crypto.id }}</p>
    </div>
  </div>
</template>
<style scoped>
.Chart{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #2f8cb8;
    color:#ffffff;
}
</style>
