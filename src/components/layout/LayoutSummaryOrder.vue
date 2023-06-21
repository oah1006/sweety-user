<template>
  <div class="mt-10 border border-orange-300 px-3 rounded-lg shadow-lg">
    <div class="text-lg pt-5">
      <div class="flex items-center justify-between">
        <p>Ngày tạo</p>
        <p>{{ props.createdAt }}</p>
      </div>
      <div class="flex items-center justify-between mt-2">
        <p>Tạm tính:</p>
        <p>{{ formatPrice(props.subTotal) }} đồng</p>
      </div>
      <div class="flex items-center justify-between mt-2">
        <p>Phí vận chuyển:</p>
        <p>+ {{ formatPrice(props.shippingFee) }} đồng</p>
      </div>
      <div class="flex items-center justify-between my-2">
        <p>Áp dụng mã giảm giá:</p>
        <p v-if="props.coupon" class="text-cyan-500">- {{ props.coupon }}%</p>
        <p v-else class="text-zinc-500">Không áp dụng mã giảm giá</p>
      </div>
      <div class="flex items-center justify-between pt-1 py-5 border-t border-orange-500">
        <p>Tổng:</p>
        <p>{{ formatPrice(props.total) }} đồng</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  createdAt: String,
  total: String,
  subTotal: String,
  shippingFee: String,
  coupon: String,
})

function formatPrice(price) {
  return price?.toLocaleString("vi-VN")
}

</script>