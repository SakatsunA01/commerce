<template>
  <div class="bg-axis-primary">
    <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-axis-secondary sm:text-4xl">Especificaciones Técnicas</h2>
        <p class="mt-4 text-axis-tertiary">{{ product.description }}</p>

        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div v-for="feature in product.details" :key="feature.name" class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-axis-secondary">{{ feature.name }}</dt>
            <dd class="mt-2 text-sm text-axis-tertiary">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <img v-for="(image, index) in product.images.slice(0, 4)" :key="index" :src="getImageUrl(image)" :alt="product.name" class="rounded-lg bg-axis-neutral" />
      </div>
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
