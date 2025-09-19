<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <Cart />
    <main class="flex-grow pt-16">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Cart from './components/Cart.vue';
</script>
