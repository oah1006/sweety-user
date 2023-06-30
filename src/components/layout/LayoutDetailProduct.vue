<template>
  <div class="lg:mx-32 py-6">
    <div class="border-b border-zinc-300">
      <p class="text-lg text-zinc-500 font-bold">Menu / Sản phẩm / <span class="text-2xl text-black font-bold text-zinc-700">{{ props.nameProduct }}</span> </p>
    </div>
    <div class="lg:flex md:flex gap-14 px-4 py-10">
      <div class="flex-none lg:w-1/2">
        <slot name="image"></slot>
      </div>
      <div class="grow lg:w-1/2">
        <slot name="information"></slot>
      </div>
    </div>
    <div>
      <slot name="description"></slot>
    </div>
    <div>
      <slot name="related-product">

      </slot>
    </div>
    <slot name="loading"></slot>
  </div>
</template>

<script setup>

const props = defineProps({
  nameProduct: String
})

</script>