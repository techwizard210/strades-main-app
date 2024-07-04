<script setup>
import { ref, onMounted } from 'vue';
import {useDatasourcesStore} from "@/stores/DatasourcesStore.ts";

const dataSources = useDatasourcesStore()
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
<div class="data-source-container">
    <h3 class="data-source-title">Select a Data Source</h3>
    <div class="datasources-container">
        <div v-for="source in dataSources.datasources" :key="source.id" class="datasource-item">
            <!-- <img :src="sources.image_url" :alt="sources.name" class="data-source-image"> -->
            <div>{{ source.name }}</div>
            <div>{{ source.description }}</div>
        </div>
    </div>
</div>
</template>

<style>
.datasources-container {
    display: flex;
    flex-direction: row;
    background-color: rgba(18, 18, 18, 0.9);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    color: #ffffff;
}
.data-source-title {
    font-weight: bold;
    margin-bottom: 20px;
    color: #ffffff;
}
.datasource-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(37, 37, 37, 0.8);
    padding: 10px;
    margin: 10px 5px;
    border-radius: 4px;
}
.data-source-image {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}
.data-source-name {
    display: flex;
    align-items: center;
    color: #ffffff;
}
</style>
  