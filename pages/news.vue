<script setup>
import { ref } from 'vue';
import { useNewsStore } from "@/stores/newsStore.ts";

definePageMeta({
  title: 'News',
  description: 'News and events',
  layout: 'news',
})

const newsStore = useNewsStore();
const selectedCategoryName = ref(newsStore.news.categories[0]?.name); // Default to the first category
</script>
<template>
<div class="NewsPage">
    <h4>News Page</h4>
</div>
<div class="NewsPage">
    <h3>Calendar</h3>
    <h4>UpComing events</h4>
</div>
<WidgetFilter />
<div class="Tabs">
    <div v-for="category in newsStore.news.categories" :key="category.name" class="Tab" :class="{active: category.name === selectedCategoryName}" @click="selectedCategoryName = category.name">
        {{ category.name }}
    </div>
</div>
<div class="NewsBoard">
    <div v-if="selectedCategoryName" class="news">
        <h3>{{ selectedCategoryName }}</h3>
        <!-- <NuxtLink :to="`/news/${selectedCategoryName}`">View all {{ selectedCategoryName }} articles</NuxtLink> -->
        <div v-for="article in newsStore.news.categories.find(category => category.name === selectedCategoryName).articles" :key="article.id" class="article">
            <NuxtLink :to="`/articles/${article.id}`">
                <h2 class="title">{{ article.title }}</h2>
                <p>{{ article.content }}</p>
            </NuxtLink>
        </div>
    </div>
</div>
</template>
<style scoped>
.NewsPage{
    width: 100%;
    height: 100%;
    background-color: rgb(196, 196, 196);
}
.news {
    flex: 1;
    background-color: rgb(121, 121, 121);
    margin: 0.6rem;
    padding: 0.3rem;
    border: 1px solid #ccc;
}
.article {
    color: #ffffff;
    background-color: #111111;
    margin: 1rem;
    padding: 0.5rem;
    border: 0.1rem solid #979797;
}
.title {
    font-size: 1.1rem;
    font-weight: bold;
}
.Tabs {
    display: flex;
    margin-bottom: 1rem;
}
.Tab {
    padding: 0.5rem;
    cursor: pointer;
    border: 1px solid #ccc;
    margin-right: 0.5rem;
}
.Tab.active {
    background-color: #ddd;
}
</style>

