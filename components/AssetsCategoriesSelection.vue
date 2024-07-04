<script setup>
</script>
<template>
<div class="selection-box">
    <div id="selected-option" class="filter-selector">
        <img src="assets\Logo_Color.png" alt="profil-icon">
        <span>Selected</span>
    </div>
    <div id="neutral-option" class="filter-selector">
        <img src="assets\icon_Prices.png" alt="profil-icon">
        <span>Popular</span>
    </div>
    <div id="favorite-option" class="filter-selector">
        <img src="assets\Logo_Color.png" alt="profil-icon">
        <span>Favorite</span>
    </div>
    <div id="best-option" class="filter-selector">
        <img src="assets\Logo_Color.png" alt="profil-icon">
        <span>Best</span>
    </div>
</div>
</template>
<style>
.selection-box{
    display: inline-flex;
    padding: 1px;
    justify-content: center;
    align-items: center;
    gap: 2px;
    border-radius: 0px 3px;
    background: rgba(33, 33, 33, 0.9);
}
.selected-option{
    display: flex;
    padding: 0px 4px;
    justify-content: center;
    align-items: center;
    border-radius: 0px 3px;
    border: 1px solid #222;
    background: linear-gradient(88deg, #444 0%, #333 51.81%, #444 100.6%);
    box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.25), 0px 4px 10px 0px rgba(119, 119, 119, 0.25) inset;
}
.neutral-option{
    display: flex;
    padding: 0px 4px;
    justify-content: center;
    align-items: center;
    border-radius: 0px 3px;
    border: 1px solid #777;
    background: #555;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(255, 255, 255, 0.25) inset;
}
.rejected-option{
    display: flex;
    padding: 0px 4px;
    justify-content: center;
    align-items: center;
    border-radius: 0px 3px;
    border: 1px solid #222;
    background: #333;
    box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.25) inset, 3px 1px 10px 0px rgba(255, 255, 255, 0.25), -2px -2px 10px 0px rgba(255, 255, 255, 0.25);
}
.selection-box img{
    width: 1.1rem;
    height: 1.1rem;
}
</style>