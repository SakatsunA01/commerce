<template>
  <div class="group relative">
    <img :src="getImageUrl(product.image)" :alt="product.name" class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <router-link :to="`/product/${product.id}`">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ product.name }}
          </router-link>
        </h3>
      </div>
      <p class="text-sm font-medium text-gray-900">${{ product.price }}</p>
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