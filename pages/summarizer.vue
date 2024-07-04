<script setup>
definePageMeta({
  title: 'Strades',
  description: 'Strades Social Trading Platform',
  layout: 'default',
})

</script>
<template>
    <div class="section">
        <h1>Summarizer</h1>
        <div class="container-nocode">
            <div class="container-variable">
                <div class="container-type">
                    Periode: 
                </div>
                <div class="container-code">
                    Every Month
                </div>
            </div>
            <div class="container-variable">
                <div class="container-type">
                    Condition#1: 
                </div>
                <div class="container-code">
                    if
                </div>
            </div>
            <div class="container-variable">
                <div class="container-type">
                    Data: 
                </div>
                <div class="container-code">
                    Number of commits on Github
                </div>
            </div>
            <div class="container-variable">
                <div class="container-type">
                    Condition#2: 
                </div>
                <div class="container-code">
                    is UP for
                </div>
            </div>
            <div class="container-variable">
                <div class="container-type">
                    Asset:  
                </div>
                <div class="container-code">
                    Bitcoin
                </div>
            </div>
            <div class="container-variable">
                <div class="container-type">
                    Condition#3:  
                </div>
                <div class="container-code">
                    by 10%
                </div>
            </div>
            <div class="container-variable">
                <div class="container-type">
                    Comparator:
                </div>
                <div class="container-code">
                    compared to the average from the previous month:
                </div>
            </div>
            <div class="container-variable">
                <div class="container-type">
                    Link:
                </div>
                <div class="container-code">
                    Then
                </div>
            </div>
            <div class="container-variable">
                <div class="container-type">
                    Action:
                </div>
                <div class="container-code">
                    Buy
                </div>
            </div>
            <div class="container-variable">
                <div class="container-type">
                    Quantity:
                </div>
                <div class="container-code">
                    100 USD
                </div>
            </div>
            <div class="container-variable">
                <div class="container-type">
                    Target:
                </div>
                <div class="container-code">
                    of Bitcoin (BTC)
                </div>
            </div>
        </div>
        <NuxtLink to="/result">
            <div class="button-test">
                <p>Test</p>
            </div>
        </NuxtLink>
    </div>
</template>
<style>
.button-test{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
    padding: 0.5rem;
    background-color: rgba(64, 76, 129, 0.5);
    border-radius: 0.5rem;
}
.container-code{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.1rem;
    padding: 0.5rem;
    background-color: rgba(20, 20, 20, 0.2);
    border-radius: 0.5rem;
}
.container-nocode {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  background-color: rgba(20, 20, 20, 0.2);
  border-radius: 0.5rem;
  max-width: 100%;
  box-sizing: border-box;
}
.container-variable {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0.2rem;
  padding: 0.3rem;
  background-color: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(78, 78, 78, 0.5);
  border-radius: 0.5rem;
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5), 0 0 10px rgba(0, 0, 0, 0.8);
}

.container-variable > .container-type {
  border: 1px solid rgba(135, 206, 250, 0.8);
  font-style: italic;
}

.container-variable > .container-code {
  font-weight: bold;
  font-size: 1.1em;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
}
.section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    padding: 1rem;
    background-color: rgba(20, 20, 20, 0.2);
    border-radius: 0.5rem;
}
</style>