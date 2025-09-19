<template>
  <div class="bg-axis-primary">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog class="relative z-40 lg:hidden" @close="open = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-axis-primary pb-12 shadow-xl">
              <div class="flex px-4 pt-5 pb-2">
                <button type="button" class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-axis-tertiary" @click="open = false">
                  <span class="absolute -inset-0.5" />
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="size-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Links -->
              <div class="mt-2">
                 <div class="space-y-6 px-4 py-6">
                    <div v-for="category in navigation.categories" :key="category.name" class="flow-root">
                       <router-link :to="category.href" class="-m-2 block p-2 font-medium text-axis-secondary" @click="open = false">{{ category.name }}</router-link>
                    </div>
                    <div class="flow-root" v-if="!isAuthenticated">
                      <router-link to="/login" class="-m-2 block p-2 font-medium text-axis-secondary" @click="open = false">Login</router-link>
                    </div>
                    <div class="flow-root" v-if="!isAuthenticated">
                      <router-link to="/register" class="-m-2 block p-2 font-medium text-axis-secondary" @click="open = false">Register</router-link>
                    </div>
                    <div class="flow-root" v-if="isAuthenticated && isAdmin">
                      <router-link to="/admin" class="-m-2 block p-2 font-medium text-axis-secondary" @click="open = false">Admin Panel</router-link>
                    </div>
                    <div class="flow-root" v-if="isAuthenticated">
                      <a href="#" @click.prevent="handleLogout" class="-m-2 block p-2 font-medium text-axis-secondary">Logout</a>
                    </div>
                 </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <header class="relative bg-axis-primary">
      <nav aria-label="Top" class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="flex h-16 items-center">
            <button type="button" class="relative rounded-md bg-axis-primary p-2 text-axis-tertiary lg:hidden" @click="open = true">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open menu</span>
              <Bars3Icon class="size-6" aria-hidden="true" />
            </button>

            <!-- Logo -->
            <div class="ml-4 flex lg:ml-0">
              <router-link to="/">
                <span class="sr-only">Axis Tech</span>
                <img class="h-8 w-auto" src="/alexis_icon.png" alt="Axis Tech Logo" />
              </router-link>
            </div>

            <!-- Links -->
            <div class="hidden lg:ml-8 lg:block lg:self-stretch">
              <div class="flex h-full space-x-8">
                <router-link v-for="category in navigation.categories" :key="category.name" :to="category.href" class="flex items-center text-sm font-medium text-axis-secondary hover:text-axis-accent transition-colors">{{ category.name }}</router-link>
              </div>
            </div>

            <div class="ml-auto flex items-center">
              <!-- Login/Register/Admin/Logout -->
              <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <div v-if="isAuthenticated" class="relative ml-3">
                  <div>
                    <button type="button" class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true" @click="userMenuOpen = !userMenuOpen">
                      <span class="absolute -inset-1.5" />
                      <span class="sr-only">Open user menu</span>
                      <span class="text-axis-secondary">{{ user.name }}</span>
                    </button>
                  </div>
                  <Transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <div v-if="userMenuOpen" class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                      <router-link v-if="isAdmin" to="/admin" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" @click="userMenuOpen = false">Admin Panel</router-link>
                      <a href="#" @click.prevent="handleLogout" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" @click="userMenuOpen = false">Logout</a>
                    </div>
                  </Transition>
                </div>
                <template v-else>
                  <router-link to="/login" class="text-sm font-medium text-axis-secondary hover:text-axis-accent">Login</router-link>
                  <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                  <router-link to="/register" class="text-sm font-medium text-axis-secondary hover:text-axis-accent">Register</router-link>
                </template>
              </div>

              <!-- Search -->
              <div class="flex lg:ml-6">
                <a href="#" class="p-2 text-axis-tertiary hover:text-axis-secondary">
                  <span class="sr-only">Search</span>
                  <MagnifyingGlassIcon class="size-6" aria-hidden="true" />
                </a>
              </div>

              <!-- Cart -->
              <div class="ml-4 flow-root lg:ml-6">
                <a href="#" class="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon class="size-6 shrink-0 text-axis-tertiary group-hover:text-axis-secondary" aria-hidden="true" />
                  <span class="ml-2 text-sm font-medium text-axis-secondary group-hover:text-axis-tertiary">0</span>
                  <span class="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const isAuthenticated = computed(() => authStore.isAuthenticated)
const isAdmin = computed(() => authStore.isAdmin)
const user = computed(() => authStore.user)

const navigation = {
  categories: [
    { name: 'Audio', href: '/category/Audio' },
    { name: 'Carga', href: '/category/Carga' },
    { name: 'Accesorios', href: '/category/Accesorios' },
  ],
}

const open = ref(false)

const handleLogout = async () => {
  await authStore.logout()
  router.push({ name: 'home' })
}
</script>
