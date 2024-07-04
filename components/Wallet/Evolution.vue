<script setup>
import { ref, onMounted } from 'vue';
import * as d3 from 'd3';

const chartContainer = ref(null);
const selectionBarContainer = ref(null);
const percentageChange = ref(0);

const categories = ['crypto', 'forex', 'stocks', 'futures', 'others'];

const transactionsData = [
{ date: '2023-01-01', category: 'crypto', asset: 'Bitcoin', amount: 1000 },
{ date: '2023-01-05', category: 'stocks', asset: 'AAPL', amount: 500 },
{ date: '2023-01-10', category: 'forex', asset: 'EUR/USD', amount: 2000 },
{ date: '2023-01-15', category: 'futures', asset: 'ES', amount: 1500 },
{ date: '2023-01-20', category: 'others', asset: 'Gold', amount: 1000 },
// Add more transactions...
];

onMounted(() => {
const width = 500;
const height = 500;
const radius = Math.min(width, height) / 2;

const svg = d3
    .select(chartContainer.value)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

const color = d3.scaleOrdinal().domain(categories).range(d3.schemeCategory10);

const pie = d3.pie().value((d) => d.amount);

const arc = d3
    .arc()
    .innerRadius(radius * 0.5)
    .outerRadius(radius * 0.8);

    const update = (data) => {
    const categoryData = d3.group(data, (d) => d.category);
    const categoryTotals = Array.from(categoryData, ([category, assets]) => ({
      category,
      amount: d3.sum(assets, (d) => d.amount),
    }));

    const arcs = svg.selectAll('.arc').data(pie(categoryTotals));

    arcs
      .enter()
      .append('path')
      .attr('class', 'arc')
      .attr('fill', (d) => color(d.data.category))
      .attr('d', arc)
      .each(function (d) {
        this._current = d;
      });

    arcs.attr('d', arc);

    arcs.exit().remove();

    // Add asset names and percentages
    const total = d3.sum(categoryTotals, (d) => d.amount);
    const labels = svg.selectAll('.label').data(pie(categoryTotals));

    labels
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('transform', (d) => `translate(${arc.centroid(d)})`)
      .attr('dy', '0.35em')
      .text((d) => {
        const percent = ((d.data.amount / total) * 100).toFixed(1);
        return `${d.data.category}: ${percent}%`;
      });

    labels.attr('transform', (d) => `translate(${arc.centroid(d)})`);

    labels.exit().remove();
  };

const dates = Array.from(new Set(transactionsData.map((d) => d.date))).sort();
const startDate = new Date(dates[0]);
const endDate = new Date(dates[dates.length - 1]);

const xScale = d3
    .scaleTime()
    .domain([startDate, endDate])
    .range([0, width]);

const selectionBar = d3
    .select(selectionBarContainer.value)
    .append('div')
    .style('width', `${width}px`)
    .style('height', '20px')
    .style('background-color', 'rgba(255, 255, 255, 0.5)')
    .style('position', 'relative')
    .style('margin-top', '20px');
const selectionCursor = selectionBar
    .append('div')
    .style('width', '2px')
    .style('height', '20px')
    .style('background-color', 'red')
    .style('position', 'absolute')
    .style('left', '0')
    .style('cursor', 'pointer');
const initialData = transactionsData.filter(
    (d) => new Date(d.date) <= startDate
    );
update(initialData);
const initialTotal = d3.sum(initialData, (d) => d.amount);

// Place the new code for dividing the selection bar here
const walletStates = [];
let prevDate = startDate;
dates.forEach((date) => {
  const filteredData = transactionsData.filter(
    (d) => new Date(d.date) > prevDate && new Date(d.date) <= new Date(date)
  );
  if (filteredData.length > 0) {
    walletStates.push({ date, data: filteredData });
    prevDate = new Date(date);
  }
});

const stateWidth = width / walletStates.length;
walletStates.forEach((state, index) => {
  selectionBar
    .append('div')
    .style('display', 'inline-block')
    .style('width', `${stateWidth}px`)
    .style('height', '20px')
    .style('border-right', '2px solid white')
    .style('position', 'absolute')
    .style('left', `${stateWidth * index}px`)
    .text(state.date)
    .append('title')
    .text(state.data.map((d) => `${d.asset}: $${d.amount}`).join(', '));
});

selectionBar.on('mousemove', (event) => {
    const x = d3.pointer(event)[0];
    const date = xScale.invert(x);
    const filteredData = transactionsData.filter(
        (d) => new Date(d.date) <= date
        );
    update(filteredData);
    const currentTotal = d3.sum(filteredData, (d) => d.amount);
    percentageChange.value = (((currentTotal - initialTotal) / initialTotal) * 100).toFixed(2);
    selectionCursor.style('left', `${x}px`);
});})
</script>

<template>
<div>
    <div ref="chartContainer"></div>
    <div ref="selectionBarContainer"></div>
    <div>{{ percentageChange }}% change from first day</div>
  <!-- Show wallet distribution of assets-->
  <!-- <div class="WalletDistribution_container">
    <div class="WalletDistribution_item" v-for="(item,index) in items" :key="index">
      <div class="WalletDistribution_item_color" :style="{ backgroundColor: item.color }">
          <div class="WalletDistribution__item__name">{{ item.name }}</div>
          <div class="WalletDistribution__item__value">{{ item.value }}</div>
      </div>
    </div>
  </div> -->
</div>
</template>

<style>
</style>