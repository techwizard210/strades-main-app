<script setup>
const asset1 = ref('BTC');
const asset2 = ref('ETH');
</script>

<template>
    <div class="section">
        <h1>Comparator of assets</h1>
        <p>Asset1 VS Assets2</p>
        <div>{{asset1}}</div>
        <div>{{asset2}}</div>
        <p>Choose your favorite Asset?</p>
    </div>
</template>

<style></style>