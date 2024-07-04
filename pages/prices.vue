<script setup>
import {useAssetsStore} from "@/stores/assetsStore.ts";

definePageMeta({
    title: "Prices",
    description: "display the assets prices",
    layout: "prices",
});

const assetsStore = useAssetsStore();

const selectedCategory = ref(assetsStore.assets.categories[0]?.name); // Default to the first category

</script>

<template>
    <div class="container-assetwidgets">
        <AssetsCategoriesSelection />
    </div>
    <div>
        <!-- Tabs for categories -->
        <div class="tabs">
            <ul>
                <li v-for="category in assetsStore.assets.categories" :key="category.name" :class="{ 'is-active': category.name === selectedCategory }">
                    <a @click="selectedCategory = category.name">{{ category.name }}</a>
                </li>
            </ul>
        </div>

        <!-- Display WidgetAssets for the selected category -->
        <div class="container-assetwidgets">
            <div v-if="selectedCategory">
                <template v-for="category in assetsStore.assets.categories" :key="category.name">
                    <div v-if="category.name === selectedCategory && category.companies" v-for="company in category.companies" :key="company.id">
                        <WidgetAsset :company="company" />
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<style>
.container-assetwidgets{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 0.2rem;
    padding: 0.5rem 0.8rem;
    margin: 1rem;
    background-color: rgba(49, 49, 49, 0.5);
    color:#ffffff;
    border: 2px solid rgba(80, 80, 80, 0.5);
    border-radius: 8px;
}
.tabs ul {
    list-style-type: none;
    padding: 0;
}
.tabs li {
    display: inline;
    margin-right: 10px;
}
.tabs li.is-active a {
    font-weight: bold;
}
</style>