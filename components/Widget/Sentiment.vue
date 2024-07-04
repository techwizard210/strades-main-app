<script setup>
import { ref, onMounted } from 'vue';
import * as d3 from 'd3';

const userSentiment = ref(null);
const averageSentiment = ref(0.6); // Fake data representing the average sentiment of users
const numUsers = ref(100); // Fake data representing the number of users who gave their sentiment

onMounted(() => {
  const width = 400;
  const height = 100;
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };

  const svg = d3.select('.sentiment-container')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  const x = d3.scaleLinear()
    .domain([-1, 1])
    .range([0, width - margin.left - margin.right]);

  const gradient = svg.append('defs')
    .append('linearGradient')
    .attr('id', 'sentiment-gradient')
    .attr('x1', '0%')
    .attr('y1', '0%')
    .attr('x2', '100%')
    .attr('y2', '0%');

  gradient.append('stop')
    .attr('offset', '0%')
    .attr('stop-color', 'red');

  gradient.append('stop')
    .attr('offset', '50%')
    .attr('stop-color', 'yellow');

  gradient.append('stop')
    .attr('offset', '100%')
    .attr('stop-color', 'green');

  const sentimentBar = svg.append('rect')
    .attr('width', width - margin.left - margin.right)
    .attr('height', height - margin.top - margin.bottom)
    .attr('fill', userSentiment.value === null ? 'grey' : 'url(#sentiment-gradient)')
    .on('click', function () {
      if (userSentiment.value === null) {
        userSentiment.value = averageSentiment.value;
        d3.select(this).attr('fill', 'url(#sentiment-gradient)');
        updateArrow();
      }
    });

  const arrow = svg.append('path')
    .attr('d', d3.symbol().type(d3.symbolTriangle).size(100))
    .attr('transform', `translate(${x(0)}, ${height / 2}) rotate(90)`)
    .attr('fill', 'black');

  function updateArrow() {
    arrow.transition()
      .duration(500)
      .attr('transform', `translate(${x(userSentiment.value * 2 - 1)}, ${height / 2}) rotate(90)`);
  }
});
</script>

<template>
  <div class="sentiment-container">
    <h1>Sentiment Widget</h1>
    <p>Number of users: {{ numUsers }}</p>
  </div>

    <ul>
        <li class="button">Asset</li>
        <li class="button">Graph</li>
        <li class="button">Grade</li>
        <li class="button">Direction</li>
        <li class="button">Period</li>
    </ul>

</template>
<style scoped>
.button {
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #353535;
    color: #FFF;
    border-bottom: solid 4px #ffffff;
    border-radius: 3px;
}
.sentiment-container {
  background-color: rgba(50, 50, 50, 0.8);
  border-radius: 8px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
  padding: 1rem;
}
</style>

