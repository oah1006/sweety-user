<template>
  <div class="flex">
    <button class="px-4 py-2 text-white text-center text-lg bg-cyan-500 rounded-md ml-auto">
      <p>{{ props.textButton }}</p>
    </button>
  </div>
</template>

<script setup>

const props = defineProps({
  textButton: String,
});

</script>