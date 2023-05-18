<template>
  <div>
    <div class="flex pt-6 items-center">
      <p class="text-3xl font-medium">Chi tiết đơn hàng</p>
      <div class="flex gap-4 ml-auto items-center">
        <div>
          <p>Mã đơn hàng: <span class="text-red-500 font-bold">ORD00001</span></p>
        </div>
        <span class="border-r-2 border-zinc-400 h-4"></span>
        <p v-if="props.status == 'pending'" class="text-md text-orange-500 font-medium">Đơn hàng đang xác nhận</p>
        <p v-else-if="props.status == 'accepted'" class="text-md text-cyan-500 font-medium">Đơn hàng đã xác nhận</p>
        <p v-else-if="props.status == 'preparing'" class="text-md text-yello-700 font-medium">Đơn hàng đang chuẩn bị</p>
        <p v-else-if="props.status == 'prepared'" class="text-md text-yellow-400 font-medium">Đơn hàng đang xác nhận</p>
        <p v-else-if="props.status == 'delivering'" class="text-md text-violet-500 font-medium">Đơn hàng đang vận chuyển</p>
        <p v-else-if="props.status == 'succeed'" class="text-md text-green-500 font-medium">Đơn hàng thành công</p>
        <p v-else-if="props.status == 'canceled'" class="text-md text-red-500 font-medium">Đơn hàng đã từ chối</p>
        <p v-else class="text-md text-black font-medium">Đơn hàng thất bại</p>
      </div>
    </div>
    <slot name="process-status-order"></slot>
    <slot name="box-information-order"></slot>
    <div class="mt-10">
      <p class="text-sm border-b text-zinc-500 border-zinc-300 py-2">Ngày đặt hàng: {{ props.createdAt }}</p>
      <slot name="table-order"></slot>
    </div>
    <slot name="summary-order"></slot>
  </div>
</template>

<script setup>

const props = defineProps({
  status: String,
  createdAt: String,
})

</script>