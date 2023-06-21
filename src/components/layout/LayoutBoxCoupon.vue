<template>
  <div class="pb-4 px-4">
    <div class="flex mt-4" :class="[props.productCarts.coupon_id == props.coupon.id ? 'bg-cyan-50' : '']">
      <div class="w-1/3 rounded-l-xl relative border-y border-l border-zinc-300 py-4">
        <div class="w-4 h-4 rounded-full bg-white absolute -right-2 -top-2 border-b border-zinc-300"></div>
        <div class="flex justify-center items-center h-full">
          <p class="font-bold text-xl">Sweety</p>
        </div>
        <div class="w-4 h-4 rounded-full bg-white absolute -right-2 -bottom-2 border-t border-zinc-300"></div>
      </div>
      <div class="w-2/3 border-solid border-y border-r border-zinc-300 rounded-r-xl">
        <div class="border-dashed border-l h-full w-full py-4">
          <p class="ml-4 font-bold text-orange-600">{{ props.coupon.name }}</p>
          <p class="ml-4 text-sm text-zinc-500">{{ props.coupon.description }}</p>
          <p @click="applyCoupon(props.coupon.id)" class="ml-4 text-sm underline text-cyan-500 mt-2 cursor-pointer hover:text-cyan-300">Sử dụng ngay</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const emits = defineEmits(['applyCoupon'])

const props = defineProps({
  coupon: Object,
  productCarts: Object
})

function applyCoupon(coupon_id) {
  emits('applyCoupon', coupon_id)
}

</script>