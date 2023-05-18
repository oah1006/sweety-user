<template>
  <div class="tag group-hover:block hidden absolute top-4 right-0 px-1 py-0 text-white text-sm text-center bg-orange-500 rounded-lg">
    <p>{{ props.text }}</p>
  </div>
</template>

<script setup>

const props = defineProps({
  text: String,
})

</script>

<style>

.tag::before {
  content: "";
  border: 10px solid;
  border-color: #f97316 transparent transparent transparent;
  position: absolute;
  left: 30px;
  top: 20px;
}

</style>