<template>
  <div :class="isSearchActive ? 'w-fit' : 'w-64'" class="border-r border-gray-200">
    <div class=" flex gap-2 flex-col h-screen content-center px-4 ">
      <div class="h-11 mx-3  mt-8 mb-2">
        <img v-show="!isSearchActive" src="/logo_text.svg" class="h-11 w-[110px] lg:block hidden" />
        <UIcon v-if="isSearchActive" name="i-ph-instagram-logo" class="w-7 h-7 " />
      </div>

      <NuxtLink to="/" activeClass="font-bold" @click.prevent="isSearchActive = false"
        class="flex gap-4 group hover:bg-gray-100 p-3  rounded-xl transition-color duration-500 ease-in-out">
        <UIcon :name="$route.path === '/' ? 'i-ph-house-fill' : 'i-ph-house'" class="w-6 h-6 group-hover:scale-110" />
        <span v-show="!isSearchActive" class="transition-all duration-500 ease-in-out text-base ">Home</span>
      </NuxtLink>
      <NuxtLink @click.prevent="isSearchActive = !isSearchActive"
        class="cursor-pointer flex gap-4 group hover:bg-gray-100 p-3  rounded-xl transition-color duration-500 ease-in-out">
        <UIcon :name="isSearchActive ? 'i-ph-magnifying-glass-bold' : 'i-ph-magnifying-glass'"
          class="w-6 h-6 group-hover:scale-110" />
        <span v-show="!isSearchActive" class="transition-all duration-500 ease-in-out text-base ">Search</span>
      </NuxtLink>
      <NuxtLink to="/explore" activeClass="font-bold" @click.prevent="isSearchActive = false"
        class="flex gap-4 group hover:bg-gray-100 p-3  rounded-xl transition-all duration-300 ease-in-out">
        <UIcon :name="$route.path === '/explore' ? 'i-ph-compass-fill' : 'i-ph-compass'"
          class="w-6 h-6 group-hover:scale-110" />
        <span v-show="!isSearchActive" class="transition-all duration-500 ease-in-out text-base ">Explore</span>
      </NuxtLink>
      <NuxtLink to="/reels" activeClass="font-bold" @click.prevent="isSearchActive = false"
        class="flex gap-4 group hover:bg-gray-100 p-3  rounded-xl transition-all duration-300 ease-in-out">
        <UIcon :name="$route.path === '/reels' ? 'i-ph-monitor-play-fill' : 'i-ph-monitor-play'"
          class="w-6 h-6 group-hover:scale-110" />
        <span v-show="!isSearchActive" class="transition-all duration-500 ease-in-out text-base ">Reels</span>
      </NuxtLink>
      <NuxtLink to="/messages" activeClass="font-bold" @click.prevent="isSearchActive = false"
        class="flex gap-4 group hover:bg-gray-100 p-3  rounded-xl transition-all duration-300 ease-in-out">
        <UIcon :name="$route.path === '/messages' ? 'i-ph-telegram-logo-fill' : 'i-ph-telegram-logo'"
          class="w-6 h-6 group-hover:scale-110" />
        <span v-show="!isSearchActive" class="transition-all duration-500 ease-in-out text-base ">Messages</span>
      </NuxtLink>
      <NuxtLink to="/Notifications" activeClass="font-bold" @click.prevent="isSearchActive = false"
        class="flex gap-4 group hover:bg-gray-100 p-3  rounded-xl transition-all duration-300 ease-in-out">
        <UIcon :name="$route.path === '/reels' ? 'i-ph-heart-fill' : 'i-ph-heart'"
          class="w-6 h-6 group-hover:scale-110" />
        <span v-show="!isSearchActive" class="transition-all duration-500 ease-in-out text-base ">Notifications</span>
      </NuxtLink>
      <NuxtLink activeClass="font-bold" @click.prevent="isSearchActive = false"
        class="flex gap-4 group hover:bg-gray-100 p-3  rounded-xl transition-all duration-300 ease-in-out">
        <UIcon :name="$route.path === '/reels' ? 'i-ph-plus-circle-fill' : 'i-ph-plus-circle'"
          class="w-6 h-6 group-hover:scale-110" />
        <span v-show="!isSearchActive" class="transition-all duration-500 ease-in-out text-base ">Add Post</span>
      </NuxtLink>
      <NuxtLink to="/profile" activeClass="font-bold" @click.prevent="isSearchActive = false"
        class="flex gap-4 group hover:bg-gray-100 p-3  rounded-xl transition-all duration-300 ease-in-out">
        <UAvatar class="w-6 h-6 group-hover:scale-110" src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar" />

        <span v-show="!isSearchActive" class="transition-all duration-500 ease-in-out text-base ">Profile</span>
      </NuxtLink>
      <NuxtLink activeClass="font-bold" @click.prevent="isSearchActive = false"
        class="flex gap-4 group hover:bg-gray-100 p-3  rounded-xl transition-all duration-300 ease-in-out">
        <UIcon :name="$route.path === '/reels' ? 'i-ph-list-bold' : 'i-ph-list'"
          class="w-6 h-6 group-hover:scale-110" />
        <span v-show="!isSearchActive" class="transition-all duration-500 ease-in-out text-base ">More</span>
      </NuxtLink>
      <SearchPopup v-if="isSearchActive" class="absolute top-0 left-20 w-96" />

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isSearchActive = ref(false);
</script>