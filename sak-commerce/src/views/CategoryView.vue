<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 text-center">{{ categoryName }}</h2>
      <div class="flex justify-end items-center mt-8">
          <div class="flex space-x-4">
            <select v-model="sortBy" class="border-gray-300 rounded-md">
              <option value="price-asc">Precio: de menor a mayor</option>
              <option value="price-desc">Precio: de mayor a menor</option>
              <option value="newest">Novedades</option>
            </select>
            <button class="text-gray-500 hover:text-gray-700">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM12 11a1 1 0 011-1h8a1 1 0 011 1v2a1 1 0 01-1 1h-8a1 1 0 01-1-1v-2zM3 18a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" />
              </svg>
            </button>
          </div>
        </div>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <ProductCard v-for="product in sortedProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import ProductCard from '../components/ProductCard.vue';
import { products } from '../data/products';

const route = useRoute();
const categoryName = computed(() => route.params.categoryName as string);
const sortBy = ref('newest');

const productsByCategory = computed(() => {
  return products.filter(product => product.category === categoryName.value);
});

const sortedProducts = computed(() => {
  let sorted = [...productsByCategory.value];
  if (sortBy.value === 'price-asc') {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortBy.value === 'price-desc') {
    sorted.sort((a, b) => b.price - a.price);
  } else if (sortBy.value === 'newest') {
    sorted.sort((a, b) => b.id - a.id);
  }
  return sorted;
});
</script>