<template>
  <div class="flex justify-center  " :class="miniDrawer ? 'sm:min-w-16 ' : 'sm:min-w-[15.5rem] '">
    <div class=" fixed bottom-0 left-0 z-50 sm:h-screen bg-white  border-t sm:border-r border-gray-200  "
      :class="miniDrawer ? 'sm:min-w-16 min-w-screen' : 'sm:min-w-[15.5rem] min-w-screen'">
      <div class=" flex flex-row sm:flex-col gap-8 sm:gap-2 px-3 h-16">
        <div class="h-11 mx-3 mt-8 mb-2 hidden sm:flex items-center">
          <img v-show="!miniDrawer" src="/logo_text.svg" class="h-11 w-[110px] " />
          <UIcon v-show="miniDrawer" name="i-ph-instagram-logo" class="w-7 h-7 " />
        </div>

        <NuxtLink to="/" activeClass="font-bold"
          class="flex items-center gap-4 group hover:bg-gray-100 p-3 rounded-xl transition-color duration-500 ease-in-out">
          <UIcon :name="$route.path === '/' ? 'i-ph-house-fill' : 'i-ph-house'" class="w-6 h-6 group-hover:scale-110" />
          <span v-show="!miniDrawer"
            class="transition-all duration-500 ease-in-out text-base hidden sm:block">Home</span>
        </NuxtLink>

        <NuxtLink @click.prevent="miniDrawer = !miniDrawer"
          class="cursor-pointer hidden sm:flex items-center gap-4 group hover:bg-gray-100 p-3 rounded-xl transition-color duration-500 ease-in-out">
          <UIcon :name="miniDrawer ? 'i-ph-magnifying-glass-bold' : 'i-ph-magnifying-glass'"
            class="w-6 h-6 group-hover:scale-110" />
          <span v-show="!miniDrawer"
            class="transition-all duration-500 ease-in-out text-base hidden sm:block">Search</span>
        </NuxtLink>

        <NuxtLink to="/explore" activeClass="font-bold" @click.prevent="miniDrawer = false"
          class="flex items-center gap-4 group hover:bg-gray-100 p-3 rounded-xl transition-all duration-300 ease-in-out">
          <UIcon :name="$route.path === '/explore' ? 'i-ph-compass-fill' : 'i-ph-compass'"
            class="w-6 h-6 group-hover:scale-110" />
          <span v-show="!miniDrawer"
            class="transition-all duration-500 ease-in-out text-base hidden sm:block">Explore</span>
        </NuxtLink>

        <NuxtLink to="/reels" activeClass="font-bold" @click.prevent="miniDrawer = false"
          class="flex items-center gap-4 group hover:bg-gray-100 p-3 rounded-xl transition-all duration-300 ease-in-out">
          <UIcon :name="$route.path === '/reels' ? 'i-ph-monitor-play-fill' : 'i-ph-monitor-play'"
            class="w-6 h-6 group-hover:scale-110" />
          <span v-show="!miniDrawer"
            class="transition-all duration-500 ease-in-out text-base hidden sm:block">Reels</span>
        </NuxtLink>

        <NuxtLink to="/messages" activeClass="font-bold" @click.prevent="miniDrawer = false"
          class="flex items-center gap-4 group hover:bg-gray-100 p-3 rounded-xl transition-all duration-300 ease-in-out">
          <UIcon :name="$route.path === '/messages' ? 'i-ph-paper-plane-tilt-fill' : 'i-ph-paper-plane-tilt'"
            class="w-6 h-6 group-hover:scale-110" />
          <span v-show="!miniDrawer"
            class="transition-all duration-500 ease-in-out text-base hidden sm:block">Messages</span>
        </NuxtLink>

        <NuxtLink to="/notifications" activeClass="font-bold" @click.prevent="miniDrawer = false"
          class="hidden sm:flex items-center gap-4 group hover:bg-gray-100 p-3 rounded-xl transition-all duration-300 ease-in-out">
          <UIcon :name="$route.path === '/notifications' ? 'i-ph-heart-fill' : 'i-ph-heart'"
            class="w-6 h-6 group-hover:scale-110" />
          <span v-show="!miniDrawer"
            class="transition-all duration-500 ease-in-out text-base hidden sm:block">Notifications</span>
        </NuxtLink>

        <NuxtLink activeClass="font-bold" @click.prevent="miniDrawer = false"
          class="flex items-center gap-4 group hover:bg-gray-100 p-3 rounded-xl transition-all duration-300 ease-in-out">
          <UIcon :name="$route.path === '/add-post' ? 'i-ph-plus-circle-fill' : 'i-ph-plus-circle'"
            class="w-6 h-6 group-hover:scale-110" />
          <span v-show="!miniDrawer" class="transition-all duration-500 ease-in-out text-base hidden sm:block">Add
            Post</span>
        </NuxtLink>

        <NuxtLink to="/adam" activeClass="font-bold" @click.prevent="miniDrawer = false"
          class="flex items-center gap-4 group hover:bg-gray-100 p-3 rounded-xl transition-all duration-300 ease-in-out">
          <UAvatar class="w-6 h-6 group-hover:scale-110" src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="Avatar" />
          <span v-show="!miniDrawer"
            class="transition-all duration-500 ease-in-out text-base hidden sm:block">Profile</span>
        </NuxtLink>

        <NuxtLink activeClass="font-bold" @click.prevent="miniDrawer = false"
          class="hidden sm:flex items-center gap-4 group hover:bg-gray-100 p-3 rounded-xl transition-all duration-300 ease-in-out">
          <UIcon :name="$route.path === '/more' ? 'i-ph-list-bold' : 'i-ph-list'"
            class="w-6 h-6 group-hover:scale-110" />
          <span v-show="!miniDrawer"
            class="transition-all duration-500 ease-in-out text-base hidden sm:block">More</span>
        </NuxtLink>
      </div>

      <SearchPopup v-if="false" class="absolute top-0 left-20 w-96" />
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, onMounted, onBeforeUnmount } from 'vue';

const miniDrawer = ref(false);

const updateDrawerState = () => {
  if (typeof window !== 'undefined') {
    miniDrawer.value = window.innerWidth < 1024 && window.innerWidth > 768;
  }
};

watchEffect(updateDrawerState);

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateDrawerState);
    // Initial check on mount
    updateDrawerState();
  }
});

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateDrawerState);
  }
});



</script>

<style scoped>
.xzmilaz {
  box-shadow: 4px 0 24px rgba(0, 0, 0, .15);
}
</style>