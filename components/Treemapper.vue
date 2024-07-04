<script setup>
import { onMounted, reactive, ref, computed } from 'vue';
import * as d3 from 'd3';

const cryptos = ref([
{ id: 1, name: 'Bitcoin', price: 45000 },
{ id: 2, name: 'Ethereum', price: 3200 },
{ id: 3, name: 'Ripple', price: 100 },
{ id: 4, name: 'Litecoin', price: 1000 },
// More cryptos...
]);

const maxPrice = computed(() => {
return Math.max(...cryptos.value.map(c => c.price));
});

const data = reactive({
name: 'Crypto Market Values',
children: [
    { name: 'Bitcoin', value: 45000 },
    { name: 'Ethereum', value: 3200 },
    // More data...
],
});

const width = 600;
const height = 400;

onMounted(() => {
if (process.client) {
    const svg = d3.select('#treemap')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

    const root = d3.hierarchy(data)
    .sum(d => d.value)
    .sort((a, b) => b.value - a.value);

    const treemap = d3.treemap()
    .size([width, height])
    .padding(1);

    treemap(root);

    const cells = svg.selectAll('g')
    .data(root.leaves())
    .enter()
    .append('g')
    .attr('transform', d => `translate(${d.x0}, ${d.y0})`);

    cells.append('rect')
    .attr('width', d => d.x1 - d.x0)
    .attr('height', d => d.y1 - d.y0)
    .attr('fill', d => getColor(d.value)) // Using Vue's getColor method
    .attr('stroke', '#fff');

    cells.append('text')
    .selectAll('tspan')
    .data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g))
    .enter()
    .append('tspan')
    .attr('x', 4)
    .attr('y', (d, i) => 13 + i * 10) // Adjust for better text visibility
    .text(d => d);
}
});

function getColor(value) {
const intensity = value / maxPrice.value;
return `hsl(${intensity * 120}, 100%, 50%)`;
}

function getWidth(value) {
const baseWidth = 200; // Minimum width in pixels
return `${baseWidth + (value / maxPrice.value) * 100}px`;
}

function getHeight(value) {
const baseHeight = 100; // Minimum height in pixels
return `${baseHeight + (value / maxPrice.value) * 50}px`;
}

function formatPrice(value) {
return `$${value.toLocaleString()}`;
}
</script>
<template>
<div>
    <div id="treemap" class="d3-container"></div>
    <div class="treemap-container">
    <div v-for="crypto in cryptos" :key="crypto.id" class="treemap-item" :style="{ backgroundColor: getColor(crypto.price), width: getWidth(crypto.price), height: getHeight(crypto.price) }">
        <span class="crypto-name">{{ crypto.name }}</span>
        <span class="crypto-price">{{ formatPrice(crypto.price) }}</span>
    </div>
    </div>
</div>
</template>

<style scoped>
.d3-container {
    margin-bottom: 20px;
}
.treemap-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    background-color: #f5f5f5;
}
.treemap-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    color: white;
    font-weight: bold;
    transition: transform 0.3s ease;
}
.treemap-item:hover {
    transform: translateY(-5px);
}
.crypto-name {
    font-size: 16px;
}
.crypto-price {
    font-size: 14px;
    opacity: 0.8;
}
/* Styling for the SVG text to improve visibility */
text {
    font-size: 12px;
    fill: white; /* Ensure text is visible against varied background colors */
    pointer-events: none; /* Prevent text from interfering with mouse events */
}
</style>
