<template>
  <div @click="useClickRedirectDetail(props.id)">
    <img :src="props.url" class="w-72 h-72 object-cover rounded-2xl border border-zinc-100" />
    <p class="text-zinc-600 text-lg font-medium mt-8">{{ props.nameProduct }}</p>
    <div class="mt-1">
      <p class="text-red-500 font-medium">{{ formatPrice(props.price) }} đồng</p>
      <p class="text-zinc-500 font-medium text-md ml-auto">Size {{ props.product.product_variants[0]?.size }}</p>
    </div>
  </div>
</template>

<script setup>

import {useRouter} from "vue-router";

const props = defineProps({
  nameProduct: String,
  product: Object,
  price: Number,
  url: String,
  id: String,
})

const router = useRouter()

function formatPrice(price) {
  return price.toLocaleString("vi-VN")
}

function useClickRedirectDetail(id) {
  router.push({
    name: 'detail-product',
    params: {
      id: id
    }
  })
}

</script>