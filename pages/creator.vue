<script setup>
import { ref, computed } from 'vue';
definePageMeta({
    title: "default",
    description: "default",
    layout: "default",
});

import imageUrl from "/assets/Logo_Color.png";

const categories = [
    {
      id: 1,
      name: 'Informations',
      color: '#FF6F91',
      isVisible: false,
      details: 'Specificities of the Informations category',
    }
];

function toggleVisibility(category) {
  category.isVisible = !category.isVisible;
};

const quantity = ref(1);
const credit = ref(1000);
const neededCredit = ref(842);
const prompt = ref('');
const showPrompt = ref(false);

// Define constants for conditions and parameters
const dataSources = ref([
  { id: 1, name: 'DataSource 1' },
  { id: 2, name: 'DataSource 2' },
  // Add more data sources as needed
]);

const assets = ref([
  { id: 1, name: 'Bitcoin' },
  { id: 2, name: 'Ethereum' },
  // Add more assets as needed
]);

const conditions = ref([
  { id: 1, name: 'Stoploss', action: 'add/delete' },
  { id: 2, name: 'Takeprofit', action: 'add/delete' },
  // Add more conditions as needed
]);

const technicalIndicators = ref([
  { id: 1, name: 'Indicator 1' },
  { id: 2, name: 'Indicator 2' },
  // Add more indicators as needed
]);

const riskRating = ref(11);
const complexityRating = ref('2/10');

const hasEnoughCredit = computed(() => {
  return credit.value >= neededCredit.value;
});

function addPrompt() {
  showPrompt.value = true;
}

function analyseStrategy() {
  if (hasEnoughCredit.value) {
    // Create JSON file with strategy parameters
    const strategyParams = {
      dataSources: dataSources.value,
      assets: assets.value,
      conditions: conditions.value,
      technicalIndicators: technicalIndicators.value,
      riskRating: riskRating.value,
      complexityRating: complexityRating.value,
      prompt: prompt.value
    };
    // Save JSON file to data/ folder
    // ...
    // Navigate to summarizer page
    navigateTo('/summarizer');
  } else {
    alert('Not enough credits to analyse strategy');
  }
}

const CreditPriceCost = computed(() => {
  return credit.value * 0.000000001;
});

</script>

<template>
    <div class="title">
        <p>Creator Strategy</p>
    </div>
    <div class="counter-credit">Credit Owned
      <div class="counter-credit-value">{{ credit }}</div>
    </div>
    <h1>Parameters</h1>
    <div class="selector-datasources">
      <SelectorDatasources />
    </div>
    <div class="selector-assets">
        <div class="selector-assets-title">Assets</div>
        <div v-for="asset in assets" :key="asset.id" class="selector-assets-value">
          {{ asset.name }}
          <img :src="imageUrl" alt="about logo" width="20" height="20" />
        </div>
    </div>
    <div class="selector-title-periods">
      Periods: calendar
      <DateRangePicker />
    </div>
    <div class="selector-title-conditions">Conditions
      <div class="selector-entry">Entry</div>
      <div class="selector-exit">Exit</div>
      <div class="selector-stoploss">Stoploss: <button>add</button></div>
      <div class="selector-takeprofit">Takeprofit: add/delete</div>
      <div class="selector-quantity">Quantity: {{ quantity }}</div>
      <div class="selector-support">support: add/delete</div>
      <div class="selector-resistance">resistance: add/delete</div>
      <div class="selector-technicalindicators">Technical Indicators: add/delete</div>
      <div class="selector-trend">Trend: add/delete</div>
      <div class="selector-riskrating">Risk rating {{ riskRating }}</div>
      <div class="selector-complexityrating">Complexity Rating: {{ complexityRating }}</div>
    </div>
    <SelectorAssets />
    <SelectorUsers />
    <NuxtLink to="/summarizer">
      <div class="button-analyse">Analyse Strategy
        <div class="button-analyse-value">{{CreditPriceCost}}</div>
      </div>
    </NuxtLink>
