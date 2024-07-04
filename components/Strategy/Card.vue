<script setup>
const props = defineProps({
  name: String,
  content: String,
  profit: Number,
  loss: Number,
  period: String,
  asset: String,
  datasource: String,
  statement: String,
  avatars: Array,
  complexity: String,
  creator: String,
  dateofcreation: String,
  dateoflastupdate: String
});

const priceEvolution = ref({
  percentage: "1,07",
  nominal: "0,303",
});
const stratName = ref("$Strat2Win");
const imageUrl = ref("");

const profitClass = computed(() => {
  if (props.profit > 0) return "positive";
  if (props.profit < 0) return "negative";
  return "neutral";
});

const profitBorderColor = computed(() => {
  if (props.profit > 0) return 'rgba(60, 255, 128, 0.3)';
  if (props.profit < 0) return 'rgba(255, 60, 60, 0.3)';
  return 'rgba(255, 255, 255, 0.3)';
});
</script>

<template>
  <div class="strategy-card" :class="profitClass">
    <div class="card-header">
      <div class="name-strat">{{ stratName }}</div>
      <img :src="imageUrl" alt="about logo" class="strategy-image" />
    </div>
    <div class="card-content">
      <p><span class="content-item">{{ props.content }}</span></p>
      <p><span class="content-item">Profit: {{ props.profit }}</span></p>
      <p><span class="content-item">Loss: {{ props.loss }}</span></p>
      <p><span class="content-item">Period: {{ props.period }}</span></p>
      <p><span class="content-item">Asset: {{ props.asset }}</span></p>
      <p><span class="content-item">Data Source: {{ props.datasource }}</span></p>
      <p><span class="content-item">Statement: {{ props.statement }}</span></p>
    </div>

    <div class="display-strats">
      <div class="container-strat">
        <div class="value-indicator" :class="profitClass">
          +{{ priceEvolution.percentage }}/d
        </div>
        <div class="value-indicator" :class="profitClass">
          +{{ priceEvolution.nominal }} BTC/d
        </div>
      </div>
    </div>

    <div class="avatars">
      <img v-for="avatar in props.avatars" :src="avatar" alt="Avatar" class="avatar-image" />
    </div>
  </div>
</template>

<style scoped>
.strategy-card {
  background-color: rgba(40, 40, 40, 0.1);
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
}

.strategy-card:hover {
  border-color: rgba(60, 255, 128, 0.3);
  box-shadow: 0 2px 4px rgba(96, 250, 127, 0.4), 0 1px 2px rgba(51, 255, 82, 0.3);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.card-content {
  margin-bottom: 1rem;
}

.card-content p {
  margin-bottom: 0.5rem;
  color: #f3f4f6;
}

.display-strats {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 1rem;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container-strat {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.name-strat {
  font-size: 1rem;
  font-weight: bold;
  color: #f3f4f6;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  box-shadow: inset 0 2px 4px 4px rgba(0, 0, 0, 0.8), 0 0 6px;
  margin-top: -1rem;
  align-self: start;
}
.value-indicator {
  background-color: #4b5563;
  color: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
}
.strategy-card.positive {
  background-color: rgba(61, 123, 67, 0.5);
}
.strategy-card.negative {
  background-color: red;
}
.strategy-card.neutral {
  background-color: grey;
}
.value-indicator.positive {
  background-color: green;
  color: #f3f4f6;
}
.value-indicator.negative {
  background-color: red;
  color: #f3f4f6;
}
.value-indicator.neutral {
  background-color: grey;
  color: #f3f4f6;
}
</style>
