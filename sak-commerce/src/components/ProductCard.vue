<template>
  <div class="group relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-md">
    <div class="aspect-square w-full overflow-hidden rounded-md bg-axis-neutral group-hover:opacity-75 lg:h-80">
      <img :src="getImageUrl(product.image)" :alt="product.name" class="h-full w-full object-cover object-center" />
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-axis-secondary">
          <router-link :to="`/product/${product.id}`">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ product.name }}
          </router-link>
        </h3>
      </div>
      <p class="text-sm font-medium text-axis-secondary">${{ product.price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { Product } from '../data/products';

defineProps<{ product: Product }>();

const getImageUrl = (path: string) => {
  return new URL(path, import.meta.url).href;
};
</script>
