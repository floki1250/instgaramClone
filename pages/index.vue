<template>
  <div class=" flex w-full min-h-screen">
    <div class="w-2/3 ">
      <div class="grid grid-flow-col gap-4 px-12 pt-6 overflow-x-scroll max-w-3xl ">
        <!-- Outer Circle (Gradient Border) -->
        <div v-for="i in 50" class="text-center">
          <div
            class="w-16 h-16 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center">
            <!-- Inner Circle (Profile Picture) -->
            <div class="w-[3.7rem] h-[3.7rem] bg-white rounded-full flex items-center justify-center">
              <img src="https://via.placeholder.com/64" alt="Profile" class="w-14 h-14 rounded-full " />
            </div>
          </div>
          <span>{{ i }}</span>
        </div>


      </div>

      <div class="flex flex-col justify-center items-center gap-4">
        <div v-for="i in 10">
          <Post />
        </div>
      </div>
    </div>
    <div class="w-1/3 ">

    </div>

  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>