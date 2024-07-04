<script setup>
import { ref, onMounted } from 'vue';
import { useAssetsStore } from "@/stores/assetsStore.ts";

const assetsStore = useAssetsStore();
// const assets = ref([]);
const selectedAssets = ref(new Set());

onMounted(async () => {
  assets.value = await assetsStore.fetchAssets();
});

function toggleAssetSelection(assetId) {
  if (selectedAssets.value.has(assetId)) {
    selectedAssets.value.delete(assetId);
  } else {
    selectedAssets.value.add(assetId);
  }
}

// const Users = useUsersStore()
// const dataSources = ref([]);

// onMounted(async () => {
// dataSources.value = await fetchDataSources();
// });

// async function fetchDataSources() {
// Fetch the data sources from the backend service you set up.
// Adjust the URL to wherever your Nuxt server route is hosted.
// const response = await fetch('/api/dataSources');
// if (!response.ok) {
//     throw new Error('Failed to fetch data sources');
// }
// return response.json();
// }
</script>

<template>
 <div v-for="category in assetsStore.assets.categories" :key="category.name">
    <h2>{{ category.name }}</h2>
    <div class="asset-cards-container">
      <div
        v-for="company in category.companies"
        :key="company.id"
        class="asset-card"
        :class="{ 'asset-card-selected': selectedAssets.has(company.id) }"
        @click="toggleAssetSelection(company.id)"
      >
        <img :src="company.profileIcon" :alt="company.name" class="asset-image" />
        <div class="asset-info">
          <div class="asset-name">{{ company.name }}</div>
          <div class="asset-details">
            <div class="asset-sector">Sector: {{ company.sector }}</div>
            <div class="asset-symbol">Symbol: {{ company.symbol }}</div>
            <div class="asset-price">Price: ${{ company.stock_price_usd }}</div>
            <div class="asset-market-cap">Market Cap: ${{ company.market_cap_usd }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.asset-cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.asset-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f1f1f;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease;
}

.asset-card-selected {
  border: 2px solid white;
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5), 0 0 10px rgba(0, 0, 0, 0.5);
}

.asset-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
}

.asset-info {
  color: #ffffff;
  text-align: center;
}

.asset-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.asset-details {
  font-size: 14px;
}
</style>