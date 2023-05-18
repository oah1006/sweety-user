<template>
  <div class="py-3 flex items-center justify-between">
    <div class="flex items-center gap-4">
      <img src="../../../public/images/product-1.jpg" class="w-24 h-24 object-cover" />
      <div>
        <p class="text-lg font-medium">{{ props.nameProduct }}</p>
        <div class="flex items-center gap-6">
          <p class="text-zinc-500">Size: M</p>
          <p class="text-zinc-500">Giá tiền: {{ formatPrice(props.unitPrice) }} đồng</p>
        </div>
      </div>
    </div>
    <div>
      <div class="flex items-center gap-2 text-zinc-500">
        <p>{{ formatPrice(props.unitPrice) }} đồng</p>
        <p>x {{ props.quantity }}</p>
      </div>
      <p>Tổng: <span class="text-red-600 font-bold">{{ formatPrice(props.unitPrice * props.quantity) }} đồng</span> </p>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  nameProduct: String,
  quantity: String,
  unitPrice: String,
})

function formatPrice(price) {
  return price.toLocaleString("vi-VN")
}

</script>