<template>
  <div>
    <div v-if="product" class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img :src="selectedImage" :alt="product.name" class="rounded-lg shadow-lg transition-opacity duration-300">
          <div class="mt-4 grid grid-cols-3 gap-4">
            <img v-for="(image, index) in product.images" :key="index" :src="getImageUrl(image)" :alt="product.name"
              class="rounded-lg cursor-pointer border-2 hover:border-axis-accent transition-all  duration-300"
              :class="{ 'border-axis-accent': selectedImage === getImageUrl(image) }"
              @click="selectedImage = getImageUrl(image)">
          </div>
        </div>
        <div>
          <h1 class="text-3xl font-display font-bold text-axis-secondary">{{ product.name }}</h1>
          <p class="text-2xl text-axis-secondary mt-2">${{ product.price }}</p>
          <p class="text-axis-tertiary mt-4">{{ product.description }}</p>
          <div class="mt-6">
            <h3 class="text-sm font-medium text-axis-secondary">Color</h3>
            <div class="flex space-x-2 mt-2">
              <div v-for="(color, index) in ['#000000', '#FFFFFF', '#888888']" :key="index"
                :style="{ backgroundColor: color }"
                class="w-8 h-8 rounded-full border-2 border-gray-200 cursor-pointer hover:border-axis-accent"></div>
            </div>
          </div>
          <div class="mt-6">
            <button @click="addToCart" :class="{ 'bg-green-500': addedToCart, 'bg-axis-accent': !addedToCart }"
              class="w-full text-white px-8 py-3 rounded-md font-medium transition-colors duration-300">{{ addedToCart ?
                '¡Añadido!' : 'Añadir al carrito' }}</button>
          </div>
          <div class="mt-6 border-t border-gray-200 pt-4">
            <h3 class="text-sm font-medium text-axis-secondary">Envío y Devoluciones</h3>
            <p class="mt-2 text-sm text-axis-tertiary">Envío gratuito en 24/48 horas. Devoluciones gratuitas durante 30
              días.</p>
          </div>
        </div>
      </div>
    </div>
    <ProductSpecifications v-if="product" :product="product" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import ProductSpecifications from '../components/ProductSpecifications.vue';
import { products } from '../data/products';

const route = useRoute();
const productId = ref(parseInt(route.params.id as string));

const product = computed(() => products.find(p => p.id === productId.value));

const getImageUrl = (path: string) => {
  if (!path) return '';
  return new URL(path, import.meta.url).href;
};

const selectedImage = ref(getImageUrl(product.value?.image));

const addedToCart = ref(false);

const addToCart = () => {
  addedToCart.value = true;
  setTimeout(() => {
    addedToCart.value = false;
  }, 2000);
};

watch(() => route.params.id, (newId) => {
  productId.value = parseInt(newId as string);
  selectedImage.value = getImageUrl(product.value?.image);
});
</script>
