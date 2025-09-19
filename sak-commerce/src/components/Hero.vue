<template>
  <div class="relative bg-axis-primary overflow-hidden">
    <div class="absolute inset-0 transform translate-y-0 transition-transform duration-100 ease-out" :style="parallaxStyle">
      <img class="w-full h-full object-cover" src="@/assets/hero-background.png" alt="Axis Tech">
      <div class="absolute inset-0 bg-axis-secondary opacity-50"></div>
    </div>
    <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-48 lg:py-64">
      <h1 class="text-4xl font-display font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Diseño que simplifica
        tu día</h1>
      <div class="mt-10">
        <a href="#" class="bg-axis-accent text-white px-8 py-3 rounded-md font-medium">Descubrir Colección</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const parallaxStyle = ref({});

// Adjust the parallax effect strength by changing the division factor
// A smaller number means a stronger effect
parallaxStyle.value = {
  transform: `translateY(${scrollY.value * 0.3}px)`,
};
</script>