<script setup lang="ts">
import { ref } from 'vue';
import { useFriendsStore } from '@/stores/FriendsStore';

const friendsStore = useFriendsStore();
const friends = ref([]);
const selectedCards = ref(new Set());

watchEffect(() => {
  friends.value = friendsStore.friends;
});

function toggleCardSelection(friendId: string) {
  if (selectedCards.value.has(friendId)) {
    selectedCards.value.delete(friendId);
  } else {
    selectedCards.value.add(friendId);
  }
}

function getEvolutionColor(evolution: number) {
  if (evolution > 0) {
    return 'rgba(0, 255, 0, 0.5)';
  } else if (evolution < 0) {
    return 'rgba(255, 0, 0, 0.5)';
  } else {
    return 'rgba(255, 165, 0, 0.5)';
  }
}

function getEvolutionSymbol(evolution: number) {
  if (evolution > 0) {
    return '+';
  } else if (evolution < 0) {
    return '-';
  } else {
    return '';
  }
}
</script>

<template>
  <div class="container">
    <div
      v-for="friend in friends"
      :key="friend.id"
      class="card"
      :class="{ selected: selectedCards.has(friend.id) }"
      :style="{ backgroundImage: `url(${friend.image})` }"
      @click="toggleCardSelection(friend.id)"
    >
      <div class="border">
        <h2>{{ friend.name }}</h2>
        <div class="icons">
          <i class="fa fa-username" aria-hidden="true">{{ friend.username }}</i>
          <i class="fa fa-online" aria-hidden="true">{{ friend.online }}</i>
          <i class="fa fa-value" aria-hidden="true">{{ friend.value }}</i>
          <i class="fa fa-evolution" aria-hidden="true" :style="{ backgroundColor: getEvolutionColor(friend.evolution) }">
            {{ getEvolutionSymbol(friend.evolution) }}{{ friend.evolution }}
          </i>
          <i class="fa fa-ranking" aria-hidden="true">Ranking</i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 90vh;
  width: 90vw;
  max-height: 720px;
  max-width: 1152px;
  min-height: 540px;
  min-width: 900px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  transition: box-shadow 0.3s;
}

.container:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.border {
  height: 369px;
  width: 290px;
  background: transparent;
  border-radius: 10px;
  transition: border 0.3s;
  position: relative;
}

.card.selected .border {
  border: 2px solid white;
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5), 0 0 10px rgba(0, 0, 0, 0.5);
}

.card {
  height: 379px;
  width: 300px;
  background: grey;
  border-radius: 10px;
  transition: background 0.8s;
  overflow: hidden;
  background: black;
  box-shadow: 0;
  background: black;
  box-shadow: 0 70px 63px -60px #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-size: 300px;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
}

.card:hover {
  background-size: 600px;
  background-position: left center;
}

.card:hover h2 {
  opacity: 1;
}

.card:hover .fa {
  opacity: 1;
}

h2 {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: white;
  margin: 20px;
  opacity: 0;
  transition: opacity 1s;
}

.fa {
  opacity: 0;
  transition: opacity 1s;
}

.fa-evolution {
  border-radius: 5px;
  padding: 5px;
}

.icons {
  position: absolute;
  fill: #fff;
  color: #fff;
  height: 130px;
  top: 226px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>