<template>
  <div>
    <Hero />
    <Category />
    <div class="bg-axis-primary">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 class="text-3xl font-display font-bold text-center text-axis-secondary">Productos Destacados</h2>
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <ProductCard v-for="product in featuredProducts" :key="product.id" :product="product" />
        </div>
      </div>
    </div>
    <div class="bg-axis-neutral py-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img src="@\assets\manifiesto-backgroud.png" alt="Manifiesto de Marca" class="rounded-lg">
          </div>
          <div>
            <h2 class="text-3xl font-display font-bold text-axis-secondary">Manifiesto de Marca</h2>
            <p class="mt-4 text-axis-tertiary">En Axis Tech, creemos que la tecnología debe ser una extensión natural de
              tu vida. Por eso, diseñamos productos que no solo son potentes y funcionales, sino también hermosos y
              sencillos de usar. Nuestra filosofía es simple: diseño que simplifica tu día.</p>
          </div>
        </div>
      </div>
    </div>
    <Testimonials />
  </div>
</template>

<script setup lang="ts">
import Hero from '../components/Hero.vue';
import Category from '../components/Category.vue';
import ProductCard from '../components/ProductCard.vue';
import Testimonials from '../components/Testimonials.vue';
import { products } from '../data/products';

const featuredProducts = products.slice(0, 4);
</script>
