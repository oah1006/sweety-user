<template>
  <div>
    <img :src="props.url" class="w-72 h-72 object-cover rounded-2xl border border-zinc-100" />
    <p class="text-zinc-600 text-lg font-medium mt-8">{{ props.nameProduct }}</p>
    <p class="text-red-500 font-medium">{{ formatPrice(props.price) }} đồng</p>
  </div>
</template>

<script setup>

const props = defineProps({
  nameProduct: String,
  price: Number,
  url: String,
})

console.log(props.url)

function formatPrice(price) {
  return price.toLocaleString("vi-VN")
}

</script>