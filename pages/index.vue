<template>
  <div class=" flex w-full min-h-screen">
    <div class="w-2/3 ">
      <Slider />

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