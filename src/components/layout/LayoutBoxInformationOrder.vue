<template>
  <div class="mt-28 flex items-center gap-6">
    <div class="border border-cyan-300 px-3 py-5 rounded-lg shadow-lg w-1/2 h-72">
      <p class="text-xl text-cyan-500 font-medium border-b border-cyan-500">Địa chỉ nhận hàng</p>
      <div class="mt-3">
        <p class="text-zinc-700">Họ và tên: <span class="text-orange-700 font-bold">{{ props.name }}</span></p>
        <p class="text-zinc-700 mt-3">Số điện thoại: <span class="text-orange-700 font-bold">{{ props.phoneNumber }}</span></p>
        <p class="text-zinc-700 mt-3">Địa chỉ: <span class="text-orange-700 font-bold">{{ props.streetNumber }}, {{ props.street }}, {{ props.ward }}, {{ props.district }}, {{ props.province }}
        </span></p>
      </div>
    </div>
    <div class="border border-cyan-300 px-3 py-5 rounded-lg shadow-lg w-1/2 h-72">
      <p class="text-xl text-cyan-500 font-medium border-b border-cyan-500">Thông tin nhân viên vận chuyển</p>
      <div class="mt-3">
        <div class="flex flex-col items-center justify-center px-10 py-2">
          <img src="../../../public/images/product-1.jpg" class="w-32 h-32 object-cover rounded-full text-center"/>
          <p class="text-green-700 font-bold mt-4">{{ props.nameDeliveryStaff }}</p>
          <p class="text-zinc-500 mt-1">{{ props.phoneNumberDeliveryStaff }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  name: String,
  phoneNumber: String,
  streetNumber: String,
  street: String,
  ward: String,
  district: String,
  province: String,
  nameDeliveryStaff: String,
  phoneNumberDeliveryStaff: String,
})

</script>