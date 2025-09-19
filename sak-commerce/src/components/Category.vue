<template>
  <div class="bg-axis-primary py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <router-link to="/category/Audio" class="flex flex-col items-center">
          <div class="bg-axis-neutral rounded-full p-6">
            <svg class="h-8 w-8 text-axis-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <h3 class="mt-4 text-lg font-medium text-axis-secondary">Audio</h3>
        </router-link>
        <router-link to="/category/Carga" class="flex flex-col items-center">
          <div class="bg-axis-neutral rounded-full p-6">
            <svg class="h-8 w-8 text-axis-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="mt-4 text-lg font-medium text-axis-secondary">Carga</h3>
        </router-link>
        <router-link to="/category/Accesorios" class="flex flex-col items-center">
          <div class="bg-axis-neutral rounded-full p-6">
            <svg class="h-8 w-8 text-axis-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="mt-4 text-lg font-medium text-axis-secondary">Accesorios</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
