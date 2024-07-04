<script setup>
import { ref, computed } from 'vue';

const portfolioId = ref('Portfolio1');
const portfolioData = ref({
  id: 'Portfolio1',
  allocations: [
    { type: 'Stocks', value: 20, color: 'gray', icon: 'i-heroicons-cog-6-tooth' },
    { type: 'Fiats', value: 20, color: 'red', icon: 'i-heroicons-window' },
    { type: 'Futures', value: 20, color: 'yellow', icon: 'i-heroicons-document' },
    { type: 'Cryptos', value: 20, color: 'green', icon: 'i-heroicons-film' },
    { type: 'Commodities', value: 20, color: 'blue', icon: 'i-heroicons-archive' }
  ]
});

const changePortfolio = () => {
  console.log('Change portfolio functionality goes here.');
};

// Function to convert values to percentages
const convertToPercentage = (value) => `${value}%`;

// Computed property to calculate total allocation
const totalAllocation = computed(() => {
  return portfolioData.value.allocations.reduce((total, allocation) => total + allocation.value, 0);
});
</script>

<template>
  <div class="section">
    <button @click="changePortfolio" class="portfolio-button">
      <span>Accounts</span>
      <span>#{{ portfolioId }}</span>
    </button>
    <div class="total-percentage">Total: {{ totalAllocation }}%</div>
  </div>
  
  <!-- NuxtUI/component/meter -->
  <UMeterGroup :max="100">
    <template #indicator>
      <div class="flex gap-1.5 justify-between text-sm">
        <p>{{ totalAllocation }}% used</p>
        <p class="text-gray-500 dark:text-gray-400">{{ 100 - totalAllocation }}% remaining</p>
      </div>
    </template>

    <UMeter v-for="allocation in portfolioData.allocations" :key="allocation.type" :value="allocation.value" :color="allocation.color" :label="`${allocation.type}: ${convertToPercentage(allocation.value)}`" :icon="allocation.icon" />
  </UMeterGroup>
</template>

<style>
.section {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.portfolio-button {
  cursor: pointer;
  background-color: blue;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  gap: 10px;
}

.total-percentage {
  font-size: 1rem;
  color: #333;
}

.flex {
  display: flex;
}

.gap-1\\.5 {
  gap: 1.5rem;
}

.justify-between {
  justify-content: space-between;
}

.text-sm {
  font-size: 0.875rem;
}

.text-gray-500 {
  color: #6b7280;
}

.dark .text-gray-400 {
  color: #9ca3af;
}
</style>
