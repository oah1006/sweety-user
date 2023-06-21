<template>
  <div class="py-3 flex items-center justify-between">
    <div class="flex items-center gap-4">
      <img src="../../../public/images/product-1.jpg" class="w-24 h-24 object-cover" />
      <div>
        <p class="text-lg font-medium">{{ props.nameProduct }}</p>
        <div class="flex items-center gap-6">
          <p class="text-zinc-500">Size: {{ props.nameSizeProduct }}</p>
          <p class="text-zinc-500">Giá tiền: {{ formatPrice(props.unitPriceSizeProduct) }} đồng</p>
        </div>
        <div v-for="item_topping in props.item.order_item_options">
          <p class="text-sm text-zinc-500">{{ item_topping.topping?.name }} x {{ item_topping.qty }}</p>
        </div>
      </div>
    </div>
    <div>
      <div class="flex items-center gap-2 text-zinc-500">
        <p>{{ formatPrice(props.unitPrice) }} đồng</p>
        <p>x {{ props.qty }}</p>
      </div>
      <p>Tổng: <span class="text-red-600 font-bold">{{ formatPrice(props.item.totalPrice * props.item.qty) }} đồng</span> </p>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  nameProduct: String,
  nameSizeProduct: String,
  unitPriceSizeProduct: String,
  qty: String,
  unitPrice: String,
  item: Object
})

function formatPrice(price) {
  return price.toLocaleString("vi-VN")
}

</script>