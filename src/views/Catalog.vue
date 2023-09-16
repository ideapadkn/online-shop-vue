<script setup>
import { onMounted } from "vue";
import { productsStore } from "@/stores/products";

const store = productsStore();

onMounted(async () => {
  await store.fetchProductsFromDB();
  console.log(store.products);
});
</script>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CatalogView",
});
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
    <div
      class="product shadow-md border-2 p-2"
      v-for="product in store.products"
      :key="product.id"
    >
      <img class="h-[200px]" :src="product.thumbnail" alt="" />
      <h2 class="mb-2"><span class="font-semibold">Brand:</span> {{ product.brand }}</h2>
      <p class="mb-2"><span class="font-semibold">Description:</span> {{ product.description }}</p>
      <p><span class="font-semibold">Price:</span> ${{ product.price }}</p>
    </div>
  </div>
</template>