</template>

<style>
.button-analyse{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.1rem 0.2rem;
  border: 8px solid rgba(15, 90, 71, 0.76);
  border-radius: 8px;
  border-radius: 8px;
  padding:0.5rem;
  margin: 1rem;
  background-color: rgba(0, 155, 83, 0.5);
  color:#ffffff;
}
.counter-credit{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.1rem 0.2rem;
  margin: 1rem;
  background-color: #290808;
  color:#ffffff;

}
.selector-assets{
  display: flex;
  flex-direction: column;
  background-color: #0c0c0c;
  color:#ffffff;
}
.selector-datasources{
  display: flex;
  flex-direction: column;
  background-color: #181818;
  color:#ffffff;
}

.selector-datasources-value{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 0.1rem 0.2rem;
  margin: 1rem;
  background-color: #131313;
  color:#ffffff;
}
.title {
    --s: 50px; /* control the size */
    --c1: #111111;
    --c2: #1b1b1b;
    
    background:
      conic-gradient(at 25% 25%,#0000 75%,var(--c1) 0) var(--s) var(--s),
      repeating-conic-gradient(at 25% 25%,var(--c1) 0 25%,var(--c2) 0 50%);
    background-size: calc(2*var(--s)) calc(2*var(--s));
    animation: g13 8s infinite;
  }
  @keyframes g13 {
    12.5% {
      background-position: calc(2*var(--s)) 0,0 0;
    }
    23%,27% {
      background-position: calc(3*var(--s)) calc(-1*var(--s)),0 0;
    }
    35.5%,39.5% {
      background-position: calc(4*var(--s)) 0,0 0;
    }
    48%,52% {
      background-position: calc(5*var(--s)) var(--s),0 0;
    }
    60.5%,64.5% {
      background-position: calc(4*var(--s)) calc(2*var(--s)),0 0;
    }
    73%,77% {
      background-position: calc(3*var(--s)) calc(3*var(--s)),0 0;
    }
    85.5%,89.5% {
      background-position: calc(2*var(--s)) calc(2*var(--s)),0 0;
    }
  }
  .title p {
    font-size: 1.3rem;
    text-align: center;
    padding: 0.2rem;
  }
.selector-title-conditions{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: rgba(36, 36, 36, 0.76); /* Dark background color */
  color: #ffffff; /* White text color */
  border-radius: 4px;
  box-shadow: inset 0 0 10px rgb(24, 24, 24); /* White inner shadow */
  border: 1px solid rgba(10, 10, 10, 0.76); /* Slightly lighter border for some depth */
  font-size: 1rem;
  text-align: center;
}
.selector-title-periods,
.selector-stoploss,
.selector-takeprofit,
.selector-quantity,
.selector-support,
.selector-resistance,
.selector-technicalindicators,
.selector-trend,
.selector-riskrating,
.selector-complexityrating {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin: 0.1rem 0;
  background-color: #121212; /* Dark background color */
  color: #ffffff; /* White text color */
  border-radius: 4px;
  box-shadow: inset 0 0 10px #ffffff; /* White inner shadow */
  border: 1px solid #333333; /* Slightly lighter border for some depth */
  font-size: 1rem;
  text-align: center;
  transition: all 0.3s ease;
}

.selector-title-periods:hover,
.selector-stoploss:hover,
.selector-takeprofit:hover,
.selector-quantity:hover,
.selector-support:hover,
.selector-resistance:hover,
.selector-technicalindicators:hover,
.selector-trend:hover,
.selector-riskrating:hover,
.selector-complexityrating:hover {
  background-color: #1a1a1a; /* Slightly lighter background on hover */
  box-shadow: inset 0 0 15px #ffffff; /* Stronger inner shadow on hover */
  transform: scale(1.05); /* Slight scale up on hover */
}
</style>