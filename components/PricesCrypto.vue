<script setup>
// import { ref, onMounted } from 'vue';

// const cryptoData = ref(null);

// try {
//     const response = await useFetch('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
//     headers: {
//         'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
//     },
//     });
//     cryptoData.value = response.data;
// } catch (ex) {
//     console.error(ex);
//     // Handle error appropriately
// }
</script>

<template>
    <!-- <div class="Chart">
      <h1>Prices of Cryptocurrencies (in USD)</h1>
      <div class="timestamp">Time: {{ cryptoData.value.status.timestamp}}</div>
    </div>
    <pre v-if="cryptoData">
        <ul class="crypto-list">
            <li v-for="(item,index) in cryptoData.value.data" :key="index" class="crypto-item">
                <div class="crypto-name">{{ item.name }} | {{ item.symbol }}</div>
                <div class="crypto-info" v-for="(number, cat) in item.quote.USD" :key="cat">
                    {{ cat }} : {{ number }}
                </div>
            </li>
        </ul>
    </pre>
    <pre v-else>Loading...</pre>
    <div class="crypto-values">Values: {{ cryptoData.value.data }}</div> -->
</template>

<style scoped>
  .Chart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: linear-gradient(270deg,#021100 -1%,rgba(18,33,21,0.5) 50%, rgba(18,33,21,0.5) 100%);
    box-shadow: 1rem 0rem 0.5rem 0rem rgba(0,0,0,0.25);
    padding: 1rem;
    border-radius:0.5rem;
    margin: 2rem;
    color:#ffffff;
  }
  .timestamp {
    font-size: 0.75rem;
    color: #ffffff;
    margin-bottom: 0.5rem;
  }
  .crypto-list {
    list-style: none;
    background-color: linear-gradient(270deg,rgba(0,0,0,1) -1%,rgba(18,33,21,0.5) 50%, rgba(18,33,21,0.5) 100%);
    padding: 0;
    margin: 1.2rem 0;
  }
  .crypto-name{
    font-size: 1.2rem;
    font-weight: bold;
    color: #ffffff;
    margin: 0.5rem 0;
  }
  .crypto-info{
    font-size: 0.8rem;
    color: #ffffff;
    margin: 0 0;
    padding: 0;
  }
</style>
  