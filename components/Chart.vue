<script setup>
  import { ref, onMounted } from 'vue';
  import * as d3 from 'd3';
  
  const chart = ref(null);
  
  // Assuming `data` is passed as a prop or defined within the script
  // For demonstration, you can replace it with your actual data source
  const data = [
    { date: new Date(2023, 10, 1), open: 100, high: 105, low: 98, close: 103 },
    { date: new Date(2023, 10, 2), open: 103, high: 106, low: 100, close: 103 },
    { date: new Date(2023, 10, 3), open: 103, high: 109, low: 99, close: 106 },
    { date: new Date(2023, 10, 4), open: 106, high: 110, low: 101, close: 105 },
    { date: new Date(2023, 10, 5), open: 105, high: 115, low: 98, close: 110 },
    { date: new Date(2023, 10, 6), open: 110, high: 115, low: 103, close: 111 },
    { date: new Date(2023, 10, 7), open: 111, high: 115, low: 105, close: 114 },
    { date: new Date(2023, 10, 8), open: 114, high: 115, low: 109, close: 117 },
    { date: new Date(2023, 10, 9), open: 117, high: 125, low: 115, close: 119 },
    { date: new Date(2023, 10, 10), open: 119, high: 125, low: 114, close: 118 },
    { date: new Date(2023, 10, 11), open: 118, high: 125, low: 120, close: 121 },
    ];
  
    onMounted(() => {
    const margin = 50;
    const width = 400;
    const height = 200;
    const svg = d3.select(chart.value)
      .append('svg')
      .attr('class', 'chart')
      .attr('width', width)
      .attr('height', height);

    const x = d3.scaleBand().range([margin, width - margin]).padding(0.1);
    const y = d3.scaleLinear().range([height - margin, margin]);

    // Convert and process data
    data.forEach(d => {
      d.date = new Date(d.date);
      d.high = +d.high;
      d.low = +d.low;
      d.open = +d.open;
      d.close = +d.close;
    });

    // Define domains
    y.domain([d3.min(data, d => d.low), d3.max(data, d => d.high)]);
    x.domain(data.map(d => d.date));

    // Axis and grid lines
    const xAxis = d3.axisBottom(x).tickFormat(d3.timeFormat("%Y-%m-%d"));
    const yAxis = d3.axisLeft(y).ticks(10);
    
    svg.append('g')
       .attr('transform', `translate(0,${height - margin})`)
       .call(xAxis)
       .selectAll('text')
       .style('text-anchor', 'end')
       .attr('dx', '-.8em')
       .attr('dy', '.15em')
       .attr('transform', 'rotate(-65)');

    svg.append('g')
       .attr('transform', `translate(${margin}, 0)`)
       .call(yAxis);

    // Drawing candles
    svg.selectAll(".candle")
       .data(data)
       .enter().append("rect")
       .attr("x", d => x(d.date))
       .attr("y", d => y(Math.max(d.open, d.close)))
       .attr("height", d => Math.abs(y(d.open) - y(d.close)) || 1) // Ensure min height for visibility
       .attr("width", x.bandwidth())
       .attr("fill", d => d.open > d.close ? "red" : "green");

    // Drawing high to low lines
    svg.selectAll(".stem")
       .data(data)
       .enter().append("line")
       .attr("class", "stem")
       .attr("x1", d => x(d.date) + x.bandwidth()/2)
       .attr("x2", d => x(d.date) + x.bandwidth()/2)
       .attr("y1", d => y(d.high))
       .attr("y2", d => y(d.low))
       .attr("stroke", d => d.open > d.close ? "red" : "green");
});
</script>

<template>
  <div ref="chart"></div>
</template>

<style></style>
