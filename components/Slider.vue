<template>
    <div class="relative max-w-3xl pt-6">
        <!-- Left Arrow -->
        <button @click="scroll('left')"
            class="flex justify-center items-center w-6 h-6 absolute left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white  rounded-full shadow-md">
            <UIcon name="i-ph-caret-left-bold" />
        </button>

        <!-- Scrollable Area -->
        <div ref="scrollableDiv"
            class="grid grid-flow-col gap-4 px-12 overflow-x-hidden snap-mandatory snap-x scroll-smooth">
            <div v-for="i in 50" :key="i" class="text-center snap-center">
                <div
                    class="w-16 h-16 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <!-- Inner Circle (Profile Picture) -->
                    <div class="w-[3.7rem] h-[3.7rem] bg-white rounded-full flex items-center justify-center">
                        <img src="https://via.placeholder.com/64" alt="Profile" class="w-14 h-14 rounded-full" />
                    </div>
                </div>
                <span>User {{ i }}</span>
            </div>
        </div>

        <!-- Right Arrow -->
        <button @click="scroll('right')"
            class="flex justify-center items-center w-6 h-6 absolute right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white  rounded-full shadow-md">
            <UIcon name="i-ph-caret-right-bold" />
        </button>
    </div>
</template>
<script setup>

import { ref } from 'vue';

const scrollableDiv = ref(null);

const scroll = (direction) => {
    const scrollAmount = 400;
    console.log(scrollableDiv.value)
    if (direction === 'left') {
        scrollableDiv.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
        scrollableDiv.value.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
};
</script>
