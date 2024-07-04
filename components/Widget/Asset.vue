<script setup>
defineProps({
    assetStore: Object,
    assetName: String,
    categories: String,
    company: Object,
    crypto: Object
})

const tagColor = 'rgba(0, 128, 0, 0.7)'; // Define tag color variable
const darkGreenColor = 'rgba(0, 100, 0, 0.7)'; // Define dark green color variable
</script>

<template>
<div class="widget-asset">
    <div class="arrow-buttons">
        <ButtonUparrow />
        <ButtonDownarrow />
    </div>
    <NuxtLink :to="`/assets/${company.id}`" class="link-full-width">
    <div class="asset-content">
        <div class="profil-icon">
            <img src="assets/Logo_Color.png" alt="profil-icon">
        </div>
        <div class="tags-names">
            <p class="full-name">{{ company ? company.name : (crypto ? crypto.name : 'Asset Name') }}</p>
            <p class="tag-name" :style="{ backgroundColor: tagColor }">{{ company ? company.symbol : (crypto ? crypto.tags.join(', ') : '@Tags') }}</p>
            <p>Tools Bar</p>
            <WidgetToolbar />
        </div>
        <div class="display-prices" :style="{ backgroundColor: darkGreenColor }">
            <div class="price-evolution">
                <div class="nominal-price">
                    {{ company ? company.stock_price_usd : (crypto ? crypto.price_usd : '+0,303 BTC') }}
                </div>
                <div class="pourcentage-price">
                    {{ company ? company.change_percent : (crypto ? crypto.change_percent : '+1,07%') }}
                </div>
            </div>
            <div class="daily-price-chart">
                <img src="assets\DailyPriceChart.png" alt="daily-price-chart">
            </div>
        </div>
    </div>
    </NuxtLink>
</div>
</template>

<style>
.widget-asset {
    display: flex; /* Changed to flex to align children side by side */
    background-color: #1a1a1a; /* Dark background for the whole component */
    position: relative; /* Needed for absolute positioning of children */
    margin: 0.3rem 0.1rem;
}
.arrow-buttons{
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align items to the start (left) */
    justify-content: center;
    box-shadow: -5px 0px 10px 0px rgba(0, 0, 0, 0.5), inset 5px 0px 10px 0px rgba(255, 255, 255, 0.5);
    margin-left: 10px;
}
.link-full-width {
    display: flex; /* Changed to flex to ensure it aligns side by side with arrow buttons */
    width: 100%; /* Ensure link takes full width */
}
.asset-content{
    display: flex;
    flex-direction: row;
    align-items: normal;
    justify-content: space-between;
    width: 100%; /* Ensure it takes full width */
    box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.7); /* Added inner dark shadows */
}  
.full-name{
    font-size: larger; /* Make text bigger */
    font-weight: bold; /* Make text bold */
    color: white; /* Text color white */
    width: 100%; /* Ensure it takes full width */
}
.tag-name{
    font-size: small; /* Make text smaller */
    border-radius: 10px; /* Round corners */
    padding: 2px 5px; /* Padding inside the tag */
    color: white; /* Text color white */
    width: fit-content; /* Fit to content size */
}
.daily-price-chart img{
    height: 100%; /* Take full height of its parent */
}
.display-prices{
    background-color: rgba(0, 100, 0, 0.7); /* Dark green background */
}
.price-evolution{
    color: rgba(0, 100, 0, 0.7); /* Green text color */
}
</style>
