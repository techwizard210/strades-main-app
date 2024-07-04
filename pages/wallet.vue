<script setup>
definePageMeta({
    title: "wallet",
    description: "Wallet",
    layout: "wallet",
});

</script>
<template>
<div class="body-wallet">
    <WalletCapitalCounter />
    <Chart />
    <WalletPortfolio />
    <WalletEvolution />
    <!-- <WalletAssetsDistribution /> -->
    <WalletPositionTracker />
</div>
</template>
<style scoped>
.body-wallet {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 1rem;
    padding: 1rem;
    background-color: rgba(20, 20, 20, 0.2);
    border-radius: 0.5rem;
}
</style>