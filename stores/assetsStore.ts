import { defineStore } from "pinia";
import assetsData from "~/data/assets.json";
export const useAssetsStore = defineStore("assetsStore", () => {
    const assets = ref(assetsData)
    return {
        assets
    }
})
