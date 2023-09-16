<script>
import { computed } from "vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductDetails",
});
</script>

<script setup>
import { computed } from "vue";
import { productsStore } from "@/stores/products";
import { useRoute } from "vue-router";

const route = useRoute();
const store = productsStore();

const selectedProduct = computed(() => {
  return store.products.find((item) => {
    item.id === Number(route.params.id);
  });
});
</script>

<template>
  <div>
    <div>
      <img :src="selectedProduct.thumbnail" alt="" />
    </div>
    <div>
      <h2 class="mb-2 text-2xl">
        <span class="font-semibold">Brand:</span> {{ selectedProduct.brand }}
      </h2>
      <p class="mb-2">
        <span class="font-semibold">Description:</span>
        {{ selectedProduct.description }}
      </p>
      <p>
        <span class="font-semibold">Price:</span> ${{ selectedProduct.price }}
      </p>
    </div>
  </div>
</template>
