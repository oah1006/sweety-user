<template>
  <div class="py-3 flex items-center justify-between">
    <div class="flex items-center gap-4">
      <img src="../../images/product-1.jpg" class="lg:w-24 lg:h-24 w-12 h-12 object-cover" />
      <div>
        <p class="lg:text-lg text-sm font-medium">{{ props.nameProduct }}</p>
        <div class="lg:flex lg:items-center gap-6">
          <p class="text-zinc-500 text-sm">Size: {{ props.nameSizeProduct }}</p>
          <p class="text-zinc-500 text-sm">Giá tiền: {{ formatPrice(props.unitPriceSizeProduct) }} đồng</p>
        </div>
        <div v-for="item_topping in props.item.order_item_options">
          <p class="text-sm text-zinc-500">{{ item_topping.topping?.name }} x {{ item_topping.qty }}</p>
        </div>
      </div>
    </div>
    <div>
      <div class="flex items-center gap-2 text-zinc-500">
        <p>{{ formatPrice(props.unitPrice) }} đồng</p>
        <p class="ml-auto">x {{ props.qty }}</p>
      </div>
      <div>
        <div v-for="item_topping in props.item.order_item_options">
          <div class="flex items-center gap-2 text-zinc-500">
            <p>{{ formatPrice(item_topping.topping?.price) }} đồng</p>
            <p class="ml-auto"> x {{ item_topping.qty }}</p>
          </div>
        </div>
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