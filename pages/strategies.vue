<script setup>
definePageMeta({
  title: "Strategies",
  description: "Page of the strategies",
  layout: "strategies",
});

import imageUrl from "/assets/Logo_Color.png";
import { ref } from "vue";

const items = [
  {
    content: "Github Commits",
    profit: 10000,
    content: [],
    loss: 300,
    period: "2024-03-01",
    asset: "BTC",
    datasource: "CoinMarketCap",
    statement: [],
  },
  {
    content: "Wikipedia Page Views",
    profit: 8000,
    content: [],
    loss: 4300,
    period: "2024-01-07",
    asset: "USD",
    datasource: "CoinMarketCap",
    statement: [],
  },
  {
    content: "Sentiment on Reddit",
    profit: 8000,
    content: [],
    loss: 4500,
    period: "2024-06-12",
    asset: "BTC",
    datasource: "CoinMarketCap",
    statement: [],
  },
  {
    content: "Insider Transactions",
    profit: 1860,
    content: [],
    loss: 2300,
    period: "2024-01-01",
    asset: "BTC",
    datasource: "CoinMarketCap",
    statement: [],
  },
  {
    content: "Averaging Down",
    profit: 35600,
    content: [],
    loss: 16700,
    period: "2024-01-01",
    asset: "USD",
    datasource: "CoinMarketCap",
    statement: [],
  },
  {
    content: "Company Reviews",
    profit: 10000,
    content: [],
    loss: 300,
    period: "2024-01-01",
    asset: "SOL",
    datasource: "CoinMarketCap",
    statement: [],
  },
  {
    content: "Retail Sales",
    profit: 10000,
    content: [],
    loss: 300,
    period: "2024-01-01",
    asset: "BTC",
    datasource: "CoinMarketCap",
    statement: [],
  },
  {
    content: "Interest Rate",
    profit: 19000,
    content: [],
    loss: 3000,
    period: "2024-01-01",
    asset: "BNB",
    datasource: "CoinMarketCap",
    statement: [],
  },
  {
    content: "Consumer Price Index",
    profit: 15000,
    content: [],
    loss: 330,
    period: "2024-04-01",
    asset: "BTC",
    datasource: "CoinMarketCap",
    statement: [],
  },
  {
    content: "Patents",
    profit: 10300,
    content: [],
    loss: 300,
    period: "2024-01-04",
    asset: "ETH",
    datasource: "CoinMarketCap",
    statement: [],
  },
];

const nbBacktest = ref(3);
const nbLiveTest = ref(3);
const activeSection = ref("backtest");

const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};

const breakpoints = {
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 7,
    snapAlign: "start",
  },
};
</script>

<template>
  <div class="strategies-page">
    <div class="page-title">
      <p>Strategies</p>
    </div>
    <div class="content-container">
      <div class="transactions">
        <p>Transactions</p>
        <p>filters</p>
        <div class="transaction-history">
          <p>Next Transactions</p>
          <p>Transaction History</p>
        </div>
        <p>List of Strategies</p>
        <Carousel v-bind="settings" :breakpoints="breakpoints">
          <Slide v-for="(item, index) in items" :key="index">
            <StrategyCard
              :key="index"
              :content="item.content"
              :profit="item.profit"
            />
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>

        <div class="strategies-container">
          <div class="nav-buttons-strategies">
            <div
              class="button-backtest"
              :class="{ active: activeSection === 'backtest' }"
              @click="activeSection = 'backtest'"
            >
              <NuxtLink to="/backtest">BackTests</NuxtLink>
              <div>{{ nbBacktest }}</div>
            </div>
            <div
              class="button-livetest"
              :class="{ active: activeSection === 'livetest' }"
              @click="activeSection = 'livetest'"
            >
              <NuxtLink to="/livetest">LiveTests</NuxtLink>
              <div>{{ nbLiveTest }}</div>
            </div>
          </div>
          <div class="strategy-cards-container">
            <div v-if="activeSection === 'backtest'" class="strategy-cards">
              <StrategyCard
                v-for="(item, index) in items.slice(0, nbBacktest)"
                :key="item"
                :content="item.content"
                :profit="item.profit"
              />
            </div>
            <div v-if="activeSection === 'livetest'" class="strategy-cards">
              <StrategyCard
                v-for="(item, index) in items.slice(0, nbLiveTest)"
                :key="item"
                :content="item.content"
                :profit="item.profit"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="workshop">
        <p>filters</p>
      </div>
    </div>

    <NuxtLink to="/creator" class="button-creator">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          d="m5.157 13.069l4.611-4.685a.546.546 0 0 0 0-.768L5.158 2.93a.552.552 0 0 1 0-.771a.53.53 0 0 1 .759 0l4.61 4.684a1.65 1.65 0 0 1 0 2.312l-4.61 4.684a.53.53 0 0 1-.76 0a.552.552 0 0 1 0-.771"
        />
      </svg>
      <p>Create a new strategy</p>
    </NuxtLink>
  </div>
</template>

<style scoped>
.strategies-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgba(25, 25, 25, 0.9);
  color: rgba(255, 255, 255, 0.9);
  /* margin-bottom: 3rem; */
  padding-bottom: 7rem;
}

.content-container {
  flex: 1;
  padding: 1.5rem 1rem;
  margin-top: 4rem; /* Adjust based on the height of the top navigation bar */
  margin-bottom: 4rem; /* Adjust based on the height of the bottom navigation bar */
}
.page-title {
  width: 100%;
  height: 4rem;
  align-items: center;
  /* background-color: rgba(51, 6, 6, 0.8); */
}

.page-title p {
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
}

.strategy-cards {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  overflow-x: auto;
}

.nav-buttons-strategies {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  margin: 1rem;
  background-color: rgba(51, 51, 51, 0.8);
}

.button-backtest,
.button-livetest {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  background-color: rgba(17, 17, 17, 0.8);
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
}

.button-backtest.active,
.button-livetest.active {
  background-color: rgba(43, 185, 50, 0.5);
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.8);
}

.strategies-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(1, 17, 1, 0.2);
  border-radius: 8px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
  padding: 1rem;
}
.strategy-cards-container {
  width: 100%;
}
.button-creator {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  background-color: rgba(17, 17, 17, 0.8);
  overflow: hidden;
  border: 2px solid transparent;
  border-radius: 4px;
  animation: glowing-border 2s linear infinite;
}

.button-creator::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    0deg,
    transparent,
    rgba(111, 111, 111, 0.8),
    transparent
  );
  transform: rotate(45deg);
  animation: glowing 1.5s linear infinite;
}

@keyframes glowing-border {
  0% {
    border-color: rgba(255, 255, 255, 0.8);
  }
  50% {
    border-color: rgba(255, 255, 255, 0.2);
  }
  100% {
    border-color: rgba(255, 255, 255, 0.8);
  }
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: #10b981;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
