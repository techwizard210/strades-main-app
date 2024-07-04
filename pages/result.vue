<script setup>

const profitloss = ref(250);
const variation = ref(0.15);
const period = ref("3 months");
</script>
<template>
<div class="results">
    Result: 
    <div class="results-container">
        <div class="profitloss-container">
            <div class="profitloss-text">
                Profit
            </div>
            <div class="profitloss-value">
                + {{profitloss}} USD
            </div>
        </div>
        <div class="variation-container">
            <div class="variation-text">
                Profit
            </div>
            <div class="variation-value">
                + {{variation}} %
            </div>
        </div>
        <div class="period-container">
            <div class="period-text">
                Period
            </div>
            <div class="period-value">
                {{period}}
            </div>
        </div>
    </div>
    <div class="summary-strategy">
        <div class="assets-list">
            <div class="assets-list-text">
                Assets swapped list:
            </div>
            <div class="assets-list-starting">
                From Bitcoin
            </div>
            <div class="assets-list-ending">
                To Ethereum
            </div>
        </div>
        <div class="summary-strategy-text">
            Summary Strategy
        </div>
        <div class="summary-strategy-value">
            Buy and Hold
        </div>
    </div>
    <WidgetChart />
    <!-- <Chart /> -->
    <div class="results-buttons">
        <ButtonModify />
        <ButtonBookmark />
        <ButtonShare />
        <ButtonDelete />
    </div>
</div>
</template>
<style>
.period-container{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 5px;
    border: 2.008px solid #515151;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 2px 11px 0px rgba(255, 255, 255, 0.25);
}
.period-text{
    display: flex;
    padding: 5px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 0px 0px 0px 5px;
    background: #1A1A1A;
    color: #FFF;
    text-align: center;
    font-family: "Work Sans";
    font-size: 14px;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
}
.period-value{
    display: flex;
    padding: 5px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 0px 5px 0px 0px;
    background: #150C4D;
    color: #FFF;
    text-align: center;
    font-family: "Work Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.profitloss-container{
    display: inline-flex;
    align-items: flex-start;
    border-radius: 0px 5px;
    border: 2px solid rgba(42, 189, 66, 0.5);
}
.profitloss-text{
    display: flex;
    padding: 5px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 0px 0px 0px 5px;
    background: rgba(71, 71, 71, 0.5);
    color: #FFF;
    text-align: center;
    font-family: "Work Sans";
    font-size: 14px;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
}
.profitloss-value{
    display: flex;
    padding: 5px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 0px 5px 0px 0px;
    background: #0E4D0C;
    color: #FFF;
    text-align: center;
    font-family: "Work Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.results{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.results-container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.results-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
}
.variation-container{
    display: inline-flex;
    align-items: flex-start;
    border-radius: 0px 5px;
    border: 2px solid rgba(42, 189, 66, 0.5);
}
.variation-text{
    display: flex;
    padding: 5px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 0px 0px 0px 5px;
    background: rgba(71, 71, 71, 0.5);
    color: #FFF;
    text-align: center;
    font-family: "Work Sans";
    font-size: 14px;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
}
.variation-value{
    display: flex;
    padding: 5px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 0px 5px 0px 0px;
    background: #0E4D0C;
    color: #FFF;
    text-align: center;
    font-family: "Work Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
</style>

