<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CatalogView",
});
</script>

<script setup>
import { onMounted } from "vue";
import { productsStore } from "@/stores/products";
import { useRouter } from "vue-router";

const router = useRouter();
const store = productsStore();

onMounted(async () => {
  await store.fetchProductsFromDB();
  console.log(store.products);
});

const goToProductDetail = (id) => {
  router.push({ name: "product", params: { id } });
};
</script>

<template>
  <div class="container mx-auto p-2">
    <h1 class="text-3xl font-semibold text-center mb-5">Products</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      <div
        @click="goToProductDetail(product.id)"
        class="product shadow-md border-2 p-2"
        v-for="product in store.products"
        :key="product.id"
      >
        <img class="h-[200px] cursor-pointer" :src="product.thumbnail" alt="" />
        <h2 class="mb-2 text-2xl">
          <span class="font-semibold">Brand:</span> {{ product.brand }}
        </h2>
        <p class="mb-2">
          <span class="font-semibold">Description:</span>
          {{ product.description }}
        </p>
        <p><span class="font-semibold">Price:</span> ${{ product.price }}</p>
      </div>
    </div>
  </div>
</template>
