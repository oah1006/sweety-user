<template>
  <div class="mx-32 py-6 mt-16">
    <div class="border-b border-zinc-300 ">
      <p class="text-2xl font-bold">Xác nhận đơn hàng</p>
    </div>
    <div class="mt-4 flex gap-4">
      <div class="flex-none w-2/5 sticky top-20 h-full bg-white">
        <p class="text-lg py-2 text-orange-600 font-bold">Thông tin giao hàng</p>
        <slot name="address-customer"></slot>
        <slot name="information-customer-order"></slot>
      </div>
      <div class="w-3/5">
        <slot name="list-product-order"></slot>
        <slot name="button-accept"></slot>
        <p class="mt-20 text-zinc-600 border-t border-zinc-300 py-3">Hiện tại cửa hàng chỉ có phương thức thanh toán là trả tiền mặt sau khi nhận hàng, mong quý khách thông cảm và trải nghiệm dịch vụ thật tốt của chúng tôi</p>
      </div>
    </div>
    <slot name="modal-coupon"></slot>
  </div>
</template>