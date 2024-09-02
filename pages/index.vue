<template>
  <div class=" flex w-full min-h-screen">
    <div class="w-full md:w-2/3 ">
      <div>
        <Slider />
      </div>


      <div class="flex flex-col justify-center items-center gap-4 ">
        <div v-for="i in 10">
          <Post />
        </div>
      </div>
    </div>
    <div class="hidden md:block w-1/3 ">
      X
    </div>

  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>