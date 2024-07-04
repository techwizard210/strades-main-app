<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import newsData from '@/data/news.json'; // Assuming the JSON data is imported directly for simplicity

const route = useRoute();
const articleId = route.params.id;

const article = ref(null);
// Dummy example: Fetch the company's name based on companyId.
// Replace this with your actual logic to fetch company data.
// const companyName = ref('');
// const company = assetsStore.assets.categories.flatMap(category => category.companies).find(c => c.id === companyId);
// if (company) {
// companyName.value = company.name;
// }

// Find the article by ID across all categories
for (const category of newsData.categories) {
    const foundArticle = category.articles.find(a => a.id === articleId);
    if (foundArticle) {
        article.value = foundArticle;
        break;
    }
}
</script>

<template>
        <div class="article-container">

    </div>
    <div v-if="article">      
        <div class="article-title">
            <h1>{{ article.title }}</h1>
        <img :src="imageUrl" alt="article logo" width="120" height="120" />
      </div>
      <div class="article-content">
        <p>{{ article.content }}</p>
      </div>
    <WidgetSentiment />
    </div>
    <div v-else>
        <p>Article not found.</p>
    </div>
</template>

<style scoped>
.container-assetwidgets {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
}
</style>